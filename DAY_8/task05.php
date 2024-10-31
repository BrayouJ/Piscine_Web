<?php

function calc_average(array $arr){
    $total = 0;
    foreach ($arr as $x){
        $total = $total + $x;
    }
    return (round($total/count($arr),1));
}

?>