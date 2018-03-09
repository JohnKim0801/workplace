function iseven(num){
	if(num%2==0)
		console.log("true");
	else
		console.log("false");
}
iseven(4);
iseven(21);
iseven(68);
iseven(333);

function factorial(num){
	if(num === 0)
		return 1;
	else{
		return num*factorial(num-1);
	}


}
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
factorial(0);

function kebabToSnake(str){
return str.replace(/-/i,"_");
}
console.log(kebabToSnake("Hello-world!"));
kebabToSnake("dogs-are-awesome");
kebabToSnake("blah");