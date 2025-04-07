<script lang="ts" setup>
import {
    ArrowRight,
    CaretBottom,
    CaretTop,
    Warning,
} from '@element-plus/icons-vue'

import { ref, onMounted } from 'vue'

const value = ref(true)
const span = 8

const batteryCharge = ref(100);

import { Minus, Plus } from '@element-plus/icons-vue'

const percentage = ref(10)
const percentage2 = ref(0)

const colors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
]

const increase = () => {
    percentage.value += 10
    if (percentage.value > 100) {
        percentage.value = 100
    }
}
const decrease = () => {
    percentage.value -= 10
    if (percentage.value < 0) {
        percentage.value = 0
    }
}
onMounted(() => {
    setInterval(() => {
        percentage2.value = (percentage2.value % 100) + 10
    }, 500)
})
import dayjs from 'dayjs'
import { Calendar } from '@element-plus/icons-vue'


const value1 = ref(Date.now() + 1000 * 60 * 60 * 24 * 2)
const value2 = ref(dayjs().add(1, 'month').startOf('month'))

function reset() {
    value1.value = Date.now() + 1000 * 60 * 60 * 24 * 2
}
</script>

<template>
    <!--电机转速等其他的三个信息-->
    <el-row>
        <el-col :span="8">
            <el-countdown title="电机转速" :value="value" />
        </el-col>
        <el-col :span="8">
            <el-countdown title="Remaining VIP time" format="HH:mm:ss" :value="value1" />
            <el-button class="countdown-footer" type="primary" @click="reset">
                Reset
            </el-button>
        </el-col>
        <el-col :span="8">
            <el-countdown format="DD [days] HH:mm:ss" :value="value2">
                <template #title>
                    <div style="display: inline-flex; align-items: center">
                        <el-icon style="margin-right: 4px" :size="12">
                            <Calendar />
                        </el-icon>
                        Still to go until next month
                    </div>
                </template>
            </el-countdown>
            <div class="countdown-footer">{{ value2.format('YYYY-MM-DD') }}</div>
        </el-col>
    </el-row>
    <br>
    <!--硬件状态的三个基本功能-->
    <el-row :gutter="16">
        <el-col :span="span">
            <div class="statistic-card">
                <el-statistic :value="batteryCharge">
                    <template #title>
                        <div style="display: inline-flex; align-items: center">
                            剩余电量

                        </div>
                    </template>
                    <template #suffix>%</template>
                </el-statistic>
                <div class="statistic-footer">
                    <div class="footer-item">
                        <span>目前已消耗</span>
                        <span class="red">
                            {{ 100 - batteryCharge }}
                            <el-icon>
                                <CaretBottom />
                            </el-icon>
                        </span>
                    </div>
                </div>
            </div>
        </el-col>


        <el-col :span="span">
            <div class="statistic-card">
                <el-statistic :value="5600">
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


        <el-col :span="span">
            <div class="statistic-card">
                <el-statistic :value="56" title="">
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
        <br>
        <!--环形进度条-->
        <el-row :gutter="120">
            <el-col :span="6">
                <el-progress type="dashboard" :percentage="80">
                    <template #default="{ percentage }">
                        <span class="percentage-value">{{ batteryCharge }}%</span>
                        <br>
                        <span class="percentage-label">电池电量</span>
                    </template>
                </el-progress>
            </el-col>

            <el-col :span="6">
                <el-progress type="dashboard" :percentage="percentage" :color="colors" />
            </el-col>

            <el-col :span="6">
                <el-progress type="dashboard" :percentage="percentage" :color="colors" />
            </el-col>

            <el-col :span="6">
                <el-progress type="dashboard" :percentage="percentage" :color="colors" />
            </el-col>
            <div class="demo-progress">







                <div>
                    <el-button-group>
                        <el-button :icon="Minus" @click="decrease" />
                        <el-button :icon="Plus" @click="increase" />
                    </el-button-group>

                    <el-button-group>
                        <el-button :icon="Minus" @click="decrease" />
                        <el-button :icon="Plus" @click="increase" />
                    </el-button-group>
                </div>
            </div>
        </el-row>
        <el-col>
            <div class="demo-progress">
                <el-progress :percentage="50" :stroke-width="15" striped />
                <el-progress :percentage="30" :stroke-width="15" status="warning" striped striped-flow />
                <el-progress :percentage="100" :stroke-width="15" status="success" striped striped-flow
                    :duration="10" />

                <el-button-group>
                    <el-button :icon="Minus" @click="decrease" />
                    <el-button :icon="Plus" @click="increase" />
                </el-button-group>
            </div>
        </el-col>
        <!--实现按钮功能-->
        <el-col :span="span">
            <div>
                <el-switch v-model="value" active-text="Open" inactive-text="Close" />
                <div>
                    <el-switch v-model="value" active-text="Open" inactive-text="Close" />
                    <div>
                        <el-switch v-model="value" active-text="Open" inactive-text="Close" />
                        <div>
                            <el-switch v-model="value" active-text="Open" inactive-text="Close" />

                        </div>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>

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
