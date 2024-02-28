/*********************************************************/
/*      Style sheet for Crud porject website             */
/*      author: Antonio Cordero Molina                   */
/*      version: 3.0                                     */
/*      comment: functions for the Crud porject website  */
/*********************************************************/

/********************************* LOGIN ***************************************/
document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.querySelector('.login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var usernameInput = document.getElementById('username');
        var passwordInput = document.getElementById('password');
        var username = usernameInput.value.trim();
        var password = passwordInput.value.trim();

        if (username.length === 0 || username.length < 8 || username.length > 12) {
            alert("The username must be between 8 and 12 characters.");
            return;
        }

        if (password.length === 0 || password.length < 8 || password.length > 15) {
            alert("The password must be between 8 and 15 characters.");
            return;
        }

        if (!(/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password))) {
            alert("The password must contain at least one uppercase letter, one lowercase letter, and one digit.");
            return;
        }

        loginForm.submit();

        usernameInput.value = '';
        passwordInput.value = '';
    });
});

/******************************** DATA TABLE ***********************************/

function myFunction() {
    let text;
    if (confirm("Ara you sure you want to delete the data of this item?") == true) {
      text = "You pressed OK!";
    } else {
      text = "You canceled!";
    }
    document.getElementById("demo").innerHTML = text;
  }

/******************************** INSERTION ************************************/

document.addEventListener("DOMContentLoaded", function() {
    var insertionForm = document.getElementById('insertionForm');
    insertionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value.trim();
        var scientificName = document.getElementById('scientificName').value.trim();
        var owner = document.getElementById('owner').value.trim();
        var email = document.getElementById('email').value.trim();
        var continent = document.getElementById('continent').value;
        var climate = document.querySelector('input[name="climate"]:checked');
        var price = document.getElementById('price').value.trim();
        var newsletter = document.getElementById('newsletter').checked;

        if (name === '') {
            alert('Please enter a name.');
            return;
        }

        if (scientificName.length < 5) {
            alert('Scientific name must be at least 5 characters long.');
            return;
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (continent === '') {
            alert('Please choose an origin.');
            return;
        }

        if (!climate) {
            alert('Please choose a climate.');
            return;
        }

        if (isNaN(price) || parseFloat(price) < 0.01 || parseFloat(price) > 9999) {
            alert('Please enter a valid price between $0.01 and $9999.');
            return;
        }

        if (newsletter) {
            alert('You are subscribed to the weekly newsletter.');
        }

        insertionForm.submit();
        insertionForm.reset();
    });
});

/******************************* MODIFICATION *********************************/

document.addEventListener("DOMContentLoaded", function() {
    var modificationForm = document.querySelector('.modification-form');
    if (modificationForm) {
        modificationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var name = document.getElementById('name').value.trim();
            var scientificName = document.getElementById('scientificName').value.trim();
            var owner = document.getElementById('owner').value.trim();
            var email = document.getElementById('email').value.trim();
            var continent = document.getElementById('continent').value;
            var climate = document.querySelector('input[name="climate"]:checked');
            var price = document.getElementById('price').value.trim();

            modificationForm.submit();
            modificationForm.reset();
        });
    }
});
