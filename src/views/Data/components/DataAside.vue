<template>
    <el-scrollbar>
        <h3>项目建筑</h3>
        <el-menu>
            <el-sub-menu v-for="index in names" :key="index">
                <template #title>
                    {{ index.name }}
                </template>
                <p>时间{{ index.time }}</p>
                <el-button link type="primary" size="small">
                    Detail
                </el-button>
                <el-button link type="primary" size="small">
                    Edit
                </el-button>
            </el-sub-menu>
        </el-menu>
    </el-scrollbar>
</template>

<script lang="ts" setup>
const names = [
    {
        name: '金石大厦',
        time: '2025.4.3'
    },
    {
        name: '木四邻',
        time: '2025.4.3'
    },
    {
        name: '四合聚馆',
        time: '2025.4.3'
    },
    {
        name: '明理堂',
        time: '2025.4.3'
    },
    {
        name: '大金石大厦',
        time: '2025.4.3'
    },
    {
        name: '小金石大厦',
        time: '2025.4.3'
    },
    {
        name: '木五邻',
        time: '2025.4.3'
    },
    {
        name: '六合聚馆',
        time: '2025.4.3'
    },
    {
        name: '市政楼',
        time: '2025.4.3'
    }

]

</script>