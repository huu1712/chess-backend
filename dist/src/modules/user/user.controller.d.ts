import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
    findOne(id: string): string;
    update(id: string, updateUserDto: any): string;
    remove(id: string): string;
}
