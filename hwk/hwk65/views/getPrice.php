<?php
include 'top.php';
?>
    <h2>Sefarim Pricer</h2>
</div>
    </div>
    <div class="container">
        <form class = "form-horizontal">
            <div class = "form-group">
                <label for "sefer" class = "col-sm-2 control-label">Pick a Sefer</label>
                <div class = "col-sm-10">
                    <select class="form-control" name = "sefer" id = "sefer">
                        <?php foreach ($seforim as $val) : ?>
                            <option value = "<?= $val ?>"
                                <?php if (!empty($_GET['sefer']) && $val === $_GET['sefer']) echo "selected" ?>
                            ><?= $val ?>
                            </option>
                        <?php endforeach ?>
                    </select>
                </div>
                    </div>
                    <div class = "form-group">
                        <div class="col-sm-offset-2 col-sm-2">
                            <button type="submit" class = "btn btn-primary">Submit</button>
                    </div>
                        </div>
        </form>
            <a href = "../controller/getIdPrice.php">Click for ID also</a>
        <?php if(isset($_GET['sefer']) && empty($error)) :
            foreach($seferPrices as $seferPrice) : ?>
            <h3 class = "text-center"><?= "The Price of {$_GET['sefer']} is \${$seferPrice}" ?> </h3>
        <?php endforeach; endif ?>
            <?php if(isset($_GET['sefer']) && !empty($error)) : ?>
            <h3 class = "text-center"><?= $error ?> </h3>
        <?php endif; 
include 'bottom.php';
?>