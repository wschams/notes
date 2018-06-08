<?php
if(!empty($_POST['username']) && !empty($_POST['password'])) {
    $username = $_POST['username'];
    $hash = password_hash($_POST['password'], PASSWORD_DEFAULT);
}
if($_SERVER['REQUEST_METHOD'] === "POST"){
    include 'db.php';
        try {
            $insert = "INSERT INTO `login_info`(`username`, `password`) VALUES
             (:username, :password)";
            $statement = Db::getDb()->prepare($insert);
            $statement->bindValue('username', $username);
            $statement->bindValue('password', $hash);
            $statement->execute();
            $statement->closeCursor();
        } catch(PDOException $e) {
            die("Something went wrong " . $e->getMessage());
        }
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
        <input type="text" name="password" />
        <input type="submit" value="submit"/>
    </form>
</body>
</html>