<?php
include 'utils/db.php';
    function registerFilter($catagory){
        $filters = '';
        foreach($catagory as $filter){
            $filters .= "&filter%5B%5D=" . $filter;        
        }
        return $filters;
    }

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
                    if(!empty($catagory)){
                        $delimiter = " WHERE catagory = ?";
                        foreach($catagory as $filter){
                            $query .= $delimiter;
                            $delimiter = " OR catagory = ?";
                        }
                    }
                    $statement = $db->prepare($query);
                    if(!empty($catagory)){
                        $statement->execute($catagory);
                    }else{
                        $statement->execute();
                    }
                    $seforim = $statement->fetchAll(PDO::FETCH_ASSOC);
                    $statement->closeCursor();
                } catch (PDOException $e) {
                    $error = "Something went wrong " . $e->getMessage();
                }
?>