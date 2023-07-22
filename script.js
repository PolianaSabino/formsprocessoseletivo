function mostrarAlert(event) {
    event.preventDefault();

    var name = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;

    if (name === "" || email === "" || cidade === "" || estado === "") {
        alert("Você não concluiu a sua inscrição.");
    }
    else {
        alert("Sua inscriçáo foi enviada. Em breve entraremos em contato.");
        document.getElementById("form_preencher").requestFullscreen();
    }
}

