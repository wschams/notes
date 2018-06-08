<?php
    $color = '#000000';
    if (! empty($_GET['color'])) {
        $color = $_GET['color'];
    }

    $bgcolor = '#FFFFFF';
    if (! empty($_GET['bgcolor'])) {
        $bgcolor = $_GET['bgcolor'];
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body {
            color: <?= $color ?>;
            background-color: <?= $bgcolor ?>;
        }
    </style>
</head>

<body>
    <form id="theForm">
        <label for="color">
            Color:
            <input type="color" id="color" name="color" value="<?= $color ?>"/>
        </label>
        <label for="bgcolor">
            Background Color:
            <input type="color" id="bgcolor" name="bgcolor" value="<?= $bgcolor ?>"/>
        </label>
        <label for="sometext">
            Some text:
            <input id="sometext" required/>
        </label>
        <label for="email">
            Email:
            <input type="email" id="email" />
        </label>
        <button>Apply</button>
    </form>
    <script src="colors3.js"></script>
</body>

</html>