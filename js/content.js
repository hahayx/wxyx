/**
 * Created by liguanjian on 2017-1-10.
 */
$(".img_size_1").click(function (event) {
    var src = event.currentTarget.currentSrc;
    $('#photoModal img').attr('src', src);
    $('#photoModal').modal();
});
$(".box_img_center").click(function (event) {
    $('#photoModal').modal('hide');
});
//用户点击自己回复商户的评论，弹出删除
$("#customReply1").click(function () {
    $('#myModal').modal();
});
$("#customReply2").click(function () {
    $('#myModal').modal();
});
//用户点击删除按钮删除此条评论
$("#btn_delete1").click(function () {
    $('#myModal').modal();
});
$("#btn_delete2").click(function () {
    $('#myModal').modal();
});
$("#btn_delete3").click(function () {
    $('#myModal').modal();
});