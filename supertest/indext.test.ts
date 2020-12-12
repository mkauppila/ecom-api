import {api} from '../app'
import * as request from 'supertest'

test('test /products', async () => {
  const res = await request(api())
      .get('/products')
  expect(res.status).toEqual(200)
  expect(res.body).toEqual({result: 'ok'})
})
