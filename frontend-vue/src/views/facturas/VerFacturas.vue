<template>
    <div class="container-fluid pt-1">
        <div class="d-flex flex-row shadow-sm p-1 mb-2 bg-body-tertiary rounded">
            <div class="p-2">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Agregar factura
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

import { categorias } from '../../api/service'

export default {
    name: 'VerFacturas',
    data() {
        return {
            nuevoProducto: 'hola mi amigo',
            listaCategorias: null,
            componentKey: 0,
            editarProducto: {},
            columns: [
                {
                    label: 'Vendedor',
                    field: 'vendededor',
                    tdClass: 'text-center',

                    thClass: 'text-center',

                },

                {
                    label: 'Cliente',
                    field: 'cliente',
                    tdClass: 'text-center',

                    thClass: 'text-center',
                }, {
                    label: 'N. Productos',
                    field: 'cliente',
                    tdClass: 'text-center',

                    thClass: 'text-center',
                }, {
                    label: 'Pago',
                    field: 'pago',
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
            categorias.post('/crear', producto).then(() => {
                this.obtenerProductos()
            });
        },
        obtenerProductos() {
            categorias
                .get('/')
                .then(response => {
                    this.rows = [...response.data.usuarios]
                    this.componentKey += 1
                })
        },
        obtenerCategorias() {
            categorias
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
            categorias.put(`/actualizar?productoId=${data.id}`, data.producto).then(() => {
                this.obtenerProductos()
            })
        },
        eliminarProducto(id) {
            categorias.delete(`/eliminar?productoId=${id}`).then(() => {
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