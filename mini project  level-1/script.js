const h1 = document.createElement('h1');
h1.textContent = 'Number Generator';
h1.style.textAlign = 'center';
h1.style.textDecoration = 'underline';
document.body.appendChild(h1);

const h2 = document.createElement('h2');
h2.textContent = '30DaysOfJavaScript:DOM Day 2';
h2.style.textDecoration = 'underline';
h2.style.textAlign = 'center';
document.body.appendChild(h2);

const p = document.createElement('p');
p.textContent = 'Author Asabeneh Yetayeh';
p.style.textAlign = 'center';
p.style.textDecoration = 'underline';
document.body.appendChild(p);

const container = document.createElement('div');
container.classList.add('container');
container.style.width = '30%';
container.style.marginInline = 'auto';
document.body.appendChild(container);

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let element;
for (let i = 1; i <= 100; i++) {
    element = document.createElement('p');
    element.classList.add('p-element');
    element.textContent = `${i}`;
    element.style.display = 'inline-block';
    element.style.marginInline = '4px';
    element.style.marginBottom = '-100px';

    element.style.width = '20px';
    element.style.padding = '0.6rem 1rem';
    element.style.display = 'inline-block';
    element.style.marginInline = '5px';
    element.style.fontSize = '1.2rem';
    element.style.color = '#fff';

    if (isPrime(i)) {
        element.style.backgroundColor = 'red';
    } else if (i % 2 === 0) {
        element.style.backgroundColor = 'green';
    } else {
        element.style.backgroundColor = 'yellow';
    }

    container.appendChild(element);

}
