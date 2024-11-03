function calculateLove() {
    const firstName = document.getElementById('firstName').value.trim();
    const secondName = document.getElementById('secondName').value.trim();

    if (firstName === '' || secondName === '') {
        alert('Please enter both names');
    } else {
        const lovePercentage = Math.floor(Math.random() * 101);

        const result = document.getElementById('result');

        result.innerHTML = `${firstName} and ${secondName} are ${lovePercentage}% compatible`;
        if (lovePercentage < 30) {
            result.innerHTML += "<br>You seem not to be a great match though";
        } else if (lovePercentage >= 30 && lovePercentage < 70) {
            result.innerHTML += "<br>There is so much potential. Go give it a try";
        } else if (lovePercentage >= 70 && lovePercentage < 100) {
            result.innerHTML += "<br>It is a love match. You are going to be together";
        } else {
            result.innerHTML += "<br>It is a perfect match. You are soulmates";
        }
    }
}

calculateLove()