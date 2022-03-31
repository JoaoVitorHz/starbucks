function greenCoffe(copo){
    // Troca de imagem
    document.querySelector('#copoBanner').setAttribute('src','assets/images/'+copo);

    // Troca a cor da bola verde
    document.querySelector("#bolaVerde").classList.remove('mudancaPink');
    document.querySelector("#bolaVerde").classList.remove('mudancaPurple');
    document.querySelector("#bolaVerde").classList.add('mudancaVerde');

    // Troca a cor do botão
    document.querySelector("#staburcksBTN").classList.remove('mudancaPink');
    document.querySelector("#staburcksBTN").classList.remove('mudancaPurple');
    document.querySelector("#staburcksBTN").classList.add('mudancaVerde');

    // Troca a cor do texto "STARBUCKS"
    document.querySelector("#starbucksVerde").classList.remove("textPurple")
    document.querySelector("#starbucksVerde").classList.remove("textPink")
    document.querySelector("#starbucksVerde").classList.add("textVerde")

    
};  

function pinkCoffe(copo){
    document.querySelector('#copoBanner').setAttribute('src','assets/images/'+copo);

    document.querySelector("#bolaVerde").classList.remove('mudancaVerde');
    document.querySelector("#bolaVerde").classList.remove('mudancaPurple');
    document.querySelector("#bolaVerde").classList.add('mudancaPink');

    document.querySelector("#staburcksBTN").classList.remove('mudancaVerde');
    document.querySelector("#staburcksBTN").classList.remove('mudancaPurple');
    document.querySelector("#staburcksBTN").classList.add('mudancaPink');

    document.querySelector("#starbucksVerde").classList.remove("textVerde")
    document.querySelector("#starbucksVerde").classList.remove("textPurple")
    document.querySelector("#starbucksVerde").classList.add("textPink")


};

function purpleCoffe(copo){
    document.querySelector('#copoBanner').setAttribute('src','assets/images/'+copo);


    document.querySelector("#bolaVerde").classList.remove('mudancaVerde');
    document.querySelector("#bolaVerde").classList.remove('mudancaPink');
    document.querySelector("#bolaVerde").classList.add('mudancaPurple');

    document.querySelector("#staburcksBTN").classList.remove('mudancaPink');
    document.querySelector("#staburcksBTN").classList.remove('mudancaVerde');
    document.querySelector("#staburcksBTN").classList.add('mudancaPurple');

    document.querySelector("#starbucksVerde").classList.remove("textVerde")
    document.querySelector("#starbucksVerde").classList.remove("textPink")
    document.querySelector("#starbucksVerde").classList.add("textPurple")
    

};

