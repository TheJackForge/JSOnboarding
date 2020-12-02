const conceptsBtn = document.getElementById('concepts-btn')
const conceptUl = document.getElementById('concept-list')
const main = document.getElementById('main')

const conceptArray = [
    {
        'title': 'Declaring Variables',
        'id': 'assign-variables',
        'data': `<h1 class="text-4xl pl-1 border-l-4 border-b border-pink-500 inline-block">Declaring Variables</h1>
        <h4 class="mt-4 mb-4 text-base">These are your children...</h4>
        <div class="border-b-2 mb-5"></div>
        <p class="mb-5">Declaring a variable is how we can access certain areas of the code. Without a variable, certain areas will become inaccessible to our insertion teams.</p>
        <p class="mb-5">As of writing this, you have 2 available ways to declare a variable. They are:</p>
        
        <p class="border-b border-r border-pink-500 inline-block pr-4">METHOD const</li>
        
        <p class="mb-5">Method <span class="text-purple-500">const</span> defines a constant variable. This cannot under any circumstances be changed. Doing so will incur an error and could lead to destabilization</p>
    
        <p class="border-b border-r border-pink-500 inline-block pr-4">METHOD let</p>
    
        <p class="mb-5">Method <span class="text-purple-500">let</span> allows more flexibility when declaring variable. It can be changed and augmented as the operator/developer sees fit. Be aware that by allowing change, it can lead to your code inadvertently becoming unstable</p>
        
        <small>Example of Declaring Variables</small>
    
        <div class="bg-black text-s pl-2 pt-2 pb-2 mb-5">
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
        `,
    },
    {
        'title': 'Obtaining Elements',
        'id': 'obtainingElements',
        'data': `
        <h1 class="text-4xl pl-1 border-l-4 border-b border-pink-500 inline-block">Obtaining Elements</h1>
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
        
        <p>Simulation Exercises</p>
    
        <div class="bg-black text-s pl-2 pt-2 pb-2 mb-5">
        <p class="mb-2">On a mission you come across a system that you must break into. In order to do this you need to pull out several elements to augment. You are presented with the following code when you penetrate the initial layer of the firewall:</p> 
        <p>Device INITIATED AT 00:29 // Alarms have not been triggered</p>
        <p>Results have come back NEGATIVE</p>
        <p>KEY Elements are in Resting State // P4623</p>
        <p>EMPLOYEE CLASS === CEO STATUS // REDACTED (ID NUMBER = &lt;div id="ceoStatus"&gt;)</p>
        <p>RANDALL FROST (Last Known Location) CLOUD ARRAY: &lt;img href="/surveillance/location/1114032.png" class="concourse"&gt;
        </div>

        <small>Please answer the following questions</small>
        <p>1. What phrase is the CEO ID linked to? <input id="obtainingElements1" class="bg-black text-aqua mr-1 ml-1 h-5 w-20 text-center"></input></p>
        <button id="obtainingElements1Btn" class="text-aqua text-xs items-center bg-black pl-1 pr-1 mt-2 mb-4 z-10 focus:outline-none">
        PROCESS ANSWER</button><div id="obtainingElements1Result" class=""></div>
    
        <p>2. To obtain <span id="redacted2" class="bg-black text-red-500">REDACTED</span> ID we would need to use the <input id="obtainingElements2" class="bg-black text-aqua mr-1 ml-1 h-5 w-30 text-center"></input> method.</p>
        <button id="obtainingElements2Btn" class="text-aqua text-xs items-center bg-black pl-1 pr-1 mt-2 mb-4 z-10 focus:outline-none">
        PROCESS ANSWER</button><div id="obtainingElements2Result"></div>

        <p>3. A surveillance photo of the CEO's last known location is available but we can only access with the <span class="text-purple-500">class</span> selector. To do this we would need to use the <input id="obtainingElements3" class="bg-black text-aqua mr-1 ml-1 h-5 w-25 text-center"></input> method.</p>
        <button id="obtainingElements3Btn" class="text-aqua text-xs items-center bg-black pl-1 pr-1 mt-2 mb-4 z-10 focus:outline-none">
        PROCESS ANSWER</button><div id="obtainingElements3Result" class=""></div>

        <p>4. What would you have to type into the console to obtain the information linked to the <span class="text-purple-500">class</span>? Note: When you are using classes, you must place a decimal point ("." / dot) before the className.   <input id="obtainingElements4" class="bg-black text-aqua mr-1 ml-1 h-5 w-20 text-center"></input></p>
        <button id="obtainingElements4Btn" class="text-aqua text-xs items-center bg-black pl-1 pr-1 mt-2 mb-4 z-10 focus:outline-none">
        PROCESS ANSWER</button><div id="obtainingElements4Result" class=""></div>
        `
    },
    {
        'title': 'Event Listeners',
        'id': 'event-listeners',
        'data': `<h1 class="text-4xl pl-1 border-l-4 border-b border-pink-500 inline-block">Event Listeners</h1>
        <h4 class="mt-4 mb-4 text-base">We are always listening...</h4>
        <div class="border-b-2 mb-5"></div>
        <p class="mb-5">As an operator, you will need to become proficient at planting listening devices. We here at the JS/Onboarding like to refer to these devices as <span class="text-purple-500">eventListeners</span>. These devices are attached to the base of an element and serve as a doorway, giving us access to certain areas of the code to change things as we see fit.</p>
        
        <small>The following is an example of an ACTIVE <span class="text-purple-500">eventListener</span> after installation</small>

        <div class="bg-black mb-5 pl-2">
        <p class="text-aqua">// IN HTML //</p>
        <p class="mb-5"><span class="text-yellow-500">1//</span> &lt;button id="access-button"&gt;ACCESS&lt;/button&gt;</p>

        <p class="text-aqua">// IN JAVASCRIPT //</p>

        <p class="mb-5"><span class="text-yellow-500">2//</span> const accessBtn = document.getElementById('access-button')</p>

        <p><span class="text-yellow-500">3//</span> accessBtn.<span class="text-lime">addEventListener</span>('<span class="text-aqua">click</span>', <span class="text-color-purple">( ) =></span> {</p>
            <p><span class="text-yellow-500">4//</span> console.log('ALARM ACTIVATED - SEND SECURITY FORCES')</p>
        <p>})</p>
        </div>

        <p></p>
        <ul>
        <li class="mb-5"><span class="text-yellow-500">1// </span>Identify the element in the HTML sector that you would like to attach the <span class="text-purple-500">eventListener</span> to. In this case it is a button that will send a call for SECURITY FORCES if it is <span class="text-aqua">clicked</span>.</li>
        <li class="mb-5"><span class="text-yellow-500">2//</span> In JavaScript, we use the id of the button ("access-button"), to create a variable. We have applied this to a const variable and called it accessBtn. This variable will give us access to implant the listening device.</li>
        <li class="mb-5"><span class="text-yellow-500">3//</span> Using the accessBtn we attach the listening device by adding the <span class="text-lime">addEventListener</span> prefix to it. We must then identify what we will be listening for, in this case, it is for someone to "<span class="text-aqua">click</span>" the button. Clicking the button will activate the function portal [Identified as <span class="text-purple-500">( ) =></span>] and activate the commands we have coded.</li>
        <li class="mb-5"><span class="text-yellow-500">4//</span> This is the code that will be activated once the button is clicked. You can make it whatever you want. Make it whatever is necessary to ensure mission success. In this case we have activated the DIV sector that will activate the alarm to call for SECURITY FORCES.
        </ul>
        `
        

    },
    // {
    //     'title': 'Functions',
    //     'id': 'functions',
    //     'data': 'AREA NOT YET COMPLETE // PLEASE CONTACT SYSTEM ADMIN'
    // },
    // {
    //     'title': 'Loops',
    //     'id': 'loops',
    //     'data': 'AREA NOT YET COMPLETE // PLEASE CONTACT SYSTEM ADMIN'
    // }
];

function conceptOpen() {
    conceptList();
}

function conceptList() {
        if (conceptUl.innerText === '') {
        conceptArray.forEach( (concept, index) => {
        const li = document.createElement('li');
        li.className = ('conceptBtn border mr-4 ml-8 mb-1 pr-4 cursor-pointer transform hover:border-purple-500 hover:bg-purple-500 hover:mr-2 transform hover:pr-6 duration-500')
        li.innerHTML = `
            <div id="${concept.id}" data-index='${index}'>${concept.title}</div>
        `
        conceptUl.appendChild(li);
    })
    }
}

function populateDom(index) {
    main.innerHTML = '';
    const operatorDiv = document.createElement('div')
    operatorDiv.className = "mb-20"
    const operatorData = conceptArray[index].data
    operatorDiv.innerHTML = operatorData;
    main.appendChild(operatorDiv)
}

// Event Listeners

conceptsBtn.addEventListener('click', conceptOpen)

conceptUl.addEventListener('click', (e)=> {
    
    if (e.target.classList.contains = 'conceptBtn') {
        const index = e.target.dataset.index
        populateDom(index);
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

main.addEventListener('click', (e) => {
    const obtainingElements1 = document.getElementById('obtainingElements1')
    const obtainingElements1Result = document.getElementById('obtainingElements1Result')
    const obtainingElements2Redacted = document.getElementById('redacted2')
    if (e.target.id === 'obtainingElements1Btn') {
        if (obtainingElements1.value === 'ceoStatus') {
            obtainingElements1Result.innerHTML = `<p>CORRECT</p>`
            obtainingElements1Result.className = 'text-lime bg-black pl-10 pr-2 inline-block text-xs'
            obtainingElements2Redacted.classList.remove('text-red-500')
            obtainingElements2Redacted.classList.add('text-lime')
            obtainingElements2Redacted.innerText = 'UNLOCKED'
            setTimeout(function(){ 
                obtainingElements2Redacted.innerText = 'ceoStatus'; 
            }, 2000);
        } else {
            obtainingElements1Result.innerHTML = `<p>INCORRECT</p>`
            obtainingElements1Result.className = 'text-red-500 bg-black pl-10 pr-2 inline-block text-xs'
        }
    }
})

main.addEventListener('click', (e) => {
    const obtainingElements1 = document.getElementById('obtainingElements2')
    const obtainingElements1Result = document.getElementById('obtainingElements2Result')
    if (e.target.id === 'obtainingElements2Btn') {
        if (obtainingElements1.value === 'getElementById') {
            obtainingElements1Result.innerHTML = `<p>CORRECT</p>`
            obtainingElements1Result.className = 'text-lime bg-black pl-10 pr-2 inline-block text-xs'
        } else {
            obtainingElements1Result.innerHTML = `<p>INCORRECT</p>`
            obtainingElements1Result.className = 'text-red-500 bg-black pl-10 pr-2 inline-block text-xs'
        }
    }
})

main.addEventListener('click', (e) => {
    const obtainingElements3 = document.getElementById('obtainingElements3')
    const obtainingElements3Result = document.getElementById('obtainingElements3Result')
    if (e.target.id === 'obtainingElements3Btn') {
        if (obtainingElements3.value === 'querySelector') {
            obtainingElements3Result.innerHTML = `<p>CORRECT</p>`
            obtainingElements3Result.className = 'text-lime bg-black pl-10 pr-2 inline-block text-xs'
        } else {
            obtainingElements3Result.innerHTML = `<p>INCORRECT</p>`
            obtainingElements3Result.className = 'text-red-500 bg-black pl-10 pr-2 inline-block text-xs'
        }
    }
})

main.addEventListener('click', (e) => {
    const obtainingElements4 = document.getElementById('obtainingElements4')
    const obtainingElements4Result = document.getElementById('obtainingElements4Result')
    if (e.target.id === 'obtainingElements4Btn') {
        if (obtainingElements4.value === '.concourse') {
            obtainingElements4Result.innerHTML = `<p>CORRECT</p>`
            obtainingElements4Result.className = 'text-lime bg-black pl-10 pr-2 inline-block text-xs'
        } else {
            obtainingElements4Result.innerHTML = `<p>INCORRECT</p>`
            obtainingElements4Result.className = 'text-red-500 bg-black pl-10 pr-2 inline-block text-xs'
        }
    }
})
