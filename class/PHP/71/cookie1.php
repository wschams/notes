<?php
    function getCookieValues() {
        $props = [];
        if(!empty($_COOKIE["props"])) {
            $parts = explode("|", $_COOKIE["props"]);
            foreach($parts as $keyValue) {
                $values = explode("=", $keyValue);
                $props[$values[0]] = $values[1];
            }
        }
        return $props;
    }

    function writeCookie($props) {
        $cookieText = '';

        foreach($props as $key=>$value) {
            $cookieText .= "$key=$value|";
        }
        //$cookieText = rtrim($cookieText, "|");
        $cookieText = substr($cookieText, 0, -1);

        /*foreach($props as $key=>$value) {
            if(!empty($cookieText)) {
                $cookieText .= "|";
            }
            $cookieText .= "$key=$value";
        }*/

        /*$cookieTexts = [];
        foreach($props as $key=>$value) {
            $cookieTexts[] = "$key=$value";
        }
        $cookieText = join("|", $cookieTexts);*/

        setCookie("props", $cookieText, time() + (60 * 60));
    }

    $props = getCookieValues();
    if(!empty($props['color'])) {
        $color = $props['color'];
    } else {
        $color = "white";
    }

    if(!empty($_GET["color"])) {
        $color = $_GET["color"];
    } 

    if(!empty($props["lastVisited"])) {
        $lastVisited = $props["lastVisited"];
    }

    $props['color'] = $color;
    $props['lastVisited'] = time();

    writeCookie($props);
    //writeCookie(['color' => $color, 'lastVisited' => $lastVisited]);

    

    /*
    $cookieText = "color=blue|lastVisited=123456789";
    $parts = explode("|", $cookieText);
    print_r($parts);
    echo "<br>";
    foreach($parts as $keyValue) {
        $values = explode("=", $keyValue);
        echo "$values[0] is $values[1]<br>";
    }
    */
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
