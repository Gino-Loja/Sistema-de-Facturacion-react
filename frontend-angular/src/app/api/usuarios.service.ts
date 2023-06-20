import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }
    
  private BASE_URL = "http://localhost:4000/"


  async ObtenerUsuarios() {
    const usuarios = await axios.get(this.BASE_URL+"usuarios")
    return usuarios
  }

  async GuardarUsuario( usuario:{}){
    return await axios.post(this.BASE_URL+"usuarios/crear", usuario)
  }
  async EliminarUsuario(id:string){
    return await axios.delete(this.BASE_URL+`usuarios/eliminar?usuariosId=${id}`)
  }

  
  async ActualizarUsuario(id:string, usuario:{}){
    return await axios.put(this.BASE_URL+`usuarios/actualizar?usuariosId=${id}`,usuario);
  }
}
