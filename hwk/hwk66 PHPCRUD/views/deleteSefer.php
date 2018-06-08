<?php
include 'top.php';
?>
    <h2>Delete Sefer Form</h2>
</div>
    </div>
    <div class="container">
        <div cass ="row">
        <?php include 'filters.php' ?>
            <div class = "col-sm-9">
                <form class="form-horizontal" method = "post">
                    <div class="form-group">
                        <label for="sefer" class="col-sm-2 control-label">Select A Sefer</label>
                        <div class="col-sm-7">
                        <select class="form-control" id="sefer" name="sefer">
                                <?php foreach($seforim as $sefer) :?>
                                <option value="<?= $sefer['id'] ?>"
                                ><?= $sefer["name"] ?></option>
                                <?php endforeach ?>
                            </select>                   
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-3 col-sm-3">
                        <button type="submit" class="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
            <?php if($_SERVER['REQUEST_METHOD'] === "POST" && !empty($error)) : ?>
            <h2 class="text-center alert alert-danger">
                <ul>
                    <li><?= $error ?></li>
                    </ul>
            </h2>
            <?php elseif($_SERVER['REQUEST_METHOD'] === "POST" && !$statement->rowCount() < 1) : ?>
                <h2 class="text-center text-success">Sefer successfully deleted</h2>
            <?php
                    endif
            ?>
                <?php
                include 'bottom.php';
                ?>