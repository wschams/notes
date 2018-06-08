<?php
# Homework with same page
    $name  = "";
    $email  = "";
    $age = "";
    $rate = "";
    $submit = true;
    
    if($_SERVER['REQUEST_METHOD'] === "POST") {
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

        if(! is_numeric($_POST['age']) || $_POST['age'] < 0 || $_POST['age'] > 120) {
                $errors[] = "Invalid Age";
            }
            $age = $_POST['age'];
        
        if($_POST['rate'] !== "") { 
            if(! is_numeric($_POST['rate']) || $_POST['rate'] < 1 || $_POST['rate'] > 10) {
                $errors[] = "Rate must be a number between 1 and 10";
            }
          }
            $rate = $_POST['rate'];
        if($name !=="" && $email !=="" && $age !=="" ){
            $submit =false;
        }
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

         <?php if($submit ===false) : ?>
            <h1 class = "text-center">You Submitted!</h1>
            <?php endif ?> 
        <form class="form-horizontal" method="post">
            <?php if (isset($errors)) : ?>
            <div class="well text-danger">
                <ul>
                    <?php foreach($errors as $error) : ?>
                        <li><?= $error ?></li>
                    <?php endforeach ?>
                </ul>
            </div>
            <?php endif ?>
            <div class="form-group">
                <label for="name" class="col-sm-2 control-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="name" name="name" placeholder="Name" required
                        value="<?= $name ?>"
                    >
                </div>
            </div>
            <div class="form-group">
                <label for="email" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email" required
                        value="<?= $email ?>"
                    >
                </div>
            </div>
            <div class="form-group">
                <label for="age" class="col-sm-2 control-label">Age</label>
                <div class="col-sm-10">
                    <input type="number" min="0" max="120" step="1" class="form-control" id="age" name="age" placeholder="Age" required
                        value="<?= $age ?>"
                    >
                </div>
            </div>
            <div class="form-group">
                <label for="rate" class="col-sm-2 control-label">Rate Us!</label>
                <div class="col-sm-10">
                    <input type="number" min="1" max="10" step="1" class="form-control" id="rate" name="x" placeholder="Rate 1-10" 
                        value="<?= $rate ?>"
                    >
                </div>
            </div> 
             <?php if($submit ===true) : ?>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
             <?php endif ?>
        </form>

    </div>
    <script src="../../../jquery-1.12.4.min.js"></script>
    <script src="../../../bootstrap-3.3.7/js/bootstrap.min.js"></script>
</body>

</html>