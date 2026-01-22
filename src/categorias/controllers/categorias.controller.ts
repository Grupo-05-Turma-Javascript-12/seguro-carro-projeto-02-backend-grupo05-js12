import { Controller } from '@nestjs/common';
import { CategoriasService } from '../services/categorias.service';

@Controller('/categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}
}
