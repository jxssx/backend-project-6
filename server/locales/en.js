// @ts-check

export default {
  translation: {
    appName: 'Task Manager',
    flash: {
      statuses: {
        create: {
          success: 'Status has been successfully created',
          error: 'An error occured while trying to create the status',
        },
        edit: {
          success: 'Status has been successfully edited',
          error: 'An error occured while trying to edit the status',
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
          success: 'User registered successfully',
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
      },
    },
    views: {
      statuses: {
        header: 'Statuses',
        id: 'ID',
        name: 'Name',
        createdAt: 'Created at',
        createStatus: 'Create Status',
        edit: 'Edit',
        deleteStatus: 'Delete',
        new: {
          header: 'Status Creation',
          name: 'Name',
          submit: 'Submit',
          edit: 'Edit',
        },
        editPage: {
          header: 'Edit status',
          submit: 'Submit'
        },
      },
      session: {
        new: {
          signIn: 'Login',
          submit: 'Login',
        },
      },
      users: {
        header: 'Users',
        id: 'ID',
        email: 'Email',
        createdAt: 'Created at',
        new: {
          submit: 'Register',
          signUp: 'Register',
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
