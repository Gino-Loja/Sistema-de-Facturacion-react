import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  private BASE_URL = "http://localhost:4000/"
  constructor() {

  }

  async ObtenerProductos() {
    const product = await axios.get(this.BASE_URL+"productos")
    return product
  }

  async GuardarProducto( producto:{}){
    return await axios.post(this.BASE_URL+"productos/crear", producto)
  }
  async EliminarProducto(id:string){
    return await axios.delete(this.BASE_URL+`productos/eliminar?productoId=${id}`)
  }

  async ObtenerCategorias( ){
    return await axios.get(this.BASE_URL+"categorias")
  }
  async ActualizarProducto(id:string, product:{}){
    return await axios.put(this.BASE_URL+`productos/actualizar?productoId=${id}`,product);
  }
}
