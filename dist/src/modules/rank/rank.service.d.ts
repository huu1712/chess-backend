import { CreateRankDto } from './dto/create-rank.dto';
import { UpdateRankDto } from './dto/update-rank.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class RankService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createRankDto: CreateRankDto): Promise<{
        code: number;
        status: string;
        message: string;
        data: any;
    }>;
    findOne(id: string): Promise<{
        code: number;
        status: string;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        code: number;
        status: string;
        message: string;
        data: any;
    }>;
    update(id: number, updateRankDto: UpdateRankDto): Promise<string>;
    remove(id: string): Promise<{
        code: number;
        status: string;
        message: string;
        data: any;
    }>;
}
