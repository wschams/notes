<?php
include 'utils/db.php';

try {
    $query = "SELECT * FROM houses";
    if (! empty($zip)) {
        $query .= " WHERE zip=:zip";
    }
    $statement = $db->prepare($query);
    if (! empty($zip)) { 
        $statement->bindValue('zip', $zip);
    }
    $statement->execute();
    $houses = $statement->fetchAll();
    $statement->closeCursor();
} catch (PDOException $e) {
    $error = "Something went wrong " . $e->getMessage();
}
?>