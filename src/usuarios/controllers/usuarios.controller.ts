import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../entities/usuario.entity';

@Controller('/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuarioService) {}
  @Get()
  getAllUsers(): Promise<Usuario[]> {
    return this.usuariosService.getAllUsers();
  }

  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
    return this.usuariosService.getUserById(id);
  }

  @Get('/email/:email')
  getUserByEmail(@Param('email') email: string): Promise<Usuario> {
    return this.usuariosService.getUserByEmail(email);
  }

  @Post()
  createUser(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuariosService.createUser(usuario);
  }

  @Put('/:id')
  updateUser(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuariosService.updateUser(usuario);
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.deleteUser(id);
  }
}
