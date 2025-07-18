const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

//middlewares per la gestione delle richieste in entrata
app.use(express.json())
app.use(bodyParser.json());
app.use(cors())

const config = {
  PORT: 3000,
  TOKEN_SIGN_KEY: 'chiave_segreta_per_jwt_token_123',
  MONGODB_URI: `mongodb+srv://sarabenassati:a@cluster0.xw2qjnz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  MONGODB_DB: 'sample_mflix'
}

// Creazione oggetto di connessione a mongodb
const client = new MongoClient(config.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

// Effettua il login con le credenziali fornite nel body della richiesta 
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // connessione a mongodb
    await client.connect()
    // imposto il db in cui devo effettuare la query
    const db = client.db(config.MONGODB_DB)
    // cerco se esite già un utente con lo username che ho ricevuto
    const user = await db.collection('users').findOne({ username: username });
    // in caso non esiste rispondo alla richiesta indicando che l'utente non esiste
    if (!user) return res.status(404).json({ rc: 1, msg: `User ${username} not found` });

    // controllo che la password ricevuta nella richiesta corrisponda a quella salvata sul database
    const match = await bcrypt.compare(password, user.password);
    // in caso non corrispondesse rispondo alla richiesta indicando che le credenziali ricevute non sono valide
    if (!match) return res.status(401).json({ rc: 1, msg: 'Invalid credentials' })
    //se sono arrivato qui vuol dire che i controlli precedenti sono stati superati
    const content = { username }
    // genero quindi un token e gli imposto una durata di validità (1 ora in questo caso)
    const token = jwt.sign(content, config.TOKEN_SIGN_KEY, {expiresIn: '1h'})
    // invio la risposta alla richiesta con il token
    res.status(200).json({ rc: 0, msg: 'Login successful', token: token });
  } catch (err) {
    console.error(err)
    res.status(500).json({ rc: 1, msg: err.toString() })
  } finally {
    // sia con che senza errori chiudo la connessione a mongodb
    await client.close()
  }
})

// Creazione di un nuovo utente con le credenziali fornite nel body della richiesta
app.put('/addUser', async (req, res) => {
  try {
    // leggo i parametri (obbligatori) username, password e email ricevuti nel body della richiesta
    const { username, password, email } = req.body;
    // apro la connessione a mongodb
    await client.connect()
    // imposto il db in cui devo effettuare la query
    const db = client.db(config.MONGODB_DB)
    // controllo se esiste già un utente con lo stesso username e se esiste rispondo con un messaggio di errore adeguato
    const existingUser = await db.collection('users').findOne({ username: username});
    if(existingUser) return res.status(409).json({rc: 1, msg: `User ${username} already exists`})
    // effettuo lo stesso controllo anche per il campo email
    const existingEmail = await db.collection('users').findOne({ email: email});
    if(existingEmail) return res.status(409).json({rc: 1, msg: `Email ${email} already exists`})
    // cripto la password prima di salvarla
    const hashedPassword = await bcrypt.hash(password, 10);
    // creo l'oggetto nuovo utente
    const newUser = { username, password: hashedPassword, email };
    // se supero i controlli precedenti allora posso inserire il nuovo utente nel database
    const result_user = await db.collection('users').insertOne(newUser);
     
    // effettua la insert sulla collection users e invia la risposta alla richiesta 
    res.status(201).send({ rc: 0, msg: `User ${username} added successfully` })
  } catch (err) {
    console.error(err)
    res.status(500).json({ rc: 1, msg: err.toString() })
  } finally {
    await client.close()
  }
})

//middleware controllo validità token - eseguito per tutte le richieste ricevute indistintamente dal path
app.use(function (req, res, next) {
  //escludo rotte che non devono essere sotto autenticazione
  console.log('=== MIDDLEWARE AUTENTICAZIONE ===');
  console.log('URL richiesta:', req.originalUrl);
  console.log('Method:', req.method);
  console.log('Path:', req.path);
  
  if (req.originalUrl === '/login' || req.originalUrl === '/addUser') {
    console.log('*** ROTTA PUBBLICA - SALTO AUTENTICAZIONE ***');
    return next()
  }
  
  console.log('*** CONTROLLO TOKEN ***');
  
  if (req.headers.authorization && req.headers.authorization.length > 0 && req.headers.authorization.split(' ')[0] === 'Bearer') {
    // resto del codice...
  } else {
    console.log('*** TOKEN MANCANTE ***');
    res.status(400).json({ rc: 1, msg: 'Missing token in request' })
  }
})
// Aggiunta di un nuovo film con i dati forniti nel body della richiesta
app.post('/addFilm', async (req, res) => {
  try {
     // leggo i parametri (obbligatori) title, director e year ricevuti nel body della richiesta
     const { title, director, year } = req.body;
     // se i parametri non sono tutti correttamente valorizzati rispondo con un messaggio di errore adeguato
      if (!title || !director || !year) {
        return res.status(400).json({ rc: 1, msg: 'Missing fields: title, director, year' })
      }
     // apro la connessione a mongodb
     await client.connect()
     // inserisco il nuovo film nella collection movies
    const result = await client.db(config.MONGODB_DB).collection('movies').insertOne({ title, director, year });
    res.status(201).send({ rc: 0, msg: `Film ${title} added successfully` })
  } catch (err) {
    console.error(err)
    res.status(500).json({ rc: 1, msg: err.toString() })
  } finally {
    await client.close()
  }
})

// ritorna una lista filtrata di film  
app.get('/listMovies', async (req, res) => {
  try {
    // leggo i filtri ricevuti nel body della richiesta in formato json
    const { title, director, year } = req.query;
    // apro la connessione a mongodb
    await client.connect()
    // imposto il database su cui voglio lavorare
    const db = client.db(config.MONGODB_DB)
    // creo l'oggetto filtro per la query
    const filter = {};
    if (title) filter.title = { $regex: title, $options: 'i' };
    if (director) filter.director = { $regex: director, $options: 'i' };
    if (year) filter.year = parseInt(year);
    // effettuo la query e recupero i primi 50 record che trovo, ordinati in maniera decrescente per campo _id
    const movies = await db.collection('movies').find(filter).sort({ _id: -1 }).limit(50).toArray()
    // rispondo alla richiesta ritornado un campo data nel body della risposta che contiene i record recuperati dalla query
    res.status(200).json({ rc: 0, data: movies })
  } catch (err) {
    console.error(err)
    res.status(500).json({ rc: 1, msg: err.toString() })
  } finally {
    await client.close()
  }
})

// attivazione web server in ascolto sulla porta indicata
app.listen(config.PORT, () => {
  console.log(`Movie Manager app listening on port ${config.PORT}`)
})