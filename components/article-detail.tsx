"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, User, Tag, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const articles = [
  {
    id: "1",
    slug: { en: "hidden-beaches-la-maddalena", sr: "skrivene-plaze-la-maddalene" },
    title: {
      en: "Hidden Beaches of La Maddalena",
      sr: "Skrivene plaže La Maddalene",
    },
    excerpt: {
      en: "Discover secluded coves and pristine beaches only accessible by boat in the stunning archipelago.",
      sr: "Otkrijte skrivene uvale i netaknute plaže dostupne samo brodom u zadivljujućem arhipelagu.",
    },
    content: {
      en: `<p>The La Maddalena Archipelago remains one of the Mediterranean's best-kept secrets. While tourists flock to the more accessible beaches of Costa Smeralda, those in the know venture further to discover coves of extraordinary beauty.</p>
      
      <h2>Spiaggia Rosa: The Pink Paradise</h2>
      <p>Perhaps the most famous of all is Spiaggia Rosa on Budelli island. The beach's distinctive pink hue comes from tiny fragments of coral, shells, and microscopic organisms that have accumulated over millennia. While landing on the beach is now prohibited to preserve its delicate ecosystem, you can still admire its ethereal beauty from the water.</p>
      
      <h2>Cala Corsara: The Pirate's Cove</h2>
      <p>Legend has it that Cala Corsara was once a hideout for Mediterranean pirates. Today, it offers some of the most crystalline waters you'll find anywhere in Europe. The beach is divided into four smaller coves, each with its own character. Arrive early to claim your spot in this natural paradise.</p>
      
      <h2>How to Reach These Hidden Gems</h2>
      <p>The only way to access most of these beaches is by boat. We recommend chartering a local gozzo (traditional Sardinian boat) with an experienced captain who knows the hidden approach routes and best times to visit. Most charters include snorkeling equipment, allowing you to explore the underwater world that is equally spectacular.</p>
      
      <h2>Best Time to Visit</h2>
      <p>The ideal months are June and September when the waters are warm but the crowds thinner than peak summer. Early morning departures ensure you experience these magical places in their most serene state.</p>`,
      sr: `<p>Arhipelag La Maddalena ostaje jedna od najbolje čuvanih tajni Mediterana. Dok turisti hrle na pristupačnije plaže Costa Smeralde, oni upućeni odlaze dalje da otkriju uvale izuzetne lepote.</p>
      
      <h2>Spiaggia Rosa: Ružičasti raj</h2>
      <p>Možda najpoznatija od svih je Spiaggia Rosa na ostrvu Budelli. Karakteristična ružičasta nijansa plaže potiče od sitnih fragmenata korala, školjki i mikroskopskih organizama koji su se nakupljali milenijumima. Iako je sletanje na plažu sada zabranjeno radi očuvanja njenog delikatnog ekosistema, još uvek možete diviti se njenoj nežnoj lepoti sa vode.</p>
      
      <h2>Cala Corsara: Piratska uvala</h2>
      <p>Legenda kaže da je Cala Corsara nekada bila skrovište za mediteranske pirate. Danas nudi neke od najkristalnijih voda koje ćete naći bilo gde u Evropi. Plaža je podeljena na četiri manje uvale, svaka sa svojim karakterom. Stignite rano da biste zauzeli svoje mesto u ovom prirodnom raju.</p>
      
      <h2>Kako doći do ovih skrivenih dragulja</h2>
      <p>Jedini način da pristupite većini ovih plaža je brodom. Preporučujemo čarter lokalnog gozzo-a (tradicionalnog sardinijskog čamca) sa iskusnim kapetanom koji poznaje skrivene prilazne rute i najbolje vreme za posetu. Većina čartera uključuje opremu za snorkeling, što vam omogućava da istražite podvodni svet koji je jednako spektakularan.</p>
      
      <h2>Najbolje vreme za posetu</h2>
      <p>Idealni meseci su jun i septembar kada su vode tople ali gužve manje nego u vrhuncu leta. Rani jutarnji polasci osiguravaju da doživite ova magična mesta u njihovom najmirnijim stanju.</p>`,
    },
    category: { en: "Travel Guide", sr: "Vodič za putovanje" },
    date: "Dec 10, 2025",
    readTime: "5 min",
    author: "Sofia Ferretti",
    image: "/la-maddalena-islands-sardinia-turquoise-water.jpg",
    tags: ["beaches", "islands", "boat trips"],
  },
  {
    id: "2",
    slug: { en: "sardinian-wine-terroir-journey", sr: "sardinijsko-vino-putovanje-kroz-teruare" },
    title: {
      en: "Sardinian Wine: A Journey Through Terroir",
      sr: "Sardinijsko vino: Putovanje kroz teruare",
    },
    excerpt: {
      en: "From Cannonau to Vermentino, explore the rich wine heritage of this Mediterranean island.",
      sr: "Od Cannonau do Vermentino, istražite bogato vinsko nasleđe ovog mediteranskog ostrva.",
    },
    content: {
      en: `<p>Sardinia's wine tradition dates back over 3,000 years, making it one of the oldest wine-producing regions in the Mediterranean. The island's unique terroir—shaped by ancient granite soils, sea breezes, and intense sunshine—produces wines of exceptional character.</p>
      
      <h2>Cannonau: The Island's Red Soul</h2>
      <p>Cannonau, known internationally as Grenache, has been cultivated in Sardinia for centuries. Some believe it's the original home of this varietal before it spread to France and Spain. The wines are powerful yet elegant, with notes of ripe cherry, Mediterranean herbs, and a distinctive mineral finish. The best examples come from the mountainous Ogliastra region.</p>
      
      <h2>Vermentino di Gallura: White Gold</h2>
      <p>The only DOCG (highest quality designation) wine in Sardinia, Vermentino di Gallura is grown in the granite hills of the Gallura region near Costa Smeralda. These wines offer brilliant acidity, notes of citrus and white flowers, and a distinctive saline finish that speaks to the proximity of the sea.</p>
      
      <h2>Where to Taste</h2>
      <p>We recommend visiting Surrau winery in Arzachena, just minutes from Porto Cervo. Their stunning modern architecture houses centuries-old winemaking traditions. For a more intimate experience, seek out the small family-run cantinas in the villages of Jerzu and Mamoiada.</p>`,
      sr: `<p>Sardinijska vinska tradicija datira više od 3.000 godina, što je čini jednom od najstarijih vinskih regija na Mediteranu. Jedinstveni teruar ostrva—oblikovan drevnim granitnim tlom, morskim povetarcem i intenzivnim suncem—proizvodi vina izuzetnog karaktera.</p>
      
      <h2>Cannonau: Crvena duša ostrva</h2>
      <p>Cannonau, međunarodno poznat kao Grenache, uzgaja se na Sardiniji vekovima. Neki veruju da je to originalna domovina ove sorte pre nego što se proširila u Francusku i Španiju. Vina su moćna ali elegantna, sa notama zrele trešnje, mediteranskog bilja i prepoznatljivog mineralnog završetka. Najbolji primeri dolaze iz planinskog regiona Ogliastra.</p>
      
      <h2>Vermentino di Gallura: Belo zlato</h2>
      <p>Jedino DOCG (najviša oznaka kvaliteta) vino na Sardiniji, Vermentino di Gallura uzgaja se u granitnim brdima regiona Gallura blizu Costa Smeralde. Ova vina nude sjajnu kiselost, note citrusa i belog cveća, i prepoznatljiv slani završetak koji govori o približnosti mora.</p>
      
      <h2>Gde degustirati</h2>
      <p>Preporučujemo posetu vinariji Surrau u Arzacheni, samo nekoliko minuta od Porto Cerva. Njihova zadivljujuća moderna arhitektura čuva vekovima stare tradicije pravljenja vina. Za intimnije iskustvo, potražite male porodične kantice u selima Jerzu i Mamoiada.</p>`,
    },
    category: { en: "Culture", sr: "Kultura" },
    date: "Dec 5, 2025",
    readTime: "7 min",
    author: "Marco Ferrara",
    image: "/sardinian-vineyard-wine-tasting-luxury.jpg",
    tags: ["wine", "culture", "gastronomy"],
  },
  {
    id: "3",
    slug: { en: "slow-travel-sardinia", sr: "umetnost-sporog-putovanja-na-sardiniji" },
    title: {
      en: "The Art of Slow Travel in Sardinia",
      sr: "Umetnost sporog putovanja na Sardiniji",
    },
    excerpt: {
      en: "Why taking your time unlocks the true essence of this beautiful island.",
      sr: "Zašto odvajanje vremena otkriva pravu suštinu ovog prekrasnog ostrva.",
    },
    content: {
      en: `<p>In a world obsessed with seeing more, doing more, and posting more, Sardinia invites you to embrace a different philosophy. Here, the concept of slow travel isn't just a trend—it's a way of life that has been practiced for generations.</p>
      
      <h2>The Sardinian Concept of Time</h2>
      <p>Sardinians have a unique relationship with time. Conversations linger over espresso, meals stretch for hours, and there's always time for a passeggiata. This isn't laziness—it's a deliberate choice to prioritize quality of experience over quantity of activities.</p>
      
      <h2>Why Slow Travel Matters Here</h2>
      <p>The island reveals its secrets gradually. The hidden beach you stumbled upon after a long walk. The nonna who invited you to taste her handmade culurgiones. The shepherd who shared stories of transhumance traditions unchanged for centuries. These moments don't appear on itineraries—they emerge when you give them space to happen.</p>
      
      <h2>Practical Tips for Slow Travel</h2>
      <p>Stay in one place for at least a week. Choose accommodation with a kitchen and shop at local markets. Leave room in each day for the unexpected. Learn a few words of Sardinian—distinct from Italian—and watch doors open that would otherwise remain closed.</p>`,
      sr: `<p>U svetu opsednutom time da se vidi više, uradi više i objavi više, Sardinija vas poziva da prihvatite drugačiju filozofiju. Ovde koncept sporog putovanja nije samo trend—to je način života koji se praktikuje generacijama.</p>
      
      <h2>Sardinijski koncept vremena</h2>
      <p>Sardinjci imaju jedinstven odnos sa vremenom. Razgovori se otežu uz espreso, obroci traju satima, i uvek ima vremena za passeggiatu. Ovo nije lenjost—to je namerni izbor da se prioritet da kvalitetu iskustva nad količinom aktivnosti.</p>
      
      <h2>Zašto je sporo putovanje važno ovde</h2>
      <p>Ostrvo otkriva svoje tajne postepeno. Skrivena plaža na koju ste naišli posle dugog šetanja. Nona koja vas je pozvala da probate njene ručno pravljene culurgiones. Pastir koji je delio priče o tradicijama transhumance nepromenjenim vekovima. Ovi trenuci se ne pojavljuju na itinererima—oni se pojavljuju kada im date prostora da se dogode.</p>
      
      <h2>Praktični saveti za sporo putovanje</h2>
      <p>Ostanite na jednom mestu najmanje nedelju dana. Izaberite smeštaj sa kuhinjom i kupujte na lokalnim pijacama. Ostavite prostor u svakom danu za neočekivano. Naučite nekoliko reči sardinijskog—različitog od italijanskog—i gledajte kako se vrata otvaraju koja bi inače ostala zatvorena.</p>`,
    },
    category: { en: "Lifestyle", sr: "Životni stil" },
    date: "Nov 28, 2025",
    readTime: "4 min",
    author: "Elena Manca",
    image: "/san-pantaleo-sardinia-mountain-village-authentic.jpg",
    tags: ["lifestyle", "travel tips", "culture"],
  },
  {
    id: "4",
    slug: { en: "best-restaurants-porto-cervo", sr: "najbolji-restorani-u-porto-cervu" },
    title: {
      en: "Best Restaurants in Porto Cervo",
      sr: "Najbolji restorani u Porto Cervu",
    },
    excerpt: {
      en: "Our curated list of exceptional dining experiences in Costa Smeralda's capital.",
      sr: "Naša selekcija izuzetnih gastronomskih iskustava u prestonici Costa Smeralde.",
    },
    content: {
      en: `<p>Porto Cervo's dining scene rivals the world's great culinary capitals. From Michelin-starred fine dining to authentic local trattorias, here are our recommendations for the most memorable meals.</p>
      
      <h2>Fine Dining</h2>
      <p>Matsuri at Hotel Cala di Volpe brings exceptional Japanese cuisine to Sardinia, with fresh fish flown in daily. For Italian haute cuisine, Principe Cervo's La Pergola offers creative interpretations of Sardinian classics in an elegant terrace setting.</p>
      
      <h2>Seaside Splendor</h2>
      <p>Il Pescatore at Hotel Pitrizza serves the freshest seafood in an intimate cove setting—arrive by boat for the full experience. Nikki Beach combines Mediterranean cuisine with a glamorous beach club atmosphere.</p>
      
      <h2>Local Treasures</h2>
      <p>For authentic Sardinian flavors, venture to nearby San Pantaleo and dine at Giagoni. Their porceddu (roast suckling pig) and culurgiones are legendary. In Porto Cervo's old town, Da Giovannino offers home-style cooking that's been feeding locals for decades.</p>`,
      sr: `<p>Gastronomska scena Porto Cerva rivalizuje sa velikim svetskim kulinarskim prestonicama. Od Michelin restorana do autentičnih lokalnih tratoria, evo naših preporuka za najupečatljivije obroke.</p>
      
      <h2>Visoka gastronomija</h2>
      <p>Matsuri u hotelu Cala di Volpe donosi izuzetnu japansku kuhinju na Sardiniju, sa svežom ribom koja se doprema svakodnevno. Za italijansku visoku kuhinju, La Pergola u Principe Cervo nudi kreativne interpretacije sardinijskih klasika u elegantnom terasastom ambijentu.</p>
      
      <h2>Primorski sjaj</h2>
      <p>Il Pescatore u hotelu Pitrizza služi najsvežije morske plodove u intimnom okruženju uvale—stignite brodom za potpuno iskustvo. Nikki Beach kombinuje mediteransku kuhinju sa glamuroznom atmosferom plažnog kluba.</p>
      
      <h2>Lokalno blago</h2>
      <p>Za autentične sardinijske ukuse, otputujte do obližnjeg San Pantalea i večerajte u Giagoni. Njihov porceddu (pečeno prasence) i culurgiones su legendarni. U starom gradu Porto Cerva, Da Giovannino nudi domaću kuhinju koja hrani lokalno stanovništvo decenijama.</p>`,
    },
    category: { en: "Dining", sr: "Gastronomija" },
    date: "Nov 20, 2025",
    readTime: "6 min",
    author: "Paolo Ferretti",
    image: "/luxury-private-dining-sunset-mediterranean.jpg",
    tags: ["restaurants", "dining", "gastronomy"],
  },
  {
    id: "5",
    slug: { en: "yacht-etiquette-guide", sr: "jahting-etikecija-vodic-za-pocetnike" },
    title: {
      en: "Yacht Etiquette: A First-Timer's Guide",
      sr: "Jahting etikecija: Vodič za početnike",
    },
    excerpt: {
      en: "Everything you need to know before embarking on your first luxury yacht charter.",
      sr: "Sve što treba da znate pre nego što se ukrcate na vaš prvi luksuzni jahting čarter.",
    },
    content: {
      en: `<p>Chartering a yacht for the first time can feel intimidating, but with a little preparation, you'll settle into the lifestyle seamlessly. Here's everything you need to know to make the most of your maiden voyage.</p>
      
      <h2>Shoes Off, Worries Off</h2>
      <p>The first rule of yacht life: no shoes on deck (except proper boat shoes with non-marking soles). This protects the pristine teak from damage. Pack several pairs of deck shoes or simply embrace barefoot luxury.</p>
      
      <h2>Tipping Culture</h2>
      <p>Standard gratuity is 15-20% of the charter fee, given directly to the captain at the end of your voyage to distribute among the crew. For exceptional service, generous guests may tip more.</p>
      
      <h2>The APA (Advance Provisioning Allowance)</h2>
      <p>Typically 25-35% of the charter fee, the APA covers food, beverages, fuel, and docking fees. Your captain will provide a detailed account at voyage's end, with any surplus returned to you.</p>
      
      <h2>What to Pack</h2>
      <p>Less is more. Soft-sided bags store more easily than hard suitcases. Bring swimwear, casual resort wear, and one elegant outfit for shore dinners. Don't forget reef-safe sunscreen—your crew will appreciate your environmental consideration.</p>`,
      sr: `<p>Čarterovanje jahte po prvi put može delovati zastrašujuće, ali sa malo pripreme, lako ćete se uklopiti u ovaj stil života. Evo svega što treba da znate da biste maksimalno iskoristili svoje prvo putovanje.</p>
      
      <h2>Cipele dole, brige dole</h2>
      <p>Prvo pravilo života na jahti: bez cipela na palubi (osim pravih brodskih cipela sa đonovima koji ne ostavljaju tragove). Ovo štiti netaknuti tikovo drvo od oštećenja. Spakovajte nekoliko pari palubnih cipela ili jednostavno prihvatite luksuz bosi.</p>
      
      <h2>Kultura napojnica</h2>
      <p>Standardna napojnica je 15-20% cene čartera, data direktno kapetanu na kraju vašeg putovanja da je rasporedi među posadom. Za izuzetnu uslugu, velikodušni gosti mogu dati više.</p>
      
      <h2>APA (Avansna naknada za nabavku)</h2>
      <p>Obično 25-35% cene čartera, APA pokriva hranu, piće, gorivo i pristanišne takse. Vaš kapetan će pružiti detaljan račun na kraju putovanja, sa svim viškom vraćenim vama.</p>
      
      <h2>Šta spakovati</h2>
      <p>Manje je više. Meke torbe se lakše skladište od tvrdih kofera. Ponesite kupaće kostime, ležernu letnju odeću i jednu elegantnu kombinaciju za večere na kopnu. Ne zaboravite kremu za sunčanje bezbednu za koralne grebene—vaša posada će ceniti vašu ekološku svest.</p>`,
    },
    category: { en: "Tips", sr: "Saveti" },
    date: "Nov 15, 2025",
    readTime: "8 min",
    author: "Captain Antonio Ferrante",
    image: "/luxury-yacht-sailing-mediterranean-costa-smeralda.jpg",
    tags: ["yachts", "tips", "travel"],
  },
]

const recentArticles = articles.slice(0, 4)

const categories = [
  { name: { en: "Travel Guide", sr: "Vodič" }, count: 8 },
  { name: { en: "Culture", sr: "Kultura" }, count: 5 },
  { name: { en: "Lifestyle", sr: "Životni stil" }, count: 4 },
  { name: { en: "Dining", sr: "Gastronomija" }, count: 6 },
  { name: { en: "Tips", sr: "Saveti" }, count: 3 },
]

import { JournalSidebar } from "@/components/journal-sidebar"

export function ArticleDetail({ id }: { id: string }) {
  const { language, getUrl } = useLanguage()
  const article = articles.find((a) => a.id === id || a.slug.en === id || a.slug.sr === id)

  if (!article) {
    return null
  }

  return (
    <section className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href={getUrl("/journal")}
          className="inline-flex items-center gap-2 text-[#5A6B70] hover:text-[#1B4B5A] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === "sr" ? "Nazad na žurnal" : "Back to Journal"}</span>
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden mb-8">
              <Image
                src={article.image || "/placeholder.svg?height=450&width=800&query=sardinia travel"}
                alt={article.title[language as "en" | "sr"]}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-[#C9A962] text-[#1B4B5A] text-sm font-medium rounded-full">
                  {article.category[language as "en" | "sr"]}
                </span>
              </div>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-[#5A6B70]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>
                  {article.readTime} {language === "sr" ? "čitanja" : "read"}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1B4B5A] mb-8">
              {article.title[language as "en" | "sr"]}
            </h1>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none text-[#5A6B70] 
                [&>p]:mb-6 [&>p]:leading-relaxed
                [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:text-[#1B4B5A] [&>h2]:mt-10 [&>h2]:mb-4
                [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-6
                [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-6"
              dangerouslySetInnerHTML={{ __html: article.content[language as "en" | "sr"] }}
            />

            {/* Tags */}
            <div className="flex items-center gap-3 mt-10 pt-8 border-t border-[#E8E4DC]">
              <Tag className="w-4 h-4 text-[#5A6B70]" />
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#F7F4EE] text-[#5A6B70] text-sm rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              {/* About Author */}
              <div className="bg-[#F7F4EE] rounded-2xl p-6">
                <h4 className="font-serif text-lg text-[#1B4B5A] mb-4">
                  {language === "sr" ? "O autoru" : "About the Author"}
                </h4>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#1B4B5A] flex items-center justify-center text-white font-serif text-xl">
                    {article.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium text-[#1B4B5A]">{article.author}</p>
                    <p className="text-sm text-[#5A6B70]">{language === "sr" ? "Saradnik" : "Contributing Writer"}</p>
                  </div>
                </div>
                <p className="text-sm text-[#5A6B70]">
                  {language === "sr"
                    ? "Zaljubljenik u Sardiniju koji deli priče o kulturi, hrani i skrivenim draguljima ovog ostrva."
                    : "A Sardinia enthusiast sharing stories about the island's culture, food, and hidden gems."}
                </p>
              </div>

              <JournalSidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
