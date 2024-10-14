function generateDropdownStructure(links) {
    const createList = (items) => {
        const ul = document.createElement('ul');
        ul.className = 'dropdown-list';
        items.forEach(item => {
            const li = document.createElement('li');
            li.className = 'dropdown-element';
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;
            li.appendChild(a);
            if (item.children && item.children.length > 0) {
                li.appendChild(createList(item.children));
            }
            ul.appendChild(li);
        });
        return ul;
    };

    console.log('Generated list');


    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';

    const button = document.createElement('button');
    button.className = 'dropbtn';
    dropdown.appendChild(button);

    const dropdownContent = document.createElement('div');
    dropdownContent.className = 'dropdown-content';
    dropdownContent.appendChild(createList(links));
    dropdown.appendChild(dropdownContent);

    return dropdown;
}

export default generateDropdownStructure;