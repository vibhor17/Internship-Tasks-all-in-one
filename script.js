
function changebgColor(){
    const letters = "012345678ABCDEF"
    let color = "#"

    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color
}



document.getElementById("btn").addEventListener('click', function(){
    document.body.style.backgroundColor = changebgColor()
})



// JSONplaceholder

document.addEventListener("DOMContentLoaded", ()=>{
    fetchData()
})


async function fetchData() {
    const apiUrl = 'https://gorest.co.in/public/v2/users'; // Replace with your API endpoint
   
  
    try {
    const response = await fetch(apiUrl);
   
    // Check if the response was successful
    if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
    }
   
    const users = await response.json();
   
    // Display the data on the UI
    displayUsers(users);
    } catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('userList').innerHTML = 'Error fetching data.';
    }
    }
   
    // Function to display users in the list

    function displayUsers(users) {
    const userList = document.getElementById('userList');
    // userList.innerHTML = ''; // Clear any existing content
   
  
    users.forEach(user => {
    const listItem = document.createElement('div');
    listItem.className = 'user'; // Adjust according to your data structure
    listItem.innerHTML = `
      
    <h2> ${user.name} </h2>
    <h2> ${user.email} </h2>
    <p>${user.status} </p>
    <h3>${user.gender} </h3>
    
    `;
    userList.appendChild(listItem);
    });
    }
   
  



// Form Styling And Validation :-


const form = document.getElementById('registrationForm');
const firstName = document.getElementById('firstName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


form.addEventListener('submit', function(event) {
 event.preventDefault();


 if (firstName.value.trim() === '') {
 alert('Please enter your first name.');
 firstName.focus();
 return false;
 }

 if(lastName.value.trim() === ''){
 alert('Please enter your last name');
 lastName.focus();
 return false;
 }


 if (email.value.trim() === '') {
 alert('Please enter your email address.');
 email.focus();
 return false;
 }


 if (password.value.trim() === '') {
 alert('Please enter a password.');
 password.focus();
 return false;
 }


 if (password.value !== confirmPassword.value) {
 alert('Passwords do not match.');
 confirmPassword.focus();
 return false;
 }


 // If all validations pass, we can submit the form
 alert('Registration successful!');
 form.submit();
});





























// async function fetchData(){

//     const api = 'https://gorest.co.in/public/v2/users'
//     const response = await fetch(api)
//     const data = await response.json()
//     console.log(data)
// }
// fetchData()


































// function bgChange(){
//     document.getElementById("body").style.backgroundColor = " rgb(108, 97, 67)"
// }
