const express = require('express'); 
const fs = require('fs'); 

const app = express(); 

const videoFileMap = {
    'cat': 'videos/cat.mp4',
    'earth': 'videos/earth.mp4',
    'horse': 'videos/horse.mp4',
};

// Setting up a route for stream
app.get('/videos/:filename', (req, res) => {
    const fileName = req.params.filename; 
    const filePath = videoFileMap[fileName];

    if (!filePath) { 
        return res.status(404).send('File not found'); 
    }

    const stat = fs.statSync(filePath);
    const fileSize = stat.size;
    const range = req.headers.range; 

    if (range) { // If a range is specified in the request
        const parts = range.replace(/bytes=/, '').split('-'); // Parsing the range
        const start = parseInt(parts[0], 10); // Starting byte
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1; // Ending byte

        const chunksize = end - start + 1; 
        const file = fs.createReadStream(filePath, { start, end }); 
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`, // Setting content range header
            'Accept-Ranges': 'bytes', // Indicating that ranges are accepted
            'Content-Length': chunksize, // Setting content length header
            'Content-Type': 'video/mp4' // Setting content type to video
        };
        res.writeHead(206, head); 
        file.pipe(res);
    } else { 
        const head = {
            'Content-Length': fileSize, 
            'Content-Type': 'video/mp4' 
        };
        res.writeHead(200, head); 
        fs.createReadStream(filePath).pipe(res); // Piping the file stream to the response
    }
});

// Starting the server on port 3000
app.listen(3000, () => {
    console.log('Server is listening on port 3000'); 
});
