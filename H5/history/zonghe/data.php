<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$page = $_GET['page'];
if($page == 'first'){
    $data = 'first third';
}else if($page == 'second'){
    $data = 'second third';
}else if($page == 'third'){
    $data = 'third third';
}

echo"{$data}";
