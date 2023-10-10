import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
      "selector-title": "Select Your Experience",
      "selector-aeropuerto": "Airports",
      "selector-papel": "Paper and Cardboard",
      "selector-logi": "Logistics",

      "loader-text": "Loading experience...",

      "header-home": "Home",
      "header-airport": "Airports",
      "airport-desliza": "Scroll down",
      "airport-driver1-title": "Efficient Check-In with a Smile",

      "airport-driver2-title-safety": "Airport Safety",
      "airport-driver1-title2": "Read More",

      "airport-driver1-tab1-title": "Real-Time Solutions for Challenge Resolution",
      "airport-driver1-tab1-text": "At the core of the BHS control room, our experts act as guardian angels, seamlessly integrating with the On-Screen Resolution (OSR) system to address real-time challenges and ensure a smooth and secure flow of luggage. Behind this technology is a highly skilled human team that responds effectively to unforeseen situations. Human engineering shines through in making informed and quick decisions that keep the operation moving seamlessly.",
      "airport-driver1-tab2-title": "Custom Solutions for Every Need",
      "airport-driver1-tab2-text": "Crossbelt Sorter: A high-capacity, high-precision automated sorting system capable of handling up to 11,000 UPH, with weights up to 50 kg and lengths up to 1.5 m per piece. High-Speed Horizontal Diverter (HSD): Available in 1 or 2 belts with capacities ranging from 800 UPH to 4,800 UPH. Vertical Sorter Units (VSU): Available with 1 or 3 belts and capacities ranging from 1,800 UPH to 3,200 UPH. Depending on the airport's needs and architecture, we offer solutions like carousels or straight Make-Up belts. We always prioritize ergonomics and functionality to ensure efficient airport operation.",
      "airport-driver1-tab3-title": "Efficient Baggage Sorting",
      "airport-driver1-tab3-text": "Automatic Tag Readers offer precise luggage identification. They can be basic laser systems with 360° reading, which are effective with an efficiency of up to 95%, or hybrid systems that combine laser and vision cameras, achieving efficiency rates of 99%. When more advanced solutions are needed, MATEC offers luggage identification using RFID (Radio Frequency Identification) technology, with read rates of 99.9% and highly competitive installation costs. Once the luggage is identified, our baggage management system, MATBag, in close collaboration with other airport systems through HLC (High Level Control), determines the automated sorting route. Then, the BHS, controlled by LLC (Low Level Control), takes care of delivering the luggage to its final destination.",

      "airport-slidable-title1": "Your Safety, Our Priority",
      "airport-slidable-texto1": "At the core of airport safety, MATEC seamlessly integrates with inspection systems (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) in full compliance with TSA and ECAC standards. We perform thorough baggage inspections at levels 1, 2, and 3, achieving unmatched sorting accuracy with capacities of up to 3600 UPH per line. For sorting suspicious or clean baggage, MATEC employs high-tech and robust solutions, ensuring the required reliability even in the most demanding airport environments.",
      "airport-slidable-texto2": "Furthermore, our designs focus on achieving high redundancy throughout the baggage handling system (BHS), fulfilling the responsibility of keeping airports constantly in motion, with availability of up to 99.9%. Our baggage management software, MATBag, seamlessly and highly intuitively integrates with inspection systems, facilitating seamless communication between the two. This not only enhances accuracy in sorting suspicious baggage but also generates the necessary reports to maintain a high-capacity operation that satisfies all stakeholders, including airlines, passengers, maintenance personnel, airport operators, and other providers, in addition to airport directives and commercial areas, among others.",

      "airport-slidable-title3": "BHS",
      "airport-slidable-texto3": "The BHS Control Center is the central core of our operation. This is where our state-of-the-art technology seamlessly integrates to ensure every piece of luggage reaches its destination smoothly, providing you with the peace of mind that only a guardian angel could offer. Our highly trained staff coordinates complex processes, constantly monitors and optimizes luggage flow, ensuring uninterrupted operation. Advanced Technology: MATEC's BHS Control Center is equipped with the latest IT technology to ensure system operability and redundancy. Seamless Integration: It seamlessly integrates with airport networks and telecommunications systems.",
      "airport-slidable-texto4": "Real-Time Data Management: Allows integration, analysis, and real-time reporting of all BHS operations. This includes graphics, reports, diagrams, and more, providing essential tools for reliable and efficient BHS management. Cutting-Edge Infrastructure: The Control Center designed by MATEC is equipped with the latest technology, from state-of-the-art VideoWalls to ergonomic workstations with hot redundancy, CCTV system, state-of-the-art data center, fiber optic networks, and an optimal environment to ensure uninterrupted operation. Seamless Integration: In the Control Center, we can integrate, analyze, and generate reports from information collected from various sources, including PLC systems, MATBag baggage management software, inspection systems, and more.",

      "airport-driver1-title-sidebar": "Check-In",
      "airport-driver1-text-sidebar": "We begin our journey with an efficient and friendly check-in that ensures a hassle-free experience filled with smiles for our passengers. Behind every effective check-in process is the meticulous human hand that collaborates with airports to design customized solutions that cater to their unique needs. We consider every detail, from the layout of the conveyors to the interaction with airline personnel. While the technology is advanced, it is human attention that perfects the entire process.",
      "airport-driver1-text-sidebar2": "Our MATEC Check-In offers solutions that allow for precise and secure weighing, processing, and injection of luggage, silently and delicately. These solutions seamlessly integrate with the unique architecture of each airport. Whether through our Self Bag Drop (SBD) for an automated experience or integration of the BHS with staff-operated check-in counters, the result is always an efficient and careful process. Additionally, our baggage management software, MATBag, seamlessly integrates with the Departure Control System (DCS), not only facilitating airport operation but also enhancing the experience of airlines and, most importantly, passengers.",

      "functions-title1": "MATEC's CBRA",
      "functions-text1": "Our Level 3 Inspection Zone is supplied by MATEC in full compliance with TSA and ECAC regulations, while adapting to the specific needs of each airport. We strive to design ergonomic, highly productive inspection stations that provide the best balance between comfort and cost-effectiveness.",
      "functions-title2": "Variety",
      "functions-text2": "In MATEC's CBRA, we offer a complete range of solutions, including transportation systems, BIT (Baggage Inspection Table) inspection tables, supports for inspection accessories like ETD (Explosive Trace Detection), BSD (Baggage Status Display), SVS, printers, fully equipped workstations, monitors, mouse, keyboards, wrapping and protective material, among others.",

      "guardian-angel-title": "MATEC: The Guardian Angel in Airport Baggage Handling Systems",
      "guardian-angel-text1": "MATEC, your visionary ally in airport baggage handling systems, passionately takes on the role of Creator. From the moment passengers check in to collecting their luggage in the reclaim area, our commitment is clear: to offer innovative solutions that optimize efficiency, safety, and comfort, while also driving profitability and sustainability. Below, we explore how MATEC adds a human touch to critical areas such as Check-In, Security Screening, Baggage Sorting (Make Up), Baggage Reclaim, and more.",
      "guardian-angel-text2": "This is a moment of reflection on the needs of the airports, which are our wards. Airports, in turn, are the guardians of the passengers and work tirelessly to ensure the travel experience lives up to every flight. Each flight has a purpose, whether it's closing a major business deal that will bring prosperity to one of our passengers' companies, a family vacation that will create lifelong memories, returning after a long period away from home, remembering a loved one, or simply reuniting with dear ones in the home country. All these are meaningful motives for our passengers, and our role is to ensure that what they carry with them to achieve their goals arrives timely and in perfect condition.",

      "click": "Click Here!",

      "closing-title": "Baggage Reclaim: Your Perfect Closure",
      "closing-text1": "In the baggage reclaim area, MATEC remains your protector, ensuring a safe reunion between passengers and their belongings. Here, meticulous attention to detail is our specialty. Our team works tirelessly to ensure that every piece of luggage reaches its owner, completing a worry-free journey and giving plenty of reasons to smile.",
      "closing-text2": "Our arrival baggage systems solutions offer clean and fast operations. They easily integrate with state-of-the-art security systems, enabling airports to innovate and grow sustainably while providing exceptional arrival service to passengers. Within the arrivals BHS solution set, you'll find:",
      "bhs-solution-title1": "Ergonomic Baggage Feeding Systems:",
      "bhs-solution-text1": "Designed for safe and efficient luggage handling.",
      "bhs-solution-title2": "Integration with X-Ray Inspection Systems:",
      "bhs-solution-text2": "For effective and safe luggage inspection.",
      "bhs-solution-title3": "Manual Re-tagging Systems:",
      "bhs-solution-text3": "Ideal for connecting luggage or luggage requiring additional inspection.",
      "bhs-solution-title4": "Identification and Tracking Systems:",
      "bhs-solution-text4": "For precise tracking of each piece of luggage.",
      "bhs-solution-title5": "Baggage Reconciliation Systems (BRS):",
      "bhs-solution-text5": "Ensure matching between luggage and passenger.",
      "bhs-solution-title6": "Flat Carousels:",
      "bhs-solution-text6": "Provide ergonomics and safety for passengers.",
      "bhs-solution-title7": "Inclined Carousels:",
      "bhs-solution-text7": "Allow for greater accumulation and functionality.",

      "airport-driver2-title": "BHS Control Center: Your Reliable Operations Core",
      "footer-credits": "Credits",
      "footer-privacy": "Privacy Policy",
      "footer-cookies": "Cookies",
      "visor-modelos-title": "Our Products"
    }
  },

  de: {
    translation: {
      "selector-title": "Wähle deine Erfahrung",
      "selector-aeropuerto": "Flughäfen",
      "selector-papel": "Papier und Karton",
      "selector-logi": "Logistik",

      "loader-text": "Erfahrung wird geladen...",

      "header-home": "Startseite",
      "header-airport": "Flughäfen",
      "airport-desliza": "Nach unten wischen",
      "airport-driver1-title": "Effizientes Einchecken mit einem Lächeln",
      "airport-driver2-title-safety": "Flughafensicherheit",
      "airport-driver1-title2": "Mehr erfahren",

      "airport-driver1-tab1-title": "Echtzeitlösungen zur Lösung von Herausforderungen",
      "airport-driver1-tab1-text": "Im Kern des BHS-Kontrollraums agieren unsere Experten wie Schutzengel und integrieren sich nahtlos in das On-Screen-Resolution (OSR)-System, um Herausforderungen in Echtzeit anzugehen und einen stetigen und sicheren Fluss von Gepäck zu gewährleisten. Hinter dieser Technologie steht ein hochqualifiziertes menschliches Team, das effektiv auf unvorhergesehene Situationen reagiert. Die menschliche Ingenieurskunst zeichnet sich durch fundierte und schnelle Entscheidungen aus, die den reibungslosen Ablauf der Operation sicherstellen.",

      "airport-driver1-tab2-title": "Maßgeschneiderte Lösungen für jede Anforderung",
      "airport-driver1-tab2-text": "Crossbelt Sorter: Ein hochkapazitives und präzises automatisches Sortiersystem, das bis zu 11.000 UPH verarbeiten kann, mit Gewichten von bis zu 50 kg und Längen von bis zu 1,5 m pro Stück. Hochgeschwindigkeits-Horizontalweichen (HSD): Erhältlich mit 1 oder 2 Bändern und Kapazitäten von 800 UPH bis 4.800 UPH. Vertikale Sortiereinheiten (VSU): Erhältlich mit 1 oder 3 Bändern und Kapazitäten von 1.800 UPH bis 3.200 UPH. Abhängig von den Bedürfnissen und der Architektur des Flughafens bieten wir Lösungen wie Karussells oder gerade Make-Up-Bänder an. Wir priorisieren immer Ergonomie und Funktionalität, um einen effizienten Flughafenbetrieb zu gewährleisten.",

      "airport-driver1-tab3-title": "Effiziente Gepäcksortierung",
      "airport-driver1-tab3-text": "Automatische Tag Reader ermöglichen eine präzise Gepäckidentifikation. Es können grundlegende Laser-Systeme mit 360°-Lesung sein, die mit einer Effizienz von bis zu 95% effektiv sind, oder hybride Systeme, die Laser und Kameras kombinieren und Effizienzraten von 99% erzielen. Wenn fortschrittlichere Lösungen benötigt werden, bietet MATEC Gepäckidentifikation mittels RFID (Radio Frequency Identification)-Technologie an, mit Leseraten von 99,9% und sehr wettbewerbsfähigen Installationskosten. Sobald das Gepäck identifiziert ist, bestimmt unser Gepäckverwaltungssystem MATBag in enger Zusammenarbeit mit anderen Flughafensystemen über High-Level Control (HLC) die automatische Sortierroute. Dann kümmert sich das BHS, gesteuert durch Low-Level Control (LLC), darum, das Gepäck sicher zum endgültigen Ziel zu bringen.",

      "airport-slidable-title1": "Ihre Sicherheit, unsere Priorität",
      "airport-slidable-texto1": "Im Kern der Flughafensicherheit integriert sich MATEC vollständig in Inspektionssysteme (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) in voller Übereinstimmung mit den TSA- und ECAC-Standards. Wir führen gründliche Gepäckinspektionen auf den Ebenen 1, 2 und 3 durch und erzielen eine unübertroffene Klassifizierungsgenauigkeit mit Kapazitäten von bis zu 3600 UPH pro Linie. Für die Klassifizierung von verdächtigem oder sauberem Gepäck setzt MATEC hochmoderne und robuste Lösungen ein, die die notwendige Zuverlässigkeit auch in anspruchsvollsten Flughafenumgebungen gewährleisten.",

      "airport-slidable-texto2": "Darüber hinaus konzentrieren sich unsere Designs darauf, eine hohe Redundanz im gesamten Baggage Handling System (BHS) zu erreichen und die Verantwortung zu erfüllen, Flughäfen ständig in Bewegung zu halten, mit einer Verfügbarkeit von bis zu 99,9%. Unsere Gepäckverwaltungssoftware MATBag integriert sich nahtlos und äußerst intuitiv in Inspektionssysteme und erleichtert eine nahtlose Kommunikation zwischen beiden. Dies verbessert nicht nur die Genauigkeit bei der Klassifizierung verdächtigen Gepäcks, sondern generiert auch die erforderlichen Berichte, um einen Hochleistungsbetrieb aufrechtzuerhalten, der alle Interessengruppen zufriedenstellt, einschließlich Fluggesellschaften, Passagiere, Wartungspersonal, Flughafenbetreiber und andere Anbieter sowie Flughafenanweisungen und kommerzielle Bereiche, unter anderem.",

      "airport-slidable-title3": "BHS",
      "airport-slidable-texto3": "Das BHS-Kontrollzentrum ist der zentrale Kern unserer Operation. Hier integriert sich unsere hochmoderne Technologie nahtlos, um sicherzustellen, dass jedes Gepäckstück reibungslos sein Ziel erreicht und Ihnen die Gelassenheit gibt, die nur ein Schutzengel bieten kann. Unser hochqualifiziertes Personal koordiniert komplexe Prozesse, überwacht ständig den Gepäckfluss und optimiert ihn, um einen unterbrechungsfreien Betrieb zu gewährleisten. Fortschrittliche Technologie: Das BHS-Kontrollzentrum von MATEC ist mit modernster IT-Technologie ausgestattet, um die Betriebsfähigkeit und Redundanz des Systems zu gewährleisten. Nahtlose Integration: Es integriert sich nahtlos in die Netzwerke und Telekommunikationssysteme der Flughäfen.",

      "airport-slidable-texto4": "Echtzeitdatenmanagement: Ermöglicht die Integration, Analyse und Echtzeitgenerierung von Berichten zu allen BHS-Operationen. Dazu gehören Diagramme, Berichte, Diagramme und mehr, um essentielle Werkzeuge für das zuverlässige und effiziente Management des BHS bereitzustellen. State-of-the-Art-Infrastruktur: Das von MATEC entworfene Kontrollzentrum verfügt über die neueste Technologie, von hochmodernen Video Walls bis hin zu ergonomischen Arbeitsplätzen mit Hot-Redundanz, CCTV-Systemen, modernsten Rechenzentren, Glasfasernetzen und einer optimalen Umgebung, um einen reibungslosen Betrieb zu gewährleisten. Vollständige Integration: Im Kontrollzentrum können wir Integration, Analyse und Berichterstellung aus verschiedenen Quellen, einschließlich PLC-Systeme, der Gepäckverwaltungssoftware MATBag, Inspektionssysteme und mehr.",

      "airport-driver1-title-sidebar": "Einchecken",
      "airport-driver1-text-sidebar": "Wir beginnen unsere Reise mit einem effizienten und freundlichen Check-in, der unseren Passagieren eine unkomplizierte und lächelnde Erfahrung garantiert. Hinter jedem effektiven Check-in-Prozess steht die sorgfältige menschliche Hand, die mit Flughäfen zusammenarbeitet, um maßgeschneiderte Lösungen zu entwerfen, die ihren einzigartigen Anforderungen entsprechen. Wir berücksichtigen jedes Detail, von der Anordnung der Förderbänder bis zur Interaktion mit dem Fluggesellschaftspersonal. Auch wenn die Technologie fortgeschritten ist, ist die menschliche Aufmerksamkeit das, was den gesamten Prozess perfektioniert.",

      "airport-driver1-text-sidebar2": "Unser MATEC Check-In bietet Lösungen, die ein genaues und sicheres Wiegen, Verarbeiten und Injizieren des Gepäcks ermöglichen, leise und sanft. Diese Lösungen integrieren sich nahtlos in die einzigartige Architektur jedes Flughafens. Ob durch unseren Self Bag Drop (SBD) für eine automatische Erfahrung oder die Integration des BHS mit von Mitarbeitern betriebenen Check-in-Schaltern, das Ergebnis ist immer ein effizienter und sorgfältiger Prozess. Darüber hinaus integriert sich unsere Gepäckverwaltungssoftware MATBag nahtlos in das Abflugkontrollsystem (DCS), was nicht nur den Flughafenbetrieb, sondern auch die Erfahrung der Fluggesellschaften und vor allem der Passagiere erleichtert.",

      "functions-title1": "CBRA von MATEC",
      "functions-text1": "Unsere Inspektionszone der Stufe 3 wird von MATEC in voller Einhaltung der TSA- und ECAC-Vorschriften geliefert und passt sich zusätzlich an die spezifischen Bedürfnisse jedes Flughafens an. Wir setzen alles daran, ergonomische, äußerst produktive Inspektionsstationen zu entwerfen, die das beste Verhältnis zwischen Komfort und Kosten bieten.",

      "functions-title2": "Vielfalt",
      "functions-text2": "In MATECs CBRA bieten wir eine komplette Palette von Lösungen an, einschließlich Transportsystemen, BIT (Baggage Inspection Table)-Inspektionstischen, Halterungen für Inspektionszubehör wie ETD (Explosive Trace Detection), BSD (Baggage Status Display), SVS, Druckern, komplett ausgestatteten Arbeitsplätzen, Monitoren, Maus, Tastaturen, Verpackungs- und SchutzmateriaI, unter anderem.",

      "guardian-angel-title": "MATEC: Der Schutzengel in Flughafen-Gepäckabfertigungssystemen",
      "guardian-angel-text1": "MATEC, Ihr visionärer Verbündeter in Flughafen-Gepäckabfertigungssystemen, nimmt leidenschaftlich die Rolle des Schöpfers an. Vom Moment des Eincheckens der Passagiere bis zur Abholung ihres Gepäcks im Bereich der Gepäckausgabe ist unser Engagement klar: innovative Lösungen anzubieten, die die Effizienz, Sicherheit und den Komfort optimieren und gleichzeitig Rentabilität und Nachhaltigkeit vorantreiben. Im Folgenden untersuchen wir, wie MATEC den kritischen Bereichen wie Einchecken, Sicherheitsinspektion, Gepäcksortierung (Make Up), Gepäckausgabe und mehr eine menschliche Note verleiht.",

      "guardian-angel-text2": "Dies ist ein Moment der Reflexion über die Bedürfnisse der Flughäfen, die unsere Geschützten sind. Flughäfen sind wiederum die Beschützer der Passagiere und arbeiten unermüdlich daran, sicherzustellen, dass das Reiseerlebnis jedem Flug gerecht wird. Jeder Flug hat einen Zweck, sei es der Abschluss eines großen Geschäfts, das Wohlstand für das Unternehmen eines unserer Passagiere bringen wird, ein Familienurlaub, der lebenslange Erinnerungen schaffen wird, die Rückkehr nach einem langen Zeitraum fern von zu Hause, die Erinnerung an einen geliebten Menschen oder einfach die Wiedervereinigung mit geliebten Menschen im Heimatland. All diese sind bedeutende Gründe für unsere Passagiere, und unsere Aufgabe ist es, sicherzustellen, dass das, was sie mit sich führen, um ihre Ziele zu erreichen, pünktlich und in einwandfreiem Zustand ankommt.",

      "click": "Klicken Sie hier!",

      "closing-title": "Gepäckausgabe: Ihr perfekter Abschluss",
      "closing-text1": "Im Bereich der Gepäckausgabe am Flughafen bleibt MATEC Ihr Beschützer und gewährleistet eine sichere Wiederbegegnung zwischen den Passagieren und ihren Habseligkeiten. Hier ist die sorgfältige Aufmerksamkeit zum Detail unsere Spezialität. Unser Team arbeitet unermüdlich daran, sicherzustellen, dass jedes Gepäckstück seinen Besitzer erreicht, und vervollständigt so eine sorgenfreie Reise und einen Grund zum Lächeln.",

      "closing-text2": "Unsere Lösungen für Ankunftssysteme bieten saubere und schnelle Betriebsabläufe. Sie integrieren sich problemlos in modernste Sicherheitssysteme, ermöglichen es Flughäfen, Innovationen voranzutreiben und nachhaltig zu wachsen, und bieten gleichzeitig einen außergewöhnlichen Ankunftsservice für die Passagiere. Innerhalb des Sortiments an Ankunftssystemen des BHS finden Sie:",
      "bhs-solution-title1": "Ergonomische Gepäckzufuhrsysteme:",
      "bhs-solution-text1": "Entwickelt für sicheres und effizientes Handling des Gepäcks.",
      "bhs-solution-title2": "Integration mit Röntgeninspektionssystemen:",
      "bhs-solution-text2": "Für effektive und sichere Gepäckinspektion.",
      "bhs-solution-title3": "Manuelle Wiederetikettierungssysteme:",
      "bhs-solution-text3": "Ideal für Anschlussgepäck oder solches, das zusätzliche Inspektion erfordert.",
      "bhs-solution-title4": "Identifikations- und Tracking-Systeme:",
      "bhs-solution-text4": "Für präzises Tracking jedes Gepäckstücks.",
      "bhs-solution-title5": "Gepäckabgleichsysteme (BRS - Baggage Reconciliation System):",
      "bhs-solution-text5": "Gewährleisten die Übereinstimmung von Gepäck und Passagier.",
      "bhs-solution-title6": "Flache Karussells:",
      "bhs-solution-text6": "Bieten Ergonomie und Sicherheit für die Passagiere.",
      "bhs-solution-title7": "Neigungskarussells:",
      "bhs-solution-text7": "Ermöglichen eine höhere Ansammlung und Funktionalität.",

      "airport-driver2-title": "BHS-Kontrollzentrum: Ihr zuverlässiger Betriebskern",

      "footer-credits": "Gutschriften",
      "footer-privacy": "Datenschutz",
      "footer-cookies": "Cookies",

      "visor-modelos-title": "Unsere Produkte"
    }
  },
  cn: {
    translation: {
      "selector-title": "选择您的体验",
      "selector-aeropuerto": "机场",
      "selector-papel": "纸张和纸板",
      "selector-logi": "物流",
      "loader-text": "正在加载体验...",
      "header-home": "主页",
      "header-airport": "机场",
      "header-home": "主页",
      "airport-desliza": "向下滑动",
      "airport-driver1-title": "高效笑容办理登机手续",
      "airport-driver2-title-safety": "机场安全",
      "airport-driver1-title2": "了解更多",
      "airport-driver1-tab1-title": "实时解决方案应对挑战",
      "airport-driver1-tab1-text": "在BHS控制室的核心，我们的专家充当守护天使，与On-Screen Resolution (OSR)系统集成，以实时解决挑战并确保行李的流畅安全运输。在这项技术背后，是一个高度培训有素的人员团队，能够有效应对意外情况。人性工程在做出明智迅速的决定方面脱颖而出，以确保机场运营的高效进行，保持顺畅。",
      "airport-driver1-tab2-title": "针对每种需求的特定解决方案",
      "airport-driver1-tab2-text": "交叉带式分拣机: 一种高容量高精度的自动分类系统，可处理高达11,000件/小时，每件重达50公斤，长度最长达1.5米。高速水平偏转器（HSD - High Speed Diverter）: 提供1或2条带和800 UPH到4,800 UPH的容量选择。垂直偏转器（VSU - Vertical Sorter Unit）: 提供1或3条带，容量从1,800 UPH到3,200 UPH不等。根据机场的需求和其架构，我们提供旋转木马或直线输送带等解决方案。我们始终优先考虑人体工程学和功能性，以确保机场的高效运营。",
      "airport-driver1-tab3-title": "高效行李分类",
      "airport-driver1-tab3-text": "自动行李标签阅读器提供精确的行李识别。它们可以是基于激光的基本360°读取的系统，其效率高达95％，或者结合激光和视觉摄像头的混合系统，实现高达99％的效率。当需要更先进的解决方案时，MATEC提供基于RFID技术（Radio Frequency Identification）的行李识别，读取率高达99.9％，并具有极具竞争力的安装成本。一旦识别出行李，我们的行李管理系统MATBag，与通过HLC（高级控制）与机场的其他系统紧密合作，确定自动分类的路线。然后，由LLC（低级控制）控制的BHS负责将行李送到最终目的地。",
      "airport-slidable-title1": "您的安全，我们的首要任务",
      "airport-slidable-texto1": "在机场安全的核心，MATEC与检查系统（HBS - 行李包裹检查 | CBIS - 行李托运检查系统）完全整合，符合TSA和ECAC标准。我们进行细致的1级、2级和3级行李检查，实现无与伦比的分类准确性，每条线的处理能力高达3600 UPH。对于可疑或干净的行李分类，MATEC采用高科技和强大的设计，确保在最苛刻的机场环境中也能提供所需的可靠性。",
      "airport-slidable-texto2": "此外，我们的设计侧重于在行李处理系统（BHS）的整个系统中实现高冗余性，确保持续不断地使机场保持运转，可达到99.9％的可用性。我们的行李管理软件MATBag与检查系统无缝、高度直观地集成，实现了两者之间的无缝通信。这不仅提高了对可疑行李的分类准确性，还生成了必要的报告，以保持满足所有利益相关者（利益相关者），包括航空公司、乘客、维护人员、机场运营商和其他供应商，以及机场的指令和商业领域等所有利益相关者的高容量运营的要求。",
      "airport-slidable-title3": "BHS",
      "airport-slidable-texto3": "BHS控制中心是我们操作的核心。在这里，我们的先进技术完美地整合，以确保每件行李顺利到达目的地，为您提供只有守护天使才能提供的安心感。我们高度培训有素的员工协调复杂的流程，不断监视和优化行李流动，确保运行顺畅。先进技术: MATEC的BHS控制中心配备了最新的IT技术，以确保系统的运行和冗余性。无缝集成: 它可以与机场的网络和电信系统无缝集成。",
      "airport-slidable-texto4": "实时数据管理: 可集成、分析和实时生成有关BHS所有操作的报告。这包括图表、报告、图表等，为BHS的可靠高效管理提供必要的工具。尖端基础设施: MATEC设计的控制中心配备了最新技术，从最新一代VideoWall到带有热冗余的人体工程学工作站、CCTV系统、先进的数据中心、光纤网络和适合确保不间断运行的环境。完整集成: 在控制中心，我们可以集成、分析和生成来自多种来源的信息的报告，包括PLC系统、行李管理软件MATBag、检查系统等。",
      "airport-driver1-title-sidebar": "办理登机手续",
      "airport-driver1-text-sidebar": "我们从高效、友好的办理登机手续开始我们的旅程，确保我们的乘客享受无忧无虑、充满笑容的体验。每个有效的办理登机手续背后都有一双细心的人手，与机场紧密合作，设计出符合其独特需求的定制解决方案。我们考虑到每一个细节，从传送带的布局到与航空公司人员的互动。虽然技术先进，但人的关注使整个流程更加完美。",
      "airport-driver1-text-sidebar2": "我们的MATEC办理登机手续提供解决方案，可确保精准、安全、静音和温和地称重、处理和注入行李。这些解决方案与每个机场的独特架构和谐地整合在一起。无论是通过我们的自助行李办理（SBD）获得自动化体验，还是将BHS与工作人员操作的办理柜台进行整合，结果始终是高效和小心的过程。此外，我们的行李管理软件MATBag能够无缝集成到登机控制系统（DCS - 出发控制系统）中，这不仅简化了机场的运营，也改善了航空公司的体验，最重要的是改善了乘客的体验。",
      "functions-title1": "MATEC的CBRA",
      "functions-text1": "我们的3级检查区由MATEC完全按照TSA和ECAC的规定提供，并适应每个机场的特定需求。我们努力设计符合人体工程学、高产能且提供最佳舒适度和成本效益的检查站。",
      "functions-title2": "多样性",
      "functions-text2": "在MATEC的CBRA中，我们提供一系列完整的解决方案，包括输送系统、行李检查台BIT（行李检查台）、用于检查配件的支架，如ETD（爆炸物痕迹检测）、BSD（行李状态显示）、SVS、打印机、设备齐全的工作站、显示器、鼠标、键盘、包装和保护材料等。",
      "guardian-angel-title": "MATEC: 机场行李处理系统的守护天使",
      "guardian-angel-text1": "MATEC，您在机场行李处理系统方面的远见伙伴，充满激情地扮演创造者的角色。从乘客办理登机手续的那一刻起，直到他们在行李提取区取回自己的行李，我们的承诺是明确的：提供创新解决方案，优化效率、安全性和舒适度，同时推动盈利能力和可持续性。接下来，我们将探讨MATEC如何在诸如办理登机手续、安全检查、行李分类（化妆）、行李提取等关键领域中为其增添人性。",
      "guardian-angel-text2": "这是一个反思机场需求的时刻，机场是我们的受保护者。机场又是乘客的守护者，并不知疲倦地努力确保旅行体验与每次飞行的价值相匹配。每次飞行都有一个目的，无论是为了完成某位乘客的公司带来繁荣的一笔重大交易，还是为了度过会生命中难忘的记忆的家庭度假，或者是在长时间离家后的回归，亲人的记忆，或者只是在祖国与亲人团聚。所有这些对我们的乘客来说都是重要的理由，我们的角色就是确保他们携带的东西可以及时到达并处于完好无损的状态。",
      "click": "点击这里!",
      "closing-title": "入口行李提取：您完美的结束",
      "closing-text1": "在入口行李提取区，MATEC仍然是您的保护者，确保乘客和他们的物品安全相遇。在这里，我们对细节的关注是我们的专长。我们的团队不懈努力，确保每件行李都能到达其主人，从而完成无忧无虑的旅程，给乘客带来理由微笑。",
      "closing-text2": "我们的到达系统解决方案提供干净快速的运营。它们与最先进的安全系统轻松集成，使机场能够进行创新和可持续增长，同时为乘客提供卓越的到达服务。在到达的BHS解决方案中，您会发现：",
      "bhs-solution-title1": "人体工程学行李进料系统：",
      "bhs-solution-text1": "设计用于安全高效地处理行李。",
      "bhs-solution-title2": "与X射线检查系统集成：",
      "bhs-solution-text2": "实现对行李的有效安全检查。",
      "bhs-solution-title3": "手动重新标签系统：",
      "bhs-solution-text3": "适用于转机行李或需要额外检查的行李。",
      "bhs-solution-title4": "识别和跟踪系统：",
      "bhs-solution-text4": "实现对每件行李的精确跟踪。",
      "bhs-solution-title5": "行李对账系统（BRS - 行李对账系统）：",
      "bhs-solution-text5": "确保行李与乘客的一致。",
      "bhs-solution-title6": "平面旋转木马：",
      "bhs-solution-text6": "为乘客提供人体工程学和安全。",
      "bhs-solution-title7": "倾斜旋转木马：",
      "bhs-solution-text7": "允许更大的积累和功能。",
      "airport-driver2-title": "BHS控制中心：您可靠的运营核心",
      "footer-credits": "信用",
      "footer-privacy": "隐私政策",
      "footer-cookies": "Cookie",
      "visor-modelos-title": "我们的产品"
    }
  },
  fr: {
    translation: {
      "selector-title": "Sélectionnez votre expérience",
      "selector-aeropuerto": "Aéroports",
      "selector-papel": "Papier et carton",
      "selector-logi": "Logistique",

      "loader-text": "Chargement de l'expérience en cours...",

      "header-home": "Accueil",
      "header-airport": "Aéroports",
      "airport-desliza": "Faites défiler vers le bas",
      "airport-driver1-title": "Enregistrement efficace avec le sourire",

      "airport-driver2-title-safety": "Sécurité à l'aéroport",
      "airport-driver1-title2": "En savoir plus",

      "airport-driver1-tab1-title": "Solutions en temps réel pour relever les défis",
      "airport-driver1-tab1-text": "Au cœur de la salle de contrôle du BHS, nos experts agissent comme des anges gardiens, s'intégrant au système de résolution à l'écran (OSR) pour relever les défis en temps réel et garantir un flux constant et sûr des bagages. Derrière cette technologie, il y a une équipe humaine hautement qualifiée qui réagit de manière efficace aux situations imprévues. L'ingénierie humaine se distingue en prenant des décisions informées et rapides qui maintiennent l'opération en mouvement sans heurts.",
      "airport-driver1-tab2-title": "Solutions spécifiques pour chaque besoin",
      "airport-driver1-tab2-text": "Croosbelt Sorter : un système de tri automatique haute capacité et précision pouvant gérer jusqu'à 11 000 UPH, avec des poids allant jusqu'à 50 kg et des longueurs allant jusqu'à 1,5 m par pièce. Divergeurs horizontaux à grande vitesse (HSD - High Speed Diverter) : avec des options de 1 ou 2 bandes et des capacités allant de 800 UPH à 4 800 UPH. Unités de tri verticales (VSU - Vertical Sorter Unit) : disponibles avec une ou 3 bandes et des capacités variant de 1 800 UPH à 3 200 UPH. Selon les besoins de l'aéroport et son architecture, nous proposons des solutions telles que des carrousels ou des convoyeurs droits de Make Up. Nous privilégions toujours l'ergonomie et la fonctionnalité pour garantir un fonctionnement efficace de l'aéroport.",
      "airport-driver1-tab3-title": "Tri efficace des bagages",
      "airport-driver1-tab3-text": "Les Automatic Tag Reader offrent une identification précise des bagages. Ils peuvent être des systèmes laser de base avec une lecture à 360°, efficaces avec un taux d'efficacité allant jusqu'à 95%, ou des systèmes hybrides combinant laser et caméras de vision, atteignant des taux d'efficacité de 99%. Lorsque des solutions plus avancées sont nécessaires, MATEC propose l'identification des bagages par technologie RFID (Radio Frequency Identification), avec des taux de lecture de 99,9% et des coûts d'installation très compétitifs. Une fois que les bagages sont identifiés, notre système de gestion des bagages MATBag, en étroite collaboration avec d'autres systèmes de l'aéroport via le HLC (High Level Control), détermine la voie de tri automatique. Ensuite, le BHS, contrôlé par le LLC (Low Level Control), se charge de conduire les bagages à leur destination finale.",

      "airport-slidable-title1": "Votre sécurité, notre priorité",
      "airport-slidable-texto1": "Au cœur de la sécurité aéroportuaire, MATEC s'intègre complètement aux systèmes d'inspection (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) en totale conformité avec les normes de la TSA et de l'ECAC. Nous effectuons des inspections minutieuses des bagages aux niveaux 1, 2 et 3, atteignant une précision de tri inégalée avec des capacités allant jusqu'à 3600 UPH par ligne. Pour le tri des bagages suspects ou propres, MATEC utilise des solutions de haute technologie et de robustesse, garantissant la fiabilité nécessaire même dans les environnements aéroportuaires les plus exigeants.",
      "airport-slidable-texto2": "De plus, nos conceptions visent à obtenir une haute redondance dans l'ensemble du système de manutention des bagages (BHS), respectant la responsabilité de maintenir les aéroports en mouvement constant, avec une disponibilité pouvant atteindre 99,9%. Notre logiciel de gestion des bagages, MATBag, s'intègre de manière fluide et hautement intuitive aux systèmes d'inspection, facilitant une communication sans faille entre les deux. Cela améliore non seulement la précision dans le tri des bagages suspects, mais génère également les rapports nécessaires pour maintenir une opération à haute capacité qui satisfait toutes les parties prenantes (stakeholders), y compris les compagnies aériennes, les passagers, le personnel de maintenance, les opérateurs d'aéroport et autres fournisseurs, ainsi que les directions et les zones commerciales de l'aéroport, entre autres.",

      "airport-slidable-title3": "BHS",
      "airport-slidable-texto3": "Le Centre de Contrôle du BHS est le noyau central de notre opération. C'est ici que notre technologie de pointe s'intègre parfaitement pour garantir que chaque pièce de bagage atteigne sa destination sans problème, vous offrant la tranquillité d'esprit qu'un ange gardien seul pourrait offrir. Notre personnel hautement qualifié coordonne des processus complexes, surveille et optimise en permanence le flux de bagages, assurant un fonctionnement sans interruption. Technologie Avancée : Le Centre de Contrôle du BHS de MATEC est équipé de la dernière technologie en matière d'informatique pour garantir le bon fonctionnement et la redondance du système. Intégration Transparente : Elle s'intègre de manière fluide avec les réseaux et les systèmes de télécommunication des aéroports.",
      "airport-slidable-texto4": "Gestion des Données en Temps Réel : Permet l'intégration, l'analyse et la génération de rapports en temps réel de toutes les opérations du BHS. Cela inclut les graphiques, les rapports, les diagrammes, etc., fournissant des outils essentiels pour la gestion fiable et efficace du BHS. Infrastructure de Pointe : Le Centre de Contrôle conçu par MATEC est doté de la dernière technologie, du VideoWall de dernière génération aux postes de travail ergonomiques avec redondance à chaud, système de CCTV, centre de données de dernière génération, réseaux à fibre optique et un environnement optimal pour garantir un fonctionnement ininterrompu. Intégration Complète : Au Centre de Contrôle, nous pouvons intégrer, analyser et générer des rapports à partir d'informations collectées de diverses sources, y compris les systèmes PLC, le logiciel de gestion des bagages MATBag, les systèmes d'inspection, etc.",

      "airport-driver1-title-sidebar": "Enregistrement",
      "airport-driver1-text-sidebar": "Nous commençons notre voyage par un enregistrement efficace et convivial qui garantit une expérience sans tracas et pleine de sourires pour nos passagers. Derrière chaque processus d'enregistrement efficace se trouve la main méticuleuse de l'homme qui collabore avec les aéroports pour concevoir des solutions sur mesure adaptées à leurs besoins uniques. Nous prenons en compte chaque détail, de l'agencement des convoyeurs à l'interaction avec le personnel de la compagnie aérienne. Bien que la technologie soit avancée, c'est l'attention humaine qui perfectionne l'ensemble du processus.",
      "airport-driver1-text-sidebar2": "Notre Check-in MATEC propose des solutions permettant de peser, traiter et injecter les bagages avec précision et en toute sécurité, de manière silencieuse et délicate. Ces solutions s'intègrent harmonieusement à l'architecture unique de chaque aéroport. Que ce soit à travers notre Self Bag Drop (SBD) pour une expérience automatique ou l'intégration du BHS avec les comptoirs d'enregistrement exploités par le personnel, le résultat est toujours un processus efficace et attentionné. De plus, notre logiciel de gestion des bagages, MATBag, s'intègre sans heurts au système de contrôle de l'enregistrement (DCS - Departure Control System), facilitant non seulement l'exploitation de l'aéroport mais aussi l'expérience des compagnies aériennes et, plus important encore, des passagers.",

      "functions-title1": "CBRA de MATEC",
      "functions-text1": "Notre Zone d'Inspection de Niveau 3 est fournie par MATEC en totale conformité avec les réglementations de la TSA et de l'ECAC, tout en s'adaptant aux besoins spécifiques de chaque aéroport. Nous nous efforçons de concevoir des postes d'inspection ergonomiques, très productifs et offrant le meilleur rapport entre confort et coût-efficacité.",
      "functions-title2": "Variété",
      "functions-text2": "Dans le CBRA de MATEC, nous proposons une gamme complète de solutions, comprenant des systèmes de transport, des tables d'inspection BIT (Baggage Inspection Table), des supports pour accessoires d'inspection tels que l'ETD (Explosive Trace Detection), le BSD (Baggage Status Display), le SVS, des imprimantes, des postes de travail entièrement équipés, des moniteurs, des souris, des claviers, du matériel d'emballage et de protection, entre autres.",

      "guardian-angel-title": "MATEC : L'ange gardien des systèmes de manutention des bagages pour les aéroports",
      "guardian-angel-text1": "MATEC, votre allié visionnaire en matière de systèmes de manutention des bagages pour les aéroports, assume avec passion le rôle de Créateur. Dès le moment où les passagers s'enregistrent jusqu'à la récupération de leurs bagages à la zone de réclamation, notre engagement est clair : offrir des solutions innovantes qui optimisent l'efficacité, la sécurité et le confort, tout en stimulant la rentabilité et la durabilité. Nous explorons ci-dessous comment MATEC ajoute une touche humaine à des domaines critiques tels que l'enregistrement, l'inspection de sécurité, le tri des bagages (Make Up), la récupération des bagages, et plus encore.",
      "guardian-angel-text2": "C'est un moment de réflexion sur les besoins des aéroports, qui sont nos protégés. Les aéroports sont, à leur tour, les gardiens des passagers et travaillent sans relâche pour s'assurer que l'expérience du voyage est à la hauteur de chaque vol. Chaque vol a un but, que ce soit la conclusion d'un grand contrat qui apportera prospérité à l'entreprise d'un de nos passagers, des vacances en famille qui créeront des souvenirs durables, le retour après une longue période loin de chez soi, le souvenir d'un être cher, ou simplement les retrouvailles avec des personnes chères dans le pays d'origine. Toutes ces raisons sont significatives pour nos passagers, et notre rôle est de garantir que ce qu'ils emportent avec eux pour atteindre leurs objectifs arrive en temps opportun et en parfait état.",

      "click": "Cliquez ici !",

      "closing-title": "Récupération des bagages en entrée : Votre conclusion parfaite",
      "closing-text1": "Dans la zone de récupération des bagages en entrée, MATEC reste votre protecteur, assurant une retrouvaille en toute sécurité entre les passagers et leurs biens. Ici, l'attention méticuleuse aux détails est notre spécialité. Notre équipe travaille sans relâche pour garantir que chaque pièce de bagage parvienne à son propriétaire, complétant ainsi un voyage sans soucis et rempli de raisons de sourire.",
      "closing-text2": "Nos solutions pour les systèmes d'arrivée offrent des opérations propres et rapides. Elles s'intègrent facilement aux systèmes de sécurité de pointe, permettant aux aéroports d'innover et de croître de manière durable, tout en offrant un service d'arrivée exceptionnel aux passagers. Dans l'ensemble des solutions du BHS d'arrivée, vous trouverez :",
      "bhs-solution-title1": "Systèmes Ergonomiques d'Alimentation de Bagages :",
      "bhs-solution-text1": "Conçus pour une manipulation sûre et efficace des bagages.",
      "bhs-solution-title2": "Intégration avec les Systèmes d'Inspection par Rayons X :",
      "bhs-solution-text2": "Pour une inspection efficace et sûre des bagages.",
      "bhs-solution-title3": "Systèmes de Re-étiquetage Manuel :",
      "bhs-solution-text3": "Idéaux pour les bagages en correspondance ou nécessitant une inspection supplémentaire.",
      "bhs-solution-title4": "Systèmes d'Identification et de Suivi :",
      "bhs-solution-text4": "Pour un suivi précis de chaque pièce de bagage.",
      "bhs-solution-title5": "Systèmes de Réconciliation des Bagages (BRS - Baggage Reconciliation System) :",
      "bhs-solution-text5": "Garantissent la correspondance entre le bagage et le passager.",
      "bhs-solution-title6": "Carrousels Plats :",
      "bhs-solution-text6": "Offrent ergonomie et sécurité pour les passagers.",
      "bhs-solution-title7": "Carrousels Inclinés :",
      "bhs-solution-text7": "Permettent une accumulation et une fonctionnalité accrues.",

      "airport-driver2-title": "Centre de Contrôle BHS : Votre Noyau d'Opérations Fiable",
      "footer-credits": "Crédits",
      "footer-privacy": "Politique de confidentialité",
      "footer-cookies": "Cookies",
      "visor-modelos-title": "Nos produits"
    }
  },
  pt: {
    translation: {
      "selector-title": "Selecione sua experiência",
      "selector-aeropuerto": "Aeroportos",
      "selector-papel": "Papel e papelão",
      "selector-logi": "Logística",

      "loader-text": "Carregando experiência...",

      "header-home": "Página inicial",
      "header-airport": "Aeroportos",
      "airport-desliza": "Deslize para baixo",
      "airport-driver1-title": "Check-in eficiente com um sorriso",

      "airport-driver2-title-safety": "Segurança no aeroporto",
      "airport-driver1-title2": "Saiba mais",

      "airport-driver1-tab1-title": "Soluções em tempo real para resolver desafios",
      "airport-driver1-tab1-text": "No núcleo da sala de controle do BHS, nossos especialistas atuam como anjos da guarda, integrando-se ao sistema On-Screen Resolution (OSR) para abordar desafios em tempo real e garantir um fluxo constante e seguro de bagagens. Por trás dessa tecnologia, há uma equipe humana altamente treinada que responde de maneira eficaz a situações imprevistas. A engenharia humana se destaca ao tomar decisões informadas e rápidas que mantêm a operação em movimento sem problemas.",
      "airport-driver1-tab2-title": "Soluções específicas para cada necessidade",
      "airport-driver1-tab2-text": "Classificador de correia transversal: um sistema de classificação automática de alta capacidade e precisão que pode lidar com até 11.000 UPH, com pesos de até 50 kg e comprimentos de até 1,5 m por peça. Desviadores horizontais de alta velocidade (HSD - High Speed Diverter): com opções de 1 ou 2 correias e capacidades que variam de 800 UPH a 4.800 UPH. Desviadores verticais (VSU - Vertical Sorter Unit): disponíveis com uma ou 3 correias e capacidades que variam de 1.800 UPH a 3.200 UPH. Dependendo das necessidades do aeroporto e de sua arquitetura, oferecemos soluções como carrosséis ou esteiras retas de Make Up. Sempre priorizamos a ergonomia e a funcionalidade para garantir uma operação eficiente do aeroporto.",
      "airport-driver1-tab3-title": "Classificação eficiente de bagagens",
      "airport-driver1-tab3-text": "Os leitores automáticos de etiquetas oferecem uma identificação precisa da bagagem. Eles podem ser sistemas a laser básicos com leitura de 360°, que são eficazes com uma eficiência de até 95%, ou sistemas híbridos que combinam laser e câmeras de visão, alcançando taxas de eficiência de 99%. Quando são necessárias soluções mais avançadas, a MATEC oferece identificação de bagagem por meio de tecnologia RFID (Identificação por Radiofrequência), com taxas de leitura de 99,9% e custos de instalação altamente competitivos. Uma vez que a bagagem é identificada, nosso sistema de gerenciamento de bagagem MATBag, em estreita colaboração com outros sistemas do aeroporto por meio do HLC (Controle de Alto Nível), determina a rota de classificação automática. Em seguida, o BHS, controlado pelo LLC (Controle de Baixo Nível), se encarrega de levar a bagagem ao seu destino final.",

      "airport-slidable-title1": "Sua segurança, nossa prioridade",
      "airport-slidable-texto1": "No cerne da segurança aeroportuária, a MATEC se integra completamente aos sistemas de inspeção (HBS - Inspeção de Bagagens de Porão | CBIS - Sistema de Inspeção de Bagagens Verificadas) em total conformidade com os padrões da TSA e da ECAC. Realizamos inspeções minuciosas de bagagens nos níveis 1, 2 e 3, alcançando uma precisão de classificação insuperável com capacidades de até 3600 UPH por linha. Para a classificação de bagagens suspeitas ou limpas, a MATEC emprega soluções de alta tecnologia e robustez, garantindo a confiabilidade necessária mesmo nos ambientes aeroportuários mais exigentes.",
      "airport-slidable-texto2": "Além disso, nossos projetos são focados em obter uma alta redundância em todo o sistema de manuseio de bagagens (BHS), cumprindo a responsabilidade de manter os aeroportos em movimento constante, com uma disponibilidade que pode chegar a 99,9%. Nosso software de gerenciamento de bagagem, MATBag, integra-se de maneira fluida e altamente intuitiva com os sistemas de inspeção, facilitando uma comunicação sem falhas entre ambos. Isso não apenas melhora a precisão na classificação de bagagens suspeitas, mas também gera os relatórios necessários para manter uma operação de alta capacidade que satisfaça todas as partes interessadas (stakeholders), incluindo companhias aéreas, passageiros, pessoal de manutenção, operadores de aeroportos e outros fornecedores, além das diretrizes e áreas comerciais do aeroporto, entre outros.",

      "airport-slidable-title3": "BHS",
      "airport-slidable-texto3": "O Centro de Controle do BHS é o núcleo central de nossa operação. É aqui que nossa tecnologia de ponta se integra perfeitamente para garantir que cada peça de bagagem chegue ao seu destino sem problemas, proporcionando a tranquilidade que apenas um anjo da guarda poderia oferecer. Nosso pessoal altamente treinado coordena processos complexos, supervisiona e otimiza constantemente o fluxo de bagagens, garantindo um funcionamento sem interrupções. Tecnologia Avançada: O Centro de Controle do BHS da MATEC está equipado com a mais recente tecnologia em TI para garantir a operacionalidade e a redundância do sistema. Integração Perfeita: Integra-se de maneira fluida com as redes e sistemas de telecomunicações dos aeroportos.",
      "airport-slidable-texto4": "Gestão de Dados em Tempo Real: Permite a integração, análise e geração de relatórios em tempo real de todas as operações do BHS. Isso inclui gráficos, relatórios, diagramas e mais, fornecendo ferramentas essenciais para a gestão confiável e eficiente do BHS. Infraestrutura de Ponta: O Centro de Controle projetado pela MATEC conta com o que há de mais moderno em tecnologia, desde VideoWall de última geração até estações de trabalho ergonômicas com redundância a quente, sistema de CCTV, data center de última geração, redes de fibra óptica e um ambiente ideal para garantir um funcionamento ininterrupto. Integração Completa: No Centro de Controle, podemos integrar, analisar e gerar relatórios a partir de informações coletadas de diversas fontes, incluindo sistemas PLC, o software de gerenciamento de bagagem MATBag, sistemas de inspeção e muito mais.",

      "airport-driver1-title-sidebar": "Check-in",
      "airport-driver1-text-sidebar": "Começamos nossa jornada com um check-in eficiente e amigável que garante uma experiência sem complicações e cheia de sorrisos para nossos passageiros. Por trás de cada processo de check-in eficaz, está a mão meticulosa humana que colabora com os aeroportos para projetar soluções personalizadas que atendam às suas necessidades únicas. Consideramos cada detalhe, desde o layout das esteiras até a interação com o pessoal da companhia aérea. Embora a tecnologia seja avançada, é a atenção humana que aperfeiçoa todo o processo.",
      "airport-driver1-text-sidebar2": "Nosso Check-in MATEC oferece soluções que permitem pesar, processar e injetar a bagagem com precisão e segurança, de forma silenciosa e delicada. Essas soluções se integram harmoniosamente à arquitetura única de cada aeroporto. Seja por meio de nosso Self Bag Drop (SBD) para uma experiência automática ou da integração do BHS com os balcões de check-in operados por pessoal, o resultado é sempre um processo eficiente e cuidadoso. Além disso, nosso software de gerenciamento de bagagem, MATBag, integra-se sem problemas com o sistema de controle de embarque (DCS - Departure Control System), facilitando não apenas a operação do aeroporto, mas também a experiência das companhias aéreas e, o mais importante, dos passageiros.",

      "functions-title1": "CBRA da MATEC",
      "functions-text1": "Nossa Zona de Inspeção de Nível 3 é fornecida pela MATEC com total conformidade com as regulamentações da TSA e da ECAC, além de se adaptar às necessidades específicas de cada aeroporto. Nos esforçamos para projetar estações de inspeção ergonômicas, altamente produtivas e que ofereçam a melhor relação entre conforto e custo-benefício.",
      "functions-title2": "Variedade",
      "functions-text2": "Na CBRA da MATEC, oferecemos uma gama completa de soluções, incluindo sistemas de transporte, mesas de inspeção BIT (Baggage Inspection Table), suportes para acessórios de inspeção como ETD (Detecção de Traços Explosivos), BSD (Display de Status de Bagagem), SVS, impressoras, estações de trabalho totalmente equipadas, monitores, mouse, teclados, material de embalagem e proteção, entre outros.",

      "guardian-angel-title": "MATEC: O anjo guardião em Sistemas de Manuseio de Bagagens para Aeroportos",
      "guardian-angel-text1": "A MATEC, sua aliada visionária em sistemas de manuseio de bagagens para aeroportos, assume com paixão o papel de Criadora. Desde o momento em que os passageiros fazem o check-in até a retirada de sua bagagem na área de retirada, nosso compromisso é claro: oferecer soluções inovadoras que otimizem a eficiência, a segurança e o conforto, impulsionando ao mesmo tempo a rentabilidade e a sustentabilidade. A seguir, exploramos como a MATEC adiciona um toque humano a áreas críticas, como Check-In, Inspeção de Segurança, Classificação de Bagagens (Make Up), Reivindicação de Bagagens e muito mais.",
      "guardian-angel-text2": "Este é um momento de reflexão sobre as necessidades dos aeroportos, que são nossos protegidos. Os aeroportos são, por sua vez, os guardiões dos passageiros e trabalham incansavelmente para garantir que a experiência de viagem esteja à altura de cada voo. Cada voo tem um propósito, seja o fechamento de um grande negócio que trará prosperidade à empresa de um de nossos passageiros, férias em família que criarão memórias para toda a vida, o retorno após um longo período longe de casa, a lembrança de um ente querido ou simplesmente o reencontro com pessoas queridas no país de origem. Todos esses são motivos significativos para nossos passageiros, e nosso papel é garantir que o que eles levam consigo para alcançar seus objetivos chegue oportunamente e em perfeitas condições.",

      "click": "Clique aqui!",

      "closing-title": "Reivindicação de Bagagens de Chegada: Seu Fechamento Perfeito",
      "closing-text1": "Na área de reivindicação de bagagens de chegada, a MATEC continua sendo sua protetora, garantindo um reencontro seguro entre os passageiros e suas pertences. Aqui, a atenção meticulosa aos detalhes é nossa especialidade. Nossa equipe trabalha incansavelmente para garantir que cada peça de bagagem chegue ao seu dono, completando assim uma viagem sem preocupações e cheia de motivos para sorrir.",
      "closing-text2": "Nossas soluções para sistemas de chegada oferecem operações limpas e rápidas. Elas se integram facilmente a sistemas de segurança de ponta, permitindo que os aeroportos inovem e cresçam de maneira sustentável, ao mesmo tempo em que oferecem um serviço excepcional de chegada aos passageiros. Dentro do conjunto de soluções do BHS de chegada, você encontrará:",
      "bhs-solution-title1": "Sistemas Ergonômicos de Alimentação de Bagagens:",
      "bhs-solution-text1": "Projetados para uma manipulação segura e eficiente da bagagem.",

      "bhs-solution-title2": "Integração com Sistemas de Inspeção por Raios X:",
      "bhs-solution-text2": "Para uma inspeção eficaz e segura da bagagem.",

      "bhs-solution-title3": "Sistemas de Reetiquetagem Manual:",
      "bhs-solution-text3": "Ideal para bagagem em conexão ou que requer inspeção adicional.",

      "bhs-solution-title4": "Sistemas de Identificação e Rastreamento:",
      "bhs-solution-text4": "Para um rastreamento preciso de cada peça de bagagem.",

      "bhs-solution-title5": "Sistemas de Reconciliação de Bagagem (BRS - Baggage Reconciliation System):",
      "bhs-solution-text5": "Garantem a correspondência entre a bagagem e o passageiro.",

      "bhs-solution-title6": "Carrosséis Planos:",
      "bhs-solution-text6": "Oferecem ergonomia e segurança para os passageiros.",

      "bhs-solution-title7": "Carrosséis Inclinados:",
      "bhs-solution-text7": "Permitem uma maior acumulação e funcionalidade.",

      "airport-driver2-title": "Centro de Controle BHS: Seu Núcleo de Operações Confiável",

      "footer-credits": "Créditos",
      "footer-privacy": "Política de Privacidade",
      "footer-cookies": "Cookies",
      "visor-modelos-title": "Nossos produtos"
    }
  },
  es: {
    translation: {
      "selector-title": "Selecciona tu experiencia",
      "selector-aeropuerto": "Aeropuertos",
      "selector-papel": "Papel y carton",
      "selector-logi": "Logística",

      "loader-text": "Cargando experiencia...",

      "header-home": "Inicio",
      "header-airport": "Aeropuertos",
      "header-home": "Inicio",
      "airport-desliza": "Desliza hacia abajo",
      "airport-driver1-title": "Check-In Eficiente con una Sonrisa",

      "airport-driver2-title-safety": "Seguridad en el aeropuerto",
      "airport-driver1-title2": "Leer más",

      "airport-driver1-tab1-title": "Soluciones En tiempo Real para Resolución de Desafíos",
      "airport-driver1-tab1-text": "En el núcleo de la sala de control del BHS, nuestros expertos actúan como ángeles guardianes, integrándose al sistema  On-Screen Resolution (OSR) para abordar desafíos en tiempo real y garantizar un flujo constante y seguro de equipaje. Detrás de esta tecnología, hay un equipo humano altamente capacitado que responde de manera eficaz ante situaciones imprevistas. La ingeniería humana se destaca al tomar decisiones informadas y rápidas que mantienen la operación en movimiento sin problemas.",
      "airport-driver1-tab2-title": "Soluciones específicas para cada necesidad",
      "airport-driver1-tab2-text": "Croosbelt Sorter: Un sistema de clasificación automática de alta capacidad y precisión que puede manejar hasta 11,000 UPH, con pesos de hasta 50 kg y longitudes de hasta 1.5 m por pieza. Desviadores Horizontales de Alta Velocidad (HSD - High Speed Diverter): Con opciones de 1 o 2 bandas y capacidades que van desde 800 UPH hasta 4,800 UPH. Desviadores Verticales (VSU - Vertical Sorter Unit): Disponibles con una o 3 bandas y capacidades que varían de 1,800 UPH a 3,200 UPH. Dependiendo de las necesidades del aeropuerto y su arquitectura, ofrecemos soluciones como carruseles o bandas rectas de Make Up. Siempre priorizamos la ergonomía y la funcionalidad para garantizar una operación eficiente del aeropuerto.",
      "airport-driver1-tab3-title": "Clasificación de Equipaje Eficiente",
      "airport-driver1-tab3-text": "Los Automatic Tag Reader ofrecen una identificación precisa del equipaje. Pueden ser sistemas láser básicos con lectura de 360°, que son eficaces con una eficiencia de hasta el 95%, o sistemas híbridos que combinan láser y cámaras de visión, alcanzando tasas de eficiencia del 99%. Cuando se necesitan soluciones más avanzadas, MATEC ofrece identificación de equipaje mediante tecnología RFID (Radio Frequency Identification), con tasas de lectura del 99.9% y costos de instalación altamente competitivos.\nUna vez que el equipaje se identifica, nuestro sistema de gestión de equipaje MATBag, en estrecha colaboración con otros sistemas del aeropuerto a través del HLC (High Level Control), determina la ruta de clasificación automática. Luego, el BHS, controlado por el LLC (Low Level Control), se encarga de llevar el equipaje a su destino final.",

      "airport-slidable-title1": 'Tu Seguridad, Nuestra Prioridad',
      "airport-slidable-texto1": 'En el núcleo de la seguridad aeroportuaria, MATEC se integra completamente con los sistemas de inspección (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) en total cumplimiento con los estándares de la TSA y ECAC. Realizamos inspecciones minuciosas de equipaje en niveles 1, 2 y 3, logrando una precisión de clasificación insuperable con capacidades de hasta 3600 UPH por línea. Para la clasificación de equipaje sospechoso o limpio, MATEC emplea soluciones de alta tecnología y robustez, garantizando la confiabilidad necesaria incluso en los entornos aeroportuarios más exigentes.',
      "airport-slidable-texto2": 'Además, nuestros diseños están enfocados en lograr una alta redundancia en todo el sistema de manejo de equipaje (BHS), cumpliendo con la responsabilidad de mantener los aeropuertos en constante movimiento, con una disponibilidad que puede llegar hasta el 99.9%. Nuestro software de gestión de equipaje, MATBag, se integra de manera fluida y altamente intuitiva con los sistemas de inspección, facilitando una comunicación sin fisuras entre ambos. Esto no solo mejora la precisión en la clasificación del equipaje sospechoso, sino que también genera los informes necesarios para mantener una operación de alta capacidad que satisface a todos los interesados (stakeholders), incluyendo aerolíneas, pasajeros, personal de mantenimiento, operadores de aeropuertos y otros proveedores, además de las directivas y áreas comerciales del aeropuerto, entre otros.',


      "airport-slidable-title3": 'Centro de control del BHS',
      "airport-slidable-texto3": 'El Centro de Control del BHS es el núcleo central de nuestra operación. Es aquí donde nuestra tecnología de punta se integra perfectamente para garantizar que cada pieza de equipaje llegue a su destino sin problemas, brindándote la tranquilidad que solo un ángel guardián podría ofrecer. Nuestro personal altamente capacitado coordina procesos complejos, supervisa y optimiza constantemente el flujo de equipaje, asegurando un funcionamiento sin interrupciones. Tecnología Avanzada: El Centro de Control del BHS de MATEC está equipado con la última tecnología en IT para garantizar la operatividad y redundancia del sistema. Integración Perfecta: Se integra de manera fluida con las redes y sistemas de telecomunicaciones de los aeropuertos.',
      "airport-slidable-texto4": 'Gestión de Datos en Tiempo Real: Permite la integración, análisis y generación de informes en tiempo real de todas las operaciones del BHS. Esto incluye gráficos, informes, diagramas y más, proporcionando herramientas esenciales para la gestión confiable y eficiente del BHS. Infraestructura de Vanguardia: El Centro de Control diseñado por MATEC cuenta con lo último en tecnología, desde VideoWall de última generación hasta estaciones de trabajo ergonómicas con redundancia en caliente, sistema de CCTV, datacenter de última generación, redes de fibra óptica y un entorno óptimo para garantizar un funcionamiento ininterrumpido. Integración Completa: En el Centro de Control, podemos integrar, analizar y generar informes a partir de información recopilada de diversas fuentes, incluyendo sistemas PLC, el software de gestión de equipaje MATBag, sistemas de inspección y más. ',

      "airport-driver1-title-sidebar": "Check in",
      "airport-driver1-text-sidebar": "Comenzamos nuestro viaje con un check-in eficiente y amigable que garantiza una experiencia sin complicaciones y llena de sonrisas para nuestros pasajeros. Detrás de cada proceso de check-in efectivo, se encuentra la meticulosa mano humana que colabora con aeropuertos para diseñar soluciones personalizadas que se ajusten a sus necesidades únicas. Consideramos cada detalle, desde la disposición de las cintas transportadoras hasta la interacción con el personal de la aerolínea. Si bien la tecnología es avanzada, es la atención humana la que perfecciona todo el proceso.",
      "airport-driver1-text-sidebar2": "Nuestro Check-in MATEC ofrece soluciones que permiten pesar, procesar e inyectar el equipaje con precisión y seguridad, de manera silenciosa y delicada. Estas soluciones se integran de forma armoniosa con la arquitectura única de cada aeropuerto. Ya sea a través de nuestro Self Bag Drop (SBD) para una experiencia automática o la integración del BHS con los mostradores de facturación operados por personal, el resultado es siempre un proceso eficiente y cuidadoso. Además, nuestro software de gestión de equipaje, MATBag, se integra sin problemas con el sistema de control de facturación (DCS - Departure Control System), lo que facilita no solo la operación del aeropuerto sino también la experiencia de las aerolíneas y, lo más importante, de los pasajeros.",

      "functions-title1": "CBRA de MATEC",
      "functions-text1": "Nuestra Zona de Inspección de Nivel 3 es suministrada por MATEC con total apego a las normativas de la TSA y ECAC, además de adaptarse a las necesidades específicas de cada aeropuerto. Nos esforzamos por diseñar estaciones de inspección ergonómicas, altamente productivas y que ofrezcan la mejor relación entre confort y costo-beneficio.",
      "functions-title2": "Variedad",
      "functions-text2": "En la CBRA de MATEC, ofrecemos una gama completa de soluciones, incluyendo sistemas de transporte, mesas de inspección BIT (Baggage Inspection Table), soportes para accesorios de inspección como ETD (Explosive Trace Detection), BSD (Baggage Status Display), SVS, impresoras, estaciones de trabajo completamente equipadas, monitores, mouse, teclados, material de envoltura y protección, entre otros.",

      "guardian-angel-title": "MATEC: El ángel guardián en Sistemas de Manejo de Equipaje para Aeropuertos",
      "guardian-angel-text1": "MATEC, tu aliado visionario en sistemas de manejo de equipaje para aeropuertos, asume con pasión el papel de Creador. Desde el momento en que los pasajeros realizan el check-in hasta la recogida de su equipaje en el área de reclamo, nuestro compromiso es claro: ofrecer soluciones innovadoras que optimicen la eficiencia, la seguridad y la comodidad, impulsando al mismo tiempo la rentabilidad y la sostenibilidad. A continuación, exploramos cómo MATEC agrega un toque humano a áreas críticas, como el Check-In, la Inspección de Seguridad, la Clasificación de Equipaje (Make Up), el Reclamo de Equipaje y más.",
      "guardian-angel-text2": "Este es un momento de reflexión sobre las necesidades de los aeropuertos, que son nuestros protegidos. Los aeropuertos son, a su vez, los guardianes de los pasajeros y trabajan incansablemente para asegurarse de que la experiencia de viaje esté a la altura de cada vuelo. Cada vuelo tiene un propósito, ya sea el cierre de un gran negocio que traerá prosperidad a la empresa de uno de nuestros pasajeros, unas vacaciones familiares que crearán recuerdos de por vida, el regreso después de un largo período lejos de casa, el recuerdo de un ser querido, o simplemente el reencuentro con personas queridas en el país de origen. Todos estos son motivos significativos para nuestros pasajeros, y nuestro papel es garantizar que lo que llevan consigo para lograr sus objetivos llegue oportunamente y en perfectas condiciones.",

      "click": "¡Clíc aquí!",

      "closing-title": "Reclamo de Equipaje de Entrada: Tu Cierre Perfecto",
      "closing-text1": "En el área de reclamo de equipaje de entrada, MATEC sigue siendo tu protector, asegurando un reencuentro seguro entre los pasajeros y sus pertenencias. Aquí, la atención meticulosa a los detalles es nuestra especialidad. Nuestro equipo trabaja incansablemente para garantizar que cada pieza de equipaje llegue a su dueño, completando así un viaje sin preocupaciones y lleno de motivos para sonreír.",
      "closing-text2": "Nuestras soluciones para sistemas de llegada ofrecen operaciones limpias y rápidas. Se integran fácilmente con sistemas de seguridad de vanguardia, permitiendo a los aeropuertos innovar y crecer de manera sostenible, al tiempo que brindan un servicio de llegada excepcional a los pasajeros.",
      "bhs-solution-title1": "Sistemas Ergonómicos de Alimentación de Equipaje:",
      "bhs-solution-text1": "Diseñados para una manipulación segura y eficiente del equipaje.",
      "bhs-solution-title2": "Integración con Sistemas de Inspección por Rayos X:",
      "bhs-solution-text2": "Para una inspección efectiva y segura del equipaje.",
      "bhs-solution-title3": "Sistemas de Re-etiquetado Manual:",
      "bhs-solution-text3": "Ideal para equipaje en conexión o aquel que requiere inspección adicional.",
      "bhs-solution-title4": "Sistemas de Identificación y Seguimiento:",
      "bhs-solution-text4": "Para un seguimiento preciso de cada pieza de equipaje.",
      "bhs-solution-title5": "Sistemas de Reconciliación de Equipaje (BRS - Baggage Reconciliation System):",
      "bhs-solution-text5": "Garantizan la correspondencia entre el equipaje y el pasajero.",
      "bhs-solution-title6": "Carruseles Planos:",
      "bhs-solution-text6": "Brindan ergonomía y seguridad para los pasajeros.",
      "bhs-solution-title7": "Carruseles Inclinados:",
      "bhs-solution-text7": "Permiten una mayor acumulación y funcionalidad.",


      "airport-driver2-title": "Centro de Control BHS: Tu Núcleo de Operaciones Confiable",
      "footer-credits": "Creditos",
      "footer-privacy": "Política de privacidad",
      "footer-cookies": "Cookies",
      "visor-modelos-title": "Nuestros productos"



    }
  }
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;