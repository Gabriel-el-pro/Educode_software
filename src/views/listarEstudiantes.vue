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
        <th scope="col">Rol</th>
        <th scope="col">Nombres</th>
        <th scope="col">Apellidos</th>
        <th scope="col">Sexo</th>
        <th scope="col">Usuario</th>
        <th scope="col">Contraseña</th>
        <th scope="col">Accion</th>
     <!--   <th scope="col">Menu</th>
        <th scope="col">Rutas</th>-->
       
      </tr>
    </thead>
    <tbody>
           
      <tr v-for="(roles, index) in items" :key="roles._id" >
        <th>{{roles._id}}</th>
        <td>{{roles.rol}}</td>
        <td>{{roles.name}}</td>
        <td>{{roles.last_name}}</td>
        <td>{{roles.gender}}</td>
        <td>{{roles.username}}</td>
        <td>{{roles.password}}</td>
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
      <div class="con-content"  style="margin-top:20px">
        <input v-model="input1" type="name" style="background-color:#EDE2E2;"  class="form-control input_pass" placeholder="Digite El Nombre Del Rol.">
      </div>
      <div class="con-content" style="margin-top:20px">
        <input v-model="input2" type="name" style="background-color:#EDE2E2;"  class="form-control input_pass" placeholder="Digite El Nombre.">
      </div>
      <div class="con-content" style="margin-top:20px">
        <input v-model="input3" type="name" style="background-color:#EDE2E2;"  class="form-control input_pass" placeholder="Digite El Apellido.">
      </div>
      <div class="con-content" style="margin-top:20px">
        <b-form-select style="background-color:#EDE2E2;"  class="form-control input_pass"    v-model="sexo">
                                        
          <option disabled selected>Sexo</option>
          <option value="M">M</option>
          <option value="F">F</option>
         </b-form-select>
      </div>
      <div class="con-content" style="margin-top:20px">
        <input v-model="input5" type="name" style="background-color:#EDE2E2;"  class="form-control input_pass" placeholder="Digite El Usuario.">
      </div>
    
      <div class="con-content" style="margin-top:20px">
        <input v-model="input6" type="name" style="background-color:#EDE2E2;"  class="form-control input_pass" placeholder="Digite La Contraseña.">
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
          input1: null,
          input2: null,
          input3: null,
          sexo: null,
          input5: null,
          input6: null,
          active3: false,
          items: null,
          heading: 'Lista De Estudiantes Registrados',
          icon: 'pe-7s-note2 icon-gradient bg-tempting-azure',
          subheading: 'Listado De Los Diferentes Registros..',
          posEditar:0,
         
        }
      },
  
      mounted() {
        
           this.cargar()
      },
      methods: {
       
        guardarEdicion(){
        this.items[this.posEditar].rol=this.input1
        this.items[this.posEditar].name=this.input2
        this.items[this.posEditar].last_name=this.input3
        this.items[this.posEditar].gender=this.sexo
        this.items[this.posEditar].username=this.input5
        this.items[this.posEditar].password=this.input6
        let json={
          'people':{rol:this.items[this.posEditar].rol,
            name:this.items[this.posEditar].name,
            last_name:this.items[this.posEditar].last_name,
            gender:this.items[this.posEditar].gender,
            username:this.items[this.posEditar].username,
            password:this.items[this.posEditar].password,
          }
        }
       // console.log( this.items[this.posEditar]._id)
       this.axios.put('https://trackappserver.herokuapp.com/peoples/'+this.items[this.posEditar]._id, json )
      .then((response) => {
       console.log(response)
       this.active3=false
this.cargar()
        })
      },
        editar(id){
          this.posEditar=id;
          this.active3=true
         this.input1=this.items[id].rol
         this.input2=this.items[id].name
         this.input3=this.items[id].last_name
         this.sexo=this.items[id].gender
         this.input5=this.items[id].username
         this.input6=this.items[id].password
         
        },
        openNotification(position = null, color) {
            this.noti = this.$vs.notification({
              progress: 'auto',
              color,
              position,
              title: "El Usuario Fue Eliminado Con Exito",
            })
          },
        cargar(){
          this.axios.get('https://trackappserver.herokuapp.com/peoples')
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
       this.axios.delete('https://trackappserver.herokuapp.com/peoples/'+id)
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
    