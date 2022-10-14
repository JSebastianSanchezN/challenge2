<template>
    <div>
        <input type="file" @change="handleChange ( $event )" accept="">
        <button @click="handleUpload( file )">Upload to Firebase</button>
        <p>{{percentage}} % done</p>
        <input type="text" v-model="deletable" @change="cambio()" accept="">
        <button @click="handleDeleted( deleted)">Delete to Firebase</button><br/>

        <img v-for="(item, key) of files" width="100" :src="item" :key="key"/><br/>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'

    export default{
        data(){
            return{
                file:null,
                store: useStore(),
                router: useRouter(),
                deletable:'',
                deleted:''
            }
        },
        methods:{
            cambio(){
                this.deleted=this.deletable
            },
            handleChange( event ){
                this.file=event.target.files[0]
            },
            ...mapActions('storage',{
                handleUpload: 'handleUpload',
                handleGetAll: 'handleGetAll',
                handleDeleted:'handleDeleted'
            })
        },
        computed:{
            ...mapState('storage',{
                files:state=>state.files,
                percentage: state => state.percentage,
            })
        },
        mounted(){
            this.handleGetAll();
        }
    }
</script>