<template>
    <el-row justify="space-evenly">

        <el-col span="6">
            <div class="statistic-card">
                <el-statistic :value="communicationQuality" title="">
                    <template #title>
                        <div style="display: inline-flex; align-items: center">
                            通信质量
                            <el-tooltip effect="dark" content="当前的通信延迟" placement="top">
                                <el-icon style="margin-left: 4px" :size="12">
                                    <Warning />
                                </el-icon>
                            </el-tooltip>
                        </div>
                    </template>
                    <template #suffix>ms</template>
                </el-statistic>
                <div class="statistic-footer">
                    <div class="footer-item">
                        <span>于一分钟前</span>
                        <span class="green">
                            16%
                            <el-icon>
                                <CaretTop />
                            </el-icon>
                        </span>
                    </div>
                    <div class="footer-item">
                        <el-icon :size="14">
                            <ArrowRight />
                        </el-icon>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col span="6">
            <div class="statistic-card">
                <el-statistic :value="pressure">
                    <template #title>
                        <div style="display: inline-flex; align-items: center">
                            风扇负压
                            <el-tooltip effect="dark" content="代表当前风扇所产生的平均负压" placement="top">
                                <el-icon style="margin-left: 4px" :size="12">
                                    <Warning />
                                </el-icon>
                            </el-tooltip>
                        </div>
                    </template>
                    <template #suffix>Pa</template>
                </el-statistic>
                <div class="statistic-footer">
                    <div class="footer-item">
                        <span>于一分钟前</span>
                        <span class="green">
                            12%
                            <el-icon>
                                <CaretTop />
                            </el-icon>
                        </span>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col span="6">
            <!--环形进度条-->
            <el-row gutter="10" justify="space-evenly">
                <el-col>
                    <el-progress type="dashboard" :percentage="batteryCharge" :color="colors1">
                        <template #default="">
                            <span class="percentage-value">{{ batteryCharge }}%</span>
                            <br>
                            <span class="percentage-label">电池电量</span>
                        </template>
                    </el-progress>
                </el-col>
            </el-row>
        </el-col>
        <el-col span="6">
            <!--环形进度条-->
            <el-row gutter="10" justify="space-evenly">
                <el-col>
                    <el-progress type="dashboard" :percentage="load" :color="colors2">
                        <template #default="">
                            <span class="percentage-value">{{ load }}%</span>
                            <br>
                            <span class="percentage-label">设备负载</span>
                        </template>
                    </el-progress>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
    <el-divider />
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import {
    ArrowRight,
    CaretTop,
    Warning,
} from '@element-plus/icons-vue'
const batteryCharge = inject('电池电量')
const load = inject('设备负载')

//风扇负压
const pressure = ref(5600);
//通信质量
const communicationQuality = ref(56);
const colors1 = [
    { color: '#c0392b', percentage: 20 },
    { color: '#e67e22', percentage: 40 },
    { color: '#f4d03f', percentage: 60 },
    { color: '#2ecc71 ', percentage: 80 },
    { color: '#27ae60', percentage: 100 }

]
const colors2 = [

    { color: '#27ae60', percentage: 20 },
    { color: '#2ecc71 ', percentage: 40 },
    { color: '#f4d03f', percentage: 60 },
    { color: '#e67e22', percentage: 80 },
    { color: '#c0392b', percentage: 100 }
]
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
