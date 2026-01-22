import { Controller } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';

@Controller('/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuarioService) {}
}
