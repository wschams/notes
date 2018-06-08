<?php
include 'top.php';
?>
    <h2>Add Sefer Form</h2>
</div>
    </div>
    <div class="container">
    <?php if (isset($errors)) : ?>
        <div class="well text-danger">
            <ul>
                <?php foreach($errors as $error) : ?>
                    <li><?= $error ?></li>
                <?php endforeach ?>
            </ul>
        </div>
    <?php endif ?>
        <form class="form-horizontal" method = "post">
            <div class="form-group">
                <label for="id" class="col-sm-2 control-label">Id</label>
                <div class="col-sm-9">
                <input type="number" class="form-control" min = "1" step = "1" id="id" name="id" required>
                </div>
                </div>
            <div class="form-group">
                <label for="name" class="col-sm-2 control-label">Sefer Name</label>
                <div class="col-sm-9">
                <input type="text" class="form-control" id="name" name="name" required>
                </div>
                </div>
            <div class="form-group">
                <label for="price" class="col-sm-2 control-label">Sefer Price</label>
                <div class="col-sm-9">
                <div class="input-group">
                <div class="input-group-addon">$</div>
                <input type="number" class="form-control" min = "0" step = ".01" id="price" name="price" required>
                </div>
                </div>
                </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-2">
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
            <nav>
                <a href ="addSeferController.php">Click here to add another sefer</a>
            </nav>
        <?php if($_SERVER['REQUEST_METHOD'] === "POST" && $statement->rowCount()) : ?>
        <div class="col-sm-offset-4 col-sm-4 well">
            <p><?="id number " . $_POST['id'] . " is updated to the name " . $_POST['name'] .  " to $" . $_POST['price'] ?></p>
        </div>
        <?php endif ?>
<?php
    include 'bottom.php';
?>