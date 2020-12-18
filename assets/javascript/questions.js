

//The questions I'm using to make the quiz
const myQuizQuestions = [
    //q1 
    {
            question: 'What is JavaScript?',
            answer1:'Styles the elements of a webpages.',
            answer2:'Used to make the basic structure of a webpage.',
            answer3:"It's used to control the behavior of a webpage.",
            answer4:'Lol, whats a JavaScript?',
            correctAnswer:'3',
    },
    // q2
    {
            question: 'What are the three ways to declare a variable in JavaScript? ',
            answer1:'string, number, boolean',
            answer2:'var, let, const',
            answer3:'char, int, double',
            answer4:'I don"t know what a varible is?',
            correctAnswer:'2',
    },
    //q3
    {
            question: 'How do you make an Array on JavaScript?',
            answer1:'let ex = ["variable1","variable2"]',
            answer2:'let ex = {"variable1","variable2"}',
            answer3:'let ex = ("variable1","variable2")',
            answer4:'let ex = "variable1","variable2"',
            correctAnswer:'1'
    },
    //q4
    {
            question: 'In JavaScript, what does console.log do?',
            answer1:'Creates an alert box.',
            answer2:'Logs the output to the console.',
            answer3:'Saves the information in the localstorage.',
            answer4:'Does nothing.',
            correctAnswer:'2'
    },
    //q5
    {
            question: 'How do you use a class as a selector in CSS?',
            answer1:'#class',
            answer2:'@class',
            answer3:'.class',
            answer4:'$class',
            correctAnswer:'3'
    },
    //q6
    {
            question: 'Css stands for...?',
            answer1:'Classy Sassy Styles',
            answer2:'Computers Styling Styles',
            answer3:'Competitve Selector Syntax',
            answer4:'Cascading Style Sheets',
            correctAnswer:'4'
    },
    //q7
    {
            question: 'What tag do you use to attach an external CSS sheet to and Html page?',
            answer1:'<href>',
            answer2:'<link>',
            answer3:'<src>',
            answer4:'<script>',
            correctAnswer:'2'
    },
    //q8
    {
            question: 'The html tag should be used to enclose all your code, except the <!DOCTYPE html> tag',
            answer1:'True',
            answer2:'False',
            correctAnswer:'1'
    },   
    //q9
    {
            question: 'Html stands for...',
            answer1:'HowTo Make Levels',
            answer2:'HyperText Musical Language',
            answer3:'How To Make Layers',
            answer4:'HyperText Markup Language',
            correctAnswer:'4'
    },
    //q10
    {
            question: 'All element tags must have a closing tag.',
            answer1:'True',
            answer2:'False',
            correctAnswer:'2'
    },   
    //q11
    {
            question: `What is the output of this code? let x = 5; x = x*x;`,
            answer1:'10',
            answer2:'0',
            answer3:'25',
            answer4:'1',
            correctAnswer:'3'
    },
    //q12
    {
            question: 'What is the output of the following code? let x = prompt("What is my purpose?"); let y = "You pass butter"; console.log(y);',
            answer1:'"You pass butter"',
            answer2:'"What is my purpose?"',
            answer3:'undefined',
            answer4:'42',
            correctAnswer:'1'
    },
    //q13
    {
            question: 'What is the output of the following code? let x = 5; let y = 6; if(x !==y){  console.log("You do not match"); }else { console.log("Aww, jeez man. Something went wrong."); } ',
            answer1:'will not run',
            answer2:'"Aww, jeez man. Something went wrong"',
            answer3:'undefined',          
            answer4:'You do not match',
            correctAnswer:'4'
    },
    //q14
    {       
            question: 'What is the output of the following code? let x = [1, 2, 3, 4, 5, 6]; let y = x.length; console.log(y);',
            answer1:'5',
            answer2:'1',
            answer3:'6',
            answer4:'0',
            correctAnswer:'3'
    },
    //q15
    {
            question: 'What is the output of the following code?  let x = [1, 2, 3, 4, 5, 6]; let y = x[3];  console.log(y);',
            answer1:'3',
            answer2:'2',
            answer3:'4',
            answer4:'5',
            correctAnswer:'3'
    },
    //q16
    {
            question: 'What function do you use to change a string to a integer?',
            answer1:'Number()',
            answer2:'parseInt()',
            answer3:'Math()',
            answer4:'String()',
            correctAnswer:'2'
    },
    //q17
    {
            question: 'What does the "this" keyword do?',   
            answer1:'Stores a variable',
            answer2:'Points to an element',
            answer3:'Refers to the "child" of the function',
            answer4:'Refers to the "owner" of the function',
            correctAnswer:'4'
    },
    //q18
    {
            question: 'How do you create a new element using JavaScript?',
            answer1:'.createelement()',
            answer2:'.createElement()',
            answer3:'.CreateElement()',
            answer4:'.Createlement()',
            correctAnswer:'2'
    },
    //q19
    {
            question: 'The CSS property color does what?',
            answer1:'Changes the color of the background',
            answer2:'Change the color of the text',
            answer3:'Changes the color of the border',
            answer4:'Changes color when you hover over the element',
            correctAnswer:'2'
    },
    //q20
    {
            question: 'The CSS selector div p span is refering to what?',
            answer1:'all <span> elements on the page',
            answer2:'all <span> elements inside <p> elements',
            answer3:'all <span> elements that are inside <p> elements that are inside <div> elements',
            answer4:'all <span> elements that are inside <div> elements',
            correctAnswer:'3'
    },


]