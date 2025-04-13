<template>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64"
        text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
        <el-menu-item index="1">
            <RouterLink to="/" class="link">分析监测终端界面</RouterLink>
        </el-menu-item>
        <el-sub-menu index="2">
            <template #title>终端设置</template>
            <el-menu-item index="2-1">导出数据</el-menu-item>
            <el-menu-item index="2-2">导入数据</el-menu-item>
            <el-menu-item index="2-3">主题</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>设置</template>
                <el-menu-item index="2-4-1">文件设置</el-menu-item>
                <el-menu-item index="2-4-2">获取设置</el-menu-item>
                <el-menu-item index="2-4-3">监测设置</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3">数据中心</el-menu-item>
        <el-menu-item index="4">开发者</el-menu-item>
        <el-menu-item index="5">
            <RouterLink to="/Store" class="link">产品介绍</RouterLink>

        </el-menu-item>
        <el-menu-item index="6">
            <RouterLink to="/Store" class="link">获取帮助</RouterLink>

        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style></style>