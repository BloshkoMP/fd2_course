﻿function clear() {
    document.body.style.background='';
    document.body.className = '';
    document.body.style.removeProperty('--myColor');
}

function changeBgColorByText() {
    document.body.style.background=document.querySelector('.inputColor').value;
}
    
function changeBgColorBySelect() {
   document.body.style.background=document.querySelectorAll('select')[0].value;
}
    
function changeBgColorByClass() {
    clear();   
    document.body.className = document.querySelectorAll('select')[1].value;
}

function changeBgColorByTypeColor() {
    clear();      
    document.body.style.setProperty('--myColor',document.querySelector('.inputColorByType').value);
}

function changeBgColorByThis(select) {
    clear();      
    document.body.style.setProperty('--myColor',select.value);
}

function addColorByPromt() {
    let b=0;
    let addColor=document.querySelector('.change');
    let col=prompt('Enter the color name');
    if (addColor.querySelector('[value="'+col+'"]')) {
        alert('Color exist, try again!');
    } else {
        addColor[addColor.length]=new Option(col,col);
    }
}

function RemoveColorByPromt() {
    let colors=document.querySelector('.change');
    let mas=[],num=0,len=colors.length;

    for (let i=0;i<len;i++) {
        mas[i]=colors.options[i].value;
    }
    let col=prompt('Enter color to remove\n'+mas.join(' -- '));

    for (let i=0;i<len;i++) {
        if (colors.options[i].value==col) {
            colors.options[i].remove(); break;
        } else {
            num++;
        }
    }
    if (num==len) {
        alert('color not found');
    }
}