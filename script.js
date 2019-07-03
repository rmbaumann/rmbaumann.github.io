 /*
=============================================
; Title: baumann-assignment-5.3.js
; Author: Reva Baumann
; Date: 22 May 2019
; Modified by: Reva Baumann
; Description: Use button to generate email
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 5.3
  22 May 2019
  Expected output
  Use client's preferred platform to generate email

*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Assignment 5.3));
console.log("") // Line Break

// Create email and use button to send email
<script>
function sendEmail()
{
     $.ajax({
           url: "mail.php",
           type: "POST",
           success: function(response) {
               if (!response) {
                    alert("Something went wrong. Please try again");
                    return;
               }

               var parsedJSON = eval('('+response+')');

               // If there's an error, display it.
               if(parsedJSON.Error) {
                  // Handle session timeout.
                  if (parsedJSON.Error == "Timeout") {
                       alert("Session timed out. Please login again.");
                       window.location.reload();
                   }
                }
               document.getElementById('mailStatus').innerHTML = "Email Sent successfully";  
            }
     });
}

{
$(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })


      <script> 
      var myVideo = document.getElementById("video1"); 

      function playPause() { 
            if (myVideo.paused) 
                  myVideo.play(); 
            else 
                  myVideo.pause(); 
      }      

      function makeBig() { 
            myVideo.width = 560; 
      } 

      function makeSmall() { 
            myVideo.width = 320; 
      } 

      function makeNormal() { 
            myVideo.width = 420; 
      }         
</script>

// end program