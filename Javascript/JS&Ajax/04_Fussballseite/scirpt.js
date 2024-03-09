const daten = () => {
  fetch("https://api.openligadb.de/getmatchdata/26").then((result) => {
    result.json().then((data) => {
      fillLogo(data);
    });
  });
};

const fillLogo = (data) => {
  let img1 = "";
  let img2 = "";
  let score = "";

  img1 +=
    "<img class='teamLogo One' src=" + data.team1.teamIconUrl + ">" + "</immg>";

  img2 +=
    "<img class='teamLogo Two' src=" + data.team2.teamIconUrl + ">" + "</immg>";

  score +=
    "<p class='score'>" +
    data.matchResults[0].pointsTeam1 +
    " : " +
    data.matchResults[0].pointsTeam2 +
    "</p>";

  document.getElementById("article").innerHTML = img1 + score + img2;
};

daten();
