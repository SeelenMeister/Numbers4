<?php

include('div3.php');
include('div5.php');
include('div3y5.php');

$div3   = new div3();
$div5   = new div5();
$div3y5 = new div3y5();

$i = $_POST['id'];
$ini = 0; // NO MODIFICAR

do{
    $out = '<tr><td>'.$i.'</tr></td>';
    $div3 ->setNumber($i) ->output($out);
    $div5 ->setNumber($i) ->output($out);
    $div3y5 ->setNumber($i) ->output($out);
    echo $out.'<br>';
}while($ini != 0);

function test(){
        $out = '<tr><td>'.$i.'</tr></td>';
    $div3 ->setNumber($i) ->output($out);
    $div5 ->setNumber($i) ->output($out);
    $div3y5 ->setNumber($i) ->output($out);
    echo $out.'<br>';
}

?>