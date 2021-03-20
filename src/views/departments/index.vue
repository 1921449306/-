<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <tree-tools :node-data="company" :is-root="false" />
        <el-tree
          :data="departs"
          default-expand-all
          :expand-on-click-node="false"
        >
          <template #default="{ data }">
            <tree-tools :node-data="data" />
          </template>
        </el-tree>

      </el-card>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import treeTools from './components/tree-tools'

export default {
  name: 'Dashboard',
  components: {
    treeTools
  },
  data() {
    return {
      departs: [
        {
          name: '总裁办',
          manager: '曹操',
          children: [{ name: '董事会', manager: '曹丕' }]
        },
        { name: '行政部', manager: '刘备' },
        { name: '人事部', manager: '孙权' }
      ],
      company: {
        name: '江苏传智播客教育科技股份有限公司',
        manager: '负责人'
      },
      defaultprops: {
        label: 'name',
        children: 'children'
      }
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }

}
</style>
