let ligs = [
  {
    title: " Österreichische Bundesliga 2023/24",
    leaugeShortcut: "öbl1",
    season: "2023",
  },
  {
    title: "3. Fußball-Bundesliga 2023/2024",
    leaugeShortcut: "bl3",
    season: "2023",
  },
  {
    title: "2. Fußball-Bundesliga 2023/2024",
    leaugeShortcut: "bl2",
    season: "2023",
  },
  {
    title: "1. Fußball-Bundesliga 2023/2024",
    leaugeShortcut: "bl1",
    season: "2023",
  },
  {
    title: "3. Fußball-Bundesliga 2022/2023",
    leaugeShortcut: "bl3de",
    season: "2022",
  },
  {
    title: "2. Fußball-Bundesliga 2022/2023",
    leaugeShortcut: "bl2",
    season: "2022",
  },
  {
    title: "1. Fußball-Bundesliga 2022/2023",
    leaugeShortcut: "bl1",
    season: "2022",
  },
];

async function data(currentLeauge) {
  try {
    let result = await fetch(
      "https://api.openligadb.de/getmatchdata/" +
        ligs[currentLeauge].leaugeShortcut +
        "/" +
        ligs[currentLeauge].season
    );
    let teamInfo = await fetch(
      "https://api.openligadb.de/getavailableteams/" +
        ligs[currentLeauge].leaugeShortcut +
        "/" +
        ligs[currentLeauge].season
    );
    let data = await result.json();
    teamInfo = await teamInfo.json();

    document.getElementById("articles").innerHTML = "";
    // zuerst leer machen und dann die logos logen

    fillLogo(data, teamInfo);
  } catch (e) {
    console.log(e);
  }
}

let previousLi = null;

function changeColor(li) {
  li.style.backgroundColor = "white";
  if (previousLi !== null) {
    previousLi.style.backgroundColor = "grey";
  }
  previousLi = li;
}

for (let i = 0; i < ligs.length; i++) {
  let listElement = document.createElement("li");
  listElement.innerHTML = ligs[i].title;
  document.getElementById("ul").appendChild(listElement);
  listElement.addEventListener("click", function () {
    changeColor(listElement);
    let currentLeauge = i;
    data(currentLeauge);
  });
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

    let showMoreButton = document.createElement("button");
    showMoreButton.textContent = "Show more";
    showMoreButton.classList.add("showMoreButton");

    article = document.createElement("div");
    article.innerHTML = img1 + score + img2;
    article.appendChild(showMoreButton);
    article.classList.add("article");
    document.getElementById("articles").appendChild(article);

    showMoreButton.addEventListener("click", function () {
      console.log("clicked");
      this.closest(".article").classList.toggle("expanded");
    });

    img1 = "";
    img2 = "";
    score = "";
  }
};

data();
