var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let icon = this.querySelector('.changeEvent');
    if (this.classList.contains('active')) {
        icon.classList.remove('bx-plus-circle');
        icon.classList.add('bx-minus-circle');
    } else {
        icon.classList.remove('bx-minus-circle');
        icon.classList.add('bx-plus-circle');
    }

    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      content.style.margin = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.margin = '25px 0';
    } 
  });
}

let openBtn = document.querySelector('#open_nav_btn');
let closeBtn = document.querySelector('#close_nav_btn');
let menu = document.querySelector('#menu');
openBtn.onclick = function() {
  menu.style.top = 0;
}

closeBtn.onclick = function() {
  menu.style.top = '-100%';
}