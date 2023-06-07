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
      tasks: {
        create: {
          success: 'Задача успешно создана',
          error: 'Ошибка при создании задачи',
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
          success: 'Статус успешно изменен',
          error: 'Не удалось изменить статус',
        },
        delete: {
          success: 'Статус успешно удален',
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
          success: 'Пользователь успешно удален',
          noAccess: 'Вы не можете редактировать или удалять другого пользователя',
        },
        update: {
          error: 'Не удалось изменить пользователя',
          success: 'Пользователь был успешно изменен',
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
        entities: {
          createLabel: 'Создать метку',
          edit: 'Изменить',
          delete: 'Удалить',
          id: 'ID',
          name: 'Наименование',
          createdAt: 'Дата создания',
          submitCreate: 'Создать',
          submitEdit: 'Изменить',
        },
        new: {
          header: 'Создние метки',
        },
        editPage: {
          header: 'Изменение метки',
        },
      },
      tasks: {
        header: 'Задачи',
        isUserCreator: 'Только мои задачи',
        submitFilter: 'Показать',
        new: {
          header: 'Создание задачи',
          isUserCreator: 'Только мои задачи',
          submitFilter: 'Показать',
        },
        entities: {
          name: 'Наименование',
          createTask: 'Создать задачу',
          id: 'ID',
          author: 'Автор',
          status: 'Статус',
          executor: 'Исполнитель',
          edit: 'Изменить',
          createdAt: 'Дата создания',
          submitEdit: 'Изменить',
          delete: 'Удалить',
          submitCreate: 'Создать',
          description: 'Описание',
          labels: 'Метки',
          label: 'Метка',
        },
        editPage: {
          header: 'Изменение задачи',
        },
      },
      statuses: {
        header: 'Статусы',
        edit: 'Изменить',
        entities: {
          id: 'ID',
          name: 'Наименование',
          createdAt: 'Дата создания',
          createStatus: 'Создать статус',
          edit: 'Изменить',
          deleteStatus: 'Удалить',
          submitCreate: 'Создать',
          submitEdit: 'Изменить',
        },
        new: {
          header: 'Создание статуса',
        },
        editPage: {
          header: 'Изменение статуса',
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
        entities: {
          id: 'ID',
          name: 'Полное имя',
          email: 'Email',
          createdAt: 'Дата создания',
          actions: 'Действия',
          password: 'Пароль',
          firstName: 'Имя',
          lastName: 'Фамилия',
          edit: 'Изменить',
          delete: 'Удалить',
          submitRegister: 'Сохранить',
          submitEdit: 'Изменить',
        },
        new: {
          header: 'Регистрация',
        },
        editPage: {
          header: 'Изменение пользователя',
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
