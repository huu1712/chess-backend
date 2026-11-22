export declare class CreateUserDto {
    email: string;
    username: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    password: string;
    rankId: string;
}
export declare class LoginUserDto {
    identifier: string;
    password: string;
}
