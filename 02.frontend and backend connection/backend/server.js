import express from "express";

const app = express();
app.use(express.static('dist'))

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// });

// get a list of five jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content:'its a joke'
        },
        {
            id: 2,
            title: 'B joke',
            content:'its also a joke'
        },
        {
            id: 3,
            title: 'C joke',
            content:'its another joke'
        },
        {
            id: 4,
            title: 'D joke',
            content:'its not a joke'
        },
        {
            id: 5,
            title: 'E joke',
            content:'it can be a joke'
        }

    ]
    res.send(jokes);
});

const port = process.env.PORT || 3002;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    }
);