<?php
include 'db.php';
    if($_SERVER['REQUEST_METHOD'] === "POST"){
        if(!empty($_POST['sefer'])){
            $id = $_POST['sefer'];
                try{
                    $insert = "DELETE FROM seforim WHERE id = :theId";    
                    $statement = $db->prepare($insert);
                    $statement->bindValue('theId', $id);
                    $statement->execute();
                    $statement->closeCursor();
                    if($statement->rowCount() < 1) {
                        $error = "Failed to delete";
                    }   
                } catch (PDOException $e) {
                    $error = "Something went wrong " . $e->getMessage();
                }
        }       
    }

            try{
                $query = "SELECT id, name FROM seforim";
                $results = $db->query($query);
                $seforim = $results->fetchAll(PDO::FETCH_ASSOC);
                $results->closeCursor();
            } catch (PDOException $e) {
                $error = "Something went wrong " . $e->getMessage();
            }
?>