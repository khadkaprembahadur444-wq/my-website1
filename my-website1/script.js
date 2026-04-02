function sayHello() {
  alert("Welcome to my professional portfolio 🚀");
}

// Contact form action
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Thank you ${name}! Your message has been received.`);
  
  // Clear form
  form.reset();
});