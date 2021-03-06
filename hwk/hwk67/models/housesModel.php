<?php
include 'utils/db.php';

if (empty($zip)) {
    $zip = '';
}

if (empty($min)) {
    $min = '';
}

if (empty($max)) {
    $max = '';
}

try {
    $query = "SELECT * FROM houses WHERE (:zip = '' OR zip=:zip)
                                    AND (:min = '' OR price >= :min)
                                    AND (:max = '' OR price <= :max)
                                    LIMIT :rowStart ,4";

    $statement = $db->prepare($query);
    $statement->bindValue('zip', $zip);
    $statement->bindValue('min', $min);
    $statement->bindValue('max', $max);
    $statement->bindValue('rowStart', $rowStart, PDO::PARAM_INT);

    $statement->execute();
    $houses = $statement->fetchAll(PDO::FETCH_ASSOC);
    $statement->closeCursor();
} catch (PDOException $e) {
    $error = "Something went wrong " . $e->getMessage();
}
?>