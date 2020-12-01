const conceptsBtn = document.getElementById('concepts-btn')
const conceptUl = document.getElementById('concept-list')
const main = document.getElementById('main')

const conceptArray = [
    {
        'title': 'Declaring Variables',
        'id': 'assign-variables' 
    },
    {
        'title': 'Obtaining Elements',
        'id': 'obtainingElements'
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
    const operatorDiv = document.createElement('div')
    operatorDiv.className = "mb-20"
    operatorDiv.innerHTML = `
    <h1 class="text-4xl">Declaring Variables</h1>
    <h4 class="mt-4 mb-4 text-base">These are your children...</h4>
    <div class="border-b-2 mb-5"></div>
    <p class="mb-5">Declaring a variable is how we can access certain areas of the code. Without a variable, certain areas will become inaccessible to our insertion teams.</p>
    <p class="mb-5">As of writing this, you have 2 available ways to declare a variable. They are:</p>
    
    <p class="border-b border-r border-pink-500 inline-block pr-4">METHOD CONST</li>
    
    <p class="mb-5">Method <span class="text-purple-500">const</span> defines a constant variable. This cannot under any circumstances be changed. Doing so will incur an error and could lead to destabilization</p>

    <p class="border-b border-r border-pink-500 inline-block pr-4">METHOD LET</p>

    <p class="mb-5">Method <span class="text-purple-500">let</span> allows more flexibility when declaring variable. It can be changed and augmented as the operator/developer sees fit. Be aware that by allowing change, it can lead to your code inadvertently becoming unstable</p>
    
    <small>Example of Declaring Variables</small>

    <div class="bg-black text-xs pl-2 pt-2 pb-2 mb-5">
    <p><span class="text-purple-500">const</span> insertionTeam1 = 5;</p> 
    <p class="mb-2">// The number of members on this insertion team <span class="text-lime">CANNOT</span> be changed at any point in time.</p>

    <p><span class="text-purple-500">let</span> insertionTeam2 = 5;</p>
    <p class="mb-2">// The number of members on this insertion team <span class="text-lime">CAN</span> be changed at any point in time.</p>

    <p class>If at any point in the mission you change the amount of members on insertionTeam1, the <span class="text-purple-500">const</span> declaration will cause the system to output an error. However, because of the <span class="text-purple-500">let</span> declaration you can change the number of members on insertionTeam2 at anytime.</p>
    </div>

    <small>Please answer the following questions</small>
    <p>1. If you are tasked with operating a top secret mission, and are forbidden from bringing in any extra operatives. You would need to use the <input id="const1" class="bg-black text-aqua mr-1 ml-1 h-5 w-20 text-center"></input>declaration. </p>
    <button id="const1Btn" class="text-aqua text-xs items-center bg-black pl-1 pr-1 mt-2 mb-4 z-10 focus:outline-none">
    PROCESS ANSWER</button><div id="const1Result" class=""></div>

    <p>2. While monitoring your teams vital stats, you notice that their health begins to deteriorate. You feel that sending in a Stim-Operative would be beneficial to the team. To increase the number of members on the team, you would need to use the <input id="const2" class="bg-black text-aqua mr-1 ml-1 h-5 w-20 text-center"></input> declaration.</p>
    <button id="const2Btn" class="text-aqua text-xs items-center bg-black pl-1 pr-1 mt-2 mb-4 z-10 focus:outline-none">
    PROCESS ANSWER</button><div id="const2Result"></div>
    `
    main.appendChild(operatorDiv)
}

function obtainingElements() {
    main.innerHTML = '';
    const operatorDiv = document.createElement('div')
    operatorDiv.className = "mb-20"
    operatorDiv.innerHTML = `
    <h1 class="text-4xl">Obtaining Elements</h1>
    <h4 class="mt-4 mb-4 text-base">Sometimes you just need to take the things the corporation needs...</h4>
    <div class="border-b-2 mb-5"></div>
    <p class="mb-5">drone euro-pop render-farm garage DIY nodality augmented reality. modem Shibuya office rifle rebar convenience store sensory. pre- render-farm hacker human dome plastic katana. into papier-mache BASE jump modem math- neural 8-bit. free-market hacker refrigerator warehouse convenience store euro-pop j-pop. savant bicycle fluidity rifle range-rover narrative sprawl. receding neural receding ablative drone tattoo savant. drone stimulate kanji post- augmented reality pre- Shibuya. faded vinyl rain range-rover neon computer drone.</p>
    <p class="mb-5">Below are some of the methods we can employ to get the information that we need:</p>
    
    <p class="border-b border-r border-pink-500 inline-block pr-4">METHOD getElementById</li>
    
    <p class="mb-2">Method <span class="text-purple-500">getElementById</span> is what we employ the most at the corporation. This will allow you to attach onto an element that has a defined ID. </p>
    <p class="bg-black mb-5 pl-2">const cyberElement = document.<span class="text-lime">getElementById</span>('cyberElementId')</p>

    <p class="border-b border-r border-pink-500 inline-block pr-4">METHOD querySelector</p>

    <p class="mb-2">Method <span class="text-purple-500">querySelector</span> allows the operator to attach onto an element that has a defined class. This is necessary to use when you are doing a scan but the elements' ID is not identified.</p>

    <p class="bg-black mb-5 pl-2">const cyberElement = document.<span class="text-lime">querySelector</span>('.cyberElementClass')</p>
    
    <p class="border-b border-r border-pink-500 inline-block pr-4">METHOD querySelectorAll</p>

    <p class="mb-2">Method <span class="text-purple-500">querySelectorAll</span> allows you to grab multiple class elements at once. This will be used when you need to employ certain functions and tactics to a group.</p>

    <p class="bg-black mb-5 pl-2">const cyberElements = document.<span class="text-lime">querySelectorAll</span>('.cyberElementGroup')</p>

    <p class="border-b border-r border-pink-500 inline-block pr-4">METHOD getElementsByTagName</li>
    
    <p class="mb-5">Method <span class="text-purple-500">getElementsByTagName</span> attaches to an HTMLCollection of elements. For example, If you would like to grab all of the 'h1' elements, you would use this method.</p>

    <p class="bg-black mb-5 pl-2">const cyberHeadings = document.<span class="text-lime">getElementsByTagName</span>('h1')</p>
    
    <small>Example of Declaring Variables</small>

    <div class="bg-black text-xs pl-2 pt-2 pb-2 mb-5">
    <p><span class="text-purple-500">const</span> insertionTeam1 = 5;</p> 
    <p class="mb-2">// The number of members on this insertion team <span class="text-lime">CANNOT</span> be changed at any point in time.</p>

    <p><span class="text-purple-500">let</span> insertionTeam2 = 5;</p>
    <p class="mb-2">// The number of members on this insertion team <span class="text-lime">CAN</span> be changed at any point in time.</p>

    <p class>If at any point in the mission you change the amount of members on insertionTeam1, the <span class="text-purple-500">const</span> declaration will cause the system to output an error. However, because of the <span class="text-purple-500">let</span> declaration you can change the number of members on insertionTeam2 at anytime.</p>
    </div>

    <small>Please answer the following questions</small>
    <p>1. If you are tasked with operating a top secret mission, and are forbidden from bringing in any extra operatives. You would need to use the <input id="const1" class="bg-black text-aqua mr-1 ml-1 h-5 w-20 text-center"></input>declaration. </p>
    <button id="const1Btn" class="text-aqua text-xs items-center bg-black pl-1 pr-1 mt-2 mb-4 z-10 focus:outline-none">
    PROCESS ANSWER</button><div id="const1Result" class=""></div>

    <p>2. While monitoring your teams vital stats, you notice that their health begins to deteriorate. You feel that sending in a Stim-Operative would be beneficial to the team. To increase the number of members on the team, you would need to use the <input id="const2" class="bg-black text-aqua mr-1 ml-1 h-5 w-20 text-center"></input> declaration.</p>
    <button id="const2Btn" class="text-aqua text-xs items-center bg-black pl-1 pr-1 mt-2 mb-4 z-10 focus:outline-none">
    PROCESS ANSWER</button><div id="const2Result"></div>
    `
    main.appendChild(operatorDiv)
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

    if (e.target.id === 'obtainingElements') {
        obtainingElements();
    }

    if (e.target.id === 'event-listeners') {
        eventListen();
    }

    if (e.target.id === 'functions') {
        functionPage();
    }
})

// Declaring Variables Questions

main.addEventListener('click', (e) => {
    const const1 = document.getElementById('const1')
    const const1Result = document.getElementById('const1Result')
    if (e.target.id === 'const1Btn') {
        // const const1Btn = document.getElementById('const1Btn')
        if (const1.value === 'const') {
            const1Result.innerHTML = `<p>CORRECT</p>`
            const1Result.className = 'text-lime bg-black pl-10 pr-2 inline-block text-xs'
        } else {
            const1Result.innerHTML = `<p>INCORRECT</p>`
            const1Result.className = 'text-red-500 bg-black pl-10 pr-2 inline-block text-xs'
        }
    }
})

main.addEventListener('click', (e) => {
    const const2 = document.getElementById('const2')
    const const2Result = document.getElementById('const2Result')
    if (e.target.id === 'const2Btn') {
        // const const1Btn = document.getElementById('const1Btn')
        if (const2.value === 'let') {
            const2Result.innerHTML = `<p>CORRECT</p>`
            const2Result.className = 'text-lime bg-black pl-10 pr-2 inline-block text-xs'
        } else {
            const2Result.innerHTML = `<p>INCORRECT</p>`
            const2Result.className = 'text-red-500 bg-black pl-10 pr-2 inline-block text-xs'
        }
    }
})

// Obtaining DOM Elements Questions