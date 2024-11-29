const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultsEl = document.getElementById("results");

function calculateAge() {
    const birthdayValue = birthdayEl.value;

    if (!birthdayValue) {
        resultsEl.textContent = "Please select your date of birth!";
        return;
    }

    const birthdayDate = new Date(birthdayValue);
    const today = new Date();

    let age = today.getFullYear() - birthdayDate.getFullYear();
    const monthDifference = today.getMonth() - birthdayDate.getMonth();
    const dayDifference = today.getDate() - birthdayDate.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    resultsEl.textContent = `Your age is ${age} years old.`;
}

btnEl.addEventListener("click", calculateAge);
