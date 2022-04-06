// BLOCO DE AUTOMAÇAO DE SLIDES ANTERIOR

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlide");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// FIM BLOCO DE AUTOMAÇAO DE SLIDES ANTERIOR

/*
  for (let i = 0; i < 100; i++) {
    //iterando sobre cada item da lista de jogos
    let str = `
      <li class="itemGame">
        <div class="tag">
          Posição: ${myJson[i].Rank}<br>
        </div><br>
        <div class="tag-name">Nome:</div> ${myJson[i].Name}<br>
        <div class="tag-name">Plataforma:</div> ${myJson[i].Platform}<br>
        <div class="tag-name">Ano:</div> ${myJson[i].Year}<br>
        <div class="tag-name">Gênero:</div> ${myJson[i].Genre}<br>
        <div class="tag-name">Fabricante:</div> ${myJson[i].Publisher}<br>
        <div class="tag-name">Vendas nos EUA:</div> ${myJson[i].NA_Sales}<br>
        <div class="tag-name">Vendas na Europa:</div> ${myJson[i].EU_Sales}<br>
        <div class="tag-name">Vendas no Japão:</div> ${myJson[i].JP_Sales}<br>
        <div class="tag-name">Outras Vendas:</div> ${myJson[i].Other_Sales}<br>
        <div class="tag-name">Vendas Globais:</div> ${myJson[i].Global_Sales}<br><br>
      </li>  
    `;
    document.getElementById("listGames").innerHTML += str; //+= concatena texto com os templates strings
  }
  */


  /*
    // console.log(typeof stringFiltrada);
    const htmlStringLista = stringFiltrada.map((stringFiltrada) => {
      //mapeia linha por linha do retorno. vincula ao item e nao ao total de itens do array
      return `
            <li class="itemGame">
              <div class="tag">            
                Posição: ${stringFiltrada.Rank}<br>
              </div><br>
              <div class="tag-name"> Nome:</div> ${stringFiltrada.Name}<br>
              <div class="tag-name"> Plataforma:</div> ${stringFiltrada.Platform}<br>
              <div class="tag-name"> Ano:</div> ${stringFiltrada.Year}<br>
              <div class="tag-name"> Gênero:</div> ${stringFiltrada.Genre}<br>
              <div class="tag-name"> Fabricante:</div> ${stringFiltrada.Publisher}<br>
              <div class="tag-name"> Vendas na America do Norte:</div> ${stringFiltrada.NA_Sales}<br>
              <div class="tag-name"> Vendas na Europa:</div> ${stringFiltrada.EU_Sales}<br>
              <div class="tag-name"> Vendas no Japão:</div> ${stringFiltrada.JP_Sales}<br>
              <div class="tag-name"> Outras Vendas:</div> ${stringFiltrada.Other_Sales}<br>
              <div class="tag-name"> Vendas Globais:</div> ${stringFiltrada.Global_Sales}<br>
            </li>
        `;
    });
    // .join("<br><br>"); //ao final de cada card quebra 02 linhas.
    //console.log(Array.isArray(htmlStringLista));
    // console.log(typeof htmlStringLista);
    // console.log(htmlStringLista);
    //listGames.html(htmlStringLista); //o .htlm é o innerHTML do jquery. esta escrevendo o html da tela.
    */

    var url1 = $("#videotlou").attr("src");
    $("#tlou1").on("hide.bs.modal", function () {
      $("#videotlou").attr("src", "");
    });
    $("#tlou1").on("show.bs.modal", function () {
      $("#videotlou").attr("src", url1);
    });
    var url2 = $("#videoGow").attr("src");
    $("#gow1").on("hide.bs.modal", function () {
      $("#videoGow").attr("src", "");
    });
    $("#gow1").on("show.bs.modal", function () {
      $("#videoGow").attr("src", url2);
    });
    var url3 = $("#videoUncharted").attr("src");
    $("#uncharted1").on("hide.bs.modal", function () {
      $("#videoUncharted").attr("src", "");
    });
    $("#uncharted1").on("show.bs.modal", function () {
      $("#videoUncharted").attr("src", url3);
    });
    var url4 = $("#videoRe").attr("src");
    $("#re1").on("hide.bs.modal", function () {
      $("#videoRe").attr("src", "");
    });
    $("#re1").on("show.bs.modal", function () {
      $("#videoRe").attr("src", url4);
    });
    var url5 = $("#videoCrash").attr("src");
    $("#crash1").on("hide.bs.modal", function () {
      $("#videoCrash").attr("src", "");
    });
    $("#crash1").on("show.bs.modal", function () {
      $("#videoCrash").attr("src", url5);
    });