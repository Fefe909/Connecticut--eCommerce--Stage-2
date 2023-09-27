export function validateEmail(email) {
    if (!email) {
        alert("Por favor, ingrese un correo electrónico.");
        return false;
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    return true;
}

export function validateTitle(title) {
    if (!title) {
        alert("Por favor, ingrese un título.");
        return false;
    }

    if (title.length < 5 || title.length > 25) {
        alert("Por favor, ingrese un título de entre 5 y 25 caracteres.");
        return false;
    }

    return true;
}

export function validatePrice(price) {
    if (!price) {
        alert("Por favor, ingrese un precio.");
        return false;
    }

    if (isNaN(parseFloat(price))) {
        alert("Por favor, ingrese un precio válido y sin signos.");
        return false;
    }

    return true;
}

export function validateDescription(description) {
    if (!description) {
        alert("Por favor, ingrese una descripción.");
        return false;
    }

    if (description.length > 145) {
        alert("Por favor, ingrese una descripción de hasta 145 caracteres.");
        return false;
    }

    return true;
}

export function validateName(name) {
    if (!name) {
        alert("Por favor, ingrese un nombre.");
        return false;
    }

    if (name.length > 50) {
        alert("Por favor, ingrese un nombre de hasta 50 caracteres.");
        return false;
    }

    return true;
}

export function validateAge(age) {
    if (!age) {
        alert("Por favor, ingrese una edad.");
        return false;
    }

    if (!(age > 12 && age < 101)) {
        alert("Por favor, ingrese una edad de entre 13 y 100 años.");
        return false;
    }

    return true;
}

export function validateAbout(about) {
    if (!about) {
        alert("Por favor, ingrese un asunto.");
        return false;
    }

    if (about.length > 30) {
        alert("Por favor, ingrese un asunto de hasta 30 caracteres.");
        return false;
    }

    return true;
}

export function validateMessage(message) {
    if (!message) {
        alert("Por favor, ingrese un mensaje.");
        return false;
    }

    if (message.length > 500) {
        alert("Por favor, ingrese un mensaje de hasta 500 caracteres.");
        return false;
    }

    return true;
}
