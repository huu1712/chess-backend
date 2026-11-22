import { RankService } from './rank.service';
import { CreateRankDto } from './dto/create-rank.dto';
import { UpdateRankDto } from './dto/update-rank.dto';
export declare class RankController {
    private readonly rankService;
    constructor(rankService: RankService);
    create(createRankDto: CreateRankDto): Promise<{
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
    findOne(id: string): Promise<{
        code: number;
        status: string;
        message: string;
        data: any;
    }>;
    update(id: string, updateRankDto: UpdateRankDto): Promise<string>;
    remove(id: string): Promise<{
        code: number;
        status: string;
        message: string;
        data: any;
    }>;
}
