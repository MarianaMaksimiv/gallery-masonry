var list = document.querySelector('.list'),
	complete = document.querySelector('.complete__list'),
	checkboxs = document.querySelectorAll('.item__check'),
	editBtn = document.querySelectorAll('.item__edit'),
	deleteBtn = document.querySelectorAll('.item__delete'),
	addValue = document.querySelector('.add__value'),
	addBtn = document.querySelector('.add__button');

function clickCheck() {
	var itemValue = this.nextElementSibling.innerText;
	var liItem = this.parentElement;
	list.removeChild(liItem);
	var newli = document.createElement('li');
	newli.classList.add('item__text');
	newli.innerHTML = itemValue;
	complete.appendChild(newli);
}

for (var i = 0; i < checkboxs.length; i++) {
	checkboxs[i].onclick = clickCheck;
}

function clickEdit() {
	var itemValue = this.previousElementSibling.innerText;
	var liItem = this.parentElement;
	liItem.innerHTML = '<input type="text" value="' + itemValue + '" class="edit__value"> \
		    		<button class="save__button">Save</button>';
	var editValue = liItem.children[0];
	var saveBtn = liItem.children[1];
	saveBtn.onclick = function() {
		liItem.innerHTML = '<input type="checkbox" class="item__check"> \
	   				<span class="item__text">' + editValue.value + '</span> \
    				<button class="item__edit">Edit</button> \
    				<button class="item__delete">Delete</button>';
    	liItem.children[0].onclick = clickCheck;
    	liItem.children[2].onclick = clickEdit;
    	liItem.children[3].onclick = clickDelete;
	}
}

for (var i = 0; i < editBtn.length; i++) {
	editBtn[i].onclick = clickEdit;
}

function clickDelete() {
	var liItem = this.parentElement;
	list.removeChild(liItem);
}

for (var i = 0; i < deleteBtn.length; i++) {
	deleteBtn[i].onclick = clickDelete;
}

addBtn.onclick = function() {
	var newli = document.createElement('li');
	newli.classList.add('item');
	newli.innerHTML = '<input type="checkbox" class="item__check"> \
	   				<span class="item__text">' + addValue.value + '</span> \
    				<button class="item__edit">Edit</button> \
    				<button class="item__delete">Delete</button>';
	list.appendChild(newli);
	newli.children[0].onclick = clickCheck;
	newli.children[2].onclick = clickEdit;
	newli.children[3].onclick = clickDelete;
	addValue.value = '';
}
