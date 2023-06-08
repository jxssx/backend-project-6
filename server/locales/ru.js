// @ts-check

export default {
  translation: {
    appName: 'Менеджер задач',
    flash: {
      labels: {
        create: {
          success: 'Метка успешно создана',
          error: 'Не удалось создать метку',
        },
        update: {
          success: 'Метка успешно изменена',
          error: 'Не удалось изменить метку',
        },
        delete: {
          success: 'Метка успешно удалена',
          error: 'Не удалось изменить метку',
        },
      },
      tasks: {
        create: {
          success: 'Задача успешно создана',
          error: 'Не удалось создать задачу',
        },
        delete: {
          success: 'Задача успешно удалена',
          error: 'Не удалось удалить задачу',
          noAccess: 'Задачу может удалить только ее автор',
        },
        update: {
          success: 'Задача успешно изменена',
          error: 'Не удалось изменить задачу',
        },
      },
      statuses: {
        create: {
          success: 'Статус успешно создан',
          error: 'Не удалось создать статус',
        },
        update: {
          success: 'Статус успешно изменён',
          error: 'Не удалось изменить статус',
        },
        delete: {
          success: 'Статус успешно удалён',
          error: 'Не удалось удалить статус',
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
        delete: {
          error: 'Не удалось удалить пользователя',
          success: 'Пользователь успешно удалён',
          noAccess: 'Вы не можете редактировать или удалять другого пользователя',
        },
        update: {
          error: 'Не удалось изменить пользователя',
          success: 'Пользователь успешно изменён',
        },
        edit: {
          noAcess: 'Вы не можете редактировать или удалять другого пользователя',
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
        tasks: 'Задачи',
        labels: 'Метки',
      },
    },
    views: {
      labels: {
        header: 'Метки',
        createLabel: 'Создать метку',
        delete: 'Удалить',
        edit: 'Изменить',
        id: 'ID',
        name: 'Наименование',
        createdAt: 'Дата создания',
        new: {
          header: 'Создние метки',
          name: 'Наименование',
          submit: 'Создать',
        },
        editPage: {
          header: 'Изменение метки',
          submit: 'Изменить',
          name: 'Наименование',
        },
      },
      tasks: {
        header: 'Задачи',
        isUserCreator: 'Только мои задачи',
        submitFilter: 'Показать',
        createTask: 'Создать задачу',
        status: 'Статус',
        author: 'Автор',
        executor: 'Исполнитель',
        label: 'Метка',
        edit: 'Изменить',
        delete: 'Удалить',
        id: 'ID',
        name: 'Наименование',
        createdAt: 'Дата создания',
        task: {
          author: 'Автор',
          executor: 'Исполнитель',
          createdAt: 'Дата создания',
          edit: 'Изменить',
          delete: 'Удалить',
        },
        new: {
          header: 'Создание задачи',
          name: 'Наименование',
          description: 'Описание',
          status: 'Статус',
          executor: 'Исполнитель',
          labels: 'Метки',
          submit: 'Создать',
        },
        editPage: {
          header: 'Изменение задачи',
          name: 'Наименование',
          description: 'Описание',
          status: 'Статус',
          executor: 'Исполнитель',
          labels: 'Метки',
          submit: 'Изменить',
        },
      },
      statuses: {
        header: 'Статусы',
        edit: 'Изменить',
        delete: 'Удалить',
        createStatus: 'Создать статус',
        id: 'ID',
        name: 'Наименование',
        createdAt: 'Дата создания',
        new: {
          header: 'Создание статуса',
          name: 'Наименование',
          submit: 'Создать',
        },
        editPage: {
          header: 'Изменение статуса',
          name: 'Наименование',
          submit: 'Изменить',
        },
      },
      session: {
        new: {
          signIn: 'Вход',
          submit: 'Войти',
          email: 'Email',
          password: 'Пароль',
        },
      },
      users: {
        header: 'Пользователи',
        id: 'ID',
        name: 'Полное имя',
        email: 'Email',
        createdAt: 'Дата создания',
        actions: 'Действия',
        edit: 'Изменить',
        delete: 'Удалить',
        new: {
          header: 'Регистрация',
          firstName: 'Имя',
          lastName: 'Фамилия',
          email: 'Email',
          password: 'Пароль',
          submit: 'Сохранить',
        },
        editPage: {
          header: 'Изменение пользователя',
          firstName: 'Имя',
          lastName: 'Фамилия',
          email: 'Email',
          password: 'Пароль',
          submit: 'Изменить',
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
