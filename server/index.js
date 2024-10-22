const express = require('express')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 5000;
//gxnFEaQRVnZe2WSz

// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello Ak')
})

// mongodb config

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://ashutoshkumardsr:gxnFEaQRVnZe2WSz@cluster0.skuyuhf.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const bookCollection = client.db("BookInventry").collection("books");

        // insert books in db
        app.post("/upload-book", async (req, res) => {
            const data = req.body;
            const result = await bookCollection.insertOne(data);
            res.send(result);
        })
        // get all book
        // app.get("/all-book", async (req, res) => {
        //     const books = bookCollection.find();
        //     const result = await books.toArray();
        //     res.send(result);
        // })
        // update a book data
        app.patch("/book/:id", async (req, res) => {
            const id = req.params.id;
            const updateBookData = req.body;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true };

            const updateDoc = {
                $set: {
                    ...updateBookData
                }
            }
            //update
            const result = await bookCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        })

        // delete book data
        app.delete("/book/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await bookCollection.deleteOne(filter);
            res.send(result);
        })
        // filter data for finding specific data by category
        app.get("/all-book", async (req, res) => {
            let query = {};
            if (req.query?.category) {
                query = { category: req.query.category }
            }
            const result = await bookCollection.find(query).toArray();
            res.send(result);

        })

        // To get single book data 
        app.get('/book/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await bookCollection.findOne(filter);
            res.send(result);
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`App is running on Port ${port}`)
})