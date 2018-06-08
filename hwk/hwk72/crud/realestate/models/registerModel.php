<?php
if(!empty($_POST['username']) && !empty($_POST['password'])) {
    $username = $_POST['username'];
    $hash = password_hash($_POST['password'], PASSWORD_DEFAULT);
}
if($_SERVER['REQUEST_METHOD'] === "POST"){
    include 'utils/db2.php';
        try {
            $insert = "INSERT INTO `login_info`(`username`, `password`) VALUES
             (:username, :password)";
            $statement = Db::getDb()->prepare($insert);
            $statement->bindValue('username', $username);
            $statement->bindValue('password', $hash);
            $executed = $statement->execute();
            $statement->closeCursor();
        } catch(PDOException $e) {
            die("Something went wrong " . $e->getMessage());
        }
}
?>