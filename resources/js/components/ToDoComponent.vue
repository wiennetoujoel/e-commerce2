<template>
    <div class="container">
        <div class="title">
            To Do list Joel
            <div class="form">
                <input class="text" v-model="input" placeholder="masukkan apa yang mau dikerjakan">
                <button class="button" @click="addToList">Submit</button>
            </div>
            <ul class="list">
                <li v-for="(todo, index) in list" :key="index">
                {{ index+1}}. {{ todo.title }}
                <button class="button" @click="deleteList(index)">Delete</button>
                </li>
            </ul>
        </div>
        <p> pesan dari anak : {{ messageFromChild }}</p>
        
        <ExampleComponent :todolistdata="todolist" @customEvent = "handleEvent"/>
    </div>
</template>

<script>
import ExampleComponent from './ExampleComponent.vue';

export default {
     data(){
        return {
            list: [{ title: "menyapu" }, { title: "cuci piring" }],
            todolist:[{judul : "ini dari Parent"}, {judul :"dari parent lagi hehe"}, {judul : "parent lagi parent lagi"}],
            input: "",
            messageFromChild:""
        }
    },

    components:{
    ExampleComponent
},

    methods:{
        addToList(){
            let newList = {
                title: this.input,
            }
            this.list.push(newList);
            this.input="";
        },

        deleteList(index){
            this.list.splice(index, 1)
        },

        handleEvent(masukan){
            this.messageFromChild= masukan;
        }

    }
}

</script>