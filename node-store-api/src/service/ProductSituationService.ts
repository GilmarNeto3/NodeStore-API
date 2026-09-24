import { AppDataSource } from "../data-source";
import { ProductSituation } from "../entity/ProductSituation";

export class ProductSituationService {
  private repository = AppDataSource.getRepository(ProductSituation);

  async create(data: { name: string }) {
    const situation = this.repository.create(data);
    return this.repository.save(situation);
  }

  async findAll() {
    return this.repository.find({ order: { id: "ASC" } });
  }

  async findById(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, data: Partial<{ name: string }>) {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}