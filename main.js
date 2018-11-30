
document.write("hello world!");
document.write("this output is from the main.js");

function changeP1() {
    document.getElementById("p1").innerHTML= " Change to this output by click the button!\n";
}

function varTest() {
    var a = "this is ";
    var b = "a test !!!";
    var c;

    c = a + b;
    
    document.write(c);

}

function arrayTest(){

    array1 = new Array(3);
    array1[1] = "a";
    array1[2] = 1;
    array1[3] = 'v';

    document.write(array1);
}

function objectTest(){

    var object1 = {
        member1 : "123",
        member2 : 123,
        member3 : 1.23

    };

    document.writeln(object1);
    document.writeln(object1.member1);
    document.writeln(object1.member2);
    document.writeln(object1.member3);
    
    var a = 100;

    document.write(a.toString());

    var b = "this is a string";

    document.writeln(b.length);
    document.writeln(b.fontcolor());

}

function argTest(var1, var2){

    document.writeln(var1.toString());
    document.writeln(var2.toString());
}

