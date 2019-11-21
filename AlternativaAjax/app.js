$(document).ready(function(){

    console.log('Js On!');
    
    $(document).on('click','#start', function(){
        start();
    });
});
var i = '';
var string = 'hola';
function start(){
    for(i = 1 ; i <= 100 ; i++){
        string = '<tr><td>'+i+'</tr></td>';
        var str = isDiv3(i, string);
        var str2 = isDiv5(i, str);
        var str3 = isDiv3y5(i, str2);
        $('#results').append(str3);
    }
}

function isDiv3(i,string){
    let number = i;
    const postData = {
        number: i,
        string: string,
    }
    var res = $.ajax({
        async: false,
        url: "div3.php",
        type: "POST",
        data: postData,
        timeout: 3000,
        success: function(response){
            return response;
        },
    });
    return res.responseText;
}

function isDiv5(i,string){
    let number = i;
    const postData = {
        number: i,
        string: string,
    }
    var res = $.ajax({
        async: false,
        url: "div5.php",
        type: "POST",
        data: postData,
        timeout: 3000,
        success: function(response){
            return response;
        },
    });
    return res.responseText;
}

function isDiv3y5(i,string){
    let number = i;
    const postData = {
        number: i,
        string: string,
    }
    var res = $.ajax({
        async: false,
        url: "div3and5.php",
        type: "POST",
        data: postData,
        timeout: 3000,
        success: function(response){
            return response;
        },
    });
    return res.responseText;
}
