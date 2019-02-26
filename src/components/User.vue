<template lang="html">
    <div class="users">
        <h1>User Component</h1>
        <ul>
            <li v-for="user in users">
                {{ user.name }} - {{ user.email }} 
                <button @click="deleteUser(user)" class="btn"> X</button>
            </li>
        </ul>
       <form v-on:submit.prevent="addUser">
           <input type="text" v-model="newUser.name" placeholder="Name">
           <input type="email" v-model="newUser.email" placeholder="Email">
           <button type="submit">
                   Add
           </button>
       </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                users: [],
                newUser:{ }
            }
        },
        methods: {
            addUser(){
                this.users.push(this.newUser);
                this.newUser = {};
            },
            deleteUser(user){
                this.users.splice(this.users.indexOf(user),1);
            }
        },
        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then( rest => this.users = rest.body);
        },
        
    }
</script>

<style scoped>
    .users{
        background-color:#2172C7;
        color:white;
    }
</style>