const saveButton = document.getElementById('save')
const resetButton = document.getElementById('reset')

const textarea = document.getElementById('notepad-textarea')
const names = document.getElementById('names')

const save = function () {
    console.log('cliccato')
    const textareaValue = textarea.value
    names.textContent = textareaValue
    localStorage.setItem('notepad-content', textareaValue)
}

saveButton.addEventListener('click', save)

const reset = function() {
    names.textContent = ''
    textareaValue = ''
    localStorage.removeItem('notepad-content')
    alert('rimosso')
}

resetButton.addEventListener('click', reset)



