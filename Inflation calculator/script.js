function inflationCalculator(){

    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');
    let years = document.querySelector('#years');

    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    years = parseFloat(years.value);

    let finalmoney = (money * Math.pow(1+inflationRate*0.01,years));
    finalmoney = finalmoney.toFixed(2);

    let newelement = document.createElement('div');
    newelement.innerHTML=`Danasnjih ${money}€ vredi isto kao ${finalmoney}€ za ${years} po stopi inflacije od ${inflationRate}%`;
    newelement.className='new-value';
    document.querySelector('.container').appendChild(newelement); 
}