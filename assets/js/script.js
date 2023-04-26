const c = el => document.querySelector(el);
const cs = el => document.querySelectorAll(el);

const toggleBtnDarkMode = () => {
    c('#btnDM').classList.toggle('fa-toggle-off');
    c('#btnDM').classList.toggle('fa-toggle-on');
}

const toggleDarkPage = () => {
    cs('header .logo img, body, .darkBtnMode, nav ul, section .info, .btnTrailer, .charTitle, #charactersArea, #villainArea, .title, .banner a h2, .menuMobile').forEach((item)=>{
        item.classList.toggle('dark');
    });
}

const toggleModal = () => {
    c('#modal').classList.toggle('hide');
    c('#fade').classList.toggle('hide');
}

const openModal = () =>{
    let url = 'https://www.youtube.com/embed/VQGCKyvzIM4';
    toggleModal();
    c('.modalBody iframe').src = url;
}

const closeModal = () => {
    toggleModal();
    c('.modalBody iframe').src = '';
}

const createCardChar = (item,index) => {
    let charItem = c('.charModels .charCard').cloneNode(true);
    charItem.querySelector('.charImg').src = item.img;
    charItem.querySelector('.charImg').alt = `Imagem ${item.name}`;
    charItem.querySelector('.charName').innerHTML = item.name;
    charItem.setAttribute('data-key',index);
    
    return charItem;
}

function openModalCharacteres(charItem, array) {
    let key = charItem.getAttribute('data-key');
    c('#modalChar').classList.toggle('hide');
    c('#modalCharHeader .name').innerHTML = array[key].name;
    c('#modalCharBody .inf').innerHTML = array[key].description;
    c('#modalCharBody .img img').src = array[key].img;
}

characters.map((item,index)=>{
    let charItem = createCardChar(item, index);
    charItem.querySelector('.charBtn').addEventListener('click',()=>{
        openModalCharacteres(charItem, characters);
    })
    c('#charactersArea').append(charItem);
})

villain.map((item, index)=>{
    let charItem = createCardChar(item, index);
    charItem.querySelector('.charBtn').addEventListener('click', ()=>{
        openModalCharacteres(charItem, villain);
    })
    c('#villainArea').append(charItem);
    
})

c('#btnDM').addEventListener('click',()=>{
    if(c('#btnDM').classList.contains('fa-toggle-off')){
        toggleBtnDarkMode();
        toggleDarkPage();
    } else {
        toggleDarkPage();
        toggleBtnDarkMode();
7    }    
})

window.addEventListener('scroll',()=>{
    if(window.scrollY != 0){
        c('.scrollBtn').style.display = 'block';
    } else {
        c('.scrollBtn').style.display = 'none';
    }
})

c('.scrollBtn').addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        right: 0,
        behavior: "smooth"
    })
})

c('.btnTrailer').addEventListener('click', openModal);

cs('#fade, .btnCloseModal').forEach((item)=>{
    item.addEventListener('click', closeModal);
})

c('#btnModalChar').addEventListener('click',()=>{
    c('#modalChar').classList.toggle('hide');
})

c('.menuMobile').addEventListener('click',()=>{
    let menuMobile = c('.menuMobile i');
    if(menuMobile.classList.contains('fa-bars')){
        menuMobile.classList.remove('fa-bars');
        menuMobile.classList.add('fa-x');
        document.body.classList.add('overFlow');
    } else {
        menuMobile.classList.add('fa-bars');
        menuMobile.classList.remove('fa-x');
        document.body.classList.remove('overFlow');
    }
    c('nav ul').classList.toggle('open');
    c('.darkBtnMode').classList.toggle('open');
    cs('nav ul a').forEach((link)=>{
        link.addEventListener('click',()=>{
            document.body.classList.remove('overFlow');
            menuMobile.classList.remove('fa-x');
            menuMobile.classList.add('fa-bars');
            c('nav ul').classList.remove('open');
            c('.darkBtnMode').classList.remove('open');
            
        })
    })
})





