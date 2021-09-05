$(function() {
    "use strict"

    var cursor = document.querySelector('.cursor');
    var cursorBorder = document.querySelector('.cursor_border');
    var links = document.querySelectorAll('a');

    var editCursor = function editCursor(event){
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
        cursorBorder.style.left = event.clientX + 'px';
        cursorBorder.style.top = event.clientY + 'px';
    };

    window.addEventListener('mousemove', editCursor);

});