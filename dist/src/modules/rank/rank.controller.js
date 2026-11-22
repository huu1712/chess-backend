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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankController = void 0;
const common_1 = require("@nestjs/common");
const rank_service_1 = require("./rank.service");
const create_rank_dto_1 = require("./dto/create-rank.dto");
const update_rank_dto_1 = require("./dto/update-rank.dto");
let RankController = class RankController {
    constructor(rankService) {
        this.rankService = rankService;
    }
    create(createRankDto) {
        return this.rankService.create(createRankDto);
    }
    findAll() {
        return this.rankService.findAll();
    }
    findOne(id) {
        return this.rankService.findOne(id);
    }
    update(id, updateRankDto) {
        return this.rankService.update(+id, updateRankDto);
    }
    remove(id) {
        return this.rankService.remove(id);
    }
};
exports.RankController = RankController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rank_dto_1.CreateRankDto]),
    __metadata("design:returntype", void 0)
], RankController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RankController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RankController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rank_dto_1.UpdateRankDto]),
    __metadata("design:returntype", void 0)
], RankController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RankController.prototype, "remove", null);
exports.RankController = RankController = __decorate([
    (0, common_1.Controller)('rank'),
    __metadata("design:paramtypes", [rank_service_1.RankService])
], RankController);
//# sourceMappingURL=rank.controller.js.map