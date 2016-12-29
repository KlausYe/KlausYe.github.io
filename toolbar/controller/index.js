$(".toolbar").click(function(){
    $(".toolbar").addClass("toolbar-show");
    $(".toolbar-item").css("display","block");
    $("#toolbarMask").css("display","block");
    $("#toolbarMask").one("click",function() {
        toolbarHide();
    });
})
$("#close").click(function(e){
    toolbarHide();
    $("#toolbarMask").off("click");
    e.stopPropagation();
})
function toolbarHide(){
    $(".toolbar").removeClass("toolbar-show");
    $(".toolbar-item").css("display","none");
    $("#toolbarMask").css("display","none");
}

