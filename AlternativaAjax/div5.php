<?php

include('verificador.php');

$number = $_POST['number'];
$string = $_POST['string'];

$bool = div5($number);
$out2 = verificar($bool, $string);

echo ($out2);

function div5($i) : bool {
    return $i % 5 == 0;
}

function str() : string {
    return '<tr class="table-info"><td>IT</td></tr>';
}

?>