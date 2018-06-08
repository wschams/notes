<?php
    include "top.php";
?>

<div class="row">
    <form class="form-inline" action="daysCalculated.php" method="post">
        <div class="form-group">
            <label>Choose a Month
                <select class = "form-control" name = "month">
                    <?= Monthchooser($months) ?>
                </select>
            </label>
                <label>Choose a Year
                    <select class = "form-control" name = "year">
                        <?php yearChooser(1582, 2500) ?>
                    </select>
                </label>
                    <button type="submit" class="btn btn-primary">
                    Get Number of Days</button>
        </div>
    </form>
</div>
<?php
    include "bottom.php";
?>