<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                    <h1>{{ message }}</h1>
                    <span v-if="type == 'A'">If Type is A!</span>
                    <span v-else-if="type == 'B'">If Type is B</span>
                    <span v-else>Type is neither A nor B</span>

                    <br>
                    <ol>
                        <li v-for="(todo, index) in todos" :key="index">
                            {{todo.text}}
                        </li>
                    </ol>

                    <br>
                    <h4>Input Text</h4>
                    <input v-model="input" placeholder="type input">
                    <h4>Show user input</h4>
                    <p>{{ input }}</p>

                </div>
                <div class="card">
                    ini isi dari parent
                    <ul v-for="(item, index) in todolistdata" :key="index">
                        {{ item.judul }}
                    </ul>
                </div>
                ngirim ke Parent
                <input v-model="masukan" placeholder="mau pesan apa ke parent">
                <button @click="sendTextToParent">Kirim</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            message: "hai ranita, gua suka lo",
            type: "data",
            todos: [
                { text: "pedekate dia" },
                { text: "treat her as your queen" },
                { text: "and she will be, she'll love u" }
            ],
            input:'halo'
        }
    },

    props :{
        todolistdata:{
            type:Array,
            default : ()=>{
                return ["yhaaa gagal lu"];
            }
        }
    },

    methods:{
        sendTextToParent(){
            this.$emit('customEvent', this.masukan)
        }
    },
    
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
