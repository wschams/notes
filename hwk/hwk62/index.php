<?php
    include '../db.php';
        try{       
            $query = "SELECT name FROM seforim";
            $results = $db->query($query);
            $seforim = $results->fetchAll();
            
                if(isset($_GET['sefer'])){
                    if(isValidated($_GET['sefer'], $seforim)){
                        $query = "SELECT price FROM seforim WHERE name = '{$_GET['sefer']}'";
                        $results = $db->query($query);
                        $seferPrice = $results->fetch();
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
                        if($sefer === $value["name"]){
                                $validated = true;
                        }    
                    }
                    return $validated;
                }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body{
            width: 80%;
            margin: 0 auto;
            font-weight : bold;
        }
        h1,h3{
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Sefarim Pricer</h1>
        <form>
            <label for "sefer">Pick a Sefer</label>
                <select name = "sefer" id = "sefer">
                    <?php foreach ($seforim as $val) : ?>
                        <option value = "<?= $val['name']?>"
                            <?php if (!empty($_GET['sefer']) && $val['name'] === $_GET['sefer']) echo "selected" ?>
                        ><?= $val['name'] ?>
                        </option>
                    <?php endforeach ?>
                </select>
                    <input type="submit"/>
        </form>
        <?php if(isset($_GET['sefer']) && empty($error)) : ?>
            <h3><?= "The Price of a {$_GET['sefer']} is \${$seferPrice['price']}" ?> </h3>
        <?php endif ?>
            <?php if(isset($_GET['sefer']) && !empty($error)) : ?>
            <h3><?= $error ?> </h3>
        <?php endif ?>
</body>
</html>