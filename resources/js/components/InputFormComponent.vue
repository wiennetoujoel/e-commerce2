<template>
    <div class="form">
        <input type="text" v-model="inputform">
        <button type="button" @click="reset">Reset</button>
        <button type="button" @click="addList">Delete</button>
    </div>
</template>

<script>
export default{
    emits:["emit-submit"],
    data(){
        return{
            inputform:""
        }
    },
    methods:{
        addList(){
            this.$emit('emit-submit', this.inputform)
            this.reset()
        },
        reset(){
            this.inputform=""
        }
    }
}
</script>