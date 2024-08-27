const games = {
  "dread-signal": {
    items: [
      { type: "video", src: "https://www.youtube.com/embed/9NLfB7EhY6U" },
      { type: "image", img: "assets/legacy/dreadsignal/1.png" },
      { type: "image", img: "assets/legacy/dreadsignal/2.png" }
    ],
    text: "Dread Signal is a singleplayer story mode conceptualization of the Scram series. It was the first ever version of Scram. Development started in 2014 and was scrapped in 2015. The basic storyline is where you wake up as a character named 'Bradley' and later make new friends throughout the story. The mutant virus was caused by an alien invasion and the goal is to progress through the story."
  },
  "prototype": {
    items: [
      { type: "video", src: "https://www.youtube.com/embed/1GdU3NXXrDk" },
      { type: "image", img: "assets/legacy/prototype/1.png" },
      { type: "image", img: "assets/legacy/prototype/2.png" }
    ],
    text: "The prototype was built in 2016 and later reformed to a completely different art style in 2017. It was meant to resemble a cartoony, 'Borderlands' inspired art style. The game is a rushed concept and lacks the infrastructure and complete mechanics of the following Scram sequels."
  },
  "original": {
    items: [
      { type: "video", src: "https://www.youtube.com/embed/9qrNw4KhbtU" },
      { type: "image", img: "assets/legacy/original/1.png" },
      { type: "image", img: "assets/legacy/original/2.png" }
    ],
    text: "The original Scram was completely rewritten and revamped in 2017 and was later published on Steam in 2018. The game's brand new art style was meant to resemble a combination of 'South Park' and 'Madness Combat' influenced aesthetics. Offensive humor and silly elements have also been added to the game to make it less serious and more controversial. The game was a massive free to play hit as it has reached over 1 million downloads on Steam."
  },
  "remastered": {
    items: [
      { type: "video", src: "https://www.youtube.com/embed/hd-s3vtqUUA" },
      { type: "image", img: "assets/legacy/remastered/1.png" },
      { type: "image", img: "assets/legacy/remastered/2.png" }
    ],
    text: "The remastered version was intended to be a parody version of the original game by making it overly serious with realistic graphics as an attempt to prank the fans. It was also intended to significantly improve the graphics and gameplay mechanics. Unfortunately, the game did not align with the original game's vision and thus received negative backlash from the community. The project was completed in a couple of months and development has been halted, and thus Scram 2 development has begun."
  }
};

document.querySelectorAll('.game-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const game = this.getAttribute('data-game');
    updateContent(game);

    // Remove 'selected' class from all links
    document.querySelectorAll('.game-link').forEach(link => link.classList.remove('selected'));

    // Add 'selected' class to the clicked link
    this.classList.add('selected');
  });
});

function updateContent(game) {
  const carousel = document.querySelector('.carousel');
  const bodyText = document.getElementById('carousel-text');

  // Preserve the carousel controls
  const prevControl = document.querySelector('.carousel-control.prev');
  const nextControl = document.querySelector('.carousel-control.next');

  // Clear existing carousel items
  carousel.querySelectorAll('.carousel-item').forEach(item => item.remove());

  // Add new carousel items
  games[game].items.forEach(item => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';

    if (item.type === "video") {
      const videoContainer = document.createElement('div');
      videoContainer.className = 'video-container';

      const iframe = document.createElement('iframe');
      iframe.src = item.src;
      iframe.title = "YouTube video player";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;

      videoContainer.appendChild(iframe);
      carouselItem.appendChild(videoContainer);
    } else if (item.type === "image") {
      const img = document.createElement('img');
      img.src = item.img;
      img.alt = item.title || '';

      carouselItem.appendChild(img);
    }

    carousel.appendChild(carouselItem);
  });

  // Reinsert the carousel controls
  carousel.appendChild(prevControl);
  carousel.appendChild(nextControl);

  // Update body text
  bodyText.textContent = games[game].text;

  // Reset carousel to first item
  currentSlideIndex = 0;
  updateCarousel();
}

function updateCarousel() {
  const items = document.querySelectorAll('.carousel-item');
  items.forEach((item, index) => {
    item.style.display = index === currentSlideIndex ? 'block' : 'none';
  });

  const title = items[currentSlideIndex].getAttribute('data-title');
  const text = items[currentSlideIndex].getAttribute('data-text');
  document.getElementById('carousel-title').textContent = title;
  document.getElementById('carousel-text').textContent = text;
}

let currentSlideIndex = 0;

function prevSlide() {
  const items = document.querySelectorAll('.carousel-item');
  currentSlideIndex = (currentSlideIndex - 1 + items.length) % items.length;
  updateCarousel();
}

function nextSlide() {
  const items = document.querySelectorAll('.carousel-item');
  currentSlideIndex = (currentSlideIndex + 1) % items.length;
  updateCarousel();
}

document.addEventListener('DOMContentLoaded', function() {
  const submenuItems = document.querySelectorAll('.submenu-bar a');

  // Set 'dread signal' as the default selected item
  const defaultSelected = document.querySelector('.submenu-bar a[data-game="dread-signal"]');
  if (defaultSelected) {
    defaultSelected.classList.add('selected');
  }

  submenuItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove 'selected' class from all submenu items
      submenuItems.forEach(i => i.classList.remove('selected'));
      
      // Add 'selected' class to the clicked item
      this.classList.add('selected');
    });
  });
  updateCarousel();
});