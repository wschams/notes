<?php
class PageTwo extends Page {
    public function __construct() {
        parent::__construct("Page #2","
            <p>
            test 123
            </p>
        ");
    }
    /*public function getContents() {
        return '
        <h2>Page #2</h2>
        <p>
        test 123
        </p>
        ';
    }*/
}
?>