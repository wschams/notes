<?php
if(!empty ($houseToDelete)) {
    include 'utils/db.php';
    try{
        $delete = "DELETE FROM `houses` WHERE id = :id";
        $statement = $db->prepare($delete);
        $statement->bindValue('id', $houseToDelete);
        $statement->execute();
        $statement->closeCursor();
    } catch(PDOException $e) {
        die("Something went wrong " . $e->getMessage());
    }
}
?>