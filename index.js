
gsap.to("#navbar", {
    top: "-1000px", 
    scrollTrigger: {
        trigger: ".content",
        start: "top top", 
        end: "bottom top", 
        scrub: true 
        
    }
});

$(document).ready(function() {
    let currentIndex = 0;
    const $images = $(".image-container img");
    const $indicators = $(".indicator");

    // Function to update slideshow
    function updateSlideshow() {
        $images.hide();
        $images.eq(currentIndex).show();
        $indicators.removeClass("active");
        $indicators.eq(currentIndex).addClass("active");
    }

    // Function to start the slideshow interval
    function startSlideshow() {
        return setInterval(function() {
            currentIndex = (currentIndex + 1) % $images.length;
            updateSlideshow();
        }, 3000); // Change image every 3 seconds (adjust as needed)
    }

    // Start the slideshow
    let slideshowInterval = startSlideshow();

    // Handle indicator clicks
    $indicators.click(function() {
        currentIndex = $(this).index();
        updateSlideshow();
        clearInterval(slideshowInterval); // Stop the current slideshow interval
        slideshowInterval = startSlideshow(); // Start a new slideshow interval
    });
});


//  document.addEventListener("DOMContentLoaded", function() {
//      const eventLinks = document.querySelectorAll(".event-link");
//      const eventImage = document.getElementById("event-image");
//      const eventTitle = document.getElementById("event-title");
//      const eventDescription = document.getElementById("event-description");

//      eventLinks.forEach(link => {
//          link.addEventListener("click", function(event) {
//              event.preventDefault();
//              const imageUrl = this.getAttribute("data-image");
//             const title = this.getAttribute("data-title");
//              const description = this.getAttribute("data-description");
//              eventImage.src = imageUrl;
//              eventTitle.textContent = title;
//           eventDescription.textContent = description;
//         });
//      });
//  });

document.addEventListener("DOMContentLoaded", function() {
    const eventLinks = document.querySelectorAll(".event-link");
    const eventImage = document.getElementById("event-image");
    const eventTitle = document.getElementById("event-title");
    const eventDescription = document.getElementById("event-description");

    eventLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            // Remove 'active' class from all links
            eventLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the clicked link
            this.classList.add('active');

            // Update the image and description
            const imageUrl = this.getAttribute("data-image");
            const title = this.getAttribute("data-title");
            const description = this.getAttribute("data-description");
            eventImage.src = imageUrl;
            eventTitle.textContent = title;
            eventDescription.textContent = description;
        });

        // Add event listener to remove 'active' class when clicking outside the links
        document.addEventListener("click", function(event) {
            if (!event.target.classList.contains("event-link")) {
                eventLinks.forEach(link => {
                    link.classList.remove('active');
                });
            }
        });
    });
});


// Function to check scroll position and display/hide the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
}

// Smooth scrolling function
function scrollToTop() {
    // Scroll to the top of the document smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

 const slider = document.getElementById('slider');
 const container = document.querySelector('.home-fourth-container');

 slider.addEventListener('input', function() {
    const value = parseInt(this.value);     const containerWidth = container.offsetWidth;
     const cardWidth = container.querySelector('.home-fourth-container-card').offsetWidth;
     const maxScroll = (value - 1) * cardWidth;
    container.style.transition = 'scroll-left 0.3s ease'; // Apply smooth transition
     container.scrollLeft = maxScroll;
});

 // Reset transition after the transition ends to avoid affecting other scrolls
 container.addEventListener('transitionend', function() {
     container.style.transition = 'none';
});
