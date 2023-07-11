<template>
    <div class="container-fluid pt-1">
        <div class="d-flex flex-row shadow-sm p-1 mb-2 bg-body-tertiary rounded">
            <div class="p-2">
                <button type="button" @click="prueba" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    Agregar Cliente
                </button>
            </div>

        </div>
        <div class="d-flex flex-row mb-3 shadow-sm p-3 mb-2 bg-body-tertiary rounded">
            <div class="container">
                <div class="card m-1">

                    <div class="card-body table-responsive">
                        <vue-good-table :key="componentKey" :columns="columns" :rows="rows" :line-numbers="true"
                            :search-options="{
                                enabled: true
                            }" :pagination-options="{
    enabled: true
}
    " styleClass="vgt-table condensed">
                            <template v-slot:table-row="props">
                                <div v-if="props.column.field == 'accion'"
                                    class=" d-flex justify-content-evenly w-50 aling-self-left ms-auto">
                                    <button @click="prueba(props)" class="btn btn-info btn-sm" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal-editar">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button @click="eliminarProducto(props.row._id)" class="btn btn-warning btn-sm">
                                        <i class="bi bi-trash3-fill"></i>
                                    </button>
                                </div>
                            </template>
                        </vue-good-table>

                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>

import { clientes } from '../api/service'

export default {
    name: 'PageCliente',
    data() {
        return {
            nuevoProducto: 'hola mi amigo',
            listaCategorias: null,
            componentKey: 0,
            editarProducto: {},
            columns: [
                {
                    label: 'Codigo',
                    field: 'codigo',
                    tdClass: 'text-center',

                    thClass: 'text-center',

                },

                {
                    label: 'Email',
                    field: 'email',
                    tdClass: 'text-center',

                    thClass: 'text-center',
                },
                {
                    label: 'Telefono',
                    field: 'telefono',
                    type: 'number',
                    tdClass: 'text-center',

                    thClass: 'text-center',
                },
                {
                    label: 'Ciudad',
                    field: 'direccion.ciudad',
                    type: 'number',
                    tdClass: 'text-center',

                    thClass: 'text-center',
                },
                {
                    label: 'Pais',
                    field: 'direccion.Pais',
                    type: 'number',
                    tdClass: 'text-center',

                    thClass: 'text-center',
                },
                {
                    label: 'Accion',
                    field: 'accion',
                    type: 'number'
                }
            ],
            rows: [],
        }
    },
    components: {


    },
    mounted() {

        this.obtenerProductos()
        this.obtenerCategorias();


    },
    methods: {
        guardarProducto(producto) {
            clientes.post('/crear', producto).then(() => {
                this.obtenerProductos()
            });
        },
        obtenerProductos() {
            clientes
                .get('/')
                .then(response => {
                    this.rows = [...response.data.usuarios]
                    this.componentKey += 1
                })
        },
        obtenerCategorias() {
            clientes
                .get('/')
                .then(
                    (response) => {
                        this.listaCategorias = response.data.categoria

                    })
        },
        prueba(rows) {
            this.$refs.modalEditar.registrarProducto(rows.row);
        },
        actualizarProducto(data) {
            clientes.put(`/actualizar?productoId=${data.id}`, data.producto).then(() => {
                this.obtenerProductos()
            })
        },
        eliminarProducto(id) {
            clientes.delete(`/eliminar?productoId=${id}`).then(() => {
                this.obtenerProductos()
            })
        }
    }, provide() {
        return {
            setDato: (data) => {
                this.nuevoProducto = data

            },
            getDato: () => (this.nuevoProducto)
        };
    },

}
</script>