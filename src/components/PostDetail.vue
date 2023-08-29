<template>
    <div>
        <h3>상세페이지</h3>
    
        <h4>{{posts[$route.params.id].title}}</h4>
        <p>{{posts[$route.params.id].date}}</p>
    
        <h5>{{posts[$route.params.id].content}}</h5>
    
        <br>
    
        
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "PostDetail",
    props: {
        posts: Array,
    },
}
</script>

<style>

</style>