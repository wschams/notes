<?php
if($_SERVER['REQUEST_METHOD'] === "POST"){
    if(!isset($_POST['price']) || empty($_POST['name'])){
        $errors[] = "Name and Price is a required field";
    }
        if(!empty($_POST['name'])){
            if(is_numeric($_POST['name'])){
                $errors[] = "Please enter a valid sefer";
            }
        }
                if(isset($_POST['price'])){
                    if(!is_numeric($_POST['price']) || $_POST['price'] < 0 || $_POST['price'] === ""){                   
                                $errors[] = "Please enter a valid price";                      
                        }
                }
                        if($_SERVER['REQUEST_METHOD'] === "POST" && empty($errors)){
                            include 'db.php';
                                try{ 
                                    $update = "UPDATE seforim SET name = (:name), price = (:price) WHERE id= (:id)";      
                                    $statement = $db->prepare($update);
                                    $statement->bindValue('name', trim(preg_replace('!\s+!', ' ',$_POST['name'])));
                                    $statement->bindValue('price', $_POST['price']);
                                    $statement->bindValue('id', $_POST['id']);
                                    $rowsInserted = $statement->execute();
                                    if(!$statement->rowCount()) {
                                        $errors[] = "Failed to update the sefer with the id number of {$_POST['id']}";
                                    }
                                    $statement->closeCursor();   
                                } catch (PDOException $e) {
                                    $error = "Something went wrong " . $e->getMessage();
                                }
                            }   
}
?>