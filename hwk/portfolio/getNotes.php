<?php
require 'db.php';

$query = "SELECT note FROM notes";
$statement = $db->prepare($query);
$statement->execute();
$notes = $statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($notes);
?>