<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="formInline">
      <el-form-item label="订单号：">
           <el-input></el-input>
      </el-form-item>
      
       <el-form-item label="保费金额：">
           <el-input></el-input>
      </el-form-item>
      
        <el-form-item label="投保人">
           <el-input></el-input>
      </el-form-item>
      
        <el-form-item label="失败原因">
            <el-select  v-model='formInline.status' placeholder="失败原因">
                <el-option label="自动失效" value="1"></el-option>
                <el-option label="支付失败" value="2"></el-option>
                <el-option label="主动取消" value="3"></el-option>
                <el-option label="申诉" value="4"></el-option>
            </el-select>
      </el-form-item>
      
          <el-form-item label="保单号">
           <el-input></el-input>
      </el-form-item>
      
      <div>
      	  <el-form-item>
              <el-button type="primary" icon="el-icon-search">查询</el-button>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" icon="el-icon-edit" @click="addVisible = true">添加</el-button>
          </el-form-item>
    
      </div>
  
    </el-form>
  		
  	</div>
     
 <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    style="width: 100%">
    <el-table-column
      property="bh"
      label="订单号">
    </el-table-column>
    <el-table-column
      property="date"
      label="订单生成时间">
    </el-table-column>
    <el-table-column
      property="name"
      label="保费金额">
    </el-table-column>
      <el-table-column
      property="tc"
      label="投保人">
    </el-table-column>
      <el-table-column
      property="ddje"
      label="分期期数">
    </el-table-column>
      <el-table-column
      property="tjr"
      label="保单号">
    </el-table-column>
      <el-table-column
      property="tjje"
      label="订单金额">
    </el-table-column>
     <el-table-column
      property="tjje"
      label="失败原因">
    </el-table-column>
     
      <el-table-column
      label="操作" min-width='100'>
      
       <template slot-scope="scope">
        <el-button
          size="mini"
          type='primary'
          @click="editVisible = true"">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="deleteVisible = true" >删除</el-button>

      </template>
    </el-table-column>
  </el-table>
     
<div class='pageBox'>
 <el-pagination
  background
  layout="prev, pager, next"
  :total="100">
 </el-pagination>
</div>


<!--删除-->
<el-dialog
  title="删除"
  :visible.sync="deleteVisible"
  width="30%">
  <span>确定要删除吗？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="deleteVisible = false">取 消</el-button>
    <el-button type="primary" @click="deleteVisible = false">确定</el-button>
  </span>
</el-dialog>

<!--添加-->
<el-dialog
  title="添加"
  :visible.sync="addVisible"
  width="30%">
  <div style="width:80%;">
  	 <el-form  label-width="100px" :model="sendForm">
        <el-form-item label="订单号">
          <el-input></el-input>
        </el-form-item>
        
        <el-form-item label="保费金额">
           <el-input></el-input>
        </el-form-item>
        
         <el-form-item label="投保人">
           <el-input></el-input>
         </el-form-item>
         
         <el-form-item label="保单号">
           <el-input></el-input>
         </el-form-item>
         
        <el-form-item label="订单金额">
           <el-input></el-input>
         </el-form-item>
         
           <el-form-item label="失败原因">
            <el-select  v-model='formInline.status' placeholder="失败原因">
                <el-option label="自动失效" value="1"></el-option>
                <el-option label="支付失败" value="2"></el-option>
                <el-option label="主动取消" value="3"></el-option>
                <el-option label="申诉" value="4"></el-option>
            </el-select>
      </el-form-item>
         
      </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="addVisible = false">取 消</el-button>
    <el-button type="primary" @click="addVisible = false">确 定</el-button>
  </span>
</el-dialog>


<!--编辑-->
<el-dialog
  title="编辑"
  :visible.sync="editVisible"
  width="30%">
  <div style="width:80%;">
  	 <el-form  label-width="100px" :model="sendForm">
           <el-form-item label="订单号">
          <el-input></el-input>
        </el-form-item>
        
        <el-form-item label="保费金额">
           <el-input></el-input>
        </el-form-item>
        
         <el-form-item label="投保人">
           <el-input></el-input>
         </el-form-item>
         
         <el-form-item label="保单号">
           <el-input></el-input>
         </el-form-item>
         
        <el-form-item label="订单金额">
           <el-input></el-input>
         </el-form-item>
         
           <el-form-item label="失败原因">
            <el-select  v-model='formInline.status' placeholder="失败原因">
                <el-option label="自动失效" value="1"></el-option>
                <el-option label="支付失败" value="2"></el-option>
                <el-option label="主动取消" value="3"></el-option>
                <el-option label="申诉" value="4"></el-option>
            </el-select>
      </el-form-item>
         
      </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="editVisible = false">取 消</el-button>
    <el-button type="primary" @click="editVisible = false">确 定</el-button>
  </span>
</el-dialog>



<!--申诉-->
<el-dialog
  title="申诉原因"
  :visible.sync="ssVisible"
  width="30%">
  <span>
  	 <el-radio v-model="radio" label="1">保单未交费</el-radio>
     <el-radio v-model="radio" label="2">保单已退保</el-radio>
  </span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="ssVisible = false">取 消</el-button>
    <el-button type="primary" @click="ssVisible = false">确定</el-button>
  </span>
</el-dialog>

<!--申诉处理中-->
<el-dialog
  title="提示"
  :visible.sync="clVisible"
  width="30%">
  <span>
  	 您的申诉已提交，请等待系统处理
  </span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="clVisible = false">取 消</el-button>
    <el-button type="primary" @click="clVisible = false">确定</el-button>
  </span>
</el-dialog>


</div>
</template>

<script>


export default{
  name: 'pagePermission',
  
  data(){
  	return{ 
  		    radio:'1',
  		    editVisible:false,
  		    addVisible:false,
  		    deleteVisible:false,
  		    clVisible:false,
  		     sendForm:{
  		     	 status:''
  		     },
  		     formInline:{
  		     	status:''
  		     },
  		     
  		     tableData: [{
  		     	bh:1234544,
            date: '2016-05-02 14:00',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算',
            flag:'1'
        },{
  		     	bh:1234544,
            date: '2016-05-02 14:00',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算'
        },{
  		     	bh:1234544,
            date: '2016-05-02 14:00',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算'
        },{
  		     	bh:1234544,
            date: '2016-05-02 14:00',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算'
        },{
  		     	bh:1234544,
            date: '2016-05-02 14:00',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算'
        },{
  		     	bh:1234544,
            date: '2016-05-02 14:00',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算'
        },{
  		     	bh:1234544,
            date: '2016-05-02 14:00',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算'
        },{
  		     	bh:1234544,
            date: '2016-05-02 14:00',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算'
        }],
  	}
  },
 
  methods: {
 
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