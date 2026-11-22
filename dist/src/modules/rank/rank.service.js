"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const util_1 = require("../../utils/util");
const httpStatus_1 = require("../../utils/httpStatus");
let RankService = class RankService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRankDto) {
        const { code, label, rating } = createRankDto;
        const existingRank = await this.prisma.rank.findUnique({
            where: {
                code,
            },
        });
        if (existingRank) {
            throw new common_1.ConflictException('Rank code already in use');
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
        const result = (0, util_1.response)(httpStatus_1.HTTP_STATUS.CREATED.code, httpStatus_1.HTTP_STATUS.CREATED.message, 'Rank created successfully', rank);
        return result;
    }
    async findOne(id) {
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
        });
        const result = (0, util_1.response)(httpStatus_1.HTTP_STATUS.OK.code, httpStatus_1.HTTP_STATUS.OK.message, 'Rank fetched successfully', rank);
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
        const result = (0, util_1.response)(httpStatus_1.HTTP_STATUS.OK.code, httpStatus_1.HTTP_STATUS.OK.message, 'Ranks fetched successfully', ranks);
        return result;
    }
    async update(id, updateRankDto) {
        return `This action updates a #${id} rank`;
    }
    async remove(id) {
        const existingRank = await this.prisma.rank.findUnique({
            where: {
                id,
            },
        });
        if (!existingRank) {
            throw new common_1.NotFoundException('Rank not found');
        }
        const rank = await this.prisma.rank.delete({
            where: {
                id,
            },
        });
        const result = (0, util_1.response)(httpStatus_1.HTTP_STATUS.OK.code, httpStatus_1.HTTP_STATUS.OK.message, 'Rank deleted successfully', rank);
        return result;
    }
};
exports.RankService = RankService;
exports.RankService = RankService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RankService);
//# sourceMappingURL=rank.service.js.map