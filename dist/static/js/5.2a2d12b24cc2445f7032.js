webpackJsonp([5],{"6NzZ":function(a,e,n){"use strict";var t=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"manually-coin"},[n("div",{staticClass:"manually-up"},[a._l(a.transferDTOS,function(e,t){return n("el-form",{key:t,ref:"transferDTOS",refInFor:!0,staticClass:"manually-list",attrs:{model:a.transferDTOS[t],"label-width":"120px",size:"small",inline:!0,rules:a.formRule}},[n("el-form-item",{attrs:{label:"转账地址"+(t+1),prop:"address"}},[n("el-input",{attrs:{placeholder:"请输入以太坊地址"},model:{value:e.address,callback:function(n){a.$set(e,"address",n)},expression:"v.address"}})],1),a._v(" "),n("el-form-item",{attrs:{prop:"value"}},[n("el-input",{attrs:{placeholder:"请输入转账金额"},model:{value:e.value,callback:function(n){a.$set(e,"value",n)},expression:"v.value"}})],1),a._v(" "),n("el-form-item",[n("el-button",{staticClass:"el-icon-circle-close",on:{click:function(e){a.delAddress(t)}}})],1)],1)}),a._v(" "),n("div",[n("el-button",{attrs:{type:"primary",loading:a.loading},on:{click:a.submitForm}},[a._v("确认提币")]),a._v(" "),n("el-button",{on:{click:a.addAddress}},[a._v("添加地址")])],1)],2),a._v(" "),n("div",{staticClass:"manually-down"},[n("el-table",{staticStyle:{width:"100%"},attrs:{loading:a.loading,data:a.transactionData.list}},[n("el-table-column",{attrs:{prop:"orderId",label:"单号"}}),a._v(" "),n("el-table-column",{attrs:{prop:"createdAt",label:"时间"}}),a._v(" "),n("el-table-column",{attrs:{prop:"quantityStr",label:"金额"}}),a._v(" "),n("el-table-column",{attrs:{prop:"toAddress",label:"转账ID"}}),a._v(" "),n("el-table-column",{attrs:{label:"状态"},scopedSlots:a._u([{key:"default",fn:function(e){return[n("span",[a._v(a._s(0===e.row.status?"等待":1===e.row.status?2===e.row.status:"提现失败"))])]}}])})],1),a._v(" "),n("div",{staticClass:"pagination-style"},[n("el-pagination",{attrs:{"page-size":a.pageSize,layout:"prev, pager, next",total:a.transactionData.total},on:{"current-change":a.handleCurrentChange}})],1)],1)])},l=[],i={render:t,staticRenderFns:l};e.a=i},"9XN9":function(a,e,n){e=a.exports=n("BkJT")(!0),e.push([a.i,".manually-coin[data-v-7e773b90]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.manually-coin .manually-down[data-v-7e773b90],.manually-coin .manually-up[data-v-7e773b90]{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;border:1px solid #ddd}.manually-coin .manually-up[data-v-7e773b90]{padding:20px}.manually-coin .manually-up .manually-label[data-v-7e773b90]{line-height:40px}.manually-coin .manually-up .manually-address[data-v-7e773b90],.manually-coin .manually-up .manually-balance[data-v-7e773b90]{margin-right:20px}.manually-coin .manually-handler[data-v-7e773b90]{width:550px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.manually-coin .manually-down[data-v-7e773b90]{padding:20px}","",{version:3,sources:["D:/njh/新建文件夹/mvc-console/src/views/workSpace/manuallyCoin/index.vue"],names:[],mappings:"AACA,gCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,4FAEI,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,WAAY,AACZ,qBAAuB,CAC1B,AACD,6CACI,YAAc,CACjB,AACD,6DACM,gBAAkB,CACvB,AAID,8HACM,iBAAmB,CACxB,AACD,kDACI,YAAa,AACb,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,6BAA+B,CAC1C,AACD,+CACI,YAAc,CACjB",file:"index.vue",sourcesContent:["\n.manually-coin[data-v-7e773b90] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.manually-coin .manually-up[data-v-7e773b90],\n  .manually-coin .manually-down[data-v-7e773b90] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    width: 100%;\n    border: 1px solid #ddd;\n}\n.manually-coin .manually-up[data-v-7e773b90] {\n    padding: 20px;\n}\n.manually-coin .manually-up .manually-label[data-v-7e773b90] {\n      line-height: 40px;\n}\n.manually-coin .manually-up .manually-address[data-v-7e773b90] {\n      margin-right: 20px;\n}\n.manually-coin .manually-up .manually-balance[data-v-7e773b90] {\n      margin-right: 20px;\n}\n.manually-coin .manually-handler[data-v-7e773b90] {\n    width: 550px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.manually-coin .manually-down[data-v-7e773b90] {\n    padding: 20px;\n}\n"],sourceRoot:""}])},CLlh:function(a,e,n){"use strict";function t(a){n("rXq8")}Object.defineProperty(e,"__esModule",{value:!0});var l=n("a3ih"),i=n("6NzZ"),r=n("/Xao"),s=t,o=r(l.a,i.a,!1,s,"data-v-7e773b90",null);e.default=o.exports},E4LH:function(a,e,n){"use strict";function t(a){return!!/^[0-9]+\.?[0-9]{0,9}$/.test(a)}e.a=t},a3ih:function(a,e,n){"use strict";var t=n("4YfN"),l=n.n(t),i=n("E4LH"),r=n("9rMa");e.a={name:"manuallyCoin",data:function(){var a=function(a,e,n){e?n():n(new Error("请输入以太坊地址"))},e=function(a,e,n){e?Object(i.a)(e)?n():n(new Error("请输入正确金额")):n(new Error("请输入转账金额"))};return{loading:!1,pageNo:1,pageSize:10,recordData:[],transferDTOS:[{address:"",value:"",type:window.urlData.type}],formRule:{address:[{required:!0,trigger:"blur",validator:a}],value:[{required:!0,trigger:"blur",validator:e}]}}},computed:l()({},Object(r.b)({transactionData:"transactionData"})),mounted:function(){this.getRecord()},methods:{addAddress:function(){var a={address:"",value:"",type:window.urlData.type};this.transferDTOS.push(a)},handleCurrentChange:function(a){this.pageNo=a,this.getRecord()},delAddress:function(a){this.transferDTOS.splice(a,1)},getRecord:function(){var a=this;this.loading=!0,this.$store.dispatch("getTransactions","?pageNo="+this.pageNo+"&pageSize="+this.pageSize+"&type=2").then(function(){a.loading=!1}).catch(function(e){a.$message.error(e)})},submitForm:function(){var a=this,e=!0;if(this.$refs.transferDTOS.forEach(function(a,n){a.validate(function(a){e=!!a})}),e){var n={type:window.urlData.type,transferDTOS:this.transferDTOS};this.loading=!0,this.$store.dispatch("getBatchTransfer",n).then(function(){a.getRecord(),a.$refs.transferDTOS.forEach(function(a,e){a.resetFields()}),a.loading=!1,a.$message.success("确认成功")}).catch(function(e){a.$message.error(e),a.loading=!1})}else this.$message.error("请正确填写信息")}}}},rXq8:function(a,e,n){var t=n("9XN9");"string"==typeof t&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);n("8bSs")("3ad4357d",t,!0)}});
//# sourceMappingURL=5.2a2d12b24cc2445f7032.js.map