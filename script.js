let arr = ["Боюсь, что однажды просто ослепну, отражая блеск твоих волшебных глаз.🤩", "Ты такая утонченная!", "На фоне твоей красоты все блекнет 😍", "Твоя естественная доброта и отзывчивость просто поражают, особенно в этом жестоком мире. 💗😇", "Все вокруг без ума от твоих волшебных глаз.", "Твоя красота уникальна, настолько очаровательна, что любой - художник взялся бы писать с тебя картины. 💟", "Моя принцесса ты прелестна 😘", "Ты волшебная и невероятная! 😇", "Таня - ты моя королева, выглядишь просто блеск! 🤩", "Мир стал бы гораздо лучше, если большинство людей были бы похожи на тебя. 😇", "Посмотрите-ка кто у нас тут такой красивый 🥰", "Ты интересна, красива, волшебна, оригинальна — просто изюминка! Тебя надо ценить и беречь! 😍", "Однозначно, ты непревзойдённая! 🤩", "Никогда не видел кого-то более красивого", "Танюшка - ты просто супер! 😍", "Улыбайся чаще, у тебя замечательная улыбка. 😍", "Твоя улыбка – самая прекрасная на свете. 😍", "Когда найдут самый ценный алмаз его назовут твоим именем 😍", "Ты девушка, которая меняет мир к лучшему! 😇", "Сегодня все внимание только тебе! 😘", "Твоей привлекательности может позавидовать каждый. 💗", "Твой голос - как музыка", "Танюш сегодня ты просто прелесть 😍", "Очертания твоего тела, это произведение искусства", "Ой Таня,ты сегодня богиня! 🥰", "Даже ангелы завистливо смотрят на тебя с небес, любуясь неземной красотой! 🧚", "Ты воплощение мечты!", "Ты спасительный эликсир в суете мирской жизни! 💗", "Ты красива, как богиня!", "Танюшка, ты сегодня согсшибательная", "Ты не девушка, а просто мечта 🥰", "Смортря на тебя правда начинаешь верит что красота спасет мир.🥰", "Ты неповторима! Ты – волшебная! Ты — непревзойденная! 😍", "Ты настоящий ангел, потому что девушки не могут быть такими красивыми 🧚", "Ты выше всех похвал!", "Ты настоящий источник доброты, счастья и радости!", "Ты все делаете безупречно и идеально. 🥰", "Ты настоящее сокровище!", "Любая комната становится светлее, когда ты заходишь туда. 🥰", "Когда находишья рядом с тобой, кажеться что находишься в раю. Толька там есть такие ангелы 🧚"];

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),

        mirrorText: document.querySelector(".mirror__text"),
        block: document.querySelector('.block'),
        askButton: document.querySelector('.ask')
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtn.addEventListener("click", showtext);
    refs.openModalBtn.addEventListener("click", hideBackground);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", showBackground);

    function toggleModal() {
        document.body.classList.toggle("modal-open");
        refs.modal.classList.toggle("backdrop--is-hidden");
        refs.mirrorText.removeAttribute('style');
    }

    function showtext() {
        refs.mirrorText.textContent = (arr[(Math.floor(Math.random() * (27 - 1) + 1))])
        refs.mirrorText.setAttribute("style", "animation: ani 2.5s forwards");
    }

    function hideBackground() {
        refs.block.style.display = "none";
        refs.askButton.style.display = "none";
    }
    function showBackground() {
        refs.block.style.display = "flex";
        refs.askButton.style.display = "block";
    }

})();