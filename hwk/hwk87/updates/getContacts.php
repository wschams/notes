<?php
require 'db.php';

$query = "SELECT * FROM contacts";
$stmt = $db->query($query);
$rows = $stmt->fetchAll();
//print_r($rows);
echo json_encode($rows);
?>