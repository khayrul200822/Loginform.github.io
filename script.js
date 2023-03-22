function sendEmail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    }

    const serviceID = "service_ncw969m";
    const templateID = "template_6rin00b";
    const publickey = "mXR53IPD5No7uGw5U";

    emailjs.send(serviceID, templateID, params,publickey)

        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";

                console.log(res);
                alert("Who are you")
            }
        )

        .catch((err) => console.log(err))

}
