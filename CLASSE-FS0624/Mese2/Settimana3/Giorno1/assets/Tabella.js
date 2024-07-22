
class Pet {
    constructor (_nomeAnimale, _nomePadrone, _specie, _razzaAnimale){
        this.nomeAnimale = _nomeAnimale
        this.nomePadrone = _nomePadrone
        this.specie = _specie
        this.razzaAnimale = _razzaAnimale

    }
}


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

    console.log(nomeAnimaleValue)
    console.log(nomePadroneValue)
    console.log(specieValue)
    console.log(razzaAnimaleValue)

    const element = new Pet(nomeAnimaleValue, nomePadroneValue, specieValue, razzaAnimaleValue)
    console.log(element)

    PetList.push(element)

    const unorderedList = document.getElementById('animals-list')

    unorderedList.innerHTML = ''

    for (let i=0; i < PetList.length; i++) {
        const newLi = document.createElement('li')
        newLi.innerText= PetList[i].nomeAnimale + '' + PetList[i].nomePadrone + ''+ PetList[i].specie + 'della razza' + PetList[i].razzaAnimale
        newLi.classList.add('list-group-item')
        unorderedList.appendChild(newLi)
    }
    document.getElementsByTagName('form')[0].reset()


 
})