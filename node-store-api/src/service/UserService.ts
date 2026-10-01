import bcrypt from "bcrypt";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export class UserService {
  private repository = AppDataSource.getRepository(User);

  async create(data: { name: string; email: string; password: string; situationId: number }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = this.repository.create({ ...data, password: hashedPassword });
    const saved = await this.repository.save(user);
    const { password, ...userWithoutPassword } = saved;
    return userWithoutPassword;
  }

  async findAll() {
    const users = await this.repository.find({
      relations: { situation: true },
      order: { id: "ASC" },
    });
    return users.map(({ password, ...rest }) => rest);
  }

  async findById(id: number) {
    const user = await this.repository.findOne({
      where: { id },
      relations: { situation: true },
    });
    if (!user) return null;
    const { password, ...rest } = user;
    return rest;
  }

  async update(id: number, data: Partial<{ name: string; email: string; situationId: number }>) {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}