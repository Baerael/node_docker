import express from 'express'
import cors from 'cors'

const app = express()

const port = process.env.PORT || 8080;
process.env.NODE_ENV ||= 'development'

if (process.env.NODE_ENV === 'development') {
  app.use(cors({
    origin: "*",
    // exposedHeaders: ""
  }))
}

console.log(process.env.NODE_ENV)

app.get('/', (req, res) => {
	res.json({ message: 'Docker created'})
})


app.listen(port, () => console.log(`listing to ${port} `))