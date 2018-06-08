<?php
    $cart = Cart::getInstance();
    $items = $cart->getItems();
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
    <?php 
    if(!empty($items)) {
        foreach($items as $key=>$value) {
            echo "$value of $key" . '<a href="index.php?action=remove&item=' . $key . '">remove</a><br>';
        }
    } else {
        echo "You have no items in your cart<br>";
    }
    ?>

    <a href="index.php?action=shop">Back to shopping</a>
    <a href="index.php?action=clear">Empty Cart</a>
</body>
</html>