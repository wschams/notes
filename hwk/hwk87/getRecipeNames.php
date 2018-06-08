<?php
require 'db.php';

$query = "SELECT name, url FROM recipes";
$rs = $db->query($query);
$recipes = $rs->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($recipes);
?>