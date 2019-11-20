<?php

abstract class Master {
    abstract public function div() : bool ;
    abstract public function str() : string ;
    public function __construct(int $num = null){
        $this->num = $num;
    }
    public function setNumber($num) : Master{
        $this->num = $num;
        return $this;
    }
    public function output(&$out) : Master{
        if ($this->div()) {
            $out = $this->str();
        }
        return $this;
    }
}

?>