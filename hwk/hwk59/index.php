<?php
    $name  = "";
    $favProgLang  = "";
    $years = "";
    $submit = true;
    $progLang = ["java", "mySQL", "html", "css", "php"];
    
    if($_SERVER['REQUEST_METHOD'] === "POST") {
        if(!empty($_POST['name'])) { 
            if( is_numeric($_POST['name'])) {
                $name = $_POST['name'];
                $errors[] = "INVALID NAME";
            }
            $name = $_POST['name'];
        } else {
             $errors[] = "NAME IS REQUIRED";
        }
         if(! empty($_POST['favProgLang'])){
            if( in_array($_POST['favProgLang'], $progLang)) { 
        } else {  
                $errors[] = "INVALID PROGRAMMING LANGUAGE";
            }
        $favProgLang = $_POST['favProgLang'];                                 
        } else {
             $errors[] = "PROGRAMMING LANGUAGE IS REQUIRED";
        }

        if( isset($_POST['years'])){
        if(! is_numeric($_POST['years']) || $_POST['years'] < 0 || $_POST['years'] > 50) {
                $errors[] = "INVALID YEARS";
                $years = $_POST['years'];
        } else {
            $years = $_POST['years'];
        }
        }    else {
             $errors[] = "YEARS IS REQUIRED";
        }
        if(empty($errors)){
            $submit = false;
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
</head>

<body>
    <body>
    <div class="jumbotron">
        <div class="container text-center">
            <h1>The Form</h1>
        </div>
    </div>
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
                <label for="favProgLang" class="col-sm-2 control-label">Favorite Programming Language</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="favProgLang" name="favProgLang" placeholder="Favorite Programming Language" required
                        value="<?= $favProgLang ?>"
                    >
                </div>
            </div>
            <div class="form-group">
                <label for="years" class="col-sm-2 control-label">Years</label>
                <div class="col-sm-10">
                    <input type="number" min="0" max="50" step="1" class="form-control" id="years" name="years" placeholder="Years" required
                        value="<?= $years ?>"
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
    <script src="../../../jqueryV1.12.4.min.js"></script>
    <script src="../../../bootstrap-3.3.7/js/bootstrap.min.js"></script>
</body>

</html>