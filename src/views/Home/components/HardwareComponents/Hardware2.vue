<template>
    <!-- //第二行的四个信息 -->
    <el-row justify="space-evenly">

        <el-col span="6">
            <div class="statistic-card">
                <el-statistic :value="temperature" title="">
                    <template #title>
                        <div style="display: inline-flex; align-items: center">
                            预估温度
                            <el-tooltip effect="dark" content="设备当前核心的预估温度" placement="top">
                                <el-icon style="margin-left: 4px" :size="12">
                                    <Warning />
                                </el-icon>
                            </el-tooltip>
                        </div>
                    </template>
                    <template #suffix>℃</template>
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
                <el-statistic :value="height">
                    <template #title>
                        <div style="display: inline-flex; align-items: center">
                            设备高度
                            <el-tooltip effect="dark" content="当前设备预计的高度" placement="top">
                                <el-icon style="margin-left: 4px" :size="12">
                                    <Warning />
                                </el-icon>
                            </el-tooltip>
                        </div>
                    </template>
                    <template #suffix>m</template>
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
            <div class="statistic-card">
                <el-statistic :value="velocity" title="">
                    <template #title>
                        <div style="display: inline-flex; align-items: center">
                            电机转速
                            <el-tooltip effect="dark" content="电机当前的转速" placement="top">
                                <el-icon style="margin-left: 4px" :size="12">
                                    <Warning />
                                </el-icon>
                            </el-tooltip>
                        </div>
                    </template>
                    <template #suffix>rpm</template>
                </el-statistic>
                <div class="statistic-footer">
                    <div class="footer-item">
                        <span>than yesterday</span>
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
                <el-statistic :value="runTime">
                    <template #title>
                        <div style="display: inline-flex; align-items: center">
                            运行时间
                            <el-tooltip effect="dark" content="代表当前终端推荐的操作" placement="top">
                                <el-icon style="margin-left: 4px" :size="12">
                                    <Warning />
                                </el-icon>
                            </el-tooltip>
                        </div>
                    </template>
                    <template #suffix>min</template>
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
    </el-row>
    <el-divider />
</template>

<script setup>
import {
    ArrowRight,
    CaretTop,
    Warning
} from '@element-plus/icons-vue'
import { ref } from 'vue'

//预估温度
const temperature = ref(20);
//设备高度
const height = ref(10);
//电机转速
const velocity = ref(2000);
//运行时间
const runTime = ref(5);
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
