const aboutUsIntegrationContainer = document.getElementById('aboutUsIntegrationContainer')

const aboutUsArr = [
    {
        icon: "Vector (5).svg",
        title: "Цена",
        description: "Предлагаем демократичные цены без скрытых доплат.",
    },
    {
        icon: "Frame 2.svg", // Путь к иконке "Официальный сервис"
        title: "Официальный сервис",
        description: "Мы официальный дилер и обслуживаем по гарантии 11 брендов, используем только оригинальные запчасти.",
    },
    {
        icon: "Vector (6).svg", // Путь к иконке "Индивидуальный подход"
        title: "Индивидуальный подход",
        description: "Учитываем Ваши пожелания, предлагаем гибкие условия и персональные рекомендации.",
    },
    {
        icon: "Vector (7).svg", // Путь к иконке "Безопасность"
        title: "Безопасность",
        description: "Вашего автомобиля — наш приоритет, поэтому мы предоставляем гарантию на весь ассортимент работ.",
    },
    {
        icon: "Vector (8).svg", // Путь к иконке "Удобство"
        title: "Удобство",
        description: "Удобное расположение и гибкий график работы для Вашего комфортного визита.",
    },
    {
        icon: "Vector (9).svg", // Путь к иконке "Уверенность в качестве"
        title: "Уверенность в качестве",
        description: "Строгий контроль на каждом этапе работы, Ваш автомобиль в надежных руках наших опытных мастеров.",
    },
];


aboutUsIntegrationContainer.innerHTML = aboutUsArr.map(item => `
                    <div class="md:w-[527px] md:h-[458px] box-border md:text-center rounded-[12px] px-[32px] py-[41px] bg-white flex md:flex-col gap-[20px] md:gap-[0] justify-center items-center 
            md:shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
                    <img class='w-[60px] md:w-auto md:mb-[60px]' src="./assets/aboutUs/${item.icon}" alt="./assets/aboutUs/${item.icon}">
                    <div>
                    <p class='text-[20px] md:text-[36px] md:mb-[36px] font-regular'>${item.title}</p>
                    <span class='text-[15px] md:text-[20px] font-regular'>${item.description}</span>
                    </div>
                </div>
    `).join('')