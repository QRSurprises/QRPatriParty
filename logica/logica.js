function sendNotification() {
    var _ma = "qrsurprises@gmail.com";
    var _ps = "g00glepassword";
    var _titlePage = document.querySelector(".titleMain").textContent;
    Email.send({
        Host: "smtp.gmail.com",
        Username: _ma,
        Password: _ps,
        To: 'simonba97@gmail.com',
        From: _ma,
        Subject: "Notificación de lectura de pista!",
        Body: "QR_SURPRISES te notifica que se ha leído la pista: " + _titlePage,
    }).then(function(message) {
        if (message == 'OK') {
            console.log('Envió ' + message);
        } else {
            console.log('NO Envió ' + message);

        }
    });
}