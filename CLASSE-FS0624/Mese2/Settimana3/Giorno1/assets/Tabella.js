const PetList = [];

document.getElementsByTagName('form')[0];
document.addEventListener('submit', function(e){

    e.preventDefault();

    const nomeAnimaleInput = document.getElementById('nomeAnimale')
    const nomePadroneInput = document.getElementById('nomePadrone')
    const specieInput = document.getElementById('specie')
    const razzaAnimaleInput = document.getElementById('razzaAnimale')

    const nomeAnimaleValue = nomeAnimaleInput.value
    const nomePadroneValue = nomePadroneInput.value
    const specieValue = specieInput.value
    const razzaAnimaleValue = razzaAnimaleInput.value

    console.log (nomeAnimaleValue)
    console.log(nomePadroneValue)
    console.log(specieValue)
    console.log(razzaAnimaleValue)


 
})