<template>

    <el-table :data="tableData" style="width: 100%">

        <el-table-column fixed prop="date" label="日期" width="150" />
        <el-table-column prop="name" label="时间" width="120" />
        <el-table-column prop="state" label="墙体状态" width="120" />
        <el-table-column prop="zip" label="损坏类型" width="120" />
        <el-table-column prop="city" label="位置" width="120" />
        <el-table-column prop="address" label="处理建议" width="250" />
        <el-table-column fixed="right" label="操作选项" min-width="120">
            <template #default>
                <el-button link type="primary" size="small">
                    编辑
                </el-button>
                <el-button link type="primary" size="small">
                    删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="500" />
</template>

<script lang="ts" setup>


const tableData = [
    {
        date: '2016-05-03',
        name: '13:34:13',
        state: '差',
        city: 'position',
        address: '及时处理',
        zip: '脱落',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: '13:34:13',
        state: '良好',
        city: 'position',
        address: '无',
        zip: '无',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: '13:34:13',
        state: '良好',
        city: 'position',
        address: '无',
        zip: '无',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: '13:34:13',
        state: '危险',
        city: 'position',
        address: '立刻处理',
        zip: '脱落',
        tag: 'Office',
    },
    {
        date: '2016-05-03',
        name: '13:34:13',
        state: '差',
        city: 'position',
        address: '及时处理',
        zip: '脱落',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: '13:34:13',
        state: '良好',
        city: 'position',
        address: '无',
        zip: '无',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: '13:34:13',
        state: '良好',
        city: 'position',
        address: '无',
        zip: '无',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: '13:34:13',
        state: '危险',
        city: 'position',
        address: '立刻处理',
        zip: '脱落',
        tag: 'Office',
    },
    {
        date: '2016-05-03',
        name: '13:34:13',
        state: '差',
        city: 'position',
        address: '及时处理',
        zip: '脱落',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: '13:34:13',
        state: '良好',
        city: 'position',
        address: '无',
        zip: '无',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: '13:34:13',
        state: '良好',
        city: 'position',
        address: '无',
        zip: '无',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: '13:34:13',
        state: '危险',
        city: 'position',
        address: '立刻处理',
        zip: '脱落',
        tag: 'Office',
    }
]
</script>