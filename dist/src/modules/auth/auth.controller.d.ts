import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from '../user/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    getProfile(req: any): any;
}
