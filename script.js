function sendEmail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    }

    const serviceID = "service_ncw969m";
    const templateID = "template_6rin00b";

    emailjs.send(serviceID, templateID, params)

        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phone").value = "";
                console.log(res);
                prompt("Who are you")
            }
        )

        .catch((err) => console.log(err))

}
