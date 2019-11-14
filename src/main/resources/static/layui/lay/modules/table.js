layui.define(["laytpl", "laypage", "layer", "form", "util"], function (exports) {
    var $ = layui.$, laytpl = layui.laytpl, laypage = layui.laypage, layer = layui.layer, form = layui.form,
        util = layui.util, hint = layui.hint(), device = layui.device(), table = {
            config: {checkName: "LAY_CHECKED", indexName: "LAY_TABLE_INDEX", disableName: "layDisabled"},
            cache: {},
            index: layui.table ? (layui.table.index + 10000) : 0,
            set: function (options) {
                var that = this;
                that.config = $.extend({}, that.config, options);
                return that
            },
            on: function (events, callback) {
                return layui.onevent.call(this, MOD_NAME, events, callback)
            }
        }, thisTable = function () {
            var that = this, options = that.config, id = options.id || options.index;
            if (id) {
                thisTable.that[id] = that;
                thisTable.config[id] = options
            }
            return {
                reload: function (options) {
                    that.reload.call(that, options)
                }, setColsWidth: function () {
                    that.setColsWidth.call(that)
                }, resize: function () {
                    that.resize.call(that)
                }, config: options
            }
        }, getThisTableConfig = function (id) {
            var config = thisTable.config[id];
            if (!config) {
                hint.error("The ID option was not found in the table instance")
            }
            return config || null
        }, MOD_NAME = "table", ELEM = ".layui-table", THIS = "layui-this", SHOW = "layui-show", HIDE = "layui-hide",
        DISABLED = "layui-disabled", NONE = "layui-none", ELEM_VIEW = "layui-table-view",
        ELEM_TOOL = ".layui-table-tool", ELEM_BOX = ".layui-table-box", ELEM_INIT = ".layui-table-init",
        ELEM_HEADER = ".layui-table-header", ELEM_BODY = ".layui-table-body", ELEM_MAIN = ".layui-table-main",
        ELEM_FIXED = ".layui-table-fixed", ELEM_FIXL = ".layui-table-fixed-l", ELEM_FIXR = ".layui-table-fixed-r",
        ELEM_TOTAL = ".layui-table-total", ELEM_PAGE = ".layui-table-page", ELEM_SORT = ".layui-table-sort",
        ELEM_EDIT = "layui-table-edit", ELEM_HOVER = "layui-table-hover", TPL_HEADER = function (options) {
            var rowCols = '{{#if(item2.colspan){}} colspan="{{item2.colspan}}"{{#} if(item2.rowspan){}} rowspan="{{item2.rowspan}}"{{#}}}';
            options = options || {};
            return ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', "<thead>", "{{# layui.each(d.data.cols, function(i1, item1){ }}", "<tr>", "{{# layui.each(item1, function(i2, item2){ }}", '{{# if(item2.fixed && item2.fixed !== "right"){ left = true; } }}', '{{# if(item2.fixed === "right"){ right = true; } }}', function () {
                if (options.fixed && options.fixed !== "right") {
                    return '{{# if(item2.fixed && item2.fixed !== "right"){ }}'
                }
                if (options.fixed === "right") {
                    return '{{# if(item2.fixed === "right"){ }}'
                }
                return ""
            }(), "{{# var isSort = !(item2.colGroup) && item2.sort; }}", '<th data-field="{{ item2.field||i2 }}" data-key="{{d.index}}-{{i1}}-{{i2}}" {{# if( item2.parentKey){ }}data-parentkey="{{ item2.parentKey }}"{{# } }} {{# if(item2.minWidth){ }}data-minwidth="{{item2.minWidth}}"{{# } }} ' + rowCols + ' {{# if(item2.unresize || item2.colGroup){ }}data-unresize="true"{{# } }} class="{{# if(item2.hide){ }}layui-hide{{# } }}{{# if(isSort){ }} layui-unselect{{# } }}{{# if(!item2.field){ }} layui-table-col-special{{# } }}">', '<div class="layui-table-cell laytable-cell-', "{{# if(item2.colGroup){ }}", "group", "{{# } else { }}", "{{d.index}}-{{i1}}-{{i2}}", '{{# if(item2.type !== "normal"){ }}', " laytable-cell-{{ item2.type }}", "{{# } }}", "{{# } }}", '" {{#if(item2.align){}}align="{{item2.align}}"{{#}}}>', '{{# if(item2.type === "checkbox"){ }}', '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose" {{# if(item2[d.data.disableName]){ }} disabled {{# }; }}  {{# if(item2[d.data.checkName]){ }}checked{{# }; }}>', "{{# } else { }}", '<span>{{item2.title||""}}</span>', "{{# if(isSort){ }}", '<span class="layui-table-sort layui-inline"><i class="layui-edge layui-table-sort-asc" title="升序"></i><i class="layui-edge layui-table-sort-desc" title="降序"></i></span>', "{{# } }}", "{{# } }}", "</div>", "</th>", (options.fixed ? "{{# }; }}" : ""), "{{# }); }}", "</tr>", "{{# }); }}", "</thead>", "</table>"].join("")
        },
        TPL_BODY = ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', "<tbody></tbody>", "</table>"].join(""),
        TPL_MAIN = ['<div class="layui-form layui-border-box {{d.VIEW_CLASS}}" lay-filter="LAY-table-{{d.index}}" lay-id="{{ d.data.id }}" style="{{# if(d.data.width){ }}width:{{d.data.width}}px;{{# } }} {{# if(d.data.height){ }}height:{{d.data.height}}px;{{# } }}">', "{{# if(d.data.toolbar){ }}", '<div class="layui-table-tool">', '<div class="layui-table-tool-temp"></div>', '<div class="layui-table-tool-self"></div>', "</div>", "{{# } }}", '<div class="layui-table-box">', "{{# if(d.data.loading){ }}", '<div class="layui-table-init" style="background-color: #fff;">', '<i class="layui-icon layui-icon-loading layui-icon"></i>', "</div>", "{{# } }}", "{{# var left, right; }}", '<div class="layui-table-header">', TPL_HEADER(), "</div>", '<div class="layui-table-body layui-table-main">', TPL_BODY, "</div>", "{{# if(left){ }}", '<div class="layui-table-fixed layui-table-fixed-l">', '<div class="layui-table-header">', TPL_HEADER({fixed: true}), "</div>", '<div class="layui-table-body">', TPL_BODY, "</div>", "</div>", "{{# }; }}", "{{# if(right){ }}", '<div class="layui-table-fixed layui-table-fixed-r">', '<div class="layui-table-header">', TPL_HEADER({fixed: "right"}), '<div class="layui-table-mend"></div>', "</div>", '<div class="layui-table-body">', TPL_BODY, "</div>", "</div>", "{{# }; }}", "</div>", "{{# if(d.data.totalRow){ }}", '<div class="layui-table-total">', '<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', '<tbody><tr><td><div class="layui-table-cell" style="visibility: hidden;">Total</div></td></tr></tbody>', "</table>", "</div>", "{{# } }}", "{{# if(d.data.page){ }}", '<div class="layui-table-page">', '<div id="layui-table-page{{d.index}}"></div>', "</div>", "{{# } }}", "<style>", "{{# layui.each(d.data.cols, function(i1, item1){", "layui.each(item1, function(i2, item2){ }}", ".laytable-cell-{{d.index}}-{{i1}}-{{i2}}{ ", "{{# if(item2.width){ }}", "width: {{item2.width}}px;", "{{# } }}", " }", "{{# });", "}); }}", "</style>", "</div>"].join(""),
        _WIN = $(window), _DOC = $(document), Class = function (options) {
            var that = this;
            that.index = ++table.index;
            that.config = $.extend({}, that.config, table.config, options);
            that.render()
        };
    Class.prototype.config = {
        limit: 10,
        loading: true,
        cellMinWidth: 60,
        defaultToolbar: ["filter", "exports", "print"],
        autoSort: true,
        text: {none: "无数据"}
    };
    Class.prototype.render = function () {
        var that = this, options = that.config;
        options.elem = $(options.elem);
        options.where = options.where || {};
        options.id = options.id || options.elem.attr("id") || that.index;
        options.request = $.extend({pageName: "page", limitName: "limit"}, options.request);
        options.response = $.extend({
            statusName: "code",
            statusCode: 0,
            msgName: "msg",
            dataName: "data",
            countName: "count"
        }, options.response);
        if (typeof options.page === "object") {
            options.limit = options.page.limit || options.limit;
            options.limits = options.page.limits || options.limits;
            that.page = options.page.curr = options.page.curr || 1;
            delete options.page.elem;
            delete options.page.jump
        }
        if (!options.elem[0]) {
            return that
        }
        if (options.height && /^full-\d+$/.test(options.height)) {
            that.fullHeightGap = options.height.split("-")[1];
            options.height = _WIN.height() - that.fullHeightGap
        }
        that.setInit();
        var othis = options.elem, hasRender = othis.next("." + ELEM_VIEW),
            reElem = that.elem = $(laytpl(TPL_MAIN).render({VIEW_CLASS: ELEM_VIEW, data: options, index: that.index}));
        options.index = that.index;
        hasRender[0] && hasRender.remove();
        othis.after(reElem);
        that.layTool = reElem.find(ELEM_TOOL);
        that.layBox = reElem.find(ELEM_BOX);
        that.layHeader = reElem.find(ELEM_HEADER);
        that.layMain = reElem.find(ELEM_MAIN);
        that.layBody = reElem.find(ELEM_BODY);
        that.layFixed = reElem.find(ELEM_FIXED);
        that.layFixLeft = reElem.find(ELEM_FIXL);
        that.layFixRight = reElem.find(ELEM_FIXR);
        that.layTotal = reElem.find(ELEM_TOTAL);
        that.layPage = reElem.find(ELEM_PAGE);
        that.renderToolbar();
        that.fullSize();
        if (options.cols.length > 1) {
            var th = that.layFixed.find(ELEM_HEADER).find("th");
            th.height(that.layHeader.height() - 1 - parseFloat(th.css("padding-top")) - parseFloat(th.css("padding-bottom")))
        }
        that.pullData(that.page);
        that.events()
    };
    Class.prototype.initOpts = function (item) {
        var that = this, options = that.config, initWidth = {checkbox: 48, radio: 48, space: 15, numbers: 40};
        if (item.checkbox) {
            item.type = "checkbox"
        }
        if (item.space) {
            item.type = "space"
        }
        if (!item.type) {
            item.type = "normal"
        }
        if (item.type !== "normal") {
            item.unresize = true;
            item.width = item.width || initWidth[item.type]
        }
    };
    Class.prototype.setInit = function (type) {
        var that = this, options = that.config;
        options.clientWidth = options.width || function () {
            var getWidth = function (parent) {
                var width, isNone;
                parent = parent || options.elem.parent();
                width = parent.width();
                try {
                    isNone = parent.css("display") === "none"
                } catch (e) {
                }
                if (parent[0] && (!width || isNone)) {
                    return getWidth(parent.parent())
                }
                return width
            };
            return getWidth()
        }();
        if (type === "width") {
            return options.clientWidth
        }
        layui.each(options.cols, function (i1, item1) {
            layui.each(item1, function (i2, item2) {
                if (!item2) {
                    item1.splice(i2, 1);
                    return
                }
                item2.key = i1 + "-" + i2;
                item2.hide = item2.hide || false;
                if (item2.colGroup || item2.colspan > 1) {
                    var childIndex = 0;
                    layui.each(options.cols[i1 + 1], function (i22, item22) {
                        if (item22.HAS_PARENT || (childIndex > 1 && childIndex == item2.colspan)) {
                            return
                        }
                        item22.HAS_PARENT = true;
                        item22.parentKey = i1 + "-" + i2;
                        childIndex = childIndex + parseInt(item22.colspan > 1 ? item22.colspan : 1)
                    });
                    item2.colGroup = true
                }
                that.initOpts(item2)
            })
        })
    };
    Class.prototype.renderToolbar = function () {
        var that = this, options = that.config;
        var leftDefaultTemp = ['<div class="layui-inline" lay-event="add"><i class="layui-icon layui-icon-add-1"></i></div>', '<div class="layui-inline" lay-event="update"><i class="layui-icon layui-icon-edit"></i></div>', '<div class="layui-inline" lay-event="delete"><i class="layui-icon layui-icon-delete"></i></div>'].join(""),
            elemToolTemp = that.layTool.find(".layui-table-tool-temp");
        if (options.toolbar === "default") {
            elemToolTemp.html(leftDefaultTemp)
        } else {
            if (typeof options.toolbar === "string") {
                var toolbarHtml = $(options.toolbar).html() || "";
                toolbarHtml && elemToolTemp.html(laytpl(toolbarHtml).render(options))
            }
        }
        var layout = {
            filter: {title: "筛选列", layEvent: "LAYTABLE_COLS", icon: "layui-icon-cols"},
            exports: {title: "导出", layEvent: "LAYTABLE_EXPORT", icon: "layui-icon-export"},
            print: {title: "打印", layEvent: "LAYTABLE_PRINT", icon: "layui-icon-print"}
        }, iconElem = [];
        if (typeof options.defaultToolbar === "object") {
            layui.each(options.defaultToolbar, function (i, item) {
                var thisItem = layout[item];
                if (thisItem) {
                    iconElem.push('<div class="layui-inline" title="' + thisItem.title + '" lay-event="' + thisItem.layEvent + '">' + '<i class="layui-icon ' + thisItem.icon + '"></i>' + "</div>")
                }
            })
        }
        that.layTool.find(".layui-table-tool-self").html(iconElem.join(""))
    };
    Class.prototype.setParentCol = function (hide, parentKey) {
        var that = this, options = that.config,
            parentTh = that.layHeader.find('th[data-key="' + options.index + "-" + parentKey + '"]'),
            parentColspan = parseInt(parentTh.attr("colspan")) || 0;
        if (parentTh[0]) {
            var arrParentKey = parentKey.split("-"), getThisCol = options.cols[arrParentKey[0]][arrParentKey[1]];
            hide ? parentColspan-- : parentColspan++;
            parentTh.attr("colspan", parentColspan);
            parentTh[parentColspan < 1 ? "addClass" : "removeClass"](HIDE);
            getThisCol.colspan = parentColspan;
            getThisCol.hide = parentColspan < 1;
            var nextParentKey = parentTh.data("parentkey");
            nextParentKey && that.setParentCol(hide, nextParentKey)
        }
    };
    Class.prototype.setColsPatch = function () {
        var that = this, options = that.config;
        layui.each(options.cols, function (i1, item1) {
            layui.each(item1, function (i2, item2) {
                if (item2.hide) {
                    that.setParentCol(item2.hide, item2.parentKey)
                }
            })
        })
    };
    Class.prototype.setColsWidth = function () {
        var that = this, options = that.config, colNums = 0, autoColNums = 0, autoWidth = 0, countWidth = 0,
            cntrWidth = that.setInit("width");
        that.eachCols(function (i, item) {
            item.hide || colNums++
        });
        cntrWidth = cntrWidth - function () {
            return (options.skin === "line" || options.skin === "nob") ? 2 : colNums + 1
        }() - that.getScrollWidth(that.layMain[0]) - 1;
        var getAutoWidth = function (back) {
            layui.each(options.cols, function (i1, item1) {
                layui.each(item1, function (i2, item2) {
                    var width = 0, minWidth = item2.minWidth || options.cellMinWidth;
                    if (!item2) {
                        item1.splice(i2, 1);
                        return
                    }
                    if (item2.colGroup || item2.hide) {
                        return
                    }
                    if (!back) {
                        width = item2.width || 0;
                        if (/\d+%$/.test(width)) {
                            width = Math.floor((parseFloat(width) / 100) * cntrWidth);
                            width < minWidth && (width = minWidth)
                        } else {
                            if (!width) {
                                item2.width = width = 0;
                                autoColNums++
                            }
                        }
                    } else {
                        if (autoWidth && autoWidth < minWidth) {
                            autoColNums--;
                            width = minWidth
                        }
                    }
                    if (item2.hide) {
                        width = 0
                    }
                    countWidth = countWidth + width
                })
            });
            (cntrWidth > countWidth && autoColNums) && (autoWidth = (cntrWidth - countWidth) / autoColNums)
        };
        getAutoWidth();
        getAutoWidth(true);
        that.autoColNums = autoColNums;
        that.eachCols(function (i3, item3) {
            var minWidth = item3.minWidth || options.cellMinWidth;
            if (item3.colGroup || item3.hide) {
                return
            }
            if (item3.width === 0) {
                that.getCssRule(options.index + "-" + item3.key, function (item) {
                    item.style.width = Math.floor(autoWidth >= minWidth ? autoWidth : minWidth) + "px"
                })
            } else {
                if (/\d+%$/.test(item3.width)) {
                    that.getCssRule(options.index + "-" + item3.key, function (item) {
                        item.style.width = Math.floor((parseFloat(item3.width) / 100) * cntrWidth) + "px"
                    })
                }
            }
        });
        var patchNums = that.layMain.width() - that.getScrollWidth(that.layMain[0]) - that.layMain.children("table").outerWidth();
        if (that.autoColNums && patchNums >= -colNums && patchNums <= colNums) {
            var getEndTh = function (th) {
                var field;
                th = th || that.layHeader.eq(0).find("thead th:last-child");
                field = th.data("field");
                if (!field && th.prev()[0]) {
                    return getEndTh(th.prev())
                }
                return th
            }, th = getEndTh(), key = th.data("key");
            that.getCssRule(key, function (item) {
                var width = item.style.width || th.outerWidth();
                item.style.width = (parseFloat(width) + patchNums) + "px";
                if (that.layMain.height() - that.layMain.prop("clientHeight") > 0) {
                    item.style.width = (parseFloat(item.style.width) - 1) + "px"
                }
            })
        }
        that.loading(!0)
    };
    Class.prototype.resize = function () {
        var that = this;
        that.fullSize();
        that.setColsWidth();
        that.scrollPatch()
    };
    Class.prototype.reload = function (options) {
        var that = this;
        if (that.config.data && that.config.data.constructor === Array) {
            delete that.config.data
        }
        that.config = $.extend({}, that.config, options);
        that.render()
    };
    Class.prototype.page = 1;
    Class.prototype.pullData = function (curr) {
        var that = this, options = that.config, request = options.request, response = options.response,
            sort = function () {
                if (typeof options.initSort === "object") {
                    that.sort(options.initSort.field, options.initSort.type)
                }
            };
        that.startTime = new Date().getTime();
        if (options.url) {
            var params = {};
            params[request.pageName] = curr;
            params[request.limitName] = options.limit;
            var data = $.extend(params, options.where);
            if (options.contentType && options.contentType.indexOf("application/json") == 0) {
                data = JSON.stringify(data)
            }
            $.ajax({
                type: options.method || "get",
                url: options.url,
                contentType: options.contentType,
                data: data,
                dataType: "json",
                headers: options.headers || {},
                success: function (res) {
                    if (typeof options.parseData === "function") {
                        res = options.parseData(res) || res
                    }
                    if (res[response.statusName] != response.statusCode) {
                        that.renderForm();
                        that.layMain.html('<div class="' + NONE + '">' + (res[response.msgName] || ("返回的数据不符合规范，正确的成功状态码 (" + response.statusName + ") 应为：" + response.statusCode)) + "</div>")
                    } else {
                        that.renderData(res, curr, res[response.countName]), sort();
                        options.time = (new Date().getTime() - that.startTime) + " ms"
                    }
                    that.setColsWidth();
                    typeof options.done === "function" && options.done(res, curr, res[response.countName])
                },
                error: function (e, m) {
                    that.layMain.html('<div class="' + NONE + '">数据接口请求异常：' + m + "</div>");
                    that.renderForm();
                    that.setColsWidth()
                }
            })
        } else {
            if (options.data && options.data.constructor === Array) {
                var res = {}, startLimit = curr * options.limit - options.limit;
                res[response.dataName] = options.data.concat().splice(startLimit, options.limit);
                res[response.countName] = options.data.length;
                that.renderData(res, curr, options.data.length), sort();
                that.setColsWidth();
                typeof options.done === "function" && options.done(res, curr, res[response.countName])
            }
        }
    };
    Class.prototype.eachCols = function (callback) {
        var that = this;
        table.eachCols(null, callback, that.config.cols);
        return that
    };
    Class.prototype.renderData = function (res, curr, count, sort) {
        var that = this, options = that.config, data = res[options.response.dataName] || [], trs = [], trs_fixed = [],
            trs_fixed_r = [], render = function () {
                var thisCheckedRowIndex;
                if (!sort && that.sortKey) {
                    return that.sort(that.sortKey.field, that.sortKey.sort, true)
                }
                layui.each(data, function (i1, item1) {
                    var tds = [], tds_fixed = [], tds_fixed_r = [], numbers = i1 + options.limit * (curr - 1) + 1;
                    if (item1.length === 0) {
                        return
                    }
                    if (!sort) {
                        item1[table.config.indexName] = i1
                    }
                    that.eachCols(function (i3, item3) {
                        var field = item3.field || i3, key = options.index + "-" + item3.key, content = item1[field];
                        if (content === undefined || content === null) {
                            content = ""
                        }
                        if (item3.colGroup) {
                            return
                        }
                        var td = ['<td data-field="' + field + '" data-key="' + key + '" ' + function () {
                            var attr = [];
                            if (item3.edit) {
                                attr.push('data-edit="' + item3.edit + '"')
                            }
                            if (item3.align) {
                                attr.push('align="' + item3.align + '"')
                            }
                            if (item3.templet) {
                                attr.push('data-content="' + content + '"')
                            }
                            if (item3.toolbar) {
                                attr.push('data-off="true"')
                            }
                            if (item3.event) {
                                attr.push('lay-event="' + item3.event + '"')
                            }
                            if (item3.style) {
                                attr.push('style="' + item3.style + '"')
                            }
                            if (item3.minWidth) {
                                attr.push('data-minwidth="' + item3.minWidth + '"')
                            }
                            return attr.join(" ")
                        }() + ' class="' + function () {
                            var classNames = [];
                            if (item3.hide) {
                                classNames.push(HIDE)
                            }
                            if (!item3.field) {
                                classNames.push("layui-table-col-special")
                            }
                            return classNames.join(" ")
                        }() + '">', '<div class="layui-table-cell laytable-cell-' + function () {
                            return item3.type === "normal" ? key : (key + " laytable-cell-" + item3.type)
                        }() + '">' + function () {
                            var tplData = $.extend(true, {LAY_INDEX: numbers}, item1), checkName = table.config.checkName,
                                disableName = table.config.disableName;
                            switch (item3.type) {
                                case"checkbox":
                                    return '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" ' + function () {
                                        if (item3[checkName]) {
                                            item1[checkName] = item3[checkName];
                                            return item3[checkName] ? "checked" : ""
                                        } else {
                                            if (item3[disableName]) {
                                                return item3[disableName] ? "disabled" : ""
                                            }
                                        }
                                        return tplData[checkName] ? "checked" : ""
                                    }() + "  " + function () {
                                        if (item3[disableName]) {
                                            return item3[disableName] ? "disabled" : ""
                                        }
                                        return tplData[disableName] ? "disabled" : ""
                                    }() + ">";
                                    break;
                                case"radio":
                                    if (tplData[checkName]) {
                                        thisCheckedRowIndex = i1
                                    }
                                    return '<input type="radio" name="layTableRadio_' + options.index + '" ' + (tplData[checkName] ? "checked" : "") + ' lay-type="layTableRadio">';
                                    break;
                                case"numbers":
                                    return numbers;
                                    break
                            }
                            if (item3.toolbar) {
                                return laytpl($(item3.toolbar).html() || "").render(tplData)
                            }
                            return item3.templet ? function () {
                                return typeof item3.templet === "function" ? item3.templet(tplData) : laytpl($(item3.templet).html() || String(content)).render(tplData)
                            }() : content
                        }(), "</div></td>"].join("");
                        tds.push(td);
                        if (item3.fixed && item3.fixed !== "right") {
                            tds_fixed.push(td)
                        }
                        if (item3.fixed === "right") {
                            tds_fixed_r.push(td)
                        }
                    });
                    trs.push('<tr data-index="' + i1 + '">' + tds.join("") + "</tr>");
                    trs_fixed.push('<tr data-index="' + i1 + '">' + tds_fixed.join("") + "</tr>");
                    trs_fixed_r.push('<tr data-index="' + i1 + '">' + tds_fixed_r.join("") + "</tr>")
                });
                that.layBody.scrollTop(0);
                that.layMain.find("." + NONE).remove();
                that.layMain.find("tbody").html(trs.join(""));
                that.layFixLeft.find("tbody").html(trs_fixed.join(""));
                that.layFixRight.find("tbody").html(trs_fixed_r.join(""));
                that.renderForm();
                typeof thisCheckedRowIndex === "number" && that.setThisRowChecked(thisCheckedRowIndex);
                that.syncCheckAll();
                that.haveInit ? that.scrollPatch() : setTimeout(function () {
                    that.scrollPatch()
                }, 50);
                that.haveInit = true;
                layer.close(that.tipsIndex);
                options.HAS_SET_COLS_PATCH || that.setColsPatch();
                options.HAS_SET_COLS_PATCH = true
            };
        that.key = options.id || options.index;
        table.cache[that.key] = data;
        that.layPage[(count == 0 || (data.length === 0 && curr == 1)) ? "addClass" : "removeClass"](HIDE);
        if (sort) {
            return render()
        }
        if (data.length === 0) {
            that.renderForm();
            that.layFixed.remove();
            that.layMain.find("tbody").html("");
            that.layMain.find("." + NONE).remove();
            return that.layMain.append('<div class="' + NONE + '">' + options.text.none + "</div>")
        }
        render();
        that.renderTotal(data);
        if (options.page) {
            options.page = $.extend({
                elem: "layui-table-page" + options.index,
                count: count,
                limit: options.limit,
                limits: options.limits || [10, 20, 30, 40, 50, 60, 70, 80, 90],
                groups: 3,
                layout: ["prev", "page", "next", "skip", "count", "limit"],
                prev: '<i class="layui-icon">&#xe603;</i>',
                next: '<i class="layui-icon">&#xe602;</i>',
                jump: function (obj, first) {
                    if (!first) {
                        that.page = obj.curr;
                        options.limit = obj.limit;
                        that.loading();
                        that.pullData(obj.curr)
                    }
                }
            }, options.page);
            options.page.count = count;
            laypage.render(options.page)
        }
    };
    Class.prototype.renderTotal = function (data) {
        var that = this, options = that.config, totalNums = {};
        if (!options.totalRow) {
            return
        }
        layui.each(data, function (i1, item1) {
            if (item1.length === 0) {
                return
            }
            that.eachCols(function (i3, item3) {
                var field = item3.field || i3, content = item1[field];
                if (item3.totalRow) {
                    totalNums[field] = (totalNums[field] || 0) + (parseFloat(content) || 0)
                }
            })
        });
        var tds = [];
        that.eachCols(function (i3, item3) {
            var field = item3.field || i3;
            var td = ['<td data-field="' + field + '" data-key="' + options.index + "-" + item3.key + '" ' + function () {
                var attr = [];
                if (item3.align) {
                    attr.push('align="' + item3.align + '"')
                }
                if (item3.style) {
                    attr.push('style="' + item3.style + '"')
                }
                if (item3.minWidth) {
                    attr.push('data-minwidth="' + item3.minWidth + '"')
                }
                return attr.join(" ")
            }() + ' class="' + function () {
                var classNames = [];
                if (item3.hide) {
                    classNames.push(HIDE)
                }
                if (!item3.field) {
                    classNames.push("layui-table-col-special")
                }
                return classNames.join(" ")
            }() + '">', '<div class="layui-table-cell laytable-cell-' + function () {
                var str = (options.index + "-" + item3.key);
                return item3.type === "normal" ? str : (str + " laytable-cell-" + item3.type)
            }() + '">' + function () {
                var text = item3.totalRowText || "";
                return item3.totalRow ? (parseFloat(totalNums[field]).toFixed(2) || text) : text
            }(), "</div></td>"].join("");
            tds.push(td)
        });
        that.layTotal.find("tbody").html("<tr>" + tds.join("") + "</tr>")
    };
    Class.prototype.getColElem = function (parent, key) {
        var that = this, options = that.config;
        return parent.eq(0).find(".laytable-cell-" + (options.index + "-" + key) + ":eq(0)")
    };
    Class.prototype.renderForm = function (type) {
        form.render(type, "LAY-table-" + this.index)
    };
    Class.prototype.setThisRowChecked = function (index) {
        var that = this, options = that.config, ELEM_CLICK = "layui-table-click",
            tr = that.layBody.find('tr[data-index="' + index + '"]');
        tr.addClass(ELEM_CLICK).siblings("tr").removeClass(ELEM_CLICK)
    };
    Class.prototype.sort = function (th, type, pull, formEvent) {
        var that = this, field, res = {}, options = that.config, filter = options.elem.attr("lay-filter"),
            data = table.cache[that.key], thisData;
        if (typeof th === "string") {
            that.layHeader.find("th").each(function (i, item) {
                var othis = $(this), _field = othis.data("field");
                if (_field === th) {
                    th = othis;
                    field = _field;
                    return false
                }
            })
        }
        try {
            var field = field || th.data("field"), key = th.data("key");
            if (that.sortKey && !pull) {
                if (field === that.sortKey.field && type === that.sortKey.sort) {
                    return
                }
            }
            var elemSort = that.layHeader.find("th .laytable-cell-" + key).find(ELEM_SORT);
            that.layHeader.find("th").find(ELEM_SORT).removeAttr("lay-sort");
            elemSort.attr("lay-sort", type || null);
            that.layFixed.find("th")
        } catch (e) {
            return hint.error("Table modules: Did not match to field")
        }
        that.sortKey = {field: field, sort: type};
        if (options.autoSort) {
            if (type === "asc") {
                thisData = layui.sort(data, field)
            } else {
                if (type === "desc") {
                    thisData = layui.sort(data, field, true)
                } else {
                    thisData = layui.sort(data, table.config.indexName);
                    delete that.sortKey
                }
            }
        }
        res[options.response.dataName] = thisData || data;
        that.renderData(res, that.page, that.count, true);
        if (formEvent) {
            layui.event.call(th, MOD_NAME, "sort(" + filter + ")", {field: field, type: type})
        }
    };
    Class.prototype.loading = function (hide) {
        var that = this, options = that.config;
        if (options.loading) {
            if (hide) {
                that.layInit && that.layInit.remove();
                delete that.layInit;
                that.layBox.find(ELEM_INIT).remove()
            } else {
                that.layInit = $(['<div class="layui-table-init">', '<i class="layui-icon layui-icon-loading layui-icon"></i>', "</div>"].join(""));
                that.layBox.append(that.layInit)
            }
        }
    };
    Class.prototype.setCheckData = function (index, checked) {
        var that = this, options = that.config, thisData = table.cache[that.key];
        if (!thisData[index]) {
            return
        }
        if (thisData[index].constructor === Array) {
            return
        }
        thisData[index][options.checkName] = checked
    };
    Class.prototype.syncCheckAll = function () {
        var that = this, options = that.config, checkAllElem = that.layHeader.find('input[name="layTableCheckbox"]'),
            syncColsCheck = function (checked) {
                that.eachCols(function (i, item) {
                    if (item.type === "checkbox") {
                        item[options.checkName] = checked
                    }
                });
                return checked
            };
        if (!checkAllElem[0]) {
            return
        }
        if (table.checkStatus(that.key).isAll) {
            if (!checkAllElem[0].checked) {
                checkAllElem.prop("checked", true);
                that.renderForm("checkbox")
            }
            syncColsCheck(true)
        } else {
            if (checkAllElem[0].checked) {
                checkAllElem.prop("checked", false);
                that.renderForm("checkbox")
            }
            syncColsCheck(false)
        }
    };
    Class.prototype.getCssRule = function (key, callback) {
        var that = this, style = that.elem.find("style")[0], sheet = style.sheet || style.styleSheet || {},
            rules = sheet.cssRules || sheet.rules;
        layui.each(rules, function (i, item) {
            if (item.selectorText === (".laytable-cell-" + key)) {
                return callback(item), true
            }
        })
    };
    Class.prototype.fullSize = function () {
        var that = this, options = that.config, height = options.height, bodyHeight;
        if (that.fullHeightGap) {
            height = _WIN.height() - that.fullHeightGap;
            if (height < 135) {
                height = 135
            }
            that.elem.css("height", height)
        }
        if (!height) {
            return
        }
        bodyHeight = parseFloat(height) - (that.layHeader.outerHeight() || 38);
        if (options.toolbar) {
            bodyHeight = bodyHeight - (that.layTool.outerHeight() || 50)
        }
        if (options.totalRow) {
            bodyHeight = bodyHeight - (that.layTotal.outerHeight() || 40)
        }
        if (options.page) {
            bodyHeight = bodyHeight - (that.layPage.outerHeight() || 41) - 2
        }
        that.layMain.css("height", bodyHeight)
    };
    Class.prototype.getScrollWidth = function (elem) {
        var width = 0;
        if (elem) {
            width = elem.offsetWidth - elem.clientWidth
        } else {
            elem = document.createElement("div");
            elem.style.width = "100px";
            elem.style.height = "100px";
            elem.style.overflowY = "scroll";
            document.body.appendChild(elem);
            width = elem.offsetWidth - elem.clientWidth;
            document.body.removeChild(elem)
        }
        return width
    };
    Class.prototype.scrollPatch = function () {
        var that = this, layMainTable = that.layMain.children("table"),
            scollWidth = that.layMain.width() - that.layMain.prop("clientWidth"),
            scollHeight = that.layMain.height() - that.layMain.prop("clientHeight"),
            getScrollWidth = that.getScrollWidth(that.layMain[0]),
            outWidth = layMainTable.outerWidth() - that.layMain.width(), addPatch = function (elem) {
                if (scollWidth && scollHeight) {
                    elem = elem.eq(0);
                    if (!elem.find(".layui-table-patch")[0]) {
                        var patchElem = $('<th class="layui-table-patch"><div class="layui-table-cell"></div></th>');
                        patchElem.find("div").css({width: scollWidth});
                        elem.find("tr").append(patchElem)
                    }
                } else {
                    elem.find(".layui-table-patch").remove()
                }
            };
        addPatch(that.layHeader);
        addPatch(that.layTotal);
        var mainHeight = that.layMain.height(), fixHeight = mainHeight - scollHeight;
        that.layFixed.find(ELEM_BODY).css("height", layMainTable.height() >= fixHeight ? fixHeight : "auto");
        that.layFixRight[outWidth > 0 ? "removeClass" : "addClass"](HIDE);
        that.layFixRight.css("right", scollWidth - 1)
    };
    Class.prototype.events = function () {
        var that = this, options = that.config, _BODY = $("body"), dict = {}, th = that.layHeader.find("th"), resizing,
            ELEM_CELL = ".layui-table-cell", filter = options.elem.attr("lay-filter");
        that.layTool.on("click", "*[lay-event]", function (e) {
            var othis = $(this), events = othis.attr("lay-event"), openPanel = function (sets) {
                var list = $(sets.list), panel = $('<ul class="layui-table-tool-panel"></ul>');
                panel.html(list);
                if (options.height) {
                    panel.css("max-height", options.height - (that.layTool.outerHeight() || 50))
                }
                othis.find(".layui-table-tool-panel")[0] || othis.append(panel);
                that.renderForm();
                panel.on("click", function (e) {
                    layui.stope(e)
                });
                sets.done && sets.done(panel, list)
            };
            layui.stope(e);
            _DOC.trigger("table.tool.panel.remove");
            layer.close(that.tipsIndex);
            switch (events) {
                case"LAYTABLE_COLS":
                    openPanel({
                        list: function () {
                            var lis = [];
                            that.eachCols(function (i, item) {
                                if (item.field && item.type == "normal") {
                                    lis.push('<li><input type="checkbox" name="' + item.field + '" data-key="' + item.key + '" data-parentkey="' + (item.parentKey || "") + '" lay-skin="primary" ' + (item.hide ? "" : "checked") + ' title="' + (item.title || item.field) + '" lay-filter="LAY_TABLE_TOOL_COLS"></li>')
                                }
                            });
                            return lis.join("")
                        }(), done: function () {
                            form.on("checkbox(LAY_TABLE_TOOL_COLS)", function (obj) {
                                var othis = $(obj.elem), checked = this.checked, key = othis.data("key"),
                                    parentKey = othis.data("parentkey");
                                layui.each(options.cols, function (i1, item1) {
                                    layui.each(item1, function (i2, item2) {
                                        if (i1 + "-" + i2 === key) {
                                            var hide = item2.hide;
                                            item2.hide = !checked;
                                            that.elem.find('*[data-key="' + options.index + "-" + key + '"]')[checked ? "removeClass" : "addClass"](HIDE);
                                            if (hide != item2.hide) {
                                                that.setParentCol(!checked, parentKey)
                                            }
                                            that.resize()
                                        }
                                    })
                                })
                            })
                        }
                    });
                    break;
                case"LAYTABLE_EXPORT":
                    if (device.ie) {
                        layer.tips("导出功能不支持 IE，请用 Chrome 等高级浏览器导出", this, {tips: 3})
                    } else {
                        openPanel({
                            list: function () {
                                return ['<li data-type="csv">导出到 Csv 文件</li>', '<li data-type="xls">导出到 Excel 文件</li>'].join("")
                            }(), done: function (panel, list) {
                                list.on("click", function () {
                                    var type = $(this).data("type");
                                    table.exportFile(options.id, null, type)
                                })
                            }
                        })
                    }
                    break;
                case"LAYTABLE_PRINT":
                    var printWin = window.open("打印窗口", "_blank"),
                        style = ["<style>", "body{font-size: 12px; color: #666;}", "table{width: 100%; border-collapse: collapse; border-spacing: 0;}", "th,td{line-height: 20px; padding: 9px 15px; border: 1px solid #ccc; text-align: left; font-size: 12px; color: #666;}", "a{color: #666; text-decoration:none;}", "*.layui-hide{display: none}", "</style>"].join(""),
                        html = $(that.layHeader.html());
                    html.append(that.layMain.find("table").html());
                    html.find("th.layui-table-patch").remove();
                    html.find(".layui-table-col-special").remove();
                    printWin.document.write(style + html.prop("outerHTML"));
                    printWin.document.close();
                    printWin.print();
                    printWin.close();
                    break
            }
            layui.event.call(this, MOD_NAME, "toolbar(" + filter + ")", $.extend({event: events, config: options}, {}))
        });
        th.on("mousemove", function (e) {
            var othis = $(this), oLeft = othis.offset().left, pLeft = e.clientX - oLeft;
            if (othis.data("unresize") || dict.resizeStart) {
                return
            }
            dict.allowResize = othis.width() - pLeft <= 10;
            _BODY.css("cursor", (dict.allowResize ? "col-resize" : ""))
        }).on("mouseleave", function () {
            var othis = $(this);
            if (dict.resizeStart) {
                return
            }
            _BODY.css("cursor", "")
        }).on("mousedown", function (e) {
            var othis = $(this);
            if (dict.allowResize) {
                var key = othis.data("key");
                e.preventDefault();
                dict.resizeStart = true;
                dict.offset = [e.clientX, e.clientY];
                that.getCssRule(key, function (item) {
                    var width = item.style.width || othis.outerWidth();
                    dict.rule = item;
                    dict.ruleWidth = parseFloat(width);
                    dict.minWidth = othis.data("minwidth") || options.cellMinWidth
                })
            }
        });
        _DOC.on("mousemove", function (e) {
            if (dict.resizeStart) {
                e.preventDefault();
                if (dict.rule) {
                    var setWidth = dict.ruleWidth + e.clientX - dict.offset[0];
                    if (setWidth < dict.minWidth) {
                        setWidth = dict.minWidth
                    }
                    dict.rule.style.width = setWidth + "px";
                    layer.close(that.tipsIndex)
                }
                resizing = 1
            }
        }).on("mouseup", function (e) {
            if (dict.resizeStart) {
                dict = {};
                _BODY.css("cursor", "");
                that.scrollPatch()
            }
            if (resizing === 2) {
                resizing = null
            }
        });
        th.on("click", function (e) {
            var othis = $(this), elemSort = othis.find(ELEM_SORT), nowType = elemSort.attr("lay-sort"), type;
            if (!elemSort[0] || resizing === 1) {
                return resizing = 2
            }
            if (nowType === "asc") {
                type = "desc"
            } else {
                if (nowType === "desc") {
                    type = null
                } else {
                    type = "asc"
                }
            }
            that.sort(othis, type, null, true)
        }).find(ELEM_SORT + " .layui-edge ").on("click", function (e) {
            var othis = $(this), index = othis.index(), field = othis.parents("th").eq(0).data("field");
            layui.stope(e);
            if (index === 0) {
                that.sort(field, "asc", null, true)
            } else {
                that.sort(field, "desc", null, true)
            }
        });
        var commonMember = function (sets) {
            var othis = $(this), index = othis.parents("tr").eq(0).data("index"),
                tr = that.layBody.find('tr[data-index="' + index + '"]'), data = table.cache[that.key][index];
            return $.extend({
                tr: tr, data: table.clearCacheKey(data), del: function () {
                    table.cache[that.key][index] = [];
                    tr.remove();
                    that.scrollPatch()
                }, update: function (fields) {
                    fields = fields || {};
                    layui.each(fields, function (key, value) {
                        if (key in data) {
                            var templet, td = tr.children('td[data-field="' + key + '"]');
                            data[key] = value;
                            that.eachCols(function (i, item2) {
                                if (item2.field == key && item2.templet) {
                                    templet = item2.templet
                                }
                            });
                            td.children(ELEM_CELL).html(function () {
                                return templet ? function () {
                                    return typeof templet === "function" ? templet(data) : laytpl($(templet).html() || value).render(data)
                                }() : value
                            }());
                            td.data("content", value)
                        }
                    })
                }
            }, sets)
        };
        that.elem.on("click", 'input[name="layTableCheckbox"]+', function () {
            var checkbox = $(this).prev(), childs = that.layBody.find('input[name="layTableCheckbox"]:not(:disabled)'),
                index = checkbox.parents("tr").eq(0).data("index"), checked = checkbox[0].checked,
                isAll = checkbox.attr("lay-filter") === "layTableAllChoose";
            if (isAll) {
                childs.each(function (i, item) {
                    item.checked = checked;
                    var index = $(this).closest("tr").data("index");
                    that.setCheckData(index, checked)
                });
                that.syncCheckAll();
                that.renderForm("checkbox")
            } else {
                that.setCheckData(index, checked);
                that.syncCheckAll()
            }
            layui.event.call(checkbox[0], MOD_NAME, "checkbox(" + filter + ")", commonMember.call(checkbox[0], {
                checked: checked,
                type: isAll ? "all" : "one"
            }))
        });
        that.elem.on("click", 'input[lay-type="layTableRadio"]+', function () {
            var radio = $(this).prev(), checked = radio[0].checked, thisData = table.cache[that.key],
                index = radio.parents("tr").eq(0).data("index");
            layui.each(thisData, function (i, item) {
                if (index === i) {
                    item.LAY_CHECKED = true
                } else {
                    delete item.LAY_CHECKED
                }
            });
            that.setThisRowChecked(index);
            layui.event.call(this, MOD_NAME, "radio(" + filter + ")", commonMember.call(this, {checked: checked}))
        });
        that.layBody.on("mouseenter", "tr", function () {
            var othis = $(this), index = othis.index();
            that.layBody.find("tr:eq(" + index + ")").addClass(ELEM_HOVER)
        }).on("mouseleave", "tr", function () {
            var othis = $(this), index = othis.index();
            that.layBody.find("tr:eq(" + index + ")").removeClass(ELEM_HOVER)
        }).on("click", "tr", function () {
            setRowEvent.call(this, "row")
        }).on("dblclick", "tr", function () {
            setRowEvent.call(this, "rowDouble")
        });
        var setRowEvent = function (eventType) {
            var othis = $(this);
            layui.event.call(this, MOD_NAME, eventType + "(" + filter + ")", commonMember.call(othis.children("td")[0]))
        };
        that.layBody.on("change", "." + ELEM_EDIT, function () {
            var othis = $(this), value = this.value, field = othis.parent().data("field"),
                index = othis.parents("tr").eq(0).data("index"), data = table.cache[that.key][index];
            data[field] = value;
            layui.event.call(this, MOD_NAME, "edit(" + filter + ")", commonMember.call(this, {
                value: value,
                field: field
            }))
        }).on("blur", "." + ELEM_EDIT, function () {
            var templet, othis = $(this), field = othis.parent().data("field"),
                index = othis.parents("tr").eq(0).data("index"), data = table.cache[that.key][index];
            that.eachCols(function (i, item) {
                if (item.field == field && item.templet) {
                    templet = item.templet
                }
            });
            othis.siblings(ELEM_CELL).html(function (value) {
                return templet ? function () {
                    return typeof templet === "function" ? templet(data) : laytpl($(templet).html() || this.value).render(data)
                }() : value
            }(this.value));
            othis.parent().data("content", this.value);
            othis.remove()
        });
        that.layBody.on("click", "td", function (e) {
            var othis = $(this), field = othis.data("field"), editType = othis.data("edit"),
                elemCell = othis.children(ELEM_CELL);
            if (othis.data("off")) {
                return
            }
            if (editType) {
                var input = $('<input class="layui-input ' + ELEM_EDIT + '">');
                input[0].value = othis.data("content") || elemCell.text();
                othis.find("." + ELEM_EDIT)[0] || othis.append(input);
                input.focus();
                layui.stope(e);
                return
            }
        }).on("mouseenter", "td", function () {
            gridExpand.call(this)
        }).on("mouseleave", "td", function () {
            gridExpand.call(this, "hide")
        });
        var ELEM_GRID = "layui-table-grid", ELEM_GRID_DOWN = "layui-table-grid-down",
            ELEM_GRID_PANEL = "layui-table-grid-panel", gridExpand = function (hide) {
                var othis = $(this), elemCell = othis.children(ELEM_CELL);
                if (hide) {
                    othis.find(".layui-table-grid-down").remove()
                } else {
                    if (elemCell.prop("scrollWidth") > elemCell.outerWidth()) {
                        if (elemCell.find("." + ELEM_GRID_DOWN)[0]) {
                            return
                        }
                        othis.append('<div class="' + ELEM_GRID_DOWN + '"><i class="layui-icon layui-icon-down"></i></div>')
                    }
                }
            };
        that.layBody.on("click", "." + ELEM_GRID_DOWN, function (e) {
            var othis = $(this), td = othis.parent(), elemCell = td.children(ELEM_CELL);
            that.tipsIndex = layer.tips(['<div class="layui-table-tips-main" style="margin-top: -' + (elemCell.height() + 16) + "px;" + function () {
                if (options.size === "sm") {
                    return "padding: 4px 15px; font-size: 12px;"
                }
                if (options.size === "lg") {
                    return "padding: 14px 15px;"
                }
                return ""
            }() + '">', elemCell.html(), "</div>", '<i class="layui-icon layui-table-tips-c layui-icon-close"></i>'].join(""), elemCell[0], {
                tips: [3, ""],
                time: -1,
                anim: -1,
                maxWidth: (device.ios || device.android) ? 300 : that.elem.width() / 2,
                isOutAnim: false,
                skin: "layui-table-tips",
                success: function (layero, index) {
                    layero.find(".layui-table-tips-c").on("click", function () {
                        layer.close(index)
                    })
                }
            });
            layui.stope(e)
        });
        that.layBody.on("click", "*[lay-event]", function () {
            var othis = $(this), index = othis.parents("tr").eq(0).data("index");
            layui.event.call(this, MOD_NAME, "tool(" + filter + ")", commonMember.call(this, {event: othis.attr("lay-event")}));
            that.setThisRowChecked(index)
        });
        that.layMain.on("scroll", function () {
            var othis = $(this), scrollLeft = othis.scrollLeft(), scrollTop = othis.scrollTop();
            that.layHeader.scrollLeft(scrollLeft);
            that.layTotal.scrollLeft(scrollLeft);
            that.layFixed.find(ELEM_BODY).scrollTop(scrollTop);
            layer.close(that.tipsIndex)
        });
        _DOC.on("click", function () {
            _DOC.trigger("table.remove.tool.panel")
        });
        _DOC.on("table.remove.tool.panel", function () {
            $(".layui-table-tool-panel").remove()
        });
        _WIN.on("resize", function () {
            that.resize()
        })
    };
    table.init = function (filter, settings) {
        settings = settings || {};
        var that = this, elemTable = filter ? $('table[lay-filter="' + filter + '"]') : $(ELEM + "[lay-data]"),
            errorTips = "Table element property lay-data configuration item has a syntax error: ";
        elemTable.each(function () {
            var othis = $(this), tableData = othis.attr("lay-data");
            try {
                tableData = new Function("return " + tableData)()
            } catch (e) {
                hint.error(errorTips + tableData)
            }
            var cols = [], options = $.extend({
                elem: this,
                cols: [],
                data: [],
                skin: othis.attr("lay-skin"),
                size: othis.attr("lay-size"),
                even: typeof othis.attr("lay-even") === "string"
            }, table.config, settings, tableData);
            filter && othis.hide();
            othis.find("thead>tr").each(function (i) {
                options.cols[i] = [];
                $(this).children().each(function (ii) {
                    var th = $(this), itemData = th.attr("lay-data");
                    try {
                        itemData = new Function("return " + itemData)()
                    } catch (e) {
                        return hint.error(errorTips + itemData)
                    }
                    var row = $.extend({
                        title: th.text(),
                        colspan: th.attr("colspan") || 0,
                        rowspan: th.attr("rowspan") || 0
                    }, itemData);
                    if (row.colspan < 2) {
                        cols.push(row)
                    }
                    options.cols[i].push(row)
                })
            });
            othis.find("tbody>tr").each(function (i1) {
                var tr = $(this), row = {};
                tr.children("td").each(function (i2, item2) {
                    var td = $(this), field = td.data("field");
                    if (field) {
                        return row[field] = td.html()
                    }
                });
                layui.each(cols, function (i3, item3) {
                    var td = tr.children("td").eq(i3);
                    row[item3.field] = td.html()
                });
                options.data[i1] = row
            });
            table.render(options)
        });
        return that
    };
    thisTable.that = {};
    thisTable.config = {};
    table.eachCols = function (id, callback, cols) {
        var config = thisTable.config[id] || {}, arrs = [], index = 0;
        cols = $.extend(true, [], cols || config.cols);
        layui.each(cols, function (i1, item1) {
            layui.each(item1, function (i2, item2) {
                if (item2.colGroup) {
                    var childIndex = 0;
                    index++;
                    item2.CHILD_COLS = [];
                    layui.each(cols[i1 + 1], function (i22, item22) {
                        if (item22.PARENT_COL_INDEX || (childIndex > 1 && childIndex == item2.colspan)) {
                            return
                        }
                        item22.PARENT_COL_INDEX = index;
                        item2.CHILD_COLS.push(item22);
                        childIndex = childIndex + parseInt(item22.colspan > 1 ? item22.colspan : 1)
                    })
                }
                if (item2.PARENT_COL_INDEX) {
                    return
                }
                arrs.push(item2)
            })
        });
        var eachArrs = function (obj) {
            layui.each(obj || arrs, function (i, item) {
                if (item.CHILD_COLS) {
                    return eachArrs(item.CHILD_COLS)
                }
                typeof callback === "function" && callback(i, item)
            })
        };
        eachArrs()
    };
    table.checkStatus = function (id) {
        var nums = 0, invalidNum = 0, arr = [], data = table.cache[id] || [];
        layui.each(data, function (i, item) {
            if (item.constructor === Array) {
                invalidNum++;
                return
            }
            if (item[table.config.checkName]) {
                nums++;
                arr.push(table.clearCacheKey(item))
            }
        });
        return {data: arr, isAll: data.length ? (nums === (data.length - invalidNum)) : false}
    };
    table.exportFile = function (id, data, type) {
        data = data || table.clearCacheKey(table.cache[id]);
        type = type || "csv";
        var config = thisTable.config[id] || {}, textType = ({csv: "text/csv", xls: "application/vnd.ms-excel"})[type],
            alink = document.createElement("a");
        if (device.ie) {
            return hint.error("IE_NOT_SUPPORT_EXPORTS")
        }
        alink.href = "data:" + textType + ";charset=utf-8,\ufeff" + encodeURIComponent(function () {
            var dataTitle = [], dataMain = [];
            layui.each(data, function (i1, item1) {
                var vals = [];
                if (typeof id === "object") {
                    layui.each(id, function (i, item) {
                        i1 == 0 && dataTitle.push(item || "")
                    });
                    layui.each(table.clearCacheKey(item1), function (i2, item2) {
                        vals.push(item2)
                    })
                } else {
                    table.eachCols(id, function (i3, item3) {
                        if (item3.field && item3.type == "normal" && !item3.hide) {
                            i1 == 0 && dataTitle.push(item3.title || "");
                            vals.push(item1[item3.field])
                        }
                    })
                }
                dataMain.push(vals.join(","))
            });
            return dataTitle.join(",") + "\r\n" + dataMain.join("\r\n")
        }());
        alink.download = (config.title || "table_" + (config.index || "")) + "." + type;
        document.body.appendChild(alink);
        alink.click();
        document.body.removeChild(alink)
    };
    table.resize = function (id) {
        if (id) {
            var config = getThisTableConfig(id);
            if (!config) {
                return
            }
            thisTable.that[id].resize()
        } else {
            layui.each(thisTable.that, function () {
                this.resize()
            })
        }
    };
    table.reload = function (id, options) {
        options = options || {};
        var config = getThisTableConfig(id);
        if (!config) {
            return
        }
        if (options.data && options.data.constructor === Array) {
            delete config.data
        }
        return table.render($.extend(true, {}, config, options))
    };
    table.render = function (options) {
        var inst = new Class(options);
        return thisTable.call(inst)
    };
    table.clearCacheKey = function (data) {
        data = $.extend({}, data);
        delete data[table.config.checkName];
        delete data[table.config.indexName];
        return data
    };
    table.init();
    exports(MOD_NAME, table)
});