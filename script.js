"use strict";

let listGames = $("#listGames"); //Aqui pego o elemento html ID da minha lista.

$(document).ready(function () {
  //chamada padrão jquery para entrar na função ao carregar completamente a pagina
  $(window).keydown(function (event) {
    if (event.keyCode == 13) {
      //13 = enter. previne de propagar o enter. cancela o enter
      event.preventDefault();
      return false;
    }
  });

  // exemplos da biblioteca : https://pagination.js.org/
  $("#list").pagination({
    // executa a bliblioteca do JS pagination, definindo o ID "list" como div base para renderização

    dataSource: myJson, // faz referencia ao meu JSON contendo a "base de dados"
    pageSize: 9, // define a qtde de itens por página na tela
    callback: function (data, pagination) {
      // executa a paginação
      var wrapper = $("#list .wrapper").empty(); // limpa a lista antes de popular novamente
      $.each(data, function (i, f) {
        let str = `
            <li class="itemGame">
              <div class="tag">
                Posição: ${f.Rank}<br>
                </div><br>
                <div class="tag-name">Nome:</div> ${f.Name}<br>
                <div class="tag-name">Plataforma:</div> ${f.Platform}<br>
                <div class="tag-name">Ano:</div> ${f.Year}<br>
                <div class="tag-name">Gênero:</div> ${f.Genre}<br>
                <div class="tag-name">Fabricante:</div> ${f.Publisher}<br>
                <div class="tag-name">Vendas nos EUA:</div> ${f.NA_Sales}<br>
                <div class="tag-name">Vendas na Europa:</div> ${f.EU_Sales}<br>
                <div class="tag-name">Vendas no Japão:</div> ${f.JP_Sales}<br>
              <div class="tag-name">Outras Vendas:</div> ${f.Other_Sales}<br>
              <div class="tag-name">Vendas Globais:</div> ${f.Global_Sales}<br><br>
            </li>  
          `;
        $("#list #listGames .wrapper ").append(str); // adiciona os itens HTML criados acima para o HTML
      });
    },
  });

  $("#btnSearch").click(function () {
    let texto = $("#searchInput").val().toLowerCase(); //val é abreviação para value. pegando a string e transformando em caixa baixa
    const stringFiltrada = myJson.filter((string) => {
      //filtrando o array myJson por uma string
      return (
        string.Name.toString().toLowerCase().includes(texto) ||
        string.Platform.toString().toLowerCase().includes(texto)
      );
    });

    $("#list").pagination({
      dataSource: stringFiltrada, // aponta para array com dados filtrados na busca
      pageSize: 9,
      callback: function (data, pagination) {
        var wrapper = $("#list .wrapper").empty();
        $.each(data, function (i, f) {
          let str = `
              <li class="itemGame">
                <div class="tag">            
                  Posição: ${f.Rank}<br>
              </div><br>
              <div class="tag-name"> Nome:</div> ${f.Name}<br>
              <div class="tag-name"> Plataforma:</div> ${f.Platform}<br>
              <div class="tag-name"> Ano:</div> ${f.Year}<br>
              <div class="tag-name"> Gênero:</div> ${f.Genre}<br>
              <div class="tag-name"> Fabricante:</div> ${f.Publisher}<br>
              <div class="tag-name"> Vendas na America do Norte:</div> ${f.NA_Sales}<br>
              <div class="tag-name"> Vendas na Europa:</div> ${f.EU_Sales}<br>
              <div class="tag-name"> Vendas no Japão:</div> ${f.JP_Sales}<br>
              <div class="tag-name"> Outras Vendas:</div> ${f.Other_Sales}<br>
              <div class="tag-name"> Vendas Globais:</div> ${f.Global_Sales}<br>
            </li>  
            `;
          $("#list #listGames .wrapper ").append(str);
        });
      },
    });
  });
});

$(document).ready(function () {
  let asideBarList = myJson.slice(Math.max(myJson.length - 5, 1));

  $.each(asideBarList, function (i, f) {
    let str = `
          <li class="related-post">
          <div class="bs-example">
            <a class="top-link" href="#gameModal${f.Rank}" data-toggle="modal">
              <img class="topgames" src="images/related-images/${f.Game_Photo}"
                alt="${f.Name}" width="100" height="100" />
            </a>
            <div id="gameModal${f.Rank}" class="modal fade">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" rank_id=${f.Rank} data-dismiss="modal" aria-hidden="true">X
                    </button>
                    <h4 class="modal-title">${f.Name}</h4>
                  </div>
                  <div class="modal-body">
                    <iframe id="${f.Rank}" width="560" height="315" src="${f.Game_URL}"
                      title="YouTube video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen>
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p class="related-game">${f.Name}<br>
                Gênero: ${f.Genre}<br>
                Ano de Lançamento: ${f.Year}<br>
                Plataforma: ${f.Platform}<br><br>
              </p>
            </div>
          </div>
        </li>  
      `;
    $("#relatedList").append(str);

    let modalUrl = $(`#${f.Rank}`).attr("src");
    $(`#gameModal${f.Rank}`).on("hide.bs.modal", function () {
      $(`#${f.Rank}`).attr("src", "");
    });
    $(`#gameModal${f.Rank}`).on("show.bs.modal", function () {
      $(`#${f.Rank}`).attr("src", modalUrl);
    });
  });
});

$(function () {
  $(".close").click(function () {
    let closeId = $(this).attr("rank_id");
    $(`#${closeId}`).attr("src", $(`#${closeId}`).attr("src"));
  });
});
