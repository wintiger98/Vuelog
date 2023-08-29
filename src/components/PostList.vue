<template>
    <div v-for="(post, index) in posts" :key="post">
        <h5 @click="$router.push(`/detail/${index}`)">{{ post.title }}</h5>
        <p>{{ post.date }}</p>
    </div>
</template>

<script>
export default {
    name: 'PostList',
    props:{
        posts: Array,
    },
}
</script>

<style>

</style>