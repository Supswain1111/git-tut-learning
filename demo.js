/*var Items=document.getElementsByClassName("list-group-item")
console.log(Items)

for(var i=0;i<Items.length;i++)
{
    Items[i].style.fontWeight='bold';
}
Items[2].style.background='green';
Items[1].style.background='green';
var li = document.getElementById('li')
console.log(li)*/
var header=document.querySelector('#main-header')
var input =document.querySelector('input');
input.value="hello world"
var submit=document.querySelector('input[type="submit"]')
submit.value= 'send';
var item =document.querySelector('.list-group-item')
item.style.color='red';
//var lastItem =document.querySelector('.list-group-item:last-child')
//lastItem.style.color='red';
/*var odd =document.querySelectorAll('li:nth-child(odd)')
var even =document.querySelectorAll('li:nth-child(even)')
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='pink';
    even[i].style.backgroundColor='#ccc';
}*/
var SecondItem =document.querySelector
('.list-group-item:nth-child(2)')
SecondItem.style.backgroundColor='green';