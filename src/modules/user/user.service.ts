import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async register(createUserDto: CreateUserDto) {
    const { email, username, avatar, firstName, lastName, password, rankId } = createUserDto;

    const existingEmail = await this.prisma.user.findUnique({
      where: {
        email: email.toLowerCase().trim(),
      },
    });
    if (existingEmail) {
      throw new ConflictException('Email already in use');
    }

    const existingUsername = await this.prisma.user.findUnique({
      where: {
        username: username.toLowerCase().trim(),
      },
    });
    if (existingUsername) {
      throw new ConflictException('Username already in use');
    }

    const rank = await this.prisma.rank.findUnique({
      where: {
        id: rankId,
      },
    });
    if (!rank) {
      throw new NotFoundException('Rank not found');
    }

    const passwordHash = await bcrypt.hash(password.trim(), 10);

    const user = await this.prisma.user.create({
      data: {
        email: email.toLowerCase().trim(),
        username: username.toLowerCase().trim(),
        firstName: firstName?.trim(),
        lastName: lastName?.trim(),
        avatar: avatar?.toLowerCase().trim(),
        passwordHash,
        rankId: rank.id,
        rating: rank.rating,
      },
      select: {
        id: true,
        email: true,
        username: true,
        firstName: true,
        lastName: true,
        avatar: true,
        rating: true,
      },
    });

    const result = {
      message: 'User created successfully',
      status: 'success',
      data: user,
    };

    return result;
  }

  async findByIdentifier(identifier: string) {
    const value = identifier.toLowerCase().trim();
    const result = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: value }, { username: value }],
      },
    });

    return result;
  }

  async findById(id: string) {
    const result = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        email: true,
        username: true,
        firstName: true,
        lastName: true,
        avatar: true,
        rating: true,
      },
    });

    return result;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    const result = users.map((user) => ({
      id: user.id,
      email: user.email,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: user.avatar,
      rating: user.rating,
    }));

    return {
      message: 'Users fetched successfully',
      status: 'success',
      data: result,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, _updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
