document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openEnvelopeBtn');
    const letter = document.getElementById('loveLetter');
    const secretBtn = document.getElementById('showSecretMsgBtn');
    const secretMsg = document.getElementById('secretMessage');
    const note = document.querySelector('.note');
    const heartContainer = document.getElementById('heartContainer');

    openBtn.addEventListener('click', () => {
        letter.classList.remove('hidden');
        letter.classList.add('visible');
        openBtn.style.display = 'none';
        note.style.display = 'none';
    });

    secretBtn.addEventListener('click', () => {
        secretMsg.classList.remove('hidden');
        secretBtn.style.display = 'none';
        startHeartAnimation(); // Iniciar la animación del corazón
    });

    function startHeartAnimation() {
        setInterval(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️ !'; // Corazón y signo de exclamación
            heartContainer.appendChild(heart);

            // Eliminar el corazón después de 2 segundos
            setTimeout(() => {
                heart.remove();
            }, 1000);

            // Agregar evento de clic al corazón
            heart.addEventListener('click', () => {
                alert("¡Has clicado en el corazón! Aquí hay otro mensaje secreto.");
                // Aquí puedes agregar otro mensaje secreto o cualquier otra acción
                heart.remove(); // Eliminar el corazón al hacer clic
            });
        }, 2000); // Cada 2 segundos
    }
});
