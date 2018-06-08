<?php

class Page {
    private $title;
    private $content;

    public function __construct($title, $content) {
        $this->title = $title;
        $this->content = $content;
    }

    public function getTitle() {
        return $this->title;
    }

    public function getContents() {
        return "
            <p>
            $this->content
            </p>
        ";
    }
}

?>