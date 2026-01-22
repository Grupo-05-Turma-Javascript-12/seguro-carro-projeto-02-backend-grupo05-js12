import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from './entities/produto.entity';
import { ProdutosService } from './services/produtos.service';
import { ProdutosController } from './controllers/produtos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Produtos])],
  providers: [ProdutosService],
  controllers: [ProdutosController],
  exports: [],
})
export class ProdutosModule {}
