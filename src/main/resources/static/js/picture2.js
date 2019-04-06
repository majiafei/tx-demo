layui.use(['layer'], function () {
    var layer = layui.layer;

    var url = '';
    var imgUrl = '/img/thumbnails/tibet-2.jpg';
    for (var i = 0; i < 6; i++) {
        url += ' <img style="width: 100px" layer-pid="图片id，可以不写" layer-src="'+imgUrl+'" src="'+imgUrl+'" alt="图片名">'
    }
    $("#layer-photos-demo").html(url);
    layer.photos({
        photos: '#layer-photos-demo'
        ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
    });
});
