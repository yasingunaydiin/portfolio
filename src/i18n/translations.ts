export type Language = 'en' | 'nl' | 'tr';

const en = {
  hero: {
    availableForWork: 'Available for Work',
    intro:
      'Hi, I’m a front-end developer who enjoys designing and building clean, user-friendly projects',
    introHover: ' by using Javascript, AI and various frameworks.',
    exploreMyWork: 'Explore My Work',
    letsConnect: "Let's Connect",
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'Projects I have created to satisfy needs.',
    visitLiveSite: 'Visit Live Site',
    items: {
      autoketelhuis: {
        smallTitle: 'Car garage in Doetinchem',
        descriptions: [
          'Built a website for a car garage with HTML, CSS and JavaScript.',
          'Customers enter their license plate, choose a service and plan an appointment online.',
          'Shows all-season tyres and car batteries with prices, plus the garage’s Google reviews.',
        ],
      },
      autocentrumgelderland: {
        smallTitle: 'Car dealership in Gelderland',
        descriptions: [
          'Built a WordPress website for a car dealership with Elementor and the Astra theme.',
          'Shows the full used-car stock through an AutoWereld integration, with filters for brand, fuel type and price.',
          'Multilingual with TranslatePress, with customer reviews and an online appointment form.',
        ],
      },
      yukilanlari: {
        smallTitle: 'Freightadverts.net',
        descriptions: [
          'Built a full stack platform for truckers and companies with React, Next.js, and Tailwind CSS for responsive design.',
          'Uses MongoDB with Mongoose for data management.',
          'Integrates WorkOS for authentication.',
        ],
      },
      islanacakmiyim: {
        smallTitle: 'Am i gonna get wet?',
        descriptions: [
          'Built a rain and cloud radar with React, Next.js, and Tailwind CSS for responsive design.',
          'Leaflet for mapping and Fetch API for data retrieval of the cloud and rain data.',
        ],
      },
      progressiondex: {
        smallTitle: '',
        descriptions: [
          'Built a seamless progression tracker.',
          'Designed for easy navigation.',
          'Focused on feature enhancements.',
        ],
      },
      illumicheck: {
        smallTitle: '',
        descriptions: [
          'Developed to provide spelling correction.',
          'Designed for easy use.',
          'With millions of words in the database.',
        ],
      },
      regexorcist: {
        smallTitle: '',
        descriptions: [
          'Developed to remove regex from all file types.',
          'Designed for easy navigation.',
          'More features coming.',
        ],
      },
    },
  },
  about: {
    title: 'A Little About Me',
    subtitle: 'Who am I?',
    intro:
      'Born in Doetinchem, The Netherlands, I’m a front-end developer and native Turkish-Dutch translator with a degree in English Translation and Interpretation Studies. With a foot in both Turkey and The Netherlands, I blend creativity and functionality to craft user-friendly web experiences, bringing a unique multicultural perspective to my work.',
    toolboxTitle: 'My Toolbox',
    toolboxDescription:
      'Explore the technologies and tools I use to create projects.',
    serverToolboxTitle: 'Server & Hosting Toolbox',
    serverToolboxDescription:
      'Alongside development, I work full-time as a tech support engineer. These are the server, security and hosting tools I work with every day.',
    whereAmI: 'Where Am I?',
    locationBefore:
      "I'm deeply connected to both of my home countries, where my roots and experiences come together. These two places have shaped my perspective and the way I approach my work.",
    locationStrong: 'Now based in Doetinchem',
    locationAfter:
      ', I continue to draw inspiration from both cultures. The map below highlights the key locations that have influenced my journey.',
  },
  contact: {
    title: "Let's work together to work on something great.",
    subtitle: "Let's connect and discuss.",
    emailMe: 'Email Me',
  },
};

export type Translation = typeof en;

const nl: Translation = {
  hero: {
    availableForWork: 'Beschikbaar voor werk',
    intro:
      'Hoi, ik ben een front-end developer die graag strakke, gebruiksvriendelijke projecten ontwerpt en bouwt',
    introHover: ' met JavaScript, AI en diverse frameworks.',
    exploreMyWork: 'Bekijk mijn werk',
    letsConnect: 'Neem contact op',
  },
  projects: {
    title: 'Uitgelichte projecten',
    subtitle: 'Projecten die ik heb gemaakt om echte behoeften te vervullen.',
    visitLiveSite: 'Bekijk live site',
    items: {
      autoketelhuis: {
        smallTitle: 'Autogarage in Doetinchem',
        descriptions: [
          'Een website gebouwd voor een autogarage met HTML, CSS en JavaScript.',
          'Klanten vullen hun kenteken in, kiezen een dienst en plannen online een afspraak.',
          'Toont all-season banden en accu’s met prijzen, plus de Google-reviews van de garage.',
        ],
      },
      autocentrumgelderland: {
        smallTitle: 'Autobedrijf in Gelderland',
        descriptions: [
          'Een WordPress-website gebouwd voor een autobedrijf met Elementor en het Astra-thema.',
          'Toont de volledige occasionvoorraad via een koppeling met AutoWereld, met filters op merk, brandstof en prijs.',
          'Meertalig met TranslatePress, met klantreviews en een online afspraakformulier.',
        ],
      },
      yukilanlari: {
        smallTitle: 'Vrachtadvertenties.net',
        descriptions: [
          'Een full-stack platform gebouwd voor vrachtwagenchauffeurs en bedrijven met React, Next.js en Tailwind CSS voor een responsief ontwerp.',
          'Gebruikt MongoDB met Mongoose voor databeheer.',
          'Integreert WorkOS voor authenticatie.',
        ],
      },
      islanacakmiyim: {
        smallTitle: 'Word ik nat?',
        descriptions: [
          'Een regen- en wolkenradar gebouwd met React, Next.js en Tailwind CSS voor een responsief ontwerp.',
          'Leaflet voor de kaarten en de Fetch API om wolken- en regendata op te halen.',
        ],
      },
      progressiondex: {
        smallTitle: '',
        descriptions: [
          'Een soepele voortgangstracker gebouwd.',
          'Ontworpen voor eenvoudige navigatie.',
          'Gericht op het verbeteren van functies.',
        ],
      },
      illumicheck: {
        smallTitle: '',
        descriptions: [
          'Ontwikkeld om spelfouten te corrigeren.',
          'Ontworpen voor eenvoudig gebruik.',
          'Met miljoenen woorden in de database.',
        ],
      },
      regexorcist: {
        smallTitle: '',
        descriptions: [
          'Ontwikkeld om regex uit alle bestandstypen te verwijderen.',
          'Ontworpen voor eenvoudige navigatie.',
          'Meer functies volgen binnenkort.',
        ],
      },
    },
  },
  about: {
    title: 'Een beetje over mij',
    subtitle: 'Wie ben ik?',
    intro:
      'Geboren in Doetinchem, Nederland. Ik ben front-end developer en native Turks-Nederlandse vertaler met een diploma in Engelse Vertaal- en Tolkwetenschap. Met een voet in zowel Turkije als Nederland combineer ik creativiteit en functionaliteit om gebruiksvriendelijke webervaringen te maken, met een unieke multiculturele blik op mijn werk.',
    toolboxTitle: 'Mijn gereedschapskist',
    toolboxDescription:
      'Ontdek de technologieën en tools die ik gebruik om projecten te maken.',
    serverToolboxTitle: 'Server- en hostinggereedschap',
    serverToolboxDescription:
      'Naast development werk ik fulltime als tech support engineer. Dit zijn de server-, beveiligings- en hostingtools waar ik dagelijks mee werk.',
    whereAmI: 'Waar ben ik?',
    locationBefore:
      'Ik ben diep verbonden met mijn beide thuislanden, waar mijn wortels en ervaringen samenkomen. Deze twee plekken hebben mijn kijk en mijn manier van werken gevormd.',
    locationStrong: 'Nu woon ik in Doetinchem',
    locationAfter:
      ' en blijf ik inspiratie halen uit beide culturen. De kaarten hieronder tonen de plekken die mijn reis hebben beïnvloed.',
  },
  contact: {
    title: 'Laten we samen iets geweldigs maken.',
    subtitle: 'Neem contact op en laten we het bespreken.',
    emailMe: 'Mail mij',
  },
};

const tr: Translation = {
  hero: {
    availableForWork: 'İş için müsait',
    intro:
      'Merhaba, temiz ve kullanıcı dostu projeler tasarlayıp geliştirmekten keyif alan bir front-end geliştiriciyim.',
    introHover: " Bunu JavaScript, yapay zeka ve çeşitli framework'lerle yapıyorum.",
    exploreMyWork: 'Çalışmalarımı keşfet',
    letsConnect: 'İletişime geç',
  },
  projects: {
    title: 'Öne Çıkan Projeler',
    subtitle: 'İhtiyaçları karşılamak için geliştirdiğim projeler.',
    visitLiveSite: 'Canlı siteyi ziyaret et',
    items: {
      autoketelhuis: {
        smallTitle: "Doetinchem'de bir oto servis",
        descriptions: [
          'HTML, CSS ve JavaScript ile bir oto servis için web sitesi geliştirdim.',
          'Müşteriler plakalarını girip bir hizmet seçerek online randevu alabilir.',
          'Dört mevsim lastikleri ve aküleri fiyatlarıyla, ayrıca servisin Google yorumlarını gösterir.',
        ],
      },
      autocentrumgelderland: {
        smallTitle: "Gelderland'da bir otomobil galerisi",
        descriptions: [
          'Elementor ve Astra temasıyla bir otomobil galerisi için WordPress web sitesi geliştirdim.',
          'AutoWereld entegrasyonuyla tüm ikinci el araç stoğunu marka, yakıt türü ve fiyat filtreleriyle gösterir.',
          'TranslatePress ile çok dilli; müşteri yorumları ve online randevu formu içerir.',
        ],
      },
      yukilanlari: {
        smallTitle: '',
        descriptions: [
          'Tır şoförleri ve firmalar için React, Next.js ve duyarlı tasarım için Tailwind CSS ile full-stack bir platform geliştirdim.',
          'Veri yönetimi için Mongoose ile MongoDB kullanır.',
          'Kimlik doğrulama için WorkOS entegrasyonu içerir.',
        ],
      },
      islanacakmiyim: {
        smallTitle: '',
        descriptions: [
          'React, Next.js ve duyarlı tasarım için Tailwind CSS ile bir yağmur ve bulut radarı geliştirdim.',
          'Haritalar için Leaflet, bulut ve yağmur verilerini almak için Fetch API kullanır.',
        ],
      },
      progressiondex: {
        smallTitle: '',
        descriptions: [
          'Akıcı bir ilerleme takipçisi geliştirdim.',
          'Kolay gezinme için tasarlandı.',
          'Özellik geliştirmelerine odaklanıldı.',
        ],
      },
      illumicheck: {
        smallTitle: '',
        descriptions: [
          'Yazım düzeltme sağlamak için geliştirildi.',
          'Kolay kullanım için tasarlandı.',
          'Veritabanında milyonlarca kelime bulunur.',
        ],
      },
      regexorcist: {
        smallTitle: '',
        descriptions: [
          'Tüm dosya türlerinden regex kaldırmak için geliştirildi.',
          'Kolay gezinme için tasarlandı.',
          'Yakında daha fazla özellik gelecek.',
        ],
      },
    },
  },
  about: {
    title: 'Hakkımda Biraz',
    subtitle: 'Ben kimim?',
    intro:
      "Hollanda'nın Doetinchem şehrinde doğdum. İngilizce Mütercim ve Tercümanlık bölümünden mezun bir front-end geliştirici ve anadili seviyesinde Türkçe-Felemenkçe çevirmenim. Hem Türkiye'de hem Hollanda'da bir ayağım olduğu için yaratıcılığı ve işlevselliği birleştirerek kullanıcı dostu web deneyimleri oluşturuyor, işime benzersiz bir çok kültürlü bakış açısı katıyorum.",
    toolboxTitle: 'Araç Kutum',
    toolboxDescription:
      'Projelerimi oluştururken kullandığım teknolojileri ve araçları keşfedin.',
    serverToolboxTitle: 'Sunucu ve Hosting Araç Kutum',
    serverToolboxDescription:
      'Yazılım geliştirmenin yanı sıra tam zamanlı teknik destek mühendisi olarak çalışıyorum. Her gün kullandığım sunucu, güvenlik ve hosting araçları bunlar.',
    whereAmI: 'Neredeyim?',
    locationBefore:
      'Köklerimin ve deneyimlerimin buluştuğu iki vatanıma da derinden bağlıyım. Bu iki yer bakış açımı ve işime yaklaşımımı şekillendirdi.',
    locationStrong: "Şu anda Doetinchem'de yaşıyorum",
    locationAfter:
      ' ve her iki kültürden de ilham almaya devam ediyorum. Aşağıdaki haritalar yolculuğumu etkileyen önemli yerleri gösteriyor.',
  },
  contact: {
    title: 'Birlikte harika bir şey yapalım.',
    subtitle: 'Bağlantı kuralım ve konuşalım.',
    emailMe: 'Bana e-posta gönder',
  },
};

export const translations: Record<Language, Translation> = { en, nl, tr };
