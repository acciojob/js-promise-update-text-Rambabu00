//your JS code here. If required.
 function add(){
	return "hello, world!";
}
async function ff(){
	var prom=await add();
document.getElementById("output").innerHTML=prom;
	
}
ff();