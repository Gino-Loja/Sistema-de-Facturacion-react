<template>
    <div class="modal fade modal-md" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">


                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                                aria-selected="true">Home</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane"
                                aria-selected="false">Profile</button>
                        </li>

                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                            tabindex="0">
                            <form class="row g-3 ">
                                <div class="col-12">
                                    <label for="inputNanme4" class="form-label">Codigo</label>
                                    <input required="true" v-model="codigo" name="input1" type="text"
                                        class="form-control form-control-sm" id="inputNanme4">
                                </div>
                                <div class="col-12">
                                    <label for="inputEmail4" class="form-label">descripcion</label>
                                    <input required="true" v-model="descripcion" type="email" name="input2"
                                        class="form-control form-control-sm" id="inputEmail4">
                                </div>
                                <div class="col-12">
                                    <label for="inputPassword4" class="form-label">Precio</label>
                                    <input required="true" v-model="precio" type="number" name="input3"
                                        class="form-control form-control-sm" id="inputPassword4">
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Cantidad</label>
                                    <input required="true" v-model="cantidad" type="number" name="input4"
                                        class="form-control form-control-sm" id="inputAddress">
                                </div>

                            </form>
                        </div>
                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                            tabindex="0">
                            <select v-model="categoria" class="form-select" aria-label="Default select example">
                                <option v-for="(item, i) in categorias" v-bind:key="i" selected> {{ item.descripcion }}</option>

                            </select>
                        </div>

                    </div>


                </div>
              
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button data-bs-dismiss="modal" type="submit" @click="enviarProducto" class="btn btn-primary">Guargar Producto</button>

                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: ['categorias'],
    data() {
        return {

            codigo: '',
            descripcion: '',
            precio: 1,
            cantidad: 1,
            categoria: ''

        }
    },
    methods: {
        enviarProducto() {
            this.$emit('guardarProducto', {
                codigo: this.codigo,
                descripcion: this.descripcion,
                precio: this.precio,
                cantidad: this.cantidad,
                categoria: this.categoria
            })
       
        }
    }
}
</script>