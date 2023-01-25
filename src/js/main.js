document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
    
    
            })
        });
    
    }
    // end if innerWidth
    }); 

    function sendEmail() {
        Email.send({
            SecureToken : "",
            // Host : "smtp.gmail.com",
            // Username : "contact@beed.world",
            // Password : "test",
            To : 'contact@beed.world',
            From : document.getElementById("email").value,
            Subject : "Request a Demo",
            Body : "Name: " + document.getElementById("userName").value 
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone Number: " + document.getElementById("phoneNumber").value
            + "<br> Job Title: " + document.getElementById("jobTitle").value
            + "<br> Institution: " + document.getElementById("institution").value
        }).then(
          message => alert("Message Sent Succesfully")
        );
        console.log(value);
    }