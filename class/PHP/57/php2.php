<?php
    $first = "Donald";
    $last = "Trump";

    #echo $first . " " . $last;
    echo 'The name is $first $last<br/>';
    echo "The name is $first $last<br/>";

    echo '<a href="https:\\www.google.com">Google</a><br/>';
    echo "<a href=\"https:\\www.google.com\">Google</a><br/>";

    echo $first, ' ', $last, '<br/>';

    #$fullName = $first . " " . $last;
    $fullName = $first;
    $fullName .= " ";
    $fullName .= $last;
    echo "$fullName<br/>";

    $one = "1";
    $real1 = 1;
    $isTrue = true;

    echo $one + 1 . "<br/>";

    if($one == $real1) {
        echo "$one and $real1 ==<br/>";
    } else {
        echo "$one and $real1 are NOT ==<br/>";
    }

    if($one == $isTrue) {
        echo "$one and $isTrue ==<br/>";
    } else {
        echo "$one and $isTrue are NOT ==<br/>";
    }

    if($one === $real1) {
        echo "$one and $real1 are ===<br/>";
    } else {
        echo "$one and $real1 are NOT ===<br/>";
    }

    if($one === $isTrue) {
        echo "$one and $isTrue ===<br/>";
    } else {
        echo "$one and $isTrue are NOT ===<br/>";
    }

    if($one != $real1) {
        echo "$one and $real1 are !=<br/>";
    } else {
        echo "$one and $real1 are NOT !=<br/>";
    }

    if($one !== $real1) {
        echo "$one and $real1 are !==<br/>";
    } else {
        echo "$one and $real1 are NOT !==<br/>";
    }

    if($one != $isTrue) {
        echo "$one and $isTrue !=<br/>";
    } else {
        echo "$one and $isTrue are NOT !=<br/>";
    }
    
    if($one !== $isTrue) {
        echo "$one and $isTrue !==<br/>";
    } else {
        echo "$one and $isTrue are NOT !==<br/>";
    }

    $a = 1;
    $b = 2;

    if($a === 1 || $b === 1) {
        echo 'either $a or $b are 1<br/>';
    } else {
        echo 'neither $a or $b are 1<br/>';
    }

    if($a === 1 && $b === 1) {
        echo 'both $a and $b are 1<br/>';
    } else {
        echo '$a and $b are not both 1<br/>';
    }

    if($a === 1 or $b === 1) {
        echo 'either $a or $b are 1<br/>';
    } else {
        echo 'neither $a or $b are 1<br/>';
    }

    if($a === 1 and $b === 1) {
        echo 'both $a and $b are 1<br/>';
    } else {
        echo '$a and $b are not both 1<br/>';
    }

    $result1 = false or true;
    $result2 = false || true;
    #($result1 = false) or true;
    #$result2 = (false || true);
    #$result1 = (false or true);
    #($result2 = false) || true;

    if($result1 === true) {
        echo '$result1 === true';
    } else {
        echo '$result1 !== true';
    }

    echo "<br/>";

    if($result2 === true) {
        echo '$result2 === true';
    } else {
        echo '$result2 !== true';
    }

    echo "<br/>";

    if($a === 1 xor $b === 1) {
        echo 'either $a or $b is 1 but not both';
    } else {
        echo '! $a === 1 xor $b === 1';
    }

    echo "<br/>";

    if($a === 1 xor $b === 2) {
        echo 'either $a is 1 or $b is 2 but not both';
    } else {
        echo '! $a === 1 xor $b === 2';
    }

    echo "<br/>";

      if(($a === 1 || $b === 2) &&
       !($a === 1 && $b === 2)) {
        echo 'either $a is 1 or $b is 2 but not both';
    } else {
        echo '! $a === 1 xor $b === 2';
    }

    echo "<br/>";

    $x = 'Hello';
    switch ($x) {
        case 1:
            echo "Its 1";
            break;
        case 2:
            echo "Its 2";
        case 3:
            echo "Its 2 or 3";
            break;
        case 'Hello':
            echo "Hi there!";
            break;
        default:
            echo "Its not 1,2, 3, or Hello";
    }

    echo "<br/>";

    for($i = 0; $i < 5; $i++) {
        echo "$i<br/>";
    }

    echo $i;
    echo "<br/>";

    while($i > 0) {
        echo "$i<br/>";
        $i--;
    }

    echo $i;
    echo "<br/>";

    do {
        echo "in do while<br/>";
    } while($i > 0);

    $x = 'foo';
    #$foo = null;
    if ($x === 'foo') {
        $foo = 'bar';
    }

    if(isset($foo)) {
        echo $foo;
    }
?>