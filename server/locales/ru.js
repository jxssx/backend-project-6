// @ts-check

export default {
  translation: {
    appName: 'Менеджер задач',
    flash: {
      statuses: {
        create: {
          success: 'Статус успешно создан',
          error: 'Ошибка при создании статуса',
        },
        edit: {
          success: 'Статус успешно изменен',
          error: 'Ошибка при изменении статуса',
        },
        delete: {
          success: 'Статус успешно удален',
          error: 'Возникла ошибка при попытке удалить статус',
        },
      },
      session: {
        create: {
          success: 'Вы залогинены',
          error: 'Неправильный емейл или пароль',
        },
        delete: {
          success: 'Вы разлогинены',
        },
      },
      users: {
        create: {
          error: 'Не удалось зарегистрировать',
          success: 'Пользователь успешно зарегистрирован',
        },
      },
      authError: 'Доступ запрещён! Пожалуйста, авторизируйтесь.',
    },
    layouts: {
      application: {
        users: 'Пользователи',
        statuses: 'Статусы',
        signIn: 'Вход',
        signUp: 'Регистрация',
        signOut: 'Выход',
      },
    },
    views: {
      statuses: {
        header: 'Статусы',
        id: 'ID',
        name: 'Наименование',
        createdAt: 'Дата создания',
        createStatus: 'Создать статус',
        edit: 'Изменить',
        deleteStatus: 'Удалить',
        new: {
          header: 'Создание статуса',
          name: 'Наименование',
          submit: 'Создать',
          edit: 'Изменить',
        },
        editPage: {
          header: 'Edit status',
          submit: 'Изменить',
        },
      },
      session: {
        new: {
          signIn: 'Вход',
          submit: 'Войти',
        },
      },
      users: {
        header: 'Пользователи',
        id: 'ID',
        email: 'Email',
        createdAt: 'Дата создания',
        new: {
          submit: 'Сохранить',
          signUp: 'Регистрация',
        },
      },
      welcome: {
        index: {
          hello: 'Привет от Хекслета!',
          description: 'Практические курсы по программированию',
          more: 'Узнать Больше',
        },
      },
    },
  },
};
