import { Injectable } from '@angular/core';
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private BASE_URL = "http://localhost:4000/"
  constructor() {

  }

  async ObtenerCategorias() {
    const categoria = await axios.get(this.BASE_URL + "categorias")
    return categoria
  }
  async GuardarCategoria(categoria: {}) {
    return await axios.post(this.BASE_URL + "categorias/crear", categoria)
  }
  async EliminarCategoria(id: string) {
    return await axios.delete(this.BASE_URL + `categorias/eliminar?productoId=${id}`)
  }
  async ActualizarCategoria(id: string, categoria: {}) {
    return await axios.put(this.BASE_URL + `categorias/actualizar?productoId=${id}`, categoria);
  }
}
