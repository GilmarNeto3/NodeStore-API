"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const Situation_1 = require("./Situation");
@(0, typeorm_1.Entity)("users")
class User {
    @(0, typeorm_1.PrimaryGeneratedColumn)()
    id;
    @(0, typeorm_1.Column)({ type: "varchar", length: 255 })
    name;
    @(0, typeorm_1.Column)({ type: "varchar", length: 255, unique: true })
    email;
    @(0, typeorm_1.Column)({ type: "varchar", length: 255 })
    password;
    @(0, typeorm_1.ManyToOne)(() => Situation_1.Situation, (situation) => situation.users)
    @(0, typeorm_1.JoinColumn)({ name: "situationId" })
    situation;
    @(0, typeorm_1.Column)()
    situationId;
    @(0, typeorm_1.CreateDateColumn)()
    createdAt;
    @(0, typeorm_1.UpdateDateColumn)()
    updatedAt;
}
exports.User = User;
//# sourceMappingURL=User.js.map