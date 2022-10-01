<template>
  <div  class="box-style box-style-l">
    
    <div id="personal" class="">
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
        
        <div class="row justify-content-md-center">
          
            <div class="col-md-6">
                <div class="main-card mb-3 card">


                    <div class="card-header-tab card-header">
                      
                       <div class="card-header-title font-size-lg text-capitalize text-center font-weight-normal">
                          <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                             Captura de Datos
                         </div>
                    </div>



                        <div class="px-5 py-5">
                          
                            <div class="position-relative form-group"><label for="descripcion"
                               class="">Rol</label><input v-model="name" name="descripcion" 
                             placeholder="digite rol"
                             type="text"
                             class="form-control">
                            </div>

                            <v-row>
                            <v-col
                  cols="12"
                  sm="6"
                >
                <div><label for="menu"  class="">Menu</label></div>
              <textarea  placeholder="Ingrese su  menu."
                v-model="menu"
                required  rows="8" cols="24"
                style="font-weight:bold; border:solid 1px;padding: 5px;max-height: 450px;"
                ></textarea>
           
                </v-col>
       
                <v-col
                  cols="12"
                  sm="6"
                >
              <div><label for="rutas" class="">Rutas</label></div>
                <textarea  placeholder="Ingrese sus rutas."
                v-model="rutas"
                required  rows="8" cols="24"
                style="font-weight:bold;border:solid 1px; padding:5px; max-height: 450px;"
                ></textarea>
                </v-col>
              </v-row>

                                <div class="position-relative form-group">
                                    <b-button class="mr-2 mb-2 btn-transition" @click=" crear()">
                                     Guardar
                                   </b-button>
                                   
                                </div>
                                <div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <!--dialogo de validacion-->
    <v-row justify="center">
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
              Nuevo Rol
            </v-btn>
            <v-btn
              color="black darken-1"
              text
              @click="vuelve()"
              style=" background-color:rgb(233, 88, 88);"
            >
              Inicio
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    </div>
    

</template>
<script>

    import PageTitle from "../Layout/Components/PageTitle.vue";
    import axios from 'axios'
    export default {
        components: {
            PageTitle
        },
        data: () => ({
          colo:"",
      hasSaved: false,
          mensaje:"",
            heading: 'Crear Roles',
            icon: 'pe-7s-users icon-gradient bg-tempting-azure',
            subheading: 'Creación de los diferenes roles.',
            name:"",
           menu:"",
           rutas:"",
           msg:"",
           dialogo: false,
        }),
        methods: {
          crear(){
        if(this.name!=""){
          if(this.menu!=""){
            if(this.rutas!=""){
        let json={
        "name":this.name,
     //  "menu":this.menu,
     //  "rutas":this.rutas,
       };
      axios.post('https://trackappserver.herokuapp.com/roles',json)
      .then((response) => {
        console.log(response)
        if(response.status =="200"){
          this.mensaje="El Rol Se Guardo Exitosamente."
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
           
        }else{
          this.msg="El Campo Rutas Es Necesario."
          this.hasSaved=true
        }
        }else{
          this.msg="El Campo Menu Es Necesario."
          this.hasSaved=true
        }
        }else{
          this.msg="El Campo Rol Es Necesario."
          this.hasSaved=true
        }
        
       
       // this.$router.push('about');
      },
      vuelve(){
        this.$router.push('/dashboard');
      },
      limpiar(){
        this.dialogo = false
        this.name="";
        this.menu="";
        this.rutas="";
     
       // this.hasSaved=true
      }
        }
    }
</script>

<style scoped>
  
</style>