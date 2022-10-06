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
                                 Formulario De Registro
                             </div>
                        </div>
    
    
    
                            <div class="px-5 py-5">
                              <v-row>
                                <v-col col="8"
                                xs="4">                           
                              <div >
     

                                <v-row align="center" justify="center">
                                    <v-col cols="12" sm="8">
                                      <v-col cols="12" sm="12">
                                        
                                        <b-form-select    v-model="menu">
                                        
                                          <option value="">Rol</option>
                                          <option value="Docente">Docente</option>
                                          <option value="Estudiante">Estudiante</option>
                                          <option value="Administrador">Administrador</option>
                                         </b-form-select>
                                      </v-col>
                                <!--  menu de docente  -->
                                      <div v-if="menu=='Docente'">
                                     <v-row>
                                     <v-col cols="12" sm="6">
                                      <v-text-field
                                      v-model="name"
                                      label="Digite Nombres"
                                      outlined
                                      dense
                                      color="blue"
                                      autocomplete="false"
                                     class="mt-4"
                                    />
                                     </v-col>
                                     <v-col cols="12" sm="6">
                                      <v-text-field
                                      v-model="apellido"
                                      label="Digite Apellidos"
                                      outlined
                                      dense
                                      color="blue"
                                      autocomplete="false"
                                     class="mt-4"
                      
                                    />
                                     </v-col>
                                     </v-row>
        
        
        
        
        
        
        
        
                                     <v-row>
                                      <v-col cols="12" sm="6">
                                        
                                        <b-form-select    v-model="selected">
                                        
                                          <option disabled selected>Sexo</option>
                                          <option value="M">M</option>
                                          <option value="F">F</option>
                                         </b-form-select>
                                      </v-col>
                                      
                                      
                                        
                                        <v-col cols="12" sm="6">
                                            <v-text-field
                                            v-model="titulo"
                                            label="Titulo"
                                            outlined
                                            dense
                                            color="blue"
                                          autocomplete="false"
                                          
                                          
                                          />
                                          </v-col>
                                          <v-col cols="12" sm="6">
                                            <v-text-field
                                            v-model="asignatura"
                                            label="Asignatura"
                                            outlined
                                            dense
                                            color="blue"
                                          autocomplete="false"
                                          
                                          
                                          />
                                          </v-col>
                                          <v-col cols="12" sm="6">
                                            <v-text-field
                                            v-model="usuario"
                                            label="usuario"
                                            outlined
                                            dense
                                            color="blue"
                                          autocomplete="false"
                                          
                                          
                                          /></v-col>
                                          <v-col cols="12" sm="6">
                                            <v-text-field
                                            v-model="contrasena1"
                                            type="password"
                                            label="Contraseña"
                                            outlined
                                            dense
                                            color="blue"
                                          autocomplete="false"
                                          
                                          
                                          />
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                          <v-text-field
                                          v-model="contrasena2"
                                          type="password"
                                          label="Confirme La Contraseña"
                                          outlined
                                          dense
                                          color="blue"
                                        autocomplete="false"
                                        
                                        
                                        />
                                      </v-col>
                                      </v-row>
                                      <center> <b-button @click=" crear()"  variant="info" ><b-icon icon="sd-card" font-scale="2"></b-icon>  Guardar</b-button></center>
                                    </div>
                               <!--  menu de estudiante  -->

                                    <div v-if="menu=='Estudiante'">
                                      <v-row>
                                        <v-col cols="12" sm="6">
                                         <v-text-field
                                         v-model="name"
                                         label="Digite Nombres"
                                         outlined
                                         dense
                                         color="blue"
                                         autocomplete="false"
                                        class="mt-4"
                                       />
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                         <v-text-field
                                         v-model="apellido"
                                         label="Digite Apellidos"
                                         outlined
                                         dense
                                         color="blue"
                                         autocomplete="false"
                                        class="mt-4"
                         
                                       />
                                        </v-col>
                                        </v-row>
           
           
           
           
           
           
           
           
                                        <v-row>
                                         <v-col cols="12" sm="6">
                                           
                                           <b-form-select    v-model="selected">
                                           
                                             <option disabled selected>Sexo</option>
                                             <option value="M">M</option>
                                             <option value="F">F</option>
                                            </b-form-select>
                                         </v-col>
                                         <v-col cols="12" sm="6">
                                           <v-text-field
                                           label="Grado"
                                           outlined
                                           dense
                                           color="blue"
                                         autocomplete="false"
                                          
                                         
                                         />
                                         </v-col>
                                         
                                           <v-col cols="12" sm="6">
                                             <v-text-field
                                             v-model="fn"
                                             label="Fecha de Nacimiento"
                                             outlined
                                             dense
                                             color="blue"
                                           autocomplete="false"
                                            type="Date"
                                           
                                           />
                                           </v-col>
                                           
                                             <v-col cols="12" sm="6">
                                               <v-text-field
                                               v-model="asignatura"
                                               label="Asignatura"
                                               outlined
                                               dense
                                               color="blue"
                                             autocomplete="false"
                                             
                                             
                                             />
                                             </v-col>
                                             <v-col cols="12" sm="12">
                                               <v-text-field
                                               v-model="usuario"
                                               label="usuario"
                                               outlined
                                               dense
                                               color="blue"
                                             autocomplete="false"
                                             
                                             
                                             /></v-col>
                                             <v-col cols="12" sm="6">
                                               <v-text-field
                                               v-model="contrasena1"
                                               type="password"
                                               label="Contraseña"
                                               outlined
                                               dense
                                               color="blue"
                                             autocomplete="false"
                                             
                                             
                                             />
                                           </v-col>
                                           <v-col cols="12" sm="6">
                                             <v-text-field
                                             v-model="contrasena2"
                                             type="password"
                                             label="Confirme La Contraseña"
                                             outlined
                                             dense
                                             color="blue"
                                           autocomplete="false"
                                           
                                           
                                           />
                                         </v-col>
                                         </v-row>
                                         <center> <b-button @click=" crear()"  variant="info" ><b-icon icon="sd-card" font-scale="2"></b-icon>  Guardar</b-button></center>
                                     
                                     </div>



                           <!--  menu de administardor   -->
                                     <div v-if="menu=='Administrador'">
                                      <v-row>
                                        <v-col cols="12" sm="6">
                                         <v-text-field
                                         v-model="name"
                                         label="Digite Nombres"
                                         outlined
                                         dense
                                         color="blue"
                                         autocomplete="false"
                                        class="mt-4"
                                       />
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                         <v-text-field
                                         v-model="apellido"
                                         label="Digite Apellidos"
                                         outlined
                                         dense
                                         color="blue"
                                         autocomplete="false"
                                        class="mt-4"
                         
                                       />
                                        </v-col>
                                        </v-row>
           
           
           
           
           
           
           
           
                                        <v-row>
                                         <v-col cols="12" sm="6">
                                           
                                           <b-form-select    v-model="selected">
                                           
                                             <option disabled selected>Sexo</option>
                                             <option value="M">M</option>
                                             <option value="F">F</option>
                                            </b-form-select>
                                         </v-col>
                                         
                                         
                                           
                                           
                                            
                                             <v-col cols="12" sm="6">
                                               <v-text-field
                                               v-model="usuario"
                                               label="usuario"
                                               outlined
                                               dense
                                               color="blue"
                                             autocomplete="false"
                                             
                                             
                                             /></v-col>
                                             <v-col cols="12" sm="6">
                                               <v-text-field
                                               v-model="contrasena1"
                                               type="password"
                                               label="Contraseña"
                                               outlined
                                               dense
                                               color="blue"
                                             autocomplete="false"
                                             
                                             
                                             />
                                           </v-col>
                                           <v-col cols="12" sm="6">
                                             <v-text-field
                                             v-model="contrasena2"
                                             type="password"
                                             label="Confirme La Contraseña"
                                             outlined
                                             dense
                                             color="blue"
                                           autocomplete="false"
                                           
                                           
                                           />
                                         </v-col>
                                         </v-row>
                                         <center> <b-button @click=" crear()"  variant="info" ><b-icon icon="sd-card" font-scale="2"></b-icon>  Guardar</b-button></center>
                                     
                                     </div>
                          
                                  
                                  
                                    </v-col>
                                  </v-row>  



        <v-snackbar
        v-model="hasSaved"
        :timeout="2000"
        absolute
        bottom
        left
        color="red"
      >
        {{msg}}
      </v-snackbar>
      
    
    
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
  
  import PageTitle from "../Layout/Components/PageTitle.vue";
  //import menu from '../config/menu'
  import axios from 'axios'
  
  
    export default {
        components: {
            PageTitle
        },
  
     data: function(){
      
      return{
        apellido:null,
        menu:"",
        usuario:null,
        contrasena2:null,
        contrasena1:null,
        fn:null,
        titulo:null,
        asignatura:null,
        heading: 'Registro de Docentes',
        icon: 'pe-7s-add-user icon-gradient bg-tempting-azure',
        subheading: 'Formulario de registro...',
        selected:null,
        hasSaved:false,
    msg:"",

name:null,
      }
    },
    props: {
      source: String
    }, 
  /*mounted() {
      this.axios.get('https://trackappserver.herokuapp.com/peoples')
      .then((response) => {
         console.log(response.data)
          this.items = response.data;
        })
    },*/
    methods:{
      limpiar(){
       // this.dialogo = false
        this.apellido=null;
        this.menu="";
        this.usuario=null;
        this.contrasena2=null;
        this.contrasena1=null;
        this.fn=null;
        this.titulo=null;
        this.asignatura=null;
        this.selected=null;
      },
          crear(){
      const d = new Date();
        let json={
        "name":this.name,
      "last_name":this.apellido,
      "gender":this.selected,
      "rol":this.menu,
      "titulo":this.titulo,
      "fechaNacimiento":this.fn,
      "asignatura":this.asiganatura,
      "username":this.usuario,
      "password":this.contrasena1,
      "fechaCreacion":d.toUTCString(),
       };
      axios.post('https://trackappserver.herokuapp.com/peoples',json)
      .then((response) => {
        console.log(response)
        if(response.status =="200"){
          this.msg="El Usuario Se Guardo Exitosamente."
           this.hasSaved=true
           this.limpiar()
        }
      }).catch((error) => {
          if(error.response.status=="500"){
          this.msg="Ocurrio Un Error Vuelve A Intentar"
          this.hasSaved=true
          }
        })
           
      
       
        
       
       // this.$router.push('about');
      },
     
     // limpiar(){
     //   this.dialogo = false
      //  this.name="";
       
     
       // this.hasSaved=true
    //  }
    }
    }
  </script>
  <style scoped>
  .v-application .rounded-bl-xl {
      border-bottom-left-radius: 300px !important;
  }
  .v-application .rounded-br-xl {
      border-bottom-right-radius: 300px !important;
  }
  </style>
  