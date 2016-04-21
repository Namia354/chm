/**
 * Created by Nika on 20.04.2016.
 */
var io = require('socket.io').listen(9898);

//
var namespace = '/';
var _room_id=1;
var rooms=[];
var players=[];
//var curr_hod="white";
var curr_color=[];

console.log("сервер подключен...");

function conn_waiting_room(){
    var c_room_id = _room_id.toString();

   // console.log(io.sockets.adapter.rooms);

}



io.sockets.on('connection', function (socket) {
    console.log('* ' + socket.id + ' подключился к серверу');



    //socket.on('room_enter', function(data) {
    //    console.log(socket.id + ' selected room % ' + data);
    //    socket.join(data);
    //});
    //socket.on('room_leave', function(room) {
    //    console.log(socket.id + ' left room % ' + room);
    //    socket.leave(room);
    //});

    socket.on('disconnect', function(data){
        //console.log(socket);
        //var leave_p = Object.keys(socket.rooms)[0];
       // console.log(io.sockets.clients(leave_p));
       console.log( 'игрок покинул сервер');
        //end("disconnect", curr_color[rooms.indexOf(parseInt(leave_p))]);
    });


    socket.on('game_stopFinding', function(){
       console.log(socket.id+ " покинул очередь");
        console.log(players.indexOf(socket.id));
        var numb_of_pl =players.indexOf(socket.id);
        players.splice(numb_of_pl,1);
        //console.log(players);
        console.log("кол-во игроков в очереди"+players.length);
    });

    socket.on('game_find', function() {
        console.log(socket.id + ' select room % ' + "waiting_room");
        socket.join("waiting_room");
        players.push(socket.id);
        if (players.length>1){
            rooms.push(_room_id);
            io.sockets.connected[players[0]].join(_room_id);
            io.sockets.connected[players[1]].join(_room_id);
            //var clients = io.sockets.adapter.rooms['1'].sockets;
            //for (var clientId in clients ) {
            //
            //    //this is the socket of each client in the room.
            //    console.log(io.sockets.connected[clientId]);
            //}
        //    players[0].join(_room_id);
        //    players[1].join(_room_id);

            console.log("создана комната "+ _room_id);
            curr_color.push("white");



            //socket.emit('game_found', {
            //    color: "white",
            //    roomID: _room_id.toString()
            //});

            io.sockets.connected[players[0]].emit('game_found', {
                color: "white",
                roomID: _room_id.toString()
            });
            io.sockets.connected[players[1]].emit('game_found', {
                color: "black",
                roomID: _room_id.toString()
            });

            _room_id++;
            var numb_of_pl =players.indexOf(players[0]);
            players.splice(numb_of_pl,1);
            numb_of_pl =players.indexOf(players[1]);
            players.splice(numb_of_pl,1);

            console.log("кол-во игроков в очереди"+players.length);
        }
        conn_waiting_room();
    });


    //socket.on('game_stopFinding', function(data) {
    //    console.log(socket.id + ' left room % ' + data);
    //    socket.leave(data);
    //});
    //
    //
    socket.on('turn_move', function(data){

       // console.log("id room"+Object.keys(socket.rooms)[0]);
        //console.log(data.from.x + ' x ');
        var curr_room_id = Object.keys(socket.rooms)[0];
        //console.log("curr_room_id"+ curr_room_id);
        //console.log("rooms"+ rooms);
        //console.log("rooms.indexOf(curr_room_id)"+ rooms.indexOf(parseInt(curr_room_id)));
        //
        //console.log("curr_color[rooms.indexOf(curr_room_id)]"+ curr_color[rooms.indexOf(curr_room_id)]);

        io.to(curr_room_id.toString()).emit('player_move', {
           playerColor: curr_color[rooms.indexOf(parseInt(curr_room_id))], //meeee...
               from: {
               x: data.from.x,
               y: data.from.y
           },
           to: {
               x: data.to.x,
               y: data.to.y
           }
       });
        if (curr_color[rooms.indexOf(parseInt(curr_room_id))]=="white"){curr_color[rooms.indexOf(parseInt(curr_room_id))]="black";}
        else curr_color[rooms.indexOf(parseInt(curr_room_id))]="white";
    });


    socket.on('turn_castling', function(data){
        var curr_room_id = Object.keys(socket.rooms)[0];
        io.to(Object.keys(socket.rooms)[0].toString()).emit('player_castling', {
            playerColor: curr_color[rooms.indexOf(parseInt(curr_room_id))],
            from: {
                x: data.from.x,
                y: data.from.y
            }
        });
        if (curr_color[rooms.indexOf(parseInt(curr_room_id))]=="white"){curr_color[rooms.indexOf(parseInt(curr_room_id))]="black";}
        else curr_color[rooms.indexOf(parseInt(curr_room_id))]="white";
    });


    socket.on('turn_promotion',function(data){
        var curr_room_id = Object.keys(socket.rooms)[0];
        io.to(Object.keys(socket.rooms)[0].toString()).emit('player_promotion', {
            playerColor: curr_color[rooms.indexOf(parseInt(curr_room_id))],
            from: {
                x: data.from.x,
                y: data.from.y
            },
            to: {
                x: data.to.x,
                y: data.to.y
            },
            newPiece: data.newPiece
        });
        if (curr_color[rooms.indexOf(parseInt(curr_room_id))]=="white"){curr_color[rooms.indexOf(parseInt(curr_room_id))]="black";}
        else curr_color[rooms.indexOf(parseInt(curr_room_id))]="white";
    });



    socket.on('turn_mate', function(){

        io.to(Object.keys(socket.rooms)[0].toString()).emit('player_mate',{

        });
    });


    socket.on('turnValidation_mate',function(){
        //if (curr_color[rooms.indexOf(parseInt(curr_room_id))]=="white"){end("mate", "black");}
        //else end("mate", "white");
        var curr_room_id = Object.keys(socket.rooms)[0];
        end("mate", curr_color[rooms.indexOf(parseInt(curr_room_id))]);
    });


    socket.on('turn_draw', function(){

        io.to(Object.keys(socket.rooms)[0].toString()).emit('player_draw',{

        });
    });


    socket.on('turnValidation_draw',function(){
        //if (curr_color[rooms.indexOf(parseInt(curr_room_id))]=="white"){end("mate", "black");}
        //else end("mate", "white");
        var curr_room_id = Object.keys(socket.rooms)[0];
        if (curr_color[rooms.indexOf(parseInt(curr_room_id))]=="white"){end("draw", "black");}
        else end("draw", "white");
    });




    socket.on('turnValidation_invalid', function(){
        var curr_room_id = Object.keys(socket.rooms)[0];
        if (curr_color[rooms.indexOf(parseInt(curr_room_id))]=="white"){end("invalid turn", "black");}
        else end("invalid turn", "white");
    });



function end(msg, winner){
    io.to(Object.keys(socket.rooms)[0].toString()).emit('game_end',{
        msg: msg,
        winnerColor: winner /// null
    });
    //socket.rooms[0].sockets

    console.log("игра завершена");
}













    //socket.on()



    //
    //socket.emit('roomsList', function () {
    //    //Array[{
    //    //    roomID :string,
    //    //    length: int
    //    //}]
    //});
    //
    //socket.emit('game_found', function () {
    //
    //});
    //
    //socket.emit('player_move', function(){
    //
    //});
    //
    //socket.emit('player_castling', function(){
    //
    //});
    //
    //
    //socket.emit('player_promotion', function(){
    //
    //});
    //
    //socket.emit('player_mate', function(){
    //
    //});
    //
    //
    //socket.emit('player_draw', function(){
    //
    //});
    //
    //
    //socket.emit('game_end', function(){
    //
    //});









    //socket.on('message', function(data) {
    //    if (data.room != undefined) socket.broadcast.to(data.room).emit('message', socket.id + ':' + data.msg);
    //    else socket.broadcast.emit('message', socket.id + ':' + data.msg);
    //});
    //socket.on('info_port', function(data) {
    //    if (data === 'clients') {
    //        console.log('all_clients:');
    //        console.log(io.sockets.sockets);
    //    }
    //    if (data === 'rooms') {
    //        console.log('all rooms:');
    //        console.log(io.sockets.manager.rooms);
    //    }
    //    if (data === 'room_clients') {
    //        console.log('room clients:');
    //        console.log(io.sockets.clients('room1'));
    //    }
    //});
});