import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation:{
      "selector-title": "Select your experience",
      "selector-aeropuerto": "Airports",
      "selector-papel": "Paper and cardboard",
      "selector-logi": "Logistics",
      "loader-text": "Loading experience...",
      "header-home": "Home",
      "header-airport": "Airports",
      "airport-desliza": "Slide Down",
      "airport-driver1-title": "DRIVER #1: Efficient Check-In with a Smile",
      "airport-driver1-title2": "Airport Security",
      "airport-driver1-tab1-title": "CBRA: Efficiency and Safety. Passenger Comfort",
      "airport-driver1-tab1-text": "The CBRA (Claim-Based Reconciliation Area) process becomes transparent with our solutions. We add efficiency and comfort, allowing passengers to reunite with their luggage quickly. Human engineering is reflected in the effectiveness of our systems. Our team strives to achieve a seamless process, ensuring that every passenger has a positive experience when arriving at their destination.",
      "airport-driver1-tab2-title": "Real-Time On-Screen Resolution (OSR)",
      "airport-driver1-tab2-text": "In the BHS control room, our staff act as true guardian angels, using On-Screen Resolution (OSR) to address any issues in real time, ensuring a steady and safe flow of luggage. Behind this technology is a highly trained human team that responds effectively to unforeseen challenges. Human engineering stands out by making informed and quick decisions that keep the operation moving smoothly.",
      "airport-driver1-tab3-title": "Your Guardian Angel in the Airport Industry",
      "airport-driver1-tab3-text": "MATEC, your reliable partner in airport baggage handling systems, embraces its role as your Guardian Angel at every step of the airport process. From the moment passengers check in to picking up their luggage at the baggage claim area, we are committed to providing solutions that optimize efficiency, safety, and comfort while driving profitability and sustainability. Below, we explore how MATEC adds a human touch to processes such as Check-In, Security Screening, Baggage Sorting (Make Up), Baggage Claim, and more.",
      "airport-slidable-title1": "Guardian Angel in Security",
      "airport-slidable-texto1": "At the heart of airport security, MATEC ensures a safe and secure passage through the Security Feed and Security Shunt processes. Our cutting-edge technology combines with human surveillance to deliver robust security. Human engineering shines in interpreting the data collected by our systems. Our experts continually analyze luggage patterns and monitor any anomalies, acting immediately to ensure the safety of all passengers.",
      "airport-slidable-title3": "Worry-Free Travel",
      "airport-slidable-texto3": "MATEC ensures integration with inspection systems (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) in compliance with TSA and ECAC to perform luggage inspection at levels 1, 2, and 3, achieving the highest-level sorting accuracy, with capacities of up to 3600 UPH per line. For suspect/clean baggage sorting, MATEC has high-tech and robust solutions that guarantee the required reliability, as they have been tested in the most critical airport environments.",
      "airport-driver1-title-sidebar": "Driver #1",
      "airport-driver1-text-sidebar": "We start the journey with a smooth and friendly check-in. Our baggage handling solutions ensure a quick and seamless process, allowing passengers to begin their experience with a smile. Behind every efficient check-in system is meticulous human engineering. Our team of experts collaborates with airports to design custom solutions tailored to their unique needs, considering every detail from conveyor belt layouts to interaction with airline personnel. Technology may be advanced, but it's the human touch that perfects the process.",
      "airport-driver2-title": "Entry Baggage Claim: The Final Touch",
      "footer-credits": "Credits",
      "footer-privacy": "Privacy Policy",
      "footer-cookies": "Cookies",
      "visor-modelos-title": "Our products"
    }    
  },
  de:{
    translation:{
      "selector-title": "Wählen Sie Ihr Erlebnis",
      "selector-aeropuerto": "Flughäfen",
      "selector-papel": "Papier und Pappe",
      "selector-logi": "Logistik",
      "loader-text": "Erlebnis wird geladen...",
      "header-home": "Startseite",
      "header-airport": "Flughäfen",
      "airport-desliza": "Nach unten wischen",
      "airport-driver1-title": "FAHRER #1: Effizientes Einchecken mit einem Lächeln",
      "airport-driver1-title2": "Flughafensicherheit",
      "airport-driver1-tab1-title": "CBRA: Effizienz und Sicherheit. Komfort für Passagiere",
      "airport-driver1-tab1-text": "Der CBRA-Prozess (Claim-Based Reconciliation Area) wird mit unseren Lösungen transparent. Wir steigern Effizienz und Komfort und ermöglichen es den Passagieren, schnell wieder mit ihrem Gepäck vereint zu werden. Die menschliche Ingenieurskunst spiegelt sich in der Effektivität unserer Systeme wider. Unser Team arbeitet daran, einen nahtlosen Ablauf sicherzustellen und sicherzustellen, dass jeder Passagier eine positive Erfahrung bei seiner Ankunft am Ziel hat.",
      "airport-driver1-tab2-title": "Echtzeit-Bildschirmauflösung (OSR)",
      "airport-driver1-tab2-text": "In der BHS-Kontrollraum agiert unser Personal wie wahre Schutzengel und verwendet die On-Screen Resolution (OSR), um Probleme in Echtzeit zu lösen und einen kontinuierlichen und sicheren Fluss des Gepäcks sicherzustellen. Hinter dieser Technologie steht ein hochqualifiziertes menschliches Team, das effektiv auf unerwartete Herausforderungen reagiert. Die menschliche Ingenieurskunst zeigt sich darin, informierte und schnelle Entscheidungen zu treffen, die den Betrieb reibungslos halten.",
      "airport-driver1-tab3-title": "Ihr Schutzengel in der Flughafenindustrie",
      "airport-driver1-tab3-text": "MATEC, Ihr vertrauenswürdiger Partner für Flughafen-Gepäckabfertigungssysteme, übernimmt bei jedem Schritt des Flughafenprozesses die Rolle Ihres Schutzengels. Von dem Moment an, in dem die Passagiere einchecken, bis sie ihr Gepäck im Gepäckausgabe-Bereich abholen, setzen wir uns für Lösungen ein, die die Effizienz, Sicherheit und den Komfort optimieren und gleichzeitig die Rentabilität und Nachhaltigkeit fördern. Im Folgenden erläutern wir, wie MATEC eine menschliche Note in Prozesse wie das Einchecken, die Sicherheitskontrolle, die Gepäcksortierung (Make Up), die Gepäckabholung und vieles mehr einbringt.",
      "airport-slidable-title1": "Schutzengel in Sicherheitsfragen",
      "airport-slidable-texto1": "Im Herzen der Flughafensicherheit stellt MATEC einen sicheren und geschützten Durchgang durch die Sicherheitsabläufe von Security Feed und Security Shunt sicher. Unsere Spitzenleistungstechnologie kombiniert sich mit menschlicher Überwachung, um eine solide Sicherheit zu gewährleisten. Die menschliche Ingenieurskunst zeigt sich in der Auswertung der von unseren Systemen gesammelten Daten. Unsere Experten analysieren kontinuierlich die Gepäckmuster und überwachen jegliche Abweichungen, um sofortige Maßnahmen zur Sicherheit aller Passagiere zu ergreifen.",
      "airport-slidable-title3": "Sorgloses Reisen",
      "airport-slidable-texto3": "MATEC gewährleistet die Integration mit Inspektionssystemen (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System), die den Vorschriften der TSA und ECAC entsprechen, um die Gepäckkontrolle auf den Ebenen 1, 2 und 3 durchzuführen und die höchste Genauigkeit bei der Sortierung mit Kapazitäten von bis zu 3600 UPH pro Linie zu erreichen. Für die Sortierung verdächtiger/saubere Gepäckstücke verfügt MATEC über hochtechnologische und robuste Lösungen, die die erforderliche Zuverlässigkeit gewährleisten, da sie in den anspruchsvollsten Umgebungen der Flughäfen getestet wurden.",
      "airport-driver1-title-sidebar": "Fahrer #1",
      "airport-driver1-text-sidebar": "Wir beginnen die Reise mit einem reibungslosen und freundlichen Einchecken. Unsere Gepäckabfertigungslösungen gewährleisten einen schnellen und nahtlosen Ablauf und ermöglichen es den Passagieren, ihre Erfahrung mit einem Lächeln zu beginnen. Hinter jedem effizienten Einchecksystem steckt eine sorgfältige menschliche Ingenieurskunst. Unser Expertenteam arbeitet mit Flughäfen zusammen, um maßgeschneiderte Lösungen zu entwerfen, die ihren einzigartigen Anforderungen gerecht werden und jedes Detail berücksichtigen, von der Anordnung der Förderbänder bis zur Interaktion mit dem Fluglinienpersonal. Die Technologie kann fortgeschritten sein, aber die menschliche Berührung perfektioniert den Prozess.",
      "airport-driver2-title": "Gepäckabholung am Eingang: Der letzte Schliff",
      "footer-credits": "Credits",
      "footer-privacy": "Datenschutzrichtlinie",
      "footer-cookies": "Cookies",
      "visor-modelos-title": "Unsere Produkte"

    }
  },
  cn:{
    translation:{
      "selector-title": "选择您的体验",
      "selector-aeropuerto": "机场",
      "selector-papel": "纸和纸板",
      "selector-logi": "物流",
      "loader-text": "正在加载体验...",
      "header-home": "主页",
      "header-airport": "机场",
      "airport-desliza": "向下滑动",
      "airport-driver1-title": "司机 #1：高效入住微笑服务",
      "airport-driver1-title2": "机场安全",
      "airport-driver1-tab1-title": "CBRA：效率与安全。为乘客提供舒适",
      "airport-driver1-tab1-text": "CBRA（基于索赔的调和区域）过程变得透明，借助我们的解决方案，我们增加了效率和舒适度，使乘客能够快速重新与他们的行李团聚。人类工程学体现在我们系统的效益中。我们的团队致力于实现无缝流程，确保每位乘客在抵达目的地时都有积极的体验。",
      "airport-driver1-tab2-title": "实时屏幕分辨率（OSR）",
      "airport-driver1-tab2-text": "在BHS控制室，我们的工作人员像真正的守护天使一样使用屏幕上的分辨率（OSR）实时解决任何问题，确保行李的稳定和安全流动。在这项技术的背后，是一支经验丰富的人力团队，可以对突发挑战作出高效的回应。人类工程学通过做出明智和迅速的决策，确保运作平稳。",
      "airport-driver1-tab3-title": "机场行业的守护天使",
      "airport-driver1-tab3-text": "MATEC，您在机场行李处理系统方面的可靠合作伙伴，接受了在机场流程的每一步中担任守护天使的角色。从乘客办理登机手续的那一刻起，到在行李提取区取回行李，我们致力于提供优化效率、安全和舒适度的解决方案，同时推动盈利能力和可持续性。下面，我们将探讨MATEC如何在登机、安检、行李分类（化妆）、行李提取等流程中添加了人性化的元素。",
      "airport-slidable-title1": "安全的守护天使",
      "airport-slidable-texto1": "在机场安全的核心，MATEC确保安全而可靠的通过Security Feed和Security Shunt流程。我们的尖端技术与人工监控相结合，提供了坚实的安全性。人类工程学在解释我们系统收集的数据方面表现出色。我们的专家持续分析行李的模式，并监测任何异常情况，立即采取行动，确保所有乘客的安全。",
      "airport-slidable-title3": "无忧旅行",
      "airport-slidable-texto3": "MATEC确保与TSA和ECAC合规的检查系统（HBS - 行李检查系统 | CBIS - 托运行李检查系统）实现集成，以在1级、2级和3级执行行李检查，实现了最高级别的分拣准确度，每条线的容量高达3600 UPH。对于可疑/干净的行李分类，MATEC拥有高科技和强大的解决方案，保证所需的可靠性，因为它们在机场可能遇到的最关键环境中经过了测试。",
      "airport-driver1-title-sidebar": "司机 #1",
      "airport-driver1-text-sidebar": "我们从顺畅友好的办理登机手续开始旅程。我们的行李处理解决方案确保快速而无缝的流程，使乘客能够微笑着开始他们的旅程。在每个高效的办理登机手续系统背后都有精心设计的人类工程。我们的专家团队与机场合作，设计出适应其独特需求的定制解决方案，考虑了从传送带布局到与航空公司工作人员互动的每一个细节。技术可能会很先进，但是人的触摸完善了流程。",
      "airport-driver2-title": "行李提取入口：最后的润色",
      "footer-credits": "制作者",
      "footer-privacy": "隐私政策",
      "footer-cookies": "Cookie",
      "visor-modelos-title": "我们的产品"

    }
  },
  fr:{
    translation:{
      "selector-title": "Choisissez votre expérience",
      "selector-aeropuerto": "Aéroports",
      "selector-papel": "Papier et carton",
      "selector-logi": "Logistique",
      "loader-text": "Chargement de l'expérience...",
      "header-home": "Accueil",
      "header-airport": "Aéroports",
      "airport-desliza": "Faites glisser vers le bas",
      "airport-driver1-title": "CONDUCTEUR #1 : Enregistrement efficace avec le sourire",
      "airport-driver1-title2": "Sécurité de l'aéroport",
      "airport-driver1-tab1-title": "CBRA : Efficacité et sécurité. Confort des passagers",
      "airport-driver1-tab1-text": "Le processus CBRA (Claim-Based Reconciliation Area) devient transparent avec nos solutions. Nous ajoutons de l'efficacité et du confort, permettant aux passagers de retrouver rapidement leurs bagages. L'ingénierie humaine se reflète dans l'efficacité de nos systèmes. Notre équipe s'efforce d'obtenir un processus sans couture, garantissant que chaque passager ait une expérience positive en arrivant à sa destination.",
      "airport-driver1-tab2-title": "Résolution à l'écran en temps réel (OSR)",
      "airport-driver1-tab2-text": "Dans la salle de contrôle du BHS, notre personnel agit comme de véritables anges gardiens, utilisant la résolution à l'écran (OSR) pour résoudre tout problème en temps réel, assurant un flux constant et sûr des bagages. Derrière cette technologie se trouve une équipe humaine hautement qualifiée qui réagit efficacement aux défis imprévus. L'ingénierie humaine se distingue en prenant des décisions informées et rapides qui maintiennent le fonctionnement en douceur.",
      "airport-driver1-tab3-title": "Votre ange gardien dans l'industrie aéroportuaire",
      "airport-driver1-tab3-text": "MATEC, votre partenaire fiable dans les systèmes de gestion des bagages des aéroports, assume son rôle d'ange gardien à chaque étape du processus aéroportuaire. Dès l'instant où les passagers s'enregistrent jusqu'à la récupération de leurs bagages à la zone de réclamation des bagages, nous nous engageons à fournir des solutions qui optimisent l'efficacité, la sécurité et le confort tout en favorisant la rentabilité et la durabilité. Ci-dessous, nous explorons comment MATEC ajoute une touche humaine aux processus tels que l'enregistrement, le contrôle de sécurité, le tri des bagages (Make Up), la réclamation des bagages, et bien plus encore.",
      "airport-slidable-title1": "Ange gardien en matière de sécurité",
      "airport-slidable-texto1": "Au cœur de la sécurité aéroportuaire, MATEC garantit un passage sûr et sécurisé à travers les processus de Security Feed et Security Shunt. Notre technologie de pointe se combine à une surveillance humaine pour offrir une sécurité solide. L'ingénierie humaine se distingue dans l'interprétation des données collectées par nos systèmes. Nos experts analysent en permanence les modèles de bagages et surveillent toute anomalie, agissant immédiatement pour garantir la sécurité de tous les passagers.",
      "airport-slidable-title3": "Voyage sans soucis",
      "airport-slidable-texto3": "MATEC garantit une intégration avec les systèmes d'inspection (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) conformément à la TSA et à l'ECAC pour effectuer l'inspection des bagages aux niveaux 1, 2 et 3, atteignant la plus haute précision de tri, avec des capacités allant jusqu'à 3600 UPH par ligne. Pour le tri des bagages suspects/propres, MATEC dispose de solutions de haute technologie et robustes garantissant la fiabilité requise, car elles ont été testées dans les environnements aéroportuaires les plus critiques.",
      "airport-driver1-title-sidebar": "Conducteur #1",
      "airport-driver1-text-sidebar": "Nous commençons le voyage par un enregistrement fluide et convivial. Nos solutions de gestion des bagages garantissent un processus rapide et sans faille, permettant aux passagers de commencer leur expérience avec le sourire. Derrière chaque système d'enregistrement efficace se trouve une ingénierie humaine méticuleuse. Notre équipe d'experts collabore avec les aéroports pour concevoir des solutions sur mesure adaptées à leurs besoins uniques, en tenant compte de chaque détail, de la disposition des tapis roulants à l'interaction avec le personnel de la compagnie aérienne. La technologie peut être avancée, mais c'est la touche humaine qui perfectionne le processus.",
      "airport-driver2-title": "Réclamation des bagages d'entrée : La touche finale",
      "footer-credits": "Crédits",
      "footer-privacy": "Politique de confidentialité",
      "footer-cookies": "Cookies",
      "visor-modelos-title": "Nos produits"

    }  
  },
  pt:{
    translation:{
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
      "airport-driver1-tab1-title": "CBRA: Eficiência e segurança. Conforto para passageiros",
      "airport-driver1-tab1-text": "O processo CBRA (Claim-Based Reconciliation Area) torna-se transparente com as nossas soluções. Acrescentamos eficiência e conforto, permitindo que os passageiros se reencontrem rapidamente com a sua bagagem. A engenharia humana reflete-se na eficácia dos nossos sistemas. A nossa equipa esforça-se por alcançar um processo contínuo, garantindo que cada passageiro tenha uma experiência positiva ao chegar ao seu destino.",
      "airport-driver1-tab2-title": "Resolução em tela (OSR) em tempo real",
      "airport-driver1-tab2-text": "Na sala de controlo do BHS, a nossa equipa age como verdadeiros anjos da guarda, utilizando a Resolução em Tela (OSR) para resolver quaisquer problemas em tempo real, garantindo um fluxo constante e seguro de bagagem. Por trás desta tecnologia está uma equipa humana altamente treinada que responde eficazmente a desafios inesperados. A engenharia humana destaca-se ao tomar decisões informadas e rápidas que mantêm a operação a funcionar sem problemas.",
      "airport-driver1-tab3-title": "Seu Anjo da Guarda na Indústria Aeroportuária",
      "airport-driver1-tab3-text": "A MATEC, seu parceiro confiável em sistemas de tratamento de bagagem de aeroporto, abraça o seu papel como seu Anjo da Guarda em cada etapa do processo aeroportuário. Desde o momento em que os passageiros fazem o check-in até pegar sua bagagem na área de reclamação de bagagem, estamos empenhados em fornecer soluções que otimizam a eficiência, a segurança e o conforto, ao mesmo tempo que impulsionam a rentabilidade e a sustentabilidade. A seguir, exploramos como a MATEC adiciona um toque humano a processos como Check-In, Inspeção de Segurança, Classificação de Bagagem (Make Up), Reclamação de Bagagem e muito mais.",
      "airport-slidable-title1": "Anjo da Guarda em Segurança",
      "airport-slidable-texto1": "No coração da segurança do aeroporto, a MATEC garante uma passagem segura e protegida através dos processos de Security Feed e Security Shunt. Nossa tecnologia de ponta combina-se com a vigilância humana para oferecer segurança sólida. A engenharia humana destaca-se na interpretação dos dados coletados pelos nossos sistemas. Nossos especialistas analisam continuamente os padrões de bagagem e monitoram qualquer anomalia, agindo imediatamente para garantir a segurança de todos os passageiros.",
      "airport-slidable-title3": "Viagem sem Preocupações",
      "airport-slidable-texto3": "A MATEC garante integração com sistemas de inspeção (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) em conformidade com a TSA e a ECAC para realizar inspeção de bagagem nos níveis 1, 2 e 3, alcançando a mais alta precisão de classificação, com capacidades de até 3600 UPH por linha. Para a classificação de bagagem suspeita/limpa, a MATEC possui soluções de alta tecnologia e robustez que garantem a confiabilidade necessária, pois foram testadas nos ambientes mais críticos dos aeroportos.",
      "airport-driver1-title-sidebar": "Motorista #1",
      "airport-driver1-text-sidebar": "Iniciamos a viagem com um check-in eficiente e amigável. Nossas soluções de tratamento de bagagem garantem um processo rápido e sem problemas, permitindo que os passageiros comecem sua experiência com um sorriso. Por trás de cada sistema de check-in eficiente está uma engenharia humana meticulosa. Nossa equipe de especialistas colabora com os aeroportos para projetar soluções personalizadas que atendam às suas necessidades únicas, considerando cada detalhe, desde o layout das esteiras transportadoras até a interação com a equipe da companhia aérea. A tecnologia pode ser avançada, mas é o toque humano que aperfeiçoa o processo.",
      "airport-driver2-title": "Reclamação de Bagagem de Entrada: O Toque Final",
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
      "airport-driver1-title": "DRIVER #1: Check-In Eficiente con una Sonrisa",
      "airport-driver1-title2": "Seguridad del aeropuerto",

      "airport-driver1-tab1-title": "Soluciones En tiempo Real para Resolución de Desafíos",
      "airport-driver1-tab1-text":"En el núcleo de la sala de control del BHS, nuestros expertos actúan como ángeles guardianes, integrándose al sistema  On-Screen Resolution (OSR) para abordar desafíos en tiempo real y garantizar un flujo constante y seguro de equipaje. Detrás de esta tecnología, hay un equipo humano altamente capacitado que responde de manera eficaz ante situaciones imprevistas. La ingeniería humana se destaca al tomar decisiones informadas y rápidas que mantienen la operación en movimiento sin problemas.",
      "airport-driver1-tab2-title": "Soluciones específicas para cada necesidad",
      "airport-driver1-tab2-text":"Croosbelt Sorter: Un sistema de clasificación automática de alta capacidad y precisión que puede manejar hasta 11,000 UPH, con pesos de hasta 50 kg y longitudes de hasta 1.5 m por pieza. Desviadores Horizontales de Alta Velocidad (HSD - High Speed Diverter): Con opciones de 1 o 2 bandas y capacidades que van desde 800 UPH hasta 4,800 UPH. Desviadores Verticales (VSU - Vertical Sorter Unit): Disponibles con una o 3 bandas y capacidades que varían de 1,800 UPH a 3,200 UPH. Dependiendo de las necesidades del aeropuerto y su arquitectura, ofrecemos soluciones como carruseles o bandas rectas de Make Up. Siempre priorizamos la ergonomía y la funcionalidad para garantizar una operación eficiente del aeropuerto.",
      "airport-driver1-tab3-title": "Clasificación de Equipaje Eficiente",
      "airport-driver1-tab3-text":"Los Automatic Tag Reader ofrecen una identificación precisa del equipaje. Pueden ser sistemas láser básicos con lectura de 360°, que son eficaces con una eficiencia de hasta el 95%, o sistemas híbridos que combinan láser y cámaras de visión, alcanzando tasas de eficiencia del 99%. Cuando se necesitan soluciones más avanzadas, MATEC ofrece identificación de equipaje mediante tecnología RFID (Radio Frequency Identification), con tasas de lectura del 99.9% y costos de instalación altamente competitivos.\nUna vez que el equipaje se identifica, nuestro sistema de gestión de equipaje MATBag, en estrecha colaboración con otros sistemas del aeropuerto a través del HLC (High Level Control), determina la ruta de clasificación automática. Luego, el BHS, controlado por el LLC (Low Level Control), se encarga de llevar el equipaje a su destino final.",
    
      "airport-slidable-title1":'Tu Seguridad, Nuestra Prioridad',
      "airport-slidable-texto1":'En el núcleo de la seguridad aeroportuaria, MATEC se integra completamente con los sistemas de inspección (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspection System) en total cumplimiento con los estándares de la TSA y ECAC. Realizamos inspecciones minuciosas de equipaje en niveles 1, 2 y 3, logrando una precisión de clasificación insuperable con capacidades de hasta 3600 UPH por línea. Para la clasificación de equipaje sospechoso o limpio, MATEC emplea soluciones de alta tecnología y robustez, garantizando la confiabilidad necesaria incluso en los entornos aeroportuarios más exigentes.',
      "airport-slidable-texto2":'Además, nuestros diseños están enfocados en lograr una alta redundancia en todo el sistema de manejo de equipaje (BHS), cumpliendo con la responsabilidad de mantener los aeropuertos en constante movimiento, con una disponibilidad que puede llegar hasta el 99.9%. Nuestro software de gestión de equipaje, MATBag, se integra de manera fluida y altamente intuitiva con los sistemas de inspección, facilitando una comunicación sin fisuras entre ambos. Esto no solo mejora la precisión en la clasificación del equipaje sospechoso, sino que también genera los informes necesarios para mantener una operación de alta capacidad que satisface a todos los interesados (stakeholders), incluyendo aerolíneas, pasajeros, personal de mantenimiento, operadores de aeropuertos y otros proveedores, además de las directivas y áreas comerciales del aeropuerto, entre otros.',


      "airport-slidable-title3":'BHS',
      "airport-slidable-texto3":'El Centro de Control del BHS es el núcleo central de nuestra operación. Es aquí donde nuestra tecnología de punta se integra perfectamente para garantizar que cada pieza de equipaje llegue a su destino sin problemas, brindándote la tranquilidad que solo un ángel guardián podría ofrecer. Nuestro personal altamente capacitado coordina procesos complejos, supervisa y optimiza constantemente el flujo de equipaje, asegurando un funcionamiento sin interrupciones. Tecnología Avanzada: El Centro de Control del BHS de MATEC está equipado con la última tecnología en IT para garantizar la operatividad y redundancia del sistema. Integración Perfecta: Se integra de manera fluida con las redes y sistemas de telecomunicaciones de los aeropuertos.',
      "airport-slidable-texto4":'Gestión de Datos en Tiempo Real: Permite la integración, análisis y generación de informes en tiempo real de todas las operaciones del BHS. Esto incluye gráficos, informes, diagramas y más, proporcionando herramientas esenciales para la gestión confiable y eficiente del BHS. Infraestructura de Vanguardia: El Centro de Control diseñado por MATEC cuenta con lo último en tecnología, desde VideoWall de última generación hasta estaciones de trabajo ergonómicas con redundancia en caliente, sistema de CCTV, datacenter de última generación, redes de fibra óptica y un entorno óptimo para garantizar un funcionamiento ininterrumpido. Integración Completa: En el Centro de Control, podemos integrar, analizar y generar informes a partir de información recopilada de diversas fuentes, incluyendo sistemas PLC, el software de gestión de equipaje MATBag, sistemas de inspección y más. ',

      "airport-driver1-title-sidebar": "Driver #1",
      "airport-driver1-text-sidebar": "Comenzamos nuestro viaje con un check-in eficiente y amigable que garantiza una experiencia sin complicaciones y llena de sonrisas para nuestros pasajeros. Detrás de cada proceso de check-in efectivo, se encuentra la meticulosa mano humana que colabora con aeropuertos para diseñar soluciones personalizadas que se ajusten a sus necesidades únicas. Consideramos cada detalle, desde la disposición de las cintas transportadoras hasta la interacción con el personal de la aerolínea. Si bien la tecnología es avanzada, es la atención humana la que perfecciona todo el proceso.",
      "airport-driver1-text-sidebar2": "Nuestro Check-in MATEC ofrece soluciones que permiten pesar, procesar e inyectar el equipaje con precisión y seguridad, de manera silenciosa y delicada. Estas soluciones se integran de forma armoniosa con la arquitectura única de cada aeropuerto. Ya sea a través de nuestro Self Bag Drop (SBD) para una experiencia automática o la integración del BHS con los mostradores de facturación operados por personal, el resultado es siempre un proceso eficiente y cuidadoso. Además, nuestro software de gestión de equipaje, MATBag, se integra sin problemas con el sistema de control de facturación (DCS - Departure Control System), lo que facilita no solo la operación del aeropuerto sino también la experiencia de las aerolíneas y, lo más importante, de los pasajeros.",

      "functions-title1":"CBRA de MATEC",
      "functions-text1":"Nuestra Zona de Inspección de Nivel 3 es suministrada por MATEC con total apego a las normativas de la TSA y ECAC, además de adaptarse a las necesidades específicas de cada aeropuerto. Nos esforzamos por diseñar estaciones de inspección ergonómicas, altamente productivas y que ofrezcan la mejor relación entre confort y costo-beneficio.",
      "functions-title2":"Variedad",
      "functions-text2":"En la CBRA de MATEC, ofrecemos una gama completa de soluciones, incluyendo sistemas de transporte, mesas de inspección BIT (Baggage Inspection Table), soportes para accesorios de inspección como ETD (Explosive Trace Detection), BSD (Baggage Status Display), SVS, impresoras, estaciones de trabajo completamente equipadas, monitores, mouse, teclados, material de envoltura y protección, entre otros.",

      "guardian-angel-title":"MATEC: El ángel guardián en Sistemas de Manejo de Equipaje para Aeropuertos",
      "guardian-angel-text1":"MATEC, tu aliado visionario en sistemas de manejo de equipaje para aeropuertos, asume con pasión el papel de Creador. Desde el momento en que los pasajeros realizan el check-in hasta la recogida de su equipaje en el área de reclamo, nuestro compromiso es claro: ofrecer soluciones innovadoras que optimicen la eficiencia, la seguridad y la comodidad, impulsando al mismo tiempo la rentabilidad y la sostenibilidad. A continuación, exploramos cómo MATEC agrega un toque humano a áreas críticas, como el Check-In, la Inspección de Seguridad, la Clasificación de Equipaje (Make Up), el Reclamo de Equipaje y más.",
      "guardian-angel-text2":"Este es un momento de reflexión sobre las necesidades de los aeropuertos, que son nuestros protegidos. Los aeropuertos son, a su vez, los guardianes de los pasajeros y trabajan incansablemente para asegurarse de que la experiencia de viaje esté a la altura de cada vuelo. Cada vuelo tiene un propósito, ya sea el cierre de un gran negocio que traerá prosperidad a la empresa de uno de nuestros pasajeros, unas vacaciones familiares que crearán recuerdos de por vida, el regreso después de un largo período lejos de casa, el recuerdo de un ser querido, o simplemente el reencuentro con personas queridas en el país de origen. Todos estos son motivos significativos para nuestros pasajeros, y nuestro papel es garantizar que lo que llevan consigo para lograr sus objetivos llegue oportunamente y en perfectas condiciones.",


      "airport-driver2-title": "Centro de Control BHS: Tu Núcleo de Operaciones Confiable",
      "footer-credits":"Creditos",
      "footer-privacy":"Política de privacidad",
      "footer-cookies":"Cookies",
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