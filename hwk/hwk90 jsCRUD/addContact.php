<?php
require 'db.php';

header("Access-Control-Allow-Origin: http://localhost");
function getParam($param) {
    if(! empty($_POST[$param])) {
        return $_POST[$param];
    } 
    return "UNKNOWN";
}

$firstName = getParam("firstName");
$lastName = getParam("lastName");
$email = getParam("email");
$phone = getParam("phone");

$query = "INSERT INTO contacts (firstName, lastName, email, phone) 
            VALUES (:firstName, :lastName, :email, :phone)";

$statement = $db->prepare($query);
$statement->bindParam("firstName", $firstName);
$statement->bindParam("lastName", $lastName);
$statement->bindParam("email", $email);
$statement->bindParam("phone", $phone);

$rowsInserted = $statement->execute();
if(!$rowsInserted) {
    http_response_code(500);
    exit("Unable to add contact");
}

http_response_code(201);