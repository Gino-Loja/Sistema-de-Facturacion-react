<template>
  <main>
    <!-- <style>
      .navbar-nav .nav-link.active {
        color: rgb(102, 90, 190);
        /* Cambia el color del texto al color deseado */
      }
    </style> -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">S-F</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">

              <router-link class="nav-link" aria-current="page" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link " aria-current="page" to="/productos">Productos</router-link>

            </li>
            <li class="nav-item">
              <router-link class="nav-link " aria-current="page" to="/usuarios">Usuarios</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link " aria-current="page" to="/clientes">Clientes</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link " aria-current="page" to="/categorias">Categorias</router-link>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Facturas
              </a>
              <ul class="dropdown-menu">
                <li><router-link class="nav-link " aria-current="page" to="/nueva-factura">Nueva Factura</router-link>
                </li>
                <li><router-link class="nav-link " aria-current="page" to="/ver-facturas">Ver Facturas</router-link>
                </li>

              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

  </main>
</template>
  