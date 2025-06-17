const bgDiv = document.createElement('div');
bgDiv.className = 'container'
document.body.appendChild(bgDiv)

const childDiv = document.createElement('div')
childDiv.className = 'inner-element'
bgDiv.appendChild(childDiv);

//Dragging feature
let dragging = false;
let x = 0;
let y = 0

childDiv.addEventListener('pointerdown', (e) => {
    dragging = true;
    let rect = childDiv.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    childDiv.setPointerCapture(e.pointerId)
})


childDiv.addEventListener('pointermove', (e) => {
    if (!dragging) return;

    const containerRect = bgDiv.getBoundingClientRect();
    const childRect = childDiv.getBoundingClientRect();

    let newLeft = e.clientX - x;
    let newTop = e.clientY - y;

    newLeft = Math.max(0, Math.min(newLeft, containerRect.width - childRect.width));
    newTop = Math.max(0, Math.min(newTop, containerRect.height - childRect.height));

    childDiv.style.left = newLeft + "px";
    childDiv.style.top = newTop + "px";
});


childDiv.addEventListener('pointerup', () => {
    dragging = false;
})