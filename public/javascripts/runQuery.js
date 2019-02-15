function runQuery() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText)
            console.log(data);
            if (data.error) {
                var div = document.getElementById("statementTab");
                var table = document.getElementById("resultsTable");
                table.innerHTML = "";
                // console.log("ERROR: ")
                // console.log(data.error);
                div.innerHTML = data.error.code + "</br>" + "</br>" + data.error.sqlMessage;
                var tr = $("<tr></tr>");
                tr.append()

            } else {
                var headers = data.headers;
                var table = document.getElementById("resultsTable");
                var div = document.getElementById("statementTab");
                div.innerHTML = "";
                table.innerHTML = "";

                var tr = $("<tr></tr>");
                for (var i = 0; i < headers.length; i++) {
                    tr.append("<th>" + headers[i].name + "</th>")
                    //console.log(headers[i].name);
                }
                //console.log(tr)
                table.appendChild(tr[0]);


                var result = data.result;
                for (var i = 0; i < result.length; i++) {
                    tr = $("<tr></tr>");
                    for (var j = 0; j < headers.length; j++) {
                        tr.append("<td>" + result[i][headers[j].name] + "</td>")
                    }
                    table.append(tr[0]);
                }
                //console.log("TABLE: ");
                //console.log(table);
            }
        }
    };

    let sql = document.getElementById("textarea").innerHTML;
    console.log(sql);
    if (new RegExp(/<+|>+|&gt;|&lt;/g).test(sql)){
        console.log("regex match");
        xhttp.open("GET", "/query?query=" + encodeURIComponent(document.getElementById("textarea").innerHTML), true);
        xhttp.send();
    } else{
        try {
            SQLParser.parse(sql);
            console.log("successfully parsed");
            xhttp.open("GET", "/query?query=" + encodeURIComponent(document.getElementById("textarea").innerHTML), true);
            xhttp.send();
        } catch (err) {
            var table = document.getElementById("resultsTable");
            // console.log("error parsing");
            console.log(err);
            table.innerHTML = "</br>" + err + "</br></br>" + "Are there any blocks missing from your statement?";
        }
    }
}