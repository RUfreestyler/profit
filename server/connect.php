<?php
    $db = new mysqli('127.0.0.1','root','','profit',3306);
    if ($db->connect_errno) {
        printf("Connect failed: %s\n", $db->connect_error);
        exit();
    }
?>