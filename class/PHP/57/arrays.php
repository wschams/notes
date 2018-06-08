<?php
    #$presidents = array("Donald J Trump", "Barack Obama", "George W Bush");
    $presidents = ["Donald J Trump", "Barack Obama", "George W Bush"];

    $length = count($presidents);
    for($i = 0; $i < $length; $i++) {
        echo $presidents[$i] . "<br/>";
    }

    print_r($presidents);
    echo "<br/>";
    var_dump($presidents);
    echo "<br/>";

    $person = [
        "name" => "Sam",
        "age" => 21/*,
        0 => "Sam",
        1 => 21*/
    ];

    print_r($person);

    echo "{$person['name']} is {$person['age']} <br/>";

    $presidents[] = "William J Clinton";
    print_r($presidents);
    echo "<br/>";


    $person[] = "sam@gmail.com";
    print_r($person);
    echo "<br/>";

    $person[5] = "123 Some Street";
    $person[] = "Lakewood";
    print_r($person);
    echo "<br/>";

    /*
    $students = [
        [
            "name" => "Bob",
            "grade" => 92
        ],
        [
            "name" => "Joe",
            "grade" => 87
        ]
    ];

    print_r($students);
    echo "<br/>";

    for($i = 0; $i < count($students); $i++) {
        echo $students[$i]["name"] . " " . $students[$i]["grade"] . "<br/>";
    }
    */
    $students = [
        "Bob" => [
            "name" => "Bob",
            "grade" => 92
        ],
        "Joe" => [
            "name" => "Joe",
            "grade" => 87
        ]
    ];

    print_r($students);
    echo "<br/>";

    #echo $students["Bob"]["name"] . " " . $students["Bob"]["grade"] . "<br/>";

    foreach($students as $student) {
        echo "Name: " . $student["name"] . " Grade: " . $student["grade"] . "<br/>";
    }

    foreach($students as $student) {
        foreach($student as $property)
            echo $property . "<br/>";
    }

    foreach($students as $student) {
        foreach($student as $key=>$value)
            echo "$key: $value<br/>";
    }

    print_r($student);
?>