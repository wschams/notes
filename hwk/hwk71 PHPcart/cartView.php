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
        <?php $id = 1; $price = 5;
            while ($id < 9) {
        ?>
            <div class = "col-sm-3">
                <form method = "post">
                    <h4>item <?= $id ?> </h4>
                        <h6>price $<?= $price ?>.00</h6>
                            <input type = "checkbox" name = "<?= $id ?> []" value ="<?= $price ?>"/>
                </form>
        </div>
        <?php $id++; $price++; }
        ?>
    </div>
</body>
</html>