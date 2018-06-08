<?php
    require "db.php";

    class Recipe implements JSONSerializable {
        private $name;
        private $picture;
        private $ingredients;

        public function __construct($name, $picture, $ingredients) {
            $this->name = $name;
            $this->picture = $picture;
            $this->ingredients = $ingredients;
        }

        public function JSONSerialize() {
            /*return [
                "name" => $this->name,
                "picture" => $this->picture,
                "ingredients" => $this->ingredients,
                "somethingElse" => "foo"
            ];*/
            return get_object_vars($this);
        }
    }

    if(empty($_GET['id'])) {
        http_response_code(400);
        exit("Id is a required param");
    }

    // can probably use group_concat to get ingredients grouped
    $query = "SELECT r.name AS recipe, r.picture, i.name AS ingredient
              FROM recipes r
              JOIN recipe_ingredients ri
                ON ri.recipeId = r.id
              JOIN ingredients i
                ON i.id = ri.ingredientId
              WHERE r.id = :id";

    $statement = $db->prepare($query);
    $statement->bindValue("id", $_GET['id']);
    $statement->execute();
    $rows = $statement->fetchAll(PDO::FETCH_ASSOC);

    /*$query2 = "SELECT i.name AS ingredient
              recipe_ingredients ri
            JOIN ingredients i
                ON i.id = ri.ingredientId
              WHERE ri.recipeId = :id";
    $rows = $statement->fetchAll(PDO::FETCH_COLUMN, 0); // [water, salt, peas]*/

    $ingredients = [];
    foreach($rows as $row) {
        $ingredients[] = $row['ingredient'];
    }

    $recipe = new Recipe($rows[0]['recipe'], $rows[0]['picture'], $ingredients);
    
    echo json_encode($recipe);
?>