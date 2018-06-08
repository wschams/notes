<?php
# Homework with seperate page
    $name  = "";
    $email  = "";
    $age = "";
    $rate = "";

    if(!empty($_POST['name'])) { 
            if( is_numeric($_POST['name'])) {
                $errors[] = "Invalid Name";
            }
            $name = $_POST['name'];
        } else {
            $errors[] = "Name is a required field";
        }

        if(!empty($_POST['email'])) { 
           if(! filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
                $errors[] = "Invalid Email";
            }
            $email = $_POST['email'];
        } else {
            $errors[] = "Email is a required field";
        }

        if(isset($_POST['age'])) {   
        if(! is_numeric($_POST['age']) || $_POST['age'] < 0 || $_POST['age'] > 120) {
                $errors[] = "Invalid Age";
            } else {
            $age = $_POST['age'];
        }
    } else {
        $errors[] = "AGE IS REQUIRED";
    }
                 
        if(!empty($_POST['rate'])) { 
            if(! is_numeric($_POST['rate']) || $_POST['rate'] < 1 || $_POST['rate'] > 10) {
                $errors[] = "Rate must be a number between 1 and 10";
            }
            $rate = $_POST['rate'];
        }
        
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous" />
    <link href="../../../bootstrap-3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .well:first-of-type {
            background-color: transparent;
            border: none;
            box-shadow: none;
        }
    </style>
</head>

<body>
    <div class="container"> 
         <?php if (isset($errors)) : ?>
            <div class="well text-danger">
                <ul>
                    <?php foreach($errors as $error) : ?>
                        <li><?= $error ?></li>
                    <?php endforeach ?>
                </ul>
            </div>
            <?php endif ?>
         <?php if(!isset($errors)) : ?>
            <h1 class = "text-center">You Submitted!</h1>
            <?php endif ?> 
            <div>
            <div>   
            <div class="well col-sm-2 text-right">Name</div>
                <div class="col-sm-10 well"><?= $name ?></div>
            </div>
            <div>
                <div class="well col-sm-2 text-right">Email</div>
                <div class="col-sm-10 well"><?= $email ?></div>
            </div>
            <div>
                <div class="well col-sm-2 text-right">Age</div>
                <div class="col-sm-10 well"><?= $age ?></div>
            </div>
            <div>
                <div class="well col-sm-2 text-right">Rating</div>
                <div class="col-sm-10 well"><?= $rate ?></div>
            </div>
        </div> 
             </div>
    <script src="../../../jquery-1.12.4.min.js"></script>
    <script src="../../../bootstrap-3.3.7/js/bootstrap.min.js"></script>
</body>

</html>