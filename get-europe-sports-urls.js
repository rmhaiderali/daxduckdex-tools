import pc from "picocolors"
import { JSDOM } from "jsdom"

const LaLiga = [
  "https://duckduckgo.com/?q=FC+Barcelona",
  "https://duckduckgo.com/?q=Real+Madrid+CF",
  "https://duckduckgo.com/?q=Villarreal+CF",
  "https://duckduckgo.com/?q=Atlético+de+Madrid",
  "https://duckduckgo.com/?q=RCD+Espanyol+de+Barcelona",
  "https://duckduckgo.com/?q=Real+Betis+Balompié",
  "https://duckduckgo.com/?q=Athletic+Bilbao",
  "https://duckduckgo.com/?q=Getafe+CF",
  "https://duckduckgo.com/?q=Elche+CF",
  "https://duckduckgo.com/?q=RC+Celta+de+Vigo",
  "https://duckduckgo.com/?q=Deportivo+Alavés",
  "https://duckduckgo.com/?q=Rayo+Vallecano",
  "https://duckduckgo.com/?q=Sevilla+FC",
  "https://duckduckgo.com/?q=RCD+Mallorca",
  "https://duckduckgo.com/?q=Real+Sociedad",
  "https://duckduckgo.com/?q=CA+Osasuna",
  "https://duckduckgo.com/?q=Valencia+CF",
  "https://duckduckgo.com/?q=Girona+FC",
  "https://duckduckgo.com/?q=Real+Oviedo",
  "https://duckduckgo.com/?q=Levante+UD",
]

const SegundaDivision = [
  "https://duckduckgo.com/?q=Real+Racing+Club",
  "https://duckduckgo.com/?q=Deportivo+de+La+Coruña",
  "https://duckduckgo.com/?q=UD+Almería",
  "https://duckduckgo.com/?q=UD+Las+Palmas",
  "https://duckduckgo.com/?q=CD+Castellón",
  "https://duckduckgo.com/?q=Sporting+de+Gijón",
  "https://duckduckgo.com/?q=Cádiz+CF",
  "https://duckduckgo.com/?q=Burgos+CF",
  "https://duckduckgo.com/?q=AD+Ceuta+FC",
  "https://duckduckgo.com/?q=Real+Valladolid+CF",
  "https://duckduckgo.com/?q=Córdoba+CF",
  "https://duckduckgo.com/?q=Cultural+y+Deportiva+Leonesa",
  "https://duckduckgo.com/?q=Albacete+Balompié",
  "https://duckduckgo.com/?q=SD+Huesca",
  "https://duckduckgo.com/?q=Real+Sociedad+B",
  "https://duckduckgo.com/?q=FC+Andorra",
  "https://duckduckgo.com/?q=Málaga+CF",
  "https://duckduckgo.com/?q=CD+Leganés",
  "https://duckduckgo.com/?q=Granada+CF",
  "https://duckduckgo.com/?q=SD+Eibar",
  "https://duckduckgo.com/?q=CD+Mirandés",
  "https://duckduckgo.com/?q=Real+Zaragoza",
]

const UEFAChampionsLeague = [
  "https://duckduckgo.com/?q=Arsenal+FC",
  "https://duckduckgo.com/?q=FC+Bayern+Munich",
  "https://duckduckgo.com/?q=Paris+Saint-Germain+FC",
  "https://duckduckgo.com/?q=Manchester+City+FC",
  "https://duckduckgo.com/?q=Atalanta+BC",
  "https://duckduckgo.com/?q=Inter+Milan",
  "https://duckduckgo.com/?q=Real+Madrid+CF",
  "https://duckduckgo.com/?q=Atlético+de+Madrid",
  "https://duckduckgo.com/?q=Liverpool+FC",
  "https://duckduckgo.com/?q=Borussia+Dortmund",
  "https://duckduckgo.com/?q=Tottenham+Hotspur+FC",
  "https://duckduckgo.com/?q=Newcastle+United+FC",
  "https://duckduckgo.com/?q=Chelsea+FC",
  "https://duckduckgo.com/?q=Sporting+CP",
  "https://duckduckgo.com/?q=FC+Barcelona",
  "https://duckduckgo.com/?q=Olympique+de+Marseille",
  "https://duckduckgo.com/?q=Juventus+FC",
  "https://duckduckgo.com/?q=Galatasaray+SK",
  "https://duckduckgo.com/?q=AS+Monaco",
  "https://duckduckgo.com/?q=Bayer+04+Leverkusen",
  "https://duckduckgo.com/?q=PSV",
  "https://duckduckgo.com/?q=Qarabağ+FK",
  "https://duckduckgo.com/?q=SSC+Napoli",
  "https://duckduckgo.com/?q=FC+Copenhagen",
  "https://duckduckgo.com/?q=SL+Benfica",
  "https://duckduckgo.com/?q=Pafos+FC",
  "https://duckduckgo.com/?q=Royale+Union+Saint-Gilloise",
  "https://duckduckgo.com/?q=Athletic+Bilbao",
  "https://duckduckgo.com/?q=Olympiacos+FC",
  "https://duckduckgo.com/?q=Eintracht+Frankfurt",
  "https://duckduckgo.com/?q=Club+Brugge+KV",
  "https://duckduckgo.com/?q=FK+Bodø/Glimt",
  "https://duckduckgo.com/?q=SK+Slavia+Prague",
  "https://duckduckgo.com/?q=AFC+Ajax",
  "https://duckduckgo.com/?q=Villarreal+CF",
  "https://duckduckgo.com/?q=FC+Kairat",
]

const EuropaLeague = [
  "https://duckduckgo.com/?q=SS+Lazio",
  "https://duckduckgo.com/?q=Athletic+Bilbao",
  "https://duckduckgo.com/?q=Manchester+United+FC",
  "https://duckduckgo.com/?q=Tottenham+Hotspur+FC",
  "https://duckduckgo.com/?q=Eintracht+Frankfurt",
  "https://duckduckgo.com/?q=Olympique+Lyonnais",
  "https://duckduckgo.com/?q=Olympiacos+FC",
  "https://duckduckgo.com/?q=Rangers+FC",
  "https://duckduckgo.com/?q=FK+Bodø/Glimt",
  "https://duckduckgo.com/?q=RSC+Anderlecht",
  "https://duckduckgo.com/?q=FCSB",
  "https://duckduckgo.com/?q=AFC+Ajax",
  "https://duckduckgo.com/?q=Real+Sociedad",
  "https://duckduckgo.com/?q=Galatasaray+SK",
  "https://duckduckgo.com/?q=AS+Roma",
  "https://duckduckgo.com/?q=FC+Viktoria+Plzeň",
  "https://duckduckgo.com/?q=Ferencvárosi+TC",
  "https://duckduckgo.com/?q=FC+Porto",
  "https://duckduckgo.com/?q=AZ+Alkmaar",
  "https://duckduckgo.com/?q=FC+Midtjylland",
  "https://duckduckgo.com/?q=Royale+Union+Saint-Gilloise",
  "https://duckduckgo.com/?q=PAOK+FC",
  "https://duckduckgo.com/?q=FC+Twente",
  "https://duckduckgo.com/?q=Fenerbahçe+SK",
  "https://duckduckgo.com/?q=SC+Braga",
  "https://duckduckgo.com/?q=IF+Elfsborg",
  "https://duckduckgo.com/?q=TSG+1899+Hoffenheim",
  "https://duckduckgo.com/?q=Beşiktaş+JK",
  "https://duckduckgo.com/?q=Maccabi+Tel+Aviv+FC",
  "https://duckduckgo.com/?q=SK+Slavia+Prague",
  "https://duckduckgo.com/?q=Malmö+FF",
  "https://duckduckgo.com/?q=FC+RFS",
  "https://duckduckgo.com/?q=PFC+Ludogorets+Razgrad",
  "https://duckduckgo.com/?q=FC+Dynamo+Kyiv",
  "https://duckduckgo.com/?q=OGC+Nice",
  "https://duckduckgo.com/?q=Qarabağ+FK",
]

const PremierLeague = [
  "https://duckduckgo.com/?q=Arsenal+FC",
  "https://duckduckgo.com/?q=Manchester+City+FC",
  "https://duckduckgo.com/?q=Aston+Villa+FC",
  "https://duckduckgo.com/?q=Chelsea+FC",
  "https://duckduckgo.com/?q=Crystal+Palace+FC",
  "https://duckduckgo.com/?q=Liverpool+FC",
  "https://duckduckgo.com/?q=Manchester+United+FC",
  "https://duckduckgo.com/?q=Everton+FC",
  "https://duckduckgo.com/?q=Brighton+Hove+Albion+FC",
  "https://duckduckgo.com/?q=Sunderland+AFC",
  "https://duckduckgo.com/?q=Tottenham+Hotspur+FC",
  "https://duckduckgo.com/?q=Newcastle+United+FC",
  "https://duckduckgo.com/?q=Fulham+FC",
  "https://duckduckgo.com/?q=AFC+Bournemouth",
  "https://duckduckgo.com/?q=Brentford+FC",
  "https://duckduckgo.com/?q=Leeds+United",
  "https://duckduckgo.com/?q=Nottingham+Forest+FC",
  "https://duckduckgo.com/?q=West+Ham+United+FC",
  "https://duckduckgo.com/?q=Burnley+FC",
  "https://duckduckgo.com/?q=Wolverhampton+Wanderers+FC",
]

const Championship = [
  "https://duckduckgo.com/?q=Coventry+City+Football+Club",
  "https://duckduckgo.com/?q=Middlesbrough+FC",
  "https://duckduckgo.com/?q=Preston+North+End+FC",
  "https://duckduckgo.com/?q=Millwall+FC",
  "https://duckduckgo.com/?q=Ipswich+Town+FC",
  "https://duckduckgo.com/?q=Hull+City",
  "https://duckduckgo.com/?q=Stoke+City+FC",
  "https://duckduckgo.com/?q=Leicester+City+FC",
  "https://duckduckgo.com/?q=Queens+Park+Rangers+FC",
  "https://duckduckgo.com/?q=Southampton+FC",
  "https://duckduckgo.com/?q=Bristol+City+FC",
  "https://duckduckgo.com/?q=Birmingham+City+FC",
  "https://duckduckgo.com/?q=Watford+FC",
  "https://duckduckgo.com/?q=Wrexham+AFC",
  "https://duckduckgo.com/?q=West+Bromwich+Albion+FC",
  "https://duckduckgo.com/?q=Derby+County+Football+Club",
  "https://duckduckgo.com/?q=Charlton+Athletic",
  "https://duckduckgo.com/?q=Sheffield+United+FC",
  "https://duckduckgo.com/?q=Swansea+City+AFC",
  "https://duckduckgo.com/?q=Blackburn+Rovers+FC",
  "https://duckduckgo.com/?q=Portsmouth",
  "https://duckduckgo.com/?q=Oxford+United",
  "https://duckduckgo.com/?q=Norwich+City+FC",
  "https://duckduckgo.com/?q=Sheffield+Wednesday+FC",
]

const leagues = {
  LaLiga,
  SegundaDivision,
  UEFAChampionsLeague,
  EuropaLeague,
  PremierLeague,
  Championship,
}

let logos = []

for (const [league, teams] of Object.entries(leagues)) {
  for (const team of teams) {
    console.log("Fetching league", pc.blue(league), "team", pc.yellow(team))

    const response = await fetch(team)

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
      logos.push(logo)
      console.log(pc.green("==>"), "Found logo for URL")
    } else {
      console.log(pc.red("==>"), "No logo found for URL")
    }
  }
}

logos = Array.from(new Set(logos))

if (logos.length) {
  console.log(logos.length + " logos found")
  logos.forEach((e) => console.log("https://duckduckgo.com" + e))
} else {
  console.log("No logo found")
}
