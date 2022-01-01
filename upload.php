<?php

var_dump($_FILES);

foreach ($_FILES["myFiles"]["tmp_name"] as $key => $value){
    $targetPath = "uploads/" . basename($_FILES["myFiles"]["name"])
}