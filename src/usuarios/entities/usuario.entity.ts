import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @IsNotEmpty()
  @Column({ length: 150, nullable: false })
  carro: string;

  @Column({ type: `int`, nullable: true })
  ano: string;

  @CreateDateColumn()
  data_cadastro: Date;
}
