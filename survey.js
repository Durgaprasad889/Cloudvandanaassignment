document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const profession = document.getElementById('profession').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        alert(`First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nCountry: ${country}\nGender: ${gender}\nProfession: ${profession}\nEmail: ${email}\nMobile Number: ${mobile}`);

        form.reset();
    });
});
