const profile = document.querySelector('.profile');
const profileForm = document.querySelector('.profileForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const professionInput = document.getElementById('profession');

profileForm.addEventListener('submit', (event) => {
    // To prevent reload form
    event.preventDefault();

    // Data captured through object
    const profileData = {
        name: nameInput.value,
        age: ageInput.value,
        profession: professionInput.value
    }

    // Pass parameter as an object
    const formattedText = formatText(profileData);
    profile.innerHTML += formattedText;
    nameInput.value = '';
    ageInput.value = '';
    professionInput.value = '';
})

// Object destructuring and receiving arguments
function formatText({
    name,
    age,
    profession
}) {
    return ` <div class="profile__section">
          <h3>Name: ${name}</h3>
          <p>Age: ${age}</p>
          <p>Profession: ${profession}</p>
        </div> `
}