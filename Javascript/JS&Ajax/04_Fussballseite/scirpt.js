let ligs = [
  " Österreichische Bundesliga 2023/24",
  "3. Fußball-Bundesliga 2023/2024",
  " 2. Fußball-Bundesliga 2023/2024",
  " 1. Fußball-Bundesliga 2023/2024",
  " 3. Fußball-Bundesliga 2022/2023",
  " 2. Fußball-Bundesliga 2022/2023",
  "1. Fußball-Fan-Bundesliga 2022/2023",
];

for (let i = 0; i < ligs.length; i++) {
  let listElement = document.createElement("li");
  listElement.innerHTML = ligs[i];
  document.getElementById("ul").appendChild(listElement);
  listElement.addEventListener("click", function () {
    console.log(listElement);
  });
}

async function data() {
  try {
    let result = await fetch(
      "https://api.openligadb.de/getmatchdata/%C3%B6bl1/2023"
    );
    let teamInfo = await fetch(
      "https://api.openligadb.de/getavailableteams/%C3%B6bl1/2023"
    );
    let data = await result.json();
    teamInfo = await teamInfo.json();

    fillLogo(data, teamInfo);
  } catch (e) {
    console.log(e);
  }
}

const fillLogo = (data, teamInfo) => {
  let img1 = "";
  let img2 = "";
  let score = "";

  for (let i = 0; i <= 10; i++) {
    img1 +=
      "<div class='teamLogo One'><img src=" +
      teamInfo.filter((team) => team.teamId == data[i].team1.teamId)[0]
        .teamIconUrl +
      ">" +
      "</img></div>";

    img2 +=
      "<div class='teamLogo Two'><img src=" +
      teamInfo.filter((team) => team.teamId == data[i].team2.teamId)[0]
        .teamIconUrl +
      ">" +
      "</img></div>";

    score +=
      "<p class='score'>" +
      data[i].matchResults[1].pointsTeam1 +
      " : " +
      data[i].matchResults[1].pointsTeam2 +
      "</p>";

    article = document.createElement("div");
    article.innerHTML = img1 + score + img2;
    article.classList.add("article");
    document.getElementById("articles").appendChild(article);

    img1 = "";
    img2 = "";
    score = "";
  }
};

function loadNewDate() {
  for (let i = 0; i < ligs.length; i++) {
    let listElement = document.createElement("li");
    listElement.innerHTML = ligs[i];
    console.log(listElement);
    document.getElementById("ul").appendChild(listElement);
  }
}

data();
