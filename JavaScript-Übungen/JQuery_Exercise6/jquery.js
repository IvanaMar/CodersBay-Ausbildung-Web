$('h1').css("textAlign", "center");
$('h1').css("color", "green");
$('header').css("backgroundColor", "darkgrey")
$('header').css("borderRadius", "13px")
$('div').css("backgroundColor", "silver")
$('div').css("borderRadius", "13px")
$('p').css("padding", "1rem")
$('h1').css("textShadow", "grey 1px 2px");
$('button').css("backgroundColor", "green")
$('button').css("border", "none")
$('button').css("fontSize", "1rem")
$('button').css("fontWeight", "bold")
$('button').css("color", "white")
$('button').css("marginBottom", "1rem")
$('#input-user').css("marginLeft", "1rem")


$('#button1').click(function (){
    let text = $('#input-user').val();
    $('#second').empty()
    $('#second').append(" " + text);
    $('#input-user').val('');
});

$("#inside-div")
    .ondblclick.alert("Double clicked");
