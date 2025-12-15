import pc from "picocolors"
import { JSDOM } from "jsdom"

// Array.from(
//   document.querySelectorAll('[aria-label="Standings section"] tbody')
// ).map((e) =>
//   Array.from(e.children)
//     .slice(1)
//     .map((e) =>
//       new URL("http://" + e.getAttribute("data-url-to-team-osrp")).searchParams
//         .get("q")
//         ?.replaceAll(".", "")
//     )
//     .sort()
// )

const eu1_UEFAChampionsLeague = [
  "AFC Ajax",
  "AS Monaco",
  "Arsenal FC",
  "Atalanta BC",
  "Athletic Bilbao", // Athletic Club
  "Atlético de Madrid",
  "Bayer 04 Leverkusen",
  "Borussia Dortmund",
  "Chelsea FC",
  "Club Brugge KV",
  "Eintracht Frankfurt",
  "FC Barcelona",
  "FC Bayern Munich",
  "FC Copenhagen",
  "FC Kairat",
  "FK Bodø/Glimt",
  "Galatasaray SK",
  "Inter Milan",
  "Juventus FC",
  "Liverpool FC",
  "Manchester City FC",
  "Newcastle United FC",
  "Olympiacos FC",
  "Olympique de Marseille",
  "PSV",
  "Pafos FC",
  "Paris Saint-Germain FC",
  "Qarabağ FK",
  "Real Madrid CF",
  "Royale Union Saint-Gilloise",
  "SK Slavia Prague",
  "SL Benfica",
  "SSC Napoli",
  "Sporting CP",
  "Tottenham Hotspur FC",
  "Villarreal CF",
]

// const eu2_UEFAEuropaLeague = [
//   "AS Roma",
//   "Aston Villa FC",
//   "BSC Young Boys",
//   "Bologna FC 1909",
//   "Celtic FC",
//   "FC Basel 1893",
//   "FC Midtjylland",
//   "FC Porto",
//   "FC Red Bull Salzburg",
//   "FC Utrecht",
//   "FC Viktoria Plzeň",
//   "FCSB",
//   "FK Crvena zvezda",
//   "Fenerbahçe SK",
//   "Ferencvárosi TC",
//   "Feyenoord",
//   "GNK Dinamo Zagreb",
//   "Go Ahead Eagles",
//   "KRC Genk",
//   "LOSC Lille",
//   "Maccabi Tel Aviv FC",
//   "Malmö FF",
//   "Nottingham Forest FC",
//   "OGC Nice",
//   "Olympique Lyonnais",
//   "PAOK FC",
//   "PFC Ludogorets Razgrad",
//   "Panathinaikos FC",
//   "RC Celta de Vigo",
//   "Rangers FC",
//   "Real Betis Balompié",
//   "SC Braga",
//   "SC Freiburg",
//   "SK Brann",
//   "SK Sturm Graz",
//   "VfB Stuttgart",
// ]

// const eu3_UEFAConferenceLeague = [
//   "1 FSV Mainz 05",
//   "AC Sparta Praha",
//   "ACF Fiorentina",
//   "AEK Athens FC",
//   "AEK Larnaca FC",
//   "AZ Alkmaar",
//   "Aberdeen FC",
//   "BK Häcken",
//   "Breiðablik men's football",
//   "CS Universitatea Craiova",
//   "Crystal Palace FC",
//   "FC Drita",
//   "FC Dynamo Kyiv",
//   "FC Lausanne-Sport",
//   "FC Noah",
//   "FC Shakhtar Donetsk",
//   "HNK Rijeka",
//   "Hamrun Spartans FC",
//   "HŠK Zrinjski Mostar",
//   "Jagiellonia Białystok",
//   "KF Shkëndija",
//   "Kuopion Palloseura",
//   "Lech Poznań",
//   "Legia Warszawa",
//   "Lincoln Red Imps FC",
//   "NK Celje",
//   "Omonoia FC",
//   "RC Strasbourg Alsace",
//   "Raków Częstochowa",
//   "Rayo Vallecano",
//   "SK Rapid Wien",
//   "SK Sigma Olomouc",
//   "Samsunspor",
//   "Shamrock Rovers FC",
//   "Shelbourne FC",
//   "ŠK Slovan Bratislava",
// ]

const en1_PremierLeague = [
  "AFC Bournemouth",
  "Arsenal FC",
  "Aston Villa FC",
  "Brentford FC",
  "Brighton Hove Albion FC", // Brighton & Hove Albion FC
  "Burnley FC",
  "Chelsea FC",
  "Crystal Palace FC",
  "Everton FC",
  "Fulham FC",
  "Leeds United",
  "Liverpool FC",
  "Manchester City FC",
  "Manchester United FC",
  "Newcastle United FC",
  "Nottingham Forest FC",
  "Sunderland AFC",
  "Tottenham Hotspur FC",
  "West Ham United FC",
  "Wolverhampton Wanderers FC",
]

const en2_EFLChampionship = [
  "Birmingham City FC",
  "Blackburn Rovers FC",
  "Bristol City FC",
  "Charlton Athletic",
  "Coventry City Football Club",
  "Derby County Football Club",
  "Hull City",
  "Ipswich Town FC",
  "Leicester City FC",
  "Middlesbrough FC",
  "Millwall FC",
  "Norwich City FC",
  "Oxford United",
  "Portsmouth",
  "Preston North End FC",
  "Queens Park Rangers FC",
  "Sheffield United FC",
  "Sheffield Wednesday FC",
  "Southampton FC",
  "Stoke City FC",
  "Swansea City AFC",
  "Watford FC",
  "West Bromwich Albion FC",
  "Wrexham AFC",
]

const es1_LaLiga = [
  "Athletic Bilbao", // Athletic Club
  "Atlético de Madrid",
  "CA Osasuna",
  "Deportivo Alavés",
  "Elche CF",
  "FC Barcelona",
  "Getafe CF",
  "Girona FC",
  "Levante UD",
  "RC Celta de Vigo",
  "RCD Espanyol de Barcelona",
  "RCD Mallorca",
  "Rayo Vallecano",
  "Real Betis Balompié",
  "Real Madrid CF",
  "Real Oviedo",
  "Real Sociedad",
  "Sevilla FC",
  "Valencia CF",
  "Villarreal CF",
]

const es2_LaLiga2 = [
  "AD Ceuta FC",
  "Albacete Balompié",
  "Burgos CF",
  "CD Castellón",
  "CD Leganés",
  "CD Mirandés",
  "Cultural y Deportiva Leonesa",
  "Cádiz CF",
  "Córdoba CF",
  "Deportivo de La Coruña",
  "FC Andorra",
  "Granada CF",
  "Málaga CF",
  "Real Racing Club",
  "Real Sociedad B",
  "Real Valladolid CF",
  "Real Zaragoza",
  "SD Eibar",
  "SD Huesca",
  "Sporting de Gijón",
  "UD Almería",
  "UD Las Palmas",
]

const leagues = {
  eu1_UEFAChampionsLeague,
  en1_PremierLeague,
  es1_LaLiga,
  //
  // eu2_UEFAEuropaLeague,
  // eu3_UEFAConferenceLeague,
  //
  en2_EFLChampionship,
  es2_LaLiga2,
}

const logos = []
const logosByLeague = {}

for (const [league, teams] of Object.entries(leagues)) {
  logosByLeague[league] = []

  for (const team of teams) {
    console.log(
      "Fetching page for League:",
      pc.blue(league),
      "Team:",
      pc.yellow(team)
    )

    const response = await fetch(
      "https://duckduckgo.com/?q=" + encodeURIComponent(team)
    )

    if (!response.ok) {
      console.error(response.statusText)
      continue
    }

    if (!response.headers.get("content-type")?.includes("text/html")) {
      console.error("URL did not return HTML content")
      continue
    }

    const text = await response.text()
    const dom = new JSDOM(text)
    const document = dom.window.document

    const logo =
      document
        .getElementsByClassName("header__logo")[0]
        ?.getAttribute("data-dynamic-logo") || null

    if (logo) {
      console.log(pc.green("==>"), "Found logo", pc.magenta(logo))
      if (logos.includes(logo)) continue
      logos.push(logo)
      logosByLeague[league].push("https://duckduckgo.com" + logo)
    } else {
      console.log(pc.red("==>"), "No logo found")
    }
  }
}

if (logos.length) {
  console.log(logos.length + " logos found")
  console.log(logosByLeague)
} else {
  console.log("No logo found")
}
