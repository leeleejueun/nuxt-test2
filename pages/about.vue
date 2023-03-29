<template lang="">
    <div>
        <h2>About</h2>
        <p>{{count}}</p>
        <button @click='incre'>증가</button>
        <!-- {{resData}} -->
        <div>getDB => {{resData}}</div>
        <button @click='add'>데이터 DB에 추가</button>
    </div>
</template>

<script setup>
    const aa = useState('g',()=>'about내용쪽에 잇는 데이터');
    const {data : resData} = await useFetch('/api/db');
</script>

<script>
export default {
    data(){
        return{
            count :100
        }
    },
    methods:{
        incre(){
            this.count++;
        },
        async add() {
            const data ={name:'홀홀홀', email:'aaa@gmail.com', date:'2023-03-29'}
            await useFetch('/api/db', {body:data, method:'POST'} );
        }
    }
}
</script>
<style lang="">
    
</style>