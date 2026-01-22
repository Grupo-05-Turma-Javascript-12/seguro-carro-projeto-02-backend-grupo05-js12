import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Categorias } from '../entities/categoria.entity';
import { CategoriasService } from '../services/categorias.service';

@Controller('/categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) { }

@Get()
@HttpCode(HttpStatus.OK)
getAllCategories(): Promise<Categorias[]> {
    return this.categoriasService.getAllcategories();
 }

@Get('/:id')
@HttpCode(HttpStatus.OK)
getCategoryById(@Param('id', ParseIntPipe) id: number): Promise<Categorias> {
  return this.categoriasService.getCategoryById(id);
}

@Post()
@HttpCode(HttpStatus.CREATED)
createCategory(@Param() categorias: Categorias): Promise<Categorias> {
  return this.categoriasService.createCategory(categorias);
}

@Put()
@HttpCode(HttpStatus.OK)
updateCategory(@Body() categorias: Categorias): Promise<Categorias> {
  return this.categoriasService.updateCategory(categorias);
}

@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
deleteCategory(@Param('id', ParseIntPipe) id: number){
  return this.categoriasService.deleteCategory(id);
}

}