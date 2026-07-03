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
      comparison: "Почему мы",
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
      kicker: "🌉 Project philosophy",
      title: "Наша философия: Мост между двумя мирами",
      description:
        "Этот блок объясняет не просто продукт, а логику доверия: почему токен должен быть связан с физической реальностью, а не только с верой рынка.",
      blocks: [
        {
          title: "⚠️ Дефицит доверия на крипторынке",
          paragraphs: [
            "Большинство современных криптовалют обеспечены лишь одной вещью — верой людей. Стоит хайпу утихнуть, и проект превращается в пыль, потому что за ним нет реальной осязаемой ценности. Даже крупные стабильные монеты просят верить им на слово, скрывая свои резервы за закрытыми дверями.",
            "Мы создали этот проект, чтобы исправить главный дефицит крипторынка — дефицит доверия. Наш токен — это прямой портал между блокчейном и физическими активами. Мы не просим вас верить нам на слово. Мы заявляем об абсолютной открытости и показываем обеспечение здесь и сейчас.",
          ],
        },
        {
          title: "🥇 Прозрачный старт: живое золото",
          paragraphs: [
            "Проект начинается с реального физического обеспечения. Наш золотой слиток и все сопутствующие документы находятся под круглосуточной трансляцией. Сканы документов открыты для изучения, а подлинность подтверждается регулярными публичными тестами.",
            "Так мы переносим в сайт главный принцип проекта: не обещание в будущем, а видимое и проверяемое обеспечение уже сейчас.",
          ],
        },
        {
          title: "🏗️ Расширение в реальном мире",
          paragraphs: [
            "По мере роста проект направляет заработанные средства на покупку высоколиквидных активов в физическом мире. Все они юридически оформляются на официальную структуру проекта с публикацией выписок из госреестров.",
            "Это открывает путь от одного актива к полноценной экосистеме, связанной с реальной экономикой, а не только с биржевым настроением.",
          ],
        },
        {
          title: "🌐 Почему это ценно: глобальный тренд RWA",
          paragraphs: [
            "Токенизация реальных активов — один из ключевых трендов десятилетия. По логике крупнейших финансовых институтов, рынок RWA развивается в сторону многотриллионного масштаба, потому что инвесторы ищут не только ликвидность, но и реальную основу стоимости.",
            "Вместо скрытых резервов и слепого доверия здесь закладывается принцип Do not trust, verify: открытый стрим, документы и объяснимая модель обратного выкупа.",
          ],
        },
      ],
    },
    comparison: {
      kicker: "🔍 Сравнение доверия",
      title: "Большинство токенов ничем не обеспечены. Мы решили, что так продолжаться не может",
      description:
        "Мы открыто заявляем о разнице между 'обещанным обеспечением' и обеспечением, которое можно увидеть и проверить самому — прямо сейчас, а не когда-нибудь потом.",
      others: {
        title: "⚠️ Как обычно на рынке",
        items: [
          "Заявления об обеспечении есть, а публичного доказательства — нет",
          "Резервы «где-то есть», но проверить их независимо нельзя",
          "Ценность держится только на вере и ожиданиях сообщества",
          "Даже крупные стейблкоины просто просят поверить им на слово",
        ],
      },
      us: {
        title: "✅ Как устроено у AUREUM LINK",
        items: [
          "🥇 Слиток золота показан открыто с первого дня проекта",
          "📡 Круглосуточная трансляция резерва — без выходных и перерывов",
          "🧾 Документы и подтверждения доступны для проверки",
          "🔁 Реальный доход от активов используется на выкуп токена, а не остаётся обещанием",
        ],
      },
    },
    growthCycle: {
      kicker: "🔁 Closed-loop value model",
      title: "Как это работает: Замкнутый цикл роста",
      description:
        "Схема ниже показывает, как физическое обеспечение, развитие проекта и доход из реального мира формируют цикл, который должен укреплять общую стоимость проекта.",
      steps: [
        {
          title: "🥇 Старт: Живое Золото",
          body: "Проект стартует не с обещаний, а с реального физического актива — слитка золота, купленного и показанного публично. Каждый может увидеть трансляцию и убедиться, что обеспечение существует уже на старте, а не когда-то в будущем.",
        },
        {
          title: "🚀 Развитие Проекта",
          body: "Доверие, полученное на старте, конвертируется в рост интереса к проекту: расширяется аудитория, укрепляется инфраструктура, растёт цена токена на рынке.",
        },
        {
          title: "🏠 Покупка Недвижимости / Акций",
          body: "Заработанные проектом средства направляются на покупку недвижимости, акций, облигаций и драгоценных металлов. Каждая покупка оформляется официально и становится частью публичной истории проекта.",
        },
        {
          title: "💰 Доход из Реального Мира",
          body: "Эти активы начинают приносить реальный доход: аренда, дивиденды, рост стоимости. Это доход, который не зависит от настроения крипторынка.",
        },
        {
          title: "🔁 Откуп Токенов с Биржи",
          body: "Доход из реального мира возвращается в проект через обратный выкуп токена с биржи — сокращая предложение и усиливая стоимость. Затем цикл начинается заново, с каждым разом всё крепче.",
        },
      ],
      cycleNote:
        "🔄 Цикл повторяется снова и снова: чем больше доверия — тем больше роста, чем больше роста — тем больше реальных активов, чем больше активов — тем больше доверия.",
    },
    trust: {
      kicker: "🛡️ Trust architecture",
      title: "Почему золото, прозрачность и buyback-модель работают вместе",
      description:
        "Ниже заложены базовые блоки доверия и объяснения проекта, которые будут служить основой для первого публичного релиза.",
      panels: [
        {
          title: "🥇 Почему старт именно с золота",
          body: "Золото считывается как понятный актив доверия: его ценность исторически укоренена, а физическое наличие можно показать, задокументировать и проверять публично.",
        },
        {
          title: "🔍 Прозрачность и подтверждение",
          body: "Сайт сразу проектируется так, чтобы стрим, документы и описания модели работали как единая зона доверия, а не как разрозненные обещания.",
        },
        {
          title: "⚙️ Преимущества модели",
          body: "Комбинация live-резерва, реальных активов и buyback-механики создает более осязаемую связь между токеном, денежным потоком и долгосрочным развитием проекта.",
        },
      ],
    },
    manifesto: {
      kicker: "🌍 Наша позиция",
      statement:
        "Мы не создаём токен веры. Мы создаём токен, обеспеченный реальностью.",
      description:
        "Открытость, доказуемость и реальный круговорот активов — это не маркетинг. Это принцип, на котором построен весь проект.",
      tags: ["🔓 Открыто", "🧾 Доказуемо", "🔁 Реально работает"],
    },
    roadmap: {
      kicker: "🗺️ Roadmap",
      title: "Старт с золота. Дальше — расширение в активы реального мира",
      steps: [
        {
          title: "🥇 Phase 01 — Live reserve launch",
          body: "Запуск первой версии сайта, трансляции и базовой модели доверия вокруг физического обеспечения.",
        },
        {
          title: "🧾 Phase 02 — Public proof layer",
          body: "Добавление документов, публичных тестов и расширенной секции подтверждения обеспечения.",
        },
        {
          title: "🏢 Phase 03 — Real-world asset expansion",
          body: "Переход от одного демонстрационного актива к структуре, которая может включать несколько реальных источников стоимости: недвижимость, акции, облигации, драгоценные металлы.",
        },
        {
          title: "🔁 Phase 04 — Mature buyback economy",
          body: "Формирование устойчивого цикла дохода, при котором прибыль из реального мира поддерживает токен через регулярный откуп. По мере роста портфеля сообщество сможет видеть полный открытый список активов, обеспечивающих проект — а не абстрактное обещание.",
        },
      ],
    },
    faq: {
      kicker: "❓ FAQ",
      title: "Базовые ответы на ключевые вопросы",
      items: [
        {
          question: "🎯 Что именно делает этот проект отличным от обычного токена?",
          answer:
            "Главное отличие — стремление связать токен не только с рынком ожиданий, но и с физическим обеспечением, документами и доходом из реальных активов.",
        },
        {
          question: "📡 Зачем нужна круглосуточная трансляция?",
          answer:
            "Трансляция служит не украшением, а частью доверительной модели: пользователь должен видеть актив и понимать, что обеспечение не скрыто за закрытыми дверями.",
        },
        {
          question: "🔁 Почему на сайте делается акцент на buyback-модели?",
          answer:
            "Потому что обратный выкуп позволяет показать, как доход из реальной экономики может поддерживать проект в криптомире, а не существовать отдельно от него.",
        },
        {
          question: "💎 Какие активы планируется покупать в будущем?",
          answer:
            "Изначально — золото. Далее — недвижимость, акции, облигации и другие драгоценные металлы. Полный портфель активов будет открыто виден сообществу по мере роста проекта.",
        },
        {
          question: "🧭 Эта версия сайта уже финальная?",
          answer:
            "Нет. Первая версия создает архитектурную основу: сильный hero-блок, философию проекта, цикл роста и базовые блоки доверия. Дальше можно углублять proof-слой, legal-секции и продуктовые сценарии.",
        },
      ],
    },
  },

  en: {
    nav: {
      philosophy: "Philosophy",
      comparison: "Why Us",
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
      kicker: "🌉 Project philosophy",
      title: "Our Philosophy: A Bridge Between Two Worlds",
      description:
        "This section explains not just the product, but the logic of trust: why a token must be tied to physical reality, not just market sentiment.",
      blocks: [
        {
          title: "⚠️ The Trust Deficit in Crypto",
          paragraphs: [
            "Most modern cryptocurrencies are backed by only one thing — people's belief. Once the hype fades, a project crumbles because there is no real, tangible value behind it. Even major stablecoins ask you to trust them on their word, hiding their reserves behind closed doors.",
            "We built this project to fix the main deficit in the crypto market — the trust deficit. Our token is a direct portal between the blockchain and physical assets. We are not asking you to take our word for it. We commit to absolute transparency and show our backing here and now.",
          ],
        },
        {
          title: "🥇 A Transparent Start: Live Gold",
          paragraphs: [
            "The project starts with real physical backing. Our gold bar and all supporting documents are under 24/7 live surveillance. Document scans are open for review, and authenticity is confirmed through regular public tests.",
            "This brings the project's core principle to the website: not a promise for the future, but visible and verifiable backing right now.",
          ],
        },
        {
          title: "🏗️ Expanding into the Real World",
          paragraphs: [
            "As the project grows, earned funds are directed toward purchasing highly liquid assets in the physical world. All of them are legally registered under the project's official structure, with extracts from public registries published.",
            "This opens the path from a single asset to a full ecosystem tied to the real economy — not just to market sentiment.",
          ],
        },
        {
          title: "🌐 Why This Has Value: The Global RWA Trend",
          paragraphs: [
            "Real-world asset tokenization is one of the defining trends of the decade. Leading financial institutions project the RWA market growing to a multi-trillion scale, because investors seek not just liquidity but a real foundation of value.",
            "Instead of hidden reserves and blind trust, this project is built on the principle of 'Do not trust, verify': an open stream, verifiable documents, and an explainable buyback model.",
          ],
        },
      ],
    },
    comparison: {
      kicker: "🔍 Trust comparison",
      title: "Most tokens have nothing real behind them. We decided that had to change",
      description:
        "We openly state the difference between 'promised backing' and backing you can see and verify yourself — right now, not someday.",
      others: {
        title: "⚠️ How it usually works",
        items: [
          "Claims of backing exist, but public proof does not",
          "Reserves are 'somewhere', but can't be independently verified",
          "Value rests purely on belief and community sentiment",
          "Even major stablecoins simply ask you to trust their word",
        ],
      },
      us: {
        title: "✅ How AUREUM LINK works",
        items: [
          "🥇 A real gold bar shown openly from day one",
          "📡 24/7 live reserve stream — no breaks, no exceptions",
          "🧾 Documents and verifications available for review",
          "🔁 Real income from assets is used for token buybacks, not left as a promise",
        ],
      },
    },
    growthCycle: {
      kicker: "🔁 Closed-loop value model",
      title: "How It Works: A Closed-Loop Growth Cycle",
      description:
        "The diagram below shows how physical backing, project development, and real-world income form a cycle designed to strengthen the project's overall value.",
      steps: [
        {
          title: "🥇 Launch: Live Gold",
          body: "The project launches not with promises, but with a real physical asset — a gold bar, purchased and shown publicly. Anyone can watch the stream and confirm that backing exists from day one, not someday in the future.",
        },
        {
          title: "🚀 Project Development",
          body: "Trust earned at launch converts into growing interest in the project: the audience expands, infrastructure strengthens, and the token's market price grows.",
        },
        {
          title: "🏠 Acquiring Real Estate / Equities",
          body: "Funds earned by the project are directed toward purchasing real estate, equities, bonds, and precious metals. Every purchase is officially registered and becomes part of the project's public history.",
        },
        {
          title: "💰 Real-World Income",
          body: "These assets begin generating real income: rent, dividends, appreciation. This is income that doesn't depend on crypto market sentiment.",
        },
        {
          title: "🔁 Token Buyback from Exchange",
          body: "Real-world income flows back into the project through token buybacks on the exchange — shrinking supply and reinforcing value. Then the cycle begins again, each time a little stronger.",
        },
      ],
      cycleNote:
        "🔄 The cycle repeats again and again: more trust drives more growth, more growth funds more real assets, and more real assets build even more trust.",
    },
    trust: {
      kicker: "🛡️ Trust architecture",
      title: "Why Gold, Transparency, and the Buyback Model Work Together",
      description:
        "Below are the foundational trust and project explanation blocks that will serve as the basis for the first public release.",
      panels: [
        {
          title: "🥇 Why We Start with Gold",
          body: "Gold is universally recognized as a trust asset: its value is historically established, and its physical presence can be shown, documented, and publicly verified.",
        },
        {
          title: "🔍 Transparency and Verification",
          body: "The site is designed from the ground up so that the stream, documents, and model descriptions operate as a unified trust zone — not as scattered promises.",
        },
        {
          title: "⚙️ Advantages of the Model",
          body: "The combination of a live reserve, real-world assets, and a buyback mechanism creates a more tangible link between the token, cash flow, and the project's long-term development.",
        },
      ],
    },
    manifesto: {
      kicker: "🌍 Our position",
      statement: "We're not building a token of belief. We're building a token backed by reality.",
      description:
        "Openness, provability, and a real asset cycle aren't marketing. They're the principle this entire project is built on.",
      tags: ["🔓 Open", "🧾 Provable", "🔁 Actually working"],
    },
    roadmap: {
      kicker: "🗺️ Roadmap",
      title: "Starting with Gold. Then — Expanding into Real-World Assets",
      steps: [
        {
          title: "🥇 Phase 01 — Live reserve launch",
          body: "Launching the first version of the site, the live stream, and the foundational trust model around physical backing.",
        },
        {
          title: "🧾 Phase 02 — Public proof layer",
          body: "Adding documents, public tests, and an expanded section for confirming reserve backing.",
        },
        {
          title: "🏢 Phase 03 — Real-world asset expansion",
          body: "Moving from a single demonstration asset to a structure that can include multiple real-world sources of value: real estate, equities, bonds, precious metals.",
        },
        {
          title: "🔁 Phase 04 — Mature buyback economy",
          body: "Establishing a sustainable income cycle where real-world profits support the token through regular buybacks. As the portfolio grows, the community will be able to see the full, open list of assets backing the project — not an abstract promise.",
        },
      ],
    },
    faq: {
      kicker: "❓ FAQ",
      title: "Essential Answers to Key Questions",
      items: [
        {
          question: "🎯 What exactly sets this project apart from a regular token?",
          answer:
            "The key difference is the commitment to tying the token not just to market expectations, but also to physical backing, verifiable documents, and income from real-world assets.",
        },
        {
          question: "📡 Why is a 24/7 live stream necessary?",
          answer:
            "The stream is not decoration — it is part of the trust model: users need to see the asset and understand that the backing is not hidden behind closed doors.",
        },
        {
          question: "🔁 Why does the site place such emphasis on the buyback model?",
          answer:
            "Because the buyback mechanism demonstrates how real-economy income can support the project in the crypto world, rather than existing independently from it.",
        },
        {
          question: "💎 What assets are planned for the future?",
          answer:
            "Initially — gold. Then — real estate, equities, bonds, and other precious metals. The full asset portfolio will be openly visible to the community as the project grows.",
        },
        {
          question: "🧭 Is this version of the site already final?",
          answer:
            "No. The first version creates the architectural foundation: a strong hero block, the project's philosophy, the growth cycle, and foundational trust blocks. Future work can deepen the proof layer, legal sections, and product scenarios.",
        },
      ],
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
