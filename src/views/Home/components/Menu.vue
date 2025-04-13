<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
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
            <el-menu default-active="1" @open="handleOpen" @close="handleClose" active-text-color="#ffd04b">
                <el-menu-item index="1">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>
                        <RouterLink to="/" class="link">
                            硬件状态
                        </RouterLink>
                    </span>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon>
                        <document />

                    </el-icon>
                    <span>
                        <RouterLink to="/Data" class="link">
                            数据展示
                        </RouterLink>
                    </span>
                </el-menu-item>
                <el-menu-item index="3">
                    <el-icon>
                        <icon-menu />
                    </el-icon>

                    <span>
                        <RouterLink to="/Data" class="link">
                            数据分析
                        </RouterLink>
                    </span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <document />
                    </el-icon>
                    <RouterLink to="/Data" class="link">
                        处理记录
                    </RouterLink>
                </el-menu-item>

            </el-menu>
        </el-col>
    </el-row>
    <el-menu :default-openeds="['1']">
        <el-sub-menu index="1">
            <template #title>
                建筑组信息
            </template>
            <el-menu-item-group>
                <template #title>组一</template>
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
                Navigator Two
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
                Navigator Three
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
