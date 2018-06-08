<?php
include 'utils/db.php';   
    function registerFilter($catagory){
        $filters = '';
        foreach($catagory as $filter){
            $filters .= "&filter%5B%5D=" . $filter;        
        }
        return $filters;
    }
            try{       
                $query = "SELECT name FROM seforim";
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
                    $seforim = $statement->fetchAll(PDO::FETCH_COLUMN); 
            
                    if(isset($_GET['sefer'])){
                        if(isValidated($_GET['sefer'], $seforim)){
                            $query = "SELECT price FROM seforim WHERE name = '{$_GET['sefer']}'";
                            $results = $db->query($query);
                            $seferPrices = $results->fetchAll(PDO::FETCH_COLUMN);
                        }
                            /*if(empty($seferPrice)) //better way of validation
                            {*/
                        else{
                            $error = "{$_GET['sefer']} is not a valid sefer"; 
                        }
                    }
            } catch(PDOException $e) {
                die("Something went wrong " . $e->getMessage());
            }
                    function isValidated($sefer, $seforim){
                        $validated = false;
                        foreach($seforim as $value){
                            if($sefer === $value){
                                    $validated = true;
                            }    
                        }
                        return $validated;
                    }
?>