document.addEventListener("DOMContentLoaded", function () {
    var queueBody = document.getElementById("queue-body");
    if (!queueBody) {
        return;
    }

    var queue = [
        ["1", "BP-103", "Mitu Akter", "8", "Called"],
        ["2", "BP-104", "Jamal Uddin", "15", "Waiting"],
        ["3", "BP-105", "Shila Begum", "22", "Waiting"],
        ["4", "BP-106", "Omar Faruk", "35", "Waiting"]
    ];

    queueBody.innerHTML = "";

    queue.forEach(function (item) {
        var tr = document.createElement("tr");

        item.forEach(function (value) {
            var td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });

        queueBody.appendChild(tr);
    });
});