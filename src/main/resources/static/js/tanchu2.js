layui.use(['layer','form','table', 'tree'], function () {
    var form = layui.form;
    var layer = layui.layer;
    var table = layui.table;

    $('#tanchu').on('click', function () {
        //示范一个公告层
/*        layer.open({
            type: 1
            ,title: false //不显示标题栏
            ,closeBtn: true
            ,area: '300px;'
            ,shade: 0.8
            ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
            // ,btn: ['火速围观', '残忍拒绝']
            ,btnAlign: 'c'
            ,moveType: 1 //拖拽模式，0或者1
            ,content: $('#notice')
            ,success: function(layero){
                var btn = layero.find('.layui-layer-btn');
                btn.find('.layui-layer-btn0').attr({
                    href: 'http://www.layui.com/'
                    ,target: '_blank'
                });
            }
        });*/
        layer.open({
            type: 1,
            title: '信息提示',
            area: ['800px','700px'],
            // closeBtn: true,
            skin:'layui-layer-lan',
            anim: 1,
            maxmin:true,
            shade: 0.8,
            // btn: ['火速围观', '残忍拒绝'],
            content: $("#notice")
        });

        //第一个实例
        table.render({
            elem: '#demo'
            ,url: '/user/list' //数据接口
            ,toolbar: '#toolbarDemo'
/*            ,page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
                layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'] //自定义分页布局
                //,curr: 5 //设定初始在第 5 页
                ,groups: 1 //只显示 1 个连续页码
                ,first: false //不显示首页
                ,last: false //不显示尾页
            }*/
            ,page:true
            // ,limit:10
            ,loading:true
            // ,limits:[20,40,60]
            ,even:true
            // , skin: 'line'
            ,cols: [
                [
                    //{type:'radio'}
                    {type:'checkbox'}
                    ,{field:'userId', width:80, title: 'ID', sort: true}
                    ,{field:'userName', width:80, title: '用户名'}
                    ,{field:'sex', width:80, title: '性别', sort: true}
                    ,{field:'city', width:80, title: '城市'}
                    ,{field:'sign', title: '签名', minWidth: 100}
                    ,{field:'experience', width:80, title: '积分', sort: true}
                    ,{field:'score', width:80, title: '评分', sort: true}
                    ,{field:'classify', width:80, title: '职业'}
                    ,{field:'wealth', width:135, title: '财富', sort: true}
                ]
            ]
        });
        //头工具栏事件
        table.on('toolbar(test)', function(obj){
            var checkStatus = table.checkStatus(obj.config.id); //获取选中行状态
            switch(obj.event){
                case 'getCheckData':
                    var data = checkStatus.data;  //获取选中行数据
                    layer.alert(JSON.stringify(data));
                    break;
            };
        });
    });

    $("#search").click(function () {
        table.reload('demo',{
            where: {
                userName: $('#userName').val()
            }
        });
    });

    // 树的加载
    $("#tanchuTree").click(function () {
        layer.open({
            type: 1,
            title: '信息提示',
            area: ['800px','700px'],
            // closeBtn: true,
            skin:'layui-layer-lan',
            anim: 1,
            maxmin:true,
            shade: 0.8,
            // btn: ['火速围观', '残忍拒绝'],
            content: $("#easyuiTree")
        });
        /******easyui tree*****************************************************/
        $("#tt").tree({
         /*   data: [{
                text: 'Item1',
                state: 'closed',
                children: [{
                    text: 'Item11'
                },{
                    text: 'Item12'
                }]
            },{
                text: 'Item2'
            }]*/
         url:'/user/tree'
        });
        /******easyui tree*****************************************************/

        /*************************************layui tree*****************************************************/
/*        layui.tree({
            elem: '#tt' //传入元素选择器
            ,skin: 'shihuang'
            ,nodes:[{ //节点数据
                name: '节点A'
                ,children: [{
                    name: '节点A1'
                }]
            }, {
                name: '节点B'
                ,children: [{
                    name: '节点B1'
                    ,alias: 'bb' //可选
                    ,id: '123' //可选
                }, {
                    name: '节点B2'
                }]
            }]
            ,click: function(node){
                console.log(node) //node即为当前点击的节点数据
            }
        });*/
        /*************************************layui tree*****************************************************/
    });

    /*****************************************表单校验**************************************************************/
    form.verify({
        username: function(value, item){ //value：表单的值、item：表单的DOM对象
            if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
                return '用户名不能有特殊字符';
            }
            if(/(^\_)|(\__)|(\_+$)/.test(value)){
                return '用户名首尾不能出现下划线\'_\'';
            }
            if(/^\d+\d+\d$/.test(value)){
                return '用户名不能全为数字';
            }
        }

        //我们既支持上述函数式的方式，也支持下述数组的形式
        //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
        ,pass: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
        ]
    });
    /*****************************************表单校验**************************************************************/
});
