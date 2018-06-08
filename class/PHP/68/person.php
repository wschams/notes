<?php

class Person {
    public $firstName;
    public $lastName;

    public function __construct($firstName, $lastName) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }

    public function printIt() {
        echo "First Name: $this->firstName<br>";
        echo "Last Name: $this->lastName<br>";
    }
}

$p = new Person("Donald", "Trump");
print_r($p);
echo "<br>";
var_dump($p);

$p->printIt();

$p->firstName = "Joe";
$p->lastName = "Doe";
print_r($p);
echo "<br>";
var_dump($p);

?>