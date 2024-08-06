let donationCount = 0;
let livesSaved = 0;
let nowDonate = 0;

const bgVideo = document.getElementById("bgVideo");

const countElement1 = document.querySelector('.count');
const countElement2 = document.querySelector('.livesSaved');
const countElement3 = document.querySelector('.nowDonating')
const popHearts = document.querySelector('.video-container');

function updateCount() {
    countElement1.textContent = donationCount;
    countElement2.textContent = livesSaved;
}

function updateNow() {
    countElement3.textContent = nowDonate
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        donationCount++;
        livesSaved += 3;
    }
    else if (event.key === 'ArrowDown' && donationCount > 0) {
        donationCount--;
        livesSaved -= 3;
    }
    updateCount();
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        nowDonate += 1;
    }
    else if (event.key === 'ArrowLeft' && nowDonate > 0) {
        nowDonate -=1;
    }
    
    updateNow();
})

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        bgVideo.currentTime = 0
        bgVideo.play();
    }
});

updateCount();
updateNow();
