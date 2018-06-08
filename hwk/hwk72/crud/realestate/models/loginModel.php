<?php
if(!empty($_POST['username']) && !empty($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    include 'utils/db2.php';
        try {
            $query = "SELECT `password` FROM `users` WHERE `username` = :username";
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