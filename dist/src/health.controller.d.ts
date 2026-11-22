import { PrismaService } from './prisma/prisma.service';
export declare class HealthController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    checkHealth(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<number>;
}
