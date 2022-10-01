<template>
    <v-container>
        <v-row align="center" justify="center" >
            <v-col cols="12" sm="10">
              <v-card class="elevation-12 mt-10"  >
               <v-window>
                  <v-window-item >
                    <v-row >
                      <v-col cols="12" md="6" style="background-color: rgb(66, 112, 106);" class=" rounded-br-xl"><div><center><img right src="../assets/uni.png" width="150" height="250" ></center></div>
                       <div style="  text-align: center; padding: 5px 0;">
                        <v-card-text class="white--text" >
                          <h2 class="text-center ">Si ya te  registraste</h2>
                          <h3
                            class="text-center"
                          >Vuelve al inicio<br>  para continuar con la experiencia en Educode</h3>
                        </v-card-text>
                        <div class="text-center" style="height:60px">
                         
                        </div>
                        </div>
                      </v-col>
  
                      <v-col cols="12" md="6">
                        <v-card-text class="mt-12">
                          <h4
                            class="text-center"
                          >Formulario Para Registrar Un Estudiante</h4>
                          <h6
                            class="text-center  grey--text "
                          >Los datos que se piden son necesaios para procesar de forma exitosa el registro.</h6>
                          <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
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
                                
                                  <option value="">Sexo</option>
                                  <option value="1">M</option>
                                  <option value="2">F</option>
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
                              
                                <v-col cols="12" sm="12">
                                  <v-text-field
                                  label="Fecha de Nacimiento"
                                  outlined
                                  dense
                                  color="blue"
                                autocomplete="false"
                                 type="Date"
                                
                                />
                                </v-col>
                               
                              </v-row>
                         
                        <center> <b-button @click=" crear()" pill variant="success" ><icon class="pe-7s-diskette"></icon>  Guardar</b-button></center>
                          
                          
                            </v-col>
                          </v-row>  
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-window-item>
                </v-window>
              </v-card>
            </v-col>
        </v-row>
        <v-dialog
        v-model="dialogo"
        persistent
        max-width="500"
      >
        
        <v-card :style="colo">
          <v-card-title class="text-h5 justify-center">
            {{mensaje}}
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="black darken-1"
              text
              @click="limpiar()"
              style=" background-color:rgb(72, 126, 72);"
            >
              Nuevo Estudiante
            </v-btn>
            
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
  
  
  //import menu from '../config/menu'
  import axios from 'axios'
  
  
    export default {
      
     data: function(){
      
      return{
        selected:"",
        colo:"",
    mensaje:"",
dialogo: false,
name:"",
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
          crear(){
      
        
           
        let json={
        "name":this.name,
     //  "menu":this.menu,
     //  "rutas":this.rutas,
       };
      axios.post('https://trackappserver.herokuapp.com/roles',json)
      .then((response) => {
        console.log(response)
        if(response.status =="200"){
          this.mensaje="El Estudiante Se Guardo Exitosamente."
          this.colo="background-color:rgb(40, 238, 212)"
           this.dialogo=true
        }
      }).catch((error) => {
          if(error.response.status=="500"){
          this.mensaje="Ocurrio Un Error Vuelve A Intentar"
          this.colo="background-color:rgb(212, 80, 80);"
           this.dialogo=true
          }
        })
           
      
       
        
       
       // this.$router.push('about');
      },
      limpiar(){
        this.dialogo = false
        this.name="";
       
     
       // this.hasSaved=true
      }
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
  