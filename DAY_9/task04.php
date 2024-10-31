<?php

function whoami(){
    
    $name = $_POST["name"];
    $age = $_POST["age"];

    if ($name && $age){
        echo "Hi, my name is $name and I'm $age years old.";
    }   elseif ($age){
        echo "Hi, I have no name and I'm $age years old.";
    }   elseif ($name) {
        echo "Hi, my name is $name.";
    }   else {
        echo "Hi, I have no name.";
    }
}

?>