document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            // Toggle the active class on the current item
            const isActive = item.classList.contains('active');
            
            // Remove active class from all items
            faqItems.forEach(faqItem => faqItem.classList.remove('active'));
            
            // Add active class only if it was not previously active
            if (!isActive) {
                item.classList.add('active');
            }
        });

        // Close the FAQ item when clicking the answer
        answer.addEventListener('click', () => {
            item.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hamburger-icon').addEventListener('click', function() {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('visible');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const returnToTopButton = document.getElementById('return-to-top');

    // Function to scroll to the top of the page
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Show or hide the "return to top" button based on scroll position
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.offsetHeight;

        if (scrollTop > 5 && scrollTop + windowHeight < bodyHeight - 5) {
            returnToTopButton.classList.remove('hidden');
        } else {
            returnToTopButton.classList.add('hidden');
        }
    });

    // Scroll to the top when the button is clicked
    returnToTopButton.addEventListener('click', scrollToTop);
});
