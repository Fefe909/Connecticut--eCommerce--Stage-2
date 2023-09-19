export function validateEmail(email) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }
    return true;
}
export function validateTitle(title) {
    if ((title.length < 5) || (title.length > 25)) {
        alert("Por favor, ingrese un título de entre 5 y 25 caracteres.");
        return false;
    }
    return true;
}
export function validatePrice(price) {
    if (isNaN(parseFloat(price))) {
        alert("Por favor, ingrese un precio válido y sin signos.");
        return false;
    }
    return true;
}
export function validateDescription(description) {
    if (description.length > 145) {
        alert("Por favor, ingrese una descripción de hasta 145 caracteres.");
        return false;
    }
    return true;
}
export function validateName(name) {
    if (name.length > 50) {
        alert("Por favor, ingrese un nombre de hasta 50 caracteres.");
        return false;
    }
    return true;
}
export function validateAge(age){
    if (!(age > 12 && age < 101)){
        alert("Por favor, ingrese una edad de entre 13 y 100 años.");
        return false;
    }
    return true;
}
export function validateAbout(about){
    if (about.length > 30) {
        alert("Por favor, ingrese un asunto de hasta 30 caracteres.");
        return false;
    }
    return true;
}
export function validateMessage(message){
    if (message.length > 500) {
        alert("Por favor, ingrese un mensaje de hasta 500 caracteres.");
        return false;
    }
    return true;
}