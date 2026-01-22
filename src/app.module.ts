import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Produtos } from './produtos/entities/produto.entity';
import { Categorias } from './categorias/entities/categoria.entity';
import { Usuario } from './usuarios/entities/usuario.entity';
import { ProdutosModule } from './produtos/produtos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { UsuarioModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: `mysql`,
      host: `localhost`,
      port: 3306,
      username: `dev`,
      password: `dev@145R`,
      database: `db_segurocarro`,
      entities: [Produtos, Categorias, Usuario],
      synchronize: true,
    }),
    ProdutosModule,
    CategoriasModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
