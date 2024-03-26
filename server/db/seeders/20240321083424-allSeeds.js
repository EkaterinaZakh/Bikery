const { hashSync } = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'admin',
          email: 'admin@admin',
          password: hashSync('1', 10),
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Куртки',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шлемы',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Обувь',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Fests',
      [
        {
          name: 'Горячий асфальт',
          desc: 'В 13-ый раз байк-клуб «AQUILONE MC» проведет международный мотофестиваль «Горячий асфальт».',
          image: 'https://i.postimg.cc/P5LNB2dC/fest-photo.png',
          date: new Date(),
          place: 'Тверская область',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Рок над водой',
          desc: 'Друзья! Билеты поступили в продажу по самой низкой цене! Торопись, не скупись!! Анонс первого артиста уже сегодня!!',
          image: 'https://i.postimg.cc/P5LNB2dC/fest-photo.png',
          date: new Date(),
          place: 'Волгоград',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Остров свободы',
          desc: 'Байк рок фестиваль, который проходит уже не первый год, на территории базы «Феникс», города Гулькевичи.',
          image: 'https://i.postimg.cc/P5LNB2dC/fest-photo.png',
          date: new Date(),
          place: 'Гулькевичи',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Races',
      [
        {
          name: 'Южный Берег Крыма–Сухуми',
          desc: 'Пожалуй, одна из самых красивых транспортных магистралей в России.',
          date: new Date(),
          length: '700',
          image: 'https://i.postimg.cc/P5LNB2dC/fest-photo.png',
          rateCounter: 0,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Амальфитанское побережье–Италия',
          desc: 'Если продолжать тему, то с Черным морем может поспорить Средиземное.',
          date: new Date(),
          length: '60',
          image: 'https://i.postimg.cc/P5LNB2dC/fest-photo.png',
          rateCounter: 0,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pacific Coast Highway – Калифорния',
          desc: 'Если 60 км для вас маловато, а дорога слишком узка, то есть еще один вариант.',
          date: new Date(),
          length: '60',
          image: 'https://i.postimg.cc/P5LNB2dC/fest-photo.png',
          rateCounter: 0,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Куртка мужская Vintage Space',
          desc: 'Настоящая брутальная весчь! Куртка байкера, которая навсегда покорит Ваше сердце - новинка 2023 года - коллекция кожаных курток SPACE.',
          price: 29700,
          image:
            'https://hawk-moto.com/image/cache/catalog/%20%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B8%202023/%20%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F%20VINTAGE%20SPACE/1-500x400.jpg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Куртка кожаная Mars',
          desc: 'Куртка прекрасно подойдёт для мотоциклистов, предпочитающих и дорожные мотоциклы, и чопперы и туристические байки.',
          price: 31900,
          image:
            'https://hawk-moto.com/image/cache/catalog/%20HM/%20%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC/1-500x400.jpg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Куртка мужcкая джинсовая Texas',
          desc: 'Почему байкеры выбирают мотоджинсу для езды по городу? Джинса "дышит". Джинсовая ткань на основе хлопка прекрасно вентилируется и не даёт потеть в жару и мёрзнуть в холоде.',
          price: 13860,
          image:
            'https://hawk-moto.com/image/cache/catalog/%20%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9/2-500x400.jpg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mотокуртка Panther',
          desc: 'Куртка «Panther» (Пантера) – короткая куртка для городских мотоциклистов. Её тёмный дизайн с ярко-зелёными вставками – как голова пантеры, готовой сделать стремительный прыжок хищника. ',
          price: 15840,
          image:
            'https://hawk-moto.com/image/cache/catalog/%20HM/%2009082021/%20%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B0%20/%20130082021/%20%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B0%20%20/%2014082021/16082021%20%D0%B3%D1%8D%D0%BB%D1%8D%D0%BA%D1%81%D0%B8/16082021%20%D0%B0%D0%BC%D0%B8%D0%B3%D0%BE%20/%2016082021/2-500x400.jpg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Куртка мужская Cavaler',
          desc: 'Эту мотокуртку можно носить как для "покатушек", так и повседневно. Это как раз тот самый вариант, который будет привлекать внимание не духом "байкерства". Брутальность зашкаливает. Девушки охают. Мужики завидуют. Вы - красавчик!',
          price: 30800,
          image:
            'https://hawk-moto.com/image/cache/catalog/%20%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B8%202023/%20%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F%20CAVALER/1-500x400.jpg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Куртка мужская Black Phantom',
          desc: 'Куртка прекрасно подойдёт для мотоциклистов, предпочитающих и дорожные мотоциклы, и чопперы и туристические байки.',
          price: 29040,
          image:
            'https://hawk-moto.com/image/cache/catalog/%20%20%D0%9D%D0%9C/_DSC3065-Edit-500x400.jpg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шлем IXS Jet Helmet iXS880',
          desc: 'Jet шлем из поликарбоната,замок с трещоткой. высококачественная внутренняя подкладка, устойчивое к царапинам затемненное стекло, новая технология матовой окраски-NMT, подкладка: 100% полиэстер',
          price: 8990,
          image:
            'https://flipup.ru/upload/resize_cache/iblock/54d/aggzema2nst7xwsherozxvatwu2vkuq5/460_460_1/jet_helmet_ixs_880_1_0_x10060_f61a5_middle.jpg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шлем IXS Jet Helmet IXS990',
          desc: 'Замок с трещоткой, высококачественная внутренняя подкладка, устойчивое к царапинам затемненное стекло, новая технология матовой окраски-NMT, подкладка: 100% полиэстер',
          price: 11980,
          image: 'https://flipup.ru/upload/resize_cache/iblock/971/460_460_1/product_4780.jpg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шлем HX 77 JS',
          desc: 'Главные преимущества открытого шлема - простота в использовании и комфорт. Открытый шлем для мотоцикла из поликарбоната идеально подходит любителям неспешной езды. Обладает наилучшими характеристиками вентиляции, что очень актуально в жару.',
          price: 13900,
          image: 'https://flipup.ru/upload/iblock/870/X10038_M93_sun.jpg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шлем HX 77 TSX',
          desc: 'Главные преимущества открытого шлема - простота в использовании и комфорт. Открытый шлем для мотоцикла из поликарбоната идеально подходит любителям неспешной езды. Обладает наилучшими характеристиками вентиляции, что очень актуально в жару.',
          price: 13900,
          image: 'https://flipup.ru/upload/iblock/870/X10038_M93_sun.jpg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Открытый шлем HOC 77',
          desc: 'Встроенный солнцезащитный козырек, микрозакрытие (Click застежка), новая технология матового лака-NMT, устойчивое к механическим повреждениям.',
          price: 9800,
          image:
            'https://flipup.ru/upload/resize_cache/iblock/448/mstes0a2cbamdifgl0kwyp6wahuxo1s9/460_460_1/795219787_jet_shlem_otkrytyj_ixs_77_2_0_x10054_m31_980x800.jpeg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Мотошлем открытый iXS 880',
          desc: 'Встроенный внутренний тонированный солнцезащитный козырек, съемная, моющаяся внутренняя подкладка, застежка с микротрещоткой.',
          price: 11980,
          image:
            'https://flipup.ru/upload/resize_cache/iblock/80f/7gpi34ka7240tz5ta5grwm210luh4rji/460_460_1/x10063319_980x800.jpg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ботинки Dragonfly QUAD 2.0',
          desc: 'Новинка от Dragonfly – черные квадро ботинки QUAD 2.0. Обувь разработана специально для передвижения по бездорожью на различных видах техники летом и в демисезон – квадроциклах, вездеходах.',
          price: 10500,
          image:
            'https://flipup.ru/upload/resize_cache/iblock/7a3/g6quejq5p3ypzy6b8gz5d07upk3tm0e8/460_460_1/xi5885bb55wi4uzud5g66t8k7m2ryrfq.png',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ботинки Forma Pilot',
          desc: 'Эластичная и устойчивая к истиранию синтетическая кожа, персонализированная подошва двойной плотности MX PRO из резиновой смеси, склеенная подошва MX-B (разработана при участии компании Goodyear).',
          price: 31660,
          image:
            'https://flipup.ru/upload/resize_cache/iblock/7dc/u4ghpbfs8skzkcftxi1lvdmv426yedg9/460_460_1/605dc038d8148.970.png',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Мотоботы IXS Sport Boots RS-100',
          desc: 'Гоночные ботинки из стойкой к истиранию матовой коровьей кожи, дышащая сетчатая текстильная подкладка, застежка-молния на внутренней стороне, крышка пятки TPU со встроенным вентиляционным отверстием.',
          price: 16500,
          image: 'https://flipup.ru/upload/iblock/ccd/ne_ukazano_e05ae_middle.jpg',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ботинки Forma Legacy Dry Brown',
          desc: 'Мотоботинки Forma Legacy сконструированы из цельнозернистой натуральной кожи с подошвой, созданной специально для урбанистических улиц. Достаточно один раз зашнуровать эти ботинки и в следующий раз использовать удобную боковую молнию, что значительно облегчает надевание и снятие мотобот.',
          price: 20790,
          image:
            'https://flipup.ru/upload/resize_cache/iblock/9ba/cu1t11y5uxim9a18q14isjorl8cstl58/460_460_1/m9duqdvuea9y4rzucsc6vp2zgmk14kpb.png',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ботинки Forma Pilot Black-Red-White',
          desc: 'Эластичная и устойчивая к истиранию синтетическая кожа, персонализированная подошва двойной плотности MX PRO из резиновой смеси, механизм фиксации голеностопа с двумя шарнирными соединениями F.C.S. (исключает скручивание и чрезмерный изгиб сустава).',
          price: 38500,
          image:
            'https://flipup.ru/upload/resize_cache/iblock/702/mjrv3htvlggj6ezb5xn0d20ekzhksb4o/460_460_1/c8c18ec16e656ac48aba61ddc743be33.png',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Мотоботы IXS Sport Boots RX-100',
          desc: 'Гоночные ботинки из стойкой к истиранию матовой коровьей кожи, дышащая сетчатая текстильная подкладка, мягкая панель голени TPU со встроенным вентиляционным отверстием.',
          price: 16700,
          image:
            'https://flipup.ru/upload/resize_cache/iblock/fd1/460_460_1/sport_boots_rs_100_short_x45024_76155_middle.jpg',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
