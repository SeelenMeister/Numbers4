<?php


include('verificador.php');

$number = $_POST['number'];
$string = $_POST['string'];

$bool = div3($number);
$out2 = verificar($bool, $string);

echo ($out2);

function div3($i) : bool {
    return $i % 3 == 0;
}

function str() : string {
    return '<tr class="table-warning"><td>Linio</td></tr>';
}

?>