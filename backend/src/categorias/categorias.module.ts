import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { CategoriaSchemas } from './schemas/categoria.schemas';
import { MongooseModule } from '@nestjs/mongoose'
@Module({
  imports: [MongooseModule.forFeature([{ name: 'categoria', schema: CategoriaSchemas }])],
  controllers: [CategoriasController],
  providers: [CategoriasService]
})
export class CategoriasModule { }
