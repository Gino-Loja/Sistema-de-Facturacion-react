import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private BASE_URL = "http://localhost:4000/"
  constructor() {

  }

  async ObtenerClientes() {
    const cliente = await axios.get(this.BASE_URL + "clientes")
    return cliente
  }
  async GuardarCliente(cliente: {}) {
    return await axios.post(this.BASE_URL + "clientes/crear", cliente)
  }
  async EliminarCliente(id: string) {
    return await axios.delete(this.BASE_URL + `clientes/eliminar?productoId=${id}`)
  }
  async ActualizarCliente(id: string, cliente: {}) {
    return await axios.put(this.BASE_URL + `clientes/actualizar?productoId=${id}`, cliente);
  }
}
