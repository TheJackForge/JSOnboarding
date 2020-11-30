const conceptsBtn = document.getElementById('concepts-btn')
const conceptUl = document.getElementById('concept-list')

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

conceptsBtn.addEventListener('click', conceptOpen)

conceptUl.addEventListener('click', (e)=> {
    console.log(e.target)
    if (e.target.id === 'assign-variables') {
        console.log('ASSIGN VARIABLES')
    }
})