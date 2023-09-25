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
        const response = await fetch('https://project-x.rungame.de:5001/openai/generateimg', {
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

function renderCard(imageName){
    return `
        <div class="col text-center text-lg-start">
          <div class="card" style="width: 15rem;">
            <img src="./images/download/${imageName}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Elefant mit blauen Augen.</p>
            </div>
          </div>
        </div>`;
}

function renderAllCards(){
    const output = "";
    const json = ""; //TODO
    for(imageName in json){
        output += renderCard(imageName);
    }
    return output;
}

document.getElementById('image-form').addEventListener('submit', onSubmit)

document.getElementById('gallery').innerHTML += renderAllCards()