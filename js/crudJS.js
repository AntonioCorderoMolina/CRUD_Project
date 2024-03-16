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
        var usernameError = document.getElementById('username-error');
        var passwordError = document.getElementById('password-error');

        // Reset error messages
        usernameError.textContent = '';
        passwordError.textContent = '';

        if (username.length === 0) {
            usernameError.textContent = "The username must be between 8 and 12 characters.";
            return;
        }

        if (password.length < 8 || password.length > 15) {
            passwordError.textContent = "The password must be between 8 and 15 characters.";
            return;
        } else if (!(/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password))) {
            passwordError.textContent = "The password must contain at least one uppercase letter, one lowercase letter, and one digit.";
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
            document.getElementById('name-error').textContent = 'Please enter a name.';
            return;
        } else {
            document.getElementById('name-error').textContent = '';
        }
        
        if (scientificName.length < 5) {
            document.getElementById('scientificName-error').textContent = 'Scientific name must be at least 5 characters long.';
            return;
        } else {
            document.getElementById('scientificName-error').textContent = '';
        }
        
        if (owner === '') {
            document.getElementById('owner-error').textContent = 'Please enter an owner.';
            return;
        } else {
            document.getElementById('owner-error').textContent = '';
        }
        
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address.';
            return;
        } else {
            document.getElementById('email-error').textContent = '';
        }
        
        if (continent === '') {
            document.getElementById('continent-error').textContent = 'Please choose an origin.';
            return;
        } else {
            document.getElementById('continent-error').textContent = '';
        }
        
        var climateChecked = document.querySelector('input[name="climate"]:checked');
        if (!climateChecked) {
            document.getElementById('climate-error').textContent = 'Please choose a climate.';
            return;
        } else {
            document.getElementById('climate-error').textContent = '';
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

            if (name === '') {
                document.getElementById('name-error').textContent = 'Please enter a name.';
                return;
            } else {
                document.getElementById('name-error').textContent = '';
            }
            
            if (scientificName.length < 5) {
                document.getElementById('scientificName-error').textContent = 'Scientific name must be at least 5 characters long.';
                return;
            } else {
                document.getElementById('scientificName-error').textContent = '';
            }
            
            if (owner === '') {
                document.getElementById('owner-error').textContent = 'Please enter an owner.';
                return;
            } else {
                document.getElementById('owner-error').textContent = '';
            }
            
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email address.';
                return;
            } else {
                document.getElementById('email-error').textContent = '';
            }
            
            if (continent === '') {
                document.getElementById('continent-error').textContent = 'Please choose an origin.';
                return;
            } else {
                document.getElementById('continent-error').textContent = '';
            }
            
            var climateChecked = document.querySelector('input[name="climate"]:checked');
            if (!climateChecked) {
                document.getElementById('climate-error').textContent = 'Please choose a climate.';
                return;
            } else {
                document.getElementById('climate-error').textContent = '';
            }        
    
            if (isNaN(price) || parseFloat(price) < 0.01 || parseFloat(price) > 9999) {
                alert('Please enter a valid price between $0.01 and $9999.');
                return;
            }

        });
    }
});
