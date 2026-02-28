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
import { ApiProperty } from '@nestjs/swagger';

@Entity(`tb_usuarios`)
@Check('"ano" <= 2027')
export class Usuario {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @Column({ length: 150, nullable: false })
  @ApiProperty()
  senha: string;

  @Column({ length: 150, nullable: false })
  @ApiProperty()
  carro: string;

  @Column({ type: 'int', nullable: true })
  @ApiProperty()
  ano: number;

  @UpdateDateColumn()
  @ApiProperty()
  data_cadastro: Date;

  @ApiProperty()
  @OneToMany(() => Produtos, (produtos) => produtos.usuario)
  produto: Produtos[];
}
