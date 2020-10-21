import express from "express"
import pyramidChecker from "./pyramidWordChecker"

const app = express()
const PORT = process.env.PORT || 3001

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
// =============================================================
app.get("/", (req, res) => {
  res.send("HI")
})

app.post("/check", ({ body }, res) => {
  // Checks if post request is a valid pyramid word
  // console.log(body)
  if (pyramidChecker(body.word)) {
    res.send(`${body.word} is a pyramid word`)
  } else {
    res.send(`${body.word} is not a pyramid word`)
  }
  // res.send(pyramidChecker(body.word))
})

// Listener
// =============================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}!`)
})
