export type Locale = "ru" | "en";

export const RUSSIAN_SPEAKING_COUNTRIES = new Set([
  "RU", // Russia
  "UA", // Ukraine
  "BY", // Belarus
  "KZ", // Kazakhstan
  "KG", // Kyrgyzstan
  "UZ", // Uzbekistan
  "TJ", // Tajikistan
  "TM", // Turkmenistan
  "MD", // Moldova
  "AM", // Armenia
  "AZ", // Azerbaijan
  "GE", // Georgia
]);

export const translations = {
  ru: {
    nav: {
      philosophy: "Философия",
      growthCycle: "Цикл роста",
      faq: "FAQ",
      contact: "Обратная связь",
      buyToken: "Купить токен",
    },
    hero: {
      description:
        "Концепция проекта строится вокруг физического обеспечения, прямой видимости резервов и экономической модели, которая связывает токен с реальными активами и реальным денежным потоком.",
      phrases: [
        "Хватит инвестировать в пустоту. Реальное золото 24/7 в прямом эфире.",
        "Твой портал из крипты в реальный мир. Токен с физическим обеспечением.",
        "Начинаем с золота. Строим будущее проекта на реальной экономике.",
      ],
      videoPlaceholderLabel: "YouTube placeholder",
      videoPlaceholderTitle:
        "Здесь будет размещено окно прямой трансляции золота и сопутствующих документов",
      videoPlaceholderBody:
        "Контейнер уже подготовлен под крупную адаптивную трансляцию практически на всю полезную ширину первого экрана. После добавления YouTube embed URL сюда автоматически встанет живое видео.",
      explorePhilosophy: "Изучить философию",
      viewGrowthCycle: "Посмотреть цикл роста",
    },
    philosophy: {
      kicker: "Project philosophy",
      title: "Наша философия: Мост между двумя мирами",
      description:
        "Этот блок объясняет не просто продукт, а логику доверия: почему токен должен быть связан с физической реальностью, а не только с верой рынка.",
      blocks: [
        {
          title: "Дефицит доверия на крипторынке",
          paragraphs: [
            "Большинство современных криптовалют обеспечены лишь одной вещью — верой людей. Стоит хайпу утихнуть, и проект превращается в пыль, потому что за ним нет реальной осязаемой ценности. Даже крупные стабильные монеты просят верить им на слово, скрывая свои резервы за закрытыми дверями.",
            "Мы создали этот проект, чтобы исправить главный дефицит крипторынка — дефицит доверия. Наш токен — это прямой портал между блокчейном и физическими активами. Мы не просим вас верить нам на слово. Мы заявляем об абсолютной открытости и показываем обеспечение здесь и сейчас.",
          ],
        },
        {
          title: "Прозрачный старт: живое золото",
          paragraphs: [
            "Проект начинается с реального физического обеспечения. Наш золотой слиток и все сопутствующие документы находятся под круглосуточной трансляцией. Сканы документов открыты для изучения, а подлинность подтверждается регулярными публичными тестами.",
            "Так мы переносим в сайт главный принцип проекта: не обещание в будущем, а видимое и проверяемое обеспечение уже сейчас.",
          ],
        },
        {
          title: "Расширение в реальном мире",
          paragraphs: [
            "По мере роста проект направляет заработанные средства на покупку высоколиквидных активов в физическом мире. Все они юридически оформляются на официальную структуру проекта с публикацией выписок из госреестров.",
            "Это открывает путь от одного актива к полноценной экосистеме, связанной с реальной экономикой, а не только с биржевым настроением.",
          ],
        },
        {
          title: "Почему это ценно: глобальный тренд RWA",
          paragraphs: [
            "Токенизация реальных активов — один из ключевых трендов десятилетия. По логике крупнейших финансовых институтов, рынок RWA развивается в сторону многотриллионного масштаба, потому что инвесторы ищут не только ликвидность, но и реальную основу стоимости.",
            "Вместо скрытых резервов и слепого доверия здесь закладывается принцип Do not trust, verify: открытый стрим, документы и объяснимая модель обратного выкупа.",
          ],
        },
      ],
    },
    growthCycle: {
      kicker: "Closed-loop value model",
      title: "Как это работает: Замкнутый цикл роста",
      description:
        "Схема ниже показывает, как физическое обеспечение, развитие проекта и доход из реального мира формируют цикл, который должен укреплять общую стоимость проекта.",
      steps: [
        {
          title: "Старт: Живое Золото",
          body: "Проект начинается с публично показываемого физического обеспечения и документальной базы, доступной для проверки.",
        },
        {
          title: "Развитие Проекта",
          body: "На основе стартового доверия усиливается присутствие проекта, инфраструктура и вовлеченность аудитории.",
        },
        {
          title: "Покупка Недвижимости / Акций",
          body: "Далее капитал направляется в высоколиквидные реальные активы, оформленные на юридическую структуру проекта.",
        },
        {
          title: "Доход из Реального Мира",
          body: "Эти активы генерируют денежный поток: арендные платежи, дивиденды и другие доходы, не зависящие только от хайпа рынка.",
        },
        {
          title: "Откуп Токенов с Биржи",
          body: "Доход возвращается в криптомир через buyback-механику, сокращая обращение токенов и усиливая общую ценность проекта.",
        },
      ],
    },
    trust: {
      kicker: "Trust architecture",
      title: "Почему золото, прозрачность и buyback-модель работают вместе",
      description:
        "Ниже заложены базовые блоки доверия и объяснения проекта, которые будут служить основой для первого публичного релиза.",
      panels: [
        {
          title: "Почему старт именно с золота",
          body: "Золото считывается как понятный актив доверия: его ценность исторически укоренена, а физическое наличие можно показать, задокументировать и проверять публично.",
        },
        {
          title: "Прозрачность и подтверждение",
          body: "Сайт сразу проектируется так, чтобы стрим, документы и описания модели работали как единая зона доверия, а не как разрозненные обещания.",
        },
        {
          title: "Преимущества модели",
          body: "Комбинация live-резерва, реальных активов и buyback-механики создает более осязаемую связь между токеном, денежным потоком и долгосрочным развитием проекта.",
        },
      ],
    },
    roadmap: {
      kicker: "Roadmap",
      title: "Старт с золота. Дальше — расширение в активы реального мира",
      steps: [
        {
          title: "Phase 01 — Live reserve launch",
          body: "Запуск первой версии сайта, трансляции и базовой модели доверия вокруг физического обеспечения.",
        },
        {
          title: "Phase 02 — Public proof layer",
          body: "Добавление документов, публичных тестов и расширенной секции подтверждения обеспечения.",
        },
        {
          title: "Phase 03 — Real-world asset expansion",
          body: "Переход от одного демонстрационного актива к структуре, которая может включать несколько реальных источников стоимости.",
        },
        {
          title: "Phase 04 — Mature buyback economy",
          body: "Формирование устойчивого цикла дохода, при котором прибыль из реального мира поддерживает токен через регулярный откуп.",
        },
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Базовые ответы на ключевые вопросы",
      items: [
        {
          question: "Что именно делает этот проект отличным от обычного токена?",
          answer:
            "Главное отличие — стремление связать токен не только с рынком ожиданий, но и с физическим обеспечением, документами и доходом из реальных активов.",
        },
        {
          question: "Зачем нужна круглосуточная трансляция?",
          answer:
            "Трансляция служит не украшением, а частью доверительной модели: пользователь должен видеть актив и понимать, что обеспечение не скрыто за закрытыми дверями.",
        },
        {
          question: "Почему на сайте делается акцент на buyback-модели?",
          answer:
            "Потому что обратный выкуп позволяет показать, как доход из реальной экономики может поддерживать проект в криптомире, а не существовать отдельно от него.",
        },
        {
          question: "Эта версия сайта уже финальная?",
          answer:
            "Нет. Первая версия создает архитектурную основу: сильный hero-блок, философию проекта, цикл роста и базовые блоки доверия. Дальше можно углублять proof-слой, legal-секции и продуктовые сценарии.",
        },
      ],
    },
  },

  en: {
    nav: {
      philosophy: "Philosophy",
      growthCycle: "Growth Cycle",
      faq: "FAQ",
      contact: "Contact",
      buyToken: "Buy Token",
    },
    hero: {
      description:
        "The project concept is built around physical backing, direct reserve visibility, and an economic model that ties the token to real assets and real cash flow.",
      phrases: [
        "Stop investing in thin air. Real gold — live 24/7.",
        "Your gateway from crypto to the real world. A token backed by physical assets.",
        "We start with gold. Building the project's future on a real economy.",
      ],
      videoPlaceholderLabel: "YouTube placeholder",
      videoPlaceholderTitle:
        "A live gold reserve stream and supporting documents will be placed here",
      videoPlaceholderBody:
        "The container is already prepared for a large, responsive stream covering nearly the full useful width of the first screen. Once a YouTube embed URL is added, the live video will appear here automatically.",
      explorePhilosophy: "Explore Philosophy",
      viewGrowthCycle: "View Growth Cycle",
    },
    philosophy: {
      kicker: "Project philosophy",
      title: "Our Philosophy: A Bridge Between Two Worlds",
      description:
        "This section explains not just the product, but the logic of trust: why a token must be tied to physical reality, not just market sentiment.",
      blocks: [
        {
          title: "The Trust Deficit in Crypto",
          paragraphs: [
            "Most modern cryptocurrencies are backed by only one thing — people's belief. Once the hype fades, a project crumbles because there is no real, tangible value behind it. Even major stablecoins ask you to trust them on their word, hiding their reserves behind closed doors.",
            "We built this project to fix the main deficit in the crypto market — the trust deficit. Our token is a direct portal between the blockchain and physical assets. We are not asking you to take our word for it. We commit to absolute transparency and show our backing here and now.",
          ],
        },
        {
          title: "A Transparent Start: Live Gold",
          paragraphs: [
            "The project starts with real physical backing. Our gold bar and all supporting documents are under 24/7 live surveillance. Document scans are open for review, and authenticity is confirmed through regular public tests.",
            "This brings the project's core principle to the website: not a promise for the future, but visible and verifiable backing right now.",
          ],
        },
        {
          title: "Expanding into the Real World",
          paragraphs: [
            "As the project grows, earned funds are directed toward purchasing highly liquid assets in the physical world. All of them are legally registered under the project's official structure, with extracts from public registries published.",
            "This opens the path from a single asset to a full ecosystem tied to the real economy — not just to market sentiment.",
          ],
        },
        {
          title: "Why This Has Value: The Global RWA Trend",
          paragraphs: [
            "Real-world asset tokenization is one of the defining trends of the decade. Leading financial institutions project the RWA market growing to a multi-trillion scale, because investors seek not just liquidity but a real foundation of value.",
            "Instead of hidden reserves and blind trust, this project is built on the principle of 'Do not trust, verify': an open stream, verifiable documents, and an explainable buyback model.",
          ],
        },
      ],
    },
    growthCycle: {
      kicker: "Closed-loop value model",
      title: "How It Works: A Closed-Loop Growth Cycle",
      description:
        "The diagram below shows how physical backing, project development, and real-world income form a cycle designed to strengthen the project's overall value.",
      steps: [
        {
          title: "Launch: Live Gold",
          body: "The project starts with publicly displayed physical backing and a documentary base available for verification.",
        },
        {
          title: "Project Development",
          body: "Building on initial trust, the project expands its presence, infrastructure, and audience engagement.",
        },
        {
          title: "Acquiring Real Estate / Equities",
          body: "Capital is then directed into highly liquid real-world assets, registered under the project's legal structure.",
        },
        {
          title: "Real-World Income",
          body: "These assets generate cash flow: rental payments, dividends, and other income not solely dependent on market hype.",
        },
        {
          title: "Token Buyback from Exchange",
          body: "Income is returned to the crypto world through a buyback mechanism, reducing token supply and reinforcing the project's overall value.",
        },
      ],
    },
    trust: {
      kicker: "Trust architecture",
      title: "Why Gold, Transparency, and the Buyback Model Work Together",
      description:
        "Below are the foundational trust and project explanation blocks that will serve as the basis for the first public release.",
      panels: [
        {
          title: "Why We Start with Gold",
          body: "Gold is universally recognized as a trust asset: its value is historically established, and its physical presence can be shown, documented, and publicly verified.",
        },
        {
          title: "Transparency and Verification",
          body: "The site is designed from the ground up so that the stream, documents, and model descriptions operate as a unified trust zone — not as scattered promises.",
        },
        {
          title: "Advantages of the Model",
          body: "The combination of a live reserve, real-world assets, and a buyback mechanism creates a more tangible link between the token, cash flow, and the project's long-term development.",
        },
      ],
    },
    roadmap: {
      kicker: "Roadmap",
      title: "Starting with Gold. Then — Expanding into Real-World Assets",
      steps: [
        {
          title: "Phase 01 — Live reserve launch",
          body: "Launching the first version of the site, the live stream, and the foundational trust model around physical backing.",
        },
        {
          title: "Phase 02 — Public proof layer",
          body: "Adding documents, public tests, and an expanded section for confirming reserve backing.",
        },
        {
          title: "Phase 03 — Real-world asset expansion",
          body: "Moving from a single demonstration asset to a structure that can include multiple real-world sources of value.",
        },
        {
          title: "Phase 04 — Mature buyback economy",
          body: "Establishing a sustainable income cycle where real-world profits support the token through regular buybacks.",
        },
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Essential Answers to Key Questions",
      items: [
        {
          question: "What exactly sets this project apart from a regular token?",
          answer:
            "The key difference is the commitment to tying the token not just to market expectations, but also to physical backing, verifiable documents, and income from real-world assets.",
        },
        {
          question: "Why is a 24/7 live stream necessary?",
          answer:
            "The stream is not decoration — it is part of the trust model: users need to see the asset and understand that the backing is not hidden behind closed doors.",
        },
        {
          question: "Why does the site place such emphasis on the buyback model?",
          answer:
            "Because the buyback mechanism demonstrates how real-economy income can support the project in the crypto world, rather than existing independently from it.",
        },
        {
          question: "Is this version of the site already final?",
          answer:
            "No. The first version creates the architectural foundation: a strong hero block, the project's philosophy, the growth cycle, and foundational trust blocks. Future work can deepen the proof layer, legal sections, and product scenarios.",
        },
      ],
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
