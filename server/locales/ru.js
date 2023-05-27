// @ts-check

export default {
  translation: {
    appName: 'Менеджер задач',
    flash: {
      tasks: {
        create: {
          success: 'Задача успешно создана',
          error: 'Ошибка при создании задачи',
        },
        delete: {
          success: 'Задача успешно удалена',
          error: 'Возникла ошибка при попытке удалить статус',
          noAccess: 'Задачу может удалить только ее автор',
        },
        update: {
          success: 'Задача успешно изменена',
          error: 'Ошибка при изменении задачи',
        },
      },
      statuses: {
        create: {
          success: 'Статус успешно создан',
          error: 'Ошибка при создании статуса',
        },
        update: {
          success: 'Статус успешно изменен',
          error: 'Ошибка при изменении статуса',
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
      },
    },
    views: {
      tasks: {
        header: 'Задачи',
        new: {
          header: 'Создание статуса',
        },
        labels: {
          name: 'Наименование',
          createTask: 'Создать задачу',
          id: 'ID',
          author: 'Автор',
          status: 'Статус',
          executor: 'Исполнитель',
          createdAt: 'Дата создания',
          submitEdit: 'Изменить',
          delete: 'Удалить',
          submitCreate: 'Создать',
          description: 'Описание',
        },
        editPage: {
          header: 'Изменить задачу',
        },
      },
      statuses: {
        header: 'Статусы',
        edit: 'Изменить',
        labels: {
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
          header: 'Изменить статус',
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
        labels: {
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
          header: 'Изменить пользователя',
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
