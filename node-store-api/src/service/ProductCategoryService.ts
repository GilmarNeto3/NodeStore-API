import { AppDataSource } from "../data-source";
import { ProductCategory } from "../entity/ProductCategory";

export class ProductCategoryService {
  private repository = AppDataSource.getRepository(ProductCategory);

  async create(data: { name: string }) {
    const category = this.repository.create(data);
    return this.repository.save(category);
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