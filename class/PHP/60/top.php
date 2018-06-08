<?php
if(empty($color)) {
    $color = "black";
}

$bgcolor = "white";
if(!empty($_GET["bgcolor"])) {
    $bgcolor = $_GET["bgcolor"];
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>
    <link href="/bootstrap-3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <?php foreach($stylesheets as $stylesheet) :?>
        <link href="<?=$stylesheet?>" rel="stylesheet">
    <?php endforeach ?>
    <style>  
        body {
            color: <?= $color ?>;
            background-color: <?= $bgcolor ?>;
        }

        <?php 
        if(!empty($styles)) {
            foreach($styles as $style) {
                echo $style;
            }
        }
        ?>
    </style>
</head>

<body>
    <div class="container">
        <div class="jumbotron text-center">
            <h1>PCS Interest Calculator</h1>
        </div>