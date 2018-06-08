<?php
    $color = "black";
        if(! empty($_GET["color"]))
            $color = $_GET["color"];

    $fonts = ["Arial", "Helvetica", "Times New Roman", "Times", "Courier New",
        "Courier", "Verdana", "Georgia", "Palatino", "Garamond", "Bookman",
        "Comic Sans MS", "Trebuchet MS", "Arial Black", "Impact", "Fantasy"];

        $font = "Arial";
                if(! empty($_GET['font']))
                    $font = $_GET['font'];
    
    if(! empty($_GET["color"])){
        $color = trim($_GET["color"], "#");
        }
            $submitted = "?color=%23$color&font=$font";
                
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"crossorigin="anonymous"/>   
    <link rel="stylesheet" href="/bootstrap-3.3.7/css/bootstrap.min.css" />
    <style>
        body{
            color: #<?= $color ?> ;
            font-family: <?= $font ?> ;
        }
        #font{
            color: #<?= $color ?>;
        }
        ul{
            list-style-type: none;
        }
    </style>
</head>
<body>
    <div class = "container">
            <header>
                <h1 class ="text-center">The Cleveland Plain Dealer</h1>
            </header>