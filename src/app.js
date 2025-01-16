const foodItemsCard = document.querySelector('#foodItemsCard');
const menuButtons = document.querySelectorAll('.menuButton')

let renderMenu = (filteredMenu) => {
    foodItemsCard.innerHTML = filteredMenu.map(({ name, category, price, description, img }) => {
        return `
            <div class="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <img class="w-full object-cover" src="${img}" alt="${name}" />
                <div class="p-4">
                    <h2 class="text-xl font-semibold text-gray-800 max-[425px]:text-lg">${name}</h2>
                    <p class="text-gray-600 mt-2 max-[425px]:text-sm max-[425px]:mt-0">
                        ${description}
                    </p>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-lg font-bold text-gray-900 ">${price}</span>
                        <button class="px-4 py-2 max-[425px]:py-1 max-[425px]:px-3 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>`;
    }).join('');
}

renderMenu(foodMenu)

menuButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const category = button.getAttribute('data-category');

        // Remove the active class from all buttons
        menuButtons.forEach(btn => btn.classList.remove('active'));

        // Add the active class to the clicked button
        e.target.classList.add('active');

        // Render the menu based on the category
        switch (category) {
            case 'all':
                renderMenu(foodMenu);
                break;

            case 'breakfast':
                renderMenu(foodMenu.filter(item => item.category.toLowerCase() === 'breakfast'));
                break;

            case 'lunch':
                renderMenu(foodMenu.filter(item => item.category.toLowerCase() === 'lunch'));
                break;

            case 'shakes':
                renderMenu(foodMenu.filter(item => item.category.toLowerCase() === 'shakes'));
                break;

            default:
                break;
        }
    });
});







