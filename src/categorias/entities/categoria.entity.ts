import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produtos } from '../../produtos/entities/produto.entity';
import { ApiProperty } from '@nestjs/swagger';

// Define a entidade Categoria mapeada para a tabela 'tb_categorias'
@Entity({ name: 'tb_categorias' })
export class Categorias {
  //cria a chave primaria auto incrementavel
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  //Cria a coluna nome do tipo string com tamanho maximo de 255 caracteres e não nula
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  nome: string;

  //Cria a coluna descricao do tipo string com tamanho maximo de 500 caracteres e nula
  @Column({ length: 500, nullable: true })
  @ApiProperty()
  descricao: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  @ApiProperty()
  @ManyToOne(() => Produtos, (produtos) => produtos.categoria)
  produto: Produtos[];
}
