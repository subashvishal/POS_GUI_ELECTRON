var electron = require('electron');
var { ipcRenderer } = electron;
var ul = document.querySelector('ul');
console.log('Hello world');

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
    $('.collapsible').collapsible();
});

//Add Item
ipcRenderer.on('item:add', function (e, item) {
    ul.className = 'collection';
    var li = document.createElement('li');
    li.className = 'collection-item';
    var itemText = document.createTextNode(item);
    console.log('script running!!');
    li.appendChild(itemText);
    il.appendChild(li);
});

//clear Item
ipcRenderer.on('item:clear', function (e, item) {
    ul.innerHTML = '';
});

//Remove Item
ul.addEventListener('dblclick', removeItem);

function removeItem(e) {
    e.target.remove();
}
