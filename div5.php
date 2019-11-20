<?php

require_once ('verificador.php');

class div5 extends Master{
    public function __construct($num = null){
        parent::__construct($num);
    }
    public function div() : bool{
        return $this->num % 5 == 0;
    }
    public function str() : string{
        return '<tr class="table-info"><td>IT</td></tr>';
    }
}
?>