function init() {
  // Get path
  var path = window.location.pathname;
  var page = path.split("/").pop();

  if (page == "dashboard.html") {
    alert("dashboard")

    var list_txns = txn_read();
    alert(JSON.stringify(list_txns));

    var obj_txn_tbody = document.getElementById("txn_tbody");
    for (var index=0; index<list_txns.length; index++) {
      console.log(list_txns[index]);
      var obj_txn = JSON.parse(list_txns[index]); 
      console.log(JSON.stringify(obj_txn));
    }

    var obj_tr = document.createElement("tr");
    var obj_td_id = document.createElement("td");
    var obj_td_timestamp = document.createElement("td");
    var obj_td_txn_hash = document.createElement("td");
    var obj_td_sig = document.createElement("td");
    var obj_td_tag = document.createElement("td");
    var obj_td_none = document.createElement("td");

    obj_td_id.innerHTML = "1";
    obj_td_timestamp.innerHTML = "1";
    obj_td_txn_hash.innerHTML = "1";
    obj_td_sig.innerHTML = "1";
    obj_td_tag.innerHTML = "1";
    obj_td_none.innerHTML = "1";

    obj_tr.append(obj_td_id);
    obj_tr.append(obj_td_timestamp);
    obj_tr.append(obj_td_txn_hash);
    obj_tr.append(obj_td_sig);
    obj_tr.append(obj_td_tag);
    obj_tr.append(obj_td_none);

    obj_txn_tbody.append(obj_tr);

    /*
    <tr>
        <td>000001</td>
        <td>2022/03/19 00:12</td>
        <td>N7Q4PR...</td>
        <td>1JdZnHiS...</td>
        <td>Model A</td>
        <td></td>
    </tr>
    */
  }

}