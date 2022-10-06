<template>
  <div>
    <div class="fondo" >
        <v-row>
         <v-app-bar
          app
         
          dark
          style="background-color:rgba(4, 133, 4, 0.308);border-radius:250px"
          >
          <vs-navbar shadow square center-collapsed v-model="active"    style="background-color:aquamarine">
            <template #left>
              <img src="../assets/logonav.png" style="max-height:50px;max-width: 250px;border-radius:20px; ">
            </template>
            <vs-navbar-item :active="active == 'docs'" id="docs">
              Haz Una Donación
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'components'" id="components">
              Informacion
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'license'" id="license">
              Contactar
            </vs-navbar-item>
            <template #right>
              <vs-button    upload  @click="dialog=true">Iniciar Sesión</vs-button>
              <vs-button  color="rgb(4, 133, 4)">Ayuda</vs-button>
            
            </template>
          </vs-navbar>
        </v-app-bar>  
        <v-dialog
          v-model="dialog"    
          max-width="350"
          height="400"
        >
          
        <div class="container h-60">
          <div class="d-flex justify-content-center h-50">
            <div class="user_card">
              <div class="d-flex justify-content-center">
                <div class="brand_logo_container">
                  <img src="../assets/logo.png" class="brand_logo"  alt="Logo">
                </div>
              </div>
              <div class="d-flex justify-content-center form_container">
                <form>
                  <div class="input-group mb-3">
                    <div class="input-group-append">
                      <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input v-model="usuario" type="text" name="" class="form-control input_user" placeholder="username">
                  </div>
                  <div class="input-group mb-2">
                    <div class="input-group-append">
                      <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input v-model="contrasena" type="password" name="" class="form-control input_pass" placeholder="password">
                  </div>
                  <div class="form-group">
               
                  </div>
                  <div class="text-center text-black my-2" v-if="prueba==2">
         
          <vs-button
          class="btn login_btn" 
          loading
          danger
          border
        >
         iniciando sesion
        </vs-button>
        </div>
                    <div class="d-flex justify-content-center mt-3 login_container" v-if="prueba==1">
                 <vs-button  danger border class="btn login_btn" @click="login()">Iniciar Sesión</vs-button>
                 </div>
                </form>
              </div>
          
              <div class="mt-4">
                <div class="d-flex justify-content-center links">
                  No tienes cuenta registrate <a href="#" class="ml-2">Aqui</a>
                </div>
                <div class="d-flex justify-content-center links">
                  <a href="#">¿olvidaste tu contraseña?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
          
        <!--  <vs-button flat color="#7d33ff" icon
            @click="openNotification('top-center', '#7d33ff')">
            <i class='bx bx-border-top' ></i>
          </vs-button>-->
          
        
        
        </v-dialog>
        <v-col cols="6"
        xs="12">
        
        <div >   
   <!--<font class="letras">¡Bienvenido!</font></div>
        <div>
         <img src="../assets/logo.jpg" style="width: 200px;
    height:150; border-radius:100px; margin-left:30%">
  -->
  </div>
 
    <div>
    <v-row>
    <v-col cols="2"
    xs="0">
    </v-col>
    <v-col cols="8"
    xs="12">
    <!--
    <div class="letras2"  style="text-aling:justify">Educode es un software gratuito, sin fines de lucro. Tiene como objetivo principal enseñar conceptos basicos de programacion mediante el usode Pseudocodigos, para generar en los estudiantes un aprendizaje significativo.

    </div>-->
    </v-col>
     </v-row>
       </div>
       
        </v-col>
        <v-col cols="0">
        </v-col>
        <v-col cols="4"
        xs="0" 
         class="mb-2 mr-sm-2 mb-sm-0"
        align-self="center"
        >
       <!-- <img  src="../assets/ini.png" style="max-width: 500px;
    max-height:500;">-->
    
        </v-col>
        </v-row>
      </div>
    <div class="fondo2">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
              color="purple lighten-2"
              fill-dot
              right
            >
              <v-card>
                <v-card-title class="purple lighten-2">
                  <v-icon
                    dark
                    size="42"
                    class="mr-4"
                  >
                    mdi-magnify
                  </v-icon>
                  <h2 class="text-h4 white--text font-weight-light" style=" font-weight: bold;">
                    ¿Que es EDUCODE?
                  </h2>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      md="10"
                      class="letras2"
                    >
                    Educode es un software gratuito, sin fines de lucro. Tiene como objetivo principal enseñar conceptos basicos de programacion mediante el uso de Pseudocodigos, para generar en los estudiantes un aprendizaje significativo.
                    </v-col>
                    <v-col
                      class="hidden-sm-and-down text-right"
                      md="2"
                    >
                      <v-icon size="64">
                        mdi-calendar-text
                      </v-icon>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
        
            <v-timeline-item
              color="amber lighten-1"
              fill-dot
              left
              small
            >
              <v-card>
                <v-card-title class="amber lighten-1 justify-end">
                  <h2 class="text-h4 mr-4 white--text font-weight-light">
                    Historia de EDUCODE
                  </h2>
                  <v-icon
                    dark
                    size="42"
                  >
                    mdi-home-outline
                  </v-icon>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      md="10"
                      class="letras2"
                    >
                      Educode nace como alternativa para ayudar a solucionar dificultades evidenciadas en estudiantes al momento de resolver problemas mediante el uso de algoritmos.
                    </v-col>
                    
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
        
            <v-timeline-item
              color="cyan lighten-1"
              fill-dot
              right
            >
              <v-card>
                <v-card-title class="cyan lighten-1">
                  <v-icon
                    class="mr-4"
                    dark
                    size="42"
                  >
                    mdi-book-check
                  </v-icon>
                  <h2 class="text-h4 white--text font-weight-light">
                    Objetivos de EDUCODE
                  </h2>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      md="10"
                      class="letras2"
                    >
                      Este software educativo espera posicionarse en el mercado digital, como una alternativa que puedan adaptar las instituciones educativas al momento de enseñar temas relacionados a los algortmos.
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
        
            <v-timeline-item
              color="red lighten-1"
              fill-dot
              left
              small
            >
              <v-card>
                <v-card-title class="red lighten-1 justify-end">
                  <h2 class="text-h4 mr-4 white--text font-weight-light">
                    ¿Como funciona EDUCODE?
                  </h2>
                  <v-icon
                    dark
                    size="42"
                  >
                    mdi-account-multiple-outline
                  </v-icon>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col
                      class="hidden-sm-and-down"
                      md="2"
                    >
                      <v-icon size="64">
                        mdi-server-network
                      </v-icon>
                    </v-col>
                    <v-col
                      cols="12"
                      md="10"
                      class="letras2"
                    >
                     Educode es una plataforma que plantea diferentes desafios para que los estudiantes superen, estos estan basados en conceptos basicos de programación.
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
        
            <v-timeline-item
              color="green lighten-1"
              fill-dot
              right
            >
              <v-card>
                <v-card-title class="green lighten-1">
                  <v-icon
                    class="mr-4"
                    dark
                    size="42"
                  >
                    mdi-code-tags-check
                  </v-icon>
                  <h2 class="text-h4 white--text font-weight-light">
                    ¡MOTIVATE! Recurda esto.
                  </h2>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col class="letras2">
                      <li>
                          "No tienes que ser grande para comenzar, pero tienes que comenzar para ser grande” Zig Ziglar.
                      </li>
                      <li>
                        "Si crees que algo es imposible, tú lo harás posible” Bruce Lee.
                      </li>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
    </div>
  </div>
</template>
<script>

 /* data () {
      return {
        dialog: false,
      }
    },*/
   import axios from 'axios'
  
  export default {
    name: 'App',
  
    data: () => ({
      active: 'home',
      dialog: false,
      usuario:"",
      noti:null,
      contrasena:"",
      error:false,
      error_msg:"",
      prueba:1,
      isBusy: false,
    }),
    mounted() {
      this.axios.get('https://marcosrepositorio.herokuapp.com')
      .then((response) => {
         console.log(response.data)
        
        })
    },
    methods:{
     
     openNotification(position = null, color) {
          this.noti = this.$vs.notification({
            progress: 'auto',
            color,
            position,
            title: this.error_msg,
          })
        },
      login(){
        if(this.usuario!=""){
          if(this.contrasena!=""){
       // this.dialog=false;
       this.prueba=2;
       this.isBusy = true
       let json={
        "user":this.usuario,
        "password":this.contrasena
       };
       
       axios.post('https://trackappserver.herokuapp.com/auth',json)
      .then((response) => {
        console.log(response)
         if(response.status =="200"){
        //  this.error_msg="El usuario se logio correctamente."
          this.$router.push('dashboard');
       // this.openNotification('top-center', '#EB2C40')
         }
        }).catch((error) => {
          if(error.response.status=="500"){
          this.error_msg="Usuario o Contraseña incorrecta."
          this.prueba=1;
          this.isBusy = false
         this.openNotification('top-center', '#EB2C40')
          }
        })
     this.usuario="";
     this.contrasena="";
      }else{
        this.error_msg="El campo contraseña es necesario."
        this.openNotification('top-center', '#0768E3')
      }
      }else{
        this.error_msg="El campo usuario es necesario."
          this.openNotification('top-center', '#0768E3')
      }
    }

    }
  };

</script>
<style scoped>
    .fondo{
      background-image:url("../assets/fondo2.png");
    background-size: 100% 100%;
  background-attachment: fixed;
  width: 100%;
  height: 630px;
  margin:0;
  
  }
  .fondo2{
    background-image:url("../assets/fondo.png");
  background-size: 100% 100%;
background-attachment: fixed;
width: 100%;
height: 100%;
margin:0;

}
   .letras{
    color:white;
    margin:auto;
    text-align:center;
    font: bold 80px/1 arial;
  text-transform: uppercase;
  color: rgb(244, 244, 244);
  text-shadow: 0  2px 0 black,
               0  4px 0 black,
               0  6px 0 black,
               0  8px 0 black,
               0 10px 0 black,
               0 12px 0 black;
    
    
  }
   .letras2{
    font-size:25px;
    color:black;
    margin:auto;
    text-align:justify;
    font-family: "Mystery Quest", cursive;
                 
  }
  @import url("https://fonts.googleapis.com/css?family=Mystery+Quest");
  .user_card {
    height: 500px;
    width: 350px;
    margin-top: auto;
    margin-bottom: auto;
    background: #f39d12a8;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;

  }
  .brand_logo_container {
    position: absolute;
    height: 170px;
    width: 170px;
    top: -75px;
    border-radius: 50%;
    background: #60a3bc;
    padding: 10px;
    text-align: center;
    margin-top:70px;
  }
  .brand_logo {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 2px solid white;
    margin-top:0px;
  }
  .form_container {
    margin-top: 100px;
  }
  .login_btn {
    width: 100%;
    background: #c0392b !important;
    color: white !important;
  }
  .login_btn:focus {
    box-shadow: none !important;
    outline: 0px !important;
  }
  .login_container {
    padding: 0 2rem;
  }
  .input-group-text {
    background: #c0392b !important;
    color: white !important;
    border: 0 !important;
    border-radius: 0.25rem 0 0 0.25rem !important;
  }
  .input_user,
  .input_pass:focus {
    box-shadow: none !important;
    outline: 0px !important;
  }
  .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
    background-color: #c0392b !important;
  }
</style>