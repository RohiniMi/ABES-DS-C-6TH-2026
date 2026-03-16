import http from "http";
import { userLogin } from "../day_05/controller/login.js";
import { userRegistration } from "../day_05/controller/register.js";
const PORT = 5500;

const server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return;
    if (req.url === "/login" && req.method === "POST") {
        let body = "";
        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        })
        req.on("end", async () => {
            const userData = JSON.parse(body);
            const response = await userLogin(userData, "./users.json");
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify(response));
        })
    } else if (req.url === "/register" && req.method === "POST") {
        let body = "";
        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        })
        req.on("end", async () => {
            const userData = JSON.parse(body);
            const response = await userRegistration(userData, "./users.json");
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify(response));

        })

    } else {
        res.writeHead(500, { "Content-type": "application/json" });
        res.end(JSON.stringify({ message: "url is not matched" }));
    }
    // switch(req.url){
    //     case "/":
    //         res.end("Home Page");
    //         break;
    //     case "/login":
    //         res.end("Login Page");
    //         break;
    //     case "/register":
    //         res.end("Registration Page");
    //         break;
    //     default:
    //         res.end("path does not match");
    // }
});

server.listen(PORT,
    () => console.log(`server is running at http://localhost:${PORT}`))