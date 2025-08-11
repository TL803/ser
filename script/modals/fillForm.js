const body = document.body

const popupBack = document.createElement('div')
const popup = document.createElement('div')
const openButtons = document.getElementsByClassName('OpenPopup')

popup.innerHTML = `
    <section class='container-main bg-[#060807] p-[48px] rounded-[32px] relative overflow-hidden z-10'>
        <div class="absolute top-[-200px] -left-40 w-[500px] h-[500px] rounded-full bg-[#FF0000]/50 blur-[150px] z-[-1]  pointer-events-none"></div>
        <div class="absolute top-[300px] right-[-150px] w-[500px] h-[500px] rounded-full bg-[#FF0000]/50 blur-[150px] z-[-1]  pointer-events-none"></div>
        <div class="absolute bottom-[-300px] left-[800px] w-[500px] h-[500px] rounded-full bg-[#FF0000]/50 blur-[150px]  z-[-1] pointer-events-none"></div>

        <div class="text-center">
            <h1 class="text-white text-[70px] font-medium">Остались вопросы?</h1>
            <h2 class="text-white text-[48px] font-medium">Заполни форму и получи <span class="text-[#FF0000]">бесплатную консультацию</span></h2>
        </div>

        <div class="flex items-center justify-between mt-[60px]">
            <form action="" class="flex flex-col gap-[60px]">
                <div class="flex flex-col gap-[12px]">
                    <p class="text-[20px] font-regular text-white">ФИО</p>
                    <input
                        class="w-[752px] h-[96px] rounded-[12px] bg-[#2B2B2B] text-[24px] font-regular text-[#B8B8B8] pl-[32px]"
                        type="text" placeholder="Иванов Иван Иванович">
                </div>
                <div class="flex flex-col gap-[12px]">
                    <p class="text-[20px] font-regular text-white">Email <span class="text-[#FF0000]">*</span></p>
                    <input
                        class="w-[752px] h-[96px] rounded-[12px] bg-[#2B2B2B] text-[24px] font-regular text-[#B8B8B8] pl-[32px]"
                        type="text" placeholder="mail@mail.ru">
                </div>
                <div class="flex flex-col gap-[12px]">
                    <p class="text-[20px] font-regular text-white">Ваш телефон</p>
                    <input
                        class="w-[752px] h-[96px] rounded-[12px] bg-[#2B2B2B] text-[24px] font-regular text-[#B8B8B8] pl-[32px]"
                        type="text" placeholder="+ 7 999-999-99-99">
                </div>
                <div class="flex items-center gap-[12px] md:gap-[44px]">
                    <input type="checkbox" class="custom-checkbox" checked>
                    <label class="text-[10px] w-[280px] md:text-[16px] md:w-auto text-white">
                        Я согласен с условиями обработки персональных данных
                    </label>
                </div>
                <button class="w-full mt-[80px] py-[40px] text-[32px] font-regular rounded-[24px] bg-[#FF0000] text-[#060807] relative z-10">
                    Получить предложение
                </button>
            </form>
            <img class="w-[830px] h-[494px]" src="./assets/eDr8OaZX4AoQ5KC0a1GEe3i9B5ggXmNTCCFhJLOV 1.png" alt="Машина">
        </div>
    </section>
`

popupBack.className = 'hidden w-full h-screen fixed top-0 left-0 bg-[#0F0F0F]/50 z-[100] flex justify-center items-center'

popup.className = 'pointer-events-auto'



popupBack.appendChild(popup)
body.appendChild(popupBack)



for (let button of openButtons) {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        popupBack.classList.toggle('hidden')
        body.style.overflow = popupBack.classList.contains('hidden') ? '' : 'hidden'
    })
}

popupBack.addEventListener('click', (e) => {
    if (e.target === popupBack) {
        popupBack.classList.add('hidden')
        body.style.overflow = ''
    }
})