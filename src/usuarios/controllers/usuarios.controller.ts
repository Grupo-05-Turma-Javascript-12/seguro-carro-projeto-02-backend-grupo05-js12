import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../entities/usuario.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuários')
@Controller('/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuarioService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  getAllUsers(): Promise<Usuario[]> {
    return this.usuariosService.getAllUsers();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  getUserById(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
    return this.usuariosService.getUserById(id);
  }

  @Get('/email/:email')
  @HttpCode(HttpStatus.OK)
  getUserByEmail(@Param('email') email: string): Promise<Usuario> {
    return this.usuariosService.getUserByEmail(email);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuariosService.createUser(usuario);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  updateUser(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuariosService.updateUser(usuario);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.deleteUser(id);
  }
}
