function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// 1. Inicialización (Cámbialo por tu llave)
(function() {
    emailjs.init("GKSjpxxgFcAq8wjei");
})();

// Función para mostrar éxito (la mantenemos como la tenías)
function showSuccess() {
    document.getElementById('contactForm').classList.add('hidden');
    document.getElementById('successMessage').classList.remove('hidden');
}

// Toggle Modal (se mantiene igual)
function toggleModal(show) {
    const modal = document.getElementById('privacy-modal');
    if (show) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// 2. Nueva lógica de manejo de envío
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue

            const btn = document.getElementById('submitBtn');

            btn.innerHTML = '<i class="fas fa-spinner animate-spin mr-2"></i> Procesando...';
            btn.disabled = true;

            emailjs.sendForm('service_s3vj4tx', 'template_corsudt', this)
                .then(() => {
                    showSuccess();
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('Hubo un error al enviar el formulario. Inténtalo de nuevo.');

                    btn.innerHTML = 'Enviar Solicitud';
                    btn.disabled = false;
                });
        });
    }
});