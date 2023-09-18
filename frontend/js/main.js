function onSubmit(event) {
    event.preventDefault();
    document.getElementById("msg").textContent = "";
    document.getElementById("image").src = "";
    const message = document.getElementById('message').value;
    const size = document.getElementById('size').value;

    if (message === '') {
        alert('Bitte füge eine Bildbeschreibung hinzu')
        return
    }

    generateImageRequest(message, size)

}

async function generateImageRequest(message, size) {
    showSpinner();
    try {
        const response = await fetch('https://project-x.rungame.de/openai/generateimg', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message,
                size
            }),
        });

        if (!response.ok) {
            removeSpinner();
            throw new Error('Das Bild konnte nicht generiert werden. Versuche es noch einmal..')
        }
        const data = await response.json();
        const image_url = data.data;
        document.getElementById("image").src = image_url;
        console.log(data)
        removeSpinner();
    } catch (error) {
        document.getElementById('msg').textContent = error;
    }
}

function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
}

function removeSpinner() {
    document.querySelector('.spinner').classList.remove('show'); 
} 

document.getElementById('image-form').addEventListener('submit', onSubmit)