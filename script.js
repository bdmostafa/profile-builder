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
    let formattedText = formatText(profileData);
    saveToLocalStorage(profileData); // For local storage
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

function saveToLocalStorage(profileData) {
    // To handle multiple objects in Local Storage
    let profiles;

    if (localStorage.getItem('profiles')) {
        // Converting the previous storage data into objects using JSON.parse
        profiles = JSON.parse(localStorage.getItem('profiles'))
        profiles.push(profileData);
        localStorage.setItem('profiles', JSON.stringify(profiles));
    } else {
        // If 'profiles' is not created before
        profiles = [];
        profiles.push(profileData);
        localStorage.setItem('profiles', JSON.stringify(profiles));
    }
}