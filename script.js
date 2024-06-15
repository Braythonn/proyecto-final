let namesArray = [];

function addName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    if (name) {
        namesArray.push(name);
        nameInput.value = '';
        displayNames();
    }
}

function searchName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    if (name) {
        const index = namesArray.indexOf(name);
        if (index !== -1) {
            alert(`Nombre "${name}" encontrado ${index + 1}`);
        } else {
            alert(`Nombre "${name}" no existe`);
        }
    }
}

function deleteName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    if (name) {
        const index = namesArray.indexOf(name);
        if (index !== -1) {
            namesArray.splice(index, 1);
            displayNames();
        } else {
            alert(`Nombre "${name}" no encontrado`);
        }
        nameInput.value = '';
    }
}

function displayNames() {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = '';
    namesArray.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
    });
}
