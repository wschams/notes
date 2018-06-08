<?php
include '../db.php';
function isInArray($needle, $haystack){
    foreach($haystack as $hay){
        if(in_array($needle, $hay)){
            return true;   
        }
    }
    return false;
}

    try{
            $query = "SELECT name, grade FROM students Order BY name";
            $results = $db->query($query);
            $students = $results->fetchAll(PDO::FETCH_ASSOC);
            $results->closeCursor();
        } catch (PDOException $e) {
            $error = "Something went wrong " . $e->getMessage();
        }
            
            if($_SERVER['REQUEST_METHOD'] === "POST"){
                if(!isInArray($_POST['name'], $students)){
                    $error = "Please enter a valid student";
                }else {
                    $name = $_POST['name'];
                    try{
                            $delete = "DELETE FROM students WHERE name = :name";    
                            $statement = $db->prepare($delete);
                            $statement->bindValue('name', $name);
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
<div class= "container">
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Grade</th>
                <th>Grade</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <?php 
            $studentPlace = '';
            $delimiter = '';
                foreach($students as $student){
                    if($studentPlace !== $student['name']){
                        echo $delimiter . "<td>" . $student['name'] . "</td>";
                        $delimiter = "</tr><tr>";
                    }                       
                        echo "<td>" . $student['grade'] . "</td>";
                        $studentPlace = $student['name'];        
                }                   
            ?>
            </tr>
        </tbody>
    </table>
        <nav>
            <a href ="getAndDeleteStudents2.php">Click here to delete another sefer</a>
        </nav>
            <?php if($_SERVER['REQUEST_METHOD'] === "POST" && !empty($error)) : ?>
                <h2 class="text-center alert alert-danger">
                    <ul>
                        <li><?= $error ?></li>
                        </ul>
                </h2>
            <?php elseif(!empty($name)) : ?>
                <h2 class="text-center text-success">Student successfully deleted</h2>
            <?php
            endif
            ?>
<?php
    include '../bottom.php';
?>