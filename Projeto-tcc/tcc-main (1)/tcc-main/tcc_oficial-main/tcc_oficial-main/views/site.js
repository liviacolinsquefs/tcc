

// --- Lógica para o Menu Mobile ---
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // --- Lógica Geral da Página ---
        document.addEventListener('DOMContentLoaded', function () {
            // --- Lógica para o Slider de Imagens ---
            const track = document.getElementById('slider-track');
            const slides = Array.from(track.children);
            const nextButton = document.getElementById('nextBtn');
            const prevButton = document.getElementById('prevBtn');
            const dotsNav = document.getElementById('slider-dots');
            
            if (slides.length > 0) {
                let slideWidth = slides[0].getBoundingClientRect().width;

                slides.forEach((slide, index) => {
                    const dot = document.createElement('button');
                    dot.classList.add('w-3', 'h-3', 'rounded-full', 'transition', 'duration-300');
                    dot.addEventListener('click', () => goToSlide(index));
                    dotsNav.appendChild(dot);
                });

                const dots = Array.from(dotsNav.children);
                let currentIndex = 0;

                const goToSlide = (targetIndex) => {
                    if (targetIndex < 0) targetIndex = slides.length - 1;
                    else if (targetIndex >= slides.length) targetIndex = 0;
                    
                    track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
                    updateDots(currentIndex, targetIndex);
                    currentIndex = targetIndex;
                };

                const updateDots = (oldIndex, newIndex) => {
                    if(dots[oldIndex]) dots[oldIndex].classList.replace('bg-blue-600', 'bg-gray-400');
                    if(dots[newIndex]) dots[newIndex].classList.replace('bg-gray-400', 'bg-blue-600');
                };
                
                nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));
                prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));

                let autoSlideInterval = setInterval(() => goToSlide(currentIndex + 1), 5000);

                track.parentElement.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
                track.parentElement.addEventListener('mouseleave', () => {
                    autoSlideInterval = setInterval(() => goToSlide(currentIndex + 1), 5000);
                });

                goToSlide(0);

                window.addEventListener('resize', () => {
                    slideWidth = slides[0].getBoundingClientRect().width;
                    track.style.transition = 'none';
                    track.style.transform = 'translateX(-' + slideWidth * currentIndex + 'px)';
                    setTimeout(() => {
                        track.style.transition = 'transform 0.5s ease-in-out';
                    }, 50);
                });
            }

            // --- Lógica para os Gráficos do Dashboard ---
            const energyCtx = document.getElementById('energyChart');
            if (energyCtx) {
                new Chart(energyCtx, {
                    type: 'line',
                    data: {
                        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                        datasets: [{
                            label: 'Consumo (kWh)',
                            data: [120, 135, 125, 140, 152, 110, 105],
                            borderColor: 'rgba(59, 130, 246, 1)',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            fill: true,
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: { y: { beginAtZero: true } }
                    }
                });
            }
        });
       // --- Lógica para o Menu Mobile ---
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // --- Lógica Geral da Página ---
        document.addEventListener('DOMContentLoaded', function () {
            // --- Lógica para o Slider de Imagens ---
            const track = document.getElementById('slider-track');
            const slides = Array.from(track.children);
            const nextButton = document.getElementById('nextBtn');
            const prevButton = document.getElementById('prevBtn');
            const dotsNav = document.getElementById('slider-dots');
            
            if (slides.length > 0) {
                let slideWidth = slides[0].getBoundingClientRect().width;

                slides.forEach((slide, index) => {
                    const dot = document.createElement('button');
                    dot.classList.add('w-3', 'h-3', 'rounded-full', 'transition', 'duration-300');
                    dot.addEventListener('click', () => goToSlide(index));
                    dotsNav.appendChild(dot);
                });

                const dots = Array.from(dotsNav.children);
                let currentIndex = 0;

                const goToSlide = (targetIndex) => {
                    if (targetIndex < 0) targetIndex = slides.length - 1;
                    else if (targetIndex >= slides.length) targetIndex = 0;
                    
                    track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
                    updateDots(currentIndex, targetIndex);
                    currentIndex = targetIndex;
                };

                const updateDots = (oldIndex, newIndex) => {
                    if(dots[oldIndex]) dots[oldIndex].classList.replace('bg-blue-600', 'bg-gray-400');
                    if(dots[newIndex]) dots[newIndex].classList.replace('bg-gray-400', 'bg-blue-600');
                };
                
                nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));
                prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));

                let autoSlideInterval = setInterval(() => goToSlide(currentIndex + 1), 5000);

                track.parentElement.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
                track.parentElement.addEventListener('mouseleave', () => {
                    autoSlideInterval = setInterval(() => goToSlide(currentIndex + 1), 5000);
                });

                goToSlide(0);

                window.addEventListener('resize', () => {
                    slideWidth = slides[0].getBoundingClientRect().width;
                    track.style.transition = 'none';
                    track.style.transform = 'translateX(-' + slideWidth * currentIndex + 'px)';
                    setTimeout(() => {
                        track.style.transition = 'transform 0.5s ease-in-out';
                    }, 50);
                });
            }

            // --- Lógica para os Gráficos do Dashboard ---
            const energyCtx = document.getElementById('energyChart');
            if (energyCtx) {
                new Chart(energyCtx, {
                    type: 'line',
                    data: {
                        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                        datasets: [{
                            label: 'Consumo (kWh)',
                            data: [120, 135, 125, 140, 152, 110, 105],
                            borderColor: 'rgba(59, 130, 246, 1)',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            fill: true,
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: { y: { beginAtZero: true } }
                    }
                });
            }
        });
        
   /* </script>
        <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
        </div>
        </div>
    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script&gt;

    <script>
        new window.VLibras.Widget('https://vlibras.gov.br/app&#39;);
    </script>*/