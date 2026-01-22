import { Controller } from '@nestjs/common';
import { ProdutosService } from '../services/produtos.service';

@Controller('/produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}
}
