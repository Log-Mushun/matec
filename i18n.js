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
      "airport-desliza": "Scroll Down",
      "airport-driver1-title": "DRIVER #1: Efficient Check-In with a Smile",
      "airport-driver1-title2": "Airport Security",

      "airport-driver1-tab1-title": "Real-Time Solutions for Challenge Resolution",
      "airport-driver1-tab1-text": "At the core of the BHS control room, our experts act as guardian angels, integrating with the On-Screen Resolution (OSR) system to address challenges in real-time and ensure a steady and safe flow of baggage. Behind this technology is a highly trained human team that responds effectively to unforeseen situations. Human engineering stands out by making informed and quick decisions that keep the operation smoothly moving.",
      "airport-driver1-tab2-title": "Tailored Solutions for Every Need",
      "airport-driver1-tab2-text": "Croosbelt Sorter: A high-capacity and high-precision automated sorting system that can handle up to 11,000 UPH, with weights of up to 50 kg and lengths of up to 1.5 m per piece. High-Speed Horizontal Diverter (HSD): With options of 1 or 2 belts and capacities ranging from 800 UPH to 4,800 UPH. Vertical Sorter Units (VSU): Available with 1 or 3 belts and capacities ranging from 1,800 UPH to 3,200 UPH. Depending on the airport's needs and architecture, we offer solutions such as carousels or straight Make-Up belts. We always prioritize ergonomics and functionality to ensure efficient airport operation.",
      "airport-driver1-tab3-title": "Efficient Baggage Sorting",
      "airport-driver1-tab3-text": "Automatic Tag Readers provide precise baggage identification. They can be basic laser systems with 360° reading, which are effective with an efficiency of up to 95%, or hybrid systems that combine lasers and vision cameras, achieving efficiency rates of 99%. When more advanced solutions are needed, MATEC offers baggage identification using RFID (Radio Frequency Identification) technology, with reading rates of 99.9% and highly competitive installation costs. Once the baggage is identified, our baggage management system MATBag, in close collaboration with other airport systems through HLC (High Level Control), determines the route for automatic sorting. Then, the BHS, controlled by the LLC (Low Level Control), takes care of getting the baggage to its final destination.",

      "airport-slidable-title1": "Your Safety, Our Priority",
      "airport-slidable-texto1": "At the core of airport security, MATEC seamlessly integrates with inspection systems (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) in full compliance with TSA and ECAC standards. We conduct thorough baggage inspections at levels 1, 2, and 3, achieving unparalleled classification accuracy with capacities of up to 3600 UPH per line. For the classification of suspect or clean baggage, MATEC employs high-tech and robust solutions, ensuring the necessary reliability even in the most demanding airport environments.",
      "airport-slidable-texto2": "Furthermore, our designs focus on achieving high redundancy throughout the Baggage Handling System (BHS), fulfilling the responsibility of keeping airports constantly moving, with availability that can reach up to 99.9%. Our baggage management software, MATBag, seamlessly integrates with the inspection systems, facilitating seamless communication between them. This not only improves the accuracy in classifying suspicious baggage but also generates the necessary reports to maintain a high-capacity operation that satisfies all stakeholders, including airlines, passengers, maintenance personnel, airport operators, and other providers, as well as airport directives and commercial areas, among others.",

      "airport-slidable-title3": "BHS",
      "airport-slidable-texto3": "The BHS Control Center is the central core of our operation. It's where our state-of-the-art technology seamlessly integrates to ensure that every piece of baggage reaches its destination smoothly, providing you with the peace of mind that only a guardian angel could offer. Our highly trained staff coordinates complex processes, constantly monitors and optimizes the flow of baggage, ensuring uninterrupted operation. Advanced Technology: MATEC's BHS Control Center is equipped with the latest IT technology to guarantee system operability and redundancy. Seamless Integration: It seamlessly integrates with airport networks and telecommunications systems.",
      "airport-slidable-texto4": "Real-Time Data Management: Allows integration, analysis, and real-time reporting of all BHS operations. This includes graphs, reports, diagrams, and more, providing essential tools for reliable and efficient BHS management. Cutting-Edge Infrastructure: The Control Center designed by MATEC features the latest in technology, from state-of-the-art VideoWalls to hot-redundant workstations, CCTV system, state-of-the-art data center, fiber optic networks, and an optimal environment to ensure uninterrupted operation. Comprehensive Integration: At the Control Center, we can integrate, analyze, and report from information collected from various sources, including PLC systems, MATBag baggage management software, inspection systems, and more.",

      "airport-driver1-title-sidebar": "Driver #1",
      "airport-driver1-text-sidebar": "We begin our journey with an efficient and friendly check-in that ensures a hassle-free and smile-filled experience for our passengers. Behind every effective check-in process is the meticulous human hand that collaborates with airports to design custom solutions that fit their unique needs. We consider every detail, from the layout of the conveyor belts to the interaction with airline staff. While the technology is advanced, it's the human attention that perfects the entire process.",
      "airport-driver1-text-sidebar2": "Our MATEC Check-in offers solutions that allow for weighing, processing, and injecting luggage accurately and safely, silently and delicately. These solutions seamlessly integrate with the unique architecture of each airport. Whether through our Self Bag Drop (SBD) for an automated experience or integrating the BHS with staff-operated check-in counters, the result is always an efficient and careful process. Additionally, our baggage management software, MATBag, seamlessly integrates with the Departure Control System (DCS), facilitating not only airport operation but also the experience of airlines, and most importantly, passengers.",

      "functions-title1": "MATEC's CBRA",
      "functions-text1": "Our Level 3 Inspection Zone is supplied by MATEC in total adherence to TSA and ECAC regulations, while adapting to the specific needs of each airport. We strive to design ergonomic, highly productive inspection stations that offer the best balance between comfort and cost-effectiveness.",
      "functions-title2": "Variety",
      "functions-text2": "In MATEC's CBRA, we offer a complete range of solutions, including transport systems, BIT (Baggage Inspection Table) inspection tables, supports for inspection accessories like ETD (Explosive Trace Detection), BSD (Baggage Status Display), SVS, printers, fully equipped workstations, monitors, mouse, keyboards, wrapping and protection material, among others.",

      "guardian-angel-title": "MATEC: The Guardian Angel in Airport Baggage Handling Systems",
      "guardian-angel-text1": "MATEC, your visionary ally in airport baggage handling systems, passionately takes on the role of Creator. From the moment passengers check in to picking up their luggage at the claim area, our commitment is clear: to offer innovative solutions that optimize efficiency, safety, and comfort, while also driving profitability and sustainability. Below, we explore how MATEC adds a human touch to critical areas such as Check-In, Security Inspection, Baggage Sorting (Make Up), Baggage Claim, and more.",
      "guardian-angel-text2": "This is a moment of reflection on the needs of the airports, which are our wards. Airports are, in turn, the guardians of the passengers and work tirelessly to ensure that the travel experience lives up to every flight. Each flight has a purpose, whether it's sealing a big business deal that will bring prosperity to one of our passengers' companies, a family vacation that will create lifelong memories, the return after a long time away from home, the memory of a loved one, or simply the reunion with loved ones in the home country. All of these are significant reasons for our passengers, and our role is to ensure that what they carry with them to achieve their goals arrives timely and in perfect condition.",

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
      "airport-desliza": "Nach unten scrollen",
      "airport-driver1-title": "FAHRER #1: Effizientes Einchecken mit einem Lächeln",
      "airport-driver1-title2": "Flughafensicherheit",
  
      "airport-driver1-tab1-title": "Echtzeitlösungen zur Bewältigung von Herausforderungen",
      "airport-driver1-tab1-text": "Im Kern des BHS-Kontrollraums fungieren unsere Experten als Schutzengel und integrieren sich nahtlos in das On-Screen Resolution (OSR)-System, um Herausforderungen in Echtzeit anzugehen und einen gleichmäßigen und sicheren Fluss von Gepäck zu gewährleisten. Hinter dieser Technologie steht ein hochqualifiziertes menschliches Team, das effektiv auf unvorhergesehene Situationen reagiert. Die menschliche Ingenieurskunst zeichnet sich durch fundierte und schnelle Entscheidungen aus, die den reibungslosen Ablauf gewährleisten.",
      "airport-driver1-tab2-title": "Maßgeschneiderte Lösungen für jeden Bedarf",
      "airport-driver1-tab2-text": "Croosbelt Sorter: Ein Hochleistungs- und hochpräzises automatisches Sortiersystem, das bis zu 11.000 UPH, Gewichte von bis zu 50 kg und Längen von bis zu 1,5 m pro Stück verarbeiten kann. Hochgeschwindigkeits-Horizontalumleiter (HSD): Mit Optionen für 1 oder 2 Bänder und Kapazitäten von 800 UPH bis 4.800 UPH. Vertikale Sortiereinheiten (VSU): Erhältlich mit 1 oder 3 Bändern und Kapazitäten von 1.800 UPH bis 3.200 UPH. Je nach Bedarf und Architektur des Flughafens bieten wir Lösungen wie Karussells oder gerade Make-Up-Bänder an. Wir legen immer Wert auf Ergonomie und Funktionalität, um einen effizienten Flughafenbetrieb zu gewährleisten.",
      "airport-driver1-tab3-title": "Effiziente Gepäcksortierung",
      "airport-driver1-tab3-text": "Die Automatic Tag Reader ermöglichen eine präzise Identifikation des Gepäcks. Es können einfache Laseranlagen mit 360°-Lesung sein, die mit einer Effizienz von bis zu 95 % wirksam sind, oder Hybridanlagen, die Laser und Kameras für die Lesung kombinieren und Effizienzraten von 99 % erzielen. Wenn fortschrittlichere Lösungen erforderlich sind, bietet MATEC die Gepäckidentifikation mittels RFID-Technologie (Radio Frequency Identification) an, mit Leseraten von 99,9 % und äußerst wettbewerbsfähigen Installationskosten. Sobald das Gepäck identifiziert ist, bestimmt unser Gepäckverwaltungssystem MATBag in enger Zusammenarbeit mit anderen Flughafensystemen über HLC (High Level Control) die Route für die automatische Sortierung. Dann kümmert sich das BHS, gesteuert durch LLC (Low Level Control), darum, das Gepäck zu seinem endgültigen Ziel zu bringen.",
      
      "airport-slidable-title1": "Deine Sicherheit, unsere Priorität",
      "airport-slidable-texto1": "Im Mittelpunkt der Flughafensicherheit integriert sich MATEC nahtlos in Inspektionssysteme (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) in voller Einhaltung der TSA- und ECAC-Standards. Wir führen gründliche Gepäckinspektionen auf den Ebenen 1, 2 und 3 durch und erzielen eine unübertroffene Klassifizierungsgenauigkeit mit Kapazitäten von bis zu 3600 UPH pro Linie. Für die Klassifizierung von verdächtigem oder sauberem Gepäck setzt MATEC hochmoderne und robuste Lösungen ein, die auch in anspruchsvollsten Flughafenumgebungen die notwendige Zuverlässigkeit gewährleisten.",
      "airport-slidable-texto2": "Darüber hinaus konzentrieren sich unsere Designs darauf, eine hohe Redundanz im gesamten Baggage Handling System (BHS) zu erreichen, und erfüllen die Verantwortung, die Flughäfen ständig in Bewegung zu halten, mit einer Verfügbarkeit von bis zu 99,9 %. Unsere Gepäckverwaltungssoftware MATBag integriert sich nahtlos in die Inspektionssysteme und erleichtert die nahtlose Kommunikation zwischen ihnen. Dies verbessert nicht nur die Genauigkeit bei der Klassifizierung verdächtiger Gepäckstücke, sondern generiert auch die notwendigen Berichte, um einen leistungsfähigen Betrieb aufrechtzuerhalten, der alle Interessengruppen zufriedenstellt, einschließlich Fluggesellschaften, Passagiere, Wartungspersonal, Flughafenbetreiber und andere Anbieter sowie Flughafendirektiven und kommerzielle Bereiche, unter anderem.",
  
      "airport-slidable-title3": "BHS",
      "airport-slidable-texto3": "Das BHS Control Center ist der zentrale Kern unserer Operation. Hier integriert sich unsere modernste Technologie nahtlos, um sicherzustellen, dass jedes Gepäckstück reibungslos sein Ziel erreicht und Ihnen die Gelassenheit bietet, die nur ein Schutzengel bieten könnte. Unser hochqualifiziertes Personal koordiniert komplexe Prozesse, überwacht und optimiert ständig den Gepäcksfluss und gewährleistet einen unterbrechungsfreien Betrieb. Modernste Technologie: Das BHS Control Center von MATEC ist mit modernster IT-Technologie ausgestattet, um die Betriebsfähigkeit und Redundanz des Systems zu gewährleisten. Nahtlose Integration: Es integriert sich nahtlos in Flughafennetzwerke und Telekommunikationssysteme.",
      "airport-slidable-texto4": "Echtzeitdatenmanagement: Ermöglicht die Integration, Analyse und Echtzeitberichterstattung aller BHS-Operationen. Dies umfasst Grafiken, Berichte, Diagramme und mehr und bietet wesentliche Werkzeuge für das zuverlässige und effiziente BHS-Management. Modernste Infrastruktur: Das von MATEC entworfene Control Center verfügt über die neueste Technologie, von hochmodernen VideoWalls bis hin zu heiß-redundanten Arbeitsstationen, CCTV-System, hochmodernen Rechenzentren, Glasfasernetzwerken und einer optimalen Umgebung, um einen unterbrechungsfreien Betrieb zu gewährleisten. Umfassende Integration: Im Control Center können wir Informationen aus verschiedenen Quellen integrieren, analysieren und Berichte erstellen, einschließlich PLC-Systemen, MATBag Gepäckverwaltungssoftware, Inspektionssystemen und mehr.",
  
      "airport-driver1-title-sidebar": "Fahrer #1",
      "airport-driver1-text-sidebar": "Wir beginnen unsere Reise mit einem effizienten und freundlichen Check-in, der ein reibungsloses und lächelndes Erlebnis für unsere Passagiere gewährleistet. Hinter jedem effektiven Check-in-Prozess steht die akribische menschliche Hand, die mit Flughäfen zusammenarbeitet, um maßgeschneiderte Lösungen zu entwerfen, die ihren einzigartigen Anforderungen entsprechen. Wir berücksichtigen jedes Detail, von der Anordnung der Förderbänder bis zur Interaktion mit dem Airline-Personal. Während die Technologie fortschrittlich ist, ist es die menschliche Aufmerksamkeit, die den gesamten Prozess perfektioniert.",
      "airport-driver1-text-sidebar2": "Unser MATEC Check-in bietet Lösungen, die ein genaues und sicheres Wiegen, Verarbeiten und Injizieren des Gepäcks ermöglichen, leise und behutsam. Diese Lösungen integrieren sich nahtlos in die einzigartige Architektur jedes Flughafens. Ob durch unser Self Bag Drop (SBD) für eine automatisierte Erfahrung oder durch die Integration des BHS mit von Personal betriebenen Check-in-Schaltern: Das Ergebnis ist immer ein effizienter und sorgfältiger Prozess. Darüber hinaus integriert sich unsere Gepäckverwaltungssoftware, MATBag, nahtlos mit dem Abfertigungssystem (DCS - Departure Control System), was nicht nur den Flughafenbetrieb, sondern auch die Erfahrung der Fluggesellschaften und vor allem der Passagiere erleichtert.",
  
      "functions-title1": "MATECs CBRA",
      "functions-text1": "Unsere Inspektionszone der Stufe 3 wird von MATEC in voller Einhaltung der TSA- und ECAC-Vorschriften geliefert und passt sich den spezifischen Anforderungen jedes Flughafens an. Wir streben danach, ergonomische, äußerst produktive Inspektionsstationen zu entwerfen, die das beste Gleichgewicht zwischen Komfort und Kosten-Nutzen-Verhältnis bieten.",
      "functions-title2": "Vielfalt",
      "functions-text2": "In MATECs CBRA bieten wir eine komplette Palette von Lösungen, einschließlich Transportsystemen, BIT (Baggage Inspection Table) Inspektionstischen, Halterungen für Inspektionszubehör wie ETD (Explosive Trace Detection), BSD (Baggage Status Display), SVS, Drucker, voll ausgestatteten Arbeitsstationen, Monitoren, Maus, Tastaturen, Verpackungs- und Schutzmaterial und vielem mehr.",
  
      "guardian-angel-title": "MATEC: Der Schutzengel in Flughafen-Gepäckabfertigungssystemen",
      "guardian-angel-text1": "MATEC, dein visionärer Verbündeter in Flughafen-Gepäckabfertigungssystemen, übernimmt leidenschaftlich die Rolle des Schöpfers. Vom Moment des Eincheckens der Passagiere bis zum Abholen ihres Gepäcks im Bereich der Gepäckausgabe ist unser Engagement klar: innovative Lösungen anzubieten, die Effizienz, Sicherheit und Komfort optimieren und gleichzeitig Rentabilität und Nachhaltigkeit fördern. Im Folgenden gehen wir darauf ein, wie MATEC menschliche Aspekte in kritischen Bereichen wie Check-In, Sicherheitsinspektion, Gepäcksortierung (Make-Up), Gepäckabholung und mehr integriert.",
      "guardian-angel-text2": "Dies ist ein Moment der Reflexion über die Bedürfnisse der Flughäfen, die unsere Schutzbefohlenen sind. Flughäfen sind wiederum die Hüter der Passagiere und arbeiten unermüdlich daran, sicherzustellen, dass das Reiseerlebnis jedem Flug gerecht wird. Jeder Flug hat einen Zweck, sei es der Abschluss eines großen Geschäfts, das Wohlstand für das Unternehmen eines unserer Passagiere bringen wird, ein Familienurlaub, der lebenslange Erinnerungen schaffen wird, die Rückkehr nach langer Zeit fern von zu Hause, die Erinnerung an einen geliebten Menschen oder einfach die Wiederbegegnung mit geliebten Menschen im Heimatland. All dies sind bedeutende Gründe für unsere Passagiere, und unsere Rolle besteht darin, sicherzustellen, dass das, was sie mitnehmen, um ihre Ziele zu erreichen, pünktlich und in einwandfreiem Zustand ankommt.",
  
      "airport-driver2-title": "BHS Control Center: Ihr zuverlässiger Betriebskern",
      "footer-credits": "Credits",
      "footer-privacy": "Datenschutzrichtlinie",
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
  
      "loader-text": "加载体验中...",
  
      "header-home": "首页",
      "header-airport": "机场",
      "airport-desliza": "向下滑动",
      "airport-driver1-title": "司机 #1：高效办理入住手续，微笑服务",
      "airport-driver1-title2": "机场安全",
  
      "airport-driver1-tab1-title": "实时解决挑战的解决方案",
      "airport-driver1-tab1-text": "在BHS控制中心的核心，我们的专家充当守护天使，与On-Screen Resolution（OSR）系统无缝集成，以实时解决挑战，确保行李的稳定和安全流动。在这项技术的背后，是一支高度受过培训的人力团队，对突发情况作出高效响应。人文工程在做出明智迅速的决策方面出类拔萃，保持了运营的顺畅进行。",
      "airport-driver1-tab2-title": "针对每种需求的具体解决方案",
      "airport-driver1-tab2-text": "Croosbelt Sorter：高容量和高精度的自动分类系统，可处理高达11,000 UPH，重达50公斤，长度高达1.5米的货物。高速水平分流器（HSD）：提供1或2条带和800 UPH至4,800 UPH的容量。垂直分拣器（VSU）：可提供1或3条带，容量从1,800 UPH到3,200 UPH不等。根据机场的需求和架构，我们提供旋转盘或直线传送带等解决方案。我们始终优先考虑人体工程学和功能性，以确保机场的高效运营。",
      "airport-driver1-tab3-title": "高效的行李分类",
      "airport-driver1-tab3-text": "Automatic Tag Reader可以准确识别行李。它们可以是具有360°读取的基本激光系统，其效率高达95%，或者结合激光和视觉摄像头的混合系统，实现高达99%的效率。当需要更先进的解决方案时，MATEC通过射频识别（RFID）技术提供行李识别，读取率高达99.9%，并具有极具竞争力的安装成本。一旦识别了行李，我们的行李管理系统MATBag与HLC（高级控制）通过与机场的其他系统紧密合作确定自动分类的路线。然后，由LLC（低级控制）控制的BHS负责将行李送到最终目的地。",
      
      "airport-slidable-title1": "您的安全，我们的首要任务",
      "airport-slidable-texto1": "MATEC完全整合到检查系统（HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System）中，符合TSA和ECAC标准。我们对1、2和3级别的行李进行彻底检查，实现高达每条线3600 UPH的分类准确率。对于可疑或干净的行李分类，MATEC采用高科技和坚固的解决方案，确保在最苛刻的机场环境中也具有必要的可靠性。",
      "airport-slidable-texto2": "此外，我们的设计侧重于在行李处理系统（BHS）的整个系统中实现高度冗余，履行保持机场持续运行的责任，可达99.9%的可用性。我们的行李管理软件MATBag与检查系统无缝整合，促进二者之间的无缝通信。这不仅提高了对可疑行李分类的准确性，还生成了必要的报告，以保持满足所有利益相关者（利益攸关方）的高容量运营，包括航空公司、乘客、维护人员、机场运营商和其他供应商，以及机场的指令和商业领域等。",
      "airport-slidable-title3": "BHS",
      "airport-slidable-texto3": "BHS控制中心是我们操作的核心。这里我们的最新技术完美整合，确保每件行李顺利到达目的地，为您提供只有守护天使才能提供的安心感。我们的高度训练有素的员工协调复杂的流程，不断监控和优化行李流动，确保无缝运行。先进技术：MATEC的BHS控制中心配备了最新的IT技术，以确保系统的操作和冗余性。无缝集成：它可以与机场的网络和电信系统无缝集成。",
      "airport-slidable-texto4": "实时数据管理：允许集成、分析和生成有关BHS所有操作的实时报告。这包括图表、报告、图表等，为可靠高效的BHS管理提供了重要工具。先进基础设施：由MATEC设计的控制中心配有最先进的技术，从先进的VideoWall到带热冗余的工作站，CCTV系统，先进的数据中心，光纤网络和保证无缝运行的最佳环境。全面集成：在控制中心，我们可以整合、分析并生成来自多种来源的信息的报告，包括PLC系统、MATBag行李管理软件、检查系统等。",
  
      "airport-driver1-title-sidebar": "司机 #1",
      "airport-driver1-text-sidebar": "我们从一个高效而友好的办理入住手续开始，确保乘客的体验顺畅，充满微笑。每个有效办理入住手续过程的背后都有一只细心的人手，他们与机场合作，设计符合其独特需求的定制解决方案。我们考虑每一个细节，从传送带的布置到与航空公司人员的互动。虽然技术先进，但正是人的关注使整个流程完美。",
      "airport-driver1-text-sidebar2": "我们的MATEC办理入住手续提供解决方案，可以精确、安全、静悄悄地称重、处理和注入行李。这些解决方案与每个机场的独特架构完美融合。无论是通过我们的自助行李托运（SBD）实现自动化体验，还是通过将BHS与由工作人员操作的办理柜台集成，结果始终是高效和小心翼翼的过程。此外，我们的行李管理软件MATBag可以与出发控制系统（DCS - Departure Control System）无缝集成，这不仅简化了机场运营，也改善了航空公司和乘客的体验。",
      
      "functions-title1": "MATEC的CBRA",
      "functions-text1": "我们的第3级检查区由MATEC提供，完全遵守TSA和ECAC的规定，并根据每个机场的特定要求进行调整。我们致力于设计符合人体工程学、极具生产力并提供最佳舒适度和成本效益之间最佳平衡的检查站。",
      "functions-title2": "多样性",
      "functions-text2": "在MATEC的CBRA中，我们提供全套解决方案，包括运输系统、BIT（行李检查台）检查台、ETD（爆炸追踪检测）、BSD（行李状态显示）、SVS、打印机、配备齐全的工作站、显示器、鼠标、键盘、包装和保护材料等。",
  
      "guardian-angel-title": "MATEC：机场行李处理系统的守护天使",
      "guardian-angel-text1": "MATEC，您在机场行李处理系统方面的有远见的盟友，充满激情地扮演创造者的角色。从乘客办理登机手续的一刻到他们在行李领取区领取行李的时刻，我们的承诺是明确的：提供创新解决方案，优化效率、安全性和舒适度，同时推动盈利能力和可持续发展。接下来，我们将探讨MATEC如何将人的因素融入关键领域，如办理登机手续、安全检查、行李分类（化妆）、行李提取等。",
      "guardian-angel-text2": "这是对机场的需求进行反思的时刻，机场是我们的受护人。机场反过来是乘客的守护者，并不懈努力确保旅行体验符合每次飞行的要求。每次飞行都有一个目的，无论是完成一笔重大交易，将为我们的乘客的企业带来繁荣，还是度过一段家庭度假，创造终生的回忆，长时间离家后的回归，对亲人的记忆，或者只是在祖国与心爱的人重新相聚。所有这些对我们的乘客来说都是重要的理由，而我们的角色是确保他们携带的物品能够及时到达并保持完好无损。",
      
      "airport-driver2-title": "BHS控制中心：您可靠的运营核心",
      "footer-credits": "制作人员",
      "footer-privacy": "隐私政策",
      "footer-cookies": "Cookies",
      "visor-modelos-title": "我们的产品"
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
      "airport-desliza": "Faites défiler vers le bas",
      "airport-driver1-title": "CHAUFFEUR #1 : Enregistrement efficace avec le sourire",
      "airport-driver1-title2": "Sécurité de l'aéroport",
  
      "airport-driver1-tab1-title": "Solutions en temps réel pour résoudre les défis",
      "airport-driver1-tab1-text": "Au cœur du centre de contrôle du BHS, nos experts agissent comme des anges gardiens, s'intégrant au système On-Screen Resolution (OSR) pour relever les défis en temps réel et assurer un flux constant et sûr des bagages. Derrière cette technologie, il y a une équipe humaine hautement qualifiée qui répond de manière efficace aux situations imprévues. L'ingénierie humaine se distingue en prenant des décisions informées et rapides qui maintiennent l'opération en mouvement sans encombre.",
      "airport-driver1-tab2-title": "Solutions spécifiques pour chaque besoin",
      "airport-driver1-tab2-text": "Tri croisé : Un système de tri automatique à haute capacité et précision pouvant gérer jusqu'à 11 000 UPH, avec des poids allant jusqu'à 50 kg et des longueurs allant jusqu'à 1,5 m par pièce. Détourneurs horizontaux haute vitesse (HSD - High Speed Diverter) : Avec des options à 1 ou 2 bandes et des capacités allant de 800 UPH à 4 800 UPH. Détourneurs verticaux (VSU - Vertical Sorter Unit) : Disponibles avec une ou 3 bandes et des capacités variant de 1 800 UPH à 3 200 UPH. Selon les besoins de l'aéroport et son architecture, nous proposons des solutions telles que des carrousels ou des convoyeurs droits. Nous privilégions toujours l'ergonomie et la fonctionnalité pour garantir un fonctionnement efficace de l'aéroport.",
      "airport-driver1-tab3-title": "Tri efficace des bagages",
      "airport-driver1-tab3-text": "Les Automatic Tag Reader offrent une identification précise des bagages. Ils peuvent être des systèmes laser de base avec une lecture à 360°, efficaces avec une efficacité allant jusqu'à 95 %, ou des systèmes hybrides combinant laser et caméras de vision, atteignant des taux d'efficacité de 99 %. Lorsque des solutions plus avancées sont nécessaires, MATEC propose l'identification des bagages par technologie RFID (Radio Frequency Identification), avec des taux de lecture de 99,9 % et des coûts d'installation très compétitifs. Une fois que les bagages sont identifiés, notre système de gestion des bagages MATBag, en étroite collaboration avec d'autres systèmes de l'aéroport via le HLC (High Level Control), détermine la voie de tri automatique. Ensuite, le BHS, contrôlé par le LLC (Low Level Control), se charge d'acheminer les bagages vers leur destination finale.",
      
      "airport-slidable-title1": "Votre sécurité, notre priorité",
      "airport-slidable-texto1": "Au cœur de la sécurité aéroportuaire, MATEC s'intègre pleinement aux systèmes d'inspection (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) en totale conformité avec les normes de la TSA et de l'ECAC. Nous effectuons des inspections minutieuses des bagages aux niveaux 1, 2 et 3, atteignant une précision de tri inégalée avec des capacités allant jusqu'à 3 600 UPH par ligne. Pour le tri des bagages suspects ou propres, MATEC utilise des solutions de haute technologie et de robustesse, garantissant la fiabilité nécessaire même dans les environnements aéroportuaires les plus exigeants.",
      "airport-slidable-texto2": "De plus, nos conceptions visent à atteindre une grande redondance dans l'ensemble du système de manutention des bagages (BHS), respectant ainsi la responsabilité de maintenir les aéroports en mouvement constant, avec une disponibilité pouvant atteindre 99,9 %. Notre logiciel de gestion des bagages, MATBag, s'intègre de manière fluide et hautement intuitive aux systèmes d'inspection, facilitant une communication sans faille entre les deux. Cela améliore non seulement la précision du tri des bagages suspects, mais génère également les rapports nécessaires pour maintenir une exploitation à haute capacité qui satisfait toutes les parties prenantes, y compris les compagnies aériennes, les passagers, le personnel de maintenance, les exploitants d'aéroports et autres fournisseurs, ainsi que les directeurs et les secteurs commerciaux de l'aéroport, entre autres.",
      "airport-slidable-title3": "BHS",
      "airport-slidable-texto3": "Le Centre de Contrôle du BHS de MATEC est le cœur central de notre opération. C'est ici que notre technologie de pointe s'intègre parfaitement pour garantir que chaque pièce de bagage atteigne sa destination sans encombre, vous offrant la tranquillité d'esprit que seul un ange gardien pourrait offrir. Notre personnel hautement qualifié coordonne des processus complexes, surveille et optimise en permanence le flux de bagages, assurant un fonctionnement sans interruption. Technologie Avancée : Le Centre de Contrôle du BHS de MATEC est équipé de la dernière technologie en informatique pour garantir le fonctionnement et la redondance du système. Intégration Parfaite : Il s'intègre de manière transparente aux réseaux et systèmes de télécommunication des aéroports.",
      "airport-slidable-texto4": "Gestion des données en temps réel : permet l'intégration, l'analyse et la génération de rapports en temps réel de toutes les opérations du BHS. Cela inclut des graphiques, des rapports, des diagrammes, etc., fournissant des outils essentiels pour la gestion fiable et efficace du BHS. Infrastructure de pointe : Le Centre de Contrôle conçu par MATEC est équipé de la dernière technologie, du mur vidéo dernière génération aux postes de travail ergonomiques avec redondance à chaud, système de vidéosurveillance, centre de données de pointe, réseaux de fibres optiques et un environnement optimal pour garantir un fonctionnement ininterrompu. Intégration complète : Au Centre de Contrôle, nous pouvons intégrer, analyser et générer des rapports à partir d'informations collectées auprès de diverses sources, y compris les systèmes PLC, le logiciel de gestion des bagages MATBag, les systèmes d'inspection, etc.",
      "airport-driver1-title-sidebar": "Chauffeur #1",
      "airport-driver1-text-sidebar": "Nous commençons notre voyage par un enregistrement efficace et convivial qui garantit une expérience sans complications et pleine de sourires pour nos passagers. Derrière chaque processus d'enregistrement efficace se trouve la main méticuleuse de l'homme qui collabore avec les aéroports pour concevoir des solutions sur mesure répondant à leurs besoins uniques. Nous considérons chaque détail, de la disposition des convoyeurs à l'interaction avec le personnel de la compagnie aérienne. Bien que la technologie soit avancée, c'est l'attention humaine qui perfectionne tout le processus.",
      "airport-driver1-text-sidebar2": "Notre enregistrement MATEC propose des solutions permettant de peser, traiter et injecter avec précision et en toute sécurité les bagages, de manière silencieuse et délicate. Ces solutions s'intègrent harmonieusement à l'architecture unique de chaque aéroport. Que ce soit via notre système d'enregistrement automatique des bagages (SBD) pour une expérience automatisée ou via l'intégration du BHS avec les comptoirs d'enregistrement gérés par le personnel, le résultat est toujours un processus efficace et attentionné. De plus, notre logiciel de gestion des bagages, MATBag, s'intègre de manière transparente avec le système de contrôle des départs (DCS - Departure Control System), facilitant non seulement l'exploitation de l'aéroport, mais aussi l'expérience des compagnies aériennes et, surtout, des passagers.",
      
      "functions-title1": "CBRA de MATEC",
      "functions-text1": "Notre Zone d'Inspection de Niveau 3 est fournie par MATEC en totale conformité avec les réglementations de la TSA et de l'ECAC, et s'adapte aux besoins spécifiques de chaque aéroport. Nous nous efforçons de concevoir des postes d'inspection ergonomiques, très productifs et offrant le meilleur équilibre entre confort et rentabilité.",
      "functions-title2": "Variété",
      "functions-text2": "Dans la CBRA de MATEC, nous proposons une gamme complète de solutions, comprenant des systèmes de transport, des tables d'inspection BIT (Baggage Inspection Table), des supports pour accessoires d'inspection tels que le ETD (Explosive Trace Detection), le BSD (Baggage Status Display), le SVS, des imprimantes, des postes de travail entièrement équipés, des écrans, des souris, des claviers, des matériaux d'emballage et de protection, entre autres.",
      "guardian-angel-title": "MATEC : L'ange gardien dans les systèmes de manutention des bagages pour les aéroports",
      "guardian-angel-text1": "MATEC, votre allié visionnaire dans les systèmes de manutention des bagages pour les aéroports, assume avec passion le rôle de Créateur. Dès que les passagers s'enregistrent jusqu'à la récupération de leurs bagages à la zone de réclamation, notre engagement est clair : offrir des solutions innovantes qui optimisent l'efficacité, la sécurité et le confort, tout en stimulant la rentabilité et la durabilité. Nous explorons ci-dessous comment MATEC ajoute une dimension humaine aux domaines critiques tels que l'enregistrement, la sécurité, le tri des bagages (Make Up), la récupération des bagages, et plus encore.",
      "guardian-angel-text2": "C'est un moment de réflexion sur les besoins des aéroports, qui sont nos protégés. Les aéroports sont, à leur tour, les gardiens des passagers et travaillent sans relâche pour s'assurer que l'expérience de voyage est à la hauteur de chaque vol. Chaque vol a un but, que ce soit la conclusion d'une grande affaire qui apportera la prospérité à l'entreprise d'un de nos passagers, des vacances en famille qui créeront des souvenirs pour toute une vie, le retour après une longue période loin de chez soi, le souvenir d'un être cher, ou simplement les retrouvailles avec des êtres chers dans le pays d'origine. Toutes ces raisons sont significatives pour nos passagers, et notre rôle est de garantir que ce qu'ils emportent pour atteindre leurs objectifs arrive en temps opportun et en parfait état.",
      
      "airport-driver2-title": "Centre de contrôle du BHS : Votre cœur opérationnel fiable",
      "footer-credits": "Crédits",
      "footer-privacy": "Politique de confidentialité",
      "footer-cookies": "Cookies",
      "visor-modelos-title": "Nos produits"
    }
  },
  pt: {
    translation: {
      "selector-title": "Escolha sua experiência",
      "selector-aeropuerto": "Aeroportos",
      "selector-papel": "Papel e papelão",
      "selector-logi": "Logística",
  
      "loader-text": "Carregando experiência...",
  
      "header-home": "Início",
      "header-airport": "Aeroportos",
      "airport-desliza": "Deslize para baixo",
      "airport-driver1-title": "MOTORISTA #1: Check-in eficiente com um sorriso",
      "airport-driver1-title2": "Segurança do aeroporto",
  
      "airport-driver1-tab1-title": "Soluções em tempo real para resolver desafios",
      "airport-driver1-tab1-text": "No centro do centro de controle do BHS, nossos especialistas atuam como anjos da guarda, integrando-se ao sistema de Resolução na Tela (OSR) para enfrentar desafios em tempo real e garantir um fluxo constante e seguro de bagagens. Por trás dessa tecnologia, há uma equipe humana altamente qualificada que responde de maneira eficaz a situações imprevistas. A engenharia humana se destaca ao tomar decisões informadas e rápidas que mantêm a operação fluindo sem problemas.",
      "airport-driver1-tab2-title": "Soluções específicas para cada necessidade",
      "airport-driver1-tab2-text": "Classificador de Correias Cruzadas: Um sistema de classificação automática de alta capacidade e precisão que pode lidar com até 11.000 UPH, com pesos de até 50 kg e comprimentos de até 1,5 m por peça. Desviadores Horizontais de Alta Velocidade (HSD - High Speed Diverter): Com opções de 1 ou 2 faixas e capacidades que variam de 800 UPH a 4.800 UPH. Unidades de Classificação Vertical (VSU - Vertical Sorter Unit): Disponíveis com uma ou 3 faixas e capacidades que variam de 1.800 UPH a 3.200 UPH. Dependendo das necessidades do aeroporto e de sua arquitetura, oferecemos soluções como carrosséis ou esteiras retas de Montagem. Sempre priorizamos a ergonomia e funcionalidade para garantir uma operação eficiente do aeroporto.",
      "airport-driver1-tab3-title": "Classificação eficiente de bagagens",
      "airport-driver1-tab3-text": "Os Leitores Automáticos de Etiquetas oferecem uma identificação precisa da bagagem. Podem ser sistemas laser básicos com leitura de 360°, que são eficazes com uma eficiência de até 95%, ou sistemas híbridos que combinam laser e câmeras de visão, alcançando taxas de eficiência de 99%. Quando são necessárias soluções mais avançadas, a MATEC oferece identificação de bagagem por meio de tecnologia RFID (Identificação por Radiofrequência), com taxas de leitura de 99,9% e custos de instalação altamente competitivos. Uma vez que a bagagem é identificada, nosso sistema de gestão de bagagens MATBag, em estreita colaboração com outros sistemas do aeroporto por meio do HLC (Controle de Alto Nível), determina a rota de classificação automática. Em seguida, o BHS, controlado pelo LLC (Controle de Baixo Nível), cuida de levar a bagagem ao seu destino final.",
      
      "airport-slidable-title1": "Sua segurança, nossa prioridade",
      "airport-slidable-texto1": "No cerne da segurança aeroportuária, a MATEC se integra completamente aos sistemas de inspeção (HBS - Inspeção de Bagagens | CBIS - Sistema de Inspeção de Bagagens Verificadas) em total conformidade com as normas da TSA e da ECAC. Realizamos inspeções minuciosas de bagagens nos níveis 1, 2 e 3, alcançando uma precisão de classificação imbatível com capacidades de até 3.600 UPH por linha. Para a classificação de bagagens suspeitas ou limpas, a MATEC utiliza soluções de alta tecnologia e robustez, garantindo a confiabilidade necessária mesmo nos ambientes aeroportuários mais exigentes.",
      "airport-slidable-texto2": "Além disso, nossos projetos visam alcançar uma alta redundância em todo o sistema de manuseio de bagagens (BHS), cumprindo assim a responsabilidade de manter os aeroportos em movimento constante, com uma disponibilidade que pode chegar a 99,9%. Nosso software de gestão de bagagens, MATBag, integra-se de maneira suave e altamente intuitiva aos sistemas de inspeção, facilitando uma comunicação perfeita entre os dois. Isso melhora não apenas a precisão na classificação de bagagens suspeitas, mas também gera os relatórios necessários para manter uma operação de alta capacidade que atenda a todos os interessados, incluindo companhias aéreas, passageiros, equipe de manutenção, operadores de aeroportos e outros fornecedores, além das diretrizes e áreas comerciais do aeroporto, entre outros.",
      "airport-slidable-title3": "BHS",
      "airport-slidable-texto3": "O Centro de Controle do BHS da MATEC é o núcleo central de nossa operação. É aqui que nossa tecnologia de ponta se integra perfeitamente para garantir que cada peça de bagagem chegue ao seu destino sem problemas, proporcionando a tranquilidade que apenas um anjo da guarda poderia oferecer. Nosso pessoal altamente qualificado coordena processos complexos, monitora e otimiza continuamente o fluxo de bagagens, garantindo um funcionamento sem interrupções. Tecnologia Avançada: O Centro de Controle do BHS da MATEC está equipado com a mais recente tecnologia em TI para garantir a operacionalidade e redundância do sistema. Integração Perfeita: Integra-se de maneira fluida com as redes e sistemas de telecomunicações dos aeroportos.",
      "airport-slidable-texto4": "Gestão de Dados em Tempo Real: Permite a integração, análise e geração de relatórios em tempo real de todas as operações do BHS. Isso inclui gráficos, relatórios, diagramas e muito mais, fornecendo ferramentas essenciais para a gestão confiável e eficiente do BHS. Infraestrutura de Ponta: O Centro de Controle projetado pela MATEC conta com o que há de mais moderno em tecnologia, desde o VideoWall de última geração até estações de trabalho ergonômicas com redundância a quente, sistema de CCTV, data center de última geração, redes de fibra óptica e um ambiente ideal para garantir um funcionamento ininterrupto. Integração Completa: No Centro de Controle, podemos integrar, analisar e gerar relatórios a partir de informações coletadas de diversas fontes, incluindo sistemas PLC, o software de gestão de bagagens MATBag, sistemas de inspeção, entre outros.",
      "airport-driver1-title-sidebar": "Motorista #1",
      "airport-driver1-text-sidebar": "Começamos nossa jornada com um check-in eficiente e amigável que garante uma experiência sem complicações e cheia de sorrisos para nossos passageiros. Por trás de cada processo de check-in eficaz está a mão meticulosa do ser humano que colabora com os aeroportos para projetar soluções personalizadas que atendam às suas necessidades únicas. Levamos em consideração cada detalhe, desde o layout dos transportadores até a interação com a equipe da companhia aérea. Embora a tecnologia seja avançada, é a atenção humana que aprimora todo o processo.",
      "airport-driver1-text-sidebar2": "Nosso Check-in MATEC oferece soluções que permitem pesar, processar e injetar as bagagens com precisão e segurança, de forma silenciosa e delicada. Essas soluções se integram de forma harmoniosa com a arquitetura única de cada aeroporto. Seja através de nosso Self Bag Drop (SBD) para uma experiência automática ou da integração do BHS com os balcões de check-in operados pela equipe, o resultado é sempre um processo eficiente e cuidadoso. Além disso, nosso software de gestão de bagagens, MATBag, integra-se de forma perfeita com o sistema de controle de partida (DCS - Departure Control System), facilitando não apenas a operação do aeroporto, mas também a experiência das companhias aéreas e, o mais importante, dos passageiros.",
      
      "functions-title1": "CBRA da MATEC",
      "functions-text1": "Nossa Zona de Inspeção de Nível 3 é fornecida pela MATEC em total conformidade com os regulamentos da TSA e da ECAC, adaptando-se às necessidades específicas de cada aeroporto. Nos esforçamos para projetar postos de inspeção ergonômicos, altamente produtivos e que ofereçam a melhor relação entre conforto e custo-benefício.",
      "functions-title2": "Variedade",
      "functions-text2": "Na CBRA da MATEC, oferecemos uma gama completa de soluções, incluindo sistemas de transporte, mesas de inspeção BIT (Baggage Inspection Table), suportes para acessórios de inspeção como ETD (Detecção de Rastreamento de Explosivos), BSD (Tela de Status da Bagagem), SVS, impressoras, estações de trabalho totalmente equipadas, monitores, mouse, teclados, materiais de embalagem e proteção, entre outros.",
      "guardian-angel-title": "MATEC: O anjo guardião em Sistemas de Manuseio de Bagagens para Aeroportos",
      "guardian-angel-text1": "A MATEC, sua aliada visionária em sistemas de manuseio de bagagens para aeroportos, assume com paixão o papel de Criadora. Desde o momento em que os passageiros fazem o check-in até a coleta de suas bagagens na área de retirada, nosso compromisso é claro: oferecer soluções inovadoras que otimizem a eficiência, a segurança e o conforto, impulsionando ao mesmo tempo a rentabilidade e a sustentabilidade. Abaixo, exploramos como a MATEC adiciona um toque humano a áreas críticas, como o Check-In, a Inspeção de Segurança, a Classificação de Bagagens (Make Up), a Retirada de Bagagens e muito mais.",
      "guardian-angel-text2": "Este é um momento de reflexão sobre as necessidades dos aeroportos, que são nossos protegidos. Os aeroportos são, por sua vez, os guardiões dos passageiros e trabalham incansavelmente para garantir que a experiência de viagem esteja à altura de cada voo. Cada voo tem um propósito, seja o fechamento de um grande negócio que trará prosperidade à empresa de um de nossos passageiros, umas férias em família que criarão memórias para toda a vida, o retorno após um longo período longe de casa, a lembrança de um ente querido, ou simplesmente o reencontro com pessoas queridas no país de origem. Todos esses são motivos significativos para nossos passageiros, e nosso papel é garantir que o que levam consigo para alcançar seus objetivos chegue oportunamente e em perfeitas condições.",
      
      "airport-driver2-title": "Centro de Controle BHS: Seu núcleo operacional confiável",
      "footer-credits": "Créditos",
      "footer-privacy": "Política de privacidade",
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
      "airport-driver1-title": "DRIVER #1: Check-In Eficiente con una Sonrisa",
      "airport-driver1-title2": "Seguridad del aeropuerto",

      "airport-driver1-tab1-title": "Soluciones En tiempo Real para Resolución de Desafíos",
      "airport-driver1-tab1-text": "En el núcleo de la sala de control del BHS, nuestros expertos actúan como ángeles guardianes, integrándose al sistema  On-Screen Resolution (OSR) para abordar desafíos en tiempo real y garantizar un flujo constante y seguro de equipaje. Detrás de esta tecnología, hay un equipo humano altamente capacitado que responde de manera eficaz ante situaciones imprevistas. La ingeniería humana se destaca al tomar decisiones informadas y rápidas que mantienen la operación en movimiento sin problemas.",
      "airport-driver1-tab2-title": "Soluciones específicas para cada necesidad",
      "airport-driver1-tab2-text": "Croosbelt Sorter: Un sistema de clasificación automática de alta capacidad y precisión que puede manejar hasta 11,000 UPH, con pesos de hasta 50 kg y longitudes de hasta 1.5 m por pieza. Desviadores Horizontales de Alta Velocidad (HSD - High Speed Diverter): Con opciones de 1 o 2 bandas y capacidades que van desde 800 UPH hasta 4,800 UPH. Desviadores Verticales (VSU - Vertical Sorter Unit): Disponibles con una o 3 bandas y capacidades que varían de 1,800 UPH a 3,200 UPH. Dependiendo de las necesidades del aeropuerto y su arquitectura, ofrecemos soluciones como carruseles o bandas rectas de Make Up. Siempre priorizamos la ergonomía y la funcionalidad para garantizar una operación eficiente del aeropuerto.",
      "airport-driver1-tab3-title": "Clasificación de Equipaje Eficiente",
      "airport-driver1-tab3-text": "Los Automatic Tag Reader ofrecen una identificación precisa del equipaje. Pueden ser sistemas láser básicos con lectura de 360°, que son eficaces con una eficiencia de hasta el 95%, o sistemas híbridos que combinan láser y cámaras de visión, alcanzando tasas de eficiencia del 99%. Cuando se necesitan soluciones más avanzadas, MATEC ofrece identificación de equipaje mediante tecnología RFID (Radio Frequency Identification), con tasas de lectura del 99.9% y costos de instalación altamente competitivos.\nUna vez que el equipaje se identifica, nuestro sistema de gestión de equipaje MATBag, en estrecha colaboración con otros sistemas del aeropuerto a través del HLC (High Level Control), determina la ruta de clasificación automática. Luego, el BHS, controlado por el LLC (Low Level Control), se encarga de llevar el equipaje a su destino final.",

      "airport-slidable-title1": 'Tu Seguridad, Nuestra Prioridad',
      "airport-slidable-texto1": 'En el núcleo de la seguridad aeroportuaria, MATEC se integra completamente con los sistemas de inspección (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) en total cumplimiento con los estándares de la TSA y ECAC. Realizamos inspecciones minuciosas de equipaje en niveles 1, 2 y 3, logrando una precisión de clasificación insuperable con capacidades de hasta 3600 UPH por línea. Para la clasificación de equipaje sospechoso o limpio, MATEC emplea soluciones de alta tecnología y robustez, garantizando la confiabilidad necesaria incluso en los entornos aeroportuarios más exigentes.',
      "airport-slidable-texto2": 'Además, nuestros diseños están enfocados en lograr una alta redundancia en todo el sistema de manejo de equipaje (BHS), cumpliendo con la responsabilidad de mantener los aeropuertos en constante movimiento, con una disponibilidad que puede llegar hasta el 99.9%. Nuestro software de gestión de equipaje, MATBag, se integra de manera fluida y altamente intuitiva con los sistemas de inspección, facilitando una comunicación sin fisuras entre ambos. Esto no solo mejora la precisión en la clasificación del equipaje sospechoso, sino que también genera los informes necesarios para mantener una operación de alta capacidad que satisface a todos los interesados (stakeholders), incluyendo aerolíneas, pasajeros, personal de mantenimiento, operadores de aeropuertos y otros proveedores, además de las directivas y áreas comerciales del aeropuerto, entre otros.',


      "airport-slidable-title3": 'BHS',
      "airport-slidable-texto3": 'El Centro de Control del BHS es el núcleo central de nuestra operación. Es aquí donde nuestra tecnología de punta se integra perfectamente para garantizar que cada pieza de equipaje llegue a su destino sin problemas, brindándote la tranquilidad que solo un ángel guardián podría ofrecer. Nuestro personal altamente capacitado coordina procesos complejos, supervisa y optimiza constantemente el flujo de equipaje, asegurando un funcionamiento sin interrupciones. Tecnología Avanzada: El Centro de Control del BHS de MATEC está equipado con la última tecnología en IT para garantizar la operatividad y redundancia del sistema. Integración Perfecta: Se integra de manera fluida con las redes y sistemas de telecomunicaciones de los aeropuertos.',
      "airport-slidable-texto4": 'Gestión de Datos en Tiempo Real: Permite la integración, análisis y generación de informes en tiempo real de todas las operaciones del BHS. Esto incluye gráficos, informes, diagramas y más, proporcionando herramientas esenciales para la gestión confiable y eficiente del BHS. Infraestructura de Vanguardia: El Centro de Control diseñado por MATEC cuenta con lo último en tecnología, desde VideoWall de última generación hasta estaciones de trabajo ergonómicas con redundancia en caliente, sistema de CCTV, datacenter de última generación, redes de fibra óptica y un entorno óptimo para garantizar un funcionamiento ininterrumpido. Integración Completa: En el Centro de Control, podemos integrar, analizar y generar informes a partir de información recopilada de diversas fuentes, incluyendo sistemas PLC, el software de gestión de equipaje MATBag, sistemas de inspección y más. ',

      "airport-driver1-title-sidebar": "Driver #1",
      "airport-driver1-text-sidebar": "Comenzamos nuestro viaje con un check-in eficiente y amigable que garantiza una experiencia sin complicaciones y llena de sonrisas para nuestros pasajeros. Detrás de cada proceso de check-in efectivo, se encuentra la meticulosa mano humana que colabora con aeropuertos para diseñar soluciones personalizadas que se ajusten a sus necesidades únicas. Consideramos cada detalle, desde la disposición de las cintas transportadoras hasta la interacción con el personal de la aerolínea. Si bien la tecnología es avanzada, es la atención humana la que perfecciona todo el proceso.",
      "airport-driver1-text-sidebar2": "Nuestro Check-in MATEC ofrece soluciones que permiten pesar, procesar e inyectar el equipaje con precisión y seguridad, de manera silenciosa y delicada. Estas soluciones se integran de forma armoniosa con la arquitectura única de cada aeropuerto. Ya sea a través de nuestro Self Bag Drop (SBD) para una experiencia automática o la integración del BHS con los mostradores de facturación operados por personal, el resultado es siempre un proceso eficiente y cuidadoso. Además, nuestro software de gestión de equipaje, MATBag, se integra sin problemas con el sistema de control de facturación (DCS - Departure Control System), lo que facilita no solo la operación del aeropuerto sino también la experiencia de las aerolíneas y, lo más importante, de los pasajeros.",

      "functions-title1": "CBRA de MATEC",
      "functions-text1": "Nuestra Zona de Inspección de Nivel 3 es suministrada por MATEC con total apego a las normativas de la TSA y ECAC, además de adaptarse a las necesidades específicas de cada aeropuerto. Nos esforzamos por diseñar estaciones de inspección ergonómicas, altamente productivas y que ofrezcan la mejor relación entre confort y costo-beneficio.",
      "functions-title2": "Variedad",
      "functions-text2": "En la CBRA de MATEC, ofrecemos una gama completa de soluciones, incluyendo sistemas de transporte, mesas de inspección BIT (Baggage Inspection Table), soportes para accesorios de inspección como ETD (Explosive Trace Detection), BSD (Baggage Status Display), SVS, impresoras, estaciones de trabajo completamente equipadas, monitores, mouse, teclados, material de envoltura y protección, entre otros.",

      "guardian-angel-title": "MATEC: El ángel guardián en Sistemas de Manejo de Equipaje para Aeropuertos",
      "guardian-angel-text1": "MATEC, tu aliado visionario en sistemas de manejo de equipaje para aeropuertos, asume con pasión el papel de Creador. Desde el momento en que los pasajeros realizan el check-in hasta la recogida de su equipaje en el área de reclamo, nuestro compromiso es claro: ofrecer soluciones innovadoras que optimicen la eficiencia, la seguridad y la comodidad, impulsando al mismo tiempo la rentabilidad y la sostenibilidad. A continuación, exploramos cómo MATEC agrega un toque humano a áreas críticas, como el Check-In, la Inspección de Seguridad, la Clasificación de Equipaje (Make Up), el Reclamo de Equipaje y más.",
      "guardian-angel-text2": "Este es un momento de reflexión sobre las necesidades de los aeropuertos, que son nuestros protegidos. Los aeropuertos son, a su vez, los guardianes de los pasajeros y trabajan incansablemente para asegurarse de que la experiencia de viaje esté a la altura de cada vuelo. Cada vuelo tiene un propósito, ya sea el cierre de un gran negocio que traerá prosperidad a la empresa de uno de nuestros pasajeros, unas vacaciones familiares que crearán recuerdos de por vida, el regreso después de un largo período lejos de casa, el recuerdo de un ser querido, o simplemente el reencuentro con personas queridas en el país de origen. Todos estos son motivos significativos para nuestros pasajeros, y nuestro papel es garantizar que lo que llevan consigo para lograr sus objetivos llegue oportunamente y en perfectas condiciones.",


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