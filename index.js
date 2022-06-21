const prompt = require("prompt-sync")({ sigint: true });

const question = (question, textQuestion, textRepeat) => {
  console.log(textQuestion);
  console.log(question);
  let answer = prompt("ja oder nein? ");
  console.log("");
  while (answer != "ja") {
    console.log(textRepeat);
    console.log(textQuestion);
    console.log(question);
    answer = prompt("Ja oder Nein? ");
    console.log("");
  }
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cook() {
  // Einkaufsliste
  let textQuestion = "Haben Sie die folgende Zutat eingekauft?";
  let textRepeat = "Bitte die folgende Zutat einkaufen!";
  question("500 g weiche Butter", textQuestion, textRepeat);
  question("310 g Zucker", textQuestion, textRepeat);
  question("1 Pck. Vanillezucker", textQuestion, textRepeat);
  question("1 Prise Salz", textQuestion, textRepeat);
  question("5 Eier (Größe M)", textQuestion, textRepeat);
  question("230 g Mehl", textQuestion, textRepeat);
  question("3 TL Backpulver", textQuestion, textRepeat);
  question("900 ml Milch", textQuestion, textRepeat);
  question("2 Pck. Vanillepuddingpulver", textQuestion, textRepeat);
  question(
    "200 g Johannisbeer- oder Himbeermarmelade",
    textQuestion,
    textRepeat
  );
  question("50 g Puderzucker", textQuestion, textRepeat);
  question("150 g Haselnusskrokant", textQuestion, textRepeat);
  question(
    "einige Johannisbeeren oder Himbeeren zum Garnieren",
    textQuestion,
    textRepeat
  );

  // Küchenutensilien
  textQuestion = "Haben Sie die folgende Küchenutensilien?";
  textRepeat = "Bitte die folgende Küchenutensilien organisieren!";
  question("Backofen", textQuestion, textRepeat);
  question("Gugelhupfform", textQuestion, textRepeat);
  question("Schüsseln", textQuestion, textRepeat);
  question("Rührgerät", textQuestion, textRepeat);
  question("Waage", textQuestion, textRepeat);
  question("Messbecher", textQuestion, textRepeat);
  question("Teelöffel", textQuestion, textRepeat);
  question("Topf", textQuestion, textRepeat);
  question("Schneebesen", textQuestion, textRepeat);
  question("Frischhaltefolie", textQuestion, textRepeat);
  question("Messer", textQuestion, textRepeat);
  question("Tortenheber", textQuestion, textRepeat);

  // Schritt 1 Rührteig
  textQuestion = "Haben Sie den folgenden Schritt durchgeführt?";
  textRepeat = "Bitte den folgenden Schritt durchführen!";
  question(
    "Gugelhupfform mit kaltem Wasser ausschwenken und nicht abtrockenen",
    textQuestion,
    textRepeat
  );
  question(
    "Backofen auf 160 Grad Umluft oder 180 Ober/Unter Hitze vorheizen",
    textQuestion,
    textRepeat
  );
  question(
    "250 g weiche Butter, 230 g Zucker, 1. Pck. Vanillezucker & 1 Prise Salz schaumig schlagen",
    textQuestion,
    textRepeat
  );
  question("5 Eier nach und nach unterrühren", textQuestion, textRepeat);
  question(
    "230 g Mehl mit 3 TL Backpulver vermischen",
    textQuestion,
    textRepeat
  );
  question(
    "Abwechselnd das Mehl und insgesamt 50 ml Milch in den Teig rühren",
    textQuestion,
    textRepeat
  );
  question(
    "Teig in die Gugelhupfform füllen und glatt streichen",
    textQuestion,
    textRepeat
  );
  question(
    "Form im untern Drittel in den Ofen (45 min)",
    textQuestion,
    textRepeat
  );

  console.log("Kuchen wird gebacken. Bitte 45 Minuten Warten.");
  await sleep(45000);
  console.log("Kuchen ist fertig gebacken.");

  question("Kuchen auskühlen lassen", textQuestion, textRepeat);

  // Schritt 2 Pudding
  question(
    "100 ml Milch, 80 g Zucker & 2 Pck. Vanillepulver glatt rühren",
    textQuestion,
    textRepeat
  );
  question(
    "Restliche Milch (750ml) zum Kochen bringen",
    textQuestion,
    textRepeat
  );
  question(
    "Pudding-Milch-Zucker-Mischung zugeben und unter Rühren 1 Minute köcheln lassen",
    textQuestion,
    textRepeat
  );
  question(
    "Pudding in Schüssel füllen & direkt mit Frischhaltefolie abdecken",
    textQuestion,
    textRepeat
  );
  question("Pudding komplett abkühlen lassen", textQuestion, textRepeat);

  // Schritt 3 Marmelade
  question("Rührteig aus der Gugelhupfform lösen", textQuestion, textRepeat);
  question(
    "Kuchen 2x waagerecht durchscheiden in 3 gleich starke Scheiben",
    textQuestion,
    textRepeat
  );
  question(
    "100 g der Marmelade auf unterem Boden verstreichen",
    textQuestion,
    textRepeat
  );
  question(
    "100 g der Marmelade auf mittlerem Boden verstreichen",
    textQuestion,
    textRepeat
  );

  // Schritt 4 Buttercreme
  question(
    "250 g weiche Butter & 50 g Puderzucker cremig weiß und schaumig schlagen",
    textQuestion,
    textRepeat
  );
  question(
    "Esslöffelweise den komplett erkalteten Pudding zugeben und unterrühren",
    textQuestion,
    textRepeat
  );
  question(
    "1/4 der Buttercreme zum Einstreichen und Garnieren beiseite stellen",
    textQuestion,
    textRepeat
  );

  // Schritt 5 Füllung
  question(
    "Die Hälfte der Buttercreme auf unteren Boden geben & mit Tortenheber verstreichen",
    textQuestion,
    textRepeat
  );
  question(
    "Mittleren Boden auflegen und leicht andrücken",
    textQuestion,
    textRepeat
  );
  question(
    "Restliche Buttercreme auftragen & mit Tortenheber verstreichen",
    textQuestion,
    textRepeat
  );
  question(
    "Oberen Boden auflegen & leicht andrücken",
    textQuestion,
    textRepeat
  );
  question("Kuchen 15 min kühl stellen", textQuestion, textRepeat);

  console.log("Kuchen wird abgekühlt. Bitte 15 Minuten Warten.");
  await sleep(15000);
  console.log("Kuchen ist gekühlt.");

  question(
    "Mit beiseite gelegter Buttercreme Kuchen außen einstreich",
    textQuestion,
    textRepeat
  );

  // Schritt 6 Deko
  question(
    "150 g Haselnusskrokant rundum an den Kuchen drücken",
    textQuestion,
    textRepeat
  );
  question(
    "Nach belieben mit Creme-Tuffs garnieren & mit Johannis- oder Himbeeren belegen",
    textQuestion,
    textRepeat
  );
  question("Bis zum servieren kalt stellen", textQuestion, textRepeat);

  // Ende
  console.log("Der Kuchen ist fertig. Guten Appetit!");
}
cook();
