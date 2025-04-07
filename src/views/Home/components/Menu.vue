<script lang="ts" setup>

import Hardwave from './Hardwave.vue'

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

<template>


    <h3></h3>
    <el-row align="align">
        <el-col>
            <el-menu default-active="2" @open="handleOpen" @close="handleClose" active-text-color="#ffd04b">
                <el-menu-item index="1">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>硬件状态</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon>
                        <document />

                    </el-icon>
                    <span>数据分析</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <span>待定功能</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <span>待定功能</span>
                </el-menu-item>

            </el-menu>
        </el-col>
    </el-row>
    <el-menu :default-openeds="['1', '3']">
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <message />
                </el-icon>Navigator One
            </template>
            <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
                <template #title>Option4</template>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <el-icon><icon-menu /></el-icon>Navigator Two
            </template>
            <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
                <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="2-4">
                <template #title>Option 4</template>
                <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <el-icon>
                    <setting />
                </el-icon>Navigator Three
            </template>
            <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
                <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="3-4">
                <template #title>Option 4</template>
                <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
    </el-menu>
</template>



<style scoped></style>
