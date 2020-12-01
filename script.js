const conceptsBtn = document.getElementById('concepts-btn')
const conceptUl = document.getElementById('concept-list')
const main = document.getElementById('main')

const conceptArray = [
    {
        'title': 'Assigning Variables',
        'id': 'assign-variables' 
    },
    {
        'title': 'Event Listeners',
        'id': 'event-listeners'
    },
    {
        'title': 'Functions',
        'id': 'functions'
    },
    {
        'title': 'loops',
        'id': 'loops'
    }
];

function conceptOpen() {
    conceptList();
}

function conceptList() {
        if (conceptUl.innerText === '') {
        conceptArray.forEach( concept => {
        const li = document.createElement('li');
        li.className = ('border mr-4 ml-8 mb-1 pr-4 cursor-pointer transform hover:border-purple-500 hover:bg-purple-500 hover:mr-2 transform hover:pr-6 duration-500')
        li.innerHTML = `
            <div id="${concept.id}">${concept.title}</div>
        `
        conceptUl.appendChild(li);
    })
    }
}

function assignVariables() {
    main.innerHTML = '';
    const assignVariableDiv = document.createElement('div')
    assignVariableDiv.className = ""
    assignVariableDiv.innerHTML = `
    <h1 class="text-4xl">Assigning Variables</h1>
    <h4 class="mt-4 mb-4 text-base">These are your children...</h4>
    <div class="border-b-2 mb-5"></div>
    <p class="mb-5">Declaring a variable is how we can access certain areas of the code. Without a variable, certain areas will become inaccessible to our insertion teams leaving the corporation vulnerable.</p>
    <p class="mb-5">As of writing this, you have 2 available ways to declare a variable. They are:</p>
    
    <p class="border-b border-r border-pink-500 inline-block pr-4">METHOD CONST</li>
    
    <p class="mb-5">Method CONST defines a constant variable. This cannot under any circumstances be changed. Doing so will incur an error and could lead to destabilization</p>

    <p class="border-b border-r border-pink-500 inline-block pr-4">METHOD LET</p>
    
    <p class="mb-5">Method LET allows more flexibility when declaring variable. It can be changed and augmented as the operator/developer sees fit. Be aware that by allowing change, it can lead to your code becoming unstable</p>
    </ul>



    `
    main.appendChild(assignVariableDiv)
}

function eventListen() {
    main.innerHTML = '';
    const eventListenDiv = document.createElement('div')
    eventListenDiv.className = ""
    eventListenDiv.innerHTML = `
    <h1 class="text-4xl">Event Listeners</h1>
    <h4 class="mt-4 mb-4 text-base">The corporation is always listening...</h4>
    <div class="border-b-2 mb-5">
    `
    main.appendChild(eventListenDiv)
}

function functionPage() {
    main.innerHTML = '';
    const functionPageDiv = document.createElement('div')
    functionPageDiv.className = ""
    functionPageDiv.innerHTML = `
    <h1 class="text-4xl">Functions</h1>
    <h4 class="mt-4 mb-4 text-base">What purpose do you serve?</h4>
    <div class="border-b-2 mb-5">
    `
    main.appendChild(functionPageDiv)
}

conceptsBtn.addEventListener('click', conceptOpen)

conceptUl.addEventListener('click', (e)=> {
    console.log(e.target)
    if (e.target.id === 'assign-variables') {
        assignVariables();
    }

    if (e.target.id === 'event-listeners') {
        eventListen();
    }

    if (e.target.id === 'functions') {
        functionPage();
    }
})
