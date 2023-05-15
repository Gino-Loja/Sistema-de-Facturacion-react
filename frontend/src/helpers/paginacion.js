export const paginacion = (ListaUsuarios, paginaActual, corte) => {

  return ListaUsuarios().slice(paginaActual, paginaActual + corte);
};
