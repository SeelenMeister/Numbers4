<?php

include('div3.php');
include('div5.php');
include('div3y5.php');

$div3   = new div3();
$div5   = new div5();
$div3y5 = new div3y5();

for ($i = 1; $i <= 100; $i++) {
    $out = '<tr><td>'.$i.'</tr></td>';
    $div3 ->setNumber($i) ->output($out);
    $div5 ->setNumber($i) ->output($out);
    $div3y5 ->setNumber($i) ->output($out);
    echo $out.'<br>';
}

?>