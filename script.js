"use strict";

let listGames = $("#listGames"); //Aqui pego o elemento html ID da minha lista.

$(document).ready(function () {
  //chamada padrão jquery para entrar na função ao carregar completamente a pagina
  $(window).keydown(function (event) {
    //13 = enter. previne de propagar o enter. cancela o enter
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
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

  $("#btnSearch").click(function () {
    $("#listGames").empty(); //esvaziar a lista
    let texto = $("#searchInput").val().toLowerCase(); //val é abreviação para value. pegando a string e transformando em caixa baixa
    const stringFiltrada = myJson.filter((string) => {
      //filtrando o array myJson por uma string
      return (
        string.Name.toString().toLowerCase().includes(texto) ||
        string.Platform.toString().toLowerCase().includes(texto)
      );
    });
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
    console.log(Array.isArray(htmlStringLista));
    // console.log(typeof htmlStringLista);
    // console.log(htmlStringLista);
    listGames.html(htmlStringLista); //o .htlm é o innerHTML do jquery. esta escrevendo o html da tela.
  });
});

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
