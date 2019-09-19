<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2019/9/19
  Time: 14:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta content="4" name="menu">
    <title>xxxxx</title>

    <%--引入css--%>
    <link rel="stylesheet" href="/layui/css/layui.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/easyui/easyui.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/easyui/icon.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/layui/css/formSelects-v4.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/js/viewer/viewer.min.css">
    <link rel="stylesheet" type="text/css" href="/js/kindeditor/themes/default/default.css">
    <link rel="stylesheet" type="text/css" href="/js/kindeditor/plugins/code/prettify.css">
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">

    <%--引入js--%>
    <script src="/js/jquery-1.11.1.js"></script>
    <script src="/js/vue/vue.min.js"></script>
    <script src="/layui/layui.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/features/ebay/item/ebay_02/single_property/jquery.easyui.min-1.7.0.js"></script>
    <script type="text/javascript" src="/js/easyui/easyui.util.js"></script>
    <script type="text/javascript" src="/js/viewer/viewer-jquery.min.js"></script>
    <script type="text/javascript" src="/js/kindeditor/kindeditor-all.js"></script>
    <script type="text/javascript" src="/js/kindeditor/lang/zh-CN.js"></script>
    <script type="text/javascript" src="/js/kindeditor/plugins/code/prettify.js"></script>
    <script src="index.js"></script>

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

        /*        .layui-form-radio {
                    line-height: 28px;
                    margin: 6px 10px 0 0;
                    padding-right: 10px;
                    cursor: pointer;
                    font-size: 0
                }

                .layui-form-radio * {
                    font-size: 14px
                }

                .layui-form-radio > i {
                    margin-right: 8px;
                    font-size: 22px;
                    color: #c2c2c2
                }

                .layui-form-radio > i:hover, .layui-form-radioed > i {
                    color: #5FB878
                }*/
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

        #suggestCategoryDiv span:hover{
            cursor: pointer;
            background-color: #ffa007;
            color: white;
        }

        .jqzoom{float:left;border:none;position:relative;padding:0px;cursor:pointer;margin:0px;display:block;}
        .zoomdiv{z-index:100;position:absolute;top:0px;left:0px;width:350px;height:350px;background:#ffffff;border:1px solid #CCCCCC;display:none;text-align:center;overflow:hidden;}
        .jqZoomPup{z-index:10;visibility:hidden;position:absolute;top:0px;left:0px;width:20px;height:20px;border:1px solid #aaa;background:#ffffff /*url(../images/zoom.png) 50% center no-repeat*/;opacity: 0.5;-moz-opacity: 0.5;-khtml-opacity: 0.5;filter: alpha(Opacity=50);}

        .el-header, .el-footer {
            background-color: #B3C0D1;
            color: #333;
            text-align: center;
            line-height: 60px;
        }

        .el-aside {
            background-color: #D3DCE6;
            color: #333;
            text-align: center;
            line-height: 200px;
        }

        .el-main {
            background-color: #E9EEF3;
            color: #333;
            text-align: center;
            line-height: 160px;
        }

        body > .el-container {
            margin-bottom: 40px;
        }

        .el-container:nth-child(5) .el-aside,
        .el-container:nth-child(6) .el-aside {
            line-height: 260px;
        }

        .el-container:nth-child(7) .el-aside {
            line-height: 320px;
        }
    </style>
</head>
<body>
<%--<div id="productDiv">
    <div class="layui-row layui-form" id="proImagesDiv">
        <div  class="layui-col-sm12 rch-margin-top-1" v-for="sku in spu.skuList">
            <div class="layui-row">
                <div class="layui-col-sm2">
                    <span>{{sku.skuName}}</span>
                </div>
            </div>
            <div class="layui-row viewImg">
                <div class="layui-col-sm2 text-left" style="border: 2px goldenrod solid;width: 120px;margin-right: 5px;" v-for="(img, i) in sku.productImageVOList">
                    <div class="layui-row">
                        <div class="layui-col-sm12">
                            <div class="layui-row">
                                <div  class="layui-col-sm12 imgShow">
                                    <img :sku="sku.skuName" :id="'img' + i" :img-index="i" :data-original="img.url" :src="img.url" style="width: 100%;height: 100px" ></span>
                                </div>
                            </div>
                            <div class="layui-row">
                                <div class="layui-col-sm12 imagCheck" v-for="(picType, platform) in img.picTypeForPlatform">
                                    <div class="layui-col-sm2">{{platform}}:</div>
                                    <div class="layui-col-sm5">
                                        <input :platform="platform" :sku-id="sku.skuId" :rch-image-id= "i" type="checkbox" lay-filter="ebaySelectedImages" lay-skin="primary" value="0"  title="主" v-model="picType">
                                    </div>
                                    <div class="layui-col-sm5">
                                        <input :platform="platform" :sku-id="sku.skuId" :rch-image-id="i"  type="checkbox" lay-filter="ebaySelectedImages" lay-skin="primary"  value="1"  title="副" v-model="picType">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>--%>
<div id="app">
    <div class="demo-image__lazy">
        <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
    </div>
    <el-calendar v-model="date">
    </el-calendar>
    <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
        </el-date-picker>
    </div>
    <div class="block">
        <span class="demonstration">带快捷选项</span>
        <el-date-picker
                v-model="value2"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
        </el-date-picker>
    </div>
    <el-switch
            v-model="value1"
            active-color="#13ce66"
            inactive-color="#ff4949">
    </el-switch>

    <el-select v-model="value" clearable placeholder="请选择">
        <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </el-option>
    </el-select>
    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字" controls-position="right"></el-input-number>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-checkbox v-model="checked">备选项</el-checkbox>
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
        <p>Try Element</p>
    </el-dialog>

    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>

    <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
    <el-link type="primary">主要链接</el-link>
    <el-link type="success">成功链接</el-link>
    <el-link type="warning">警告链接</el-link>
    <el-link type="danger">危险链接</el-link>
    <el-link type="info">信息链接</el-link>

    <div>
        <el-link disabled>默认链接</el-link>
        <el-link type="primary" disabled>主要链接</el-link>
        <el-link type="success" disabled>成功链接</el-link>
        <el-link type="warning" disabled>警告链接</el-link>
        <el-link type="danger" disabled>危险链接</el-link>
        <el-link type="info" disabled>信息链接</el-link>
    </div>

    <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
    </el-row>

    <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>

    <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
    </el-container>

    <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
    </el-container>

    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
    </el-container>

    <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>

    <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>

    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>

    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>

</div>
<script>
    var productObj = {
        layer: undefined
        ,titleCountMsg: '标题的数量不能超过15个'
        ,deleteTitleCount: '标题的数量不能小于3'
        ,addSellPointCount: '卖点的数量不能超过15个'
        ,delSellPointCount: '卖点的数量不能低于1个'
        ,addKeywordsCount: '关键词的数量不能超过15个'
        ,delKeywordsCount: '关键词的数量不能低于1个'
        ,form: undefined
        ,vueObj: undefined,
        oldProductProperty: undefined, // 之前的广告属性
        ebayPlatformId: 1,
        ebayPublicProductInfo: undefined,
        minTitleCount: 3,
        spuCode: 'AB00002A1',
        formSelects: undefined,
        resultCode: undefined,
        productLineId: 1,
        ebayKey: 'Ebay',
        ebayAdsInfo: undefined,
        savePublishInfoResult: undefined,
        initClick: false,
        laydate: undefined,
        productLineName: undefined,
        languageDesc: {desc: 'description', specifications: 'specifications', packageIncluded: 'packageIncluded', note: 'note'},
        siteDesc: {descForSite: 'descriptionForSite', specificationsForSite: 'specificationsForSite', packageIncludedForSite: 'packageIncludedForSite', noteForSite: 'noteForSite'},
        languageEditor: {},
        siteEditor: {},
        publishProductIndex: undefined
    };
    $(function () {
        new Vue({
            el: '#app',
            data: {
                radio: '1',
                visible: false,
                checked: true,
                input: 'eee',
                num: 1,
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                //value1: true,
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value1: '',
                value2: '',
                date: new Date(),
                urls: [
                    'http://highqualityforyou.com/images/ebayori/BA/BA00232A1-eM1.jpg',
                    'http://highqualityforyou.com/images/ebayori/BA/BA00232A1-eM1.jpg',
                    'http://highqualityforyou.com/images/ebayori/BA/BA00232A1-eM1.jpg',
                    'http://highqualityforyou.com/images/ebayori/BA/BA00232A1-eM1.jpg',
                    'http://highqualityforyou.com/images/ebayori/BA/BA00232A1-eM1.jpg',
                    'http://highqualityforyou.com/images/ebayori/BA/BA00232A1-eM1.jpg',
                    'http://highqualityforyou.com/images/ebayori/BA/BA00232A1-eM1.jpg'
                ]
            },
            methods: {
                handleChange(value) {
                    console.log(value);
                }
            }
        })
       /* var vueObj = new Vue({
            el: '#productDiv',
            created() {
                // 获取spu的信息
                this.getSpuInfo();
                console.info('====')
            },
            mounted() {

            },
            data: {
                spu: {
                    skuList:  [],
                    isMultiple: false
                }
            },
            methods: {
                getSpuInfo() {
                    let that = this;
                    $.ajax({
                        url: '/product/editor/getSpuInfoForEdit.do',
                        dataType: 'json',
                        data: {spu: productObj.spuCode},
                        success: function (result) {
                            that.spu = result;
                            that.$nextTick(function () {
                                console.info(productObj.form)
                            })
                        },
                        error: function () {
                            errorMessage('该spu不存在或者查询出错');
                        }
                    })
                }
            }
        });

        layui.use(['element', 'form', 'laydate', 'layedit'], function(){
            var form = layui.form;
            productObj.form = form;


            vueObj.$nextTick(function () {
                $('.viewImg').viewer({
                    url: 'data-original',
                });

                // 加载详情图片
                var $detailImgs = $(".detailImgs").find('img');
                for (var i = 0; i < $detailImgs.length; i++) {
                    $detailImgs[i].src = $($detailImgs[i]).attr('data-original');
                }
                if (productObj.form != undefined) {
                    productObj.form.render('select');
                    productObj.form.render('checkbox');
                }

                $(".imgShow").hover(function (e) {
                    var settings = {
                        xzoom: 200,//zoomed width default width
                        yzoom: 200,//zoomed div default width
                        offset: 10,	//zoomed div default offset
                        position: "right",//zoomed div default position,offset position is to the right of the image
                        lens: 1, //zooming lens over the image,by default is 1;
                        preload: 1
                    };
                    var imageLeft = this.offsetLeft;
                    var imageTop =  $(this).get(0).offsetTop;
                    var bigimage = $(this).children("img").attr("data-original");
                    var imageWidth = $(this).children('img').get(0).offsetWidth;

                    if($("div.zoomdiv").get().length == 0){
                        $(this).after("<div class='zoomdiv'><img style='width: 100%' class='bigimg' src='"+bigimage+"'/></div>");
                        $(this).append("<div class='jqZoomPup'>&nbsp;</div>");
                    }
                    if (imageLeft + imageWidth + settings.offset + settings.xzoom > screen.width) {
                        leftpos = imageLeft - settings.offset - settings.xzoom;
                    } else {
                        leftpos = imageLeft + imageWidth + settings.offset;
                    }
                    if (e.pageX + $(this).get(0).offsetWidth + 400 > screen.width) {
                        imageTop = imageTop + $(this).children('img').get(0).offsetHeight;
                        leftpos = leftpos - imageWidth;
                    }
                    $("div.zoomdiv").css({ top: imageTop,left: leftpos});
                    $("div.zoomdiv").width(400);
                    $("div.zoomdiv").height(400);
                    $("div.zoomdiv").show();

                    $(this).mouseleave(function (e) {
                        $("div.zoomdiv").remove();
                    });
                });
            })
        });*/


    });

    window.onload = function () {
        $('.viewImg').viewer({
            url: 'data-original',
        });

        // 加载详情图片
        var $detailImgs = $(".detailImgs").find('img');
        for (var i = 0; i < $detailImgs.length; i++) {
            $detailImgs[i].src = $($detailImgs[i]).attr('data-original');
        }
        if (productObj.form != undefined) {
            productObj.form.render('select');
            productObj.form.render('checkbox');
        }

        $(".imgShow").hover(function (e) {
            var settings = {
                xzoom: 200,//zoomed width default width
                yzoom: 200,//zoomed div default width
                offset: 10,	//zoomed div default offset
                position: "right",//zoomed div default position,offset position is to the right of the image
                lens: 1, //zooming lens over the image,by default is 1;
                preload: 1
            };
            var imageLeft = this.offsetLeft;
            var imageTop =  $(this).get(0).offsetTop;
            var bigimage = $(this).children("img").attr("data-original");
            var imageWidth = $(this).children('img').get(0).offsetWidth;

            if($("div.zoomdiv").get().length == 0){
                $(this).after("<div class='zoomdiv'><img style='width: 100%' class='bigimg' src='"+bigimage+"'/></div>");
                $(this).append("<div class='jqZoomPup'>&nbsp;</div>");
            }
            if (imageLeft + imageWidth + settings.offset + settings.xzoom > screen.width) {
                leftpos = imageLeft - settings.offset - settings.xzoom;
            } else {
                leftpos = imageLeft + imageWidth + settings.offset;
            }
            if (e.pageX + $(this).get(0).offsetWidth + 400 > screen.width) {
                imageTop = imageTop + $(this).children('img').get(0).offsetHeight;
                leftpos = leftpos - imageWidth;
            }
            $("div.zoomdiv").css({ top: imageTop,left: leftpos});
            $("div.zoomdiv").width(400);
            $("div.zoomdiv").height(400);
            $("div.zoomdiv").show();

            $(this).mouseleave(function (e) {
                $("div.zoomdiv").remove();
            });
        });
    }
</script>
</body>
</html>
