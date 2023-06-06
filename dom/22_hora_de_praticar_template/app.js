new Vue({
    el: '#desafio',
    data: {
        nome : 'Otavio Augusto',
        idade: 22,
        img: 'http://files.cod3r.com.br/curso-vue/vue.jpg',
    },
    methods:{
        nAleatorio(){
            return (Math.random())
        },
        
    }
})