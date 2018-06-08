<?php
    class House {
#too lazy for seperate gets even though i am suppposed to
        public $picture;
        public $price;
        public $address;
        public $city;
        public $state;
        public $zip;

        public function __construct($house) {
            $this->picture = $house['picture'];
            $this->price = $house['price'];
            $this->address = $house['address'];
            $this->city = $house['city'];
            $this->state = $house['state'];
            $this->zip = $house['zip'];                  
        }
    }
?>