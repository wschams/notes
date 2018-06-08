<?php
    /*$pages = 3;
    $rowStart = 0;
    foreach($pages as $page) {
        #= $page;
        $rowStart = $rowStart + 4;
    }*/
    /*if(!empty($_GET['page']) && $_GET['page'] === 'previousPage') {
            $rowStart = $rowStart - 4;
             }else
            if(empty($placeholder)) {
                $placeholder = 0;
            }
            if(empty($_GET['page'])) {
                $page = 0;
            }    
            elseif(!empty($_GET['page'])) {
                $page = $_GET['page'];
                $placeholder = $page;
            }
            $rowStart = $page * 4;*/
            include_once "utils/link.php";
            if(empty($_GET['page'])) {
                $page = 0;
            }   
            elseif(!empty($_GET['page'])) {
                $page = $_GET['page'];
                echo $page;
            }
            $rowStart = $page * 4;
?>