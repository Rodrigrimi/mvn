/*!   GeneXus Java 17_0_2-148375 on February 23, 2021 1:2:50.14
*/
gx.evt.autoSkip=!1;gx.define("gam_connectionentry",!1,function(){this.ServerClass="gam_connectionentry";this.PackageName="genexus.security.backend";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.e130m1_client=function(){return this.clearMessages(),this.call("genexus.security.backend.gam_connectionentry",[gx.getMessage("XML"),this.AV13pConnectionName],null,["Mode","pConnectionName"]),this.refreshOutputs([{av:"AV13pConnectionName",fld:"vPCONNECTIONNAME",pic:""}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e110m1_client=function(){return this.clearMessages(),gx.text.compare(gx.fn.getCtrlProperty("ACTIONSCONTAINER","Class"),"ActionsContainer")==0?gx.fn.setCtrlProperty("ACTIONSCONTAINER","Class","ActionsContainerVisible"):gx.fn.setCtrlProperty("ACTIONSCONTAINER","Class","ActionsContainer"),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ACTIONSCONTAINER","Class")',ctrl:"ACTIONSCONTAINER",prop:"Class"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e120m1_client=function(){return this.clearMessages(),this.call("genexus.security.backend.gam_connectionentry",["UPD",this.AV13pConnectionName],null,["Mode","pConnectionName"]),this.refreshOutputs([{av:"AV13pConnectionName",fld:"vPCONNECTIONNAME",pic:""}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e150m2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e160m2_client=function(){return this.executeServerEvent("'GENERATEKEY'",!1,null,!1,!1)};this.e170m2_client=function(){return this.executeServerEvent("'DELETE'",!0,null,!1,!1)};this.e190m1_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];this.GXLastCtrlId=90;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLE3",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TEXTBLOCK1",format:0,grid:0,ctrltype:"textblock"};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"SHOWHIDE",grid:0,evt:"e110m1_client"};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"ACTIONSCONTAINER",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"TABLEEDIT",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"IMAGE3",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"TEXTBLOCK2",format:0,grid:0,evt:"e120m1_client",ctrltype:"textblock"};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"TABLE1",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"IMAGE1",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"FILE",format:0,grid:0,evt:"e130m1_client",ctrltype:"textblock"};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"TABLE5",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"IMAGE2",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"DELETECONNECTION",format:0,grid:0,evt:"e170m2_client",ctrltype:"textblock"};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"TABLE4",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCONNECTIONNAME",gxz:"ZV8ConnectionName",gxold:"OV8ConnectionName",gxvar:"AV8ConnectionName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8ConnectionName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV8ConnectionName=n)},v2c:function(){gx.fn.setControlValue("vCONNECTIONNAME",gx.O.AV8ConnectionName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV8ConnectionName=this.val())},val:function(){return gx.fn.getControlValue("vCONNECTIONNAME")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV14UserName",gxold:"OV14UserName",gxvar:"AV14UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14UserName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14UserName=n)},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV14UserName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV14UserName=this.val())},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"PASSCELL",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORD",gxz:"ZV15UserPassword",gxold:"OV15UserPassword",gxvar:"AV15UserPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV15UserPassword=n)},v2z:function(n){n!==undefined&&(gx.O.ZV15UserPassword=n)},v2c:function(){gx.fn.setControlValue("vUSERPASSWORD",gx.O.AV15UserPassword,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV15UserPassword=this.val())},val:function(){return gx.fn.getControlValue("vUSERPASSWORD")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCHALLENGEEXPIRE",gxz:"ZV5ChallengeExpire",gxold:"OV5ChallengeExpire",gxvar:"AV5ChallengeExpire",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV5ChallengeExpire=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV5ChallengeExpire=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCHALLENGEEXPIRE",gx.O.AV5ChallengeExpire,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV5ChallengeExpire=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCHALLENGEEXPIRE",gx.thousandSeparator)},nac:gx.falseFn};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,lvl:0,type:"char",len:32,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vKEY",gxz:"ZV12Key",gxold:"OV12Key",gxvar:"AV12Key",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12Key=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12Key=n)},v2c:function(){gx.fn.setControlValue("vKEY",gx.O.AV12Key,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV12Key=this.val())},val:function(){return gx.fn.getControlValue("vKEY")},nac:gx.falseFn};this.declareDomainHdlr(68,function(){});n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"BTNGENKEY",grid:0,evt:"e160m2_client"};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"TXTXMLCELL",grid:0};n[73]={id:73,fld:"TBTXTXML",format:0,grid:0,ctrltype:"textblock"};n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,fld:"",grid:0};n[77]={id:77,fld:"",grid:0};n[78]={id:78,lvl:0,type:"char",len:254,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPCONNECTIONNAME",gxz:"ZV13pConnectionName",gxold:"OV13pConnectionName",gxvar:"AV13pConnectionName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13pConnectionName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13pConnectionName=n)},v2c:function(){gx.fn.setControlValue("vPCONNECTIONNAME",gx.O.AV13pConnectionName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV13pConnectionName=this.val())},val:function(){return gx.fn.getControlValue("vPCONNECTIONNAME")},nac:gx.falseFn};this.declareDomainHdlr(78,function(){});n[79]={id:79,fld:"",grid:0};n[80]={id:80,fld:"",grid:0};n[81]={id:81,fld:"",grid:0};n[82]={id:82,fld:"",grid:0};n[83]={id:83,lvl:0,type:"char",len:2048,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCONNECTIONFILEXML",gxz:"ZV7ConnectionFileXML",gxold:"OV7ConnectionFileXML",gxvar:"AV7ConnectionFileXML",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV7ConnectionFileXML=n)},v2z:function(n){n!==undefined&&(gx.O.ZV7ConnectionFileXML=n)},v2c:function(){gx.fn.setControlValue("vCONNECTIONFILEXML",gx.O.AV7ConnectionFileXML,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV7ConnectionFileXML=this.val())},val:function(){return gx.fn.getControlValue("vCONNECTIONFILEXML")},nac:gx.falseFn};n[84]={id:84,fld:"",grid:0};n[85]={id:85,fld:"",grid:0};n[86]={id:86,fld:"",grid:0};n[87]={id:87,fld:"",grid:0};n[88]={id:88,fld:"BTNCANCEL",grid:0,evt:"e190m1_client"};n[89]={id:89,fld:"",grid:0};n[90]={id:90,fld:"BTNCONFIRM",grid:0,evt:"e150m2_client",std:"ENTER"};this.AV8ConnectionName="";this.ZV8ConnectionName="";this.OV8ConnectionName="";this.AV14UserName="";this.ZV14UserName="";this.OV14UserName="";this.AV15UserPassword="";this.ZV15UserPassword="";this.OV15UserPassword="";this.AV5ChallengeExpire=0;this.ZV5ChallengeExpire=0;this.OV5ChallengeExpire=0;this.AV12Key="";this.ZV12Key="";this.OV12Key="";this.AV13pConnectionName="";this.ZV13pConnectionName="";this.OV13pConnectionName="";this.AV7ConnectionFileXML="";this.ZV7ConnectionFileXML="";this.OV7ConnectionFileXML="";this.AV8ConnectionName="";this.AV14UserName="";this.AV15UserPassword="";this.AV5ChallengeExpire=0;this.AV12Key="";this.AV13pConnectionName="";this.AV7ConnectionFileXML="";this.Gx_mode="";this.Events={e150m2_client:["ENTER",!0],e160m2_client:["'GENERATEKEY'",!0],e170m2_client:["'DELETE'",!0],e190m1_client:["CANCEL",!0],e130m1_client:["'FILE'",!1],e110m1_client:["'SHOWHIDE'",!1],e120m1_client:["'EDIT'",!1]};this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV13pConnectionName",fld:"vPCONNECTIONNAME",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7ConnectionFileXML",fld:"vCONNECTIONFILEXML",pic:""}],[{av:"AV8ConnectionName",fld:"vCONNECTIONNAME",pic:""},{av:'gx.fn.getCtrlProperty("TXTXMLCELL","Visible")',ctrl:"TXTXMLCELL",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vCONNECTIONFILEXML","Visible")',ctrl:"vCONNECTIONFILEXML",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vPCONNECTIONNAME","Visible")',ctrl:"vPCONNECTIONNAME",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vCONNECTIONNAME","Enabled")',ctrl:"vCONNECTIONNAME",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("TABLEEDIT","Visible")',ctrl:"TABLEEDIT",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vUSERNAME","Enabled")',ctrl:"vUSERNAME",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("PASSCELL","Visible")',ctrl:"PASSCELL",prop:"Visible"},{av:"AV14UserName",fld:"vUSERNAME",pic:""},{av:"AV15UserPassword",fld:"vUSERPASSWORD",pic:""},{av:"AV5ChallengeExpire",fld:"vCHALLENGEEXPIRE",pic:"ZZZZZ9"},{av:"AV12Key",fld:"vKEY",pic:""},{ctrl:"BTNCONFIRM",prop:"Visible"},{ctrl:"BTNGENKEY",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vCHALLENGEEXPIRE","Enabled")',ctrl:"vCHALLENGEEXPIRE",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vKEY","Enabled")',ctrl:"vKEY",prop:"Enabled"},{ctrl:"BTNCONFIRM",prop:"Caption"}]];this.EvtParms.ENTER=[[{av:"AV8ConnectionName",fld:"vCONNECTIONNAME",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV14UserName",fld:"vUSERNAME",pic:""},{av:"AV15UserPassword",fld:"vUSERPASSWORD",pic:""},{av:"AV5ChallengeExpire",fld:"vCHALLENGEEXPIRE",pic:"ZZZZZ9"},{av:"AV12Key",fld:"vKEY",pic:""},{av:"AV13pConnectionName",fld:"vPCONNECTIONNAME",pic:""}],[]];this.EvtParms["'GENERATEKEY'"]=[[],[{av:"AV12Key",fld:"vKEY",pic:""}]];this.EvtParms["'DELETE'"]=[[{av:"AV13pConnectionName",fld:"vPCONNECTIONNAME",pic:""}],[{av:"AV13pConnectionName",fld:"vPCONNECTIONNAME",pic:""}]];this.EvtParms["'FILE'"]=[[{av:"AV13pConnectionName",fld:"vPCONNECTIONNAME",pic:""}],[{av:"AV13pConnectionName",fld:"vPCONNECTIONNAME",pic:""}]];this.EvtParms["'SHOWHIDE'"]=[[{av:'gx.fn.getCtrlProperty("ACTIONSCONTAINER","Class")',ctrl:"ACTIONSCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ACTIONSCONTAINER","Class")',ctrl:"ACTIONSCONTAINER",prop:"Class"}]];this.EvtParms["'EDIT'"]=[[{av:"AV13pConnectionName",fld:"vPCONNECTIONNAME",pic:""}],[{av:"AV13pConnectionName",fld:"vPCONNECTIONNAME",pic:""}]];this.EnterCtrl=["BTNCONFIRM"];this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(gam_connectionentry)})