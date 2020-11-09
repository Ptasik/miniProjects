(function() {
    let animals = ['lion', 'cougar', 'bark', 'cat'];
    const allAnimals = document.querySelector('.allAnimals')

    animals.forEach(item => {
        let animalDiv = document.createElement('div');
        animalDiv.className = `animal ${item}`;
        animalDiv.innerText = item.toUpperCase();
        allAnimals.appendChild(animalDiv);

        animalDiv.addEventListener('click', function () {
            let sound = new Audio(`sound/${item}.mp3`);
            animalDiv.classList.add('active');
            sound.play();
            setTimeout(function () {
                animalDiv.classList.remove('active');
            }, 200);
        })
    })
})();