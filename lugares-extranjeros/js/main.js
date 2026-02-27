// This file contains the functionality for the project, including event listeners and dynamic behavior for the interface.

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal');
    const modalHero = document.getElementById('modal-hero');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeBtn = document.getElementById('modal-close');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.dataset.title;
            const desc = card.dataset.desc;
            const img = card.dataset.img;

            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modalHero.style.backgroundImage = `url('${img}')`;
            modal.style.display = 'flex';
            setTimeout(() => modal.style.opacity = 1, 10);
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (ev) => {
        if (ev.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});