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
      "header-home": "Home",
      "airport-desliza": "Scroll Down",
      "airport-driver1-title": "Efficient Check-In with a Smile",
  
      "airport-driver2-title-safety": "Airport Safety",
      "airport-driver1-title2": "Read More",
  
      "airport-driver1-tab1-title": "Real-Time Solutions for Challenge Resolution",
      "airport-driver1-tab1-text": "At the core of the BHS control room, our experts act as guardian angels, integrating with the On-Screen Resolution (OSR) system to address challenges in real-time and ensure a steady and safe flow of baggage. Behind this technology is a highly trained human team that responds effectively to unforeseen situations. Human engineering stands out by making informed and quick decisions that keep the operation smoothly.",
      "airport-driver1-tab2-title": "Tailored Solutions for Every Need",
      "airport-driver1-tab2-text": "Croosbelt Sorter: A high-capacity and high-precision automated sorting system that can handle up to 11,000 UPH, with weights of up to 50 kg and lengths of up to 1.5 m per piece. High-Speed Horizontal Diverter (HSD): With options of 1 or 2 belts and capacities ranging from 800 UPH to 4,800 UPH. Vertical Sorter Unit (VSU): Available with one or three belts and capacities ranging from 1,800 UPH to 3,200 UPH. Depending on the airport's needs and architecture, we offer solutions such as carousels or straight Make-Up belts. We always prioritize ergonomics and functionality to ensure efficient airport operation.",
      "airport-driver1-tab3-title": "Efficient Baggage Sorting",
      "airport-driver1-tab3-text": "Automatic Tag Readers offer precise baggage identification. They can be basic laser systems with 360° reading, which are effective with up to 95% efficiency, or hybrid systems that combine lasers and vision cameras, achieving efficiency rates of 99%. When more advanced solutions are needed, MATEC offers baggage identification through RFID (Radio Frequency Identification) technology, with reading rates of 99.9% and highly competitive installation costs. Once the baggage is identified, our baggage management system, MATBag, in close collaboration with other airport systems through High-Level Control (HLC), determines the route for automatic sorting. Then, the BHS, controlled by Low-Level Control (LLC), handles taking the baggage to its final destination.",
  
      "airport-slidable-title1": "Your Safety, Our Priority",
      "airport-slidable-texto1": "At the core of airport security, MATEC fully integrates with inspection systems (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) in total compliance with TSA and ECAC standards. We conduct thorough baggage inspections at levels 1, 2, and 3, achieving unbeatable classification accuracy with capacities of up to 3600 UPH per line. For the classification of suspicious or clean baggage, MATEC employs high-tech and robust solutions, ensuring the necessary reliability even in the most demanding airport environments.",
      "airport-slidable-texto2": "Furthermore, our designs focus on achieving high redundancy throughout the baggage handling system (BHS), fulfilling the responsibility to keep airports constantly moving, with availability reaching up to 99.9%. Our baggage management software, MATBag, seamlessly integrates with state-of-the-art inspection systems, enabling airports to innovate and grow sustainably while providing exceptional arrival service to passengers.",
  
      "airport-slidable-title3": "BHS Control Center",
      "airport-slidable-texto3": "The BHS Control Center is the central core of our operation. It is where our cutting-edge technology seamlessly integrates to ensure that every piece of baggage reaches its destination smoothly, giving you the peace of mind that only a guardian angel could offer. Our highly trained staff coordinate complex processes, constantly monitor and optimize baggage flow, ensuring uninterrupted operation. Advanced Technology: MATEC's BHS Control Center is equipped with the latest IT technology to guarantee system operability and redundancy. Seamless Integration: It seamlessly integrates with airport networks and telecommunication systems.",
      "airport-slidable-texto4": "Real-Time Data Management: Enables real-time integration, analysis, and reporting of all BHS operations. This includes graphs, reports, diagrams, and more, providing essential tools for reliable and efficient BHS management. Cutting-Edge Infrastructure: The Control Center designed by MATEC features the latest in technology, from state-of-the-art VideoWalls to fully equipped workstations with hot redundancy, CCTV system, state-of-the-art data center, fiber optic networks, and an optimal environment to ensure uninterrupted operation. Comprehensive Integration: At the Control Center, we can integrate, analyze, and generate reports from information collected from various sources, including PLC systems, MATBag baggage management software, inspection systems, and more.",
  
      "airport-driver1-title-sidebar": "Check-in",
      "airport-driver1-text-sidebar": "We start our journey with an efficient and friendly check-in that ensures a hassle-free and smile-filled experience for our passengers. Behind every effective check-in process is the meticulous human hand that collaborates with airports to design custom solutions that fit their unique needs. We consider every detail, from conveyor belt layouts to interaction with airline staff. While the technology is advanced, it is human attention that perfects the entire process.",
      "airport-driver1-text-sidebar2": "Our MATEC Check-In offers solutions that allow for accurate and secure weighing, processing, and injection of baggage, silently and delicately. These solutions seamlessly integrate with each airport's unique architecture. Whether through our Self Bag Drop (SBD) for an automatic experience or integrating the BHS with staff-operated check-in counters, the result is always an efficient and careful process. Additionally, our baggage management software, MATBag, seamlessly integrates with the Departure Control System (DCS), facilitating not only airport operation but also the experience of airlines, and most importantly, passengers.",
  
      "functions-title1": "MATEC's Level 3 Inspection Zone",
      "functions-text1": "Our Level 3 Inspection Zone is supplied by MATEC in full compliance with TSA and ECAC regulations, and it adapts to the specific needs of each airport. We strive to design ergonomic, highly productive inspection stations that offer the best balance between comfort and cost-effectiveness.",
      "functions-title2": "Variety",
      "functions-text2": "In MATEC's Inspection Zone, we offer a complete range of solutions, including transportation systems, BIT (Baggage Inspection Table) inspection tables, supports for inspection accessories like ETD (Explosive Trace Detection), BSD (Baggage Status Display), SVS, printers, fully equipped workstations, monitors, mouse, keyboards, wrapping and protection materials, among others.",
  
      "guardian-angel-title": "MATEC: The Guardian Angel in Airport Baggage Handling Systems",
      "guardian-angel-text1": "MATEC, your visionary ally in airport baggage handling systems, passionately takes on the role of Creator. From the moment passengers check in to collecting their baggage in the reclaim area, our commitment is clear: to provide innovative solutions that optimize efficiency, safety, and comfort, while driving profitability and sustainability. Below, we explore how MATEC adds a human touch to critical areas such as Check-In, Security Inspection, Baggage Sorting (Make Up), Baggage Reclaim, and more.",
      "guardian-angel-text2": "This is a moment of reflection on the needs of airports, which are our wards. Airports, in turn, are the guardians of passengers and work tirelessly to ensure that the travel experience matches each flight. Each flight has a purpose, whether it's closing a significant business deal that will bring prosperity to one of our passengers' companies, a family vacation that will create lifelong memories, returning after a long period away from home, the memory of a loved one, or simply reuniting with loved ones in the home country. All of these are significant reasons for our passengers, and our role is to ensure that what they carry to achieve their goals arrives timely and in perfect condition.",
  
      "click": "Show more!",
  
      "closing-title": "Entry Baggage Reclaim: Your Perfect Closure",
      "closing-text1": "In the entry baggage reclaim area, MATEC remains your protector, ensuring a safe reunion between passengers and their belongings. Here, meticulous attention to detail is our specialty. Our team works tirelessly to ensure that every piece of baggage reaches its owner, completing a worry-free journey filled with reasons to smile.",
      "closing-text2": "Our arrival system solutions offer clean and fast operations. They seamlessly integrate with cutting-edge security systems, enabling airports to innovate and grow sustainably while providing exceptional arrival service to passengers.",
      "bhs-solution-title1": "Ergonomic Baggage Feeding Systems:",
      "bhs-solution-text1": "Designed for safe and efficient baggage handling.",
      "bhs-solution-title2": "Integration with X-ray Inspection Systems:",
      "bhs-solution-text2": "For effective and secure baggage inspection.",
      "bhs-solution-title3": "Manual Re-labeling Systems:",
      "bhs-solution-text3": "Ideal for connecting baggage or baggage requiring additional inspection.",
      "bhs-solution-title4": "Identification and Tracking Systems:",
      "bhs-solution-text4": "For precise tracking of each piece of baggage.",
      "bhs-solution-title5": "Baggage Reconciliation Systems (BRS):",
      "bhs-solution-text5": "Ensure matching between baggage and passenger.",
      "bhs-solution-title6": "Flat Carousels:",
      "bhs-solution-text6": "Provide ergonomics and safety for passengers.",
      "bhs-solution-title7": "Inclined Carousels:",
      "bhs-solution-text7": "Allow for increased accumulation and functionality.",
  
      "airport-driver2-title": "BHS Control Center: Your Reliable Operations Hub",
      "footer-credits": "Credits",
      "footer-privacy": "Privacy Policy",
      "footer-cookies": "Cookies",
      "visor-modelos-title": "Our Products",

      "closing-title-slidable":"Arrivals BHS Solution Set",
    }
  },

 de: {
  translation: {
    "selector-title": "Wähle deine Erfahrung",
    "selector-aeropuerto": "Flughäfen",
    "selector-papel": "Papier und Pappe",
    "selector-logi": "Logistik",

    "loader-text": "Erfahrung wird geladen...",

    "header-home": "Startseite",
    "header-airport": "Flughäfen",
    "header-home": "Startseite",
    "airport-desliza": "Nach unten scrollen",
    "airport-driver1-title": "Effizientes Einchecken mit einem Lächeln",

    "airport-driver2-title-safety": "Flughafensicherheit",
    "airport-driver1-title2": "Mehr lesen",

    "airport-driver1-tab1-title": "Echtzeitlösungen zur Bewältigung von Herausforderungen",
    "airport-driver1-tab1-text": "Im Kern des BHS-Kontrollraums fungieren unsere Experten als Schutzengel und integrieren sich in das On-Screen-Resolution (OSR)-System, um Herausforderungen in Echtzeit anzugehen und einen gleichmäßigen und sicheren Gepäckfluss zu gewährleisten. Hinter dieser Technologie steht ein hochqualifiziertes menschliches Team, das effektiv auf unvorhergesehene Situationen reagiert. Die menschliche Komponente zeichnet sich durch fundierte und schnelle Entscheidungen aus, die den reibungslosen Betrieb gewährleisten.",
    "airport-driver1-tab2-title": "Maßgeschneiderte Lösungen für jede Anforderung",
    "airport-driver1-tab2-text": "Croosbelt Sorter: Ein hochkapazitives und hochpräzises automatisches Sortiersystem, das bis zu 11.000 UPH verarbeiten kann, mit Gewichten von bis zu 50 kg und Längen von bis zu 1,5 m pro Stück. High-Speed Horizontal Diverter (HSD): Mit Optionen von 1 oder 2 Bändern und Kapazitäten von 800 UPH bis 4.800 UPH. Vertikale Sortiereinheit (VSU): Erhältlich mit einem oder drei Bändern und Kapazitäten von 1.800 UPH bis 3.200 UPH. Abhängig von den Bedürfnissen und der Architektur des Flughafens bieten wir Lösungen wie Karussells oder gerade Make-Up-Förderbänder. Dabei legen wir immer Wert auf Ergonomie und Funktionalität, um einen effizienten Flughafenbetrieb zu gewährleisten.",
    "airport-driver1-tab3-title": "Effiziente Gepäcksortierung",
    "airport-driver1-tab3-text": "Automatische Tag-Reader bieten eine präzise Gepäckidentifikation. Es kann sich um einfache Lasersysteme mit 360°-Lesung handeln, die bis zu 95% Effizienz erreichen, oder Hybridsysteme, die Laser und Vision-Kameras kombinieren und Effizienzraten von 99% erzielen. Wenn fortschrittlichere Lösungen erforderlich sind, bietet MATEC Gepäckidentifikation durch RFID (Radio Frequency Identification) -Technologie mit Leseraten von 99,9% und sehr wettbewerbsfähigen Installationskosten. Nach der Gepäckidentifikation bestimmt unser Gepäckmanagementsystem MATBag in enger Zusammenarbeit mit anderen Flughafensystemen über High-Level Control (HLC) die Route für die automatische Sortierung. Dann kümmert sich das BHS, gesteuert durch Low-Level Control (LLC), um die Weiterleitung des Gepäcks zu seinem endgültigen Ziel.",

    "airport-slidable-title1": "Deine Sicherheit, unsere Priorität",
    "airport-slidable-texto1": "Im Mittelpunkt der Flughafensicherheit integriert sich MATEC vollständig in die Inspektionssysteme (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) und entspricht vollständig den Standards der TSA und ECAC. Wir führen gründliche Gepäckinspektionen auf den Ebenen 1, 2 und 3 durch und erzielen eine unschlagbare Klassifikationsgenauigkeit mit Kapazitäten von bis zu 3600 UPH pro Linie. Für die Klassifikation von verdächtigem oder sauberem Gepäck setzt MATEC hochmoderne und robuste Lösungen ein, um die notwendige Zuverlässigkeit auch in anspruchsvollsten Flughafenumgebungen zu gewährleisten.",
    "airport-slidable-texto2": "Darüber hinaus konzentrieren sich unsere Designs darauf, eine hohe Redundanz im gesamten Gepäckabfertigungssystem (BHS) zu erreichen und die Verantwortung zu erfüllen, die Flughäfen ständig in Bewegung zu halten, mit einer Verfügbarkeit von bis zu 99,9%. Unsere Gepäckverwaltungssoftware, MATBag, integriert sich nahtlos in modernste Sicherheitssysteme und ermöglicht es den Flughäfen, innovativ zu sein und nachhaltig zu wachsen, während sie außergewöhnlichen Ankunftsservice für die Passagiere bieten.",

    "airport-slidable-title3": "BHS-Kontrollzentrum",
    "airport-slidable-texto3": "Das BHS-Kontrollzentrum ist der zentrale Kern unserer Operation. Hier integriert sich unsere hochmoderne Technologie nahtlos, um sicherzustellen, dass jedes Gepäckstück reibungslos sein Ziel erreicht und Ihnen die Ruhe gibt, die nur ein Schutzengel bieten kann. Unser hochqualifiziertes Personal koordiniert komplexe Prozesse, überwacht und optimiert kontinuierlich den Gepäckfluss und stellt einen unterbrechungsfreien Betrieb sicher. Modernste Technologie: Das BHS-Kontrollzentrum von MATEC ist mit modernster IT-Technologie ausgestattet, um die Systemfunktionalität und Redundanz zu garantieren. Nahtlose Integration: Es integriert sich nahtlos in Flughafennetzwerke und Telekommunikationssysteme.",
    "airport-slidable-texto4": "Echtzeitdatenmanagement: Ermöglicht die Echtzeitintegration, Analyse und Berichterstattung aller BHS-Operationen. Dies umfasst Grafiken, Berichte, Diagramme und mehr und bietet wesentliche Tools für das zuverlässige und effiziente BHS-Management. Modernste Infrastruktur: Das von MATEC entworfene Kontrollzentrum verfügt über modernste Technologie, angefangen von state-of-the-art VideoWall bis hin zu ergonomischen Arbeitsplätzen mit Hot Redundanz, CCTV-System, hochmodernen Rechenzentren, Glasfasernetzwerken und einer optimalen Umgebung, um einen reibungslosen Betrieb zu gewährleisten. Nahtlose Integration: Im Kontrollzentrum können wir Informationen aus verschiedenen Quellen integrieren, analysieren und Berichte erstellen, einschließlich PLC-Systemen, der Gepäckverwaltungssoftware MATBag, Inspektionssystemen und mehr.",

    "airport-driver1-title-sidebar": "Einchecken",
    "airport-driver1-text-sidebar": "Wir beginnen unsere Reise mit einem effizienten und freundlichen Check-in, der eine unkomplizierte und lächelnde Erfahrung für unsere Passagiere gewährleistet. Hinter jedem effektiven Check-in-Prozess steht die akribische menschliche Hand, die mit den Flughäfen zusammenarbeitet, um maßgeschneiderte Lösungen zu entwerfen, die ihren einzigartigen Anforderungen entsprechen. Wir berücksichtigen jedes Detail, von der Anordnung der Förderbänder bis zur Interaktion mit dem Airline-Personal. Obwohl die Technologie fortschrittlich ist, ist es die menschliche Aufmerksamkeit, die den gesamten Prozess perfektioniert.",
    "airport-driver1-text-sidebar2": "Unser Check-in von MATEC bietet Lösungen, die es ermöglichen, das Gepäck präzise und sicher zu wiegen, zu verarbeiten und einzuspritzen, leise und schonend. Diese Lösungen integrieren sich nahtlos in die einzigartige Architektur jedes Flughafens. Ob über unser Self Bag Drop (SBD) für eine automatische Erfahrung oder die Integration des BHS mit von Personal betriebenen Check-in-Schaltern, das Ergebnis ist immer ein effizienter und sorgfältiger Prozess. Darüber hinaus integriert sich unsere Gepäckverwaltungssoftware, MATBag, nahtlos mit dem Abfertigungssteuerungssystem (DCS - Departure Control System), was nicht nur den Flughafenbetrieb, sondern auch die Erfahrung der Airlines und vor allem der Passagiere erleichtert.",

    "functions-title1": "MATECs CBRA",
    "functions-text1": "Unsere Level-3-Inspektionszone wird von MATEC unter vollständiger Einhaltung der Vorschriften der TSA und ECAC geliefert und passt sich den spezifischen Anforderungen jedes Flughafens an. Wir streben danach, ergonomische, äußerst produktive Inspektionsstationen zu entwerfen, die die beste Balance zwischen Komfort und Kosten-Nutzen-Verhältnis bieten.",
    "functions-title2": "Vielfalt",
    "functions-text2": "Im CBRA von MATEC bieten wir eine vollständige Palette von Lösungen an, einschließlich Transportsystemen, BIT-Inspektionsbänken (Baggage Inspection Table), Ständern für Inspektionszubehör wie ETD (Explosive Trace Detection), BSD (Baggage Status Display), SVS, Druckern, komplett ausgestatteten Arbeitsplätzen, Monitoren, Maus, Tastaturen, Verpackungs- und Schutzzubehör und vielem mehr.",

    "guardian-angel-title": "MATEC: Der Schutzengel im Bereich der Gepäckabfertigungssysteme für Flughäfen",
    "guardian-angel-text1": "MATEC, Ihr visionärer Verbündeter in Gepäckabfertigungssystemen für Flughäfen, übernimmt mit Leidenschaft die Rolle des Schöpfers. Vom Moment des Eincheckens der Passagiere bis zur Abholung ihres Gepäcks im Abholbereich ist unser Engagement klar: innovative Lösungen bereitzustellen, die Effizienz, Sicherheit und Komfort optimieren und gleichzeitig Rentabilität und Nachhaltigkeit fördern. Im Folgenden zeigen wir, wie MATEC in kritischen Bereichen wie Check-In, Sicherheitsprüfung, Gepäcksortierung (Make-Up), Gepäckabholung und mehr eine menschliche Note hinzufügt.",
    "guardian-angel-text2": "Dies ist ein Moment der Besinnung über die Bedürfnisse der Flughäfen, die unsere Schutzbefohlenen sind. Die Flughäfen sind wiederum die Hüter der Passagiere und arbeiten unermüdlich daran, sicherzustellen, dass die Reiseerfahrung jedem Flug gerecht wird. Jeder Flug hat einen Zweck, sei es der Abschluss eines bedeutenden Geschäftsabschlusses, der Wohlstand in das Unternehmen eines unserer Passagiere bringt, ein Familienurlaub, der lebenslange Erinnerungen schafft, die Rückkehr nach langer Abwesenheit von zu Hause, die Erinnerung an einen geliebten Menschen oder einfach die Wiedervereinigung mit geliebten Menschen im Heimatland. All diese Gründe sind für unsere Passagiere bedeutend, und unsere Aufgabe ist es, sicherzustellen, dass das, was sie mitnehmen, um ihre Ziele zu erreichen, pünktlich und in einwandfreiem Zustand ankommt.",

    "click": "Mehr anzeigen!",

    "closing-title": "Eingangsgepäckabholung: Dein perfekter Abschluss",
    "closing-text1": "Im Bereich der Eingangsgepäckabholung bleibt MATEC dein Beschützer und sorgt für ein sicheres Wiedersehen zwischen den Passagieren und ihren Habseligkeiten. Hier ist akribische Aufmerksamkeit fürs Detail unsere Spezialität. Unser Team arbeitet unermüdlich daran sicherzustellen, dass jedes Gepäckstück seinen Besitzer erreicht und so eine sorgenfreie Reise voller Gründe zum Lächeln abgeschlossen wird.",
    "closing-text2": "Unsere Lösungen für Ankunftssysteme bieten saubere und schnelle Abläufe. Sie integrieren sich nahtlos in modernste Sicherheitssysteme und ermöglichen es den Flughäfen, innovativ und nachhaltig zu wachsen, während sie den Passagieren einen außergewöhnlichen Ankunftsservice bieten.",
    "bhs-solution-title1": "Ergonomische Gepäckzuführsysteme:",
    "bhs-solution-text1": "Entworfen für sichere und effiziente Handhabung des Gepäcks.",
    "bhs-solution-title2": "Integration mit Röntgeninspektionssystemen:",
    "bhs-solution-text2": "Für eine effektive und sichere Gepäckinspektion.",
    "bhs-solution-title3": "Manuelle Neuetikettierungssysteme:",
    "bhs-solution-text3": "Ideal für Anschlussgepäck oder solches, das zusätzliche Inspektion erfordert.",
    "bhs-solution-title4": "Identifikations- und Nachverfolgungssysteme:",
    "bhs-solution-text4": "Für eine präzise Verfolgung jedes Gepäckstücks.",
    "bhs-solution-title5": "Gepäckabgleichsysteme (BRS - Baggage Reconciliation System):",
    "bhs-solution-text5": "Gewährleisten die Übereinstimmung von Gepäck und Passagier.",
    "bhs-solution-title6": "Flache Karussells:",
    "bhs-solution-text6": "Bieten Ergonomie und Sicherheit für die Passagiere.",
    "bhs-solution-title7": "Schräge Karussells:",
    "bhs-solution-text7": "Ermöglichen eine größere Ansammlung und Funktionalität.",

    "airport-driver2-title": "BHS-Kontrollzentrum: Dein zuverlässiger Betriebskern",

    "footer-credits": "Credits",
    "footer-privacy": "Datenschutzrichtlinie",
    "footer-cookies": "Cookies",
    "visor-modelos-title": "Unsere Produkte",

    "closing-title-slidable":"Ankunfts-BHS-Lösungsset",
  }
},
cn: {
  translation: {
    "selector-title": "选择您的体验",
    "selector-aeropuerto": "机场",
    "selector-papel": "纸张和纸板",
    "selector-logi": "物流",

    "loader-text": "正在加载体验...",

    "header-home": "首页",
    "header-airport": "机场",
    "airport-desliza": "向下滑动",
    "airport-driver1-title": "高效办理登机手续，微笑服务",

    "airport-driver2-title-safety": "机场安全",
    "airport-driver1-title2": "了解更多",

    "airport-driver1-tab1-title": "实时解决挑战的解决方案",
    "airport-driver1-tab1-text": "在BHS控制室的核心，我们的专家充当守护天使，与On-Screen Resolution（OSR）系统完全集成，以实时解决挑战，确保行李的平稳和安全流动。 在这项技术背后，是一个经过高度培训的人员团队，可以对突发情况做出高效的回应。 人性化工程突出体现在做出明智和快速的决策，保持无缝的运营。",
    "airport-driver1-tab2-title": "针对每种需求的特定解决方案",
    "airport-driver1-tab2-text": "Croosbelt分拣机：具有高容量和精度的自动分类系统，可处理高达11,000 UPH，每件重达50公斤，长度可达1.5米。 高速水平偏转器（HSD）：提供1或2条传送带选项，容量从800 UPH到4,800 UPH不等。 垂直偏转器（VSU）：提供单条或3条传送带选项，容量从1,800 UPH到3,200 UPH不等。 根据机场的需求和架构，我们提供旋转式或直线式的Make Up解决方案。 我们始终将人体工程学和功能性作为首要考虑，以确保机场的高效运作。",
    "airport-driver1-tab3-title": "高效的行李分类",
    "airport-driver1-tab3-text": "自动标签阅读器提供准确的行李识别。 它们可以是具有360°阅读的基本激光系统，其有效率高达95％，或者是结合了激光和视觉摄像头的混合系统，其效率高达99％。 当需要更高级的解决方案时，MATEC提供通过RFID（Radio Frequency Identification）技术对行李进行识别，其读取率高达99.9％，并具有高度竞争力的安装成本。 一旦识别了行李，我们的行李管理系统MATBag与机场的其他系统紧密合作，通过HLC（高级控制）确定自动分类的路径。 然后，由LLC（低级控制）控制的BHS负责将行李送达最终目的地。",

    "airport-slidable-title1": '你的安全，我们的首要任务',
    "airport-slidable-texto1": '在机场安全的核心，MATEC与（HBS - 托运行李安检 | CBIS - 托运行李检查系统）完全集成，严格遵守TSA和ECAC的标准。 我们对行李进行1、2和3级的仔细检查，实现了无与伦比的分类精度，每条线的处理能力高达3600 UPH。 对于可疑或清洁行李的分类，MATEC采用高科技和坚固的解决方案，以确保即使在最苛刻的机场环境中也具有必要的可靠性。',
    "airport-slidable-texto2": '此外，我们的设计侧重于在行李处理系统（BHS）的整个系统中实现高度冗余性，确保保持机场不间断运行，可达到99.9％的可用性。 我们的行李管理软件MATBag可以与检查系统无缝，直观地集成，实现两者之间的无缝沟通。 这不仅可以提高对可疑行李的分类准确性，还可以生成必要的报告，以保持高容量运营，满足所有利益相关者的需求，包括航空公司、乘客、维护人员、机场运营商和其他供应商，以及机场的指令和商业领域等。',

    "airport-slidable-title3": 'BHS控制中心',
    "airport-slidable-texto3": 'BHS控制中心是我们操作的核心。 这里，我们的顶尖技术完美集成，以确保每件行李顺利抵达目的地，为您提供只有守护天使才能提供的平静。 我们经过高度培训的员工协调复杂的过程，不断监视和优化行李的流动，确保运行无间断。 先进的技术：MATEC的BHS控制中心配备了最先进的IT技术，以确保系统的操作和冗余性。 完美集成：它与机场的网络和电信系统无缝集成。',
    "airport-slidable-texto4": '实时数据管理：允许集成、分析和实时生成所有BHS操作的报告。 这包括图表、报告、图表等，为BHS的可靠高效管理提供必不可少的工具。 先进的基础设施：MATEC设计的控制中心配备了最先进的技术，从最新一代的VideoWall到带热插拔冗余的人体工程学工作站、闭路电视系统、最先进的数据中心、光纤网络和最佳环境，以确保不间断运行。 完全集成：在控制中心，我们可以集成、分析并生成来自多种来源的信息的报告，包括PLC系统、行李管理软件MATBag、检查系统等。',

    "airport-driver1-title-sidebar": "办理登机手续",
    "airport-driver1-text-sidebar": "我们从高效友好的办理登机手续开始我们的旅程，以确保乘客的无忧体验，充满微笑。 每个高效登机流程的背后都有细致入微的人工合作，与机场合作设计符合其独特需求的定制解决方案。 我们考虑每个细节，从传送带的布局到与航空公司人员的互动。 尽管技术先进，但正是人的关注使整个流程变得完美。",
    "airport-driver1-text-sidebar2": "我们的MATEC登机手续提供解决方案，可以精确、安全、静音地称重、处理和注入行李。 这些解决方案可以与每个机场独特的架构无缝集成。 无论是通过我们的自助托运（SBD）实现自动化体验，还是将BHS与由工作人员操作的登机柜台集成，结果始终是高效、细心的过程。 此外，我们的行李管理软件MATBag可以与出发控制系统（DCS - Departure Control System）无缝集成，这不仅可以简化机场运营，还可以改善航空公司甚至更重要的是乘客的体验。",

    "functions-title1": "MATEC的CBRA",
    "functions-text1": "我们的第3级检查区由MATEC提供，完全符合TSA和ECAC的规定，并适应每个机场的特定需求。 我们努力设计符合人体工程学的、高度高效的检查站，提供最佳的舒适度与成本效益之间的平衡。",
    "functions-title2": "多样性",
    "functions-text2": "在MATEC的CBRA，我们提供一整套解决方案，包括输送系统、行李检查台BIT（行李检查台）、ETD（爆炸物痕迹检测）、BSD（行李状态显示）、SVS、打印机、设备齐全的工作站、监视器、鼠标、键盘、包装和保护材料等。",

    "guardian-angel-title": "MATEC：机场行李处理系统的守护天使",
    "guardian-angel-text1": "MATEC是您在机场行李处理系统方面的远见卓识的伙伴，热情担当创造者的角色。 从乘客办理登机手续到在提取行李区取回行李，我们的承诺很明确：提供创新解决方案，优化效率、安全和舒适度，同时推动盈利能力和可持续发展。 接下来，我们将探讨MATEC如何在诸如办理登机手续、安全检查、行李分类（Make Up）、行李提取等关键领域中为其增添人性化的一面。",
    "guardian-angel-text2": "这是一个关于机场需求的思考时刻，而这些机场是我们的受护者。 机场本身也是乘客的守护者，他们不知疲倦地工作，确保旅行体验与每次飞行相匹配。 每次飞行都有其目的，无论是结束一笔伟大的生意将为我们乘客的企业带来繁荣，家庭度过难忘的假期，长时间离家后的回归，亲人的回忆，还是回到家乡与所爱的人团聚。 所有这些对我们的乘客来说都是重要的原因，我们的角色就是确保他们携带的目标物品及时到达并完好无损。",
    "click": "展示更多！",

    "closing-title": "入口行李领取：您的完美收官",
    "closing-text1": "在入口行李领取区，MATEC始终是您的保护者，确保乘客和其物品安全相见。 在这里，对细节的仔细关注是我们的专长。 我们的团队不懈努力，确保每件行李都能及时到达其主人，从而完成一段无忧的旅程，充满笑容的动机。",
    "closing-text2": "我们的到达系统解决方案提供干净快速的操作。 它们可以轻松集成先进的安全系统，使机场能够创新和可持续发展，同时为乘客提供出色的到达服务。",

    "bhs-solution-title1": "行李输送系统：",
    "bhs-solution-text1": "设计用于安全高效地处理行李。",
    "bhs-solution-title2": "与X射线检查系统集成：",
    "bhs-solution-text2": "实现高效而安全的行李检查。",
    "bhs-solution-title3": "手动重新标签系统：",
    "bhs-solution-text3": "适用于连接行李或需要额外检查的行李。",
    "bhs-solution-title4": "识别和跟踪系统：",
    "bhs-solution-text4": "精确跟踪每件行李。",
    "bhs-solution-title5": "行李和乘客协调系统（BRS - Baggage Reconciliation System）：",
    "bhs-solution-text5": "确保行李与乘客的一致性。",
    "bhs-solution-title6": "平板旋转式行李传送带：",
    "bhs-solution-text6": "为乘客提供人体工程学和安全性。",
    "bhs-solution-title7": "倾斜式旋转式行李传送带：",
    "bhs-solution-text7": "允许更多积累和功能。",

    "airport-driver2-title": "BHS控制中心：您可靠的运营核心",

    "footer-credits": "制作人员",
    "footer-privacy": "隐私政策",
    "footer-cookies": "Cookie",
    "visor-modelos-title": "我们的产品",

    "closing-title-slidable":"到达BHS解决方案集",
  }
},
fr: {
  translation: {
    "selector-title": "Choisissez votre expérience",
    "selector-aeropuerto": "Aéroports",
    "selector-papel": "Papier et carton",
    "selector-logi": "Logistique",

    "loader-text": "Chargement de l'expérience en cours...",

    "header-home": "Accueil",
    "header-airport": "Aéroports",
    "header-home": "Accueil",
    "airport-desliza": "Faites défiler vers le bas",
    "airport-driver1-title": "Enregistrement efficace avec le sourire",

    "airport-driver2-title-safety": "Sécurité à l'aéroport",
    "airport-driver1-title2": "En savoir plus",

    "airport-driver1-tab1-title": "Solutions en temps réel pour relever les défis",
    "airport-driver1-tab1-text": "Au cœur de la salle de contrôle du système de gestion des bagages (BHS), nos experts agissent comme des anges gardiens, s'intégrant au système de résolution à l'écran (OSR) pour relever les défis en temps réel et assurer un flux constant et sécurisé de bagages. Derrière cette technologie, il y a une équipe humaine hautement qualifiée qui réagit de manière efficace aux situations imprévues. L'ingénierie humaine se distingue par des décisions rapides et éclairées qui maintiennent l'opération en mouvement sans problème.",
    "airport-driver1-tab2-title": "Solutions spécifiques pour chaque besoin",
    "airport-driver1-tab2-text": "Trieur à courroie transversale : un système de tri automatique haute capacité et haute précision pouvant traiter jusqu'à 11 000 UPH, avec des poids allant jusqu'à 50 kg et des longueurs allant jusqu'à 1,5 m par pièce. Dérivateurs horizontaux haute vitesse (HSD - High Speed Diverter) : avec des options de 1 ou 2 bandes et des capacités allant de 800 UPH à 4 800 UPH. Unités de tri verticales (VSU - Vertical Sorter Unit) : disponibles avec une ou 3 bandes et des capacités variant de 1 800 UPH à 3 200 UPH. Selon les besoins de l'aéroport et son architecture, nous proposons des solutions telles que des carrousels ou des convoyeurs droits pour le maquillage. Nous privilégions toujours l'ergonomie et la fonctionnalité pour garantir un fonctionnement efficace de l'aéroport.",
    "airport-driver1-tab3-title": "Tri efficace des bagages",
    "airport-driver1-tab3-text": "Les lecteurs automatiques d'étiquettes offrent une identification précise des bagages. Ils peuvent être des systèmes laser de base offrant une lecture à 360°, efficaces avec un taux d'efficacité pouvant atteindre 95%, ou des systèmes hybrides combinant laser et caméras de vision, atteignant des taux d'efficacité de 99%. Lorsque des solutions plus avancées sont nécessaires, MATEC propose l'identification des bagages par la technologie RFID (Radio Frequency Identification), avec des taux de lecture de 99,9% et des coûts d'installation très compétitifs.\nUne fois que les bagages sont identifiés, notre système de gestion des bagages MATBag, en étroite collaboration avec d'autres systèmes de l'aéroport via le HLC (High Level Control), détermine la voie de tri automatique. Ensuite, le BHS, contrôlé par le LLC (Low Level Control), se charge d'acheminer les bagages vers leur destination finale.",

    "airport-slidable-title1": "Votre sécurité, notre priorité",
    "airport-slidable-texto1": "Au cœur de la sécurité aéroportuaire, MATEC s'intègre complètement aux systèmes d'inspection (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) en respectant pleinement les normes de la TSA et de l'ECAC. Nous effectuons des inspections minutieuses des bagages aux niveaux 1, 2 et 3, atteignant une précision de tri inégalée avec des capacités allant jusqu'à 3600 UPH par ligne. Pour le tri des bagages suspects ou propres, MATEC utilise des solutions de haute technologie et de robustesse, garantissant la fiabilité nécessaire même dans les environnements aéroportuaires les plus exigeants.",
    "airport-slidable-texto2": "De plus, nos conceptions visent à atteindre une grande redondance dans l'ensemble du système de gestion des bagages (BHS), remplissant ainsi la responsabilité de maintenir les aéroports en mouvement constant, avec une disponibilité pouvant atteindre 99,9%. Notre logiciel de gestion des bagages, MATBag, s'intègre de manière fluide et très intuitive avec les systèmes d'inspection, facilitant une communication sans faille entre les deux. Cela améliore non seulement la précision dans le tri des bagages suspects, mais génère également les rapports nécessaires pour maintenir une opération à haute capacité qui satisfait toutes les parties prenantes, y compris les compagnies aériennes, les passagers, le personnel d'entretien, les exploitants aéroportuaires et autres fournisseurs, ainsi que les directives et zones commerciales de l'aéroport, entre autres.",

    "airport-slidable-title3": "Centre de contrôle du BHS",
    "airport-slidable-texto3": "Le Centre de Contrôle du BHS est le noyau central de notre opération. C'est ici que notre technologie de pointe s'intègre parfaitement pour garantir que chaque bagage atteigne sa destination sans encombre, vous offrant la tranquillité d'esprit que seul un ange gardien pourrait offrir. Notre personnel hautement qualifié coordonne des processus complexes, surveille et optimise en permanence le flux de bagages, assurant un fonctionnement sans interruption. Technologie avancée : Le Centre de Contrôle du BHS de MATEC est équipé de la dernière technologie informatique pour garantir le bon fonctionnement et la redondance du système. Intégration parfaite : Il s'intègre de manière fluide avec les réseaux et systèmes de télécommunications des aéroports.",
    "airport-slidable-texto4": "Gestion des données en temps réel : Permet l'intégration, l'analyse et la génération de rapports en temps réel de toutes les opérations du BHS. Cela comprend des graphiques, des rapports, des diagrammes et plus encore, fournissant des outils essentiels pour une gestion fiable et efficace du BHS. Infrastructure de pointe : Le Centre de Contrôle conçu par MATEC est doté de la dernière technologie, du VideoWall de dernière génération aux postes de travail ergonomiques avec redondance à chaud, système de vidéosurveillance, centre de données de dernière génération, réseaux en fibre optique et un environnement optimal pour garantir un fonctionnement ininterrompu. Intégration complète : Au Centre de Contrôle, nous pouvons intégrer, analyser et générer des rapports à partir des informations collectées de diverses sources, y compris les systèmes PLC, le logiciel de gestion des bagages MATBag, les systèmes d'inspection, etc.",

    "airport-driver1-title-sidebar": "Enregistrement",
    "airport-driver1-text-sidebar": "Nous commençons notre voyage par un enregistrement efficace et convivial qui garantit une expérience sans tracas et pleine de sourires pour nos passagers. Derrière chaque processus d'enregistrement efficace se trouve la main humaine méticuleuse qui collabore avec les aéroports pour concevoir des solutions sur mesure adaptées à leurs besoins uniques. Nous prenons en compte chaque détail, de la disposition des convoyeurs à l'interaction avec le personnel de la compagnie aérienne. Bien que la technologie soit avancée, c'est l'attention humaine qui perfectionne l'ensemble du processus.",
    "airport-driver1-text-sidebar2": "Notre système d'enregistrement MATEC propose des solutions permettant de peser, traiter et injecter avec précision et sécurité les bagages, de manière silencieuse et délicate. Ces solutions s'intègrent harmonieusement à l'architecture unique de chaque aéroport. Que ce soit par le biais de notre système de dépôt automatique de bagages (SBD) pour une expérience automatique ou de l'intégration du BHS avec les comptoirs d'enregistrement gérés par le personnel, le résultat est toujours un processus efficace et attentif. De plus, notre logiciel de gestion des bagages, MATBag, s'intègre parfaitement avec le système de contrôle des départs (DCS - Departure Control System), facilitant non seulement l'exploitation de l'aéroport, mais aussi l'expérience des compagnies aériennes et, surtout, des passagers.",

    "functions-title1": "CBRA de MATEC",
    "functions-text1": "Notre Zone d'Inspection de Niveau 3 est fournie par MATEC en totale conformité avec les réglementations de la TSA et de l'ECAC, tout en s'adaptant aux besoins spécifiques de chaque aéroport. Nous nous efforçons de concevoir des postes d'inspection ergonomiques, hautement productifs et offrant le meilleur rapport entre confort et rentabilité.",
    "functions-title2": "Variété",
    "functions-text2": "Dans la CBRA de MATEC, nous proposons une gamme complète de solutions, comprenant des systèmes de transport, des tables d'inspection des bagages (BIT - Baggage Inspection Table), des supports pour accessoires d'inspection tels que la détection d'explosifs (ETD - Explosive Trace Detection), l'affichage de l'état des bagages (BSD - Baggage Status Display), SVS, des imprimantes, des postes de travail entièrement équipés, des moniteurs, des souris, des claviers, des matériaux d'emballage et de protection, entre autres.",

    "guardian-angel-title": "MATEC : L'ange gardien des systèmes de gestion des bagages pour les aéroports",
    "guardian-angel-text1": "MATEC, votre allié visionnaire dans les systèmes de gestion des bagages pour les aéroports, assume avec passion le rôle de Créateur. Du moment où les passagers s'enregistrent jusqu'à la récupération de leurs bagages à la zone de récupération, notre engagement est clair : offrir des solutions innovantes qui optimisent l'efficacité, la sécurité et le confort, tout en stimulant la rentabilité et la durabilité. Nous explorons ci-dessous comment MATEC ajoute une touche humaine à des domaines critiques tels que l'enregistrement, l'inspection de sécurité, la classification des bagages (Make Up), la récupération des bagages, et plus encore.",
    "guardian-angel-text2": "C'est un moment de réflexion sur les besoins des aéroports, qui sont nos protégés. Les aéroports sont, à leur tour, les gardiens des passagers et travaillent sans relâche pour s'assurer que l'expérience de voyage est à la hauteur de chaque vol. Chaque vol a un but, que ce soit la conclusion d'une grande affaire qui apportera la prospérité à l'entreprise d'un de nos passagers, des vacances en famille qui créeront des souvenirs pour toute une vie, le retour après une longue période loin de chez soi, le souvenir d'un être cher, ou simplement les retrouvailles avec des personnes chères dans le pays d'origine. Toutes ces raisons sont importantes pour nos passagers, et notre rôle est de garantir que ce qu'ils emportent avec eux pour atteindre leurs objectifs arrive en temps voulu et en parfait état.",

    "click": "Afficher plus !",

    "closing-title": "Zone de récupération des bagages d'arrivée : Votre fermeture parfaite",
    "closing-text1": "Dans la zone de récupération des bagages d'arrivée, MATEC reste votre protecteur, garantissant des retrouvailles sûres entre les passagers et leurs biens. Ici, l'attention méticuleuse aux détails est notre spécialité. Notre équipe travaille sans relâche pour s'assurer que chaque pièce de bagage parvienne à son propriétaire, complétant ainsi un voyage sans souci et plein de raisons de sourire.",
    "closing-text2": "Nos solutions pour les systèmes d'arrivée offrent des opérations propres et rapides. Elles s'intègrent facilement avec les systèmes de sécurité de pointe, permettant aux aéroports d'innover et de croître de manière durable, tout en offrant un excellent service d'arrivée aux passagers.",
    "bhs-solution-title1": "Systèmes d'alimentation des bagages ergonomiques :",
    "bhs-solution-text1": "Conçus pour une manipulation sûre et efficace des bagages.",
    "bhs-solution-title2": "Intégration avec les systèmes d'inspection aux rayons X :",
    "bhs-solution-text2": "Pour une inspection efficace et sûre des bagages.",
    "bhs-solution-title3": "Systèmes de ré-étiquetage manuel :",
    "bhs-solution-text3": "Idéaux pour les bagages en correspondance ou nécessitant une inspection supplémentaire.",
    "bhs-solution-title4": "Systèmes d'identification et de suivi :",
    "bhs-solution-text4": "Pour un suivi précis de chaque pièce de bagage.",
    "bhs-solution-title5": "Systèmes de réconciliation des bagages (BRS - Baggage Reconciliation System) :",
    "bhs-solution-text5": "Garantissent la correspondance entre le bagage et le passager.",
    "bhs-solution-title6": "Carrousels plats :",
    "bhs-solution-text6": "Fournissent ergonomie et sécurité aux passagers.",
    "bhs-solution-title7": "Carrousels inclinés :",
    "bhs-solution-text7": "Permettent une plus grande accumulation et fonctionnalité.",

    "airport-driver2-title": "Centre de contrôle du BHS : Votre noyau d'opérations fiable",
    "footer-credits": "Crédits",
    "footer-privacy": "Politique de confidentialité",
    "footer-cookies": "Cookies",
    "visor-modelos-title": "Nos produits",

    "closing-title-slidable":"Ensemble de solutions BHS d'arrivées",
  }
},
  pt: {
    translation: {
      "selector-title": "Selecione sua experiência",
      "selector-aeropuerto": "Aeroportos",
      "selector-papel": "Papel e papelão",
      "selector-logi": "Logística",
      "loader-text": "Carregando experiência...",
      "header-home": "Início",
      "header-airport": "Aeroportos",
      "airport-desliza": "Deslize para baixo",
      "airport-driver1-title": "Check-In Eficiente com um Sorriso",
      "airport-driver2-title-safety": "Segurança no aeroporto",
      "airport-driver1-title2": "Leia mais",
      "airport-driver1-tab1-title": "Soluções em tempo real para resolução de desafios",
      "airport-driver1-tab1-text": "No núcleo da sala de controle do BHS, nossos especialistas atuam como anjos da guarda, integrando-se ao sistema On-Screen Resolution (OSR) para abordar desafios em tempo real e garantir um fluxo constante e seguro de bagagens. Por trás dessa tecnologia, há uma equipe altamente treinada que responde de forma eficaz a situações imprevistas. A engenharia humana se destaca ao tomar decisões informadas e rápidas que mantêm a operação em movimento sem problemas.",
      "airport-driver1-tab2-title": "Soluções específicas para cada necessidade",
      "airport-driver1-tab2-text": "Croosbelt Sorter: Um sistema de classificação automática de alta capacidade e precisão que pode lidar com até 11.000 UPH, com pesos de até 50 kg e comprimentos de até 1,5 m por peça. Desviadores Horizontais de Alta Velocidade (HSD - High Speed Diverter): Com opções de 1 ou 2 correias e capacidades variando de 800 UPH a 4.800 UPH. Desviadores Verticais (VSU - Vertical Sorter Unit): Disponíveis com uma ou 3 correias e capacidades variando de 1.800 UPH a 3.200 UPH. Dependendo das necessidades do aeroporto e sua arquitetura, oferecemos soluções como carrosséis ou esteiras retas de Make Up. Sempre priorizamos a ergonomia e funcionalidade para garantir uma operação eficiente do aeroporto.",
      "airport-driver1-tab3-title": "Classificação de bagagem eficiente",
      "airport-driver1-tab3-text": "Os Leitores Automáticos de Etiquetas oferecem uma identificação precisa da bagagem. Podem ser sistemas laser básicos com leitura de 360°, eficazes com uma eficiência de até 95%, ou sistemas híbridos que combinam laser e câmeras de visão, alcançando taxas de eficiência de 99%. Quando soluções mais avançadas são necessárias, a MATEC oferece identificação de bagagem por meio da tecnologia RFID (Identificação por Radiofrequência), com taxas de leitura de 99,9% e custos de instalação altamente competitivos. Após a identificação da bagagem, nosso sistema de gestão de bagagem MATBag, em estreita colaboração com outros sistemas do aeroporto por meio do HLC (Controle de Alto Nível), determina a rota de classificação automática. Em seguida, o BHS, controlado pelo LLC (Controle de Baixo Nível), encarrega-se de levar a bagagem ao seu destino final.",
      "airport-slidable-title1": "Sua Segurança, Nossa Prioridade",
      "airport-slidable-texto1": "No cerne da segurança aeroportuária, a MATEC se integra totalmente aos sistemas de inspeção (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) em total conformidade com os padrões da TSA e da ECAC. Realizamos inspeções minuciosas nas bagagens nos níveis 1, 2 e 3, alcançando uma precisão de classificação inigualável com capacidades de até 3600 UPH por linha. Para a classificação de bagagem suspeita ou limpa, a MATEC emprega soluções de alta tecnologia e robustez, garantindo a confiabilidade necessária mesmo nos ambientes aeroportuários mais exigentes.",
      "airport-slidable-texto2": "Além disso, nossos projetos são focados em obter alta redundância em todo o sistema de manuseio de bagagens (BHS), cumprindo a responsabilidade de manter os aeroportos em movimento constante, com uma disponibilidade que pode chegar a 99,9%. Nosso software de gestão de bagagem, MATBag, integra-se de maneira fluida e altamente intuitiva com os sistemas de inspeção, facilitando uma comunicação sem falhas entre ambos. Isso não apenas melhora a precisão na classificação de bagagens suspeitas, mas também gera os relatórios necessários para manter uma operação de alta capacidade que atenda a todos os interessados, incluindo companhias aéreas, passageiros, pessoal de manutenção, operadores de aeroportos e outros fornecedores, além das diretrizes e áreas comerciais do aeroporto, entre outros.",
      "airport-slidable-title3": "Centro de Controle do BHS",
      "airport-slidable-texto3": "O Centro de Controle do BHS é o núcleo central de nossa operação. É aqui que nossa tecnologia de ponta se integra perfeitamente para garantir que cada peça de bagagem chegue ao seu destino sem problemas, proporcionando a tranquilidade que apenas um anjo da guarda pode oferecer. Nossa equipe altamente treinada coordena processos complexos, supervisiona e otimiza continuamente o fluxo de bagagens, garantindo um funcionamento sem interrupções. Tecnologia Avançada: O Centro de Controle do BHS da MATEC está equipado com a mais recente tecnologia em TI para garantir a operacionalidade e a redundância do sistema. Integração Perfeita: Integra-se de maneira fluida às redes e sistemas de telecomunicações dos aeroportos.",
      "airport-slidable-texto4": "Gestão de Dados em Tempo Real: Permite a integração, análise e geração de relatórios em tempo real de todas as operações do BHS. Isso inclui gráficos, relatórios, diagramas e muito mais, fornecendo ferramentas essenciais para a gestão confiável e eficiente do BHS. Infraestrutura de Ponta: O Centro de Controle projetado pela MATEC possui o que há de mais moderno em tecnologia, desde VideoWall de última geração até estações de trabalho ergonômicas com redundância a quente, sistema de CCTV, datacenter de última geração, redes de fibra óptica e um ambiente ideal para garantir um funcionamento ininterrupto. Integração Completa: No Centro de Controle, podemos integrar, analisar e gerar relatórios a partir de informações coletadas de diversas fontes, incluindo sistemas PLC, o software de gestão de bagagem MATBag, sistemas de inspeção e muito mais.",
      "airport-driver1-title-sidebar": "Check-in",
      "airport-driver1-text-sidebar": "Começamos nossa jornada com um check-in eficiente e amigável que garante uma experiência sem complicações e cheia de sorrisos para nossos passageiros. Por trás de cada processo de check-in eficaz está a mão meticulosa do humano que colabora com os aeroportos para projetar soluções personalizadas que atendam às suas necessidades únicas. Levamos em consideração cada detalhe, desde o layout das esteiras até a interação com o pessoal da companhia aérea. Embora a tecnologia seja avançada, é a atenção humana que aprimora todo o processo.",
      "airport-driver1-text-sidebar2": "Nosso Check-in MATEC oferece soluções que permitem pesar, processar e injetar as bagagens com precisão e segurança, de forma silenciosa e delicada. Essas soluções se integram de maneira harmoniosa à arquitetura única de cada aeroporto. Seja por meio do nosso Self Bag Drop (SBD) para uma experiência automática ou da integração do BHS com os balcões de check-in operados por pessoal, o resultado é sempre um processo eficiente e cuidadoso. Além disso, nosso software de gestão de bagagem, MATBag, integra-se perfeitamente ao sistema de controle de check-in (DCS - Departure Control System), facilitando não apenas a operação do aeroporto, mas também a experiência das companhias aéreas e, o mais importante, dos passageiros.",
      "functions-title1": "CBRA da MATEC",
      "functions-text1": "Nossa Zona de Inspeção de Nível 3 é fornecida pela MATEC em total conformidade com as regulamentações da TSA e da ECAC, além de se adaptar às necessidades específicas de cada aeroporto. Nos esforçamos para projetar estações de inspeção ergonômicas, altamente produtivas e que ofereçam a melhor relação entre conforto e custo-benefício.",
      "functions-title2": "Variedade",
      "functions-text2": "Na CBRA da MATEC, oferecemos uma gama completa de soluções, incluindo sistemas de transporte, mesas de inspeção BIT (Baggage Inspection Table), suportes para acessórios de inspeção como ETD (Detecção de Traços Explosivos), BSD (Exibição de Status de Bagagem), SVS, impressoras, estações de trabalho totalmente equipadas, monitores, mouse, teclados, material de embalagem e proteção, entre outros.",
      "guardian-angel-title": "MATEC: O anjo da guarda em Sistemas de Manuseio de Bagagem para Aeroportos",
      "guardian-angel-text1": "A MATEC, sua aliada visionária em sistemas de manuseio de bagagem para aeroportos, assume com paixão o papel de Criadora. Desde o momento em que os passageiros fazem o check-in até a retirada de suas bagagens na área de retirada, nosso compromisso é claro: oferecer soluções inovadoras que otimizem a eficiência, a segurança e o conforto, impulsionando ao mesmo tempo a rentabilidade e a sustentabilidade. A seguir, exploramos como a MATEC acrescenta um toque humano a áreas críticas, como o Check-In, a Inspeção de Segurança, a Classificação de Bagagem (Make Up), a Retirada de Bagagem e muito mais.",
      "guardian-angel-text2": "Este é um momento de reflexão sobre as necessidades dos aeroportos, que são nossos protegidos. Os aeroportos são, por sua vez, os guardiões dos passageiros e trabalham incansavelmente para garantir que a experiência de viagem esteja à altura de cada voo. Cada voo tem um propósito, seja o fechamento de um grande negócio que trará prosperidade à empresa de um de nossos passageiros, umas férias em família que criarão memórias para toda a vida, o retorno após um longo período longe de casa, a lembrança de um ente querido ou simplesmente o reencontro com pessoas queridas no país de origem. Todos esses são motivos significativos para nossos passageiros, e nosso papel é garantir que o que eles levam consigo para alcançar seus objetivos chegue de forma oportuna e em perfeitas condições.",
      "click": "Mostrar mais!",
      "closing-title": "Retirada de Bagagem na Chegada: Seu Encerramento Perfeito",
      "closing-text1": "Na área de retirada de bagagem na chegada, a MATEC continua sendo seu protetor, garantindo um reencontro seguro entre os passageiros e suas pertences. Aqui, a atenção meticulosa aos detalhes é nossa especialidade. Nossa equipe trabalha incansavelmente para garantir que cada peça de bagagem chegue ao seu proprietário, completando assim uma viagem sem preocupações e cheia de motivos para sorrir.",
      "closing-text2": "Nossas soluções para sistemas de chegada oferecem operações limpas e rápidas. Integram-se facilmente aos sistemas de segurança de ponta, permitindo que os aeroportos inovem e cresçam de forma sustentável, ao mesmo tempo em que oferecem um serviço excepcional de chegada aos passageiros.",
      "bhs-solution-title1": "Sistemas Ergonômicos de Alimentação de Bagagem:",
      "bhs-solution-text1": "Projetados para uma manipulação segura e eficiente da bagagem.",
      "bhs-solution-title2": "Integração com Sistemas de Inspeção por Raios X:",
      "bhs-solution-text2": "Para uma inspeção eficaz e segura da bagagem.",
      "bhs-solution-title3": "Sistemas de Reetiquetagem Manual:",
      "bhs-solution-text3": "Ideal para bagagem em conexão ou que requer inspeção adicional.",
      "bhs-solution-title4": "Sistemas de Identificação e Rastreamento:",
      "bhs-solution-text4": "Para um rastreamento preciso de cada peça de bagagem.",
      "bhs-solution-title5": "Sistemas de Conciliação de Bagagem (BRS - Baggage Reconciliation System):",
      "bhs-solution-text5": "Garantem a correspondência entre a bagagem e o passageiro.",
      "bhs-solution-title6": "Carrosséis Planos:",
      "bhs-solution-text6": "Fornecem ergonomia e segurança para os passageiros.",
      "bhs-solution-title7": "Carrosséis Inclinados:",
      "bhs-solution-text7": "Permitem uma maior acumulação e funcionalidade.",
      "airport-driver2-title": "Centro de Controle BHS: Seu Núcleo de Operações Confiável",
      "footer-credits": "Créditos",
      "footer-privacy": "Política de Privacidade",
      "footer-cookies": "Cookies",
      "visor-modelos-title": "Nossos Produtos",

      "closing-title-slidable":"Conjunto de soluções BHS de chegadas",
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

      "click": "¡Ver más!",

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
      "visor-modelos-title": "Nuestros productos",

      "closing-title-slidable":"Conjunto de soluciones del BHS de llegadas",

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