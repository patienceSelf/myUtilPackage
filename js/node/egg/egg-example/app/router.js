module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/form', controller.form.post);
}