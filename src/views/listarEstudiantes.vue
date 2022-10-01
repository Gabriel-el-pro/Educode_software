<template>
    <div >
      <div  class="box-style box-style-l">
      <div id="personal" class="">
          <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
          <div class="row justify-content-md-center">
            
              <div class="col-md-12">
                  <div class="main-card mb-3 card">
  
  
                      <div class="card-header-tab card-header">
                         <div class="card-header-title font-size-lg text-capitalize text-center font-weight-normal">
                            <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                               Tabla Con El Listado
                           </div>
                      </div>
  
  
  
                          <div class="px-5 py-5">
                            <v-row>
                              <v-col col="8"
                              xs="4">                           
                            <div >
      <table class="table table-striped" >
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Nombres</th>
        <th scope="col">Apellidos</th>
        <th scope="col">Sexo</th>
        <th scope="col">Grado</th>
        <th scope="col">Fecha De Nacimiento</th>
        <th scope="col">Accion</th>
     <!--   <th scope="col">Menu</th>
        <th scope="col">Rutas</th>-->
       
      </tr>
    </thead>
    <tbody>
           
      <tr v-for="(roles, index) in items" :key="roles._id" >
        <th>{{roles._id}}</th>
        <td>{{roles.name}}</td>
        <td><button @click="editar(index)"><b-icon icon="pen-fill" font-scale="2" variant="success"></b-icon></button>
          
          <button  @click="eliminar(roles._id)" style="margin-left:30px;"> <b-icon icon="trash-fill" font-scale="2" style="color:rgba(243, 71, 71, 0.719)"></b-icon></button>
       </td>
      <!-- <td>{{roles.menu}}</td>
        <td>{{roles.rutas}}</td>--> 
      </tr>
    </tbody>
  </table>
  <div class="center">
    <vs-dialog  prevent-close  width="300px" not-center v-model="active3" >
      
      <template #header >
        <h4 class="not-margin">
          Editar Nombre Del <b>Rol</b>
        </h4>
      </template>
    
    
      <div class="con-content" >
        <input v-model="input1" type="name" style="background-color:#EDE2E2;"  class="form-control input_pass" placeholder="Digite El Nombre Del Rol.">
      </div>
    
      <template #footer>
        <div class="con-footer">
          <vs-button @click="guardarEdicion()">
            Guardar Cambios
          </vs-button>
          <vs-button @click="active3=false" >
            Cancelar
          </vs-button>
        </div>
      </template>
    </vs-dialog></div>
  </div>
  </v-col>
  </v-row>
                            
        </div>
          </div>
         </div>
          </div>
          </div>
        
      </div>
      
    </div>
    </template>
    
    <script>
     // import axios from 'axios'
     import PageTitle from "../Layout/Components/PageTitle.vue";
    export default {
      components: {
              PageTitle
          },
    
      data() {
        return {
          input1: '',
          active3: false,
          items: null,
          heading: 'Lista De Estudiantes Registrados',
          icon: 'pe-7s-note2 icon-gradient bg-tempting-azure',
          subheading: 'Listado De Los Diferentes Registros..',
          posEditar:0
        }
      },
  
      mounted() {
        
           this.cargar()
      },
      methods: {
        guardarEdicion(){
          this.items[this.posEditar].name=this.input1
          console.log( this.items[this.posEditar]._id)
         this.axios.put('https://trackappserver.herokuapp.com/roles/'+this.items[this.posEditar]._id, this.items[this.posEditar] )
        .then((response) => {
         console.log(response)
  
          })
        },
        editar(id){
          this.posEditar=id;
          this.active3=true
         this.input1=this.items[id].name
         
        },
        openNotification(position = null, color) {
            this.noti = this.$vs.notification({
              progress: 'auto',
              color,
              position,
              title: "El Estudiante Fue Eliminado Con Exito",
            })
          },
        cargar(){
          this.axios.get('https://trackappserver.herokuapp.com/roles')
        .then((response) => {
         console.log(response)
      //  for (let i = 0; i < response.data.length; i++) {
         // console.log(response.data[i]._id)
          
      //  }
           //console.log(response.data[length].name)
           this.items=response.data;
  
          })
        },
         eliminar(id){
       this.axios.delete('https://trackappserver.herokuapp.com/roles/'+id)
        .then((response) => {console.log(response.data)
          this.cargar()
          this.openNotification('bottom-center', '#036F0E')
        })
         // this.cargar()
         }
      }
    }
    </script>
    
    <style scoped>
     .container{
      height: auto;
      max-width: auto;
     }
  
  
     
  .con-footer{
   display: flex;
   align-items: center;
   justify-content: flex-end}
   .vs-button{
     margin: 0px}
     .vs-button__content{
       padding: 10px 30px}
     .vs-button{
       margin-left: 10px}
  .not-margin{
   margin :0px;
   font-weight :normal;
   padding :10px;
   padding-bottom: 0px}
  .con-content{
   width: 100%}
   p{
     font-size: .8rem;
     padding: 0px 10px}
   .vs-checkbox-label{
     font-size :.8rem}
   .vs-input-parent{
     width: 100%}
   .vs-input-content{
     margin: 10px 0px;
     width: calc(100%)}
     .vs-input{
       width: 100%}
  .footer-dialog{
   display: flex;
   align-items :center;
   justify-content :center;
   flex-direction :column;
   width :calc(100%)}
   .new{
     margin: 0px;
     margin-top :20px;
     padding: 0px;
     font-size: .7rem}
   .vs-button{
     margin :0px}
    </style>
    