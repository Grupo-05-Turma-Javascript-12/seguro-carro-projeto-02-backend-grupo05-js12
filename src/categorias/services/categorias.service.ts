import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorias } from '../entities/categoria.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categorias)
    private categoriasRepository: Repository<Categorias>,
  ) {}
  async getAllcategories(): Promise<Categorias[]> {
    return await this.categoriasRepository.find();
  }
  async getCategoryById(id: number): Promise<Categorias> {
    const categoria = await this.categoriasRepository.findOne({
      where: { id },
    });
    if (!categoria)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );
    return categoria;
  }
  async createCategory(categoria: Categorias): Promise<Categorias> {
    return this.categoriasRepository.save(categoria);
  }
  async updateCategory(categoria: Categorias): Promise<Categorias> {
    await this.getCategoryById(categoria.id);
    return this.categoriasRepository.save(categoria);
  }
  async deleteCategory(id: number): Promise<DeleteResult> {
    await this.getCategoryById(id);
    return await this.categoriasRepository.delete(id);
  }
}
