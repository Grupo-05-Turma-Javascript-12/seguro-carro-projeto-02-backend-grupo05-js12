import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Categorias } from '../../categorias/entities/categoria.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_produtos' })
export class Produtos {
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

  //Cria a coluna preco do tipo decimal, com precisão de 10 dígitos e 2 casas decimais, não nula
  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  @ApiProperty()
  preco: number;

  //Cria a coluna esta_ativo do tipo booleano, com valor padrão true
  @IsNotEmpty()
  @Column({ type: 'boolean', nullable: false })
  @ApiProperty()
  esta_ativo: boolean;

  @ApiProperty()
  @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ApiProperty()
  @ManyToOne(() => Categorias, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categorias;
}
