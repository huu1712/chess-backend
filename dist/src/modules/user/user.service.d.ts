import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    register(createUserDto: CreateUserDto): Promise<{
        message: string;
        status: string;
        data: {
            id: string;
            email: string;
            username: string;
            avatar: string | null;
            firstName: string | null;
            lastName: string | null;
            rating: number;
        };
    }>;
    findByIdentifier(identifier: string): Promise<{
        id: string;
        email: string;
        username: string;
        avatar: string | null;
        firstName: string | null;
        lastName: string | null;
        passwordHash: string;
        rating: number;
        createdAt: Date;
        updatedAt: Date;
        rankId: string;
    } | null>;
    findById(id: string): Promise<{
        id: string;
        email: string;
        username: string;
        avatar: string | null;
        firstName: string | null;
        lastName: string | null;
        rating: number;
    } | null>;
    findAll(): Promise<{
        message: string;
        status: string;
        data: {
            id: string;
            email: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
            avatar: string | null;
            rating: number;
        }[];
    }>;
    findOne(id: number): string;
    update(id: number, _updateUserDto: any): string;
    remove(id: number): string;
}
