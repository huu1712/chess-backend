import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto, LoginUserDto } from '../user/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  register(createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.userService.findByIdentifier(
      loginUserDto.identifier,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid identifier');
    }

    const isPasswordValid = await bcrypt.compare(
      loginUserDto.password.trim(),
      user.passwordHash,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      username: user.username,
    });

    return {
      message: 'Login successful',
      status: 'success',
      data: {
        accessToken,
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          rank: user.rankId,
          rating: user.rating,
        },
      },
    };
  }
}
