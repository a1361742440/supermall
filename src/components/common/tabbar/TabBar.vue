<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>
<script>
import TabBarItem from "./TabBarItem";
export default {
    name:'TabBar'
}
</script>
<style scoped>
.tab-bar{
    display: flex;
    height: 49px;
    background-color: #f6f6f6;
    border-top: 1px solid #eee;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
}
</style>