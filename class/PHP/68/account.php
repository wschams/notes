<?php
class Account {
    public static $FOO = "Foo!";

    private static $nextAccountNumber = 100000;

    private static $numActiveAccounts = 0;

    private $balance = 0;
    private $accountNumber;

    public function __construct($startingBalance = 0) {
        Account::$numActiveAccounts++;

        $this->accountNumber = Account::$nextAccountNumber++;
        $this->balance = $startingBalance;
        echo "Account constructor<br>";
        $this->display();
    }

    public function __destruct() {
        Account::$numActiveAccounts--;

        echo "Account destructed<br>";
        $this->display();
    }

    public function transaction($amount) {
        echo "Account Number: $this->accountNumber - TRANSACTION - $amount<br>";
        $this->balance += $amount;
    }

    public function display() {
        echo "Current number of active accounts: " . Account::$numActiveAccounts . "<br>";
        echo "Account Number: $this->accountNumber<br>";
        echo "Balance: $this->balance<br>";
    }
}

echo Account::$FOO . "<br>";

$account1 = new Account();
$account2 = new Account(400);

$account1->transaction(+100);
$account2->transaction(-100);

$account1->display();
$account2->display();

$account1->transaction(-200);
$account2->transaction(-400);

//$account1 = null;
unset($account1);
echo "End of file<br>";
?>