// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("console.log") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("console.log") the result

let course1 = '100 days of code';
let course_price=500;
let goal = ['Learn web development', 'create a website', 'start a business'];

console.log(course1);
console.log(course_price);
console.log(goal);

let course = {
  name: course1,
  price: course_price,
  goals: goal
}

console.log(course.name);
console.log(course.price);
console.log(course.goals);

let main_goal = course.goals[1];

function custom_command(arr, id){
  return arr[id]
};
console.log(course.goals);
console.log(custom_command(course.goals,1));