function submit() {
    const firstname = document.getElementById('firstn').value;
    const valid = true;
    if(firstname.length === 0) {
        document.getElementById('firstn').style.border = "2px solid red";
        valid = false;
    }
    const lastname = document.getElementById('lastn').value;
    if(lastname.length === 0) {
        document.getElementById('lastn').style.border = "2px solid red";
        valid = false;
    }
    const email = document.getElementById('email').value;
    if(email.length === 0) {
        document.getElementById('email').style.border = "2px solid red";
        valid = false;
    }
    const messaget = document.getElementById('messaget').value;
    if(messaget.length === 0) {
        document.getElementById('messaget').style.border = "2px solid red";
        valid = false;
    }
    if(valid) {
        window.alert("Thanks for submitting")
    }

}