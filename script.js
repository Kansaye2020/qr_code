const generator = document.querySelector('.generate');
const inputText = document.getElementById('inputText');
const imageQr = document.querySelector("#img")


generator.addEventListener("click", () => {
    if(inputText.value === '') {
        alert('remplir le champ')
    } else {
        imageQr.src = `https://api.qrserver.com/v1/create-qr-code/?data=${inputText.value}&size=150x150`
    }
})