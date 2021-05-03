/*!   GeneXus Java 17_0_2-148375 on February 23, 2021 1:3:34.5
*/
gx.evt.autoSkip=!1;gx.define("gam_apppermissionselect",!1,function(){var n,t;this.ServerClass="gam_apppermissionselect";this.PackageName="genexus.security.backend";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",gx.thousandSeparator);this.AV19PermissionId=gx.fn.getControlValue("vPERMISSIONID");this.AV17isOK=gx.fn.getControlValue("vISOK");this.AV7ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",gx.thousandSeparator);this.AV19PermissionId=gx.fn.getControlValue("vPERMISSIONID")};this.e131f2_client=function(){return this.clearMessages(),this.call("genexus.security.backend.gam_apppermissionentry",["DSP",this.AV7ApplicationId,this.AV16Id],null,["Mode","ApplicationId","GUID"]),this.refreshOutputs([{av:"AV16Id",fld:"vID",pic:""},{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e141f2_client=function(){return this.clearMessages(),this.call("genexus.security.backend.gam_apppermissionchildren",[this.AV7ApplicationId,this.AV16Id],null,["ApplicationId","PermissionId"]),this.refreshOutputs([{av:"AV16Id",fld:"vID",pic:""},{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e111f2_client=function(){return this.executeServerEvent("'ADDSELECTED'",!1,null,!1,!1)};this.e151f2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e161f1_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,33,34,36,37,38,39,40,41];this.GXLastCtrlId=41;this.GridwwContainer=new gx.grid.grid(this,2,"WbpLvl2",35,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gam_apppermissionselect",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px",gx.getMessage("GXM_newrow"),!1,!1,!0,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridwwContainer;t.addCheckBox("Select",36,"vSELECT",gx.getMessage("Select"),"","Select","boolean","true","false",null,!0,!1,0,"px","WWActionColumn");t.addSingleLineEdit("Name",37,"vNAME",gx.getMessage("Permission name"),"","Name","char",0,"px",254,80,"left","e131f2_client",[],"Name","Name",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit("Dsc",38,"vDSC",gx.getMessage("Description"),"","Dsc","char",0,"px",254,80,"left",null,[],"Dsc","Dsc",!0,0,!1,!1,"Attribute",1,"WWColumn WWSecondaryColumn");t.addSingleLineEdit("Btnchildren",39,"vBTNCHILDREN","","","BtnChildren","char",0,"px",20,20,"left","e141f2_client",[],"Btnchildren","BtnChildren",!0,0,!1,!1,"TextActionAttribute TextLikeLink",1,"WWTextActionColumn");t.addSingleLineEdit("Id",40,"vID",gx.getMessage("GUID"),"","Id","char",0,"px",40,40,"left",null,[],"Id","Id",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Appid",41,"vAPPID",gx.getMessage("Key Numeric Long"),"","AppId","int",0,"px",12,12,"right",null,[],"Appid","AppId",!1,0,!1,!1,"Attribute",1,"");this.GridwwContainer.emptyText=gx.getMessage("");this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLE2",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILNAME",gxz:"ZV14FilName",gxold:"OV14FilName",gxvar:"AV14FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14FilName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14FilName=n)},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV14FilName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV14FilName=this.val())},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};this.declareDomainHdlr(10,function(){});n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLE3",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"CANCEL1",grid:0,evt:"e161f1_client"};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"ADDNEW1",grid:0,evt:"e111f2_client"};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"TABLE1",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CTLNAME111122",gxz:"ZV23GXV1",gxold:"OV23GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.GXV1=n)},v2z:function(n){n!==undefined&&(gx.O.ZV23GXV1=n)},v2c:function(){gx.fn.setControlValue("CTLNAME111122",gx.O.GXV1,0)},c2v:function(){this.val()!==undefined&&(gx.O.GXV1=this.val())},val:function(){return gx.fn.getControlValue("CTLNAME111122")},nac:gx.falseFn};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CTLNAME1111",gxz:"ZV24GXV2",gxold:"OV24GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.GXV2=n)},v2z:function(n){n!==undefined&&(gx.O.ZV24GXV2=n)},v2c:function(){gx.fn.setControlValue("CTLNAME1111",gx.O.GXV2,0)},c2v:function(){this.val()!==undefined&&(gx.O.GXV2=this.val())},val:function(){return gx.fn.getControlValue("CTLNAME1111")},nac:gx.falseFn};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[36]={id:36,lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:0,isacc:0,grid:35,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV20Select",gxold:"OV20Select",gxvar:"AV20Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV20Select=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV20Select=gx.lang.booleanValue(n))},v2c:function(n){gx.fn.setGridCheckBoxValue("vSELECT",n||gx.fn.currentGridRowImpl(35),gx.O.AV20Select,!0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV20Select=gx.lang.booleanValue(this.val(n)))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(35))},nac:gx.falseFn,values:["true","false"]};n[37]={id:37,lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:35,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV18Name",gxold:"OV18Name",gxvar:"AV18Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV18Name=n)},v2z:function(n){n!==undefined&&(gx.O.ZV18Name=n)},v2c:function(n){gx.fn.setGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(35),gx.O.AV18Name,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV18Name=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(35))},nac:gx.falseFn,evt:"e131f2_client"};n[38]={id:38,lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:35,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDSC",gxz:"ZV11Dsc",gxold:"OV11Dsc",gxvar:"AV11Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV11Dsc=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11Dsc=n)},v2c:function(n){gx.fn.setGridControlValue("vDSC",n||gx.fn.currentGridRowImpl(35),gx.O.AV11Dsc,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV11Dsc=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDSC",n||gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};n[39]={id:39,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:35,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBTNCHILDREN",gxz:"ZV10BtnChildren",gxold:"OV10BtnChildren",gxvar:"AV10BtnChildren",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV10BtnChildren=n)},v2z:function(n){n!==undefined&&(gx.O.ZV10BtnChildren=n)},v2c:function(n){gx.fn.setGridControlValue("vBTNCHILDREN",n||gx.fn.currentGridRowImpl(35),gx.O.AV10BtnChildren,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV10BtnChildren=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vBTNCHILDREN",n||gx.fn.currentGridRowImpl(35))},nac:gx.falseFn,evt:"e141f2_client"};n[40]={id:40,lvl:2,type:"char",len:40,dec:0,sign:!1,ro:0,isacc:0,grid:35,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV16Id",gxold:"OV16Id",gxvar:"AV16Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV16Id=n)},v2z:function(n){n!==undefined&&(gx.O.ZV16Id=n)},v2c:function(n){gx.fn.setGridControlValue("vID",n||gx.fn.currentGridRowImpl(35),gx.O.AV16Id,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV16Id=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vID",n||gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"int",len:12,dec:0,sign:!1,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:35,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAPPID",gxz:"ZV6AppId",gxold:"OV6AppId",gxvar:"AV6AppId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.AV6AppId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV6AppId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("vAPPID",n||gx.fn.currentGridRowImpl(35),gx.O.AV6AppId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV6AppId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("vAPPID",n||gx.fn.currentGridRowImpl(35),gx.thousandSeparator)},nac:gx.falseFn};this.AV14FilName="";this.ZV14FilName="";this.OV14FilName="";this.GXV1="";this.ZV23GXV1="";this.OV23GXV1="";this.GXV2="";this.ZV24GXV2="";this.OV24GXV2="";this.ZV20Select=!1;this.OV20Select=!1;this.ZV18Name="";this.OV18Name="";this.ZV11Dsc="";this.OV11Dsc="";this.ZV10BtnChildren="";this.OV10BtnChildren="";this.ZV16Id="";this.OV16Id="";this.ZV6AppId=0;this.OV6AppId=0;this.AV14FilName="";this.GXV1="";this.GXV2="";this.AV7ApplicationId=0;this.AV19PermissionId="";this.AV20Select=!1;this.AV18Name="";this.AV11Dsc="";this.AV10BtnChildren="";this.AV16Id="";this.AV6AppId=0;this.AV17isOK=!1;this.Events={e111f2_client:["'ADDSELECTED'",!0],e151f2_client:["ENTER",!0],e161f1_client:["CANCEL",!0],e131f2_client:["VNAME.CLICK",!1],e141f2_client:["VBTNCHILDREN.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9"},{av:"AV14FilName",fld:"vFILNAME",pic:""},{av:"AV19PermissionId",fld:"vPERMISSIONID",pic:"",hsh:!0}],[]];this.EvtParms["GRIDWW.LOAD"]=[[{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9"},{av:"AV19PermissionId",fld:"vPERMISSIONID",pic:"",hsh:!0},{av:"AV14FilName",fld:"vFILNAME",pic:""}],[{av:"AV6AppId",fld:"vAPPID",pic:"ZZZZZZZZZZZ9"},{av:"AV10BtnChildren",fld:"vBTNCHILDREN",pic:""},{av:"AV16Id",fld:"vID",pic:""},{av:"AV18Name",fld:"vNAME",pic:""},{av:"AV11Dsc",fld:"vDSC",pic:""}]];this.EvtParms["'ADDSELECTED'"]=[[{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9"},{av:"AV20Select",fld:"vSELECT",grid:35,pic:""},{av:"GRIDWW_nFirstRecordOnPage"},{av:"nRC_GXsfl_35",ctrl:"GRIDWW",grid:35,prop:"GridRC"},{av:"AV19PermissionId",fld:"vPERMISSIONID",pic:"",hsh:!0},{av:"AV16Id",fld:"vID",grid:35,pic:""},{av:"AV17isOK",fld:"vISOK",pic:""}],[{av:"AV17isOK",fld:"vISOK",pic:""}]];this.EvtParms["VNAME.CLICK"]=[[{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9"},{av:"AV16Id",fld:"vID",pic:""}],[{av:"AV16Id",fld:"vID",pic:""},{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9"}]];this.EvtParms["VBTNCHILDREN.CLICK"]=[[{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9"},{av:"AV16Id",fld:"vID",pic:""}],[{av:"AV16Id",fld:"vID",pic:""},{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9"}]];this.setVCMap("AV7ApplicationId","vAPPLICATIONID",0,"int",12,0);this.setVCMap("AV19PermissionId","vPERMISSIONID",0,"char",40,0);this.setVCMap("AV17isOK","vISOK",0,"boolean",4,0);this.setVCMap("AV7ApplicationId","vAPPLICATIONID",0,"int",12,0);this.setVCMap("AV19PermissionId","vPERMISSIONID",0,"char",40,0);this.setVCMap("AV7ApplicationId","vAPPLICATIONID",0,"int",12,0);this.setVCMap("AV19PermissionId","vPERMISSIONID",0,"char",40,0);t.addRefreshingVar({rfrVar:"AV7ApplicationId"});t.addRefreshingVar({rfrVar:"AV19PermissionId"});t.addRefreshingVar(this.GXValidFnc[10]);t.addRefreshingParm({rfrVar:"AV7ApplicationId"});t.addRefreshingParm({rfrVar:"AV19PermissionId"});t.addRefreshingParm(this.GXValidFnc[10]);this.addBCProperty("Gamapplication",["Name"],this.GXValidFnc[25],"AV5GAMApplication");this.addBCProperty("Apppermissionparent",["Name"],this.GXValidFnc[29],"AV9AppPermissionParent");this.Initialize()});gx.wi(function(){gx.createParentObj(gam_apppermissionselect)})