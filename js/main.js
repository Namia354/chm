/**
 * Created by Nika on 20.04.2016.
 */
///////////////////////////   DZ1
//function m(o, k){
//
//    //console.log(o);
//    //console.log('JQUERY '+jQuery.type(o));
//    //console.log("Тип входного объекта: "+typeof o);
//
//    if ((typeof(o)!=="object" || jQuery.type(o) === "function" || jQuery.type(o)==="array") &&k==1) { // ||
//        console.log("Некорректный тип : "+ jQuery.type(o)); return;
//    }
//
//    //if (o.length==0) {console.log("Объект пустой"); return;}
//    if (jQuery.type(o) === "null") { console.log("null ...Глубина: "+k); return;}
//    if (typeof o === "undefined") { console.log("underfined ...Глубина: "+k); return;}
//    if (typeof(o.valueOf())!=="object") {console.log(o.valueOf()+ " ...Глубина: "+k); return;}
//
//
//
//    for (var key in o) {
//
//        if (typeof(o[key])==="object") {
//            if (jQuery.type(o[key]) === "null") { console.log(key + ": null ...Глубина: "+k)}
//            else {
//                if (jQuery.type(o[key]) === "array") {
//                    console.log(key + ": массив ...Глубина: " + k)
//                }
//                else {
//
//                    if (typeof(o[key].valueOf()) !== "object") {
//                        console.log(key + ": " + o[key].valueOf() + " Тип: "+ jQuery.type(o[key])+ " ...Глубина: " + k)
//                    }
//                    else {
//                        console.log(key + ': объект ...Глубина: ' + k);
//                        m(o[key], ++k);
//                        k--;
//                    }
//                }
//            }
//        }
//        else
//        if (jQuery.type(o[key]) === "function") {
//            console.log(key + ": функция ...Глубина: " + k)
//        }
//        else {
//            if (typeof o[key] === "undefined") {
//                console.log(key + ": underfined ...Глубина: " + k)
//            }
//            else {
//                if (typeof o[key] === "boolean" || typeof o[key] === "number" || typeof o[key] === "string") {
//                    console.log(key + ': ' + o[key] + " Тип: "+ jQuery.type(o[key])+ " ...Глубина: " + k);
//                }
//                else {
//                    console.log(key + ": другой тип ...Глубина: " + k);
//                }
//            }
//        }
//
//
//
//
//
//    }
//
//
//
//}
////_object = {0:'1',1:2,3: {"утка":"blue", "маленькая уточка":{"кря":"крякря"}}, 4:"4",5:{"random":354}};
////m(_object, 1);
////
////var k = new Object();
////k.make = "Ford";
////k.model = "Mustang";
////k.year = 1969;
//
//
////k = [];
////m(obj,1);
//
//
////var k = [5,4,3];
//
//
////k = new Number("5");
////var k = new Object(false);
//function l() {}
//var n;
//var k = {
//    0:new String(108),
//    1:new Number("5.1"),
//    2: l,
//    3: {
//        "печенье":"yellow",
//        "второе печенье":{
//            "rand":"rand2"
//        },
//        "третье печенье": "red"
//    },
//    4:"4n",
//    5:{
//        "random":354
//    },
//    6:null,
//    7: n,
//    8: 890890,
//    9: [2,3,4]
//};
////var k = new Array();
////var k = null;
//
////
//m(k,1);


/////////////////////////////


//function s1(arr, up_down) {    //сортировка пузырьком
//    //for (var n=0; n< arr.length-1; n++)
//    //{
//    //    for (var n=0; n< arr.length-1; n++)
//    //}
//if (up_down==1) { // ВВЕРХ
//
//
//    var c = 0;
//
//
//   // for (var n in arr) {
//    for (var n = 0; n < arr.length - 1; n++) {
//        c++;
//        console.log("c="+ c);
//        //var kk = 0;
//        kk = Boolean(true)
//       // for (var k in arr) {
//        for (var k = 0; k < arr.length- n -1; k++){
//            if (arr[k] > arr[k+1]) {
//                //kk++;
//                kk=false;
//              //  console.log("kk"+kk);
//                var t = arr[k];
//                arr[k] = arr[k+1];
//                arr[k+1] = t;
//            }
//        }
//        if (kk)
//        {
//            for (var key in arr) {
//                console.log(arr[key]);
//            }
//            return;
//        }
//    }
//
//    for (var key in arr) {
//                console.log(arr[key]);
//            }
//
//}
//    else {   //ВНИЗ
//    var c=0;
//
//    for (var n = 0; n < arr.length - 1; n++) {
//        c++;
//        console.log("c="+ c);
//        //var kk = 0;
//        kk = Boolean(true)
//        // for (var k in arr) {
//        for (var k = 0; k < arr.length- n -1; k++){
//            if (arr[k] < arr[k+1]) {
//                //kk++;
//                kk = false;
//               // console.log("kk"+kk);
//                var t = arr[k];
//                arr[k] = arr[k+1];
//                arr[k+1] = t;
//            }
//        }
//        if (kk)
//        {
//            for (var key in arr) {
//                console.log(arr[key]);
//            }
//            return;
//        }
//    }
//    for (var key in arr) {
//        console.log(arr[key]);
//    }
//
//}
//
//
//
//
//
//}
//
////s1([2,5,1,4,8], 1);
////s1([1,2,3,4,5], 1);
////s1([5,4,3,2,1], 0);
//s1([4,8,2,9,3,0,6,84,23,432,1], 0);



//DZ2


function fill_peshka_white(all_area,n)
{
    for (var i=n[0];i<n[7]+1;i++)
    {
        var img1 = document.createElement('img');
        img1.src = "img/peshka_white.png";
        all_area[i].appendChild(img1);
        all_area[i].setAttribute("figure","peshka");
        all_area[i].setAttribute("color","white");
    }
}

function fill_peshka_black(all_area, n)
{

    for (var i=n[0];i<n[7]+1;i++)
    {
        var img1 = document.createElement('img');
        img1.src = "img/peshka_black.png";
        all_area[i].appendChild(img1);
        all_area[i].setAttribute("figure","peshka");
        all_area[i].setAttribute("color","black");
    }
}

function fill_horse_white(all_area,n)
{
    for (var i=0; i<2;i++)
    {
        var img1 = document.createElement('img');
        img1.src = "img/horse_white.png";
        all_area[n[i]].appendChild(img1);
        all_area[n[i]].setAttribute("figure","horse");
        all_area[n[i]].setAttribute("color","white");
    }

}
function fill_horse_black(all_area,n)
{
    for (var i=0; i<2;i++) {
        var img1 = document.createElement('img');
        img1.src = "img/horse_black.png";
        all_area[n[i]].appendChild(img1);
        all_area[n[i]].setAttribute("figure","horse");
        all_area[n[i]].setAttribute("color","black");

    }
}

function fill_tower_white(all_area, n)
{
    for (var i=0; i<2;i++) {
        var img1 = document.createElement('img');
        img1.src = "img/tower_white.png";
        all_area[n[i]].appendChild(img1);
        all_area[n[i]].setAttribute("figure","tower");
        all_area[n[i]].setAttribute("color","white");
        all_area[n[i]].setAttribute("rok","true"); //для рокировки, если этой фигурой еще не был сделан ход
    }
}
function fill_tower_black(all_area,n)
{
    for (var i=0; i<2;i++) {
        var img1 = document.createElement('img');
        img1.src = "img/tower_black.png";
        all_area[n[i]].appendChild(img1);
        all_area[n[i]].setAttribute("figure","tower");
        all_area[n[i]].setAttribute("color","black");
        all_area[n[i]].setAttribute("rok","true");
    }

}

function fill_elephant_white(all_area, n)
{
    for (var i=0; i<2;i++) {
        var img1 = document.createElement('img');
        img1.src = "img/elephant_white.png";
        all_area[n[i]].appendChild(img1);
        all_area[n[i]].setAttribute("figure","elephant");
        all_area[n[i]].setAttribute("color","white");
    }

}
function fill_elephant_black(all_area,n)
{
    for (var i=0; i<2;i++) {
        var img1 = document.createElement('img');
        img1.src = "img/elephant_black.png";
        all_area[n[i]].appendChild(img1);
        all_area[n[i]].setAttribute("figure","elephant");
        all_area[n[i]].setAttribute("color","black");
    }

}

function fill_quenn_white(all_area,n)
{
    var img1 = document.createElement('img');
    img1.src = "img/quenn_white.png";
    all_area[n].appendChild(img1);
    all_area[n].setAttribute("figure","quenn");
    all_area[n].setAttribute("color","white");
}
function fill_quenn_black(all_area, n)
{
    var img1 = document.createElement('img');
    img1.src = "img/quenn_black.png";
    all_area[n].appendChild(img1);
    all_area[n].setAttribute("figure","quenn");
    all_area[n].setAttribute("color","black");
}


function fill_king_white(all_area,n)
{
    var img1 = document.createElement('img');
    img1.src = "img/king_white.png";
    all_area[n].appendChild(img1);
    all_area[n].setAttribute("figure","king");
    all_area[n].setAttribute("color","white");
    all_area[n].setAttribute("rok","true");
}
function fill_king_black(all_area,n)
{
    var img1 = document.createElement('img');
    img1.src = "img/king_black.png";
    all_area[n].appendChild(img1);
    all_area[n].setAttribute("figure","king");
    all_area[n].setAttribute("color","black");
    all_area[n].setAttribute("rok","true");
}

function first_fill(all_area)
{

    fill_peshka_white(all_area, [48,49,50,51,52,53,54,55]);
    fill_peshka_black(all_area,[8,9,10,11,12,13,14,15]);

    fill_horse_white(all_area, [57,62]);
    fill_horse_black(all_area, [1,6]);

    fill_tower_white(all_area,[56,63]);
    fill_tower_black(all_area,[0,7]);

    fill_elephant_white(all_area, [58,61]);
    fill_elephant_black(all_area, [2,5]);

    fill_quenn_white(all_area, 59);
    fill_quenn_black(all_area, 3);

    fill_king_white(all_area, 60);
    fill_king_black(all_area, 4);


}




function main_func()
{



    var socket = io.connect('http://localhost:9898');




    function show(state){
        document.getElementById('window').style.display = state;
        document.getElementById('wrap').style.display = state;
    }

    function make_table(){ //создание таблицы и картинки и текста под доской если снизу белые, то как обычно. если черные - то с 63 до 0
        var _bkv = ["A", "B", "C", "D", "E", "F", "G", "H"];

        var _text = " <p style='font-size: 2em;  text-align: center'></p>";
        document.write(_text);

        var pic_back = "  <img height='530' width='530' src='img/background_table.png' border=0 >";
        document.getElementById('back_desc_div').innerHTML = pic_back;
        var _table = "<table height='496' width='496' id='main_table_desc' cellspacing='0' cellpadding='0' border='0' background='img/MAIN_desc_min.png'>";
        var n = 1;
        for (var i=0; i<8;i++)
        {
            _table+="<tr>";
            for (var j=0;j<8;j++)
            {

                _table += "<td id='place_" + n + "' width='62' height=62 align='center'></td>";

                n++;

            }
            _table+="</tr>";


        }
        _table+="</table>";
        document.getElementById('main_desc_div').innerHTML = _table;

        var m = 1;
        for (var i=0; i<8;i++) {
            for (var j = 0; j < 8; j++) {
                document.getElementById('place_' + m).setAttribute("value", _bkv[j] + (8 - i).toString());
                m++;
            }
        }






    }



    //var lower = "black";
    //var upper = "white";//// ЕСЛИ БЕЛЫЕ Сверху
    var lower = "white";
    var upper = "black";//// ЕСЛИ БЕЛЫЕ СНИЗУ
    var peshka_figure = "";
    var number_peshka_figure=0;
    make_table();
    var all_area = [];

    if (lower==="white") {
        for (var i=0; i<64; i++)
        {
            all_area[i] =  document.getElementById('place_'+(i+1));
        }

    }
    else{
        for (var i=0; i<64; i++)
        {
            all_area[i] =  document.getElementById('place_'+(64-i));
        }

    }

    for (var k in all_area)
    {
        all_area[k].setAttribute("figure","empty"); //пусто
        all_area[k].setAttribute("color","empty");

    }

    first_fill(all_area);


    var making_move = false; //тыкнул на фигуру и ждешь, пока не тыкнешь на новое место - true
    var first_move = "white"; // текущий ход
    var current_figure = ""; //текущая фигура
    var old_area = 0; //место предыдущего...тыка? (место выбранной фигуры, для которой выбирается ход)
    var current_free_area=[]; //доступные ячейки для выбранной фигуры

    var na_prohode=null;

    var rok_available_white = true;
    var rok_available_black = true;

    var _shah_b = false;
    var _shah_w = false;
    var PROMOTION=false;

    var real_hod=false;







    socket.on('game_end', function(data){
        alert('игра завершена');
        document.getElementById('window_rooms').style.display = "block";
    });


    var MY_COLOR; //УБРАТЬ

    socket.on('game_found', function(data) {
        MY_COLOR=data.color;

        alert("Цвет:"+ MY_COLOR);
        document.getElementById('window_rooms').style.display = "none";
       // alert("smth");
    });


    socket.on('player_mate', function(data){

        is_shah(MY_COLOR, true);
    });


    socket.on('player_draw', function(data){
        if (MY_COLOR==="white"){
            is_pat("black");
        }
        else is_pat("white");


    });

    socket.on('player_move', function(data) {
        //alert("data.color"+data.playerColor);
       // alert("MY_COLOR"+ MY_COLOR);
        if (data.playerColor!==MY_COLOR)
        {
           // alert("data.from.x.toString() "+data.from.x);
            var _s_numb = coord_for_serv([data.from.x,data.from.y]);
           // alert(_s_numb);
            main_func_for_cells(_s_numb, false);
            var _s_numb_to = coord_for_serv([data.to.x,data.to.y]);
          // alert("_s_numb_to "+_s_numb_to);
            main_func_for_cells(_s_numb_to, false);
        }
    });

    socket.on('player_castling', function(data) {
        if (data.playerColor!==MY_COLOR){
            var _s_l = coord_for_serv([data.from.x,data.from.y]);
            if (_s_l===0){
                main_func_for_cells(4,false);
                main_func_for_cells(1,false);
            }
            else {
                if (_s_l===7){
                    main_func_for_cells(4,false);
                    main_func_for_cells(6,false);
                }
                else{
                    if (_s_l===56){
                        main_func_for_cells(60,false);
                        main_func_for_cells(57,false);
                    }
                    else{
                        if (_s_l===63){
                            main_func_for_cells(60,false);
                            main_func_for_cells(62,false);
                        }
                    }
                }
            }
        }
    });

    socket.on('player_promotion', function (data) {
        if (data.playerColor!==MY_COLOR) {
            var _s_pesh = coord_for_serv([data.from.x, data.from.y]);
            // alert(_s_numb);
            main_func_for_cells(_s_pesh, false);
            var _s_pesh_to = coord_for_serv([data.to.x, data.to.y]);
            main_func_for_cells(_s_pesh_to, false);
            if (data.newPiece === "queen") {
                peshka_figure = "quenn";
            }
            else {
                if (data.newPiece === "bishop") {
                    peshka_figure = "elephant";
                }
                else{
                    if (data.newPiece==="rook"){
                        peshka_figure="tower";
                    }
                    else{
                        if (data.newPiece==="knight"){
                            peshka_figure="horse";
                        }
                    }
                }
            }

            main_func_for_cells(_s_pesh_to,false);


        }
    });

    function START_AGAIN()
    {
        _shah_b = false;
        _shah_w = false;
        na_prohode=null;
        //ЗАПИЛИТЬ СЮДА ДОСКУ ЗАНОВО
        lower = "white";
        upper = "black";
        peshka_figure="";
        number_peshka_figure=0;
        making_move = false;
        first_move = "white";
        current_figure = "";
        old_area = 0;
        current_free_area=[];
        var rok_available_white = true;
        var rok_available_black = true;
        document.getElementById('text_sh_m_w').innerHTML="";
        document.getElementById('text_after_table').innerHTML ="";

        for (var i in all_area)
        {
            if (all_area[i].getAttribute("color")!=="empty")
            {
                all_area[i].setAttribute("color","empty");
                all_area[i].setAttribute("figure","empty");
                all_area[i].firstChild.remove();
            }
        }

        first_fill(all_area);
    }


    function change_pic_select(word,numb, _color)
    {
        var img1 = document.createElement('img');
        if (_color === "white"){ //белый
            img1.src = "img/"+word+"_white_select.png";
        }
        else{
            img1.src = "img/"+word+"_black_select.png";
        }
        all_area[numb].firstChild.remove();
        all_area[numb].appendChild(img1);
    }

    function reverse_select_pic(_current_numb, _current_color, _current_figure)
    {
        var _current_img = document.createElement('img');
        _current_img.src = "img/"+_current_figure+"_"+_current_color+".png";
        all_area[_current_numb].firstChild.remove();
        all_area[_current_numb].appendChild(_current_img);
    }

    function main_func_for_cells(numb, real)    //ОСНОВНАЯ ФУНКЦИЯ, НА ВХОД НОМЕР КЛЕТКИ
    {




        document.getElementById('text_error').innerHTML ="";
        if (first_move!== MY_COLOR && real) {return;}
        if (all_area[numb].getAttribute("figure")==="empty"&& !making_move){return;} //выбор фигуры и клик на пустом поле
        if (all_area[numb].getAttribute("figure")!="empty" && !making_move) { //выбор фигуры и клик не на пустом поле
            current_free_area = []; //сброс доступных ячеек для выбранной фигуры
            if (first_move === all_area[numb].getAttribute("color")) { //если цвет текущего хода = цвету выбранной фигуры
                if (all_area[numb].getAttribute("figure") === "peshka") {

                    current_free_area = check_empty("peshka", numb, first_move, true);
                    change_pic_select("peshka", numb, first_move);
                }
                else
                {
                    if (all_area[numb].getAttribute("figure") === "tower") {
                        current_free_area = check_empty("tower",numb, first_move,true);
                        change_pic_select("tower", numb, first_move);

                    }
                    else {
                        if (all_area[numb].getAttribute("figure") === "horse") {
                            current_free_area = check_empty("horse",numb, first_move,true);
                            change_pic_select("horse", numb, first_move);

                        }
                        else {
                            if (all_area[numb].getAttribute("figure") === "elephant") {
                                current_free_area =  check_empty("elephant",numb, first_move,true);
                                change_pic_select("elephant", numb, first_move);

                            }
                            else {
                                if (all_area[numb].getAttribute("figure") === "quenn") {
                                    current_free_area =  check_empty("quenn",numb, first_move,true);
                                    change_pic_select("quenn", numb, first_move);

                                }
                                else {
                                    if (all_area[numb].getAttribute("figure") === "king") {
                                        current_free_area = check_empty("king",numb, first_move,true);
                                        change_pic_select("king", numb, first_move);

                                    }
                                }
                            }
                        }
                    }
                }
                current_figure = all_area[numb].getAttribute("figure");
                old_area = numb;

                making_move = true;
            }
            else {
                if (all_area[numb].getAttribute("color") !== first_move) {
                   // alert("fisrt_move "+ first_move);
                    //alert("all_area[numb].getAttribute( "+ all_area[numb].getAttribute("color"));

                    document.getElementById('text_error').innerHTML ="Вы не можете ходить этой фигурой";
                    return;
                }
            }



        }

        else if (making_move===true && all_area[numb].getAttribute("color")!==first_move)
        {

            if (check_current_free(current_free_area,numb)) {
                PROMOTION=false;
                var serv_figure;

                if (current_figure === "peshka") {
                    if (first_move === "white") {
                        var img1 = document.createElement('img');
                        if (numb>=0 && numb<=7){ //СТАНОВИТСЯ ДАМКОЙ //if фигура=="", то, что ниже. если нет - в зависимости от фигуры и идем дальше
                            if (peshka_figure!=="") {
                                img1.src = "img/"+peshka_figure+"_white.png";
                                if (all_area[numb].getAttribute("figure") !== "empty") {
                                    all_area[numb].firstChild.remove();
                                }
                                all_area[numb].appendChild(img1);
                                all_area[numb].setAttribute("figure", peshka_figure);
                                if (peshka_figure==="horse"){serv_figure="knight" }
                                else{
                                    if (peshka_figure==="tower") { serv_figure="rook"}
                                    else {
                                        if (peshka_figure === "quenn") {
                                            serv_figure = "queen"
                                        }
                                        else {
                                            if (peshka_figure === "elephant") {
                                                serv_figure = "bishop"
                                            }
                                        }
                                    }
                                }
                                peshka_figure="";
                                PROMOTION=true;
                                if (first_move===MY_COLOR) {
                                    socket.emit("turn_promotion", {
                                        from: {
                                            x: all_area[old_area].getAttribute("value")[0],
                                            y: parseInt(all_area[old_area].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                        },
                                        to: {
                                            x: all_area[numb].getAttribute("value")[0],
                                            y: parseInt(all_area[numb].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                        },
                                        newPiece: serv_figure
                                    });
                                }

                            }
                            else {
                                number_peshka_figure = numb;
                                if (real) show('block');
                                return;
                            }

                            //вызвать функцию, которая показывает окно с выбором фигур, потом return; после каждого клика вызывать main функцию, фигура выше в переменных
                        }
                        else{
                            img1.src = "img/peshka_white.png";
                            if (all_area[numb].getAttribute("figure")!=="empty"){
                                all_area[numb].firstChild.remove();
                            }
                            all_area[numb].appendChild(img1);
                            all_area[numb].setAttribute("figure", "peshka");
                        }
                        // alert("numb"+numb);
                        //  alert("na_pr"+na_prohode);
                        if (numb===na_prohode){
                            //alert(back_coord([coord(numb)[0]-1,coord(numb)[1]]));
                            all_area[back_coord([coord(numb)[0]+1,coord(numb)[1]])].setAttribute("figure", "empty");
                            all_area[back_coord([coord(numb)[0]+1,coord(numb)[1]])].setAttribute("color", "empty");
                            all_area[back_coord([coord(numb)[0]+1,coord(numb)[1]])].firstChild.remove();
                        }
                        //else{
                            //alert("me");
                            if (!PROMOTION) {
                                if (first_move===MY_COLOR) {
                                    socket.emit("turn_move", {
                                        from: {
                                            x: all_area[old_area].getAttribute("value")[0],
                                            y: parseInt(all_area[old_area].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                        },
                                        to: {
                                            x: all_area[numb].getAttribute("value")[0],
                                            y: parseInt(all_area[numb].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                        }
                                    });
                                }
                            }
                        //}
                        na_prohode=null;

                        if (coord(numb)[0]===coord(old_area)[0]-2){
                            na_prohode=back_coord([coord(old_area)[0]-1,coord(old_area)[1]]);
                            //  alert(na_prohode);

                        }

                        all_area[numb].setAttribute("color", "white");
                        all_area[old_area].setAttribute("figure", "empty");
                        all_area[old_area].setAttribute("color", "empty");
                        all_area[old_area].firstChild.remove();
                        var _text2 = "Игрок1: пешка "+ all_area[old_area].getAttribute("value")+" - "+ all_area[numb].getAttribute("value")+"<br>";
                        document.getElementById('text_after_table').innerHTML = _text2 + document.getElementById('text_after_table').innerHTML;


                    }
                    else {
                        var img2 = document.createElement('img');
                        if (numb>=56 && numb<=63){ //СТАНОВИТСЯ ДАМКОЙ
                            if (peshka_figure!=="") {
                                img2.src = "img/"+peshka_figure+"_black.png";
                                if (all_area[numb].getAttribute("figure") !== "empty") {
                                    all_area[numb].firstChild.remove();
                                }
                                all_area[numb].appendChild(img2);
                                all_area[numb].setAttribute("figure", peshka_figure);

                                if (peshka_figure==="horse"){serv_figure="knight" }
                                else{
                                    if (peshka_figure==="tower") { serv_figure="rook"}
                                    else {
                                        if (peshka_figure === "quenn") {
                                            serv_figure = "queen"
                                        }
                                        else {
                                            if (peshka_figure === "elephant") {
                                                serv_figure = "bishop"
                                            }
                                        }
                                    }
                                }
                                peshka_figure="";
                                PROMOTION=true;
                                if (first_move===MY_COLOR) {
                                    socket.emit("turn_promotion", {
                                        from: {
                                            x: all_area[old_area].getAttribute("value")[0],
                                            y: parseInt(all_area[old_area].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                        },
                                        to: {
                                            x: all_area[numb].getAttribute("value")[0],
                                            y: parseInt(all_area[numb].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                        },
                                        newPiece: serv_figure
                                    });
                                }

                            }
                            else {
                                number_peshka_figure = numb;
                                if (real) show('block');
                                return;
                            }
                        }
                        else{
                            img2.src = "img/peshka_black.png";
                            if (all_area[numb].getAttribute("figure")!=="empty"){
                                all_area[numb].firstChild.remove();
                            }
                            all_area[numb].appendChild(img2);
                            all_area[numb].setAttribute("figure", "peshka");
                        }

                        if (numb===na_prohode){
                            //  alert(back_coord([coord(numb)[0]+1,coord(numb)[1]]));
                            all_area[back_coord([coord(numb)[0]-1,coord(numb)[1]])].setAttribute("figure", "empty");
                            all_area[back_coord([coord(numb)[0]-1,coord(numb)[1]])].setAttribute("color", "empty");
                            all_area[back_coord([coord(numb)[0]-1,coord(numb)[1]])].firstChild.remove();
                        }
                        //else{
                            if (!PROMOTION) {
                                if (first_move===MY_COLOR) {
                                    socket.emit("turn_move", {
                                        from: {
                                            x: all_area[old_area].getAttribute("value")[0],
                                            y: parseInt(all_area[old_area].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                        },
                                        to: {
                                            x: all_area[numb].getAttribute("value")[0],
                                            y: parseInt(all_area[numb].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                        }
                                    });
                                }
                            }
                        //}
                        na_prohode=null;

                        if (coord(numb)[0]===coord(old_area)[0]+2){
                            na_prohode=back_coord([coord(old_area)[0]+1,coord(old_area)[1]]);
                            // alert(na_prohode);

                        }



                        all_area[numb].setAttribute("color", "black");
                        all_area[old_area].setAttribute("figure", "empty");
                        all_area[old_area].setAttribute("color", "empty");
                        all_area[old_area].firstChild.remove();
                        var _text2 = "Игрок2: пешка "+ all_area[old_area].getAttribute("value")+" - "+ all_area[numb].getAttribute("value")+"<br>";
                        document.getElementById('text_after_table').innerHTML = _text2 + document.getElementById('text_after_table').innerHTML;

                       // alert(all_area[old_area].getAttribute("value")[0]);
                       // alert(all_area[old_area].getAttribute("value").substr(1,all_area[old_area].getAttribute("value").length));
                       // alert(all_area[numb].getAttribute("value")[0]);
                       // alert(all_area[numb].getAttribute("value").substr(1,all_area[old_area].getAttribute("value").length));
                       // socket.emit("turn_move", {
                       //     from: {
                       //         x: all_area[old_area].getAttribute("value")[0],
                       //         y: parseInt(all_area[old_area].getAttribute("value").substr(1,all_area[old_area].getAttribute("value").length))
                       //     },
                       //     to: {
                       //         x:  all_area[numb].getAttribute("value")[0],
                       //         y:  parseInt(all_area[numb].getAttribute("value").substr(1,all_area[old_area].getAttribute("value").length))
                       //     }
                       // });

                    }
                }
                else {
                    if (current_figure === "horse") {
                        if (na_prohode!==null && all_area[numb].getAttribute("figure") !== "peshka"){
                            na_prohode=null;
                        }
                        if (first_move === "white") {
                            var img1 = document.createElement('img');
                            img1.src = "img/horse_white.png";
                            if (all_area[numb].getAttribute("figure") !== "empty") {
                                all_area[numb].firstChild.remove();
                            }
                            all_area[numb].appendChild(img1);
                            all_area[numb].setAttribute("figure", "horse");
                            all_area[numb].setAttribute("color", "white");
                            all_area[old_area].setAttribute("figure", "empty");
                            all_area[old_area].setAttribute("color", "empty");
                            all_area[old_area].firstChild.remove();
                            var _text2 = "Игрок1: конь "+ all_area[old_area].getAttribute("value")+" - "+ all_area[numb].getAttribute("value")+"<br>";
                            document.getElementById('text_after_table').innerHTML = _text2 + document.getElementById('text_after_table').innerHTML;
                            if (first_move===MY_COLOR) {
                                socket.emit("turn_move", {
                                    from: {
                                        x: all_area[old_area].getAttribute("value")[0],
                                        y: parseInt(all_area[old_area].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                    },
                                    to: {
                                        x: all_area[numb].getAttribute("value")[0],
                                        y: parseInt(all_area[numb].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                    }
                                });
                            }
                        }
                        else {
                            var img2 = document.createElement('img');
                            img2.src = "img/horse_black.png";
                            if (all_area[numb].getAttribute("figure") !== "empty") {
                                all_area[numb].firstChild.remove();
                            }
                            all_area[numb].appendChild(img2);
                            all_area[numb].setAttribute("figure", "horse");
                            all_area[numb].setAttribute("color", "black");
                            all_area[old_area].setAttribute("figure", "empty");
                            all_area[old_area].setAttribute("color", "empty");
                            all_area[old_area].firstChild.remove();
                            var _text2 = "Игрок2: конь "+ all_area[old_area].getAttribute("value")+" - "+ all_area[numb].getAttribute("value")+"<br>";
                            document.getElementById('text_after_table').innerHTML = _text2 + document.getElementById('text_after_table').innerHTML;
                            if (first_move===MY_COLOR) {
                                socket.emit("turn_move", {
                                    from: {
                                        x: all_area[old_area].getAttribute("value")[0],
                                        y: parseInt(all_area[old_area].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                    },
                                    to: {
                                        x: all_area[numb].getAttribute("value")[0],
                                        y: parseInt(all_area[numb].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                    }
                                });
                            }
                        }
                    }
                    else {
                        if (current_figure === "tower") {
                            if (na_prohode!==null && all_area[numb].getAttribute("figure") !== "peshka"){
                                na_prohode=null;
                            }
                            all_area[numb].setAttribute("rok","false");
                            if (first_move === "white") {
                                var img1 = document.createElement('img');
                                img1.src = "img/tower_white.png";
                                if (all_area[numb].getAttribute("figure") !== "empty") {
                                    all_area[numb].firstChild.remove();
                                }
                                all_area[numb].appendChild(img1);
                                all_area[numb].setAttribute("figure", "tower");
                                all_area[numb].setAttribute("color", "white");
                                all_area[old_area].setAttribute("figure", "empty");
                                all_area[old_area].setAttribute("color", "empty");
                                all_area[old_area].firstChild.remove();
                                var _text2 = "Игрок1: ладья "+ all_area[old_area].getAttribute("value")+" - "+ all_area[numb].getAttribute("value")+"<br>";
                                document.getElementById('text_after_table').innerHTML = _text2 + document.getElementById('text_after_table').innerHTML;
                                if (first_move===MY_COLOR) {
                                    socket.emit("turn_move", {
                                        from: {
                                            x: all_area[old_area].getAttribute("value")[0],
                                            y: parseInt(all_area[old_area].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                        },
                                        to: {
                                            x: all_area[numb].getAttribute("value")[0],
                                            y: parseInt(all_area[numb].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                        }
                                    });
                                }

                            }
                            else {
                                var img2 = document.createElement('img');
                                img2.src = "img/tower_black.png";
                                if (all_area[numb].getAttribute("figure") !== "empty") {
                                    all_area[numb].firstChild.remove();
                                }
                                all_area[numb].appendChild(img2);
                                all_area[numb].setAttribute("figure", "tower");
                                all_area[numb].setAttribute("color", "black");
                                all_area[old_area].setAttribute("figure", "empty");
                                all_area[old_area].setAttribute("color", "empty");
                                all_area[old_area].firstChild.remove();
                                var _text2 = "Игрок2: ладья "+ all_area[old_area].getAttribute("value")+" - "+ all_area[numb].getAttribute("value")+"<br>";
                                document.getElementById('text_after_table').innerHTML = _text2 + document.getElementById('text_after_table').innerHTML;
                                if (first_move===MY_COLOR) {
                                    socket.emit("turn_move", {
                                        from: {
                                            x: all_area[old_area].getAttribute("value")[0],
                                            y: parseInt(all_area[old_area].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                        },
                                        to: {
                                            x: all_area[numb].getAttribute("value")[0],
                                            y: parseInt(all_area[numb].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                        }
                                    });
                                }
                            }
                        }
                        else {
                            if (current_figure === "elephant") {
                                if (na_prohode!==null && all_area[numb].getAttribute("figure") !== "peshka"){
                                    na_prohode=null;
                                }
                                if (first_move === "white") {
                                    var img1 = document.createElement('img');
                                    img1.src = "img/elephant_white.png";
                                    if (all_area[numb].getAttribute("figure") !== "empty") {
                                        all_area[numb].firstChild.remove();
                                    }
                                    all_area[numb].appendChild(img1);
                                    all_area[numb].setAttribute("figure", "elephant");
                                    all_area[numb].setAttribute("color", "white");
                                    all_area[old_area].setAttribute("figure", "empty");
                                    all_area[old_area].setAttribute("color", "empty");
                                    all_area[old_area].firstChild.remove();
                                    var _text2 = "Игрок1: слон "+ all_area[old_area].getAttribute("value")+" - "+ all_area[numb].getAttribute("value")+"<br>";
                                    document.getElementById('text_after_table').innerHTML = _text2 + document.getElementById('text_after_table').innerHTML;
                                    if (first_move===MY_COLOR) {
                                        socket.emit("turn_move", {
                                            from: {
                                                x: all_area[old_area].getAttribute("value")[0],
                                                y: parseInt(all_area[old_area].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                            },
                                            to: {
                                                x: all_area[numb].getAttribute("value")[0],
                                                y: parseInt(all_area[numb].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                            }
                                        });
                                    }}
                                else {
                                    var img2 = document.createElement('img');
                                    img2.src = "img/elephant_black.png";
                                    if (all_area[numb].getAttribute("figure") !== "empty") {
                                        all_area[numb].firstChild.remove();
                                    }
                                    all_area[numb].appendChild(img2);
                                    all_area[numb].setAttribute("figure", "elephant");
                                    all_area[numb].setAttribute("color", "black");
                                    all_area[old_area].setAttribute("figure", "empty");
                                    all_area[old_area].setAttribute("color", "empty");
                                    all_area[old_area].firstChild.remove();
                                    var _text2 = "Игрок2: слон "+ all_area[old_area].getAttribute("value")+" - "+ all_area[numb].getAttribute("value")+"<br>";
                                    document.getElementById('text_after_table').innerHTML = _text2 + document.getElementById('text_after_table').innerHTML;
                                    if (first_move===MY_COLOR) {
                                    socket.emit("turn_move", {
                                        from: {
                                            x: all_area[old_area].getAttribute("value")[0],
                                            y: parseInt(all_area[old_area].getAttribute("value").substr(1,all_area[old_area].getAttribute("value").length))
                                        },
                                        to: {
                                            x:  all_area[numb].getAttribute("value")[0],
                                            y:  parseInt(all_area[numb].getAttribute("value").substr(1,all_area[old_area].getAttribute("value").length))
                                        }
                                    });}}
                            }
                            else {
                                if (current_figure === "quenn") {
                                    if (na_prohode!==null && all_area[numb].getAttribute("figure") !== "peshka"){
                                        na_prohode=null;
                                    }
                                    if (first_move === "white") {
                                        var img1 = document.createElement('img');
                                        img1.src = "img/quenn_white.png";
                                        if (all_area[numb].getAttribute("figure") !== "empty") {
                                            all_area[numb].firstChild.remove();
                                        }
                                        all_area[numb].appendChild(img1);
                                        all_area[numb].setAttribute("figure", "quenn");
                                        all_area[numb].setAttribute("color", "white");
                                        all_area[old_area].setAttribute("figure", "empty");
                                        all_area[old_area].setAttribute("color", "empty");
                                        all_area[old_area].firstChild.remove();
                                        var _text2 = "Игрок1: ферзь "+ all_area[old_area].getAttribute("value")+" - "+ all_area[numb].getAttribute("value")+"<br>";
                                        document.getElementById('text_after_table').innerHTML = _text2 + document.getElementById('text_after_table').innerHTML;
                                        if (first_move===MY_COLOR) {
                                        socket.emit("turn_move", {
                                            from: {
                                                x: all_area[old_area].getAttribute("value")[0],
                                                y: parseInt(all_area[old_area].getAttribute("value").substr(1,all_area[old_area].getAttribute("value").length))
                                            },
                                            to: {
                                                x:  all_area[numb].getAttribute("value")[0],
                                                y:  parseInt(all_area[numb].getAttribute("value").substr(1,all_area[old_area].getAttribute("value").length))
                                            }
                                        });}}
                                    else {
                                        var img2 = document.createElement('img');
                                        img2.src = "img/quenn_black.png";
                                        if (all_area[numb].getAttribute("figure") !== "empty") {
                                            all_area[numb].firstChild.remove();
                                        }
                                        all_area[numb].appendChild(img2);
                                        all_area[numb].setAttribute("figure", "quenn");
                                        all_area[numb].setAttribute("color", "black");
                                        all_area[old_area].setAttribute("figure", "empty");
                                        all_area[old_area].setAttribute("color", "empty");
                                        all_area[old_area].firstChild.remove();
                                        var _text2 = "Игрок2: ферзь "+ all_area[old_area].getAttribute("value")+" - "+ all_area[numb].getAttribute("value")+"<br>";
                                        document.getElementById('text_after_table').innerHTML = _text2 + document.getElementById('text_after_table').innerHTML;
                                        if (first_move===MY_COLOR) {
                                        socket.emit("turn_move", {
                                            from: {
                                                x: all_area[old_area].getAttribute("value")[0],
                                                y: parseInt(all_area[old_area].getAttribute("value").substr(1,all_area[old_area].getAttribute("value").length))
                                            },
                                            to: {
                                                x:  all_area[numb].getAttribute("value")[0],
                                                y:  parseInt(all_area[numb].getAttribute("value").substr(1,all_area[old_area].getAttribute("value").length))
                                            }
                                        });}
                                    }
                                }
                                else {
                                    if (current_figure === "king") {
                                        var is_rok=false;
                                        if (na_prohode!==null && all_area[numb].getAttribute("figure") !== "peshka"){
                                            na_prohode=null;
                                        }
                                        function make_rok(x,y,_c_color,l){
                                            all_area[x].setAttribute("color", "empty");
                                            all_area[x].setAttribute("figure", "empty");
                                            all_area[x].firstChild.remove();
                                            all_area[y].setAttribute("rok", "false");
                                            all_area[y].setAttribute("color", _c_color);
                                            all_area[y].setAttribute("figure", "tower");
                                            var img_t = document.createElement('img');
                                            img_t.src = "img/tower_"+_c_color+".png";
                                            all_area[y].appendChild(img_t);
                                            _text2 += "Игрок"+l+" выполнил рокировку<br>";


                                           // alert( all_area[x].getAttribute("value"));
                                            if (first_move===MY_COLOR) {
                                                socket.emit("turn_castling", {

                                                    from: {
                                                        x: all_area[x].getAttribute("value")[0],
                                                        y: parseInt(all_area[x].getAttribute("value").substr(1, all_area[x].getAttribute("value").length))
                                                    }

                                                });
                                            }

                                        }
                                        all_area[numb].setAttribute("rok","false");
                                        if (first_move === "white") {
                                            var img1 = document.createElement('img');
                                            img1.src = "img/king_white.png";
                                            if (all_area[numb].getAttribute("figure") !== "empty") {
                                                all_area[numb].firstChild.remove();
                                            }
                                            all_area[numb].appendChild(img1);
                                            all_area[numb].setAttribute("figure", "king");
                                            all_area[numb].setAttribute("color", "white");
                                            all_area[old_area].setAttribute("figure", "empty");
                                            all_area[old_area].setAttribute("color", "empty");
                                            all_area[old_area].firstChild.remove();
                                            var _text2 = "Игрок1: король "+ all_area[old_area].getAttribute("value")+" - "+ all_area[numb].getAttribute("value")+"<br>";


                                            if (rok_available_white) {
                                                if (coord(numb)[1] == coord(old_area)[1] - 2) { //рокировка
                                                    //all_area[56].setAttribute("color", "empty");
                                                    //all_area[56].setAttribute("figure", "empty");
                                                    //all_area[56].firstChild.remove();
                                                    //all_area[numb + 1].setAttribute("rok", "false");
                                                    //all_area[numb + 1].setAttribute("color", "white");
                                                    //all_area[numb + 1].setAttribute("figure", "tower");
                                                    //var img_t = document.createElement('img');
                                                    //img_t.src = "img/tower_white.png";
                                                    //all_area[numb + 1].appendChild(img_t);
                                                    //_text2 += "Игрок1 выполнил рокировку";
                                                    make_rok(56,numb+1,"white",1);
                                                    is_rok=true;
                                                }
                                                if (coord(numb)[1] == coord(old_area)[1] + 2){
                                                    make_rok(63,numb-1,"white",1);
                                                    is_rok=true;
                                                }
                                                rok_available_white = false;
                                            }
                                            if (!is_rok){
                                                if (first_move===MY_COLOR) {
                                                    socket.emit("turn_move", {
                                                        from: {
                                                            x: all_area[old_area].getAttribute("value")[0],
                                                            y: parseInt(all_area[old_area].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                                        },
                                                        to: {
                                                            x: all_area[numb].getAttribute("value")[0],
                                                            y: parseInt(all_area[numb].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                                        }
                                                    });
                                                }
                                            }
                                            document.getElementById('text_after_table').innerHTML = _text2 + document.getElementById('text_after_table').innerHTML;
                                        }
                                        else {
                                            var img2 = document.createElement('img');
                                            img2.src = "img/king_black.png";
                                            if (all_area[numb].getAttribute("figure") !== "empty") {
                                                all_area[numb].firstChild.remove();
                                            }
                                            all_area[numb].appendChild(img2);
                                            all_area[numb].setAttribute("figure", "king");
                                            all_area[numb].setAttribute("color", "black");
                                            all_area[old_area].setAttribute("figure", "empty");
                                            all_area[old_area].setAttribute("color", "empty");
                                            all_area[old_area].firstChild.remove();
                                            var _text2 = "Игрок2: король "+ all_area[old_area].getAttribute("value")+" - "+ all_area[numb].getAttribute("value")+"<br>";
                                            //alert("rok_available_black " +rok_available_black);

                                            if (rok_available_black) {
                                                if (coord(numb)[1] == coord(old_area)[1] - 2) { //рокировка
                                                    make_rok(0,numb+1,"black",2);
                                                    is_rok=true;
                                                }
                                                if (coord(numb)[1] == coord(old_area)[1] + 2){
                                                    make_rok(7,numb-1,"black",2);
                                                    is_rok=true;
                                                }
                                                rok_available_black = false;
                                            }
                                            if (!is_rok){
                                                if (first_move===MY_COLOR) {
                                                    socket.emit("turn_move", {
                                                        from: {
                                                            x: all_area[old_area].getAttribute("value")[0],
                                                            y: parseInt(all_area[old_area].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                                        },
                                                        to: {
                                                            x: all_area[numb].getAttribute("value")[0],
                                                            y: parseInt(all_area[numb].getAttribute("value").substr(1, all_area[old_area].getAttribute("value").length))
                                                        }
                                                    });
                                                }
                                            }
                                            document.getElementById('text_after_table').innerHTML = _text2 + document.getElementById('text_after_table').innerHTML;
                                        }
                                    }
                                }
                            }
                        }

                    }
                }

               // alert(all_area[old_area].getAttribute("value") + "----> "+  all_area[numb].getAttribute("value"))

                if (_shah_b) _shah_b=false;
                if (_shah_w) _shah_w=false;
                making_move = false; //ход сделали, следующий клик - выбор фигуры
                //if (check_win(all_area,first_move)) {
                //    //if (first_move==="white") alert("Выиграл Игрок1");
                //    //else  alert("Выиграл Игрок2");
                //    //START_AGAIN();
                //    //return;
                //}
                var _chk_wn = check_win(first_move);
                if (_chk_wn==="white"){
                    alert("Выиграл Игрок2");
                   // START_AGAIN();
                    return;
                }
                if (_chk_wn==="black"){
                    alert("Выиграл Игрок1");
                   // START_AGAIN();
                    return;
                }
                if (first_move === "white") {
                    first_move = "black";
                }
                else {
                    first_move = "white";
                }




            }

            else   {
                if (first_move===MY_COLOR) { // ...if (!real) ?
                    socket.emit("turnValidation_invalid", {});
                }
                document.getElementById('text_error').innerHTML = "Недопустимый ход";
            }


        }
        else {
            making_move = false;

            reverse_select_pic(old_area,first_move,all_area[old_area].getAttribute("figure"));
            main_func_for_cells(numb, true);
            //    select_cell();
        }
    }

    //$('#main_desc_div').click(function(){
    //    main_func_for_cells(this.getElementById());
    //})

    function coord_for_serv(_bkv){ //принимает "A1", возвращает 0-63
        var al= ["A","B","C","D","E","F","G","H"];
        var kk=[7,6,5,4,3,2,1,0];

        var st = _bkv[1];
        var _st=parseInt(st-1);

       // alert(back_coord( parseInt(st-1), parseInt($.inArray(_bkv[0],al))));
        return(back_coord( [kk[_st], parseInt($.inArray(_bkv[0],al))]));
    }

    function coord(_numb){ //возвращает строку/столбец
        var coord = [];

        coord[0] = _numb/8 >> 0;
        coord[1] = _numb%8;

        return(coord);


    }



    function back_coord(coord){ //принимает строку/столбец, возвращает 0-63

        return(coord[0]*8+coord[1]);
    }


    function is_pat(current_clr){
        var _temp=[];
        var all_current_free_area=[];
        for (var n in all_area)
        {
            if (all_area[n].getAttribute("color")===current_clr){
                _temp = check_empty(all_area[n].getAttribute("figure"), Number(n),current_clr, true);
                $.merge(all_current_free_area, _temp);
            }
        }
        return (all_current_free_area.length===0);
    }

    function is_current_shah(n,next_n,current_clr){
        var clr;
        if (current_clr==="white") clr = "black";
        else clr = "white";
        var f_cur = all_area[n].getAttribute("figure");
        var f = all_area[next_n].getAttribute("figure");
        var k=all_area[next_n].getAttribute("color");
        all_area[n].setAttribute("color","empty");
        all_area[n].setAttribute("figure","empty");
        all_area[next_n].setAttribute("color",current_clr);
        all_area[next_n].setAttribute("figure",f_cur);
        if (is_shah(clr,false)===1){
            all_area[next_n].setAttribute("color",k);
            all_area[next_n].setAttribute("figure",f);
            all_area[n].setAttribute("color",current_clr);
            all_area[n].setAttribute("figure",f_cur);
            return false;
        }
        all_area[next_n].setAttribute("color",k);
        all_area[next_n].setAttribute("figure",f);
        all_area[n].setAttribute("color",current_clr);
        all_area[n].setAttribute("figure",f_cur);
        return true;
    }

    function is_shah(color_move, need_mat){ //color_move - тот, кто угрожает
        var clr;
        if (color_move==="white") clr = "black";
        else clr = "white";
        var _king_place = Number();
        var all_current_free_area=[];
        var _temp=[];

        for (var n in all_area){
            if (all_area[n].getAttribute("color")===clr && all_area[n].getAttribute("figure")==="king"){
                // alert(n);
                _king_place=Number(n);
                break;
            }
        }


        for (var n in all_area)
        {
            if (all_area[n].getAttribute("color")===color_move){
                //  alert(all_area[n].getAttribute("figure")+"  "+n+"   ");
                _temp = check_empty(all_area[n].getAttribute("figure"), Number(n),color_move, false);
                // alert(_temp.length);
                $.merge(all_current_free_area, _temp);
            }
        }

        if ($.inArray(_king_place, all_current_free_area) !== -1) {
            if (need_mat) {
                if (is_mat(color_move, all_current_free_area, _king_place, clr)) {
                    return 2;
                }
                // }
                //if ( need_mat) {
                if (color_move === "white") {
                    document.getElementById('text_sh_m_b').innerHTML = "Шах Игроку2";
                    var _text2 = "Игрок1 поставил шах Игроку2<br>";
                     _shah_b = true;
                    document.getElementById('text_after_table').innerHTML = _text2 + document.getElementById('text_after_table').innerHTML;
                    ;
                }
                else {
                    document.getElementById('text_sh_m_w').innerHTML = "Шах Игроку1";
                    var _text2 = "Игрок2 поставил шах Игроку1<br>";
                    _shah_w = true;
                    document.getElementById('text_after_table').innerHTML = _text2 + document.getElementById('text_after_table').innerHTML;
                    ;
                }
            }
            return 1;

        }

        if (color_move==="white") document.getElementById('text_sh_m_b').innerHTML ="";
        else document.getElementById('text_sh_m_w').innerHTML ="";



        return 0;
    }

    function is_mat(color_move, all_current_free_area, _king_place, clr){
        all_current_free_area.length=0;
        var all_current_free_kings_area=[];
        var istrue=true;
        var all_temp=[];
        var k="empty";
        all_current_free_kings_area = check_empty("king", _king_place,clr,true);
        all_current_free_kings_area.push(_king_place);



        //alert("king_place"+_king_place);


        for (var z in all_current_free_kings_area) {
            k= all_area[all_current_free_kings_area[z]].getAttribute("color");
            all_area[_king_place].setAttribute("color", "empty");

            all_area[all_current_free_kings_area[z]].setAttribute("color", clr);
            for (var n in all_area)
            {
                if (all_area[n].getAttribute("color")===color_move){
                    all_temp = check_empty(all_area[n].getAttribute("figure"), Number(n),color_move,false);
                    $.merge(all_current_free_area, all_temp);

                }

            }

            if ($.inArray(all_current_free_kings_area[z]+0, all_current_free_area) === -1) {
                istrue =false;
            }
            all_area[_king_place].setAttribute("color", clr);
            all_area[all_current_free_kings_area[z]].setAttribute("color", k);
            all_current_free_area.length=0;

        }

        all_current_free_area.length=0;
        var _all_temp=[];

        for (var x in all_area){
            if (all_area[x].getAttribute("color")===clr && all_area[x].getAttribute("figure")!=="king"){
                all_temp = check_empty(all_area[x].getAttribute("figure"), Number(x),clr,false);
                for (var z in all_temp){
                    all_area[x].setAttribute("color", "empty");
                    k= all_area[all_temp[z]].getAttribute("color");
                    all_area[all_temp[z]].setAttribute("color", clr);
                    for (var n in all_area)
                    {
                        if (all_area[n].getAttribute("color")===color_move){
                            _all_temp = check_empty(all_area[n].getAttribute("figure"), Number(n),color_move,false);
                            if (all_area[n].getAttribute("figure")==="quenn")
                                $.merge(all_current_free_area, _all_temp);


                        }

                    }


                    if ($.inArray(_king_place+0, all_current_free_area) === -1) {
                        istrue =false;
                        //return false;
                    }



                    all_area[x].setAttribute("color", clr);
                    all_area[all_temp[z]].setAttribute("color", k);
                    all_current_free_area.length=0;
                }



            }
        }
        if (istrue){
            if (color_move==="white"){
                document.getElementById('text_sh_m_b').innerHTML ="Шах и мат Игроку2";
                var _text2="Игрок1 поставил шах и мат Игроку2<br>";
                document.getElementById('text_after_table').innerHTML = _text2+ document.getElementById('text_after_table').innerHTML;
                if (MY_COLOR==="black") {
                    socket.emit("turn_mate", {

                    });
                }
                else {
                    socket.emit("turnValidation_mate",{

                    });
                }
            }
            else {
                document.getElementById('text_sh_m_w').innerHTML ="Шах и мат Игроку1";
                var _text2="Игрок2 поставил шах и мат Игроку1<br>";
                document.getElementById('text_after_table').innerHTML = _text2+ document.getElementById('text_after_table').innerHTML;
                if (MY_COLOR==="white") {
                    socket.emit("turn_mate", {

                    });
                }
                else {
                    socket.emit("turnValidation_mate",{

                    });
                }
            }
            return true;
        }
    }




    $( "#choose_tower" ).click(function() {
        show('none');
        peshka_figure="tower";
        main_func_for_cells(number_peshka_figure, true);
    });

    $( "#choose_elephant" ).click(function() {
        show('none');
        peshka_figure="elephant";
        main_func_for_cells(number_peshka_figure, true);
    });

    $( "#choose_quenn" ).click(function() {
        show('none');
        peshka_figure="quenn";
        main_func_for_cells(number_peshka_figure, true);
    });

    $( "#choose_horse" ).click(function() {
        show('none');
        peshka_figure="horse";
        main_func_for_cells(number_peshka_figure, true);
    });


    $("#button_room").click(function(){
        socket.emit("game_find");
    });

    $("#button_room_left").click(function(){
        socket.emit("game_stopFinding");
    });



    all_area[0].onclick = function(){
        main_func_for_cells(0, true);

    };
    all_area[1].onclick = function(){
        main_func_for_cells(1, true);
    };
    all_area[2].onclick = function(){
        main_func_for_cells(2, true);
    };
    all_area[3].onclick = function(){
        main_func_for_cells(3, true);
    };
    all_area[4].onclick = function(){
        main_func_for_cells(4, true);
    };
    all_area[5].onclick = function(){
        main_func_for_cells(5, true);
    };
    all_area[6].onclick = function(){
        main_func_for_cells(6, true);
    };

    all_area[7].onclick = function(){
        main_func_for_cells(7, true);
    };
    all_area[8].onclick = function(){
        main_func_for_cells(8, true);
    };
    all_area[9].onclick = function(){
        main_func_for_cells(9, true);
    };
    all_area[10].onclick = function(){
        main_func_for_cells(10, true);
    };
    all_area[11].onclick = function(){
        main_func_for_cells(11, true);
    };
    all_area[12].onclick = function(){
        main_func_for_cells(12, true);
    };
    all_area[13].onclick = function(){
        main_func_for_cells(13, true);
    };
    all_area[14].onclick = function(){
        main_func_for_cells(14, true);
    };
    all_area[15].onclick = function(){
        main_func_for_cells(15, true);
    };

    all_area[16].onclick = function(){
        main_func_for_cells(16, true);
    };
    all_area[17].onclick = function(){
        main_func_for_cells(17, true);
    };
    all_area[18].onclick = function(){
        main_func_for_cells(18, true);
    };
    all_area[19].onclick = function(){
        main_func_for_cells(19, true);
    };
    all_area[20].onclick = function(){
        main_func_for_cells(20, true);
    };
    all_area[21].onclick = function(){
        main_func_for_cells(21, true);
    };
    all_area[22].onclick = function(){
        main_func_for_cells(22, true);
    };
    all_area[23].onclick = function(){
        main_func_for_cells(23, true);
    };
    all_area[24].onclick = function(){
        main_func_for_cells(24, true);
    };
    all_area[25].onclick = function(){
        main_func_for_cells(25, true);
    };
    all_area[26].onclick = function(){
        main_func_for_cells(26, true);
    };
    all_area[27].onclick = function(){
        main_func_for_cells(27, true);
    };
    all_area[28].onclick = function(){
        main_func_for_cells(28, true);
    };
    all_area[29].onclick = function(){
        main_func_for_cells(29, true);
    };
    all_area[30].onclick = function(){
        main_func_for_cells(30, true);
    };
    all_area[31].onclick = function(){
        main_func_for_cells(31, true);
    };
    all_area[32].onclick = function(){
        main_func_for_cells(32, true);
    };
    all_area[33].onclick = function(){
        main_func_for_cells(33, true);
    };
    all_area[34].onclick = function(){
        main_func_for_cells(34, true);
    };
    all_area[35].onclick = function(){
        main_func_for_cells(35, true);
    };
    all_area[36].onclick = function(){
        main_func_for_cells(36, true);
    };
    all_area[37].onclick = function(){
        main_func_for_cells(37, true);
    };
    all_area[38].onclick = function(){
        main_func_for_cells(38, true);
    };
    all_area[39].onclick = function(){
        main_func_for_cells(39, true);
    };
    all_area[40].onclick = function(){
        main_func_for_cells(40, true);
    };
    all_area[41].onclick = function(){
        main_func_for_cells(41, true);
    };
    all_area[42].onclick = function(){
        main_func_for_cells(42, true);
    };
    all_area[43].onclick = function(){
        main_func_for_cells(43, true);
    };
    all_area[44].onclick = function(){
        main_func_for_cells(44, true);
    };
    all_area[45].onclick = function(){
        main_func_for_cells(45, true);
    };
    all_area[46].onclick = function(){
        main_func_for_cells(46, true);
    };
    all_area[47].onclick = function(){
        main_func_for_cells(47, true);
    };
    all_area[48].onclick = function(){
        main_func_for_cells(48, true);
    };
    all_area[49].onclick = function(){
        main_func_for_cells(49, true);
    };
    all_area[50].onclick = function(){
        main_func_for_cells(50, true);
    };
    all_area[51].onclick = function(){
        main_func_for_cells(51, true);
    };

    all_area[52].onclick = function(){
        main_func_for_cells(52, true);
    };

    all_area[53].onclick = function(){
        main_func_for_cells(53, true);
    };

    all_area[54].onclick = function(){
        main_func_for_cells(54, true);
    };

    all_area[55].onclick = function(){
        main_func_for_cells(55, true);
    };

    all_area[56].onclick = function(){
        main_func_for_cells(56, true);
    };

    all_area[57].onclick = function(){
        main_func_for_cells(57, true);
    };

    all_area[58].onclick = function(){
        main_func_for_cells(58, true);
    };

    all_area[59].onclick = function(){
        main_func_for_cells(59, true);
    };

    all_area[60].onclick = function(){
        main_func_for_cells(60, true);
    };
    all_area[61].onclick = function(){
        main_func_for_cells(61, true);
    };
    all_area[62].onclick = function(){
        main_func_for_cells(62, true);
    };
    all_area[63].onclick = function(){
        main_func_for_cells(63, true);
    };




    function check_win(cr_cl)
    {
        //проверка на съеденного короля, окда


        if (cr_cl==="white"){
            if (is_shah("white",true)===2){
                return "black";
            }
            if (check_king_win("black")==="black"){
                return "black";
            }
        }
        else {


            if (is_shah("black", true) === 2) {
                return "white";
            }
            if (check_king_win("white") === "white") {
                return "white";
            }
        }

        if (is_pat("white")) {
            var _text2 = "У Игрока1 патовая ситуация</br>";
            document.getElementById('text_after_table').innerHTML = _text2 + document.getElementById('text_after_table').innerHTML;
            if (MY_COLOR==="white") {
                socket.emit("turn_draw", {

                });
            }
            else {
                socket.emit("turnValidation_draw",{

                });
            }
            return "white";
        }
        if (is_pat("black")){
            var _text2= "У Игрока2 патовая ситуация</br>";
            document.getElementById('text_after_table').innerHTML = _text2+document.getElementById('text_after_table').innerHTML;
            if (MY_COLOR==="black") {
                socket.emit("turn_draw", {

                });
            }
            else {
                socket.emit("turnValidation_draw",{

                });
            }
            return "black";
        }



        return "";
        function check_king_win(_color){
            for (var i in all_area)
            {
                if (all_area[i].getAttribute("color")===_color && all_area[i].getAttribute("figure")==="king")
                    return "";
            }
            return _color;
        }
    }

    function check_current_free(current_free_area,numb) {
        for (var i = 0; i < current_free_area.length; i++) {
            if (current_free_area[i] === numb) {
                return true;
            }
        }
        return false;
    }

    function check_empty(type_of_figure, i, move_color, second_shah){
        if (type_of_figure==="quenn"){
            return (check_empty_for_quenn(i, move_color,second_shah));
        }
        else if (type_of_figure==="king"){
            return(check_empty_for_king(i, move_color,second_shah));
        }
        else if (type_of_figure==="peshka"){
            return(check_empty_for_peshka(i, move_color,second_shah));
        }
        else if (type_of_figure==="tower" || type_of_figure==="elephant"){

            return(check_empty_for_elephant_tower(i, move_color,second_shah));
        }
        else if (type_of_figure==="horse"){
            return(check_empty_for_horse(i, move_color,second_shah));
        }


    }

    function check_empty_for_quenn(i, move_color,second_shah){
        var free_area=[];
        var _crd = coord(i);
        var clr;
        if (move_color==="white") clr = "black";
        else clr = "white";

        while (_crd[0]+1<=7){

            if (all_area[back_coord([_crd[0] + 1, _crd[1]])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0] + 1, _crd[1]])].getAttribute("color") === clr) {
                if (second_shah) {
                    if (is_current_shah(i, back_coord([_crd[0] + 1, _crd[1]]), move_color)) {
                        free_area.push(back_coord([_crd[0] + 1, _crd[1]]));
                    }
                } else  free_area.push(back_coord([_crd[0] + 1, _crd[1]]));

                if (all_area[back_coord([_crd[0] + 1, _crd[1]])].getAttribute("color") === clr){
                    break;
                }
                _crd[0]++;
            }
            else break;
        }
        _crd=coord(i);
        while (_crd[0]-1>=0){

            if (all_area[back_coord([_crd[0] - 1, _crd[1]])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0] - 1, _crd[1]])].getAttribute("color") === clr) {
                if (second_shah) {
                    if (is_current_shah(i, back_coord([_crd[0] - 1, _crd[1]]), move_color)) {
                        free_area.push(back_coord([_crd[0] - 1, _crd[1]]));
                    }
                } else  free_area.push(back_coord([_crd[0] - 1, _crd[1]]));
                if (all_area[back_coord([_crd[0] - 1, _crd[1]])].getAttribute("color") === clr){
                    break;
                }
                _crd[0]--;
            }
            else break;
        }
        _crd=coord(i);
        while (_crd[1]-1>=0){

            if (all_area[back_coord([_crd[0], _crd[1] - 1])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0],  _crd[1] - 1])].getAttribute("color") === clr) {
                if (second_shah) {
                    if (is_current_shah(i, back_coord([_crd[0], _crd[1] - 1]), move_color)) {
                        free_area.push(back_coord([_crd[0], _crd[1] - 1]));
                    }
                }else free_area.push(back_coord([_crd[0], _crd[1] - 1]));
                if (all_area[back_coord([_crd[0], _crd[1] - 1])].getAttribute("color") === clr){
                    break;
                }
                _crd[1]--;
            }
            else break;
        }
        _crd=coord(i);
        while (_crd[1]+1<=7){

            if (all_area[back_coord([_crd[0], _crd[1] + 1])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0],  _crd[1] + 1])].getAttribute("color") === clr) {
                if (second_shah) {
                    if (is_current_shah(i, back_coord([_crd[0], _crd[1] + 1]), move_color)) {
                        free_area.push(back_coord([_crd[0], _crd[1] + 1]));
                    }
                } else free_area.push(back_coord([_crd[0], _crd[1] + 1]));
                if (all_area[back_coord([_crd[0], _crd[1] + 1])].getAttribute("color") === clr){
                    break;
                }
                _crd[1]++;
            }
            else break;
        }
        _crd=coord(i);
        while (_crd[1]+1<=7 && _crd[0]+1<=7){

            if (all_area[back_coord([_crd[0]+1, _crd[1] + 1])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0]+1,  _crd[1] + 1])].getAttribute("color") === clr) {
                if (second_shah) {
                    if (is_current_shah(i, back_coord([_crd[0] + 1, _crd[1] + 1]), move_color)) {
                        free_area.push(back_coord([_crd[0] + 1, _crd[1] + 1]));
                    }
                }else free_area.push(back_coord([_crd[0] + 1, _crd[1] + 1]));
                if (all_area[back_coord([_crd[0]+1, _crd[1] + 1])].getAttribute("color") === clr){
                    break;
                }
                _crd[0]++;
                _crd[1]++;

            }
            else break;
        }
        _crd=coord(i);
        while (_crd[1]-1>=0 && _crd[0]-1>=0){

            if (all_area[back_coord([_crd[0]-1, _crd[1] - 1])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0]-1,  _crd[1] - 1])].getAttribute("color") === clr) {
                if (second_shah) {
                    if (is_current_shah(i, back_coord([_crd[0] - 1, _crd[1] - 1]), move_color)) {
                        free_area.push(back_coord([_crd[0] - 1, _crd[1] - 1]));
                    }
                }else free_area.push(back_coord([_crd[0] - 1, _crd[1] - 1]));
                if (all_area[back_coord([_crd[0]-1, _crd[1] - 1])].getAttribute("color") === clr){
                    break;
                }
                _crd[0]--;
                _crd[1]--;

            }
            else break;
        }
        _crd=coord(i);
        while (_crd[0]+1<=7 && _crd[1]-1>=0){

            if (all_area[back_coord([_crd[0]+1, _crd[1] - 1])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0]+1,  _crd[1] - 1])].getAttribute("color") === clr) {
                if (second_shah) {
                    if (is_current_shah(i, back_coord([_crd[0] + 1, _crd[1] - 1]), move_color)) {
                        free_area.push(back_coord([_crd[0] + 1, _crd[1] - 1]));
                    }
                }else free_area.push(back_coord([_crd[0] + 1, _crd[1] - 1]));
                if (all_area[back_coord([_crd[0]+1, _crd[1] - 1])].getAttribute("color") === clr){
                    break;
                }
                _crd[0]++;
                _crd[1]--;

            }
            else break;
        }
        _crd=coord(i);
        while (_crd[0]-1>=0 && _crd[1]+1<=7){

            if (all_area[back_coord([_crd[0]-1, _crd[1] + 1])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0]-1,  _crd[1] + 1])].getAttribute("color") === clr) {
                if (second_shah) {
                    if (is_current_shah(i, back_coord([_crd[0] - 1, _crd[1] + 1]), move_color)) {
                        free_area.push(back_coord([_crd[0] - 1, _crd[1] + 1]));
                    }
                }else  free_area.push(back_coord([_crd[0] - 1, _crd[1] + 1]));
                if (all_area[back_coord([_crd[0]-1, _crd[1] + 1])].getAttribute("color") === clr){
                    break;
                }
                _crd[0]--;
                _crd[1]++;

            }
            else break;
        }
        return free_area;

    }

    function check_empty_for_king(i, move_color,second_shah)
    {
        var free_area=[];
        var _crd = coord(i);
        var clr;
        if (move_color==="white") clr = "black";
        else clr = "white";



        if (all_area[i].getAttribute("rok")==="true" && ((move_color==="white" && !_shah_w) || (move_color==="black" && !_shah_b))){
            if (all_area[i-1].getAttribute("color")==="empty" && all_area[i-2].getAttribute("color")==="empty" && all_area[i-2].getAttribute("color")==="empty"
                && all_area[i-4].getAttribute("figure")==="tower"){
                if (all_area[i-4].getAttribute("color") === move_color && all_area[i-4].getAttribute("rok")==="true"){
                    if (second_shah) {
                        if (is_current_shah(i, i - 2, move_color)) {
                            free_area.push(i - 2);
                        }
                    }else  free_area.push(i - 2);
                }

            }
            if (all_area[i+1].getAttribute("color")==="empty" && all_area[i+2].getAttribute("color")==="empty"
                && all_area[i+3].getAttribute("figure")==="tower"){
                if (all_area[i+3].getAttribute("color") === move_color && all_area[i+3].getAttribute("rok")==="true"){
                    if (second_shah) {
                        if (is_current_shah(i, i + 2, move_color)) {
                            free_area.push(i + 2);
                        }
                    }else  free_area.push(i + 2);
                }

            }
        }

        if (_crd[0]+1<=7) { //строка, столбец
            if (all_area[back_coord([_crd[0] + 1, _crd[1]])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0] + 1, _crd[1]])].getAttribute("color") === clr) {
                if (second_shah) {
                    if (is_current_shah(i, back_coord([_crd[0] + 1, _crd[1]]), move_color)) {
                        free_area.push(back_coord([_crd[0] + 1, _crd[1]]));
                    }
                }else free_area.push(back_coord([_crd[0] + 1, _crd[1]]));
            }
            if (_crd[1]+1<=7){
                if (all_area[back_coord([_crd[0] + 1, _crd[1]+1])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0] + 1, _crd[1]+1])].getAttribute("color") === clr) {
                    if (second_shah) {
                        if (is_current_shah(i, back_coord([_crd[0] + 1, _crd[1] + 1]), move_color)) {
                            free_area.push(back_coord([_crd[0] + 1, _crd[1] + 1]));
                        }
                    }else free_area.push(back_coord([_crd[0] + 1, _crd[1] + 1]));
                }
            }
            if (_crd[1]-1>=0){
                if (all_area[back_coord([_crd[0]+1, _crd[1]-1])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0]+1, _crd[1]-1])].getAttribute("color") === clr) {
                    if (second_shah) {
                        if (is_current_shah(i, back_coord([_crd[0] + 1, _crd[1] - 1]), move_color)) {
                            free_area.push(back_coord([_crd[0] + 1, _crd[1] - 1]));
                        }
                    }else   free_area.push(back_coord([_crd[0] + 1, _crd[1] - 1]));
                }
            }
        }
        if (_crd[1]+1<=7) {
            if (all_area[back_coord([_crd[0], _crd[1]+1])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0], _crd[1]+1])].getAttribute("color") === clr) {
                if (second_shah) {
                    if (is_current_shah(i, back_coord([_crd[0], _crd[1] + 1]), move_color)) {
                        free_area.push(back_coord([_crd[0], _crd[1] + 1]));
                    }
                }else   free_area.push(back_coord([_crd[0], _crd[1] + 1]));
            }
            if (_crd[0]-1>=0) {
                if (all_area[back_coord([_crd[0]-1, _crd[1]+1])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0]-1, _crd[1]+1])].getAttribute("color") === clr) {
                    if (second_shah) {
                        if (is_current_shah(i, back_coord([_crd[0] - 1, _crd[1] + 1]), move_color)) {
                            free_area.push(back_coord([_crd[0] - 1, _crd[1] + 1]));
                        }
                    }else free_area.push(back_coord([_crd[0] - 1, _crd[1] + 1]));
                }
            }
        }
        if (_crd[0]-1>=0) {
            if (all_area[back_coord([_crd[0]-1, _crd[1]])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0]-1, _crd[1]])].getAttribute("color") === clr) {
                if (second_shah) {
                    if (is_current_shah(i, back_coord([_crd[0] - 1, _crd[1]]), move_color)) {
                        free_area.push(back_coord([_crd[0] - 1, _crd[1]]));
                    }
                }else  free_area.push(back_coord([_crd[0] - 1, _crd[1]]));
            }
            if (_crd[1]-1>=0) {
                if (all_area[back_coord([_crd[0]-1, _crd[1]-1])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0]-1, _crd[1]-1])].getAttribute("color") === clr) {
                    if (second_shah) {
                        if (is_current_shah(i, back_coord([_crd[0] - 1, _crd[1] - 1]), move_color)) {
                            free_area.push(back_coord([_crd[0] - 1, _crd[1] - 1]));
                        }
                    }else free_area.push(back_coord([_crd[0] - 1, _crd[1] - 1]));
                }
            }
        }
        if (_crd[1]-1>=0){
            if (all_area[back_coord([_crd[0], _crd[1]-1])].getAttribute("color") === "empty" || all_area[back_coord([_crd[0], _crd[1]-1])].getAttribute("color") === clr) {
                if (second_shah) {
                    if (is_current_shah(i, back_coord([_crd[0], _crd[1] - 1]), move_color)) {
                        free_area.push(back_coord([_crd[0], _crd[1] - 1]));
                    }
                }else  free_area.push(back_coord([_crd[0], _crd[1] - 1]));
            }
        }
        return free_area;

    }

    function check_empty_for_horse(i, move_color,second_shah)
    {
        var free_area=[];
        var clr;
        if (move_color==="white") clr = upper;// "black";
        else clr = lower;//"white";
        if (i+16<=63) //вниз
        {
            if(end_of_desc("left",i+16)) {
                if (all_area[i+17].getAttribute("color")==="empty" || all_area[i+17].getAttribute("color")===clr)
                {
                    if (second_shah) {
                        if (is_current_shah(i, i + 17, move_color)) {
                            free_area.push(i + 17);
                        }
                    }else free_area.push(i + 17);
                }

            }else {
                if (end_of_desc("right", i + 16)) {
                    if (all_area[i+15].getAttribute("color")==="empty" || all_area[i+15].getAttribute("color")===clr)
                    {
                        if (second_shah) {
                            if (is_current_shah(i, i + 15, move_color)) {
                                free_area.push(i + 15);
                            }
                        }else  free_area.push(i + 15);
                    }
                }
                else{
                    if (all_area[i+17].getAttribute("color")==="empty" || all_area[i+17].getAttribute("color")===clr)
                    {
                        if (second_shah) {
                            if (is_current_shah(i, i + 17, move_color)) {
                                free_area.push(i + 17);
                            }
                        }else  free_area.push(i + 17);
                    }
                    if (all_area[i+15].getAttribute("color")==="empty" || all_area[i+15].getAttribute("color")===clr)
                    {
                        if (second_shah) {
                            if (is_current_shah(i, i + 15, move_color)) {
                                free_area.push(i + 15);
                            }
                        }else  free_area.push(i + 15);
                    }
                }
            }
        }

        if (i-16>=0) //вверх
        {
            if(end_of_desc("left",i-16)) {
                if (all_area[i-15].getAttribute("color")==="empty" || all_area[i-15].getAttribute("color")===clr)
                {
                    if (second_shah) {
                        if (is_current_shah(i, i - 15, move_color)) {
                            free_area.push(i - 15);
                        }
                    }else  free_area.push(i - 15);
                }

            }else {
                if (end_of_desc("right", i - 16)) {
                    if (all_area[i-17].getAttribute("color")==="empty" || all_area[i-17].getAttribute("color")===clr)
                    {
                        if (second_shah) {
                            if (is_current_shah(i, i - 17, move_color)) {
                                free_area.push(i - 17);
                            }
                        }else  free_area.push(i - 17);
                    }
                }
                else{
                    if (all_area[i-15].getAttribute("color")==="empty" || all_area[i-15].getAttribute("color")===clr)
                    {
                        if (second_shah) {
                            if (is_current_shah(i, i - 15, move_color)) {
                                free_area.push(i - 15);
                            }
                        }else  free_area.push(i - 15);
                    }
                    if (all_area[i-17].getAttribute("color")==="empty" || all_area[i-17].getAttribute("color")===clr)
                    {
                        if (second_shah) {
                            if (is_current_shah(i, i - 17, move_color)) {
                                free_area.push(i - 17);
                            }
                        }else  free_area.push(i - 17);
                    }
                }
            }
        }

        if (!end_of_desc("right",i) && !end_of_desc("right",i+1)) //вправо
        {
            if (i+10<=63) {
                if (all_area[i + 10].getAttribute("color") === "empty" || all_area[i + 10].getAttribute("color") === clr) {
                    if (second_shah) {
                        if (is_current_shah(i, i + 10, move_color)) {
                            free_area.push(i + 10);
                        }
                    }else    free_area.push(i + 10);
                }
            }
            if (i-6>=0)
            {
                if (all_area[i-6].getAttribute("color") === "empty" || all_area[i-6].getAttribute("color") === clr) {
                    if (second_shah) {
                        if (is_current_shah(i, i - 6, move_color)) {
                            free_area.push(i - 6);
                        }
                    }else  free_area.push(i - 6);
                }
            }
        }

        if (!end_of_desc("left",i) && !end_of_desc("left",i-1)) //влево
        {
            if (i+6<=63) {
                if (all_area[i + 6].getAttribute("color") === "empty" || all_area[i + 6].getAttribute("color") === clr) {
                    if (second_shah) {
                        if (is_current_shah(i, i + 6, move_color)) {
                            free_area.push(i + 6);
                        }
                    }else  free_area.push(i + 6);
                }
            }
            if (i-10>=0)
            {
                if (all_area[i-10].getAttribute("color") === "empty" || all_area[i-10].getAttribute("color") === clr) {
                    if (second_shah) {
                        if (is_current_shah(i, i - 10, move_color)) {
                            free_area.push(i - 10);
                        }
                    }else   free_area.push(i - 10);
                }
            }
        }
        return free_area;
    }



    function check_empty_for_elephant_tower(i, move_color, second_shah) //ДЛЯ ЛАДЬИ И СЛОНА
    {
        var free_area=[];
        var _fgr = all_area[i].getAttribute("figure");
        var clr;
        if (move_color==="white") clr = upper;// "black";
        else clr = lower;//"white";

        if (i===0)
        {

            if (_fgr==="elephant")
            {
                elephant_move(9);//down_right
            }
            if (_fgr==="tower") {

                tower_move(1); //RIGHT
                tower_move(8); //DOWN
            }
            return free_area;
        }
        if (i==56)
        {
            if (_fgr==="elephant")
            {
                elephant_move(-7);//up_right
            }
            if (_fgr==="tower") {
                tower_move(-8); //UP
                tower_move(1); //RIGHT
            }
            return free_area;
        }
        if (i==63)
        {
            if (_fgr==="elephant")
            {
                elephant_move(-9);//up_left
            }
            if (_fgr==="tower") {
                tower_move(-8); //UP
                tower_move(-1); //LEFT
            }
            return free_area;
        }
        if (i==7)
        {
            if (_fgr==="elephant")
            {
                elephant_move(7);//down_left
            }
            if (_fgr==="tower") {
                tower_move(8); //DOWN
                tower_move(-1); //LEFT
            }
            return free_area;
        }
        if (i===8 || i===16 || i===24 || i===32 || i===40 || i===48)
        {
            if (_fgr==="elephant")
            {
                elephant_move(-7);//up_right
                elephant_move(9);//down_right
            }
            if (_fgr==="tower") {
                tower_move(-8); //UP
                tower_move(8); //DOWN
                tower_move(1); //RIGHT
            }
            return free_area;
        }
        if (i===1 || i===2 || i===3 || i===4 || i===5 || i===6)
        {
            if (_fgr==="elephant")
            {
                elephant_move(7);//down_left
                elephant_move(9);//down_right
            }
            if (_fgr==="tower") {
                tower_move(8); //DOWN
                tower_move(-1); //LEFT
                tower_move(1); //RIGHT
            }
            return free_area;
        }
        if (i===15 || i===23 || i===31 || i===39 || i===47 || i===55)
        {
            if (_fgr==="elephant")
            {
                elephant_move(-9);//up_left
                elephant_move(7);//down_left
            }
            if (_fgr==="tower") {
                tower_move(-8); //UP
                tower_move(8); //DOWN
                tower_move(-1); //LEFT
            }
            return free_area;
        }
        if (i===57 || i===58 || i===59 || i===60 || i===61 || i===62)
        {
            if (_fgr==="elephant")
            {
                elephant_move(-9);//up_left
                elephant_move(-7);//up_right
            }
            if (_fgr==="tower") {
                tower_move(-8); //UP
                tower_move(-1); //LEFT
                tower_move(1); //RIGHT
            }
            return free_area;
        }

        if (_fgr==="elephant")
        {
            elephant_move(-9);//up_left
            elephant_move(-7);//up_right
            elephant_move(7);//down_left
            elephant_move(9);//down_right
        }

        if (_fgr==="tower") {
            tower_move(-8); //UP
            tower_move(8); //DOWN
            tower_move(-1); //LEFT
            tower_move(1); //RIGHT
        }
        return free_area;


        function elephant_move(ch)
        {
            var n=i;
            while (all_area[n + ch].getAttribute("color") === "empty" || all_area[n + ch].getAttribute("color") === clr) {
                if (second_shah) {
                    if (is_current_shah(i, n + ch, move_color)) {
                        free_area.push(n + ch);
                    }
                }else   free_area.push(n + ch);
                if (all_area[n + ch].getAttribute("color") === clr) return;
                n += ch;
                if (ch===-9){ //up_left
                    if (end_of_desc("up",n) || end_of_desc("left",n)) {
                        return;
                    }
                }
                else{
                    if (ch===-7) { //up_right
                        if (end_of_desc("up",n) || end_of_desc("right",n)) {
                            return;
                        }
                    }
                    else {
                        if (ch === 7) { //down_left
                            if (end_of_desc("down",n) || end_of_desc("left",n)) {
                                return;
                            }
                        }
                        else {
                            if (ch === 9) { //down_right
                                if (end_of_desc("down",n) || end_of_desc("right", n)) {
                                    return;
                                }
                            }
                        }
                    }
                }
                if (n+ch>63 || n+ch<0) return;
            }
        }


        function tower_move(ch)
        {
            // var free_area=[];
            var n=i;
            while (all_area[n + ch].getAttribute("color") === "empty" || all_area[n + ch].getAttribute("color") === clr) {
                if (second_shah) {
                    if (is_current_shah(i, n + ch, move_color)) {
                        free_area.push(n + ch);
                    }
                }else  free_area.push(n + ch);
                if (all_area[n + ch].getAttribute("color") === clr) return;
                n += ch;
                if (ch===-8){
                    if (end_of_desc("up",n)) {
                        return ;
                    }
                }
                else{
                    if (ch===8) {
                        if (end_of_desc("down", n)) {
                            return ;
                        }
                    }
                    else {
                        if (ch === -1) {
                            if (end_of_desc("left", n)) {
                                return ;
                            }
                        }
                        else {
                            if (ch === 1) {
                                if (end_of_desc("right", n)) {
                                    return ;
                                }
                            }
                        }
                    }
                }
                if (n+ch>63 || n+ch<0) return;
            }


        }




    }

    function end_of_desc(side,_i)
    {
        if (side==="up")
        {
            return (_i===0 || _i===1 || _i===2 || _i===3 || _i===4 || _i===5 || _i===6 || _i==7);

        }

        if (side==="down")
        {
            return (_i===56 || _i===57 || _i===58 || _i===59 || _i===60 || _i===61 || _i===62 || _i==63);

        }

        if (side==="left")
        {
            return (_i===0 || _i===8 || _i===16 || _i===24 || _i===32 || _i===40 || _i===48 || _i==56);

        }

        if (side==="right")
        {
            return (_i===7 || _i===15 || _i===23 || _i===31 || _i===39 || _i===47 || _i===55 || _i==63);

        }
    }


    function check_empty_for_peshka(i, move_color,second_shah) //ДОБАВИТЬ ВЗЯТИЕ НА ПРОХОДЕ
    {
        var free_area=[];
        if (move_color==="white") //движение вверх
        {
            if (i-8>=0)
            {
                if (all_area[i-8].getAttribute("color") === "empty")
                {
                    if (second_shah) {
                        if (is_current_shah(i, i - 8, move_color)) {
                            free_area.push(i - 8);
                        }
                    }else  free_area.push(i - 8);
                    if (i===48 || i===49 || i===50 || i===51 || i===52 || i===53 || i===54 || i===55)
                    {
                        if (all_area[i - 16].getAttribute("color") === "empty") {
                            if (second_shah) {
                                if (is_current_shah(i, i - 16, move_color)) {
                                    free_area.push(i - 16);
                                }
                            }else   free_area.push(i - 16);
                        }
                    }
                }
            }
            if (i===8 || i===16 || i===24 || i===32 || i===40 || i===48 || i===56)
            {
                if (all_area[i - 7].getAttribute("color") === upper || i-7===na_prohode) {
                    if (second_shah) {
                        if (is_current_shah(i, i - 7, move_color)) {
                            free_area.push(i - 7);
                        }
                    }else  free_area.push(i - 7);
                }
            }
            else {


                if (i === 15 || i === 23 || i === 31 || i === 39 || i === 47 || i === 55 || i === 63) {
                    if (all_area[i - 9].getAttribute("color") === upper || i-9===na_prohode ) {
                        if (second_shah) {
                            if (is_current_shah(i, i - 9, move_color)) {
                                free_area.push(i - 9);
                            }
                        }else  free_area.push(i - 9);
                    }
                }
                else
                {
                    if (all_area[i - 7].getAttribute("color") === upper || i-7===na_prohode) {
                        if (second_shah) {
                            if (is_current_shah(i, i - 7, move_color)) {
                                free_area.push(i - 7);
                            }
                        }else free_area.push(i - 7);
                    }
                    if (all_area[i - 9].getAttribute("color") === upper || i-9===na_prohode) {
                        if (second_shah) {
                            if (is_current_shah(i, i - 9, move_color)) {
                                free_area.push(i - 9);
                            }
                        }else  free_area.push(i - 9);
                    }
                }
            }



        }

        else {
            if (move_color === "black") //движение вниз
            {
                if (i + 8 <= 63) {
                    if (all_area[i + 8].getAttribute("color") === "empty") {
                        if (second_shah) {
                            if (is_current_shah(i, i + 8, move_color)) {
                                free_area.push(i + 8);
                            }
                        }else   free_area.push(i + 8);
                        if (i==8 ||i===9 || i===10 || i===11 || i===12 || i===13 || i===14 || i===15) {
                            if (all_area[i + 16].getAttribute("color") === "empty") {
                                if (second_shah) {
                                    if (is_current_shah(i, i + 16, move_color)) {
                                        free_area.push(i + 16);
                                    }
                                }else  free_area.push(i + 16);
                            }
                        }
                    }
                }

                if (i==0 ||i===8 || i===16 || i===24 || i===32 || i===40 || i===48)
                {
                    if (all_area[i + 9].getAttribute("color") === lower || i+9===na_prohode) {
                        if (second_shah) {
                            if (is_current_shah(i, i + 9, move_color)) {
                                free_area.push(i + 9);
                            }
                        }else   free_area.push(i + 9);
                    }
                }
                else {
                    if (i == 7 || i === 15 || i === 23 || i === 31 || i === 39 || i === 47 || i === 55) {
                        if (all_area[i + 7].getAttribute("color") === lower|| i+7===na_prohode) {
                            if (second_shah) {
                                if (is_current_shah(i, i + 7, move_color)) {
                                    free_area.push(i + 7);
                                }
                            }else   free_area.push(i + 7);
                        }
                    }
                    else
                    {
                        if (all_area[i + 7].getAttribute("color") === lower || i+7===na_prohode) {
                            if (second_shah) {
                                if (is_current_shah(i, i + 7, move_color)) {
                                    free_area.push(i + 7);
                                }
                            }else   free_area.push(i + 7);
                        }
                        if (all_area[i + 9].getAttribute("color") === lower|| i+9===na_prohode) {
                            if (second_shah) {
                                if (is_current_shah(i, i + 9, move_color)) {
                                    free_area.push(i + 9);
                                }
                            }else  free_area.push(i + 9);
                        }
                    }
                }
            }
        }
        return free_area;




        //return free_area;
    }


    function check_empty_for_anything(all_area, numb, free_area, first_move)
    {
        if (first_move==="white") {
            for (var i = 0; i < 64; i++) {
                if (all_area[i].getAttribute("color") !== lower) {
                    free_area.push(i);
                }

            }
        }
        else{
            for (var i = 0; i < 64; i++) {
                if (all_area[i].getAttribute("color") !== upper) {
                    free_area.push(i);
                }

            }
        }
        return free_area;

    }


}

//
main_func();
//

//function n1() {
//    var al=["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ь","ъ","ы","э","ю","я"];
//    var k="";
//    var z=0;
//    while (k!=="a"){
//        for (var i=0; i<3; i++){
//           // alert(Math.floor(Math.random()*32));
//            k+=al[Math.floor(Math.random() *33)];
//        }
//        //alert(k);
//        console.log(k);
//        if (k!=="ябл") k="";
//
//        z++;
//    }
//    alert(z);
//}
//
//n1();











