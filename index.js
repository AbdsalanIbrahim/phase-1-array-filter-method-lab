const drivers = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

const driverObjects = [
    { name: 'Alice', hometown: 'New York' },
    { name: 'Bob', hometown: 'Los Angeles' },
    { name: 'Charlie', hometown: 'Chicago' },
    { name: 'David', hometown: 'Houston' },
    { name: 'Eve', hometown: 'Miami' }
];

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

function findDriver() {
    const input = document.getElementById('findInput').value;
    const results = findMatching(drivers, input);
    displayResults('findResults', results);
}

function fuzzyMatchDrivers() {
    const input = document.getElementById('fuzzyInput').value;
    const results = fuzzyMatch(drivers, input);
    displayResults('fuzzyResults', results);
}

function matchDriver() {
    const input = document.getElementById('matchInput').value;
    const results = matchName(driverObjects, input);
    displayResults('matchResults', results.map(driver => `${driver.name} from ${driver.hometown}`));
}

function displayResults(elementId, results) {
    const resultsList = document.getElementById(elementId);
    resultsList.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        resultsList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('findInput').addEventListener('keyup', findDriver);
    document.getElementById('fuzzyInput').addEventListener('keyup', fuzzyMatchDrivers);
    document.getElementById('matchInput').addEventListener('keyup', matchDriver);
});

