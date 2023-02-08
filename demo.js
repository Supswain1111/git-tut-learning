/*var Items=document.getElementsByClassName("list-group-item")
console.log(Items)

for(var i=0;i<Items.length;i++)
{
    Items[i].style.fontWeight='bold';
}
Items[2].style.background='green';
Items[1].style.background='green';
var li = document.getElementById('li')
console.log(li)
var header=document.querySelector('#main-header')
var input =document.querySelector('input');
input.value="hello world"
var submit=document.querySelector('input[type="submit"]')
submit.value= 'send';
var item =document.querySelector('.list-group-item')
item.style.color='red';
//var lastItem =document.querySelector('.list-group-item:last-child')
//lastItem.style.color='red';
var odd =document.querySelectorAll('li:nth-child(odd)')
var even =document.querySelectorAll('li:nth-child(even)')
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='pink';
    even[i].style.backgroundColor='#ccc';
}
var SecondItem =document.querySelector
('.list-group-item:nth-child(2)')
SecondItem.style.backgroundColor='green';*/

//traversing the DDOM
var itemList = document.querySelector('#items');
//parentNode
/*console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'yellow';
console.log(itemList.parentNode.parentNode);*/

//parentElement
/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'yellow';
console.log(itemList.parentElement.parentElement);*/
//childNodes
//console.log(itemList.childNodes);

//childrens

//console.log(itemList.children);
//itemList.children[0].style.backgroundColor='pink';

//firstChild

/*console.log(itemList.firstChild);
//firstElementchild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello moto';*/

//lasttChild

/*console.log(itemList.lastChild);
//firstElementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello moto';*/

//nextsibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);

//previousElementSibling
/*console.log(itemList.previousElementSibling);
itemList.previousElementSibling.fontWeight='bold';
itemList.previousElementSibling.textContent='Live';*/

//createElement

var newDiv = document.createElement('div');

//addclass
newDiv.className='Divert';

//addid
newDiv.id='hello';

//setattribute
newDiv.setAttribute('title','Hello Div');

//createtextnode

var newDivText = document.createTextNode('Hello');

//add text to div

newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv,h1);

newDiv.style.fontSize='30px';




