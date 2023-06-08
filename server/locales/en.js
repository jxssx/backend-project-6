// @ts-check

export default {
  translation: {
    appName: 'Task Manager',
    flash: {
      labels: {
        create: {
          success: 'Label has been successfully created',
          error: 'An error occured while trying to create the label',
        },
        update: {
          success: 'Label has been successfully updated',
          error: 'An error occured while trying to update the label',
        },
        delete: {
          success: 'Label has been successfully deleted',
          error: 'An error occured while trying to delete the label',
        },
      },
      tasks: {
        create: {
          success: 'Task has been successfully created',
          error: 'An error occured while trying to create the task',
        },
        delete: {
          success: 'Task has been successfully deleted',
          error: 'An error occured while trying to delete the task',
          noAccess: 'Task can be deleted only by its author',
        },
        update: {
          success: 'Task has been successfully updated',
          error: 'An error occured while trying to update the task',
        },
      },
      statuses: {
        create: {
          success: 'Status has been successfully created',
          error: 'An error occured while trying to create the status',
        },
        update: {
          success: 'Status has been successfully updated',
          error: 'An error occured while trying to update the status',
        },
        delete: {
          success: 'Status has been successfully deleted',
          error: 'An error occured while trying to delete the status',
        },
      },
      session: {
        create: {
          success: 'You are logged in',
          error: 'Wrong email or password',
        },
        delete: {
          success: 'You are logged out',
        },
      },
      users: {
        create: {
          error: 'Failed to register',
          success: 'User was registered successfully',
        },
        delete: {
          error: 'Failed to delete the user',
          success: 'User was deleted successfully',
          noAccess: 'User can be edited or deleted only by their own',
        },
        update: {
          error: 'Failed to update the user',
          success: 'User was updated successfully',
        },
        edit: {
          noAcess: 'User can be edited or deleted only by their own',
        },
      },
      authError: 'Access denied! Please login',
    },
    layouts: {
      application: {
        users: 'Users',
        statuses: 'Statuses',
        signIn: 'Login',
        signUp: 'Register',
        signOut: 'Logout',
        tasks: 'Tasks',
        labels: 'Labels',
      },
    },
    views: {
      labels: {
        header: 'Labels',
        createLabel: 'Create label',
        delete: 'Delete',
        edit: 'Edit',
        id: 'ID',
        name: 'Name',
        createdAt: 'Created at',
        new: {
          header: 'Label creation',
          name: 'Name',
          submit: 'Create',
        },
        editPage: {
          header: 'Label change',
          submit: 'Edit',
          name: 'Name',
        },
      },
      tasks: {
        header: 'Tasks',
        isUserCreator: 'Only my tasks',
        submitFilter: 'Show',
        createTask: 'Create task',
        status: 'Status',
        author: 'Author',
        executor: 'Executor',
        label: 'Label',
        edit: 'Edit',
        delete: 'Delete',
        id: 'ID',
        name: 'Name',
        createdAt: 'Created at',
        task: {
          author: 'Author',
          executor: 'Executor',
          createdAt: 'Created at',
          edit: 'Edit',
          delete: 'Delete',
        },
        new: {
          header: 'Task creation',
          name: 'Name',
          description: 'Description',
          status: 'Status',
          executor: 'Executor',
          labels: 'Labels',
          submit: 'Create',
        },
        editPage: {
          header: 'Task change',
          name: 'Name',
          description: 'Description',
          status: 'Status',
          executor: 'Executor',
          labels: 'Labels',
          submit: 'Edit',
        },
      },
      statuses: {
        header: 'Statuses',
        edit: 'Edit',
        delete: 'Delete',
        createStatus: 'Create status',
        id: 'ID',
        name: 'Name',
        createdAt: 'Created at',
        new: {
          header: 'Status creation',
          name: 'Name',
          submit: 'Create',
        },
        editPage: {
          header: 'Status change',
          name: 'Name',
          submit: 'Edit',
        },
      },
      session: {
        new: {
          signIn: 'Login',
          submit: 'Login',
          email: 'Email',
          password: 'Password',
        },
      },
      users: {
        header: 'Users',
        id: 'ID',
        name: 'Name',
        email: 'Email',
        createdAt: 'Created at',
        actions: 'Actions',
        edit: 'Edit',
        delete: 'Delete',
        new: {
          header: 'Registration',
          firstName: 'First name',
          lastName: 'Last name',
          email: 'Email',
          password: 'Password',
          submit: 'Save',
        },
        editPage: {
          header: 'User change',
          firstName: 'First name',
          lastName: 'Last name',
          email: 'Email',
          password: 'Password',
          submit: 'Edit',
        },
      },
      welcome: {
        index: {
          hello: 'Hello from Hexlet!',
          description: 'Online programming school',
          more: 'Learn more',
        },
      },
    },
  },
};
