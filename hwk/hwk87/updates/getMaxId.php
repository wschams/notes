<?php
require 'db.php';

$query = "SELECT id FROM `contacts`  
ORDER BY `contacts`.`id`  DESC LIMIT 1";
$stmt = $db->query($query);
$maxId = $stmt->fetch();
//print_r($maxId);
echo json_encode($maxId);
?>