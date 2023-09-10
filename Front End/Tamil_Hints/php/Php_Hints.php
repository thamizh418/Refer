<?php

print "";
echo "";

$fname = "Tamil";
$sname = "Kumaran"
$age = 27;
$gender = 'M';
$height = 6.0;
$weight = "75kg";


define("occupation","Software Deve;oper");

const id = 139;

print $fname,$sname;
echo $fname,$sname.<br>;

$$fname = "Name";

echo $Tamil;

echo "Line number :".__LINE__."<br><br>";
echo "File Path :".__FILE__."<br><br>";


if($weight === "75kg"){
    echo "true";
}else{
    echo "false";
}

if($age == 10){
    echo "true";
}else{
    echo "false";
}

for($n=0;$n<10;$n++){
echo $n.<br>;
}

function fun($names){
    echo "Inside Fun $names";
}

fun("Ajith");


$list = array("1","2","3");
echo "list 1 : $list[0]";

$list[4] = "4";

$marks = array("Tamil"=>"90","English"=>"100");
echo "Mark :". $marks["Tamil"];

$student = array
(
    array(1,"Tamil",79),
    array(2,"English",100)
);

echo $student[0][2];
echo count($student);
echo sort($student);

for($row=0;$row<3;$row++){
    for($col=0;$col<3;$col++){
        echo $student[$row][$col];
    }
    echo "<br/>";
}

foreach($marks as $s){
    echo "$s <br/>";
}

$rev = array_reverse($list);

$str = "hi \n da";
$char = 'hi \n da';




class c_name {
    function f_name(){
        echo "inside function";
    }
}

$obj = new c_name();
$obj->f_name();






class father{
    function bike(){
echo "bike";
    }
    function car(){
        echo "car";
            }
}

class child extends father{
    function home(){
        echo "home";
    }
}

$obje = new child();
 $obje->car();
 $obje->home();






 interface c_add{
    public function add();
 }

 interface c_sub{
    public function sub();

    function mul(){
        echo"Multiplication";
    }
 }

 class calc implements c_add,c_sub {
    public function add(){
        echo "Addition";
    }
    public function sub(){
        echo "Subtraction";
    }
 }


$objec = new clac();

$objec->add();
$objec->sub();
$objec->mul();







abstract class a{
    abstract public function quotient();
    abstract public function remainder();
} 

class b extends a {
    public function quotient(){
        echo "Q";
    }
    public function remainder(){
        echo "R";
    }
}

$object = new b();

$object->quotient();
$object->remainder();






trait msg1{
    public function fn_msg1(){
        echo "message-1";
    }
}
trait msg2{
    public function fn_msg2(){
        echo "message-2";
    }
}

class welcome{
    use fn_msg1,fn_msg2;
}

$obj1 = new welcome();
$obj1->fn_msg1();
$obj1->fn_msg2();



final class final_c_name{
    final function final_fn_name(){
        echo"cant extend,inherit a final class ";
    }
}






// public -> principal
// private -> teacher
// protected -> hod 
// default 






?>