import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from './entities/produto.entity';
import { ProdutosService } from './services/produtos.service';
import { ProdutosController } from './controllers/produtos.controller';
import { CategoriasModule } from '../categorias/categorias.module';
import { UsuarioModule } from '../usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Produtos]),
    CategoriasModule,
    UsuarioModule,
  ],
  providers: [ProdutosService],
  controllers: [ProdutosController],
  exports: [],
})
export class ProdutosModule {}
