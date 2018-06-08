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
        form {
            margin-left: -10px;
        }
        form > .btn {
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .align {
            margin-left: 172px;
        }
        .col-sm-offset-2 form {
            margin-left: -2%;
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
                    <?php if(!empty($password) && !empty($hash)) :
                            if(password_verify($password, $hash)) :
                                    $_SESSION['login'] = "loggedIn";
                    ?>
                    <h1 class = "text-center text-success">Welcome to our site!</h1>
                        <div class = "text-center">
                            <a class = "text-center" href="<?= getLink(['action'=>'home']) ?>">Click Here To Enter</a>
                        </div>
                                <div class="col-sm-offset-2 col-sm-10">
                                    <form method="post">
                                        <input type="hidden" name="logout" value = "true"/>
                                            <button type="submit" class="btn btn-primary">logout</button>
                                    </form>
                            </div>
                    <?php
                            endif;
                        elseif (!empty($_SESSION['login'])) :
                                $_SESSION['login'] = "loggedIn";
                    ?>
                    <h1 class = "text-center text-success">Welcome to our site!</h1>
                        <div class = "text-center">
                            <a class = "text-center" href="<?= getLink(['action'=>'home']) ?>">Click Here To Enter</a>
                        </div>
                                <div class="col-sm-offset-2 col-sm-10">
                                    <form method="post">
                                        <input type="hidden" name="logout" value = "true"/>
                                            <button type="submit" class="btn btn-primary">logout</button>
                                    </form>
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
                        <input class="form-control" type="password" id = "password" name="password" 
                        minlength = "4" maxlength = "8" required/>
                    </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-primary">login</button>
                </div>
            </div>
                </form>
                    <?php
                        endif;
                    ?>
                    <div class="align col-sm-offset-2 col-sm-10">
                        <a href="<?= getLink(['action'=>'register']) ?>">register new name & password</a>
                    </div> 
    </div>    
</body>
</html>