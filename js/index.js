const tick = () => {
    let node = document.getElementById('clock-display');
    node.innerHTML = new Date().toLocaleString()
}

document.addEventListener('DOMContentLoaded', setInterval(tick, 1000));
