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

@Entity({ name: 'tb_produtos' })
export class Produtos {
  //cria a chave primaria auto incrementavel
  @PrimaryGeneratedColumn()
  id: number;

  //Cria a coluna nome do tipo string com tamanho maximo de 255 caracteres e não nula
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  //Cria a coluna descricao do tipo string com tamanho maximo de 500 caracteres e nula
  @Column({ length: 500, nullable: true })
  descricao: string;

  //Cria a coluna preco do tipo decimal, com precisão de 10 dígitos e 2 casas decimais, não nula
  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  preco: number;

  //Cria a coluna esta_ativo do tipo booleano, com valor padrão true
  @Column({ type: 'boolean', default: true })
  esta_ativo: boolean;

  @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ManyToOne(() => Categorias, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categorias;
}
