<?php
$top = 0;
if (!empty($_GET['top'])) {
    $top = $_GET['top'];
}
$top += 10;
header("Refresh: 1,url=move.php?top=$top");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        #theButton {
            position: absolute;
            top: <?= $top ?>px;
        }
    </style>
</head>
<body>
    <button id="theButton">Watch Me!</button>
</body>
</html>