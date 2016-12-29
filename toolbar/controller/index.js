$(".toolbar").click(function(){
    $(".toolbar").addClass("toolbar-show");
    $(".toolbar-item").show();
    $("#toolbarMask").show();
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
    $(".toolbar-item").hide();
    $("#toolbarMask").hide();
}

