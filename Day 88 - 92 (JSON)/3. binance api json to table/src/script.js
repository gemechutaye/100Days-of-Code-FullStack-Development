
let makeTag = function(openTag, closeTag){
    return function(content){
       return openTag+content+closeTag;  
    };
};
let tHead = makeTag("<thead>","</thead>");
let tBody = makeTag("<tbody>","</tbody>");
let td    = makeTag("<td>","</td>");
let tr    = makeTag("<tr>","</tr>");

function insertBasicTable(data,id){
    $('#'+id).html(
        tHead(
            tr(
                td("Tag")+
                td("Data")
             )
        ) +
        tBody(
            Object.keys(data).reduce(function(o,n){
                return o + tr(
                    td(n) + "" +
                    td(data[n] + "")
                );
            },"")
        )
    );
};
// =========================================================
var burl = "https://api.binance.com";
var query = '/api/v1/ticker/24hr';    
query += '?symbol=BTCUSDT';
var url = burl + query;    
var ourRequest = new XMLHttpRequest();

ourRequest.open('GET',url,true);
ourRequest.onload = function(){
    console.log(ourRequest.responseText);
  let data = JSON.parse( ourRequest.responseText);
    console.log("type: " + typeof data);
      insertBasicTable( data,"mytable");
}
ourRequest.send();   

