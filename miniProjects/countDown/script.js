(function () {
    let date = document.querySelector('.date');
    let clock = document.querySelector('.clock');

    let timeInterval;
    let timeStop = true;

    const savedValue = localStorage.getItem('countdown') || false;

    if (savedValue) {
        startDate(savedValue);
        date.valueAsDate = new Date(savedValue);
    }


    date.addEventListener('change', function (e) {
        e.preventDefault();
        clearInterval(timeInterval);
        let selectedFullDate = new Date(date.value);
        localStorage.getItem('countdown', selectedFullDate);
        startDate(selectedFullDate);
        timeStop = true;
    })


    function startDate(d) {
        function updateCount() {
            let tl = leftDate(d);

            if (tl.total <= 0) {
                timeStop = false;
            }

            for (let pro in tl) {
                let el = clock.querySelector('.' + pro);
                if (el) {
                    el.innerHTML = tl[pro];
                }
            }
        }

        updateCount();
        if (timeStop) {
            timeInterval = setInterval(updateCount, 1000);
        } else {
            clearInterval(timeInterval);
        }
    }


    function leftDate(d) {
        let currentDate = new Date();
        let total = Date.parse(d) - Date.parse(currentDate);

        let seconds = Math.floor((total / 1000) % 60);
        let minutes = Math.floor((total / 1000 / 60) % 60);
        let hours = Math.floor((total / (1000 * 3600)) % 24);
        let days = Math.floor((total / (1000 * 3600 * 24)));

        return {
            'total': total,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }
})();



