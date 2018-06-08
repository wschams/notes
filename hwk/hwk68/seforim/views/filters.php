<div class = "col-sm-3">
    <div class = "form-group">
    <div class = "well">
        <form action="index.php">
            <label class = "control-label" for "filter">Filters</label>
        </div>
            <input class = "form-control" type = "checkbox" id = "filter" name = "filter[]" value = "torah" <?php if(!empty($_GET['filter']) && in_array("torah",$_GET['filter'])){ echo "checked";} ?> />torah
            <input class = "form-control" type = "checkbox" id = "filter" name = "filter[]" value = "gemara" <?php if(!empty($_GET['filter']) && in_array("gemara",$_GET['filter'])){ echo "checked";} ?> />gemara
            <input class = "form-control" type = "checkbox" id = "filter" name = "filter[]" value = "reshonim" <?php if(!empty($_GET['filter']) && in_array("reshonim",$_GET['filter'])){ echo "checked";} ?> />reshonim
            <input type="hidden" name="action" value="<?= $action ?>">
                <div class = "form-group">
                    <div class="col-sm-offset-4 col-sm-2">
                        <button type="submit" class = "btn btn-primary">Filter</button>
                    </div>
                    </form>
            </div>
    </div>
</div>