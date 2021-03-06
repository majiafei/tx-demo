var amazonProductObj = {
    platformId: 2,
    form: undefined,
    siteDesc: {descForSite: 'descriptionForSite', specificationsForSite: 'specificationsForSite', packageIncludedForSite: 'packageIncludedForSite', noteForSite: 'noteForSite'},
    siteEditor: {},
    kindEditorItems: ['justifyleft', 'justifycenter', 'justifyright', 'justifyfull', 'fontsize', 'forecolor', 'hilitecolor', 'bold', 'italic','clearhtml'],
    vueObj: undefined,
    spuCode: ''
}
$(function () {
    amazonProductObj.spuCode = 'ABC1234';

    var vueObj = new Vue({
        el: '#amazonUploadDiv',
        created() {
            this.getSpuCategory();
        },
        data: {
            amazonCategoryCopy: {mainCategoryId: 1, platformId: 2, mainCategoryName: '亚马逊主目录', siteCategoryList: [{siteId: 0, siteName: 'US', categoryId: 0, categoryName: ''}, {siteId: 2, siteName: 'CA', categoryId: 0, categoryName: 'CA'}]},
            amazonCategory: {},
            spu: {skuList: [{skuId: 1, skuName: 'BI01124A1'}, {skuId: 2, skuName: 'BI01124A2'}]},
            amazonAllSiteUploadAccountList: [{siteId: 0, siteName: 'US', languageId:1, accountList: [{accountId: 1, accountName: 'g06-a1-us'}, {accountId: 2, accountName: 'g06-a1-us'}]},
                                             {siteId: 2, siteName: 'CA', languageId:1, accountList: [{accountId: 1, accountName: 'g06-a1-ca'}]}],
            // amazonUploadProductInfo:[{siteId: 0, siteName: 'US', accountList: [{accountId: 1, accountName: 'g06-a1-us', uploadSkuList: [{skuId: 1, skuName: 'BI01124A1'}, {skuId: 1, skuName: 'BI01124A2'}]}, {accountId: 2, accountName: 'g06-a1-us', uploadSkuList: [{skuId: 1, skuName: 'BI01124A1'}, {skuId: 1, skuName: 'BI01124A2'}]}], keywordList: [{keyword: 'US'},{keyword: 'US'},{keyword: 'US'}], sellPointList:[{sellPoint: '卖点'}]}]
            amazonUploadProductInfo: [],
            // 已经选择的sku的集合
            checkedSkuList: [{skuId: 1, skuName: 'BI01124A1'}, {skuId: 2, skuName: 'BI01124A2'}],
            //{'BI01124A1': [{siteId: 0, siteName: 'US', accountList: [{accountId: 1, accountName: 'g06-a1-us'},{accountId: 2, accountName: 'g06-a1-us'}]}]}
           /* skuSiteAccountTitleList: [{skuId: 1, skuName: 'BI01124A1', siteAccountList: [{siteId: 0, siteName: 'US', accountList: [{accountId: 1, accountName: 'g06-a1-us'},{accountId: 2, accountName: 'g06-a1-us'}]}]},
                                      {skuId: 2, skuName: 'BI01124A2', siteAccountList: [{siteId: 0, siteName: 'US', accountList: [{accountId: 1, accountName: 'g06-a1-us'},{accountId: 2, accountName: 'g06-a1-us'}]}]}
                                     ]*/
            skuSiteAccountTitleList: [],
            //keySellPointDescForSiteList: [{siteId: 1, siteName: 'US', skuList: [{skuId: 1, skuName: 'BI01124A1', keywords:'', sellPointList:[{sellPoint:''},{sellPoint:''},{sellPoint:''},{sellPoint:''}]}]}]
            keySellPointDescForSiteList:[]
        },
        methods: {
            deleteSku(siteId, accountId, skuName) {
                let that = this;
                for (var i = 0; i < that.amazonUploadProductInfo.length; i++) {
                    if (that.amazonUploadProductInfo[i].siteId == siteId) {
                        for (var j = 0; j < that.amazonUploadProductInfo[i].accountList.length; j++) {
                            if (that.amazonUploadProductInfo[i].accountList[j].accountId == accountId) {
                                var skuList = that.amazonUploadProductInfo[i].accountList[j].uploadSkuList;
                                for (var m = 0; m < skuList.length; m++) {
                                    if (skuList[m].skuName == skuName) {
                                        skuList.splice(m , 1);
                                        break;
                                    }
                                }
                                if (skuList.length == 0) {
                                    that.amazonUploadProductInfo[i].accountList.splice(j , 1);
                                }
                                break;
                            }
                        }
                        if (that.amazonUploadProductInfo[i].accountList.length == 0) {
                            that.amazonUploadProductInfo.splice(i, 1);
                        }
                        break;
                    }
                }

                // 将所有的账号设置为不选择
/*                if (that.amazonUploadProductInfo.length == 0) {
                    for (var i = 0; i < that.amazonAllSiteUploadAccountList.length; i++) {
                        for (var j = 0; j < that.amazonAllSiteUploadAccountList[i].accountList.length; j++) {
                            // TODO checked disabled的不去掉
                            that.amazonAllSiteUploadAccountList[i].accountList[j].checked = false;
                        }
                    }
                    var accountInputs = $("#uploadAccountSelect").find('input');
                    accountInputs.each(function (i, e) {
                        // TODO disabled的不去掉
                        $(e).prop('checked', false);
                        amazonProductObj.form.render('checkbox');
                    });
                }*/

            },
            getSpuCategory() {

            }
        }
    });
    amazonProductObj.vueObj = vueObj;

    layui.use(['element', 'form', 'laydate', 'layedit'], function(){
        var form = layui.form;
        amazonProductObj.form = form;
        var element = layui.element;

        /*********************************************账号选择Starting***************************************************/
        form.on('checkbox(selectAccount)', function (data) {
            var $accountObj = $(data.elem);
            // 是否被选中
            var checked = $accountObj.prop("checked");
            // 站点
            var siteId = $accountObj.attr('site-id');
            var siteName = $accountObj.attr('site-name');
            // 账号id
            var accountId = $accountObj.attr('account-id');
            // 名称
            var accountName = $accountObj.attr('title');

            // 设置刊登账号的状态
            var currentSite = setUploadAccountCheckedState(checked, siteId, accountId);


            // 将广告信息处理成key-value的形式
            var productInfoMap = {};
            for (var i = 0; i < vueObj.amazonUploadProductInfo.length; i++) {
                var alreadySiteId = vueObj.amazonUploadProductInfo[i].siteId;
                 var amazonUploadProductInfo = {index: i, productInfo:  vueObj.amazonUploadProductInfo[i]};
                productInfoMap[alreadySiteId] = amazonUploadProductInfo;
            }

            // 目前刊登信息中当前选中账号所属站点的记录(可能存在，也可能不存在)
            var currentSiteProductInfo = productInfoMap[siteId];
            if (checked) { // 选中账号
                if (vueObj.checkedSkuList.length == 0) {
                    return;
                }

                var account = {accountId: accountId, accountName: accountName};

                // 组合标题的结构
                fillSkuSiteAccountTitle(currentSite, account);

                // 填充sku信息
                fillSkuInfo(account);
                if (!currentSiteProductInfo) {
                    var productInfo = {siteId: siteId, siteName: siteName, languageId: currentSite.languageId};
                    var length = vueObj.amazonUploadProductInfo.length;
                    var currentSiteProductInfo = {productInfo:productInfo, index: length};

                    productInfo.accountList = [];
                    productInfoMap[siteId] = currentSiteProductInfo;
                    productInfo.accountList.push(account);
                    // 填充卖点，关键词和描述 TODO 还有sku信息
                    vueObj.amazonUploadProductInfo.push(productInfo);
                } else {
                    currentSiteProductInfo.productInfo.accountList.push(account);
                }

                // 分类
                addCategoryWhenSelectAccount(siteId);

                // 关键词卖点描述
                addKeySellPointDesc(currentSite);

            } else { // 未选中账号
                if (currentSiteProductInfo) {
                    var accountList = currentSiteProductInfo.productInfo.accountList;
                    for (var i = 0; i < accountList.length; i++) {
                        if (accountList[i].accountId == accountId) {
                            accountList.splice(i, 1);
                            break;
                        }
                    }
                    if (accountList.length == 0) {
                        vueObj.amazonUploadProductInfo.splice(currentSiteProductInfo.index, 1);
                        // 删除目录
                        deleteCategoryWhenNoSeletetAccount(siteId);

                        // 删除关键词，卖点
                        deleteKeySellPointDesc(siteId);

                        renderTab('categoryAttr');
                        renderTab('keySellPointDescDiv')
                    }

                    vueObj.$nextTick(function () {
                        deleteKindEditor(currentSiteProductInfo.productInfo.siteId);
                    });
                }else { // 此时可能没有sku被选中 TODO 需要从刊登账号列表中查询被选中的账号
                    var isHasAccount = false; // 是否还有账号被选中
                    for (var i = 0; i < vueObj.amazonAllSiteUploadAccountList.length; i++) {
                        if (vueObj.amazonAllSiteUploadAccountList[i].siteId == siteId) {
                            var accountList = vueObj.amazonAllSiteUploadAccountList[i].accountList;
                            for (var j = 0; j < accountList.length; j++) {
                                if (accountList[j].checked) {
                                    isHasAccount = true;
                                }
                            }
                            break;
                        }
                    }
                    if (!isHasAccount) {
                        // 删除目录
                        deleteCategoryWhenNoSeletetAccount(siteId);

                        // 删除关键词，卖点
                        deleteKeySellPointDesc(siteId);
                    }
                }

                // 刪除sku站点账号标题
                deleteSkuSiteAccountTitle(siteId, accountId);
            }

            vueObj.$nextTick(function () {
                initeKindEdtor()
            });

            //renderTab();
        });
        /*********************************************账号选择Ending***************************************************/

        /*********************************************sku选择Starting***************************************************/
        form.on('checkbox(selectSku)', function (data) {
            var $sku = $(data.elem);
            var skuId = $sku.attr('sku-id');
            var skuName = $sku.attr('title');
            // 是否被选中
            var checked = $sku.prop("checked");

            // 查找当前的sku
            var currentSku;
            for (var i = 0; i < vueObj.spu.skuList.length; i++) {
                if (vueObj.spu.skuList[i].skuId == skuId) {
                    currentSku = vueObj.spu.skuList[i];
                    break;
                }
            }

            var amazonUploadProductInfo = vueObj.amazonUploadProductInfo;
            if (checked) {
                var sku = {skuId: skuId, skuName: skuName};
                vueObj.checkedSkuList.push(sku);

                // 填充title
                fillSkuSiteAccountTitleWhenSelectSku(currentSku);

                // 如果刊登信息为空，构造一下
                if (amazonUploadProductInfo.length == 0) {
                    fillAmazonUploadProductInfo();
                }

                // 为每一个账号填充sku的信息
                for (var i = 0; i < amazonUploadProductInfo.length; i++) {
                    var accountList = amazonUploadProductInfo[i].accountList;
                    for (var j = 0; j < accountList.length; j++) {
                        // 拷贝信息
                        var accountSku = Object.assign(currentSku);
                        if (!accountList[j].uploadSkuList) {
                            accountList[j].uploadSkuList = [];
                        }
                        // 判断是否已经有了sku
                        var isHasSku = false;
                        for (var m = 0; m < accountList[j].uploadSkuList.length; m++) {
                            if (accountList[j].uploadSkuList[m].skuId == skuId) {
                                isHasSku = true;
                            }
                        }
                        if (!isHasSku) {
                            accountList[j].uploadSkuList.push(accountSku);
                        }
                        vueObj.$set(accountList, j, accountList[j]);
                    }
                }

                // 添加sku关键词卖点
                addSkuKeySellPoint(currentSku);

            } else {
                for (var i = 0; i < vueObj.checkedSkuList.length; i++) {
                    if (vueObj.checkedSkuList[i].skuId == skuId) {
                        vueObj.checkedSkuList.splice(i, 1);
                    }
                }
                // 删除sku站点账号标题
                for (var i = 0; i < vueObj.skuSiteAccountTitleList.length; i++) {
                    if (vueObj.skuSiteAccountTitleList[i].skuId == skuId) {
                        vueObj.skuSiteAccountTitleList.splice(i, 1);
                        break;
                    }
                }

                // 删除每个账号的sku信息
                deleteAccountSku(skuId);

                // 删除该sku的关键词，卖点和描述
                deleteSkuKeySellPointDesc(skuId);

                // 一个sku没有选中，删除站点信息
                if (vueObj.checkedSkuList.length == 0) {
                    vueObj.amazonUploadProductInfo = [];
                }
            }

            renderTab('skuSiteTitle');
            vueObj.$nextTick(function () {
                initeKindEdtor();
            });
        });
        /*********************************************sku选择Ending***************************************************/
    });

    $("#saveUploadInfo").click(function () {
        console.info(JSON.stringify(vueObj.skuSiteAccountTitleList));
        console.info(JSON.stringify(vueObj.amazonUploadProductInfo));
        console.info(JSON.stringify(vueObj.keySellPointDescForSiteList));
    });

    $("#fenpei").click(function () {
        var skuSiteAccountTitleList = amazonProductObj.vueObj.skuSiteAccountTitleList;
        var accountListByLanguageIdList = [];
        for (var i = 0; i < skuSiteAccountTitleList.length; i++) {
            var siteAccountList = skuSiteAccountTitleList[i].siteAccountList;
            var accountListByLanguageId = {};
            for (var j = 0; j < siteAccountList.length; j++) {
                var accountList = siteAccountList[j].accountList;
                var languageId = siteAccountList[j].languageId;
                if (!accountListByLanguageId[languageId]) {
                    accountListByLanguageId[languageId] = [];
                }
                for (var m = 0; m < accountList.length; m++) {
                    accountListByLanguageId[languageId].push(accountList[m]);
                }
            }
            accountListByLanguageIdList.push(accountListByLanguageId);
        }

        for (var i = 0; i < accountListByLanguageIdList.length; i++) {
            var accountListByLanguageId = accountListByLanguageIdList[i];
            for (var key in accountListByLanguageId) {
                var accountList = accountListByLanguageId[key];
                for (var j = 0 ; j < accountList.length; j++) {
                    accountList[j].title = 'majiafe' + j;
                }
            }
        }

        // 重新設置
        for (var i = 0; i < skuSiteAccountTitleList.length; i++) {
            vueObj.$set(skuSiteAccountTitleList, i, skuSiteAccountTitleList[i]);
        }
    });

    initeKindEdtor();
});

function initeKindEdtor() {
    if (amazonProductObj.vueObj) {
        var vueObj = amazonProductObj.vueObj;
        // 初始化富文本编辑器
        KindEditor.ready(function(K) {
            for (var i = 0; i < vueObj.amazonAllSiteUploadAccountList.length; i++) {
                var siteId = vueObj.amazonAllSiteUploadAccountList[i].siteId;
                reloadKindEditor(siteId);
            }
        });
    }
}

function reloadKindEditor(siteId) {
    KindEditor.ready(function(K) {
        var vueObj = amazonProductObj.vueObj;
        var descForSite = amazonProductObj.siteDesc.descForSite + siteId;
        if (amazonProductObj.siteEditor[descForSite]) {
            amazonProductObj.siteEditor[descForSite].remove();
        }
        // 描述
        amazonProductObj.siteEditor[descForSite] = K.create('#' + descForSite, {
            items: amazonProductObj.kindEditorItems,
            id: descForSite,
            afterChange: function () {
                for (var j = 0; j < vueObj.keySellPointDescForSiteList.length; j++) {
                    if (this.id == amazonProductObj.siteDesc.descForSite + vueObj.keySellPointDescForSiteList[j].siteId) {
                        vueObj.keySellPointDescForSiteList[j].description = this.html();
                        break;
                    }
                }
            }
        });
    });
}

function deleteKindEditor(siteId) {
    KindEditor.ready(function(K) {
        var vueObj = amazonProductObj.vueObj;
        var descForSite = amazonProductObj.siteDesc.descForSite + siteId;
        if (amazonProductObj.siteEditor[descForSite]) {
            amazonProductObj.siteEditor[descForSite].remove();
        }
        var specificationsForSite = amazonProductObj.siteDesc.specificationsForSite + siteId;
        if (amazonProductObj.siteEditor[specificationsForSite]) {
            amazonProductObj.siteEditor[specificationsForSite].remove();
        }
        // 包装
        var packageIncludedForSite = amazonProductObj.siteDesc.packageIncludedForSite + siteId;
        if (amazonProductObj.siteEditor[packageIncludedForSite]) {
            amazonProductObj.siteEditor[packageIncludedForSite].remove();
        }
        // note
        var noteForSite = amazonProductObj.siteDesc.noteForSite + siteId;
        if (amazonProductObj.siteEditor[noteForSite]) {
            amazonProductObj.siteEditor[noteForSite].remove();
        }
    });
}

// 填充sku信息
function fillSkuInfo(account) {
    if (account) {
        var uploadSkuList = account.uploadSkuList;
        if (!uploadSkuList) {
            uploadSkuList = [];
        }
        account.uploadSkuList = uploadSkuList;
        var checkedSkuList = amazonProductObj.vueObj.checkedSkuList;
        if (checkedSkuList && checkedSkuList.length > 0) {
            for (var i = 0; i < checkedSkuList.length; i++) {
                uploadSkuList.push(checkedSkuList[i]);
            }
        }
    }
}

// 删除账号的指定的sku的信息
function deleteFromAccount(account, skuId) {
    if (account) {
        var uploadSkuList = account.uploadSkuList;
        if (uploadSkuList && uploadSkuList.length > 0) {
            for (var i = 0; i < uploadSkuList.length; i++) {
                if (uploadSkuList[i].skuId == skuId) {
                    uploadSkuList.splice(i, 1);
                    break;
                }
            }
        }
    }
}

function setUploadAccountCheckedState(checked, siteId, accountId) {
    var amazonAllSiteUploadAccountList = amazonProductObj.vueObj.amazonAllSiteUploadAccountList;
    if (amazonAllSiteUploadAccountList) {
        for (var i = 0; i < amazonAllSiteUploadAccountList.length; i++) {
            var accountList = amazonAllSiteUploadAccountList[i].accountList;
            if (amazonAllSiteUploadAccountList[i].siteId == siteId) {
                for (var j = 0; j < accountList.length; j++) {
                    // TODO isChecked， checked
                    if (accountList[j].accountId == accountId) {
                        accountList[j].checked = checked;
                        break;
                    }
                }
                return amazonAllSiteUploadAccountList[i];
            }
        }
    }
}

function fillAmazonUploadProductInfo() {
    var amazonAllSiteUploadAccountList = amazonProductObj.vueObj.amazonAllSiteUploadAccountList;
    var amazonUploadProductInfo = amazonProductObj.vueObj.amazonUploadProductInfo;
    if (amazonAllSiteUploadAccountList) {
        for (var i = 0; i < amazonAllSiteUploadAccountList.length; i++) {
            var accountList = amazonAllSiteUploadAccountList[i].accountList;
            var site = {siteId: amazonAllSiteUploadAccountList[i].siteId, siteName: amazonAllSiteUploadAccountList[i].siteName, languageId: amazonAllSiteUploadAccountList[i].languageId};
            site.accountList = [];
            for (var j = 0; j < accountList.length; j++) {
                // TODO isChecked， checked
                if (accountList[j].checked) {
                    var account = {accountId: accountList[j].accountId, accountName: accountList[j].accountName};
                    site.accountList.push(account);
                }
            }
            if (site.accountList.length > 0) {
                amazonUploadProductInfo.push(site);
            }
        }
    }
}

// 新增sku
function addSkuBtn() {
    var amazonUploadProductInfo = amazonProductObj.vueObj.amazonUploadProductInfo;
    for (var i = 0; i < amazonUploadProductInfo.length; i++) {
        var uploadSiteInfo = amazonUploadProductInfo[i];
        for (var j = 0; j < uploadSiteInfo.accountList.length; j++) {
            var uploadSkuList = uploadSiteInfo.accountList[j].uploadSkuList;
            var sku = {skuId: 0, skuName: ''};
            sku.propertyList = [];
            if (amazonProductObj.vueObj.spu.skuList.length > 0) {
                var propertyListForSku0 = amazonProductObj.vueObj.spu.skuList[0].propertyList;
                if (propertyListForSku0) {
                    for (var m = 0; m < propertyListForSku0.length; m++) {
                        var property = {};
                        property.propertyTypeId = propertyListForSku0[m].propertyTypeId;
                        property.propertyType = propertyListForSku0[m].propertyType;
                        property.propertyValue = '';
                        property.spu = propertyListForSku0[m].spu;
                        sku.propertyList.push(property);
                    }
                }
            }
            uploadSkuList.push(sku);
        }
    }

    // TODO
/*    var newSku = {skuId: 0, skuName: '新添加的sku'};
    fillSkuSiteAccountTitleWhenSelectSku(newSku);

    addSkuKeySellPoint(newSku);*/
}

function fillSkuSiteAccountTitle(siteObj, accountObj) {
    if (siteObj && accountObj) {
        var skuSiteAccountTitleList = amazonProductObj.vueObj.skuSiteAccountTitleList;
        // 没有信息则初始化
        if (skuSiteAccountTitleList.length == 0) {
            // 初始化sku的信息
            var checkedSkuList = amazonProductObj.vueObj.checkedSkuList;
            for (var i = 0; i < checkedSkuList.length; i++) {
               var sku = {};
               Object.assign(sku, checkedSkuList[i]);
                skuSiteAccountTitleList.push(sku);
            }
        }

        for (var i = 0; i < skuSiteAccountTitleList.length; i++) {
            var site = {siteId: siteObj.siteId, siteName: siteObj.siteName, languageId: siteObj.languageId};
            var account = {accountId: accountObj.accountId, accountName: accountObj.accountName};

            var sku = skuSiteAccountTitleList[i];
            var siteAccountList = sku.siteAccountList;
            // site的信息
            if (!siteAccountList) {
                sku.siteAccountList = [];
                site.accountList = [];
                site.accountList.push(account);
                sku.siteAccountList.push(site);
            } else {
                // 先判断是否存在该站点
                var isExistSite = false;
                for (var j = 0; j < siteAccountList.length; j++) {
                    if (siteAccountList[j].siteId ==  siteObj.siteId) {
                        isExistSite = true;
                        // 获取accountlist
                        var isExistAccount = false;
                        var accountList = siteAccountList[j].accountList;
                        for (var m = 0; m < accountList.length; m++) {
                            if (accountList[m].accountId == accountObj.accountId) {
                                isExistAccount = true;
                            }
                        }
                        // 不存在才添加
                        if (!isExistAccount) {
                            siteAccountList[j].accountList.push(account);
                        }
                        break;
                    }
                }
                if (!isExistSite) {
                    site.accountList = [];
                    site.accountList.push(account);
                    siteAccountList.push(site);
                }
            }

            amazonProductObj.vueObj.$set(skuSiteAccountTitleList, i, skuSiteAccountTitleList[i]);
        }
    }
}

function renderTab(id) {
    amazonProductObj.vueObj.$nextTick(function () {
        var tabTitles = $("#" + id).find(".layui-tab-title");
        tabTitles.each(function (i, e) {
           $(e).find('li').first().addClass('layui-this');
        });
        var tabContents = $("#" + id).find(".layui-tab-content");
        tabContents.each(function (i, e) {
            $(e).find('.layui-tab-item').first().addClass('layui-show');
        });
    });
}

// 不选账号的时候，删除标题
function deleteSkuSiteAccountTitle(siteId, accountId) {
    var skuSiteAccountTitleList = amazonProductObj.vueObj.skuSiteAccountTitleList;

    for (var i = 0; i < skuSiteAccountTitleList.length; i++) {
        var sku = skuSiteAccountTitleList[i];
        var siteAccountList = sku.siteAccountList;
        for (var j = 0; j < siteAccountList.length; j++) {
            if (siteAccountList[j].siteId == siteId) {
                var accountList = siteAccountList[j].accountList;
                for (var m = 0; m < accountList.length; m++) {
                    if (accountList[m].accountId == accountId) {
                        accountList.splice(m, 1);
                        break;
                    }
                }

                if (accountList.length == 0) {
                    siteAccountList.splice(j, 1);
                }
                break;
            }
        }
        amazonProductObj.vueObj.$set(amazonProductObj.vueObj.skuSiteAccountTitleList, i, sku);
    }
}

function fillSkuSiteAccountTitleWhenSelectSku(currentSku) {
    var skuSiteAccountTitleList = amazonProductObj.vueObj.skuSiteAccountTitleList;
    var isExistSku = false;
    for (var i = 0; i < skuSiteAccountTitleList.length; i++) {
        if (skuSiteAccountTitleList[i].skuId == currentSku.skuId) {
            isExistSku = true;
        }
    }
    var sku = {};
    if (!isExistSku) {
        Object.assign(sku, currentSku);
        sku.siteAccountList = [];
        skuSiteAccountTitleList.push(sku);
    }

    var amazonAllSiteUploadAccountList = amazonProductObj.vueObj.amazonAllSiteUploadAccountList;
    for (var i = 0; i < amazonAllSiteUploadAccountList.length; i++) {
        var site = {siteId: amazonAllSiteUploadAccountList[i].siteId, siteName: amazonAllSiteUploadAccountList[i].siteName, languageId: amazonAllSiteUploadAccountList[i].languageId};
        site.accountList = [];
        var accountList = amazonAllSiteUploadAccountList[i].accountList;
        for (var j = 0; j < accountList.length; j++) {
            // TODO checked
            if (accountList[j].checked) {
                var account = {accountId: accountList[j].accountId, accountName: accountList[j].accountName};
                site.accountList.push(account);
            }
        }
        if (site.accountList.length > 0) {
            sku.siteAccountList.push(site);
        }
    }
}

function addCategoryWhenSelectAccount(siteId) {
    var amazonCategory = amazonProductObj.vueObj.amazonCategory;
    var siteCategoryList = amazonCategory.siteCategoryList;
    if (!siteCategoryList) {
        amazonCategory.siteCategoryList = [];
        siteCategoryList = amazonCategory.siteCategoryList;
    } else {
        for (var i = 0; i < siteCategoryList.length; i++) {
            if (siteCategoryList[i].siteId == siteId) {
                return;
            }
        }
    }

    var amazonCategoryCopy = amazonProductObj.vueObj.amazonCategoryCopy;
    var siteCategoryListCopy = amazonCategoryCopy.siteCategoryList;
    for (var i = 0; i < siteCategoryListCopy.length; i++) {
        if (siteCategoryListCopy[i].siteId == siteId) {
            siteCategoryList.push(siteCategoryListCopy[i]);
            break;
        }
    }
}

function deleteCategoryWhenNoSeletetAccount(siteId) {
    var amazonCategory = amazonProductObj.vueObj.amazonCategory;
    var siteCategoryList = amazonCategory.siteCategoryList;
    if (!siteCategoryList) {
        return;
    }
    for (var i = 0; i < siteCategoryList.length; i++) {
        if (siteCategoryList[i].siteId == siteId) {
            siteCategoryList.splice(i, 1);
            break;
        }
    }
}

// 选择账号的时候添加描述
function addKeySellPointDesc(currentSite) {
    if (currentSite) {
        var keySellPointDescForSiteList = amazonProductObj.vueObj.keySellPointDescForSiteList;
        for (var i = 0; i < keySellPointDescForSiteList.length; i++) {
            if (keySellPointDescForSiteList[i].siteId == currentSite.siteId) {
                return;
            }
        }

        var site = {siteId: currentSite.siteId, siteName: currentSite.siteName, languageId: currentSite.languageId};
        site.skuList = [];
        var checkedSkuList = amazonProductObj.vueObj.checkedSkuList;
        for (var i =  0; i < checkedSkuList.length; i++) {
            var sku = {skuId: checkedSkuList[i].skuId, skuName: checkedSkuList[i].skuName, sellPointList: [{sellPoint: ''}]};
            site.skuList.push(sku);
        }
        keySellPointDescForSiteList.push(site);
    }
}

function deleteKeySellPointDesc(siteId) {
    var keySellPointDescForSiteList = amazonProductObj.vueObj.keySellPointDescForSiteList;
    for (var i = 0; i < keySellPointDescForSiteList.length; i++) {
        if (keySellPointDescForSiteList[i].siteId == siteId) {
            keySellPointDescForSiteList.splice(i, 1)
            break;
        }
    }
}

// 不选sku的时候删除每个账号的sku
function deleteAccountSku(skuId) {
    var amazonUploadProductInfo = amazonProductObj.vueObj.amazonUploadProductInfo;
    for (var i = 0; i < amazonUploadProductInfo.length; i++) {
        var accountList = amazonUploadProductInfo[i].accountList;
        for (var j = 0; j < accountList.length; j++) {
            var uploadSkuList = accountList[j].uploadSkuList;
            for (var m = 0; m < uploadSkuList.length; m++) {
                if (uploadSkuList[m].skuId == skuId) {
                    uploadSkuList.splice(m, 1);
                    break;
                }
            }
        }
    }
}

function deleteSkuKeySellPointDesc(skuId){
    var keySellPointDescForSiteList = amazonProductObj.vueObj.keySellPointDescForSiteList;
    for (var i = 0; i < keySellPointDescForSiteList.length; i++) {
        var skuList = keySellPointDescForSiteList[i].skuList;
        for (var j = 0; j < skuList.length; j++) {
            if (skuList[j].skuId == skuId) {
                skuList.splice(j, 1);
                break;
            }
        }
    }
}

// 选择sku的时候添加每个sku的卖点和关键词
function addSkuKeySellPoint(currentSku) {
    if (currentSku) {
        var sku = {skuId: currentSku.skuId, skuName:currentSku.skuName, keywords:'', sellPointList:[{sellPoint: ''}]};
        var keySellPointDescForSiteList = amazonProductObj.vueObj.keySellPointDescForSiteList;

        for (var i = 0; i < keySellPointDescForSiteList.length; i++) {
            var skuList = keySellPointDescForSiteList[i].skuList;
            for (var j = 0; j < skuList.length; j++) {
                if (skuList[j].skuId == currentSku.skuId) {
                    return;
                }
            }

            skuList.push(sku);
        }
    }
}
