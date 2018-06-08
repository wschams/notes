<?php
include 'utils/db.php';
include 'houseClass.php';
$houses = [];

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
                                    AND (:max = '' OR price <= :max)";

    $statement = $db->prepare($query);
    $statement->bindValue('zip', $zip);
    $statement->bindValue('min', $min);
    $statement->bindValue('max', $max);
    $statement->execute();
    $house = $statement->fetch();
    while($house) {
        $houses[] = new House($house);
        $house = $statement->fetch();
    }
    $statement->closeCursor();
} catch (PDOException $e) {
    $error = "Something went wrong " . $e->getMessage();
}
?>