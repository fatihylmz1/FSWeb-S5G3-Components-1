import "./haberler.less";
// Haberleri üretmek için aşağıdaki data kullanılacak. Önce inceleyin sonra 94. satıra geçin.
// OPSİYONEL: Kendinizi maceracı hissediyorsanız, bu verileri farklı bir modülden dışa aktarmaya çalışın ve buraya aktarın.
// ES6 Modülleri ile ilgili bilgi için bakabilirsiniz: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const data = [
  {
    baslik: 'Workintech Öğrencileri: "Bizler en iyi öğrencileriz!"',
    tarih: "11 Kasım 2022",
    ilkParagraf: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    ikinciParagraf: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    ucuncuParagraf: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`,
  },
  {
    baslik: "Javascript ve Sen, ES6",
    tarih: "10 Kasım 2022",
    ilkParagraf: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    ikinciParagraf: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    ucuncuParagraf: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`,
  },
  {
    baslik: "React vs Angular vs Vue",
    tarih: "9 Kasım 2022",
    ilkParagraf: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    ikinciParagraf: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    ucuncuParagraf: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`,
  },
  {
    baslik: "2022'de Profesyonel Yazılımcı Olmak",
    tarih: "1 Kasım 2022",
    ilkParagraf: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    ikinciParagraf: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    ucuncuParagraf: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`,
  },
  {
    baslik: "Website Bug Trackers: Your Digital Sherlock Holmes",
    tarih: "18 Ekim 2023",
    ilkParagraf: `In today’s digital era, if your business does not have a website, consider it dead.If you do have a company website,
    the last thing you want to grapple with is a fast and sleek digital platform plagued by bugs.Yep, those nasty little flaws that can 
    lead to the loss of revenue and even damage the reputation of your brand. Fortunately, bug tracking tools are swooping in to help, 
    pushing old-hat spreadsheets into the background.On that note, let's review some of the top benefits you can reap from issue trackers 
    besides the actual bug hunting. `,

    ikinciParagraf: `What’s the point of having an excellent reporting system on bugs reported but not being able to manage tasks? An effective
     website bug tracker should help you streamline this process for your team and external stakeholders.In this case, it allows the team to 
     convert the tasks into feedback, categorize issues into lists, and assign these to responsible stakeholders.Your company is most likely 
     using a gamut of management tools. So it seems logical enough that the website issue tracking tool should be integrated into your workflow 
     seamlessly.That makes it more convenient to import and export the action points and details related to these tasks into and from other tools. `,

    ucuncuParagraf: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`,
  },
  {
    baslik: "Is Investing in Crypto for Passive Income Goals a Good Idea-l?",
    tarih: "14 Kasım 2023",
    ilkParagraf: `There are billions in **​total value locked in the DeFi economy**​. In less than one year, it grew by 4000%, reaching over $40
     billion at one point.But despite the overwhelming influx of new interest and investment, decentralized finance is far from perfect. 
     Thankfully, its flaws are not systematic human greed or corruption, or inequality and exclusivity. Its issues are mostly on the technical 
     and social side, and so in theory will be resolved over time and with more participation.One of these fixable flaws of the crypto economy 
     is a lack of liquidity.​ ​And​ ​you​ ​can help provide it, making the market stronger and earning passive income at the same time. `,

    ikinciParagraf: `Now is a great time to become a liquidity provider. The industry is scaling fast and supply needs to meet fast-growing
     demands. To help grow the decentralized economy, many projects offer incentives or rewards for crypto holders to contribute their 
     funds (supply liquidity) and help sustain this fast-growing ecosystem.A fluid economy is a powerful one, opening up new financial 
     opportunities and freedom for everyone - not just the upper echelon of Wall Street bros. So ​**learn more about liquidity mining** 
     and maybe discover (or rekindle) a new relationship with crypto <3 `,

    ucuncuParagraf: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`,
  },
];

/*
  Adım 1: Haber oluşturmak için 'haberYapici' adında bir bileşen(component) oluşturun.
  Bileşeniniz, argümanı haberleri içeren dizi olarak alan bir fonksiyon olacak,
  ve aşağıdaki gibi görünen bir DOM düğümü döndürecek:

  <div class="article">
    <h2>{haber başlığı}</h2>
    <p class="tarih">{haber tarihi}</p>

    {üç ayrı paragraf elementi}

    <button class="expandButton">+</button>
  </div>

  Adım 2: Hala `haberYapici` içindeyiz, button.expandButton 'a bir click event dinleyici ekleyin.
  Bu dinleyici div.article öğesine 'article-open' class'ını ekleyip/çıkaracak (toogle).

  Adım 3: Fonksiyonunuzdan bir öğe döndürmeyi unutmayın.

  Adım 4: Fonksiyonunuzun dışında, tüm datayı döngüye sokun(loop). Bir div.article öğesi oluşturmak ve bunu div.articles içindeki DOM'a eklemek için
  her yinelemede oluşturduğunuz bileşeninizi kullanacaksınız(bknz. index.html).

  Adım 5: Veri dizisine yeni haber nesnesi eklemeyi deneyin. Diğer verilerle aynı yapıda olmasına dikkat edin.
  Eklediğiniz yeni haberi görmek için sayfayı yenileyin.
*/

function haberYapici(haberler) {

  const div = document.createElement("div");
  div.className = "article";


  const h2 = document.createElement("h2");
  h2.textContent = haberler.baslik;
  div.appendChild(h2);


  const tarih = document.createElement("p");
  tarih.className = "tarih";
  tarih.textContent = haberler.tarih;
  div.appendChild(tarih);


  const prg1 = document.createElement("p");
  prg1.textContent = haberler.ilkParagraf;
  div.appendChild(prg1);


  const prg2 = document.createElement("p");
  prg2.textContent = haberler.ikinciParagraf;
  div.appendChild(prg2);


  const prg3 = document.createElement("p");
  prg3.textContent = haberler.ucuncuParagraf;
  div.appendChild(prg3);


  const btn = document.createElement("button");
  btn.className = "expandButton";
  btn.textContent = "+";
  btn.addEventListener("click", (event) => {
    event.target.parentElement.classList.toggle("article-open");
  })
  div.appendChild(btn);



  return div;

}
const articles = document.querySelector(".articles");
data.forEach(element => {
  articles.appendChild(haberYapici(element));
});



