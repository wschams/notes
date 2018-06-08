<?php
include 'views/autoLoader.php';
$action = "home";
if(!empty($_GET['action'])) {
    $action = $_GET['action'];
}

switch($action) {
    case 'home':
        include 'controllers/homeController.php';
        $homeView = new homeView2();
        $homeView->render();
        exit;
    case 'table':
        include 'controllers/housesTableController.php';
        exit;
    case 'details':
        include 'controllers/houseDetailsController.php';
        exit;
    default:
        $error = "Dont know how to $action";
        include 'views/error.php';
        exit;
}

?>