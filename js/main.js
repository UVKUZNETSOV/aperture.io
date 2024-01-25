const animatedObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated-show');
    }
  });
});

const motionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('motion-show');
    }
  });
});

const animated = document.querySelectorAll('.animated');
animated.forEach((el) => animatedObserver.observe(el));

const motion = document.querySelectorAll('.motion');
motion.forEach((el) => motionObserver.observe(el));

const burger = document.querySelector(".menu__burger-btn");
burger.addEventListener("click", (event) => {
  document.querySelector(".menu__burger-btn").classList.toggle('active');
  document.querySelector(".menu ul").classList.toggle('active');
});