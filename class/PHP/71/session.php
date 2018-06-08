<?php
session_start();

if(!empty($_SESSION['count'])) {
    $count = $_SESSION['count'] + 1;
} else {
    $count = 1;
}

$_SESSION['count'] = $count;// + 1;
$_SESSION['test'] = "Hello There!";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2>You have visited the site <?= $count ?> times</h2>
</body>
</html>