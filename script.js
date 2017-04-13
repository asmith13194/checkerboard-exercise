for (i = 0; i <= 81; i++) {
    if (i % 2 === 0 && i <= 81) {
        var div = document.createElement('div');
        div.style.width = '11.1%';
        div.style.height = '11.1%';
        div.style.background = 'red';
        div.style.float = 'left';
        div.style.paddingBottom = '11.1%';
        var body = document.body.appendChild(div);
        var style = document.getElementsByTagName('div');
    } else if (i % 2 !== 0 && i < 81) {
        var div = document.createElement('div');
        div.style.width = '11.1%';
        div.style.height = '11.1%'
        div.style.background = 'black';
        div.style.float = 'left';
        div.style.paddingBottom = '11.1%';
        var body = document.body.appendChild(div);

    }
}