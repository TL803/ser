document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    const popupBack = document.createElement('div');
    const popup = document.createElement('div');

    popup.innerHTML = `
        <section class='container-main bg-[#060807] p-[48px] rounded-[32px] relative overflow-hidden z-10 max-w-[1700px] w-full'>
            <!-- Фоны-шарики (только визуальные, не мешают) -->
            <div class="absolute top-[-200px] -left-40 w-[500px] h-[500px] rounded-full bg-[#FF0000]/50 blur-[150px] pointer-events-none"></div>
            <div class="absolute top-[300px] right-[-150px] w-[500px] h-[500px] rounded-full bg-[#FF0000]/50 blur-[150px] pointer-events-none"></div>
            <div class="absolute bottom-[-300px] left-[800px] w-[500px] h-[500px] rounded-full bg-[#FF0000]/50 blur-[150px] pointer-events-none"></div>

            <div class="text-center mb-[40px]">
                <h2 class="text-white text-[48px] font-medium">
                    Заполни форму и получи <span class="text-[#FF0000]">бесплатную консультацию</span>
                </h2>
            </div>

            <div class="flex items-center justify-between">
                <form action="#" class="flex flex-col gap-[60px] w-full max-w-[752px]">
                    <div class="flex flex-col gap-[12px]">
                        <p class="text-[20px] font-regular text-white">ФИО</p>
                        <input
                            class="w-full h-[96px] rounded-[12px] bg-[#2B2B2B] text-[24px] font-regular text-[#B8B8B8] pl-[32px] focus:outline-none"
                            type="text"
                            placeholder="Иванов Иван Иванович"
                            required>
                    </div>

                    <div class="flex flex-col gap-[12px]">
                        <p class="text-[20px] font-regular text-white">Email <span class="text-[#FF0000]">*</span></p>
                        <input
                            class="w-full h-[96px] rounded-[12px] bg-[#2B2B2B] text-[24px] font-regular text-[#B8B8B8] pl-[32px] focus:outline-none"
                            type="email"
                            placeholder="mail@mail.ru"
                            required>
                    </div>

                    <div class="flex flex-col gap-[12px]">
                        <p class="text-[20px] font-regular text-white">Ваш телефон</p>
                        <input
                            class="w-full h-[96px] rounded-[12px] bg-[#2B2B2B] text-[24px] font-regular text-[#B8B8B8] pl-[32px] focus:outline-none"
                            type="tel"
                            placeholder="+ 7 999-999-99-99"
                            required>
                    </div>

                    <div class="flex items-start gap-[12px] md:gap-[20px]">
                        <input type="checkbox" id="consent" class="mt-1 w-[80px] custom-checkbox" checked>
                        <label for="consent" class="text-[14px] md:text-[16px] text-white leading-relaxed">
                            Я соглашаюсь с условиями и даю своё согласие на обработку и использование моих
                            персональных данных, и разрешаю сделать запрос в бюро кредитных историй.
                        </label>
                    </div>

                    <button type="submit"
                        class="w-full mt-[40px] py-[40px] text-[32px] font-regular rounded-[24px] bg-[#FF0000] text-[#060807] relative z-10 hover:bg-[#E60000] transition duration-300">
                        Получить предложение
                    </button>
                </form>

                <img class="hidden md:block w-[830px] h-[494px] object-cover"
                     src="./assets/eDr8OaZX4AoQ5KC0a1GEe3i9B5ggXmNTCCFhJLOV 1.png"
                     alt="Машина">
            </div>
        </section>
    `;

    popupBack.className = 'hidden w-full h-screen fixed top-0 left-0 bg-[#0F0F0F]/70 z-[100] flex justify-center items-center backdrop-blur-sm';
    popup.className = 'pointer-events-auto max-h-full overflow-auto';

    popupBack.appendChild(popup);
    body.appendChild(popupBack);

    // === 2. Обработчики для открытия/закрытия попапа ===
    const openButtons = document.getElementsByClassName('OpenConsultationPopup');
    const closeOnBackdrop = (e) => {
        if (e.target === popupBack) {
            popupBack.classList.add('hidden');
            body.style.overflow = '';
        }
    };

    // Открытие попапа по кнопке
    const openPopup = (e) => {
        e.preventDefault();
        popupBack.classList.remove('hidden');
        body.style.overflow = 'hidden'; // запрещаем скролл
    };

    // Назначаем обработчики всем кнопкам с классом OpenConsultationPopup
    Array.from(openButtons).forEach(button => {
        button.addEventListener('click', openPopup);
    });

    // Закрытие по клику на фон
    popupBack.addEventListener('click', closeOnBackdrop);

    // === 3. Пагинация услуг ===
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
            <div class="flex flex-col justify-between py-[52px] px-6 items-center gap-8 w-[416px] h-[480px] text-center bg-white shadow-2xl rounded-3xl transition-all duration-300 hover:shadow-3xl hover:scale-105">
                <p class="text-[36px] h-[130px] font-regular leading-tight">${item.title}</p>
                <p class="text-[36px] font-regular">${item.price}</p>
                <button class="OpenConsultationPopup bg-[#FF0000] text-[24px] font-regular text-white rounded-[44px] px-8 py-5 w-max transition hover:bg-[#E60000]">
                    Записаться на сервис
                </button>
            </div>
        `).join('');
    }

    function renderPagination() {
        const totalPages = Math.ceil(services.length / itemsPerPage);
        let paginationHTML = '';

        // Кнопка "Назад"
        paginationHTML += `
            <div class="w-[41px] h-[31px] flex justify-center items-center text-[#FF0000] shadow-2xl rounded-[8px] cursor-pointer prev-btn"
                style="box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.25);">
                <img class="w-[7px]" src="./assets/Vector (4).svg" alt="назад">
            </div>
        `;

        // Номера страниц
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

        // Кнопка "Вперёд"
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

    // === 4. Инициализация ===
    render();

    // После рендера добавляем новые кнопки в обработку (например, после смены страницы)
    const updateOpenButtons = () => {
        setTimeout(() => {
            const newButtons = document.getElementsByClassName('OpenConsultationPopup');
            Array.from(newButtons).forEach(btn => {
                if (!btn.dataset.listenerAdded) {
                    btn.addEventListener('click', openPopup);
                    btn.dataset.listenerAdded = 'true'; // защита от дублирования
                }
            });
        }, 0);
    };

    // Переопределяем render, чтобы обновлять обработчики
    const originalRender = render;
    window.render = function () {
        originalRender();
        updateOpenButtons();
    };

    // Запуск обновления обработчиков при первом рендере
    updateOpenButtons();
});