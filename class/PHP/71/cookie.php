<?php
    if(!empty($_COOKIE["ColorCookie"])) {
        $color = $_COOKIE["ColorCookie"];
    } else {
        $color = "white";
    }

    if(!empty($_GET["color"])) {
        $color = $_GET["color"];
    } 

    if(!empty($_COOKIE["lastVisited"])) {
        $lastVisited = $_COOKIE["lastVisited"];
    }

    setCookie("ColorCookie", "$color", time() + (60 * 60));
    setCookie("lastVisited", time(), time() + (60 * 60));
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        body {
            background-color: <?= $color ?>;
        }
    </style>
    <title>Document</title>
</head>
<body>
    <h1>The cookie page</h1>
    <h2>
        <?php if(!empty($lastVisited)) : ?>
        Welcome back. You last visited on <?= date('m/d/y h:i:s A', $lastVisited) ?>
        <?php else : ?>
        Welcome to the site. This is your first time here.
        <?php endif ?>
    </h2>
    <form>
        <input type="color" name="color"/>
        <input type="submit"/>
    </form>
</body>
</html>
