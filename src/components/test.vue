<template>
    <div>
        <div v-html="myHTML"></div>
        <div v-if="showName"> 
            <p>{{ user.firstName }}</p>
        </div>
        <div v-else> <p>No puedo mostrar el nombre</p> </div>
        <hr>
        <ol>
          <!--  <li v-for="task in tasks ">
                {{ task.title }}
            </li>-->
        </ol>
        <hr>
        <div>
            <input type="text" v-model="user.firstName">
            <button type="button" @click="saludar(user.firstName)">Click me</button>
        </div>
        <hr>
         <div>
             <label for="">Typing:</label><br>
            <input type="text" @keyup="typing"><br>
            <label for="">Typed Enter:</label><br>
             <input type="text" @keyup.enter="typedEnter">
        </div>
        <hr>
        <div>
            <Label>Full Name:</Label>
            <p>{{ fullName }}</p>
        </div>
        <hr>
        <div>
            <label for="">Props</label>
            <p>{{ msg }}</p>
        </div>
 
    </div>
   
</template>

<script>
    export default {
        data() {
            return {
                title: 'Bienvenido!',
                user: {
                    firstName:'Avidan',
                    lastName:'Garcia Castillo'
                },
                myHTML:'<H3>Hola vueJS</H3>',
                showName: false,
                tasks:[
                    {title:'eat'},
                    {title:'dinner'},
                    {title:'play'},
                ]
            }
        },
        methods: {
            saludar(name) {
                alert('Hola! '+name)
            },
            typing(e){
                console.log(e.target.value);  
            },
            typedEnter(e){
                console.log('Enter en input...');
            }
        },
        computed: {
            fullName() {
                return this.user.firstName +' '+ this.user.lastName 
            },
        },
        props: {
            msg:{
                type: String ,
                default: 'Mensaje por defecto.'
            },
        },
    }
</script>

<style media="screen">

</style>
