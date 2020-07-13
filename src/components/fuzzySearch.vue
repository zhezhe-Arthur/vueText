<template>
    <div>
        <van-search v-model="valueSearch" placeholder="请输入搜索关键词" />
    </div>
</template>

<script>
export default {
    name: 'fuzzySearch',
    data() {
        return {
            valueSearch: null
        }
    },
}
</script>