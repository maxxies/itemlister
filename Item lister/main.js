const form = document.getElementById('add-items');
const itemList = document.querySelector('.items');
const itemSearch = document.getElementById('search-item');
const hide = document.getElementById('hide');

//Add form event
form.addEventListener('submit', addForm);
//delete form event
itemList.addEventListener('click', deleteForm);
//search event
itemSearch.addEventListener('keyup', filterItems);
//hide event
hide.addEventListener('change', hideItems);


//add form
function addForm(e) {
    e.preventDefault();
    // text value
    var text = document.getElementById('add-item').value;
    //create elements
    var li = document.createElement('li');
    var btn = document.createElement('button');
    //add texts
    if (text != '') {
        li.appendChild(document.createTextNode(text));
        btn.appendChild(document.createTextNode('Remove'));
        // add classes
        li.classList.add('list-item');
        btn.classList.add('delete-btn');
        //apemd childs
        li.appendChild(btn);
        itemList.appendChild(li);
        //clears the add bar
        var addBar = document.getElementById('add-item');
        addBar.value = '';
    }
}
//delete item
function deleteForm(e) {
    if (e.target.classList.contains('delete-btn')) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}
//filter items
function filterItems(e) {
    var filterItem = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function (item) {
        var text = item.firstChild.textContent;
        if (text.toLowerCase().indexOf(filterItem) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
// hide items
function hideItems() {
    if (hide.checked) {
        itemList.style.display = 'none';
    } else {
        itemList.style.display = 'initial';
    }
}