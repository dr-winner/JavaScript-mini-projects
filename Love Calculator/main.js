function calculateLove(){
    const firstName = document.getElementById('firstName').value.trim();
    const secondName = document.getElementById('secondName').value.trim();

    if(firstName === '' || secondName === ''){
        alert('Please enter both names');
    }else{
        const lovePercentage = Math.floor(Math.random() * 101);

        const result = document.getElementById('result');

        result.innerHTML = `${firstName} and ${secondName} are ${lovePercentage}% compatible`;
    }
}

calculateLove()