<script lang="ts" setup>
import {
    ArrowRight,
    CaretTop,
    Warning,
    Calendar
} from '@element-plus/icons-vue'
import { ref, onMounted, } from 'vue'
import dayjs from 'dayjs'


//性能消耗
const cost = ref(76)
//
const value = ref(true)
//设置span
const span = 6
//电池电量
const batteryCharge = ref(95);
//风扇负压
const pressure = ref(5600);
//预估温度
const temperature = ref(20);
//设备负载
const load = ref(45);
//通信质量
const communicationQuality = ref(56);
//设备高度
const height = ref(10);
//运行状态
const status = ref({
    status1: '良好',
    status2: '平稳',
    status3: '差'
});
//推荐计划
const plant = ref({
    plant1: '继续作业',
    plant2: '谨慎运行',
    plant3: '建议返航'
});
//电机转速
const velocity = ref(2000);
//运行时间
const runTime = ref(5);
//当前时间
const currentTime = ref('');
const currentData = ref(dayjs().format('YYYY-MM-DD'))

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

onMounted(() => {
    setInterval(() => {
        percentage2.value = (percentage2.value % 100) + 10
    }, 500)
})

const percentage = ref(10)
const percentage2 = ref(0)

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

</script>

<template>
    <!-- <h6>信息展示</h6>
    <el-divider /> -->
    <!-- //第二行的四个信息 -->
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
    <!-- //第三行的四个信息 -->
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
    <!-- //第四行的三个信息 -->
    <el-row justify="space-evenly">
        <el-col :span="8">
            <p>运行状态</p>
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

    <!-- 硬件状态的三个基本功能
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
        </el-col> -->
    <!-- 条形进度条
    <el-row justify="space-evenly">
        <el-col>
            <div class="demo-progress">
                <el-progress :percentage="50" :stroke-width="15" striped />
                <el-progress :percentage="30" :stroke-width="15" status="warning" striped striped-flow />
                <el-progress :percentage="100" :stroke-width="15" status="success" striped striped-flow
                    :duration="10" />
            </div>
        </el-col>
    </el-row> -->


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
