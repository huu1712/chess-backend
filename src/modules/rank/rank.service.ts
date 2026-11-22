import { ConflictException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRankDto } from './dto/create-rank.dto';
import { UpdateRankDto } from './dto/update-rank.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { response } from 'src/utils/util';
import { HTTP_STATUS } from 'src/utils/httpStatus';

@Injectable()
export class RankService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createRankDto: CreateRankDto) {
    const { code, label, rating } = createRankDto;
    const existingRank = await this.prisma.rank.findUnique({
      where: {
        code,
      },
    })
    if (existingRank) {
      throw new ConflictException('Rank code already in use');
    }
    const rank = await this.prisma.rank.create({
      data: {
        code,
        label,
        rating,
      },
      select: {
        id: true,
        code: true,
        label: true,
        rating: true,
      },
    });

    const result = response(HTTP_STATUS.CREATED.code, HTTP_STATUS.CREATED.message, 'Rank created successfully', rank);
    return result;
  }

  async findOne(id: string) {
    const rank = await this.prisma.rank.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        code: true,
        label: true,
        rating: true,
      },
    })
    const result = response(HTTP_STATUS.OK.code, HTTP_STATUS.OK.message, 'Rank fetched successfully', rank);
    return result;
  }

  async findAll() {
    const ranks = await this.prisma.rank.findMany({
      select: {
        id: true,
        code: true,
        label: true,
        rating: true,
      },
    });
    const result = response(HTTP_STATUS.OK.code, HTTP_STATUS.OK.message, 'Ranks fetched successfully', ranks);
    return result;
  }

  async update(id: number, updateRankDto: UpdateRankDto) {
    return `This action updates a #${id} rank`;
  }

  async remove(id: string) {
    const existingRank = await this.prisma.rank.findUnique({
      where: {
        id,
      },
    });
    if (!existingRank) {
      throw new NotFoundException('Rank not found');
    }
    const rank = await this.prisma.rank.delete({
      where: {
        id,
      },
    });
    const result = response(HTTP_STATUS.OK.code, HTTP_STATUS.OK.message, 'Rank deleted successfully', rank);
    return result;
  }
}
