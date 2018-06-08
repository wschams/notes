<?php
if(! empty($_GET['url'])) {
    $allowedSites = [
        "https://www.google.com",
        "https://www.yahoo.com"
    ];

    $url = $_GET['url'];

    if(in_array($url, $allowedSites))
    {
        echo file_get_contents($_GET['url']);
    }
    http_response_code(500);
    exit("Can not fetch $url. Cross domain not allowed");
}

?>