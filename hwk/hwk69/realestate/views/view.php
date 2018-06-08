<?php
abstract class View{
     abstract function renderSpecials();
    
     function render(){
        include 'top.php';
        $this->renderSpecials();
        include 'bottom.php';        
    }
}
?>