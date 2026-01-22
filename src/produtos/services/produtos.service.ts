import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produtos } from '../entities/produto.entity';
import { DeleteResult, Repository } from 'typeorm';
import { ProdutoComDescontoDTO } from '../dto/produto-com-desconto.dto';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produtos)
    private produtosRepository: Repository<Produtos>,
  ) {}
  async getAllProducts(): Promise<Produtos[]> {
    return await this.produtosRepository.find({
      relations: { categoria: true },
    });
  }
  async getProductById(id: number): Promise<Produtos> {
    const produto = await this.produtosRepository.findOne({
      where: { id },
      relations: { categoria: true },
    });
    if (!produto)
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    return produto;
  }
  async getDiscountByCarYear(ano: number): Promise<ProdutoComDescontoDTO[]> {
    const desconto = ano <= 2005 ? 0.2 : ano <= 2015 ? 0.1 : 0.05;

    const produtos = await this.produtosRepository.find({
      relations: { categoria: true },
    });
    return produtos.map((produto) => ({
      id: produto.id,
      nome: produto.nome,
      categoria: produto.categoria,
      precoOriginal: produto.preco,
      precoComDesconto: Number((produto.preco * (1 - desconto)).toFixed(2)),
    }));
  }

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
