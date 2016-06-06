var student = {name:"brian",age:22}

for( i in student){
	console.log(i);
}
//2
var multiplier = {
	currentValue=1;
	getCurrentValue: function(){
    	return currentValue;
    },
	multiply: function(num){
		return currentValue*=num;
	}
}

//3

function Album(){
	
}
function Photo(name, location){   
	this.name = name;   
	this.location = location; 
}

//4

function Person(name, age){   
	this.name = name;   
	this.age = age; 
}

function Student(name, age){
	this.info=new Person(name,age);
}

function Teacher(name, age){
	this.info=new Person(name,age);
}

function School(student,teacher){
	this.students=new Student(name,age);
	this.teachers=new Teacher(name,age);
}