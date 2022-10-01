<template>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="fon"
    >
    

     <v-img
     contain
      height="150px"
      src="../../assets/logonav.png">
    </v-img>
      <v-divider></v-divider>
      <div class="app-sidebar-content">
      <VuePerfectScrollbar class="app-sidebar-scroll" v-once>
                <sidebar-menu showOneChild :menu="menu" />
            </VuePerfectScrollbar>
      </div>
     
    </v-navigation-drawer>

</template>

<script>
  import {SidebarMenu} from 'vue-sidebar-menu'
   import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  export default {
    components: {
            SidebarMenu,
            VuePerfectScrollbar
        },

    props:['drawer'],
    data: () => ({
    
   
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],

      menu: [
                    {
                        header: true,
                        title: 'ADMINISTRADOR',
                    },
                    {
                        icon: 'pe-7s-settings',
                        title: 'Roles',
                        child: [
                            {
                                title: 'Crear',
                                href: '/dashboard/crearRol',
                                
                            },
                            {
                                title: 'Listar',
                                href: '/dashboard/listarRol',
                            },
                            
                        ],
                    },
                    {
                        header: true,
                        title: 'ESTUDIANTE',
                    },
                    {
                        icon: 'pe-7s-add-user',
                        title: 'Registro',
                        child: [
                            {
                                title: 'Registrar Estudiante',
                                href: '/dashboard/registrarEstudiante',
                                
                            },
                            {
                                title: 'Listar Estudiantes',
                                href: '/dashboard/listarEstudiantes',
                            },
                            
                        ],
                    },
                    
                ],
               
    }),
  }
   </script>
<style scoped>
    .fon{
          /* background-image:url("../../assets/images/sidebar/abstract4.jpg");*/
     background-image:url("../../assets/fondo.png");
      background-size: 100% 100%;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    margin:0;
    }
</style>