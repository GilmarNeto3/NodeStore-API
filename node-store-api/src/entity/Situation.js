"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Situation = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
@(0, typeorm_1.Entity)("situations")
class Situation {
    @(0, typeorm_1.PrimaryGeneratedColumn)()
    id;
    @(0, typeorm_1.Column)({ type: "varchar", length: 255 })
    nameSituation;
    @(0, typeorm_1.OneToMany)(() => User_1.User, (user) => user.situation)
    users;
    @(0, typeorm_1.CreateDateColumn)()
    createdAt;
    @(0, typeorm_1.UpdateDateColumn)()
    updatedAt;
}
exports.Situation = Situation;
//# sourceMappingURL=Situation.js.map