import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutosService } from '../services/produtos.service';
import { Produtos } from '../entities/produto.entity';
import { ProdutoComDescontoDTO } from '../dto/produto-com-desconto.dto';

@Controller('/produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAllProducts(): Promise<Produtos[]> {
    return this.produtosService.getAllProducts();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  getProductById(@Param('id', ParseIntPipe) id: number): Promise<Produtos> {
    return this.produtosService.getProductById(id);
  }

  @Get('/descontos/:ano')
  @HttpCode(HttpStatus.OK)
  getDiscountByCarYear(
    @Param('ano', ParseIntPipe) ano: number,
  ): Promise<ProdutoComDescontoDTO[]> {
    return this.produtosService.getDiscountByCarYear(ano);
  }

  @Get('/ativos')
  @HttpCode(HttpStatus.OK)
  getActiveProducts(): Promise<Produtos[]> {
    return this.produtosService.getActiveProducts();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createProduct(@Body() produtos: Produtos): Promise<Produtos> {
    return this.produtosService.createProduct(produtos);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  updateProduct(@Body() produtos: Produtos): Promise<Produtos> {
    return this.produtosService.updateProduct(produtos);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.produtosService.deleteProduct(id);
  }
}
