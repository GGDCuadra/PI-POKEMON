const validation = (pokemonData) => {
    const errors = {};

    // Name validations
    if (!pokemonData.name || pokemonData.name === '') {
        errors['name'] = 'Name is required';
    } else if (pokemonData.name.length < 6 || pokemonData.name.length > 20) {
        errors['name'] = 'Name must be between 6 and 20 characters';
    } else if (!/^[a-zA-Z ]+$/.test(pokemonData.name)) {
        errors['name'] = 'Name must contain only letters and spaces';
    }

    // Hp validations
    if (!pokemonData.hp || pokemonData.hp === '') {
        errors['hp'] = 'Hp is required';
    } else if (pokemonData.hp.length < 1 || pokemonData.hp.length > 253) {
        errors['hp'] = 'El hp debe ser de 1 a 253';
      }

    // Image validations
    if (!pokemonData.image || pokemonData.image === '') {
        errors['image'] = 'Image is required';
    } else if (pokemonData.image.length < 1 || pokemonData.image.length > 253) {
        errors['image'] = 'Image length must be between 1 and 253';
    }

    // Attack, defense, speed, height validations
    const numericFields = ['attack', 'defense', 'speed', 'height'];
    numericFields.forEach(field => {
        if (!pokemonData[field] || pokemonData[field] === '') {
            errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        } else if (pokemonData[field] < 1 || pokemonData[field] > 253) {
            errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} must be between 1 and 253`;
        }
    });

    return errors;
};

export default validation;