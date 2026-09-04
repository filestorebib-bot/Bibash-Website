document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.getElementById("contactForm");

    const message =
        document.getElementById("formMessage");


    if (!form) return;


    form.addEventListener("submit", event => {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const body =
            document.getElementById("message").value.trim();


        if (!name || !email || !subject || !body) {

            return;

        }


        /*
            CHANGE THIS EMAIL
            TO YOUR REAL EMAIL ADDRESS
        */

        const destination =
            "your-email@example.com";


        const mailSubject =
            encodeURIComponent(
                subject
            );


        const mailBody =
            encodeURIComponent(

                `Name: ${name}

Email: ${email}

Message:

${body}`

            );


        window.location.href =
            `mailto:${destination}?subject=${mailSubject}&body=${mailBody}`;


        if (message) {

            message.textContent =
                "Opening your email application...";

            message.classList.add("show");

        }

    });

});
