<?php

require_once ('verificador.php');

class div3 extends Master{
    public function __construct($num = null){
        parent::__construct($num);
    }
    public function div() : bool{
        return $this->num % 3 == 0;
    }
    public function str() : string{
        return '<tr class="table-warning"><td>Linio</td></tr>';
    }
}
?>