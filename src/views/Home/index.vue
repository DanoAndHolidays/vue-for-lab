<script setup>
import Header from './components/Header.vue';
import Hardwave from './components/Hardwave.vue';
import Menu from './components/Menu.vue';
</script>
<template>

    <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-container class="layout-container-demo" style="height: 90vh">
            <el-aside width="200px">
                <el-scrollbar>
                    <Menu />
                </el-scrollbar>
            </el-aside>
            <el-container>
                <el-main>
                    <RouterView />
                </el-main>
            </el-container>

        </el-container>
    </el-container>
</template>
<style></style>