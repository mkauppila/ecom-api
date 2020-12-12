import * as express from "express"
import { OpenAPIBackend } from "openapi-backend"

export const api = (): express.Express => {
  const api = new OpenAPIBackend({
    definition: "./openapi/bundled-api-spec.json",
  })
  api.register({
    getProducts: (c, req, res) => res.status(200).json({ result: "ok" }),
    notFound: (c, req, res) => res.status(400).json({ error: "not found" }),
  })
  api.init()

  const app = express()
  app.use(express.json())
  app.use((req, res) => api.handleRequest(req as any, req, res))

  return app
}
