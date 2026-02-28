import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Produtos } from '../../produtos/entities/produto.entity';
import { Categorias } from '../../categorias/entities/categoria.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Injectable()
export class DevService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: `mysql`,
      host: `localhost`,
      port: 3306,
      username: `dev`,
      password: `dev@145R`,
      database: `db_segurocarro`,
      entities: [Produtos, Categorias, Usuario],
      synchronize: true,
    };
  }
}
