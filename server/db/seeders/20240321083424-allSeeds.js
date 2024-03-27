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
          name: 'Host Bike Fest 2023',
          desc: 'Легендарный байк-фестиваль Host Bike Fest соберет самых отпетых байкеров нашей страны! В фестивале примет участие большое количество музыкальных коллективов: Включай микрофон!, Бригадный подряд, Мёртвые осы, Nagart, План Ломоносова, Nadи, Bombshell boys и другие.',
          image: 'host_bike_fest.jpeg',
          date: new Date('2023-07-28T19:00:00'),
          place: 'Ленинградская область, пос.Токсово, ул.Офицерская',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Байкслет Сорви башку 9',
          desc: 'Соскучились по мототусовкам? 10 июня мотоклуб RECKLESS MC RUSSIA приглашает всех на девятый ежегодный байк-слет «Сорви Башку» под Первоуральском. «В этот раз мы решили вдарить по каверам и хотим попеть всем нам знакомые песни» - пишут организаторы на официальной странице слета. Фишка мероприятия – кавер фест. Со сцены прозвучат всем известные хиты легендарных групп АРИЯ, Король и Шут, СЕКТОР ГАЗА и других в исполнении уральских рок-коллективов.',
          image: 'sorvi_bashku_fest.jpeg',
          date: new Date('2023-06-10T21:00:00'),
          place: 'Первоуральск, Свердловская область',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Байкфестиваль Майский погром',
          desc: 'Погремим поршнями?! Традиционный ежегодный байк-рок фестиваль, проходящий на живописных берегах реки Волга. Участники феста смогут принять участие в мотоконкурсах и услышать одни из самхы заюлйных рок-групп: Эффект Фассбендера, Scirocco, Fressone, OutCry, Мамульки Бэнд, Монгол Шуудан.',
          image: 'maiskiy_pogrom_fest.jpeg',
          date: new Date('2023-05-01T19:00:00'),
          place: 'Тольятти, Самарская область',
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
          name: 'Круг 3 столиц',
          desc: 'Маршрут Москва - Тула отлично подходит для любителей активного отдыха. Путешествие, длинной почти в неделю запомнится природными достопримечательностями. Прохват по данному треку особо оценят любители смешанного климата и типов дорог.',
          date: new Date(),
          length: '2025',
          image: 'tri_stolicy.jpeg',
          rateCounter: 0,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Заполярная подкова',
          desc: 'А вы знаете, что путешествие из Мурманска до Ямбурга - называется Заполярная Подкова? И самое идеальное время для ее покорения - ЗИМА, но можно конечно и летом. 80% маршрута - это асфальтные дороги и оставшиеся 20% - грунтовые.',
          date: new Date(),
          length: '1203',
          image: 'podkova_race.jpeg',
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
          image: 'vintage_space_jacket.jpeg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Куртка кожаная Mars',
          desc: 'Куртка прекрасно подойдёт для мотоциклистов, предпочитающих и дорожные мотоциклы, и чопперы и туристические байки.',
          price: 31900,
          image: 'mars_jacket.jpeg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Куртка мужcкая джинсовая Texas',
          desc: 'Почему байкеры выбирают мотоджинсу для езды по городу? Джинса "дышит". Джинсовая ткань на основе хлопка прекрасно вентилируется и не даёт потеть в жару и мёрзнуть в холоде.',
          price: 13860,
          image: 'texas_jacket.jpeg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mотокуртка Panther',
          desc: 'Куртка «Panther» (Пантера) – короткая куртка для городских мотоциклистов. Её тёмный дизайн с ярко-зелёными вставками – как голова пантеры, готовой сделать стремительный прыжок хищника. ',
          price: 15840,
          image: 'panther_jacket.jpeg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Куртка мужская Cavaler',
          desc: 'Эту мотокуртку можно носить как для "покатушек", так и повседневно. Это как раз тот самый вариант, который будет привлекать внимание не духом "байкерства". Брутальность зашкаливает. Девушки охают. Мужики завидуют. Вы - красавчик!',
          price: 30800,
          image: 'cavaler_jacket.jpeg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Куртка мужская Black Phantom',
          desc: 'Куртка прекрасно подойдёт для мотоциклистов, предпочитающих и дорожные мотоциклы, и чопперы и туристические байки.',
          price: 29040,
          image: 'black_phantom_jacket.jpeg',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шлем IXS Jet Helmet iXS880',
          desc: 'Jet шлем из поликарбоната,замок с трещоткой. высококачественная внутренняя подкладка, устойчивое к царапинам затемненное стекло, новая технология матовой окраски-NMT, подкладка: 100% полиэстер',
          price: 8990,
          image: 'IXS_Jet_Helmet_iXS880.jpeg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шлем IXS Jet Helmet IXS990',
          desc: 'Замок с трещоткой, высококачественная внутренняя подкладка, устойчивое к царапинам затемненное стекло, новая технология матовой окраски-NMT, подкладка: 100% полиэстер',
          price: 11980,
          image: 'HX_77_IX_helmet.jpeg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шлем HX 77 JS',
          desc: 'Главные преимущества открытого шлема - простота в использовании и комфорт. Открытый шлем для мотоцикла из поликарбоната идеально подходит любителям неспешной езды. Обладает наилучшими характеристиками вентиляции, что очень актуально в жару.',
          price: 13900,
          image: 'HX_77_JS_helmet.jpeg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шлем HX 77 TSX',
          desc: 'Главные преимущества открытого шлема - простота в использовании и комфорт. Открытый шлем для мотоцикла из поликарбоната идеально подходит любителям неспешной езды. Обладает наилучшими характеристиками вентиляции, что очень актуально в жару.',
          price: 13900,
          image: 'HX_77_TSX_helmet.jpeg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Открытый шлем HOC 77',
          desc: 'Встроенный солнцезащитный козырек, микрозакрытие (Click застежка), новая технология матового лака-NMT, устойчивое к механическим повреждениям.',
          price: 9800,
          image: 'HOC_77_helmet.jpeg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Мотошлем открытый iXS 880',
          desc: 'Встроенный внутренний тонированный солнцезащитный козырек, съемная, моющаяся внутренняя подкладка, застежка с микротрещоткой.',
          price: 11980,
          image: 'iXS_880_helmet.jpeg',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ботинки Dragonfly QUAD 2.0',
          desc: 'Новинка от Dragonfly – черные квадро ботинки QUAD 2.0. Обувь разработана специально для передвижения по бездорожью на различных видах техники летом и в демисезон – квадроциклах, вездеходах.',
          price: 10500,
          image: 'dragonfly_quad_boots.jpeg',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ботинки Forma Pilot',
          desc: 'Эластичная и устойчивая к истиранию синтетическая кожа, персонализированная подошва двойной плотности MX PRO из резиновой смеси, склеенная подошва MX-B (разработана при участии компании Goodyear).',
          price: 31660,
          image: 'forma_pilot_boots.jpeg',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Мотоботы IXS Sport Boots RS-100',
          desc: 'Гоночные ботинки из стойкой к истиранию матовой коровьей кожи, дышащая сетчатая текстильная подкладка, застежка-молния на внутренней стороне, крышка пятки TPU со встроенным вентиляционным отверстием.',
          price: 16500,
          image: 'IXS_Sport_Boots_RS100.jpeg',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ботинки Forma Legacy Dry Brown',
          desc: 'Мотоботинки Forma Legacy сконструированы из цельнозернистой натуральной кожи с подошвой, созданной специально для урбанистических улиц. Достаточно один раз зашнуровать эти ботинки и в следующий раз использовать удобную боковую молнию, что значительно облегчает надевание и снятие мотобот.',
          price: 20790,
          image: 'forma_legacy_dry_brown_boots.jpeg',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ботинки Forma Pilot Black-Red-White',
          desc: 'Эластичная и устойчивая к истиранию синтетическая кожа, персонализированная подошва двойной плотности MX PRO из резиновой смеси, механизм фиксации голеностопа с двумя шарнирными соединениями F.C.S. (исключает скручивание и чрезмерный изгиб сустава).',
          price: 38500,
          image: 'forma_pilot_black_red_white.jpeg',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Мотоботы IXS Sport Boots RS-400',
          desc: 'Гоночные ботинки из стойкой к истиранию матовой коровьей кожи, дышащая сетчатая текстильная подкладка, мягкая панель голени TPU со встроенным вентиляционным отверстием.',
          price: 16700,
          image: 'IXS_sport_boots_RS400.jpeg',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},

      await queryInterface.bulkInsert(
        'Carts',
        [
          {
           userId: 1,
           productId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            productId: 2,
             createdAt: new Date(),
             updatedAt: new Date(),
           },
           {
            userId: 1,
            productId: 3,
             createdAt: new Date(),
             updatedAt: new Date(),
           },
        ],
        {},
      );
    );

    await queryInterface.bulkInsert(
      'Carts',
      [
        {
          userId: 1,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          productId: 3,
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
