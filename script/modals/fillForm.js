const body = document.body

const popupBack = document.createElement('div')
const popup = document.createElement('div')
const openButtons = document.getElementsByClassName('OpenPopup')

popup.innerHTML = `
    <section class='container-main  bg-[#060807] p-[18px] md:p-[48px] rounded-[10px] md:rounded-[32px] relative overflow-hidden z-10'>
        <img class="absolute top-[32px] right-[16px] md:hidden block" src="./assets/adaptive/close-circle.svg" alt="./assets/adaptive/close-circle.svg"/>
        <div class="absolute top-[-200px] -left-40 w-[500px] h-[500px] rounded-full bg-[#FF0000]/50 blur-[150px] z-[-1]  pointer-events-none"></div>
        <div class="absolute top-[300px] right-[-150px] w-[500px] h-[500px] rounded-full bg-[#FF0000]/50 blur-[150px] z-[-1]  pointer-events-none"></div>
        <div class="absolute bottom-[-300px] left-[800px] w-[500px] h-[500px] rounded-full bg-[#FF0000]/50 blur-[150px]  z-[-1] pointer-events-none"></div>

        <div class="text-center mt-[50px] md:mt-[0]">
            <h1 class="text-white md:text-[70px] md:mb-[0] mb-[10px] text-[20px] font-medium">Остались вопросы?</h1>
            <h2 class="text-white w-full md:text-[48px] text-[16px] font-regular md:font-medium">Заполни форму и получи бесплатную консультацию</h2>
        </div>

        <div class="flex items-center md:justify-between mt-[30px] md:mt-[60px]">
            <form action="" class="flex flex-col gap-[24px] w-full md:gap-[60px]">
                <div class="flex flex-col gap-[6px] md:gap-[12px]">
                    <p class="text-[15px] md:text-[20px] font-regular text-white">ФИО</p>
                    <input
                        class="md:w-[752px] w-full h-[42px] md:h-[96px] rounded-[12px] bg-[#2B2B2B] text-[12px] md:text-[24px] font-regular text-[#B8B8B8] pl-[12px] md:pl-[32px]"
                        type="text" placeholder="Иванов Иван Иванович">
                </div>
                <div class="flex flex-col gap-[6px]">
                    <p class="text-[15px] md:text-[20px] font-regular text-white">Email <span class="text-[#FF0000]">*</span></p>
                    <input
                        class="md:w-[752px] w-full h-[42px] md:h-[96px] rounded-[12px] bg-[#2B2B2B] text-[12px] md:text-[24px] font-regular text-[#B8B8B8] pl-[12px] md:pl-[32px]"
                        type="text" placeholder="mail@mail.ru">
                </div>
                <div class="flex flex-col gap-[6px]">
                    <p class="text-[15px] md:text-[20px] font-regular text-white">Ваш телефон</p>
                    <input
                        class="md:w-[752px] w-full h-[42px] md:h-[96px] rounded-[12px] bg-[#2B2B2B] text-[12px] md:text-[24px] font-regular text-[#B8B8B8] pl-[12px] md:pl-[32px]"
                        type="text" placeholder="+ 7 999-999-99-99">
                </div>
                <div class="flex items-center gap-[6px] md:gap-[44px] md:w-[500px] ">
                    <input type="checkbox" class="custom-checkbox" checked>
                    <label class="text-[11px] w-[280px] md:text-[16px] md:w-auto text-white">
                        Я согласен с условиями обработки персональных данных
                    </label>
                </div>
                <button class="w-full md:w-[752px] md:mt-[80px] py-[10px] md:py-[40px] text-[15px] md:text-[32px] font-medium md:font-regular rounded-[10px] md:rounded-[24px] bg-[#FF0000] text-[#060807] relative z-10">
                    Отправить заявку на звонок
                </button>
            </form>
            <img class="w-[830px] h-[494px] md:block hidden" src="./assets/eDr8OaZX4AoQ5KC0a1GEe3i9B5ggXmNTCCFhJLOV 1.png" alt="Машина">
        </div>
    </section>
`

popupBack.className = 'hidden w-full h-screen fixed top-0 left-0 bg-[#0F0F0F]/50 z-[100] flex justify-center items-center'
popup.className = 'pointer-events-auto'

popupBack.appendChild(popup)
body.appendChild(popupBack)

// Находим кнопку закрытия (крестик) внутри popup
const closePopupButton = popup.querySelector('img[alt="./assets/adaptive/close-circle.svg"]')

// Добавляем обработчик закрытия по клику на крестик
if (closePopupButton) {
    closePopupButton.addEventListener('click', () => {
        popupBack.classList.add('hidden')
        body.style.overflow = ''
    })
}

// Обработка открытия модалки по кнопкам с классом OpenPopup
for (let button of openButtons) {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        popupBack.classList.toggle('hidden')
        body.style.overflow = popupBack.classList.contains('hidden') ? '' : 'hidden'
    })
}

// Закрытие модалки при клике на фон (popupBack)
popupBack.addEventListener('click', (e) => {
    if (e.target === popupBack) {
        popupBack.classList.add('hidden')
        body.style.overflow = ''
    }
})