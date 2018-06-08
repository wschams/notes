<?php
    $president1 = ["Donald J Trump", "2017-"];

    $president2 = ["Barack H Obama", "2009-2016"];

    $president3 = ["George W Bush", "2001-2008"];

    $president1a = ["name" => "Donald J Trump", "years" => "2017-"];

    $president2a = ["name" => "Barack H Obama", "years" => "2009-2016"];

    $president3a = ["name" => "George W Bush", "years" => "2001-2008"]; 

    $president1aa = [
       
        $p = [
             "Name" =>"Donald J Trump",
             "Years" =>"2017-"
        ],
        [     "Name" =>"Barack H Obama",
              "Years" =>"2009-2016"
        ],
        [
              "Name" =>"George W Bush",
              "Years" =>"2001-2008"
        ]
    ];
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>
    <link href="../../../bootstrap-3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
	 crossorigin="anonymous">
  </head>
  <body>
    <div class="container">
        <div class="jumbotron">
            <h1>US Presidents</h1>
        </div>

        <table class="table table-striped table-hover table-bordered">
            <thead>
                <tr>
                 <th>President</th>
                 <th>Years in office</th>   
                </tr>
            </thead>
            <tbody>
                <tr><td> <?=$president1[0]?> </td><td> <?=$president1[1]?> </td></tr>
                <tr><td> <?=$president2[0]?> </td><td> <?=$president2[1]?> </td></tr>
                <tr><td> <?=$president3[0]?> </td><td> <?=$president3[1]?> </td></tr>
            </tbody>
        </table>
    </div>
    <div class="container">
        <div class="jumbotron">
            <h1>US Presidents</h1>
        </div>

        <table class="table table-striped table-hover table-bordered">
            <thead>
                <tr>
                    <th>President</th>
                    <th>Years in office</th>
                </tr>
            </thead>
            <tbody>
                <tr><td> <?=$president1a['name']?> </td><td> <?=$president1a['years']?> </td></tr>
                <tr><td> <?=$president2a['name']?> </td><td> <?=$president2a['years']?> </td></tr>
                <tr><td> <?=$president3a['name']?> </td><td> <?=$president3a['years']?> </td></tr>
            </tbody>
        </table>
    </div>
    <div class="container">
        <div class="jumbotron">
            <h1>US Presidents</h1>
        </div>

        <table class="table table-striped table-hover table-bordered">
            <thead>
                <tr>
                    <?php
                        /*foreach($president1aa as $president) {
                    foreach($president as $key=>$value)
                    echo "<th>". $key ."</th>";
                    break;
                    #name array
                        }*/
                       foreach($p as $key=>$value){
                    echo "<th>". $key ."</th>"; }    
                    ?>
               </tr>
            </thead>
            <tbody>              
                 <?php
                   foreach($president1aa as $president)                 
                   {
                       echo "<tr></tr>";
                     foreach($president as $property)  
                     echo "<td>" . $property . "</td>";
                      }
                 ?>             
            </tbody>
        </table>
    </div>
    <script src="../../../jquery-1.12.4.min.js"></script>
    <script src="../../../bootstrap-3.3.7/js/bootstrap.min.js"></script>
  </body>
</html>