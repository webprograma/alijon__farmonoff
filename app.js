const title = document.querySelector('.title')

let bek = title.innerHTML
title.innerHTML = ''

function index(i = 0) {
    title.innerHTML += bek[i]
    i++
    if (i < bek.length) {
        setTimeout(() => {
            index(i)
        }, 300);
    }
}

setTimeout(() => {
    index()
}, 1000);
