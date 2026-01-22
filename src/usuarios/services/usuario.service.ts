import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

//tranforma em servico do nest
@Injectable()
export class UsuarioService {
  deleteUser(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateUser(usuario: Usuario): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }
  //(buscar por id) + tratar quando não existe
  createUser(usuario: Usuario): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }
  getUserByEmail(email: string): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }
  getUserById(id: number): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }
  getAllUsers(): Promise<Usuario[]> {
    throw new Error('Method not implemented.');
  }
  //conecta o service na tabela
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  // cria um novo usuario
  async create(usuario: Usuario): Promise<Usuario> {
    return await this.usuarioRepository.save(usuario);
  }

  //Lista todos os usuarios
  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  //(buscar por id) + tratar quando não existe
  async findById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ id });

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    return usuario;
  }

  async update(id: number, dados: Partial<Usuario>): Promise<Usuario> {
    const usuario = await this.findById(id);

    const usuarioAtualizado = this.usuarioRepository.merge(usuario, dados);
    return await this.usuarioRepository.save(usuarioAtualizado);
  }

  async remove(id: number): Promise<void> {
    await this.findById(id);
    await this.usuarioRepository.delete(id);
  }
}
