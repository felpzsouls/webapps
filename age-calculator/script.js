document.addEventListener("DOMContentLoaded", function() {
    // Seu código JavaScript aqui
    const container = document.querySelector(".container"),
        error = document.querySelector(".error");

    function getAge() {
        const dobValue = document.getElementById("dob").value
        if(dobValue === null || dobValue === undefined) return
        let dob = new Date(dobValue),
        today = new Date(),
        diff = today - dob,
        age = diff / (1000 * 60 * 60 * 24 * 365);

        calcAge(age);
    };

    function calcAge(age) {
        let year = Math.floor(age),
            reaminingYear = age - year,
            monthDiff = reaminingYear * 12,
            month = Math.floor(monthDiff),
            reaminingMonth = monthDiff - month,
            day = Math.floor(reaminingMonth * 30);

        displayAge(year, month, day);
    };

    function displayAge(y, m, d) {
        const year = document.getElementById('years'),
            month = document.getElementById('months'),
            day = document.getElementById('days');

        year.innerText = y;
        month.innerText = m;
        day.innerText = d;

        if(y >= 0) {
            error.style.display = `none`;
        } else {
            error.style.display = 'block';
        };
    };

    container.addEventListener('input', getAge);
});
