<?php
$host        = "host = 127.0.0.1";
   $port        = "port = 5432";
   $dbname      = "dbname = Greek_Airlines_db";
   $credentials = "user = postgres password=2454597";
   $db = pg_connect( "$host $port $dbname $credentials");
?>