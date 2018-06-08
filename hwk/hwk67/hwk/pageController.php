<?php
# saving three pages with four houses each 
# in other words, doing hwk with the arrays not with changing any SQL 
    $i = 0;
    $h[] = '';
    $page[] = '';
    $k = 1;
    if(!empty($houses)) {
    foreach($houses as $house) {
        $h[$i] = $house;
        $i++;        
        if($i === 4) {                     
            $page[$k] = $h;
            $k++;
            $i = 0;
        }
    }
    }
    print_r($page[1]);
    echo "<br>";
    echo "<br>";
    print_r($page[2]);
    echo "<br>";
    echo "<br>";
    print_r($page[3]);
    /*$j=0;
    while($j<4){
        print_r($page);
        echo "<br>";
        $j++;
    }*/
?>