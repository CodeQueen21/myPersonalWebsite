 let greeting = "Hello World";
 console.log(greeting);

 const toggleButton = document.getElementsByClassName('toggle-button')[0]
 const navbarLinks = document.getElementsByClassName('navbar-links')[0]

 toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const myForm = document.getElementById("htmlForm");
        const submitFunction = (e) => {
            e.preventDefault();
            window.location.href = "submit.html";
        }
        myForm.addEventListener("submit", submitFunction);