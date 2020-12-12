import { api } from './app'

const app = api()
app.listen(3000, () => {
  console.log('API started')
});
