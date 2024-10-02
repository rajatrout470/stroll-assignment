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
exports.QuestionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const question_entity_1 = require("./entities/question.entity");
const assignment_entity_1 = require("../assignment/assignment.entity");
const region_entity_1 = require("../region/region.entity");
const cycle_entity_1 = require("../cycle/cycle.entity");
let QuestionService = class QuestionService {
    constructor(questionRepository, cycleRepository, assignmentRepository, regionRepository) {
        this.questionRepository = questionRepository;
        this.cycleRepository = cycleRepository;
        this.assignmentRepository = assignmentRepository;
        this.regionRepository = regionRepository;
    }
    async createQuestion(question) {
        return await this.questionRepository.save(question);
    }
    async assignQuestions() {
        const regions = await this.regionRepository.find();
        for (const region of regions) {
            const cycle = await this.getCurrentCycle(region);
            const question = await this.getQuestionForCycle(region, cycle);
            await this.assignmentRepository.save({
                region,
                question,
                cycle,
            });
        }
    }
    async getCurrentCycle(region) {
        const currentDate = new Date();
        return await this.cycleRepository.findOne({
            where: { region, startTime: (0, typeorm_2.LessThanOrEqual)(currentDate) },
            order: { startTime: "DESC" },
        });
    }
    async getQuestionForCycle(region, cycle) {
        const currentTime = new Date();
        const question = await this.questionRepository.find({ where: region });
        const elapsedTime = currentTime.getTime() - cycle.startTime.getTime();
        const cycleDuration = cycle.duration * 86400000;
        const cycleIndex = Math.floor(elapsedTime / cycleDuration) % question.length;
        return question[cycleIndex];
    }
};
exports.QuestionService = QuestionService;
exports.QuestionService = QuestionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(question_entity_1.Question)),
    __param(1, (0, typeorm_1.InjectRepository)(cycle_entity_1.Cycle)),
    __param(2, (0, typeorm_1.InjectRepository)(assignment_entity_1.Assignment)),
    __param(3, (0, typeorm_1.InjectRepository)(region_entity_1.Region)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], QuestionService);
//# sourceMappingURL=question.service.js.map