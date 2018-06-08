<?php
    include 'db.php';
        try{       
            $query = "SELECT name FROM seforim";
            $results = $db->query($query);
            $seforim = $results->fetchAll(PDO::FETCH_COLUMN);
            
                if(isset($_GET['sefer'])){
                    if(isValidated($_GET['sefer'], $seforim)){
                        $query = "SELECT id, price FROM seforim WHERE name = '{$_GET['sefer']}'";
                        $results = $db->query($query);
                        $seferIdPrices = $results->fetchAll(PDO::FETCH_ASSOC);
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