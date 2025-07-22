import { serve } from "bun";
import uas from "./routes/uas";


const server = Bun.serve({
    port: 3000,
    routes: {
        "/": {
            async GET(req) {
                return new Response("Selamat datang di FikomUDB!");
                            }
            },
        "/api/uas": uas
    
    
    
    
    
        }

});


console.log(`Server berjalan di http://localhost:${server.port} ...`);