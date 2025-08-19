// Navigation toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavigation() {
        let current = '';
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Header background change on scroll
    const header = document.querySelector('.header');
    
    function updateHeaderOnScroll() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            header.style.backdropFilter = 'none';
        }
    }

    window.addEventListener('scroll', updateHeaderOnScroll);

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe all resource cards and sections
    document.querySelectorAll('.resource-card, .contact-card, .section').forEach(el => {
        observer.observe(el);
    });

    // Add loading states for external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const originalText = this.textContent;
            this.innerHTML = '<span class="loading"></span> Abrindo...';
            
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        });
    });

    // Search functionality (bonus feature)
    function createSearchBox() {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <div class="search-box">
                <input type="text" id="search-input" placeholder="Buscar recursos..." />
                <button id="search-btn"><i class="fas fa-search"></i></button>
            </div>
        `;

        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.appendChild(searchContainer);
        }

        // Search functionality
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');

        function performSearch() {
            const searchTerm = searchInput.value.toLowerCase();
            const resourceCards = document.querySelectorAll('.resource-card');

            resourceCards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                const cardParent = card.parentElement;
                
                if (cardText.includes(searchTerm) || searchTerm === '') {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });

            // Show "no results" message if needed
            const visibleCards = Array.from(resourceCards).filter(card => 
                card.style.display !== 'none'
            );

            if (visibleCards.length === 0 && searchTerm !== '') {
                showNoResultsMessage();
            } else {
                hideNoResultsMessage();
            }
        }

        function showNoResultsMessage() {
            const existingMessage = document.querySelector('.no-results');
            if (!existingMessage) {
                const message = document.createElement('div');
                message.className = 'no-results';
                message.innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: #666;">
                        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                        <h3>Nenhum resultado encontrado</h3>
                        <p>Tente usar termos diferentes para sua busca.</p>
                    </div>
                `;
                document.querySelector('.resources-grid').appendChild(message);
            }
        }

        function hideNoResultsMessage() {
            const message = document.querySelector('.no-results');
            if (message) {
                message.remove();
            }
        }

        if (searchInput && searchBtn) {
            searchInput.addEventListener('input', performSearch);
            searchBtn.addEventListener('click', performSearch);
            
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        }
    }

    // Create search box
    createSearchBox();

    // Statistics counter animation
    function animateCounters() {
        const stats = [
            { element: '.stat-recursos', target: 15, label: 'Recursos Disponíveis' },
            { element: '.stat-categorias', target: 4, label: 'Categorias' },
            { element: '.stat-projetos', target: 8, label: 'Projetos de Robótica' }
        ];

        const statsContainer = document.createElement('div');
        statsContainer.className = 'stats-container';
        statsContainer.innerHTML = `
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number stat-recursos">0</div>
                    <div class="stat-label">Recursos Disponíveis</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number stat-categorias">0</div>
                    <div class="stat-label">Categorias</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number stat-projetos">0</div>
                    <div class="stat-label">Projetos de Robótica</div>
                </div>
            </div>
        `;

        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.appendChild(statsContainer);
        }

        // Animate numbers when in view
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    stats.forEach(stat => {
                        const element = document.querySelector(stat.element);
                        if (element && !element.classList.contains('animated')) {
                            animateNumber(element, stat.target);
                            element.classList.add('animated');
                        }
                    });
                }
            });
        });

        statsObserver.observe(statsContainer);

        function animateNumber(element, target) {
            let current = 0;
            const increment = target / 30;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current);
            }, 50);
        }
    }

    // Add stats animation
    animateCounters();

    // Add CSS for search and stats
    const additionalStyles = `
        <style>
            .search-container {
                margin-top: 2rem;
                display: flex;
                justify-content: center;
            }

            .search-box {
                display: flex;
                background: white;
                border-radius: 25px;
                overflow: hidden;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                max-width: 400px;
                width: 100%;
            }

            #search-input {
                flex: 1;
                padding: 12px 20px;
                border: none;
                outline: none;
                font-size: 1rem;
            }

            #search-btn {
                background: #ffd700;
                border: none;
                padding: 12px 20px;
                cursor: pointer;
                transition: background 0.3s ease;
            }

            #search-btn:hover {
                background: #ffed4e;
            }

            .stats-container {
                margin-top: 3rem;
                background: rgba(255,255,255,0.1);
                border-radius: 15px;
                padding: 2rem;
                backdrop-filter: blur(10px);
            }

            .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 2rem;
                text-align: center;
            }

            .stat-item {
                color: white;
            }

            .stat-number {
                font-size: 3rem;
                font-weight: bold;
                color: #ffd700;
                margin-bottom: 0.5rem;
            }

            .stat-label {
                font-size: 1rem;
                opacity: 0.9;
            }

            @media (max-width: 768px) {
                .search-box {
                    margin: 0 1rem;
                }

                .stats-grid {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }

                .stat-number {
                    font-size: 2rem;
                }
            }
        </style>
    `;

    document.head.insertAdjacentHTML('beforeend', additionalStyles);

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;

    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add hover effects to back to top button
    backToTopButton.addEventListener('mouseenter', function() {
        this.style.background = '#5a6fd8';
        this.style.transform = 'translateY(-3px)';
    });

    backToTopButton.addEventListener('mouseleave', function() {
        this.style.background = '#667eea';
        this.style.transform = 'translateY(0)';
    });

    console.log('Portal de Programação e Robótica carregado com sucesso!');
    console.log('Professor: Davi Antonino Nunes da Silva');
    console.log('Localização: Sertãozinho - SP');
});
