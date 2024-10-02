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
exports.Assignment = void 0;
const typeorm_1 = require("typeorm");
const region_entity_1 = require("../region/region.entity");
const question_entity_1 = require("../question/entities/question.entity");
const cycle_entity_1 = require("../cycle/cycle.entity");
let Assignment = class Assignment {
};
exports.Assignment = Assignment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Assignment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => region_entity_1.Region),
    __metadata("design:type", region_entity_1.Region)
], Assignment.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => question_entity_1.Question),
    __metadata("design:type", question_entity_1.Question)
], Assignment.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cycle_entity_1.Cycle),
    __metadata("design:type", cycle_entity_1.Cycle)
], Assignment.prototype, "cycle", void 0);
exports.Assignment = Assignment = __decorate([
    (0, typeorm_1.Entity)({ name: 'assignment' })
], Assignment);
//# sourceMappingURL=assignment.entity.js.map