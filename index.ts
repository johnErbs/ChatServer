

///<Sumnary>
//
///</Sumnary>

import * as Express from 'express';
import * as Http from 'http';
import * as Socket from 'socket.io';

let app = Express();
let http = new Http.Server(app);
let io = Socket(http);

app.get('/', (req, resp) =>
{
    resp.sendFile(__dirname + "/index.html")
});

io.on('connection', conn =>
{
    console.log('Someone connected!');
    conn.on('message', mess =>
    {
        console.log(mess.a);
        //Sender server ud til alle kanaler
        io.emit('whatever', 'whas uup?');
    })

    conn.on('disconnect', () =>
    {
        console.log("someone disconnected!");
    });
});

http.listen(3000, () =>
{
    console.log('listening on port 3000');
});