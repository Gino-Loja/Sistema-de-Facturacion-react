import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import {MongooseModule} from '@nestjs/mongoose'
import { UsuarioSchema } from './schemas/usuarios.schemas';
@Module({
  imports:[MongooseModule.forFeature([{name:'usuarios', schema: UsuarioSchema}])],
  providers: [UsuariosService],
  controllers: [UsuariosController]
})
export class UsuariosModule {}
