<template lang="">
    <div>
        <input type="text" v-model="user.name"/>
        <button type="button" @click="save()">Guardar</button> 
        <button type="button" @click="nosave()">Eliminar</button> 
        <span v-if="isPending">Saving...</span>
        <ul>
            <li v-for="item of list">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
    import useCollection from '../firebase/firestore';
    const {deleted,add,getAll,isPending}=useCollection("users");
    
    export default {
        data(){
            return {
                list: [],
                user: {},
                isPending: isPending
            }
        },
        methods:{
            async getAll(){
                this.list=await getAll([]);
            },
            async save(){
                await add(this.user)
                await this.getAll();
            },
            async nosave(){
                await deleted(this.user)
                await this.getAll();
            }
        },
        mounted(){
            this.getAll()
        }
    }
</script>