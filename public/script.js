
const API_URL = 'http://localhost:8080';

async function getPets() {
    try {
        const response = await fetch(`${API_URL}/api/v1/pets`);
        const pets = await response.json();
        return pets;
    } catch (error) {
        console.error('Error fetching pets:', error);
        return [];
    }
}

async function renderPets() {
    try {
        const pets = await getPets(); 
        const petListContainer = document.getElementById('petList');

        petListContainer.innerHTML = '';

        pets.forEach(pet => {
            const petElement = document.createElement('div');
            petElement.innerHTML = `
                <h2>${pet.name}</h2>
                <p>Breed: ${pet.breed}</p>
                <p>Age: ${pet.age}</p>
                <p>Owner: ${pet.owner}</p>
                <p>Telephone: ${pet.telephone}</p>
                <h3>Appointments:</h3>
                <ul>
                    ${pet.appointments.map(appointment => `
                        <li>Date: ${appointment.date}, Time: ${appointment.time}, Reason: ${appointment.reason}</li>
                    `).join('')}
                </ul>
            `;
            petListContainer.appendChild(petElement);
        });
    } catch (error) {
        console.error('Error rendering pets:', error);
    }
}

renderPets();
