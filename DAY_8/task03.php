<?php

function get_shortest(array $arr)
{
    $shortest = $arr[0];
    foreach ($arr as $x){
        if (strlen($x) < strlen($shortest)){
            $shortest = $x;
        }
    }
    return $shortest;
}
?>