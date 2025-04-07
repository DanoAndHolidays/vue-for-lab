<template>
    <el-row class="tac">
        <el-col :span="12">
            <h5 class="mb-2">控制面板</h5>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                background-color="#ffffff" popper-effect="dark">
                <el-menu-item index="1">
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <span>硬件状态</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <span>数据分析</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>待定功能</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>待定功能</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu--horizontal {
    --el-menu-horizontal-height: 100px;
}
</style>
