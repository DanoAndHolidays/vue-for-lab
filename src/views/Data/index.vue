<template>
    <el-container>
        <el-aside width="15%">
            <DataAside />
        </el-aside>
        <el-main>
            <DataTable />
        </el-main>
    </el-container>



</template>

<script setup>
import DataTable from './components/DataTable.vue'
import DataAside from './components/DataAside.vue';
</script>

<style></style>