const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'GET /shops/sync': 'ShopController.sync',
  'GET /shops': 'ShopController.getAll',
};

module.exports = publicRoutes;
