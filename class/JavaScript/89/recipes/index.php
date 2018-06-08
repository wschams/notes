<?php
    require 'db.php';
    $query = "SELECT name, id FROM recipes";
    $rs = $db->query($query);
    $recipes = $rs->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="recipes.css" rel="stylesheet" />
</head>

<body>
    <h1>PCS Recipes</h1>
    <h3>Choose a recipe</h3>

    <?php
    foreach($recipes as $recipe) {
        echo '<input type="radio" name="recipe" value="' . $recipe["id"] . '" />' . $recipe["name"];
    }
    ?>

    <div id="recipe">
        <img />
        <h2></h2>
        <h3>Ingredients</h3>
        <ul></ul>
    </div>

    <script src="/jquery-3.2.1.min.js"></script>
    <script src="recipes.js"></script>
</body>

</html>