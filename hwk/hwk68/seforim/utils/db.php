<?php
    /*class Database extends PDO {

    private $cs;
    private $user;
    private $password;
    private $options;

    public function __construct(){
        $this->cs = "mysql:host=localhost;dbname=test";
        $this->user = "test";
        $this->password = "0000";
        $this->options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
        $dns = $this->cs;
        parent::__construct($dns, $this->user, $this->password, $this->options);
    }
    }

    class Database1 extends PDO {

    private static $database1Instance = null; 
    private $cs;
    private $user;
    private $password;
    private $options;

    public function __construct(){
        $this->cs = "mysql:host=localhost;dbname=test";
        $this->user = "test";
        $this->password = "0000";
        $this->options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
        $dns = $this->cs;
        parent::__construct($dns, $this->user, $this->password, $this->options);
    }
    public static function getInstance() {
        if(database1Instance === null) {
            database1Instance === new Database1();
            return database1Instance;  
        }
    } 
    }
    class Database extends PDO {
        private static $instance;
        private $cs;
        private $user;
        private $password;
        private $options;

        public function __construct(){
            $this->cs = "mysql:host=localhost;dbname=test";
            $this->user = "test";
            $this->password = "0000";
            $this->options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
            $dns = $this->cs;
            parent::__construct($dns, $this->user, $this->password, $this->options);
        }

        public static function getInstance() {
            if(Database::$instance !== null) {
                return Database::$instance;
            }
            return Database::$instance = new Database();
        }
    }*/

    class Database {
        private static $instance;
        private $pdo;

        private function __construct(){
            $this->pdo = new PDO("mysql:host=localhost;dbname=test", "test", "0000",
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
        }

        public static function getInstance() {
            if(Database::$instance === null) {
                Database::$instance = new Database();
            }
            return Database::$instance;
            }

        public function getPdo() {
            return $this->pdo;
        }
    }
/*
    class Database {
        private $pdo;
#needs get method
        public function __construct(){
            $this->pdo = new PDO("mysql:host=localhost;dbname=test", "test", "0000",
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
        }
    }*/
?>