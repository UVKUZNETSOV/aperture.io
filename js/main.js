function onEntry(entry){
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('gallery__info-show');
        }
        if (change.isIntersecting) {
            change.target.classList.add('gallery__photo-show');
        }
        if (change.isIntersecting) {
            change.target.classList.add('mountain__info-show');
        }
        if (change.isIntersecting) {
            change.target.classList.add('main__social-show');
        }
        if (change.isIntersecting) {
            change.target.classList.add('mountain__social-show');
        }
        if (change.isIntersecting) {
            change.target.classList.add('stuff__info-show');
        }
        if (change.isIntersecting) {
            change.target.classList.add('stuff__social-icons-show');
        }
        if (change.isIntersecting) {
            change.target.classList.add('plant__info-show');
        }
        if (change.isIntersecting) {
            change.target.classList.add('plant__social-show');
        }
        if (change.isIntersecting) {
            change.target.classList.add('starfall__info-show');
        }
        if (change.isIntersecting) {
            change.target.classList.add('starfall__social-show');
        }
        if (change.isIntersecting) {
            change.target.classList.add('main__info-show');
        }
        if (change.isIntersecting) {
            change.target.classList.add('catchphrase__title-show');
        }
        if (change.isIntersecting) {
            change.target.classList.add('catchphrase__text-show');
        }
    });
}

let options = {
    threshold: [0.5]
};

let observer = new IntersectionObserver(onEntry, options);

let element = document.querySelectorAll('.gallery__info');
let element1 = document.querySelectorAll('.photo-1');
let element2 = document.querySelectorAll('.photo-2');
let element3 = document.querySelectorAll('.photo-3');
let element4 = document.querySelectorAll('.photo-4');
let element5 = document.querySelectorAll('.mountain__info');
let element6 = document.querySelectorAll('.main__social');
let element7 = document.querySelectorAll('.mountain__social');
let element8 = document.querySelectorAll('.stuff__info');
let element9 = document.querySelectorAll('.stuff__social-icons');
let element10 = document.querySelectorAll('.plant__info');
let element11 = document.querySelectorAll('.plant__social');
let element12 = document.querySelectorAll('.starfall__info');
let element13 = document.querySelectorAll('.starfall__social');
let element14 = document.querySelectorAll('.main__info');
let element15 = document.querySelectorAll('.catchphrase__title');
let element16 = document.querySelectorAll('.catchphrase__text');
let element17 = document.querySelectorAll('.catchphrase__text');

for (let elm of element) {
    observer.observe(elm);
}

for (let elm of element1) {
    observer.observe(elm);
}

for (let elm of element2) {
    observer.observe(elm);
}

for (let elm of element3) {
    observer.observe(elm);
}

for (let elm of element4) {
    observer.observe(elm);
}

for (let elm of element5) {
    observer.observe(elm);
}

for (let elm of element6) {
    observer.observe(elm);
}

for (let elm of element7) {
    observer.observe(elm);
}

for (let elm of element8) {
    observer.observe(elm);
}

for (let elm of element9) {
    observer.observe(elm);
}

for (let elm of element10) {
    observer.observe(elm);
}

for (let elm of element11) {
    observer.observe(elm);
}

for (let elm of element12) {
    observer.observe(elm);
}

for (let elm of element13) {
    observer.observe(elm);
}

for (let elm of element14) {
    observer.observe(elm);
}

for (let elm of element15) {
    observer.observe(elm);
}

for (let elm of element16) {
    observer.observe(elm);
}