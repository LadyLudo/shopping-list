
$('form button').on('click', function(e){
    e.preventDefault();
    let item = $('input').val();
    if (item !== "") {
        $('.shopping-list').append(`<li><span class="shopping-item">${item}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div></li>`)
    }
})

$('ul').on('click','.shopping-item-toggle', function(e){
    let target = $(this).closest('.shopping-item-controls').siblings('.shopping-item');
    target.toggleClass('shopping-item__checked');
})

$('ul').on('click','.shopping-item-delete', function(e){
    let target = $(this).closest('li');
    target.remove();
})