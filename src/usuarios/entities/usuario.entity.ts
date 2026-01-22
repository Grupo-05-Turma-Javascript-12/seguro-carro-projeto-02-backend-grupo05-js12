import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Produtos } from '../../produtos/entities/produto.entity';

@Entity(`tb_usuarios`)
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  email: string;

  @IsNotEmpty()
  @Column({ length: 150, nullable: false })
  senha: string;

  @OneToMany(() => Produtos, (produtos) => produtos.usuario)
  produto: Produtos[];

  @Column({ type: `int`, nullable: true })
  ano: string;

  @CreateDateColumn()
  data_cadastro: Date;
}
