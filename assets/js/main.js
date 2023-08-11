(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        //------------ Offcanvas -------------

        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });



        //--------------- Email JS ---------------

        const contactForm = document.getElementById('contact-form'),
            contactName = document.getElementById('contact-name'),
            contactEmail = document.getElementById('contact-email'),
            contactProject = document.getElementById('contact-project'),
            contactMessage = document.getElementById('contact-message')

        const sendEmail = (e) => {
            e.preventDefault()
            // check if the field has value
            if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
                // Add and remove color
                contactMessage.classList.remove('color-green')
                contactMessage.classList.add('color-red')

                // show message
                contactMessage.textContent = 'Write all the input fields 📩'
            } else {
                // serviceID - templateID - #form - publicKey
                emailjs.sendForm('service_zrxgveo', 'template_u92cy4f', '#contact-form', 'X5GomDrPXSDqQwiNz')
                    .then(() => {
                        // Show message and add color
                        contactMessage.classList.add('color-green')
                        contactMessage.textContent = 'Message sent ✅'

                        // Remove message after five seconds

                        setTimeout(() => {
                            contactMessage.textContent = ''
                        }, 3000)

                    }, (error) => {
                        alert('OOPS! SOMETHING HAS FAILED...', error)
                    })
                // To clear the input field
                contactName.value = ''
                contactEmail.value = ''
                contactProject.value = ''
            }

        }
        contactForm.addEventListener('submit', sendEmail)





    }); //---document-ready-----

}(jQuery));
