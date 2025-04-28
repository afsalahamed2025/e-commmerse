// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
  if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }
}

/* ************ */
/* meeaage */
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Capture input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate inputs
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Error",
        text: "Please enter a valid email address!",
        icon: "error",
      });
      return;
    }

    // Template parameters for EmailJS
    const templateParams = {
      email: email,
      to_name: name,
      message: message,
    };

    // Sending the email
    emailjs.send("service_ujk4fno", "template_n81bjim", templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        Swal.fire({
          title: "Success",
          text: "Your email has been sent successfully!",
          icon: "success",
        });
        event.target.reset(); // Clear the form upon success
      },
      (error) => {
        console.error("FAILED...", error);
        Swal.fire({
          title: "Error",
          text: "Failed to send email. Please try again later.",
          icon: "error",
        });
      }
    );
  });
