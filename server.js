const { app } = require('./app');

const { database } = require('./util/database');
const { initModels } = require('./util/iniModels');

database
  .authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

initModels();

database
  .sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
