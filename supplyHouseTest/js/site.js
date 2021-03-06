$(document).ready(function() {
    console.log("page loaded...");

    //click to change img via tiny btn
    $(".circle").click(function() {
        //pass on which button is clicked
        var btn = String(this.id);
        setImg(btn);
    });
    //set img and btn func
    var setImg = function(changeMethod) {
        var picAry = ["top","mid","bot"];
        var btnAry = ["rotate-top","rotate-mid","rotate-bot"];
        //set by intervcal
        if (changeMethod == "auto") {        
            //find current img
            var cur = $( ".front" );
            var next;
            //find current btn
            var cbtn = $( ".target-c" ); ;
            var nbtn;
            //set next img
            if (cur[0].id == picAry[0]) {
                next = $( "#"+picAry[1] );
                nbtn = $( "#rotate-"+picAry[1] );
            }else if (cur[0].id == picAry[1]) {
                next = $( "#"+picAry[2] );
                nbtn = $( "#rotate-"+picAry[2] );
            }else if (cur[0].id == picAry[2]) {
                next = $( "#"+picAry[0] );
                nbtn = $( "#rotate-"+picAry[0] );
            };
            //change img
            $(next).show();
            //botton change
            $(cbtn).removeClass( "target-c" );
            $(nbtn).addClass( "target-c" );
            //fade to anime the img change
            $( cur ).fadeOut( 1000, function() {
                //img stacked in z-index
                $(cur).removeClass( "front" ).addClass( "back" );
                $(next).removeClass( "back" ).addClass( "front" );
            });
            //console.log(cur[0].id, next[0].id);
        //set by hand
        }else{
            //console.log(changeMethod);
            var cbtn = $( "#"+changeMethod); ;
            var nbtn;
            //botton change
            $(".circle").removeClass( "target-c" );
            $(cbtn).addClass( "target-c" );
            //force change img
            //set cur img
            if (changeMethod == btnAry[0]) {
                var cur = $( "#"+picAry[0] );
            }else if (changeMethod == btnAry[1]) {
                var cur = $( "#"+picAry[1] );
            }else if (changeMethod == btnAry[2]) {
                var cur = $( "#"+picAry[2] );
            };
            //change pic by click
            $(".dis-img").removeClass( "front" ).addClass( "back" ).hide();
            $(cur).addClass( "front" ).show();
        };
    };
    //auto rotate pics
    var r = setInterval(function(){
        setImg("auto");
    }, 4000);
});
