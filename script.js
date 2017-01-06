function problem1(){
	var num1=10;
	var num2=11;
	var sum=num1+num2;

	console.log(sum);

    var str1="Hi, ";
	var str2="Jen";
	var str3=str1+str2;

	console.log(str3);

}

function problem2(){
	var arr=[
	['Bijie','Zhu'],
	['May','First'],
	['Oh','Yeh']
];
  console.log(arr[1][1]);
}

function problem3(){

var reply=prompt("please enter a number");
if(reply<100){
	alert('the value is less than 100');
}else{
	alert('the value is '+reply+" , and it is greater than 100");
}

}

function problem5(input1,input2){
	if(input1==input2){
		console.log("The two strings are the same");
	}else{
		console.log("The two strings are not the same");
	}


}

function problem6(name){
	console.log('The name that you just entered is :'+name);

}

function problem7(){
	console.log("Hi There!");
}

function problem8(){
	var input=prompt('please enter a number between 1 - 3');
    var list={'1':'your prize is cat','2':'Your prize is dog','3':"Your prize is wood"};
    
     alert(list[input]);
}



problem1();
problem2();
problem3();
problem5('Bijie','Bijie');
problem6('Bijie');
problem7();
problem8();


