 /*
=============================================
; Title: baumann-assignment-4.4.js
; Author: Reva Baumann
; Date: 12 May 2019
; Modified by: Reva Baumann
; Description: Use button to generate email
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 3.2
  29 April 2019
  Expected output
  Use client's preferred platform to generate email

*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Assignment 4.4));
console.log("") // Line Break

// Create email and use button to send email
<script>
function sendMail() {
    var link = "mailto:revambaumann@gmail.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}
</script>
