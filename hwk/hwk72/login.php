<?php
session_start();
if(!empty($_POST['username']) && !empty($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    include 'db.php';
        try {
            $query = "SELECT `password` FROM `login_info` WHERE `username` = :username";
            $statement = Db::getDb()->prepare($query);
            $statement->bindValue('username', $username);
            $statement->execute();
            $hash = $statement->fetch(PDO::FETCH_COLUMN);
            $statement->closeCursor();
        } catch(PDOException $e) {
            die("Something went wrong " . $e->getMessage());
        }
    }
if(!empty($_POST['logout'])) {
    $_SESSION['login'] = '';    
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form method="post">
        Username
        <input type="text" name="username" />
        Password
        <input type="password" name="password" />
        <input type="submit" value="login"/>
    </form>
    <?php if(!empty($password) && !empty($hash)) :
            if(password_verify($password, $hash)) :
                    echo "logged in";
                    $_SESSION['login'] = "loggedIn";
                else :
                echo "username does not match password";
                endif;
          endif;
          if(!empty($_SESSION['login'])) :
            echo "still logged";
          else :
            echo "logged out";
          endif 
    ?>
    <form method="post">
        <input type="hidden" name="logout" value = "true"/>
        <input type="submit" value="logout"/>
    </form>     
</body>
</html>