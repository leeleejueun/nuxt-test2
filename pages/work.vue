<template lang="">
    <div>
        <h2>Work</h2>
        {{aa}}
        {{$store.state.data}}
    </div>
</template>

<script setup>
    const aa = useState('g');
</script>

<script>
import { mapActions, mapState } from 'vuex';
export default{
    data(){
        return{}
    },
    computed:{
        ...mapState(['data'])
    },
    methods:{
        ...mapActions(['getData'])
    },
    created(){
        //this.getData()
    }
}
</script>

<style lang="">
    
</style>