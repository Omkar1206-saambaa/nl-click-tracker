export default async function handler(req, res) {
  const { link, user } = req.query;

  const DESTINATIONS = {
    youtube1: "https://www.youtube.com/@nischa",
    youtube2: "https://www.youtube.com/watch?v=g3S3Et69ni4&t=3s",
    tiktok: "https://www.tiktok.com/@foodnetwork/video/7377035269515562282",
    article2authorinfo: "https://www.bbcgoodfood.com/author/jolewin",
    article2link: "https://www.bbcgoodfood.com/health/nutrition/health-benefits-blueberries",
    article1ytlink: "https://www.youtube.com/watch?v=inpok4MKVLM",
    article1link: "https://www.goodhousekeeping.com/health/fitness/a42396941/yoga-for-beginners/",
    lucidmotorsad: "https://lucidmotors.com/",
    loyalityprogram: "https://order.incentivio.com/c/bareblends/?_gl=1*10jolw4*_gcl_au*MTcwNDcyMTI0MC4xNzQxODE5NDcx*_ga*MTE1NDUwMjcwMy4xNzQxODE5NDcy*_ga_B8HK12Z56M*MTc0MTgxOTQ3Mi4xLjAuMTc0MTgxOTQ3Mi42MC4wLjA.",
    athletaad: "https://athleta.gap.com/",
    orderlink: "https://order.incentivio.com/c/bareblends",
    websitelink: "https://bareblends.com"
  };

  const destination = DESTINATIONS[link];

  if (!destination) {
    return res.status(400).send("Invalid link parameter.");
  }

  // Log click to Google Apps Script
  try {
    await fetch(`https://script.google.com/macros/s/AKfycbwWcvE3ecYePnK8JGiuUAjxstOuaoLUaPNUPyBcQSO_ECFT8iZaNlitdM_ZkCtHcM0r/exec?link=${link}&user=${encodeURIComponent(user || "unknown")}`);
  } catch (error) {
    console.error("Logging failed:", error);
  }

  res.writeHead(302, { Location: destination });
  res.end();
}
{
  "functions": {
    "api/redirect.js": {
      "runtime": "nodejs18.x",
      "maxDuration": 10
    }
  }
}

