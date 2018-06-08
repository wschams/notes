<?php
include '../db.php';
    try{
        $query = "SELECT name,grade FROM students";
        $results = $db->query($query);
        $students = $results->fetchAll(PDO::FETCH_COLUMN);
        print_r($students);
        $results->closeCursor(); 
    } catch (PDOException $e) {
        $error = "Something went wrong " . $e->getMessage();
    }
        if($_SERVER['REQUEST_METHOD'] === "POST"){
        if(empty($_POST['name']) || is_numeric($_POST['name'])){
            $error = "Please enter a valid student";
        }else{
            try{
                $delete = "DELETE FROM students WHERE name = :name";    
                $statement = $db->prepare($delete);
                $statement->bindValue('name', $_POST['name']);
                $statement->execute();
                $statement->closeCursor();   
            } catch (PDOException $e) {
                $error = "Something went wrong " . $e->getMessage();
            }
        }  
    }
?>
<?php
include '../top.php';
?>
<h2>Delete Student Form</h2>
</div>
    </div>
    <div class="container">
    <?php if ( !empty($error)) : ?>
        <div class="well text-danger">
            <ul>
                    <li><?= $error ?></li>
            </ul>
        </div>
    <?php endif ?>
        <form class="form-horizontal" method = "post">
            <div class="form-group">
                <label for="name" class="col-sm-2 control-label">Select a Student</label>
                <div class="col-sm-10">
                <select class="form-control" id="name" name="name">
                        <?php foreach($students as $student) :?>
                        <option value="<?= $student['name'] ?>"
                        ><?= $student["name"] ?></option>
                        <?php endforeach ?>
                    </select>                   
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-primary">Delete</button>
                </div>
            </div>
        </form>
            <nav>
                <a href ="getAndDeleteStudents.php">Click here to delete another student</a>
            </nav>
        <!--<?php if($rowsDeleted ===true) : ?>
        <div class="col-sm-offset-4 col-sm-4 well">
            <p>You Deleted <?= $student["name"] ?></p>
        </div>
        <?php endif ?>-->
<div class="row">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <?php # foreach($students as $key=>$student) :?>
                <tr>
                    <td><?= $students[0][0] ?></td>
                    <td><?= $students[0][1] ?></td>
                    <td><?= $students[1][1] ?></td>
                    </tr>
                    <tr>
                    <td><?= $students[2][0] ?></td>
                    <td><?= $students[2][1] ?></td>
                    <td><?= $students[3][1] ?></td>
                    </tr>
                    <tr>
                    <td><?= $students[4][0] ?></td>
                    <td><?= $students[4][1] ?></td>
                    <td><?= $students[5][1] ?></td>
                    </tr>
                <?php # endforeach ?>
            </tbody>
        </table>
    </div>
    
<?php
    include '../bottom.php';
?>