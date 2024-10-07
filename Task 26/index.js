const http = require("http");

const server = http.createServer((req, res)=>{
     if (req.url === "/home") {
        res.end("<h1> UpskillMafia </h1> <p> Master Web development in a virtual College</p> <p>A virtual space where Anyone can become a complete Full stack developer by project based learning (HTML , CSS ,JS , Mongo DB, Node JS, React JS , Tailwind and AI)</p>")     
    }
    else if (req.url === "/about") {
        res.end("<h1>Who Are We ? </h1> <p>Upskillmafia, a product by Tutedude, is a virtual college where students can come and learn along with their peers. Our aim is to provide an offline classroom experience in an online world. To turn this into reality, we have taken up this initiative. The perks are that they would get mentorship by the successful people. This would also help them shorten their failure or struggle curves and reach their goal faster than ever before. We have listed some of the skills we are mentoring on at present.Those who want to learn any skill by experts in their respective field can learn by registering through us.</p>  <h1> Our Vision </h1> <p> To make education easily accessible to everyone <br>.I, Shivam Goyal(undergrad at IIT Delhi), always wanted to do a startup but was always engaged in college activities and was directionless on how to move forward then an idea struck that everyone needs a mentor in his/her life. And then the tutedude started. Even while making the website and app I wished I already had the platform because there was a dire need of mentoring in web development and app development.</p>")       
    }

    else if (req.url === "/contact") {
        res.end("<h1>Contact us</h1>  <p> Ph No: +917404318177 <br> Email:  upskillmafia@gmail.com </p>")       
    }

 
})

server.listen(4000, "localhost", () => {
    console.log("Server is running...");
    
})