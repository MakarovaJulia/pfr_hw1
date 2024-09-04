function addListItem(title, sender, recipient, date) {
    const itemList = document.getElementById('item_list');

    const listItem = document.createElement('li');
    listItem.className = 'list_item';

    listItem.innerHTML = `
        <h2>${title}</h2>
        <p>
            Отправитель: ${sender}<br/>
            Получатель: ${recipient}<br/>
            Дата выдачи: ${date}
        </p>
    `;

    itemList.appendChild(listItem);
}

for (let i = 1; i < 10; i++){
    addListItem(`ВЗН №132314${i}`, `Цех 0${i} / участок Цеха 0${i}`, `Цех 0${i+1} / участок Цеха 0${i+1}`, "16.06.2024");
}