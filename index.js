const http = require('http');
const port = 8000;
const fs = require('fs');
const { deflate } = require('zlib');

function requesthandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});

     let filepath;

     switch(req.url){
        case '/home':
            filepath = './index.html';
            break;
        
         default:
            filepath = './404.html';
        }
     
        fs.readFile(filepath, function(err,data){
            if(err)
            {
            console.log(err);
            return res.end('<h1>Error!</h1>');
            }
          return res.end(data); 
        });

    // fs.readFile('./index.html',function(err,data){
    //     if(err)
    //     {
    //         console.log(err);
    //         return res.end('<h1>Error!</h1>');
    //     }
    //      res.end(data); 
    // });

    //res.end('<h1>vani</h1>');
}
const server = http.createServer(requesthandler);

server.listen(port,function(err){
    if(err){
    console.log(err);
    return;
    }

    console.log('Server is running!',port);
});
