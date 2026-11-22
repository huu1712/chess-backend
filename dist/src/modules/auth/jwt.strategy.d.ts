import { Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: {
        sub: string;
        username: string;
    }): Promise<{
        id: string;
        email: string;
        username: string;
        avatar: string | null;
        firstName: string | null;
        lastName: string | null;
        rating: number;
    }>;
}
export {};
