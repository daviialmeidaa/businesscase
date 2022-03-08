"use strict";

let listGames = $("#listGames");
let listaTexto = [];
$(document).ready(function () {
  $(window).keydown(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
  for (let i = 0; i < 100; i++) {
    let str = `Posição: ${myJson[i].Rank}<br>
      Nome: ${myJson[i].Name}<br>
      Plataforma: ${myJson[i].Platform}<br>
      Ano: ${myJson[i].Year}<br>
      Gênero: ${myJson[i].Genre}<br>
      Fabricante: ${myJson[i].Publisher}<br>
      Vendas na America do Norte: ${myJson[i].NA_Sales}<br>
      Vendas na Europa: ${myJson[i].EU_Sales}<br>
      Vendas no Japão: ${myJson[i].JP_Sales}<br>
      Outras Vendas: ${myJson[i].Other_Sales}<br>
      Vendas Globais: ${myJson[i].Global_Sales}<br><br>`;
    document.getElementById("listGames").innerHTML += str;
  }

  $("#btnSearch").click(function () {
    $("#listGames").empty();
    let texto = $("#searchInput").val().toLowerCase();
    const stringFiltrada = myJson.filter((string) => {
      return (
        string.Name.toString().toLowerCase().includes(texto) ||
        string.Platform.toString().toLowerCase().includes(texto)
      );
    });
    const htmlStringLista = stringFiltrada
      .map((stringFiltrada) => {
        return `
            <ul>
                Posição: ${stringFiltrada.Rank}<br>
                Nome: ${stringFiltrada.Name}<br>
                Plataforma: ${stringFiltrada.Platform}<br>
                Ano: ${stringFiltrada.Year}<br>
                Gênero: ${stringFiltrada.Genre}<br>
                Fabricante: ${stringFiltrada.Publisher}<br>
                Vendas na America do Norte: ${stringFiltrada.NA_Sales}<br>
                Vendas na Europa: ${stringFiltrada.EU_Sales}<br>
                Vendas no Japão: ${stringFiltrada.JP_Sales}<br>
                Outras Vendas: ${stringFiltrada.Other_Sales}<br>
                Vendas Globais: ${stringFiltrada.Global_Sales}<br>
            </ul>
        `;
      })
      .join("<br><br>");
    console.log(htmlStringLista);
    listGames.html(htmlStringLista);
  });
});
