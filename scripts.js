let currentSlide = 0; 

// Mover el carrusel de acuerdo a la dirección
function moveSlide(direction) {
    const carousel = document.getElementById("carousel");
    const totalSlides = carousel.children.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    carousel.style.transform = `translateY(-${currentSlide * 100}%)`;
    carousel.style.transition = "transform 0.6s ease"; // Animación suave
}

// Mostrar detalles del evento
function showEvent(index) {
    const eventDetail = document.getElementById('event-detail');
    const eventInfo = document.getElementById('event-info');
    const images = document.querySelectorAll('.carousel-item img');
    const descriptions = document.querySelectorAll('.carousel-item .event-description');

    const eventImage = eventInfo.querySelector('img');
    const eventDescription = eventInfo.querySelector('p');

    eventImage.src = images[index].src;
    eventDescription.innerHTML = descriptions[index].innerHTML; // Mostrar contenido completo

    eventDetail.style.display = 'block';
}

// Configurar eventos para clic en imágenes
function setupImageClickHandlers() {
    const images = document.querySelectorAll('.carousel-item img');

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            moveSlide(1); 
            showEvent(currentSlide); 
        });
    });
}

// Alternar la música
function toggleMusic() {
    const music = document.getElementById('background-music');
    const musicIcon = document.getElementById('music-icon');

    if (music.paused) {
        music.play().catch(error => console.log("Error al reproducir la música:", error));
        musicIcon.textContent = '🎶';
    } else {
        music.pause();
        musicIcon.textContent = '🔇';
    }
}

// Navegar entre imágenes
function prevImage() {
    const totalSlides = document.getElementById("carousel").children.length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    moveSlide(-1);
}

function nextImage() {
    const totalSlides = document.getElementById("carousel").children.length;
    currentSlide = (currentSlide + 1) % totalSlides;
    moveSlide(1);
}

// Configurar eventos al cargar
document.addEventListener('DOMContentLoaded', function () {
    const upArrow = document.querySelector('.up');
    const downArrow = document.querySelector('.down');

    if (upArrow) {
        upArrow.addEventListener('click', function () {
            prevImage();
        });
    }

    if (downArrow) {
        downArrow.addEventListener('click', function () {
            nextImage();
        });
    }

    // Configurar clic en imágenes
    setupImageClickHandlers();
});

// Mensajes en Vivo
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    if (messageText) {
        const messages = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = messageText;
        messages.appendChild(messageElement);
        messageInput.value = '';
    }
}

