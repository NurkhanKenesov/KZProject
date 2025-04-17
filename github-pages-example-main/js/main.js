// Testimonials data
const testimonials = [
    {
        name: 'Айдар Қасымов',
        position: 'Бас директор',
        image: '../images/testimonials/person1.jpg',
        text: 'Tulpar компаниясымен жұмыс істеу өте жағымды болды. Олардың кәсіби деңгейі жоғары.'
    },
    {
        name: 'Әсел Мұхтарова',
        position: 'Жоба менеджері',
        image: '../images/testimonials/person2.jpg',
        text: 'Біз бірнеше жобада бірге жұмыс істедік. Нәтижесі әрдайым керемет.'
    },
    {
        name: 'Бауыржан Әлиев',
        position: 'Техникалық директор',
        image: '../images/testimonials/person3.jpg',
        text: 'Жоғары сапалы қызмет көрсету және кәсіби команда.'
    },
    {
        name: 'Гүлнар Сәрсенова',
        position: 'Маркетинг менеджер',
        image: '../images/testimonials/person4.jpg',
        text: 'Тиімді шешімдер мен инновациялық тәсілдер ұсынады.'
    }
];

// Populate testimonials
function populateTestimonials() {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial-item';
        testimonialElement.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
            <h3>${testimonial.name}</h3>
            <p class="position">${testimonial.position}</p>
            <p class="testimonial-text">${testimonial.text}</p>
        `;
        testimonialsGrid.appendChild(testimonialElement);
    });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Хабарлама жіберілді! Біз сізбен жақын арада байланысамыз.');
        
        // Reset form
        this.reset();
    });
}

// Scroll animation for elements
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll
document.querySelectorAll('.service-item, .step, .testimonial-item').forEach(el => {
    observer.observe(el);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateTestimonials();
}); 