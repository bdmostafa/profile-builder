(function () {
    const profile = document.querySelector('.profile');
    const profileForm = document.querySelector('.profileForm');
    const submitProfile = document.getElementById('submit');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const professionInput = document.getElementById('profession');

    // IIFE - function called automatically
    (function loadEventLister() {
        document.addEventListener('DOMContentLoaded', getProfiles);
        submitProfile.addEventListener('click', profileSubmit);
    })();

    // Capture data from local storage
    function getProfiles() {
        let profiles;
        if (localStorage.getItem('profiles')) profiles = JSON.parse(localStorage.getItem('profiles'))
        else profiles = [];
        let formattedText = '';
        profiles.forEach(profile => {
            formattedText += formatText(profile);
        });
        profile.innerHTML = formattedText;
    }

    // Submit profile data
    function profileSubmit(event) {
        // To prevent reload form
        event.preventDefault();

        // Validation input data
        if (nameInput.value === '' || ageInput.value === '' || professionInput.value === '') {
            alert('Please provide correct information');
        } else {
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
        }
    }

    // Object destructuring, receiving arguments and creating text format from that object
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

    // Save profile data to local storage
    function saveToLocalStorage(profileData) {
        // To handle multiple objects in Local Storage
        let profiles;

        if (localStorage.getItem('profiles')) {
            // Converting the previous storage data into objects/real data using JSON.parse
            profiles = JSON.parse(localStorage.getItem('profiles'))
        } else {
            // If 'profiles' is not created before
            profiles = [];
        }
        profiles.push(profileData);
        localStorage.setItem('profiles', JSON.stringify(profiles));
    }
})();