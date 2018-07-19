<template>
  <div class="dashboard-editor-container">
   

    <el-form label-width="90px">
      <div style="margin-bottom:30px;">
        <el-button type="primary">分期预算</el-button>
      </div>
     
      <el-form-item label="保险产品：">
        <el-input></el-input>
      </el-form-item>

       <el-form-item label="保单号">
        <el-input></el-input>
      </el-form-item>

         <el-form-item label="保险金额">
        <el-input></el-input>
      </el-form-item>

         <el-form-item label="分期期数">
        <el-input></el-input>
      </el-form-item>

      <div class="borderBox">
          <div style="margin-bottom:30px;">
            <el-button type="primary">分期测试</el-button>
         </div>
         <el-row>
           <el-col :span="8">
              <div class='lineSpan'>
                 <span class='bigSpan'>￥</span>
                 <span>0.00</span>
              </div>
              <div class='elBtn'>
                 <el-button plain>订单金额</el-button>
              </div>
               
           </el-col>
           <el-col :span="8">
                   <div class='lineSpan'>
                 <span class='bigSpan'>3</span>
                 <span>期</span>
              </div>
              <div class='elBtn'>
                 <el-button plain>期数</el-button>
              </div>
           </el-col>
           <el-col :span="8">
                <div class='lineSpan'>
                 <span class='bigSpan'>￥</span>
                 <span>0.00</span>
              </div>
              <div class='elBtn'>
                 <el-button plain>每期支付</el-button>
              </div>
           </el-col>
        </el-row>
      </div>

        <div style="margin-bottom:30px;margin-top:30px;">
        <el-button type="primary">缴费账户信息</el-button>
      </div>
     
      <el-form-item label="身份证号：">
        <el-input></el-input>
      </el-form-item>

    <el-form-item label="投保人：">
        <el-input></el-input>
      </el-form-item>

    <el-form-item label="开户银行：">
        <el-input></el-input>
      </el-form-item>

    <el-form-item label="扣款账户：">
        <el-input></el-input>
      </el-form-item>

        <div style="margin-bottom:30px;margin-top:30px;">
        <el-button type="primary">生成订单</el-button>
      </div>

    </el-form>
 
  </div>
</template>

<script>



export default {
  name: 'dashboard-admin',

  data() {
    return {
    	 topGroups:[],
    	  panelData:{
    	  	yd:{
    	  		addConsumerNum:0,
    	  		addOrderNum:0,
    	  		addOrderAmount:0
    	  	},
    	  	total:{
    	  		agentNum:0,
    	  		consumerNum:0,
    	  		orderAmount:0,
    	  		orderNum:0
    	  	}
    	  },
    	  tableData: [{
            name: '团队名称：',
            cont: '名称一'
          },{
            name: '累计成交订单金额：',
            cont: '1340000'
          },{
            name: '累计订单笔数：',
            cont: '10'
          },{
            name: '团队人数：',
            cont: '50'
          }],
      lineChartData: {
      	dateData:[],
      	expectedData:[],
      	actualData:[]
      }
    }
  },
  mounted(){
  
  },

  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.borderBox{
  padding:20px 20px;
  margin-top: 30px;
  border:1px solid #eee;
  border-radius: 5px;
}
.lineSpan{
  text-align: center;
}
.lineSpan .bigSpan{
  font-size: 32px;
}
.elBtn{
  margin-top: 10px;
  text-align:center;
}

.dashboard-editor-container {
  width:500px;
  padding: 32px;
  // background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
/*    padding: 16px 16px 0;*/
    margin-bottom: 32px;
  }
}
.chartName{
	height: 60px;
	text-align: center;
  line-height: 60px;
  color:#fff;
}
.chartCont{
	width: 100%;
}
.el-table .hidden-columns{
	width:50%;
}
.el-table__body, .el-table__footer, .el-table__header{
	width:100% !important;
}
.el-table__body, .el-table__footer, .el-table__header{
	width:100% !important;
}
.el-table__row{
	width: 50% !important;
}

.yellowSty{
	background:#f7c258;
}
.greenSty{
	background:#a5c562;
}
.redSty{
	background:#f56d61;
}
.chartName span{
	float: left;
	display: inline-block;
}
.inspan{
	display: inline-block;
}
.colspan{
	border:1px solid #ebeef5;
	height: 50px;
	line-height: 50px;
	text-indent: 10px;
	color:#606266;
}
.chartTitle{
	height: 50px;
	line-height: 50px;
	background: #0063d6;
	color:white;
	text-align: center;
}
</style>
