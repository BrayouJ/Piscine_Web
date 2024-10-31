<?php

header("Content-Type: application/json");

if (isset($GET["name"])){
    $name =  htmlspecialchars($_GET["name"]);
    echo json_encode(["name" => $name ]);
}   else {
    echo json_encode(["error" => "Aucun nom fourni."]);
}

?>