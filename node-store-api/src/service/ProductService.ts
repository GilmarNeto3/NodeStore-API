import { AppDataSource } from "../data-source";
import { Product } from "../entity/Product";

interface PaginationParams {
  page?: number;
  limit?: number;
}

export class ProductService {
  private repository = AppDataSource.getRepository(Product);

  async create(data: { name: string; productCategoryId: number; productSituationId: number }) {
    const product = this.repository.create(data);
    return this.repository.save(product);
  }

  async findAll({ page = 1, limit = 10 }: PaginationParams) {
    const [products, total] = await this.repository.findAndCount({
      relations: ["category", "situation"],
      skip: (page - 1) * limit,
      take: limit,
      order: { id: "DESC" },
    });

    return {
      data: products,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findById(id: number) {
    return this.repository.findOne({
      where: { id },
      relations: ["category", "situation"],
    });
  }

  async update(id: number, data: Partial<{ name: string; productCategoryId: number; productSituationId: number }>) {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}