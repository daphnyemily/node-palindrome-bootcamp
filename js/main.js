
document.querySelector('button').addEventListener('click', searchPalindrome)

function searchPalindrome(){
    let input = document.querySelector('input').value
   
    fetch(`/api?input=${input}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        showResult(data)


        function showResult (data){
            if (data.isPali === true){
                document.getElementById('result').innerText="This is a Palindrome"

            }else{
                document.getElementById('result').innerText="Nope, not a Palindrome"
        }}
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
} 




//Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.

//create eventListener for the click event, then run the function
//create a function that will take the information that is being passed in by the input
//the palindrome input value must be passed in to be a string, number, lower-case/upper-case

// create query selectors
// add event listener that will listen for event (button click), then it will run a function
// create a function that will take the information that is being passed in
// Palindrome Parameters: input value can be a string, number, lower-case / upper-case

// declare variable that holds input value and makes input lower-case if it is a string
// declare another variable that holds value of "string" variable. Input value will be split into an array, split('') turns string from 'fat cat' to ['f', 'a', 't', ' ', 'c', 'a', 't']
   