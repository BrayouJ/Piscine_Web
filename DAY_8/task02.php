<?php

function dog_bark(int $woof_nb)
{
    for ($x = 1; $x <= $woof_nb; $x++){
        if ($x < $woof_nb)
            echo "woof ";
        elseif ($x == $woof_nb)
            echo "woof";
    }
    echo "\n";
}

?>