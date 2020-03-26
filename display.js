var myname = "Akinleye Hephzibah";
var Courses = new Array();
Courses[0] = "PHP";
Courses[1] = "Python";
Courses[2] = "C#";
Courses[3] = "JavaScript";
Courses[4] = "CSS";
Courses[5] = "HTML";

console.log(myname);
console.log(Courses);

lenn = Courses.length;
m = 1;
if (lenn%2 == 0)
{
    m=2;
}
console.log("This will print the list of either odd/even numbers from [1,200]");
for(i=m;i<=200;i+=2)
{
    console.log(i);
}