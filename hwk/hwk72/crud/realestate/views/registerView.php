<?php
include_once "utils/link.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="/bootstrap-3.3.7/css/bootstrap.min.css" rel="stylesheet">
<style>
        body {
            padding-top: 70px;
        }
        a {
            margin-left: -1%;
        }
        <?php if (!empty($styles)) echo $styles;
        ?>
    </style>
</head>

<body>
    <div class="jumbotron">
        <div class="container text-center">
            <h1>Zillow</h1>
            <h2>Best houses in Jackson and Toms River</h2>
        </div>
    </div>
    <div class="container">
        <?php if(!empty($executed)) :?>
            <h2 class="text-center text-success">This username and password was successfully submitted!</h2>
                <div>
                    <div class = "well col-sm-2 text-right">Username</div>
                        <div class="col-sm-10 well"><?= $username ?></div>
                    </div>
                    <div>
                        <div class="well col-sm-2 text-right">Password</div>
                        <div class="col-sm-10 well"><?= $_POST['password'] ?></div>
                    </div>
        <?php
        else : 
        ?>
        <form class="form-horizontal" method="post">
            <div class = "form-group">
                <label for="username" class="col-sm-2 control-label">Username</label>
                    <div class="col-sm-10">
                        <input class="form-control" type="text" id = "username" name="username" required/>
                    </div>
            </div>
            <div class = "form-group">
                <label for="password" class="col-sm-2 control-label">Password</label>
                    <div class="col-sm-10">
                        <input class="form-control" type="text" id = "password" name="password"
                        minlength = "4" maxlength = "8" required/>
                    </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-primary">submit</button>
                </div>
            </div>
                </form>
                <?php endif ?>
                <div class="col-sm-offset-2 col-sm-10">
                    <a href="<?= getLink(['action'=>'login']) ?>">Login</a>
                </div>
    </div>
</body>
</html>