<!-- <template>
  <div class="d-flex flex-row mb-3 shadow-sm p-3 mb-2 bg-body-tertiary rounded">
    <div class="container">
      <div class="card m-1">

        <div class="card-body table-responsive">
          <vue-good-table :columns="columns" :rows="rows" :line-numbers="true" :search-options="{
            enabled: true
          }" :pagination-options="{
  enabled: true
}
  " styleClass="vgt-table condensed" v-on:row-click="onRowClick">
            <template v-slot:table-row="props">
              <div v-if="props.column.field == 'accion'"
                class=" d-flex justify-content-evenly w-50 aling-self-left ms-auto">
                <button v-on:click="nada(props)" class="btn btn-info btn-sm" data-bs-toggle="modal"
                  data-bs-target="#exampleModal-editar">
                  <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn btn-warning btn-sm">
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </div>
            </template>
          </vue-good-table>

        </div>

      </div>
    </div>

  </div>
</template>

<script>



export default {

  name: 'TablaProducto',
  props: ['listaProductos'],
  inject: ['setDato'],
  data() {
    return {

      producto:{},
      columns: [
        {
          label: 'Codigo',
          field: 'codigo',
          tdClass: 'text-center',

          thClass: 'text-center',

        },
        {
          label: 'Descripcion',
          field: 'descripcion',
          type: 'string',
          tdClass: 'text-center',

          thClass: 'text-center',
        },

        {
          label: 'Categoria',
          field: 'categoria',
          tdClass: 'text-center',

          thClass: 'text-center',
        },
        {
          label: 'Precio',
          field: 'precio',
          type: 'number',
          tdClass: 'text-center',

          thClass: 'text-center',
        },
        {
          label: 'Stock',
          field: 'cantidad',
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
      rows: this.listaProductos,


    }
  }, 
  methods: {
    onRowClick(params) {
      params.row
      console.log(params.row)
    },
    nada(row){
     this.setDato(row.row)
    }
  }, mounted() {

  },
  watch: {
    listaProductos: function (newProductos) {
      this.rows = newProductos;
    }
  },


};
</script>

<style>
.vgt-wrap__footer::before {
  height: 100%;
  margin: auto;
  text-align: center;
  font-size: 10px;
  background: #000;

}
</style> -->