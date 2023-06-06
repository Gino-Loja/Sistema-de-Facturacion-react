

import axios from 'axios';

export const productos = axios.create({
    baseURL: 'http://localhost:4000/productos/',
});

export const categorias = axios.create({
    baseURL: 'http://localhost:4000/categorias',
});

export const usuarios = axios.create({
    baseURL: 'http://localhost:4000/usuarios',
});

export const clientes = axios.create({
    baseURL: 'http://localhost:4000/clientes',
});
