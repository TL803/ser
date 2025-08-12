document.addEventListener("DOMContentLoaded", function () {
    const popupManager = new PopupManager();
    popupManager.bindOpenButtons('.OpenConsultationPopup');

    const PricePaginationContainer = document.getElementById('PricePaginationContainer');

    if (!PricePaginationContainer) {
        console.error("Элемент с id='PricePaginationContainer' не найден.");
        return;
    }

    const services = [
        { title: "Шиномонтаж", price: "8 000 ₽" },
        { title: "Хранение шин", price: "7 500 ₽" },
        { title: "Сход - развал", price: "7 500 ₽" },
        { title: "Обслуживание тормозных механизмов", price: "от 3 500 ₽" },
        { title: "Замена тормозных колодок", price: "от 4 500 ₽" },
        { title: "Замена тормозных дисков", price: "от 12 000 ₽" },
        { title: "Замена масла", price: "от 2 500 ₽" },
        { title: "Замена тормозной жидкости", price: "от 4 500 ₽" },
        { title: "Замена охлаждающей жидкости", price: "от 4 500 ₽" },
        { title: "Замена воздушного фильтра", price: "от 1 500 ₽" },
        { title: "Замена масляного фильтра", price: "от 1 500 ₽" },
        { title: "Замена салонного фильтра", price: "от 1 500 ₽" }
    ];

    const itemsPerPage = 4;
    let currentPage = 1;

    function renderServices(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedServices = services.slice(startIndex, endIndex);

        return paginatedServices.map(item => `
            <div class="flex flex-col justify-between p-[24px] md:py-[52px] md:px-6 items-center gap-[52px] md:gap-8 w-full md:w-[416px] h-[282px] md:h-[480px] text-center bg-white shadow-2xl rounded-3xl transition-all duration-300 hover:shadow-3xl">
                <p class="text-[20px] md:text-[36px] min-h-[50px] md:h-[130px] font-regular leading-tight">${item.title}</p>
                <p class="text-[24px] md:text-[36px] font-regular">${item.price}</p>
                <button class="OpenConsultationPopup bg-[#FF0000] text-[16px] font-regular text-white rounded-[44px] w-full px-8 py-[12px] md:py-5 w-max transition hover:bg-[#E60000]">
                    Записаться на сервис
                </button>
            </div>
        `).join('');
    }

    function renderPagination() {
        const totalPages = Math.ceil(services.length / itemsPerPage);
        let paginationHTML = '';

        paginationHTML += `
            <div class="w-[41px] h-[31px] flex justify-center items-center text-[#FF0000] shadow-2xl rounded-[8px] cursor-pointer prev-btn"
                style="box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.25);">
                <img class="w-[7px]" src="./assets/Vector (4).svg" alt="назад">
            </div>
        `;

        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `
                <div 
                    class="p-4 rounded-[8px] cursor-pointer page-btn 
                    ${i === currentPage ? 'text-[#FF0000] font-medium' : 'text-gray-600'} 
                    transition"
                    style="box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.25);"
                    data-page="${i}">
                    ${i}
                </div>
            `;
        }

        paginationHTML += `
            <div class="w-[41px] h-[30px] flex justify-center items-center shadow-2xl rounded-[8px] cursor-pointer next-btn"
                style="box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.25);">
                <img class="w-[7px] scale-x-[-1]" src="./assets/Vector (4).svg" alt="вперёд">
            </div>
        `;

        return paginationHTML;
    }

    function render() {
        const servicesHTML = renderServices(currentPage);
        const paginationHTML = renderPagination();

        PricePaginationContainer.innerHTML = `
            <div class="flex flex-wrap justify-center gap-[32px]">
                ${servicesHTML}
            </div>
            <div class="flex justify-center items-center space-x-2 mt-[52px]">
                ${paginationHTML}
            </div>
        `;

        addPaginationListeners();
    }

    function addPaginationListeners() {
        const prevBtn = PricePaginationContainer.querySelector('.prev-btn');
        const nextBtn = PricePaginationContainer.querySelector('.next-btn');
        const pageButtons = PricePaginationContainer.querySelectorAll('.page-btn');

        const totalPages = Math.ceil(services.length / itemsPerPage);

        prevBtn?.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                render();
            }
        });

        nextBtn?.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                render();
            }
        });

        pageButtons.forEach(button => {
            button.addEventListener('click', () => {
                const page = parseInt(button.getAttribute('data-page'));
                currentPage = page;
                render();
            });
        });
    }

    render();
});