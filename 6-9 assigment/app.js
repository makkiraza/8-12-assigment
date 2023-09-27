// // CHAPTER NO 1=MATH EXPRESSION

// // QUESTION NO 1=What will be the output in variables a, b & result after execution of the following script: 
var a = 2
var b=1
var result = --a - --b + ++b + b--;
 2   -   1 +  1  + 1
 document.write(result) 


// // QUESTION NO 2=  Write a program that takes input a name from user & greet the user.
 var name2=' Makki Raza'
var name1='Hello '
 document.write(name1+name2)


// // // QUESTION NO 3=Take three subjects name from user and store them in 3 different variables. 
 var name1=prompt('Enter Subject')
 var name2=+prompt('Enter Obtained marks')
 var name3=prompt('Enter Subject')
 var name4=+prompt('Enter Obtained marks')
 var name5=prompt('Enter Subject')
 var name6=+prompt('Enter Obtained marks')
 var max=100
 var total=name2+name4+name6
 var perc=(total/300)*max
 document.write("<table border='1px'>"+
 "<tr>"+
 "<th>"+'Subject'+"</th>"+
 "<th>"+'Total marks'+"</th>"+
 "<th>"+'Obtained marks'+"</th>"+
 "<th>"+'Percentage'+"</th>"+
 "</tr>"+
 "<tr>"+
 "<td>"+name1+"</td>"+
 "<td>"+max+"</td>"+
 "<td>"+name2+"</td>"+
 "<td>"+perc+"</td>"+
 "</tr>"+
 "<tr>"+
 "<td>"+name3+"</td>"+
 "<td>"+max+"</td>"+
 "<td>"+name4+"</td>"+
 "<td>"+perc+"</td>"+
 "</tr>"+
 "<tr>"+
"<td>"+name5+"</td>"+
"<td>"+max+"</td>"+
"<td>"+name6+"</td>"+
"<td>"+perc+"</td>"+
"</tr>"+
"<tr>"+
"<td>"+"</td>"+
"<td>"+'  300'+"</td>"+
"<td>"+total+"</td>"+
"<td>"+perc+"</td>"+
"</tr>"+
"</table>")

// QUESTION NO 4= Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 
var i;
var num1=+prompt('Enter Number')
var num2=5
for( i=1; i<=10; i++){
        document.write(num1+'x'+i+'='+num1*i+'<br>')
}


// QUESTION NO 5= Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 

var num1=5
var name1='Result:'
var name2='The value of num1 is :'
var name3='The value of ++num1 is : '
var name4='The value of --num1 is : '
var name5='Now the value of num1 is :'
var name6='The value of num1++ is : '
var name7='The value of num1-- is :' 
var result=++num1 + num1++ + --num1 + num1--
document.write(name1+'<br>'+name2+num1+'<br>'+'..............................'+'<br>'+name3+'6'+'<br>'+name5+'6'+'<br>'+'<br>'+name6+'6'+'<br>'+name5+'7'+'<br>'+'<br>'+name4+'6'+'<br>'+name5+'6'+'<br>'+'<br>'+name7+'6'+'<br>'+name5+'10')




// CHAPTER NO 2=ARRAYS

// QUESTION NO 1=Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,  BS, BCOM, MS, M. Phil., PhD). Show the listed     qualifications in your browser like: 
var arr=['SSC','HCI','BCOM','BCS','BS','MS','M.PHIL','PHD']
for(var i=0; i<arr.length; i++){
    document.write(+arr[i]+'<br>')
}

// QUESTION NO 2 =Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like: 
var arr=['Amaan','Saad','Ali']
var arr2=['350','400','401']
var perc=(350/500)*100
var per=(400/500)*100
var pe=(421/500)*100
document.write('Score of Amaan is 350.percentage: '+perc+'<br>'+'Score of Saad is 400.percentage: '+per+'<br>'+'Score of Ali is 401.percentage: '+pe)

// QUESTION NO 3=Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var name1='Scores of Students : '
var name2='Ordered score of Student : '
var arr=['320','340','402','300']
document.write(name1+arr+'<br>'+name2+arr[3]+' '+arr[0]+' '+arr[1]+' '+arr[2])

// QUESTION NO 4=Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 
var name1='Cites list :'
var name2='Selected cities list : '
var arr=['Karachi','Lahore','Islamabad',' Quetta','Peshawar']
document.write(name1+'<br>'+arr+'<br>'+'<br>'+name2+'<br>'+arr[2 ]+arr[3])

// QUESTION NO 5= Write a program to create a single string from the below mentioned array: 

var name1='This is my cat'
var name2='STRING'
var name3='ARRAY'
var arr=['This','is','my','cat']
document.write('<h2>'+name3+'<br>'+arr+'<br>'+'<br>'+name2+'<br>'+name1+'</h2>')



// CHAPTER NO 3=USER INPUT & CONDITIONAL STATEMENT


// QUESTION NO 1=Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 

var name1=prompt('Enter your City')
var name2='Karachi'
if (name1==name2) {
      document.write('<h1>'+"Welcome to city of light"+'</h1>')
} else {
    document.write('welcome')
}

// QUESTION NO 2=Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var name1=prompt('Enter Youe Gender')
if(name1=='male'){
    document.write('<h1>'+'GOOD MORNING SIR '+'</h1>')
}
else{
    document.write('<h1>'+'GOOD MORNING MAM '+'</h1>')
}


// QUESTION NO 3=Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” 

var num1=prompt('Enter fuel in car')
if(num1>0.25){
    document.write('The car is okay')
}
else{
    document.write('Please refil the fuil in your car')
}


// QUESTION NO 4=Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table

document.write('<table bgcolor="lightblue" border="groove">'+
'<tr align="center">'+
'<th>'+'Percentage %'+'</th>'+
'<th>'+'Grade'+'</th>'+
'<th>'+'Remarks'+'</th>'+
'</tr>'+
'<tr align="center">'+
'<td>'+'Greater than or equal to 80'+'</td>'+
'<td>'+'A one'+'</td>'+
'<td>'+'Exellent'+'</td>'+
'</tr>'+
'<tr align="center">'+
'<td>'+'Greater than or equal to 70'+'</td>'+
'<td>'+'A'+'</td>'+
'<td>'+'Good'+'</td>'+
'</tr>'+
'<tr align="center">'+
'<td>'+'Greater than or equal to 60'+'</td>'+
'<td>'+'B'+'</td>'+
'<td>'+'You need to improve'+'</td>'+
'</tr>'+
'<tr" align="center">'+
'<td>'+'less than 60'+'</td>'+
'<td>'+'Fail'+'</td>'+
'<td>'+'Sorry'+'</td>'+
'</tr>'+
'</table>')

// QUESTION NO 5= Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.

var name1=prompt('Enter a number from 1 to 10')
var num1=4
if(name1==num1){
    document.write("<h2>"+"Bingo! Correct answer"+"</h2>")
}
else{
    document.write('<h2>'+'Close enough to correct answer'+'</h2>')
}




// CHAPTER NO 4=IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS 


// QUESTION NO 1=This if/else statement does not work. Try to fix it: var greeting;
var name1='Good evening';
var hour=prompt('Enter Time')
if(hour<18){
    document.write('good day')
}
else{
    document.write(name1)
} 

// QUESTION NO 2=Write a program that .
var num1=6
var user=+prompt('Enter Password from 1 to 10')
if(user==num1){
    document.write('<h2>'+'Correct!'+'</h2>')
}   
else{
    document.write('<h2>'+'Incorrect password!'+'</h2>')
}

// QUESTION NO 3=Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var name1=prompt('Enter Vowel')
var name2='a'
var name3='e'
var name4='i'
var name5='o'
var name6='u'
var res=name2+name3+name4+name5+name6
if(res<=name1){
    document.write('<h2>'+'Correct!'+'</h2>')
}
else{
    document.write('<h2>'+' not a vowel'+'</h2>')
}