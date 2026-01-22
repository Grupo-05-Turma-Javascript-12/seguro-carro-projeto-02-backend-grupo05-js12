import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produtos } from '../entities/produto.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produtos)
    private produtosRepository: Repository<Produtos>,
  ) {}
  async getAllProducts(): Promise<Produtos[]> {
    return await this.produtosRepository.find();
  }
  async getProductById(id: number): Promise<Produtos> {
    const produto = await this.produtosRepository.findOne({
      where: { id },
    });
    if (!produto)
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    return produto;
  }
  async getDiscountByCarYear() {}
  async getActiveProducts(): Promise<Produtos[]> {
    return await this.produtosRepository.find({
      where: { esta_ativo: true },
    });
  }
  async createProduct(produto: Produtos): Promise<Produtos> {
    return this.produtosRepository.save(produto);
  }
  async updateProduct(produto: Produtos): Promise<Produtos> {
    await this.getProductById(produto.id);
    return await this.produtosRepository.save(produto);
  }
  async deleteProduct(id: number): Promise<DeleteResult> {
    await this.getProductById(id);
    return this.produtosRepository.delete(id);
  }
}
