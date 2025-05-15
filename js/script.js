document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle (Desktop and Mobile)
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check saved theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    themeToggleMobile.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Search Toggle (Mobile/Tablet)
    const searchToggle = document.getElementById('searchToggle');
    const searchForm = document.getElementById('searchForm');

    searchToggle?.addEventListener('click', () => {
        searchForm.classList.toggle('active');
        if (searchForm.classList.contains('active')) {
            document.getElementById('searchInput').focus();
        }
    });

    // Contact Form
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Sample posts data (replace with your actual posts)
    const posts = [
        { title: 'Top 5 AI Tools for 2025', url: 'post.html' },
        { title: 'How to Fix Wi-Fi Issues', url: 'post.html' },
        { title: 'Best Budget Phones Under $300', url: 'post.html' }
    ];

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';

        if (query) {
            const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(query));
            if (filteredPosts.length > 0) {
                filteredPosts.forEach(post => {
                    const link = document.createElement('a');
                    link.href = post.url;
                    link.textContent = post.title;
                    searchResults.appendChild(link);
                });
                searchResults.style.display = 'block';
            }
        }
    });

    // Hide search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target) && !searchToggle.contains(e.target)) {
            searchResults.style.display = 'none';
            searchForm.classList.remove('active');
        }
    });

    // Scroll to Top
    const scrollToTop = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTop.classList.add('show');
        } else {
            scrollToTop.classList.remove('show');
        }
    });

    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});