// 集成fancybox, 只为文章中所有img元素添加父元素
$(".article-entry").find("img").each(function () {
    var element = document.createElement("a");
    $(element).attr("data-fancybox", "gallery");
    $(element).attr("href", $(this).attr("src"));
    $(this).wrap(element);
});