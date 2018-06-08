<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=<">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="index.php?action=add" method="post">
        Bottled Water
        <input type="hidden" name="item" value="bottled water"/>
        <input type="number" min="0" name="quantity" />
        <input type="submit" value="add to cart"/>
    </form>
    <form action="index.php?action=add" method="post">
        Paper
        <input type="hidden" name="item" value="paper"/>
        <input type="number" min="0" name="quantity" />
        <input type="submit" value="add to cart"/>
    </form>

    <a href="index.php?action=view">View Cart</a>
</body>
</html>