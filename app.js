$(document).ready(function(){

    console.log('Js On!');
    
    $(document).on('click','#start', function(){
        start();
    });
});

function start(){
    $.ajax({
        url: "main.php",
        type: "GET",
        success: function(response){
            $('#results').html(response);
        },
    });
}
