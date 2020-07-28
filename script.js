const profile = document.querySelector('.profile');
const profileForm = document.querySelector('.profileForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const professionInput = document.getElementById('profession');

profileForm.addEventListener('submit', (event) => {
    // To prevent reload form
    event.preventDefault();
    // console.log(event);
    const nameValue = nameInput.value;
    const ageValue = ageInput.value;
    const professionValue = professionInput.value;

    const profileValue = `
    <div class="profile__section">
          <h3>Name: ${nameValue}</h3>
          <p>Age: ${ageValue}</p>
          <p>Profession: ${professionValue}</p>
    </div>
    `
    profile.innerHTML += profileValue;
    nameInput.value = '';
    ageValue.value = '';
    professionValue.value = '';
})