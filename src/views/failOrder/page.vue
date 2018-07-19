<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="searchData">
  		
  		<div>
  			  <el-form-item label="订单编号" prop="orderId">
           <el-input v-model="searchData.orderId" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
       <el-form-item label="保费金额" prop="insuranceMoney">
           <el-input v-model="searchData.insuranceMoney" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
      <el-form-item label="投保人" prop="consumerName">
          <el-input v-model="searchData.consumerName" @keyup.enter.native="getPage"></el-input>
      </el-form-item>

       <el-form-item label="保单号" prop="insuranceNo">
          <el-input v-model="searchData.insuranceNo" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
  
  		</div>
  		
      
    
      <div>
      	  <el-form-item>
              <el-button type="primary" icon="el-icon-search" @click="getPage">查询</el-button>
          </el-form-item>
      
        
      </div>
  
    </el-form>
  		
  	</div>
     
 <el-table
     v-loading="loading"
    :data="tableData"
    highlight-current-row
    style="width: 100%">
    <el-table-column
      type="index"
      label="序号">
    </el-table-column>
    <el-table-column
      property="orderId"
      label="订单编号">
    </el-table-column>
    <el-table-column
      property="orderTime"
      label="订单时间">
    </el-table-column>
    <el-table-column
      property="insuranceMoney"
      label="保费金额">
    </el-table-column>
      <el-table-column
      property="consumerName"
      label="投保人">
    </el-table-column>
      <el-table-column
      property="totalPeriod"
      label="总期数">
    </el-table-column>
      <el-table-column
      property="insuranceNo"
      label="保单号">
    </el-table-column>

    <el-table-column
      property="orderMoney"
      label="订单金额">
    </el-table-column>
        <!-- <el-table-column
      property="appealsStatus"
      label="投诉状态">
       <template slot-scope="scope">
         {{scope.row.appealsStatus == 1?"投诉中":""}}
          {{scope.row.appealsStatus == 2?"投诉成功":""}}
           {{scope.row.appealsStatus == 3?"投诉驳回":""}}
      </template>
    </el-table-column>
        <el-table-column
      property="failStatus"
      label="失败状态">
      <template slot-scope="scope">
         {{scope.row.failStatus == 1?"自动失败 ":""}}
         {{scope.row.failStatus == 2?"支付失败 ":""}}
         {{scope.row.failStatus == 3?"主动取消 ":""}}
         {{scope.row.failStatus == 4?"申诉 ":""}}
      </template>
    </el-table-column> -->
   
      <!-- <el-table-column
      label="操作" width='150'>
      
       <template slot-scope="scope">

        <el-button
          size="mini"
          :type="scope.row.status == 1?'danger':'success'"
          @click="changeStatus(scope.row.status,scope.row.id)">{{scope.row.status == 1?"停用":"启用"}}</el-button>
      </template>
    </el-table-column> -->
  </el-table>
  
     
  <div class='pageBox'>
       <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[20, 40, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPage">
    </el-pagination>

  </div>

  

</div>
</template>

<script>
import mixin from '@/utils/tablemixin.js';

export default {
  name: 'orderlist',
  mixins: [mixin],
  
  data(){
    return{
    
     
     funcName:'OrderList',
     searchData:{
       type:'3',orderId:'',insuranceMoney:'',consumerName:'',insuranceNo:'',failStatus:''
     }
    }
  },



  methods:{
    changeStatus(status,id){
        var obj = {
          status:status==1?2:1,
          id:id
        }
         this.$store.dispatch('AgentUpstatus',obj).then((data) => {
           if(data.code == 200){
             this.getPage();
           }
       })
    },

  }
 
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 .inputBox{
 	 margin-top: 30px;
 	 margin-bottom: 20px;
 }
 .app-container{
 	min-height: 800px;
 }
</style>