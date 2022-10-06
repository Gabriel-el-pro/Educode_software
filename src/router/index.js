import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: () =>
            import ('../views/iniciarSesion.vue')

    },

    {
        path: '/dashboard',
        name: 'About',
        component: () =>
            import ('../views/dashboard'),
        children: [{
                name: 'crearol',
                path: '/dashboard/crearRol',
                component: () =>
                    import ('../views/crearRol.vue'),
            },
            {
                name: 'listarcreditos',
                path: '/dashboard/listarRol',
                component: () =>
                    import ('../components/listarRol'),
            },
            {
                name: 'RegistarEstudiante',
                path: '/dashboard/registrarEstudiante',
                component: () =>
                    import ('../views/registroDocente.vue'),
            },
            {
                name: 'listarEstudiante',
                path: '/dashboard/listarEstudiantes',
                component: () =>
                    import ('../views/listarEstudiantes.vue'),
            },
        ],
    },
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router