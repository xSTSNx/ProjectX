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
    try {
        //showSpinner();

        const response = await fetch('/openai/generateimg', {
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
          //  removeSpinner();
            throw new Error('Das Bild konnte nicht generiert werden. Versuche es noch einmal..')
        }
        const data = await response.json();
        const image_url = data[0].url
        document.getElementById("image").src = image_url;
        console.log(data)
       // removeSpinner();
    } catch (error) {
        document.getElementById('msg').textContent = error;
    }
}

/* function showSpinner() {
    document.getElementById('spinner').classList.add('show');
}

function removeSpinner() {
    document.getElementById('spinner').classList.remove('show'); 
} */

document.getElementById('image-form').addEventListener('submit', onSubmit)
