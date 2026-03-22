// Переключение темы
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeBtn.textContent = body.classList.contains('dark-mode') ? '☀️ Светлая' : '🌙 Тёмная';
});

// Логика появления элементов при скролле
const observerOptions = {
    threshold: 0.15 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const section = entry.target;
            
            // Показываем секцию
            section.classList.add('show');
            
            // Текст 
            const paragraphs = section.querySelectorAll('p');
            paragraphs.forEach((p, index) => {
                setTimeout(() => p.classList.add('visible'), 300 + (index * 200));
            });

            // Списки 
            const lists = section.querySelectorAll('ul');
            lists.forEach(ul => {
                // Показываем сам список
                setTimeout(() => ul.classList.add('visible'), 300 + (paragraphs.length * 200));
                
                // Показываем элементы списка по очереди
                const items = ul.querySelectorAll('li');
                items.forEach((li, i) => {
                    setTimeout(() => li.classList.add('visible'), 500 + (paragraphs.length * 200) + (i * 100));
                });
            });

            // Карточки проектов
            const cards = section.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
                setTimeout(() => card.classList.add('visible'), 300 + (index * 250));
            });

            // Кнопки
            const buttons = section.querySelectorAll('.btn');
            buttons.forEach((btn, index) => {
                setTimeout(() => btn.classList.add('visible'), 600 + (index * 200));
            });

            // Перестаем следить
            observer.unobserve(section);
        }
    });
}, observerOptions);

// Запуск наблюдения
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Появление фото после загрузки
window.addEventListener('load', () => {
    setTimeout(() => {
        const photoSection = document.querySelector('.photo-section');
        if(photoSection) {
            photoSection.classList.add('show');
        }
    }, 800);
});

// Появление футера
const footerObserver = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        document.querySelector('footer').classList.add('show');
    }
}, { threshold: 0.5 });

const footer = document.querySelector('footer');
if(footer) {
    footerObserver.observe(footer);
}

// Кнопка контакта
const contactBtn = document.getElementById('contact-btn');
if(contactBtn) {
    contactBtn.addEventListener('click', () => {
        alert('Привет!');
    });
}

console.log("Всё работает идеально!");