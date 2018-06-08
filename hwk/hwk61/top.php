<?php
    function yearChooser($start, $end){
        while($start < $end ){
        echo "<option>" . $start . "</option>";
        $start++;
        }
    }

    $months = [ "January" => "31", "Febuary" => "", "March" => "31", "April" => "30",
        "May" => "31", "June" => "30", "July" => "31", "August" => "31",
         "September" => "30", "October" => "31", "November" => "30", "December" => "31"]; 

        function Monthchooser($months){
            $total = "";
                foreach($months as $key => $value ){
                    $total .= "<option>" . $key . "</option>";
                }
            return $total;
        }

    function postMonth($months){
        $total = "";
        $daysInYear = 365;
            if($_POST['month'] !== "Febuary"){
                foreach($months as $key => $value ){
                    if ($_POST['month'] === $key){
                    $days = $value;
                    }
                }
                if(($_POST['year'] % 4 === 0 && $_POST['year'] % 100 !== 0) || $_POST['year'] % 400 === 0){
                    $daysInYear = 366;
                }    
                $total = $_POST['month'] . ", " . $_POST['year'] . " has " . $days . " days" .
                    " and the year " . $_POST['year'] . " has " . $daysInYear . " days" ;
            }
        return $total;
    }

    function postFeb(){
        $total = "";
            if($_POST['month'] === "Febuary"){
                if(($_POST['year'] % 4 === 0 && $_POST['year'] % 100 !== 0) || $_POST['year'] % 400 === 0){
                    $total = "Febuary, " . $_POST['year'] . " has 29 days" .
                    " and the year " . $_POST['year'] . " has 366 days" ;
                }else{
                    $total = "Febuary, " . $_POST['year'] . " has 28 days" .
                    " and the year " . $_POST['year'] . " has 365 days" ;
                }
            }
        return $total;
    }       
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="/bootstrap-3.3.7/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class = "container">
        
