function sendEmail() {
    let formInfo = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    }

    const serviceID = "service_ncw969m";
const templateID = "template_6rin00b"

emialjs.send(serviceID, templateID, formInfo)

    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            console.log(res)
            alert("Your message sent successfully");
        }
    )

    .catch((err) => console.log(err))

}

