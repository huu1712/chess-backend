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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async register(createUserDto) {
        const { email, username, avatar, firstName, lastName, password, rankId } = createUserDto;
        const existingEmail = await this.prisma.user.findUnique({
            where: {
                email: email.toLowerCase().trim(),
            },
        });
        if (existingEmail) {
            throw new common_1.ConflictException('Email already in use');
        }
        const existingUsername = await this.prisma.user.findUnique({
            where: {
                username: username.toLowerCase().trim(),
            },
        });
        if (existingUsername) {
            throw new common_1.ConflictException('Username already in use');
        }
        const rank = await this.prisma.rank.findUnique({
            where: {
                id: rankId,
            },
        });
        if (!rank) {
            throw new common_1.NotFoundException('Rank not found');
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
    async findByIdentifier(identifier) {
        const value = identifier.toLowerCase().trim();
        const result = await this.prisma.user.findFirst({
            where: {
                OR: [{ email: value }, { username: value }],
            },
        });
        return result;
    }
    async findById(id) {
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
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, _updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map