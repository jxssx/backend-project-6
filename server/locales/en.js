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
        entities: {
          createLabel: 'Create label',
          id: 'ID',
          name: 'Name',
          createdAt: 'Created at',
          submitCreate: 'Submit',
          edit: 'Edit',
          delete: 'Delete',
          submitEdit: 'Submit',
        },
        new: {
          header: 'Create label',
        },
        editPage: {
          header: 'Edit label',
        },
      },
      tasks: {
        header: 'Tasks',
        isUserCreator: 'Only my tasks',
        submitFilter: 'Show',
        new: {
          header: 'Task creation',
        },
        entities: {
          name: 'Name',
          createTask: 'Create task',
          id: 'ID',
          author: 'Author',
          status: 'Status',
          executor: 'Executor',
          createdAt: 'Created at',
          edit: 'Edit',
          delete: 'Delete',
          submitCreate: 'Submit',
          submitEdit: 'Submit',
          description: 'Description',
          labels: 'Labels',
          label: 'Label',
        },
        editPage: {
          header: 'Edit task',
        },
      },
      statuses: {
        header: 'Statuses',
        entities: {
          id: 'ID',
          name: 'Name',
          createdAt: 'Created at',
          createStatus: 'Create status',
          edit: 'Edit',
          deleteStatus: 'Delete',
          submitCreate: 'Submit',
          submitEdit: 'Submit',
        },
        new: {
          header: 'Status creation',
        },
        editPage: {
          header: 'Edit status',
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
        entities: {
          id: 'ID',
          name: 'Name',
          email: 'Email',
          createdAt: 'Created at',
          actions: 'Actions',
          submitRegister: 'Register',
          submitEdit: 'Submit',
          password: 'Password',
          firstName: 'First name',
          lastName: 'Last name',
          edit: 'Edit',
          delete: 'Delete',
        },
        new: {
          header: 'Register',
        },
        editPage: {
          header: 'Edit user',
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
