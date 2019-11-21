$(document).ready(function(){
    $('#error').hide();
    console.log('Js On!');
    
    $(document).on('click','#start', function(){
        let check = $('#input').val();
        if(check <= 0 || check == null ){
            $('#error').show();
        }else{startTest();}
    });

    $(document).on('click','#input', function(){
        $('#error').hide();
    });
});

function startTest(){
    const postId = {
        id: $('#input').val(),
    }
    $.post('main.php', postId, function(response){
        $('#results').html(response);

    });
}
