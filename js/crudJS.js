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

        // Si todas las validaciones pasan, enviar el formulario
        loginForm.submit();

        // Limpiar campos después de enviar el formulario
        usernameInput.value = '';
        passwordInput.value = '';
    });
});

/******************************* INSERTION *************************************/


