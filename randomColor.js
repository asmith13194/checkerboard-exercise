for (i = 1; i < 82; i++) {
    if (i < 82) {
        var colors = ['red', 'green', 'blue', 'yellow', 'salmon', 'orange', 'skyblue', 'brown', 'purple', 'teal'];
        var div = document.createElement('div');
        div.style.width = '11.1%';
        div.style.height = '11.1%';
        div.style.background = colors[Math.floor(Math.random() * 10)];
        div.style.float = 'left';
        div.style.paddingBottom = '11.1%';
        // div.innerHTML = i;
        // div.style.textAlign = 'center';
        // div.style.color = 'black'
        var body = document.body.appendChild(div);
    }
}