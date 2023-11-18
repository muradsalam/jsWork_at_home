let hava = prompt('How old are you?');
let netice;

if (hava < '18') {
    netice = 'You are so young. You need to wait';
} else {
    netice = 'You can go to this 18+ site.';
}

document.getElementById('murad').innerHTML = netice;