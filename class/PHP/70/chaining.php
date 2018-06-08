<?php 
class Foo {
    private $x;

    public function one() {
        echo "one was called<br>";
        $this->x = 5;
        return $this;
    }

    public function two() {
        echo "two was called<br>";
        return $this;
    }

    public function three() {
        echo "three was called<br>";
        return $this;
    }

    public function four() {
        echo "four was called<br>";
        //return $this;
    }
}

$foo = new Foo();
$foo->one();
$foo->two();
$foo->three();
$foo->four();

$foo->one()->two()->three()->four();//->one();
?>