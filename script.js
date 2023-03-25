async function add(){
	await delay(1000);
	return "Hello, world!";
}
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
add().then(function (value){
	document.write(value);
});