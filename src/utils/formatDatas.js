const removeAccentsAndSpecialCharacters = (string) => {
    /*referência:  https://pt.stackoverflow.com/questions/124754/retirar-caracteres-especial-e-acentos-em-javascript */
    const formattedName = string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9/\s]/gi,'')
    
    return formattedName;
}

module.exports = {
  removeAccentsAndSpecialCharacters
}
