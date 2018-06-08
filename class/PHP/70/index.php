<?php
include_once 'autoload.php';

class FrontController {
    public function run($siteName) {
        if(!empty($_GET['page'])) {
            $page = $_GET['page'];
        } else {
            $page = "one";
        }

        switch ($page) {
            case "one":
                $thePage = new PageOne();
                break;
            case "two":
                $thePage = new PageTwo();
                break;
            case "three":
                $thePage = new Page("Page #3", "Page three contents");
                break;
            default:
                $thePage = new Page("ERROR", "No such page: $page");
                break;
        }
        
        $site = new Site($siteName);
        $site->render($thePage);
    }
}

$controller = new FrontController();
$controller->run("The PCS Site");

?>