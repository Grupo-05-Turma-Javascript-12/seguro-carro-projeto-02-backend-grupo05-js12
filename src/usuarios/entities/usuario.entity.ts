import { IsEmail, IsNotEmpty } from 'class-validator';
import {
  Check,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Produtos } from '../../produtos/entities/produto.entity';

@Entity(`tb_usuarios`)
@Check('"ano" <= 2027')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  @Column({ length: 255, nullable: false })
  email: string;

  @IsNotEmpty()
  @Column({ length: 150, nullable: false })
  senha: string;

  @Column({ length: 150, nullable: false })
  carro: string;

  @Column({ type: 'int', nullable: true })
  ano: number;

  @UpdateDateColumn()
  data_cadastro: Date;

  @OneToMany(() => Produtos, (produtos) => produtos.usuario)
  produto: Produtos[];
}
