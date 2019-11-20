$(document).ready(function(){

    console.log('Js On!');
    
    $(document).on('click','#start', function(){
        start();
    });
});

function start(){
    for(let i = 1 ; i <= 100 ; i++){
        $.ajax({
            url: "main.php",
            type: "GET",
            success: function(response){
                $('#results').html(response);
            },
        });

    }
}

