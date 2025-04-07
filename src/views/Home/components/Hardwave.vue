<template>
    <el-row :gutter="16">


        <el-col :span="8">
            <div class="statistic-card">
                <el-statistic :value="96">
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
                            4%
                            <el-icon>
                                <CaretBottom />
                            </el-icon>
                        </span>
                    </div>
                </div>
            </div>
        </el-col>


        <el-col :span="8">
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


        <el-col :span="8">
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
    </el-row>
</template>

<script lang="ts" setup>
import {
    ArrowRight,
    CaretBottom,
    CaretTop,
    Warning,
} from '@element-plus/icons-vue'
</script>

<style scoped>
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
    align-items: center;
    margin-left: 4px;
}

.green {
    color: var(--el-color-success);
}

.red {
    color: var(--el-color-error);
}
</style>
