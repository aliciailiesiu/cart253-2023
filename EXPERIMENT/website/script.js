function changePageStyle() {
    const body = document.body;
    const button = document.getElementById('changeStyleButton');
    const cuteMessage = document.getElementById('cuteMessage');
    
    

    // Display a cute message
    const cuteMessages = [
        'You are as cute as a button!',
        'Sending you virtual hugs and cuteness!',
        'Life is better with a touch of cuteness.',
        'You make the world a cuter place!',
    ];

    const randomMessage = cuteMessages[Math.floor(Math.random() * cuteMessages.length)];
    cuteMessage.textContent = randomMessage;

    // Change button color
    const newButtonColor = getRandomColor();
    button.style.backgroundColor = newButtonColor;
}

let zIndexCounter = 1;

function addStickyNote() {
    const note = document.createElement('div');
    note.classList.add('sticky-note');
    note.setAttribute('contenteditable', 'true');
    note.setAttribute('draggable', 'true');
    note.style.zIndex = zIndexCounter++;
    note.addEventListener('mousedown', handleNoteDragStart);
    document.body.appendChild(note);
}

function handleNoteDragStart(e) {
    const note = e.target;
    const offsetX = e.clientX - note.getBoundingClientRect().left;
    const offsetY = e.clientY - note.getBoundingClientRect().top;

    function handleNoteDrag(e) {
        note.style.left = e.clientX - offsetX + 'px';
        note.style.top = e.clientY - offsetY + 'px';
    }

    function handleNoteDragEnd() {
        document.removeEventListener('mousemove', handleNoteDrag);
        document.removeEventListener('mouseup', handleNoteDragEnd);
    }

    document.addEventListener('mousemove', handleNoteDrag);
    document.addEventListener('mouseup', handleNoteDragEnd);
}

