<html>
<head>
    <meta content="4" name="menu">
    <title>亚马逊刊登</title>

    <%--引入css--%>
    <link rel="stylesheet" href="/layui/css/layui.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/easyui/easyui.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/easyui/icon.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/layui/css/formSelects-v4.css">
    <link rel="stylesheet" href="/font/font-awesome-4.7.0/css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="/js/kindeditor/themes/default/default.css">
    <link rel="stylesheet" type="text/css" href="/js/kindeditor/plugins/code/prettify.css">

    <%--引入js--%>
    <script src="/js/jquery-1.11.1.js"></script>
    <script src="/js/vue/vue.min.js"></script>
    <script src="/layui/layui.js"></script>
    <script type="text/javascript" src="/kindeditor/kindeditor-all.js"></script>
    <script type="text/javascript" src="/kindeditor/lang/zh-CN.js"></script>
    <script type="text/javascript" src="/kindeditor/plugins/code/prettify.js"></script>


    <style>
        .layui-input{
            border: 2px solid #a6ddff;
        }

        .text-left{
            text-align: left;
        }

        .text-right{
            text-align: right;
        }

        .text-center{
            text-align: center;
        }

        .rch-border{
            border:2px solid #84a0c4;
        }
        .layui-this{
            color: red !important;
        }
        .layui-input{
            height: 26px;
        }
        .rch-btn{
            display: inline-block;
            height: 26px;
            line-height: 26px;
            padding: 0 9px;
            background-color: #009688;
            color: #fff;
            white-space: nowrap;
            text-align: center;
            font-size: 14px;
            border: none;
            border-radius: 2px;
            cursor: pointer
        }
        .rch-margin-left-2{
            margin-left: -2%;
        }
        .rch-margin-top-2{
            margin-top: 2%;
        }
        .rch-margin-top-1{
            margin-top: 1%;
        }
        .rch-show{
            display: inline;
        }
        .rch-hide{
            display: none;
        }
        .layui-form-radio {
            line-height: 28px;
            margin: 0px 0px 0 0;
            padding-right: 0px;
            cursor: pointer;
            font-size: 0
        }

        .layui-form-radio * {
            font-size: 14px
        }

        .layui-form-radio > i {
            margin-right: 8px;
            font-size: 14px;
            color: #c2c2c2
        }

        .layui-form-radio > i:hover, .layui-form-radioed > i {
            color: #5FB878
        }
        .layui-btn{
            background-color: #ffa007;
            color: white;
        }
        .layui-form-checkbox span {
            color: black;
        }
        .layui-form-checkbox span{
            margin-left: -9px;
        }
        .imagCheck .layui-form-checkbox i{
            width: 10px;
            height: 10px;
        }
        .siteCheck .layui-form-checkbox i{
            border: 2px #ffa007 solid;
        }
        .rch-row{
            height: 28px;
        }
        .accountSelect .layui-form-checkbox{
            margin-bottom: 2px;
        }
        .accountSelect thead tr{
            background-color:#cbddf3;
            font-weight: bolder;
        }
        .accountSelect thead tr td{
            font-size: 18px;
        }
        .titleTable thead tr{
            background-color:#a6ddff;
            font-weight: bolder;
        }
        .titleTable thead tr td{
            font-size: 18px;
        }
        .skuInfoTable table tr:hover{
            background-color: #a6ddff;
        }
        .skuInfoTable table tr td {
            border: 1px solid #0a0b0c;
        }
        .titleTable table tr td{
            border: 1px solid #0a0b0c;
        }
        .ebayAccountTable tr:hover{
            background-color: #a6ddff;
        }
        .rch-red {
            color: red;
        }
        .rch-bolder{
            font-weight: bolder;
        }
        .layui-table td{
            text-align: center;
        }
    </style>
</head>
<body>
<div class="layui-fluid" id="amazonUploadDiv">
    <div class="layui-row layui-col-space15">
        <div class="layui-col-sm12">
            <div class="layui-card">
                <div class="layui-card-body">
                    <div class="layui-row layui-form">
                        <div class="layui-row">
                            <div class="layui-col-sm8 text-right">
                                <button class="rch-btn" id="saveUploadInfo"><i class="fa fa-save"></i>保存</button>
                                <button class="rch-btn" style="background-color: red"><i class="layui-icon layui-icon-upload"></i>刊登</button>
                            </div>
                        </div>
                        <div class="layui-row rch-margin-top-1">
                            <div class="layui-col-sm1 text-left"><span>主目录</span></div>
                            <div class="layui-col-sm6"><input readonly class="layui-input" v-model="amazonCategory.mainCategoryName"></div>
                        </div>
                        <%--sku信息--%>
                        <div class="rch-margin-top-1 layui-row">
                            <div class="layui-col-sm1 text-left"><span>SKU:</span></div>
                            <div class="layui-col-sm1" v-for="sku in spu.skuList">
                                <input checked :sku-id="sku.skuId" lay-filter="selectSku" lay-skin="primary" type="checkbox" :title="sku.skuName">
                            </div>
                            <div class="layui-col-sm3">
                                <button class="rch-btn" onclick="addSkuBtn()"><i class="layui-icon layui-icon-add-circle"></i>新增sku</button>
                            </div>
                        </div>
                        <%--站点选择--%>
                        <div class="layui-row rch-margin-top-1" id="uploadAccountSelect">
                            <div class="layui-row">
                                <div class="layui-col-sm2 text-left">
                                    <span style="font-weight: bolder">刊登账号选择:</span>
                                </div>
                            </div>
                            <div class="layui-row">
                                <table class="layui-table">
                                   <thead>
                                   <tr>
                                       <td style="width: 10%;" class="text-center">站点</td>
                                       <td style="width: 90%" class="text-center">账号</td>
                                   </tr>
                                   </thead>
                                    <tr v-for="amazonUploadAccount in amazonAllSiteUploadAccountList">
                                       <td>{{amazonUploadAccount.siteName}}</td>
                                       <td style="padding: 0">
                                           <div class="layui-col-sm1" style="margin-bottom: 2px" v-for="account in amazonUploadAccount.accountList"><input :site-name="amazonUploadAccount.siteName" :account-id="account.accountId" :site-id="amazonUploadAccount.siteId" lay-filter="selectAccount" lay-skin="primary" type="checkbox" :title="account.accountName"></div>
                                       </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <%--sku标题--%>
                        <div class="layui-row rch-margin-top-1">
                            <div class="layui-row">
                                <div class="layui-col-sm8 text-left">
                                    <span>标题:</span>
                                </div>
                            </div>
                            <div class="layui-tab">
                                <ul class="layui-tab-title">
                                    <li v-for="(skuSiteAccountTitle, i) in skuSiteAccountTitleList" :class="i == 0 ? 'layui-this' : ''">{{skuSiteAccountTitle.skuName}}</li>
                                </ul>
                                <div class="layui-tab-content">
                                    <div v-for="(skuSiteAccountTitle, i) in skuSiteAccountTitleList" :class="i == 0 ? 'layui-tab-item layui-show' : 'layui-tab-item'">
                                        <div class="layui-row">
                                            <div class="layui-row">
                                                <div class="layui-col-sm1 text-left">
                                                    <span class="rch-bolder">标题:</span>
                                                </div>
                                            </div>
                                            <div class="layui-row">
                                                <table class="layui-table">
                                                    <thead>
                                                    <tr>
                                                        <td style="width: 10%" class="text-center">站点</td>
                                                        <td style="width: 10%" class="text-center">账号</td>
                                                        <td style="width: 80%" class="text-center">标题</td>
                                                    </tr>
                                                    </thead>
                                                    <tr v-for="site in skuSiteAccountTitle.siteAccountList">
                                                        <td>{{site.siteName}}</td>
                                                        <td style="padding: 0px">
                                                            <div v-for="account in site.accountList" class="layui-row" style="border-bottom: 2px blueviolet solid;height: 30px;"><span>{{account.accountName}}</span></div>
                                                        </td>
                                                        <td style="padding: 0px">
                                                            <div  v-for="account in site.accountList" class="layui-row" style="border-bottom: 2px blueviolet solid;height: 30px;"><input class="layui-input" v-model="account.title"></div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
