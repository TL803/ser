const serviceIntegrationContainer = document.getElementById('serviceIntegrationContainer');

const serviceArr = [
    { name: 'Диагностика', img: '------------------- 1.svg' },
    { name: 'Ремонт двигателя', img: '---------------- (1).svg' },
    { name: 'Техническое обслуживание', img: '------------------------- 1.svg' },
    { name: 'Тормозная система', img: '------------------ 1.svg' },
    { name: 'Замена масла', img: '------------- 1.svg' },
    { name: 'Замена фильтров', img: '------------------------ 1.svg' },
    { name: 'Шиномонтаж', img: '------------ 1.svg' },
    { name: 'Ремонт подвески', img: '-------------------------------------- (1) 1.svg' }
];

// Очищаем контейнер и добавляем все карточки
serviceIntegrationContainer.innerHTML = serviceArr.map(proposal => `
    <div class="bg-[#0F0F0F] OpenConsultationPopup cursor-pointer w-[305px] h-[318px] py-[28px] rounded-[16px] flex flex-col items-center justify-between">
        <img src="./assets/services/${proposal.img}" alt="${proposal.name}" class="w-[180px] h-[180px] mb-4">
        <p class="text-white text-center text-2xl font-medium">${proposal.name}</p>
    </div>
`).join('');