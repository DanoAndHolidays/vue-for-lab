<script setup>
import Header from './components/Header.vue';
import Hardwave from './components/Hardware.vue';
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
<style>
/* 去掉 RouterLink 默认的下划线 */
.router-link-exact-active,
.router-link-active {
    text-decoration: none;
}

/* 去掉 RouterLink 激活时的变色，可根据需要调整颜色 */
.router-link-exact-active,
.router-link-active {
    color: inherit;
}

/* 去掉普通 RouterLink 的下划线和变色 */
a.router-link {
    text-decoration: none;
    color: inherit;
}

.link {
    text-decoration: none;
    color: inherit;
}
</style>