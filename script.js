/*

}


let age = prompt("please enter your age: ");
if (age > 18){
    myprint("you are 18+ ....");
}else if(age > 14){
    myprint("you are under 14+...");
}else{
    myprint("you are under age");
}

alert("your age is" +" "+ (((age%2==0)? "even" +" " : "odd" +" "  )) + "number!");
*/
function rand(start, end) {
    let r = start + Math.floor(Math.random() * (end - start + 1));
    return r;
  }
  
  function myprint(string) {
    document.write(string + "<br>");
  }
  
  let usersystemDate = new Date();
  let h = usersystemDate.getHours();
  let msg = "";
  
  h = rand(0, 23);
  myprint(h);
  myprint("--------------------------");

if ( h>=0 && h<=6){
    msg = "early morning";
}if ( h>=6 && h<=11){
    msg = "good morning";
}if ( h>=12 && h<=15){
    msg = "good afternoon";
}if ( h>=15 && h<=20){
    msg = "good evening";
}if ( h>=20 && h<=24){
    msg = "good night";
}
myprint(msg);