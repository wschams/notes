<?php
#validation to controller <!---create with select distinct -->
$action = 'home';
if(!empty($_GET['action'])){
    $action = $_GET['action'];
}
switch($action){
    case 'home':
        include 'controllers/getPrice.php';
        include 'models/getPrice.php';
        include 'views/getPrice.php';
        exit;
    case 'addSefer':
        include 'models/addSefer.php';
        include 'views/addSefer.php';
        exit;
    case 'deleteSefer':
        include 'controllers/deleteSefer.php';
        include 'models/deleteSefer.php';
        include 'views/deleteSefer.php';
        exit;
    case 'getIdPrice':
        include 'models/getIdPrice.php';
        include 'views/getIdPrice.php';
        exit;
    case 'updateSefer':
        include 'models/updateSefer.php';
        include 'views/updateSefer.php';
        exit;
    default:
        $error = "Dont know how to $action";
        include 'views/error.php';
        exit;
}
?>