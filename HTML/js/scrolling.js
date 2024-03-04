function whenScroll(selector, options = {}){
    let pieces = document.querySelectorAll(selector)
    pieces = Array.from(pieces)
    pieces.forEach(piece => {
        addObserver(piece, options)
    })
}

function addObserver(piece, options){
    if(!('IntersectionObserver' in window)){
        if(options.cb){
            options.cb(piece)
        }else{
            entry.target.classList.add('active')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(piece)
                }else{
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(piece)
}

whenScroll('.scroll-reveal', {
    rootMargin: '-200px',
})

