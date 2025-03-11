function sendMessage() {
    const chatInput = document.getElementById('chatInput').value;
    const chatResponse = document.getElementById('chatResponse');
    chatResponse.innerHTML = "Réponse du bot en attente...";
    
    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: chatInput })
    })
    .then(response => response.text())
    .then(data => {
        chatResponse.innerHTML = data;
    })
    .catch(error => {
        chatResponse.innerHTML = "Erreur: " + error;
    });
}
