<?php
if($_SERVER['REQUEST_METHOD'] === "POST"){
    if(!isset($_POST['price']) || empty($_POST['sefer'])){
        $errors[] = "Name and Price is a required field";
    }
        if(!empty($_POST['sefer'])){
            if(is_numeric($_POST['sefer'])){
                $errors[] = "Please enter a valid sefer";
            }
        }
                if(isset($_POST['price'])){
                    if(!is_numeric($_POST['price']) || $_POST['price'] < 0 || $_POST['price'] === ""){                   
                                $errors[] = "Please enter a valid price";                      
                        }
                }
                        if($_SERVER['REQUEST_METHOD'] === "POST" && empty($errors)){
                            include '../db.php';
                                try{       
                                    $insert = "INSERT INTO seforim (name, price) VALUES (:theSefer, :thePrice)";    
                                    $statement = $db->prepare($insert);
                                    $statement->bindValue('theSefer', trim(preg_replace('!\s+!', ' ',$_POST['sefer'])));
                                    $statement->bindValue('thePrice', $_POST['price']);
                                    $rowsInserted = $statement->execute();
                                    $statement->closeCursor();   
                                } catch (PDOException $e) {
                                    $error = "Something went wrong " . $e->getMessage();
                                }
                            }   
}
?>