import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

//tranforma em servico do nest
@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async createUser(usuario: Usuario): Promise<Usuario> {
    return await this.usuarioRepository.save(usuario);
  }

  async getAllUsers(): Promise<Usuario[]> {
    return await this.usuarioRepository.find({ relations: { produto: true } });
  }

  async getUserById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
      relations: { produto: true },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    return usuario;
  }

  async getUserByEmail(email: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { email } });
    if (!usuario)
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);
    return usuario;
  }

  async updateUser(usuario: Usuario): Promise<Usuario> {
    await this.getUserById(usuario.id);
    return await this.usuarioRepository.save(usuario);
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    await this.getUserById(id);
    return await this.usuarioRepository.delete(id);
  }
}
