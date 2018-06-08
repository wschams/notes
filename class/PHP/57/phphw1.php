<?php
    $president1 = "Donald J Trump";
    $president1Years = "2017-";

    $president2 = "Barack H Obama";
    $president2Years = "2009-2016";

    $president3 = "George W Bush";
    $president3Years = "2001-2008";
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>
    <link href="/bootstrap-3.3.7/css/bootstrap.min.css" rel="stylesheet">
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
                <tr><td> <?=$president1?> </td><td> <?=$president1Years?> </td></tr>
                <tr><td> <?=$president2?> </td><td> <?=$president2Years?> </td></tr>
                <tr><td> <?=$president3?> </td><td> <?=$president3Years?> </td></tr>
            </tbody>
        </table>
    </div>
    <script src="/jquery-1.12.4.min.js"></script>
    <script src="/bootstrap-3.3.7/js/bootstrap.min.js"></script>
  </body>
</html>