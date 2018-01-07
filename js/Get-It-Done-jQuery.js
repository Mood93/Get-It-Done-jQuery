//Check off todos by clicking
$("ul").on("click", "li", function() {
    
    $(this).toggleClass("completed");
    
})

//Click X to delete
$("ul").on("click", "span", function(event) {
    
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    })
    event.stopPropagation();
    
})

$("input[type= 'text']").keypress(function(event) {
    
    if(event.which === 13){
        //grab new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new lie and add to ul
        $("ul").append("<li><span>X </span>" + todoText + "</li>");
    }
    
});