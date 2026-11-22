import { UserService } from '../user/user.service';
import { CreateUserDto, LoginUserDto } from '../user/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
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
    login(loginUserDto: LoginUserDto): Promise<{
        message: string;
        status: string;
        data: {
            accessToken: string;
            user: {
                id: string;
                email: string;
                username: string;
                rank: string;
                rating: number;
            };
        };
    }>;
}
