<?php
    //setCookie("Cookie1", "A small step for a man", time() + 30);

    if(!empty($_COOKIE["ColorCookie"])) {
        $color = $_COOKIE["ColorCookie"];
    } else {
        $color = "white";
    }

    if(!empty($_GET["color"])) {
        $color = $_GET["color"];
    } 

    setCookie("ColorCookie", "$color", time() + (60 * 60));

    //setCookie("ColorCookie", "$color", time() - (60 * 60)); // expire the cookie 1 hour ago
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
    <form>
        <input type="color" name="color"/>
        <input type="submit"/>
    </form>
</body>
</html>
