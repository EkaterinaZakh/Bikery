/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'admin',
          email: 'admin@admin',
          password: '1',
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
          name: 'Мотокуртка HAWK MOTO DISCOVERY',
          desc: 'Туристический мотокостюм «Discovery», материал: ткань Cordura D600',
          price: 25100,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шлем AIROH HUNTER',
          desc: 'Шлем HUNTER (XXL,SOUL ANTHRACITE MATT)',
          price: 16700,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Мотоботы DAINESE TORQUE 3 OUT',
          desc: 'Мотоботы TORQUE 3 OUT (45,BLACK/FLUO-RED)',
          price: 44200,
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
