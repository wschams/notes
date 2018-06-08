<?php
require 'db.php';

if(! empty($_POST["recipe"])) {
    $recipe = $_POST["recipe"];
} 
else {
    http_response_code(400);
    exit("recipe is required");
}
$query = "SELECT ingredients FROM recipe_ingredient WHERE recipes = :recipe";
$statement = $db->prepare($query);
$statement->bindParam("recipe", $recipe);
$statement->execute();
$theRecipe = $statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($theRecipe);
?>