<?php
require 'db.php';

if(! empty($_POST['note'])) {
    $note = $_POST['note'];
if(! empty($_POST['category'])) {
    $category = $_POST['category'];
}

$query = "INSERT INTO notes (note, category) VALUE (:note, :category)";

$statement = $db->prepare($query);
$statement->bindParam("note", $note);
$statement->bindParam("category", $category);

$rowsInserted = $statement->execute();
if(!$rowsInserted) {
    http_response_code(500);
    exit("Unable to add note");
}

http_response_code(201);
}