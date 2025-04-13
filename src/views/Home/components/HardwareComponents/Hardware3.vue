<template>
    <el-row justify="space-evenly">
        <el-col :span="8">
            <p>运行状态</p>
            //报错不用管
            <p>{{ status.status1 }}</p>
        </el-col>

        <el-col :span="8">
            <p>推荐计划</p>
            <p>{{ plant.plant1 }}</p>
        </el-col>

        <el-col :span="8">

            <div style="display: inline-flex; align-items: center">
                <el-icon style="margin-right: 4px" :size="12">
                    <Calendar />
                </el-icon>
                当前时间
            </div>
            <P>{{ currentTime }}</P>
            <div class="countdown-footer">{{ currentData }}</div>
        </el-col>
    </el-row>
    <el-divider />
</template>
<script lang="ts" setup>
import { inject } from 'vue';

const plant = inject('推荐计划')
const status = inject('运行状态')
const currentData = inject('当前日期')
const currentTime = inject('当前时间')

</script>


<style scoped>
.demo-progress .el-progress--line {
    margin-bottom: 15px;
    max-width: 600px;
}

:global(h2#card-usage ~ .example .example-showcase) {
    background-color: var(--el-fill-color) !important;
}

.el-statistic {
    --el-statistic-content-font-size: 28px;
}

.statistic-card {
    height: 100%;
    padding: 20px;
    border-radius: 4px;
    background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-size: 12px;
    color: var(--el-text-color-regular);
    margin-top: 16px;
}

.statistic-footer .footer-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.statistic-footer .footer-item span:last-child {
    display: inline-flex;
    align-items: cen ter;
    margin-left: 4px;
}

.green {
    color: var(--el-color-success);
}

.red {
    color: var(--el-color-error);
}

.demo-progress .el-progress--line {
    margin-bottom: 15px;
    max-width: 600px;

}

.demo-progress .el-progress--circle {
    margin-right: 15px;
}

.el-col {
    text-align: center;
}
</style>
