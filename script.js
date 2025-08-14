 const menuToggle = document.getElementById('menu-btn');
    const menu = document.querySelector('.menu');

        menuToggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        });

        document.addEventListener('click', (event) => {
        if (
            menu.classList.contains('open') &&
            !menu.contains(event.target) &&
            !event.target.closest('#menu-btn')
        ) {
            menu.classList.remove('open');
        }
        });

// Close menu when clicking the X button
const exitBtn = document.getElementById('exit-btn');
if (exitBtn) {
  exitBtn.addEventListener('click', (e) => {
    e.stopPropagation();       // optional, avoids outside-click handler firing first
    menu.classList.remove('open');
  });
}