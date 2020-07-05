const ItemsList = document.querySelectorAll('.col-sm-6');
console.log(ItemsList);
ItemsList.forEach(ele => {
    ele.classList.toggle('item-size')
})
