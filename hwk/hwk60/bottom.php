<form class="form-horizontal">
    <div class="form-group">
        <label for="color" class="col-sm-2 control-label">Pick a Color</label>
        <div class="col-sm-9">
            <input type="color" class="form-control" id="color" name="color"
            value = "#<?= $color ?>" 
                >
        </div>
    </div>
     <div class="form-group">
        <label for="font" class="col-sm-2 control-label">Choose a Font</label>
        <div class="col-sm-9">
            <select class="form-control" id = "font" name="font" >
                <?php foreach ($fonts as $value) : ?>
                    <option 
                        <?php if ($value === $font) echo "selected" ?>
                     >
                    <?= $value ?>
                    </option>
                <?php endforeach ?>
            </select>
        </div>
    </div>
        <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
</form>

</div>     
</body>
</html>