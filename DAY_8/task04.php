<?php

function calc(string $operator, int $nbr1, int $nbr2){
    switch ($operator){
        default:
            return "Unknown operator";
        case "+":
            return $nbr1+$nbr2;
        case "-":
            return $nbr1-$nbr2;
        case "*":
            return $nbr1*$nbr2;
        case "/":
            if ($nbr1 && $nbr2 != 0){
                return $nbr1/$nbr2;
            }   else {
                return "Cannot divide by 0";
            }
        case "%":
            return $nbr1%$nbr2;
    }
}

?>