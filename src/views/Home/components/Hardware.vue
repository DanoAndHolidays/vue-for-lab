<script lang="ts" setup>
import {
    Calendar
} from '@element-plus/icons-vue'
import { ref, onMounted, provide, } from 'vue'
import dayjs from 'dayjs'
import Hardware2 from './HardwareComponents/Hardware2.vue'
import Hardware1 from './HardwareComponents/Hardware1.vue'
import Hardware3 from './HardwareComponents/Hardware3.vue'
//性能消耗
const cost = ref(76)
//按钮的值
const value = ref(true)
//设置span
const span = 6

//运行状态
const status = ref({
    status1: '良好',
    status2: '平稳',
    status3: '差'
});
provide('运行状态', status)
//推荐计划
const plant = ref({
    plant1: '继续作业',
    plant2: '谨慎运行',
    plant3: '建议返航'
});
provide('推荐计划', plant)

//当前时间
const currentTime = ref('');
provide('当前时间', currentTime)
const currentData = ref(dayjs().format('YYYY-MM-DD'))
provide('当前日期', currentData)
let intervalId;

const updateTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    currentTime.value = `${hours}:${minutes}:${seconds}`;
};

onMounted(() => {
    // 首次调用以显示时间
    updateTime();
    // 每秒更新一次时间
    intervalId = setInterval(updateTime, 1000);
});


//这里的数据是硬件1使用的，同时本组件也在使用
//电池
const batteryCharge = ref(95);
provide('电池电量', batteryCharge)
//设备负载
const load = ref(45);
provide('设备负载', load)




const colors2 = [

    { color: '#27ae60', percentage: 20 },
    { color: '#2ecc71 ', percentage: 40 },
    { color: '#f4d03f', percentage: 60 },
    { color: '#e67e22', percentage: 80 },
    { color: '#c0392b', percentage: 100 }
]

// const increase = () => {
//     percentage.value += 10
//     if (percentage.value > 100) {
//         percentage.value = 100
//     }
// }
// const decrease = () => {
//     percentage.value -= 10
//     if (percentage.value < 0) {
//         percentage.value = 0
//     }
// }

</script>

<template>
    <!-- //第一行的四个信息 -->
    <Hardware1 />
    <!-- //第二行的四个信息 -->
    <Hardware2 />
    <!-- //第三行的三个信息 -->
    <Hardware3 />
    <!--第四行-->
    <el-row justify="space-evenly">
        <el-col span="6">
            <!--环形进度条-->
            <el-progress type="dashboard" :percentage="cost" :color="colors2">
                <template #default="">
                    <span class="percentage-value">{{ cost }}%</span>
                    <br>
                    <span class="percentage-label">性能消耗</span>
                </template>
            </el-progress>
        </el-col>
        <el-col span="12">
            <el-slider v-model="batteryCharge" vertical height="100px" />
            <el-slider v-model="load" vertical height="100px" />
            <el-slider v-model="cost" vertical height="100px" />
        </el-col>
        <el-col span="6">

            <el-switch v-model="value" active-text="Open" inactive-text="Close" />
            <br>

            <el-switch v-model="value" active-text="Open" inactive-text="Close" />
            <br>

            <el-switch v-model="value" active-text="Open" inactive-text="Close" />
        </el-col>
        <el-col span="6">

            <el-switch v-model="value" active-text="Open" inactive-text="Close" />
            <br>

            <el-switch v-model="value" active-text="Open" inactive-text="Close" />
            <br>

            <el-switch v-model="value" active-text="Open" inactive-text="Close" />
        </el-col>
    </el-row>
    <el-divider />
</template>

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
