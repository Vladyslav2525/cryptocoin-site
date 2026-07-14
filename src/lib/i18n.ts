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
      howTreasuryGrows: "Как растёт казна",
      treasury: "Казна",
      token: "Токеномика",
      manifesto: "Манифест",
      faq: "FAQ",
      contact: "Обратная связь",
      buyToken: "Купить токен",
    },
    social: {
      menuTitle: "Мы в сети",
      menuSubtitle: "Выбери удобный канал связи",
      twitter: "Twitter / X",
      telegram: "Telegram-канал",
      youtube: "Прямой эфир золота",
      reddit: "Наш Reddit",
      email: "Написать на почту",
    },
    disclaimer: {
      label: "Важно",
      short:
        "Токен не является инвестиционным продуктом, не даёт прав на активы казны и не обещает прибыли.",
    },
    hero: {
      kicker: "Публичная казна · Радикальная прозрачность · 24/7",
      description:
        "AUREUM LINK — проект с публичной, проверяемой казной реальных активов. Она начинается с одного золотого слитка, который вы видите в прямом эфире вместе с документами. Никаких обещаний — только то, что можно проверить.",
      phrases: [
        "Публичная казна реальных активов. Начинаем с золотого слитка в прямом эфире.",
        "Не верьте на слово — проверяйте. Каждый актив с документами, в открытую.",
        "Я один человек. Я строю прозрачную казну в прямом эфире.",
      ],
      liveLabel: "Прямой эфир казны",
      videoPlaceholderLabel: "YouTube placeholder",
      videoPlaceholderTitle:
        "Здесь будет прямая трансляция золотого слитка и документов казны",
      videoPlaceholderBody:
        "Контейнер уже подготовлен под крупную адаптивную трансляцию практически на всю полезную ширину первого экрана. После добавления YouTube embed URL сюда автоматически встанет живое видео.",
      ctaTreasury: "Открыть казну",
      ctaManifesto: "Читать манифест",
    },
    teasers: {
      treasury: {
        title: "🏦 Казна",
        body: "Список реальных активов с фото, серийными номерами и документами. Сейчас — один золотой слиток. Честно про то, чего ещё нет.",
        cta: "Открыть казну",
      },
      token: {
        title: "🪙 Токеномика",
        body: "Общая эмиссия, распределение и назначение токена. Платформа — Base (ERC-20). Прозрачно и без обещаний прибыли.",
        cta: "Смотреть токеномику",
      },
      manifesto: {
        title: "🌍 Манифест",
        body: "Кто я, что уже есть, чем отличаюсь от PAXG и XAUT и какой план. От первого лица, как человек, а не как биржа.",
        cta: "Читать манифест",
      },
    },
    philosophy: {
      kicker: "🌉 Философия проекта",
      title: "Радикальная прозрачность вместо обещаний",
      description:
        "Это объяснение логики доверия: почему проект показывает казну открыто и в реальном времени, а не просит верить на слово.",
      blocks: [
        {
          title: "⚠️ Дефицит доверия на крипторынке",
          paragraphs: [
            "Большинство токенов держатся только на вере людей. Когда хайп утихает, за проектом не остаётся ничего проверяемого. Даже крупные монеты просят верить им на слово и держат резервы за закрытыми дверями.",
            "AUREUM LINK устроен наоборот: публичная казна реальных активов, которую видно и можно проверить самому. Главный принцип — не верьте на слово, проверяйте.",
          ],
        },
        {
          title: "🥇 Прозрачный старт: живое золото",
          paragraphs: [
            "Проект начинается с одного реального золотого слитка. Слиток и все документы к нему находятся под круглосуточной трансляцией. Сканы открыты для изучения, серийный номер виден, персональные данные скрыты.",
            "Это не обещание на будущее, а то, что можно проверить прямо сейчас.",
          ],
        },
        {
          title: "🏗️ Расширение казны в реальном мире",
          paragraphs: [
            "По мере развития проект добавляет в казну новые реальные активы. Каждый оформляется официально, с публикацией документов и выписок.",
            "Так казна растёт публично — путь от одного слитка к открытому списку реальных активов.",
          ],
        },
        {
          title: "🌐 Почему это важно: тренд RWA",
          paragraphs: [
            "Токенизация реальных активов — заметный тренд последних лет. Но большинство проектов по-прежнему прячут активы за отчётами и кастодианами.",
            "AUREUM LINK делает ставку на другое: принцип Do not trust, verify — открытая трансляция, документы и публичный он-чейн кошелёк казны.",
          ],
        },
      ],
    },
    comparison: {
      kicker: "🔍 Сравнение прозрачности",
      title:
        "Большинство токенов невозможно проверить. Мы решили сделать наоборот",
      description:
        "Разница между «где-то есть резервы» и казной, которую видно и можно проверить самому — прямо сейчас, а не когда-нибудь потом.",
      others: {
        title: "⚠️ Как обычно на рынке",
        items: [
          "О резервах заявляют, а публичного доказательства нет",
          "Активы «где-то есть», но проверить их независимо нельзя",
          "Ценность держится только на вере и ожиданиях сообщества",
          "Даже крупные монеты просят просто поверить им на слово",
        ],
      },
      us: {
        title: "✅ Как устроено у AUREUM LINK",
        items: [
          "🥇 Золотой слиток показан открыто с первого дня проекта",
          "📡 Круглосуточная трансляция казны — без выходных и пауз",
          "🧾 Документы и серийные номера открыты для проверки",
          "🔓 Кошелёк казны и контракт — публичные и он-чейн",
        ],
      },
    },
    treasuryGrowth: {
      kicker: "🔁 Как растёт казна",
      title: "Как казна растёт — на глазах и с документами",
      description:
        "Схема показывает, как казна пополняется реальными активами. Это про прозрачность процесса, а не про цену токена.",
      steps: [
        {
          title: "🥇 Слиток в прямом эфире",
          body: "Всё начинается с одного реального золотого слитка. Он под круглосуточной трансляцией, документы открыты для проверки.",
        },
        {
          title: "💶 Средства проекта",
          body: "Проект аккумулирует средства от развития и публичной продажи токена — прозрачно и по частям.",
        },
        {
          title: "🏦 Покупка реального актива",
          body: "На эти средства покупается следующий реальный актив и официально оформляется на структуру проекта.",
        },
        {
          title: "🧾 Документы публикуются",
          body: "Фото, серийный номер, сертификат и документ покупки выкладываются в раздел «Казна». Персональные данные скрыты.",
        },
        {
          title: "📈 Казна растёт публично",
          body: "Список активов в казне становится длиннее — и каждый шаг можно проверить. Никаких обещаний прибыли держателям токена.",
        },
      ],
      cycleNote:
        "🔄 Цикл повторяется: больше прозрачности — больше доверия, больше доверия — больше реальных активов в открытой казне. Это про проверяемость казны, а не про цену токена.",
    },
    manifesto: {
      kicker: "🌍 Моя позиция",
      statement:
        "Я не строю токен веры. Я строю проект с публичной, проверяемой казной.",
      description:
        "Я один человек. У проекта есть казна. Каждый актив вы увидите с документами. Я строю это в прямом эфире.",
      tags: ["🔓 Открыто", "🧾 Проверяемо", "👤 Один человек"],
      cta: "Читать полный манифест",
    },
    trust: {
      kicker: "🛡️ Архитектура доверия",
      title: "Почему золото, прозрачность и открытый кошелёк работают вместе",
      description:
        "Базовые блоки доверия, на которых держится весь проект.",
      panels: [
        {
          title: "🥇 Почему старт именно с золота",
          body: "Золото считывается как понятный актив доверия: его ценность исторически укоренена, а физическое наличие можно показать, задокументировать и проверить публично.",
        },
        {
          title: "🔍 Прозрачность и подтверждение",
          body: "Стрим, документы и он-чейн кошелёк казны работают как единая зона доверия, а не как набор разрозненных обещаний.",
        },
        {
          title: "⚙️ Честность про недостатки",
          body: "Мы открыто говорим, чего ещё нет. Честность про недостатки укрепляет доверие сильнее, чем идеальная картинка.",
        },
      ],
    },
    roadmap: {
      kicker: "🗺️ Roadmap",
      title: "Старт с золота. Дальше — рост публичной казны",
      steps: [
        {
          title: "🥇 Phase 01 — Запуск и живой эфир",
          body: "Первая версия сайта, трансляция золотого слитка и базовая архитектура доверия.",
        },
        {
          title: "🧾 Phase 02 — Слой доказательств",
          body: "Публикация документов, серийных номеров и раздела «Казна» с проверяемыми записями.",
        },
        {
          title: "🏢 Phase 03 — Расширение казны",
          body: "Переход от одного актива к списку реальных активов: металлы, недвижимость, доли и другое — с документами.",
        },
        {
          title: "🔁 Phase 04 — Зрелая открытая казна",
          body: "Полный публичный список активов казны и он-чейн кошелёк. Сообщество видит каждый актив, а не абстрактное обещание.",
        },
      ],
    },
    faq: {
      kicker: "❓ FAQ",
      title: "Базовые ответы на ключевые вопросы",
      items: [
        {
          question: "🎯 Чем этот проект отличается от обычного токена?",
          answer:
            "Тем, что за ним стоит публичная, проверяемая казна реальных активов, которую видно в прямом эфире, — а не обещания и ожидания.",
        },
        {
          question: "📡 Зачем нужна круглосуточная трансляция?",
          answer:
            "Чтобы вы видели актив своими глазами. Казна не спрятана за закрытыми дверями — её можно проверить в любой момент.",
        },
        {
          question: "🪙 Что даёт токен?",
          answer:
            "Токен — способ участвовать в проекте и поддерживать его. Он не является инвестиционным продуктом, не даёт прав на активы казны и не обещает прибыли.",
        },
        {
          question: "💎 Какие активы появятся в казне дальше?",
          answer:
            "Сначала золото. Далее — другие реальные активы с документами. Полный список будет открыто виден по мере роста казны.",
        },
        {
          question: "🧭 Эта версия сайта уже финальная?",
          answer:
            "Нет. Это основа: hero, философия, раздел «Казна», токеномика и манифест. Дальше слой доказательств будет углубляться.",
        },
      ],
    },
    treasuryPage: {
      kicker: "🏦 Дашборд казны",
      title: "Казна проекта: то, что можно проверить",
      description:
        "Публичный список реальных активов проекта. Каждый актив — с фото, серийным номером и документами. Персональные данные в документах скрыты, серийный номер и суть оставлены.",
      liveLabel: "Обновляется по мере роста казны",
      status: {
        now: {
          title: "✅ Что есть сейчас",
          items: [
            "Один реальный золотой слиток",
            "Круглосуточная трансляция слитка",
            "Сканы документов с серийным номером",
          ],
        },
        notYet: {
          title: "🚧 Чего ещё нет",
          items: [
            "Он-чейн кошелёк казны пока не опубликован",
            "Независимого аудита пока не проводилось",
            "В казне пока только один актив",
          ],
        },
        next: {
          title: "🎯 Что дальше",
          items: [
            "Публикация адреса кошелька казны",
            "Второй реальный актив с документами",
            "Регулярные публичные проверки слитка",
          ],
        },
      },
      assetsTitle: "Активы в казне",
      fields: {
        serial: "Серийный номер",
        certificate: "Сертификат",
        purchaseDoc: "Документ покупки",
        purchaseDate: "Дата покупки",
        purchasePrice: "Цена покупки",
        currentValue: "Текущая стоимость",
        currentValueNote: "справочно, по рыночной цене золота",
        status: "Статус",
      },
      statusValues: {
        owned: "В казне · под трансляцией",
        pending: "Оформляется",
      },
      redactedNote: "Персональные данные скрыты · серийный номер и суть видны",
      photoPlaceholder: "Фото появится здесь",
      docPlaceholder: "Документ появится здесь",
      backHome: "На главную",
    },
    tokenPage: {
      kicker: "🪙 Токеномика",
      title: "Общая эмиссия, распределение и назначение токена",
      description:
        "Токеномика простая и открытая. Ниже — общая эмиссия, как распределяются токены и для чего токен нужен. Проверяйте каждый пункт: обещаний прибыли здесь нет.",
      supplyLabel: "Общая эмиссия",
      supplyValue: "100 000 000 AUR",
      platformLabel: "Платформа",
      platformValue: "Base · ERC-20",
      standardNote:
        "Base — сеть второго уровня Ethereum. Контракт и кошелёк казны можно проверить в обозревателе Basescan.",
      allocationTitle: "Распределение",
      allocation: [
        {
          label: "Резерв проекта",
          percent: 40,
          note: "Финансирование покупок реальных активов в казну. Публичный кошелёк.",
        },
        {
          label: "Публичная продажа",
          percent: 30,
          note: "Продаётся траншами. Средства идут в казну и на операционные задачи.",
        },
        {
          label: "Ликвидность",
          percent: 12,
          note: "Ликвидность на бирже. Блокируется, чтобы токеном можно было свободно торговать.",
        },
        {
          label: "Основатель",
          percent: 10,
          note: "Намеренно скромная доля. Лок и вестинг 4 года, клифф 1 год — сигнал честности.",
        },
        {
          label: "Сообщество / экосистема",
          percent: 8,
          note: "Контрибьюторы и небольшие airdrop за участие.",
        },
      ],
      purposeTitle: "Для чего нужен токен",
      purpose: [
        "Способ участвовать в проекте и поддерживать его развитие",
        "Единица, вокруг которой строится публичная история казны",
        "Инструмент вовлечения сообщества в радикальную прозрачность",
      ],
      purposeIsNotTitle: "Чем токен НЕ является",
      purposeIsNot: [
        "Не инвестиционный продукт",
        "Не доля и не право на активы казны",
        "Не обещание прибыли или дохода",
      ],
      contractLabel: "Адрес контракта",
      contractPlaceholder: "Будет опубликован после запуска в сети Base",
    },
    manifestoPage: {
      kicker: "🌍 Манифест",
      title: "Один человек, одна казна, полная прозрачность",
      lead: "Я один человек. У проекта есть казна. Каждый актив вы увидите с документами. Я строю это в прямом эфире.",
      sections: [
        {
          title: "Проблема",
          paragraphs: [
            "Крипторынок устал от обещаний. Токены появляются и исчезают, а за большинством из них нет ничего, что можно проверить. Даже крупные проекты просят верить им на слово и держат активы за закрытыми дверями.",
            "Люди хотят не очередной красивый лендинг, а возможность своими глазами увидеть, что стоит за проектом.",
          ],
        },
        {
          title: "Что я делаю",
          paragraphs: [
            "Я строю AUREUM LINK — проект с публичной, проверяемой казной реальных активов. Казна начинается с одного золотого слитка, который вы видите в прямом эфире вместе с документами.",
            "Мой принцип простой: не верьте на слово, проверяйте. Я показываю то, что есть, и честно говорю о том, чего ещё нет.",
          ],
        },
        {
          title: "Что уже есть",
          paragraphs: [
            "Реальный золотой слиток под круглосуточной трансляцией. Сканы документов с видимым серийным номером и скрытыми персональными данными. Сайт с разделом «Казна», токеномикой и этим манифестом.",
            "Дальше — публичный он-чейн кошелёк казны и контракт токена в сети Base.",
          ],
        },
        {
          title: "Чем я отличаюсь от PAXG и XAUT",
          paragraphs: [
            "PAXG (Paxos Gold) и XAUT (Tether Gold) — это токены с привязкой 1:1 к золоту, которое хранят централизованные кастодианы. Держателю нужно доверять эмитенту и аудитору, а погашение идёт через KYC и минимальные суммы.",
            "У меня иначе: независимый токен без привязки и без права требования на золото, а вместо закрытых кастодианов — радикальная публичная прозрачность казны. Я не обещаю, что токен равен золоту или приносит прибыль. Я обещаю, что казну можно проверить.",
          ],
        },
      ],
      pullquote: "Не верьте на слово. Проверяйте.",
      vsTitle: "Слабые места конкурентов и чем мы лучше",
      them: {
        title: "⚠️ PAXG / XAUT и подобные",
        items: [
          "Золото у централизованных кастодианов — нужно доверять хранителю",
          "Прозрачность = периодические аттестации выбранного эмитентом аудитора",
          "Погашение через KYC и минимальные суммы",
          "Это регулируемое право требования на золото, а не открытый проект",
        ],
      },
      us: {
        title: "✅ AUREUM LINK",
        items: [
          "Актив показан в прямом эфире 24/7 — видно, а не «по отчёту»",
          "Прозрачность = живой стрим, документы и он-чейн кошелёк казны",
          "Ничего не нужно погашать: проект открыт, а не является правом требования",
          "Один автор в открытую, честно про то, чего ещё нет",
        ],
      },
      planTitle: "План",
      plan: [
        {
          title: "Сейчас",
          body: "Слиток в эфире, сайт с казной, токеномикой и манифестом.",
        },
        {
          title: "Дальше",
          body: "Публикация кошелька казны и контракта токена в сети Base.",
        },
        {
          title: "Потом",
          body: "Второй реальный актив с документами и регулярные публичные проверки.",
        },
      ],
      socialTitle: "Короткая версия для соцсетей",
      socialHint: "Можно скопировать и опубликовать",
      socialText:
        "Я один человек. Я строю AUREUM LINK — проект с публичной, проверяемой казной реальных активов. Она начинается с золотого слитка в прямом эфире. Не верьте на слово — проверяйте. Токен не инвестиция и не обещает прибыли. #AUREUMLINK #RWA #прозрачность",
      copy: "Скопировать текст",
      copied: "Скопировано",
      backHome: "На главную",
    },
    legalPage: {
      kicker: "⚖️ Дисклеймер",
      title: "Что такое токен AUREUM LINK — и чем он не является",
      intro:
        "Этот раздел объясняет статус токена простыми словами. Прочитайте его перед любым взаимодействием с проектом.",
      isNotTitle: "Токен НЕ является",
      isNot: [
        "инвестиционным продуктом, ценной бумагой или финансовым инструментом",
        "долей в проекте и правом на активы казны",
        "обещанием прибыли, дохода или роста стоимости",
        "требованием на золото или другой актив казны",
      ],
      isTitle: "Проект является",
      is: [
        "публичной, проверяемой казной реальных активов",
        "открытой историей: фото, серийные номера и документы активов",
        "личным проектом одного человека, который строит его в прямом эфире",
      ],
      notAdvice:
        "Материалы сайта носят информационный характер и не являются инвестиционной, юридической или налоговой консультацией. Взаимодействие с криптоактивами связано с рисками; принимайте решения самостоятельно.",
      backHome: "На главную",
    },
  },

  en: {
    nav: {
      philosophy: "Philosophy",
      howTreasuryGrows: "How the treasury grows",
      treasury: "Treasury",
      token: "Tokenomics",
      manifesto: "Manifesto",
      faq: "FAQ",
      contact: "Contact",
      buyToken: "Buy Token",
    },
    social: {
      menuTitle: "Find Us Online",
      menuSubtitle: "Pick your preferred channel",
      twitter: "Twitter / X",
      telegram: "Telegram Channel",
      youtube: "Live Gold Stream",
      reddit: "Our Reddit",
      email: "Email Us",
    },
    disclaimer: {
      label: "Important",
      short:
        "This token is not an investment product, grants no rights to the treasury's assets, and promises no profit.",
    },
    hero: {
      kicker: "Public treasury · Radical transparency · 24/7",
      description:
        "AUREUM LINK is a project with a public, verifiable treasury of real assets. It starts with a single gold bar you can watch on a live stream, together with its documents. No promises — only what you can verify.",
      phrases: [
        "A public treasury of real assets. Starting with a gold bar on a live stream.",
        "Don't take our word for it — verify. Every asset with documents, in the open.",
        "I'm one person. I'm building a transparent treasury on a live stream.",
      ],
      liveLabel: "Live treasury stream",
      videoPlaceholderLabel: "YouTube placeholder",
      videoPlaceholderTitle:
        "A live stream of the gold bar and the treasury's documents will be placed here",
      videoPlaceholderBody:
        "The container is already prepared for a large, responsive stream covering nearly the full useful width of the first screen. Once a YouTube embed URL is added, the live video will appear here automatically.",
      ctaTreasury: "Open the treasury",
      ctaManifesto: "Read the manifesto",
    },
    teasers: {
      treasury: {
        title: "🏦 Treasury",
        body: "A list of real assets with photos, serial numbers, and documents. Right now — a single gold bar. Honest about what isn't there yet.",
        cta: "Open the treasury",
      },
      token: {
        title: "🪙 Tokenomics",
        body: "Total supply, distribution, and the token's purpose. Platform — Base (ERC-20). Transparent, with no promise of profit.",
        cta: "See the tokenomics",
      },
      manifesto: {
        title: "🌍 Manifesto",
        body: "Who I am, what already exists, how I differ from PAXG and XAUT, and the plan. First person, as a human — not as an exchange.",
        cta: "Read the manifesto",
      },
    },
    philosophy: {
      kicker: "🌉 Project philosophy",
      title: "Radical transparency instead of promises",
      description:
        "This explains the logic of trust: why the project shows its treasury openly and in real time, instead of asking you to take its word for it.",
      blocks: [
        {
          title: "⚠️ The Trust Deficit in Crypto",
          paragraphs: [
            "Most tokens rest on one thing — people's belief. Once the hype fades, nothing verifiable is left behind them. Even major coins ask you to take their word and keep their reserves behind closed doors.",
            "AUREUM LINK is built the other way around: a public treasury of real assets that you can see and verify yourself. The core principle is simple — don't take our word for it, verify.",
          ],
        },
        {
          title: "🥇 A Transparent Start: Live Gold",
          paragraphs: [
            "The project starts with a single real gold bar. The bar and all its documents are under a 24/7 live stream. Scans are open for review, the serial number is visible, and personal data is hidden.",
            "This is not a promise for the future, but something you can verify right now.",
          ],
        },
        {
          title: "🏗️ Growing the Treasury in the Real World",
          paragraphs: [
            "As the project develops, it adds new real assets to the treasury. Each one is officially registered, with documents and extracts published.",
            "That is how the treasury grows in public — a path from a single bar to an open list of real assets.",
          ],
        },
        {
          title: "🌐 Why This Matters: The RWA Trend",
          paragraphs: [
            "Real-world asset tokenization is a notable trend of recent years. But most projects still hide their assets behind reports and custodians.",
            "AUREUM LINK bets on something else: the 'Do not trust, verify' principle — an open live stream, documents, and a public on-chain treasury wallet.",
          ],
        },
      ],
    },
    comparison: {
      kicker: "🔍 Transparency comparison",
      title: "Most tokens can't be verified. We decided to do the opposite",
      description:
        "The difference between 'reserves are somewhere' and a treasury you can see and verify yourself — right now, not someday.",
      others: {
        title: "⚠️ How it usually works",
        items: [
          "Reserves are claimed, but public proof does not exist",
          "Assets are 'somewhere', but can't be independently verified",
          "Value rests purely on belief and community expectations",
          "Even major coins simply ask you to take their word",
        ],
      },
      us: {
        title: "✅ How AUREUM LINK works",
        items: [
          "🥇 A gold bar shown openly from day one of the project",
          "📡 A 24/7 treasury stream — no weekends, no pauses",
          "🧾 Documents and serial numbers open for verification",
          "🔓 The treasury wallet and contract — public and on-chain",
        ],
      },
    },
    treasuryGrowth: {
      kicker: "🔁 How the treasury grows",
      title: "How the treasury grows — in the open, with documents",
      description:
        "The diagram shows how the treasury is topped up with real assets. It's about the transparency of the process, not about the token's price.",
      steps: [
        {
          title: "🥇 A Bar on a Live Stream",
          body: "It all starts with a single real gold bar. It's under a 24/7 live stream, with documents open for review.",
        },
        {
          title: "💶 Project Funds",
          body: "The project accumulates funds from development and the public token sale — transparently and in tranches.",
        },
        {
          title: "🏦 Buying a Real Asset",
          body: "Those funds are used to buy the next real asset, officially registered under the project's structure.",
        },
        {
          title: "🧾 Documents Get Published",
          body: "Photos, serial number, certificate, and purchase document go into the Treasury section. Personal data is hidden.",
        },
        {
          title: "📈 The Treasury Grows in Public",
          body: "The list of assets in the treasury gets longer — and every step can be verified. No promise of profit to token holders.",
        },
      ],
      cycleNote:
        "🔄 The cycle repeats: more transparency builds more trust, and more trust means more real assets in an open treasury. It's about the treasury's verifiability, not the token's price.",
    },
    manifesto: {
      kicker: "🌍 My position",
      statement:
        "I'm not building a token of belief. I'm building a project with a public, verifiable treasury.",
      description:
        "I'm one person. The project has a treasury. You'll see every asset with documents. I'm building this on a live stream.",
      tags: ["🔓 Open", "🧾 Verifiable", "👤 One person"],
      cta: "Read the full manifesto",
    },
    trust: {
      kicker: "🛡️ Trust architecture",
      title: "Why gold, transparency, and an open wallet work together",
      description: "The foundational trust blocks the whole project stands on.",
      panels: [
        {
          title: "🥇 Why We Start with Gold",
          body: "Gold reads as a clear trust asset: its value is historically established, and its physical presence can be shown, documented, and publicly verified.",
        },
        {
          title: "🔍 Transparency and Verification",
          body: "The stream, documents, and on-chain treasury wallet operate as a single trust zone — not as a set of scattered promises.",
        },
        {
          title: "⚙️ Honesty About Shortcomings",
          body: "We openly say what isn't there yet. Honesty about shortcomings builds more trust than a perfect picture.",
        },
      ],
    },
    roadmap: {
      kicker: "🗺️ Roadmap",
      title: "Start with gold. Then — grow the public treasury",
      steps: [
        {
          title: "🥇 Phase 01 — Launch & Live Stream",
          body: "The first version of the site, the gold bar stream, and the foundational trust architecture.",
        },
        {
          title: "🧾 Phase 02 — Proof Layer",
          body: "Publishing documents, serial numbers, and the Treasury section with verifiable records.",
        },
        {
          title: "🏢 Phase 03 — Treasury Expansion",
          body: "Moving from a single asset to a list of real assets: metals, real estate, shares, and more — with documents.",
        },
        {
          title: "🔁 Phase 04 — A Mature Open Treasury",
          body: "A full public list of treasury assets and an on-chain wallet. The community sees every asset, not an abstract promise.",
        },
      ],
    },
    faq: {
      kicker: "❓ FAQ",
      title: "Essential Answers to Key Questions",
      items: [
        {
          question: "🎯 What sets this project apart from a regular token?",
          answer:
            "There is a public, verifiable treasury of real assets behind it, visible on a live stream — instead of promises and expectations.",
        },
        {
          question: "📡 Why is a 24/7 live stream necessary?",
          answer:
            "So you can see the asset with your own eyes. The treasury isn't hidden behind closed doors — it can be verified at any moment.",
        },
        {
          question: "🪙 What does the token do?",
          answer:
            "The token is a way to participate in and support the project. It is not an investment product, grants no rights to the treasury's assets, and promises no profit.",
        },
        {
          question: "💎 What assets will appear in the treasury next?",
          answer:
            "Gold first. Then other real assets with documents. The full list will be openly visible as the treasury grows.",
        },
        {
          question: "🧭 Is this version of the site final?",
          answer:
            "No. It's the foundation: hero, philosophy, the Treasury section, tokenomics, and the manifesto. The proof layer will keep getting deeper.",
        },
      ],
    },
    treasuryPage: {
      kicker: "🏦 Treasury dashboard",
      title: "The project's treasury: what you can verify",
      description:
        "A public list of the project's real assets. Each asset comes with a photo, serial number, and documents. Personal data in the documents is hidden; the serial number and the essentials are kept.",
      liveLabel: "Updated as the treasury grows",
      status: {
        now: {
          title: "✅ What exists now",
          items: [
            "One real gold bar",
            "A 24/7 stream of the bar",
            "Document scans with the serial number",
          ],
        },
        notYet: {
          title: "🚧 What isn't there yet",
          items: [
            "The on-chain treasury wallet isn't published yet",
            "No independent audit has been done yet",
            "The treasury holds only one asset so far",
          ],
        },
        next: {
          title: "🎯 What's next",
          items: [
            "Publishing the treasury wallet address",
            "A second real asset with documents",
            "Regular public checks of the bar",
          ],
        },
      },
      assetsTitle: "Assets in the treasury",
      fields: {
        serial: "Serial number",
        certificate: "Certificate",
        purchaseDoc: "Purchase document",
        purchaseDate: "Purchase date",
        purchasePrice: "Purchase price",
        currentValue: "Current value",
        currentValueNote: "for reference, at the market price of gold",
        status: "Status",
      },
      statusValues: {
        owned: "In treasury · on stream",
        pending: "Being registered",
      },
      redactedNote: "Personal data hidden · serial number and essentials visible",
      photoPlaceholder: "A photo will appear here",
      docPlaceholder: "A document will appear here",
      backHome: "Back to home",
    },
    tokenPage: {
      kicker: "🪙 Tokenomics",
      title: "Total supply, distribution, and the token's purpose",
      description:
        "The tokenomics are simple and open. Below are the total supply, how the tokens are distributed, and what the token is for. Verify every point: there are no promises of profit here.",
      supplyLabel: "Total supply",
      supplyValue: "100,000,000 AUR",
      platformLabel: "Platform",
      platformValue: "Base · ERC-20",
      standardNote:
        "Base is an Ethereum Layer 2 network. The contract and the treasury wallet can be verified on the Basescan explorer.",
      allocationTitle: "Distribution",
      allocation: [
        {
          label: "Project reserve",
          percent: 40,
          note: "Funds purchases of real assets for the treasury. A public wallet.",
        },
        {
          label: "Public sale",
          percent: 30,
          note: "Sold in tranches. Proceeds go to the treasury and operations.",
        },
        {
          label: "Liquidity",
          percent: 12,
          note: "Exchange pool. Locked to enable trading of the token.",
        },
        {
          label: "Founder",
          percent: 10,
          note: "A deliberately modest share. Locked with a 4-year vest and a 1-year cliff — a signal of honesty.",
        },
        {
          label: "Community / ecosystem",
          percent: 8,
          note: "Contributors and small airdrops for participation.",
        },
      ],
      purposeTitle: "What the token is for",
      purpose: [
        "A way to participate in and support the project's development",
        "The unit the public history of the treasury is built around",
        "A tool for involving the community in radical transparency",
      ],
      purposeIsNotTitle: "What the token is NOT",
      purposeIsNot: [
        "Not an investment product",
        "Not a share or a right to the treasury's assets",
        "Not a promise of profit or income",
      ],
      contractLabel: "Contract address",
      contractPlaceholder: "Will be published after launch on the Base network",
    },
    manifestoPage: {
      kicker: "🌍 Manifesto",
      title: "One person, one treasury, full transparency",
      lead: "I'm one person. The project has a treasury. You'll see every asset with documents. I'm building this on a live stream.",
      sections: [
        {
          title: "The problem",
          paragraphs: [
            "Crypto is tired of promises. Tokens appear and vanish, and behind most of them there's nothing you can verify. Even big projects ask you to take their word and keep their assets behind closed doors.",
            "People don't want another pretty landing page — they want to see, with their own eyes, what stands behind a project.",
          ],
        },
        {
          title: "What I'm doing",
          paragraphs: [
            "I'm building AUREUM LINK — a project with a public, verifiable treasury of real assets. The treasury starts with a single gold bar you can watch on a live stream together with its documents.",
            "My principle is simple: don't take my word for it, verify. I show what exists, and I'm honest about what isn't there yet.",
          ],
        },
        {
          title: "What already exists",
          paragraphs: [
            "A real gold bar under a 24/7 live stream. Document scans with a visible serial number and hidden personal data. A site with a Treasury section, tokenomics, and this manifesto.",
            "Next — a public on-chain treasury wallet and the token contract on the Base network.",
          ],
        },
        {
          title: "How I differ from PAXG and XAUT",
          paragraphs: [
            "PAXG (Paxos Gold) and XAUT (Tether Gold) are tokens pegged 1:1 to gold held by centralized custodians. The holder must trust the issuer and the auditor, and redemption goes through KYC and minimum amounts.",
            "Mine is different: an independent token with no peg and no claim on gold, and instead of closed custodians — radical public transparency of the treasury. I don't promise the token equals gold or generates profit. I promise the treasury can be verified.",
          ],
        },
      ],
      pullquote: "Don't take my word for it. Verify.",
      vsTitle: "Competitors' weak spots and how we're better",
      them: {
        title: "⚠️ PAXG / XAUT and similar",
        items: [
          "Gold sits with centralized custodians — you must trust the keeper",
          "Transparency = periodic attestations by an issuer-chosen auditor",
          "Redemption through KYC and minimum amounts",
          "It's a regulated claim on gold, not an open project",
        ],
      },
      us: {
        title: "✅ AUREUM LINK",
        items: [
          "The asset is shown live 24/7 — seen, not 'per report'",
          "Transparency = a live stream, documents, and an on-chain treasury wallet",
          "Nothing to redeem: the project is open, not a claim",
          "One author in the open, honest about what isn't there yet",
        ],
      },
      planTitle: "The plan",
      plan: [
        {
          title: "Now",
          body: "The bar on stream; a site with the treasury, tokenomics, and manifesto.",
        },
        {
          title: "Next",
          body: "Publishing the treasury wallet and the token contract on the Base network.",
        },
        {
          title: "Later",
          body: "A second real asset with documents and regular public checks.",
        },
      ],
      socialTitle: "Short version for social media",
      socialHint: "Ready to copy and post",
      socialText:
        "I'm one person. I'm building AUREUM LINK — a project with a public, verifiable treasury of real assets. It starts with a gold bar on a live stream. Don't take my word for it — verify. The token is not an investment and promises no profit. #AUREUMLINK #RWA #transparency",
      copy: "Copy text",
      copied: "Copied",
      backHome: "Back to home",
    },
    legalPage: {
      kicker: "⚖️ Disclaimer",
      title: "What the AUREUM LINK token is — and what it is not",
      intro:
        "This section explains the token's status in plain words. Please read it before any interaction with the project.",
      isNotTitle: "The token is NOT",
      isNot: [
        "an investment product, a security, or a financial instrument",
        "a share in the project or a right to the treasury's assets",
        "a promise of profit, income, or price growth",
        "a claim on gold or any other treasury asset",
      ],
      isTitle: "The project IS",
      is: [
        "a public, verifiable treasury of real assets",
        "an open history: photos, serial numbers, and documents of the assets",
        "a personal project by one person, built on a live stream",
      ],
      notAdvice:
        "The materials on this site are informational and do not constitute investment, legal, or tax advice. Interacting with crypto assets involves risk; make your own decisions.",
      backHome: "Back to home",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
