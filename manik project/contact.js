document.getElementById("contact-form").addEventListener("submit", function(e) {
    // Prevent the default form submission
    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact-number").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let language = document.getElementById("language-known").value;
    
    // to store the item in local storage
    let userArr = JSON.parse(localStorage.getItem("users")) || [];
    
    let userDetails = {
        name: name,
        contact: contact,
        email: email,
        address: address,
        language: language
    };
    
  
    userArr.push(userDetails);
    console.log(userDetails);
    localStorage.setItem("users", JSON.stringify(userArr));  // to load the item in local storage or browser window
  
    document.getElementById("contact-form").reset();
  
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  // Form is valid, display confirmation message
  alert('Thank you for contacting me! I will get back to you soon.');
  
  // Form is valid, submit it
  form.submit();
  
  
  function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
  }
  // Form is valid, submit it
  form.submit();
  })