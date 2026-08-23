document.addEventListener("DOMContentLoaded", function () {
    var summaryBody = document.getElementById("summary-body");
    if (!summaryBody) {
        return;
    }

    var ordersTable = document.getElementById("orders-table");
    var productsTable = document.getElementById("products-table");
    var staffTable = document.getElementById("staff-table");

    var orderCount = 0;
    var deliveredCount = 0;
    var pendingCount = 0;
    var cancelledCount = 0;
    var revenueTotal = 0;

    if (ordersTable) {
        var orderRows = ordersTable.querySelectorAll("tbody tr");
        orderCount = orderRows.length;

        orderRows.forEach(function (row) {
            var cells = row.querySelectorAll("td");
            if (cells.length < 6) {
                return;
            }

            var total = parseFloat(cells[4].textContent) || 0;
            var status = cells[5].textContent.trim();

            revenueTotal += total;

            if (status === "Delivered") {
                deliveredCount += 1;
            } else if (status === "Pending") {
                pendingCount += 1;
            } else if (status === "Cancelled") {
                cancelledCount += 1;
            }
        });
    }

    var productCount = 0;
    var lowStockCount = 0;

    if (productsTable) {
        var productRows = productsTable.querySelectorAll("tbody tr");
        productCount = productRows.length;

        productRows.forEach(function (row) {
            var cells = row.querySelectorAll("td");
            if (cells.length < 5) {
                return;
            }
            var stock = parseInt(cells[4].textContent, 10) || 0;
            if (stock < 40) {
                lowStockCount += 1;
            }
        });
    }

    var staffCount = 0;
    var totalHours = 0;

    if (staffTable) {
        var staffRows = staffTable.querySelectorAll("tbody tr");
        staffCount = staffRows.length;

        staffRows.forEach(function (row) {
            var cells = row.querySelectorAll("td");
            if (cells.length < 5) {
                return;
            }
            totalHours += parseInt(cells[4].textContent, 10) || 0;
        });
    }

    var rows = [
        ["Total orders", String(orderCount)],
        ["Delivered", String(deliveredCount)],
        ["Pending", String(pendingCount)],
        ["Cancelled", String(cancelledCount)],
        ["Order revenue ($)", revenueTotal.toFixed(2)],
        ["Products listed", String(productCount)],
        ["Low stock items", String(lowStockCount)],
        ["Staff on shift", String(staffCount)],
        ["Total staff hours", String(totalHours)],
        ["Report generated", new Date().toISOString().slice(0, 19).replace("T", " ")]
    ];

    summaryBody.innerHTML = "";

    rows.forEach(function (item) {
        var tr = document.createElement("tr");

        var metricCell = document.createElement("td");
        metricCell.textContent = item[0];

        var valueCell = document.createElement("td");
        valueCell.textContent = item[1];

        tr.appendChild(metricCell);
        tr.appendChild(valueCell);
        summaryBody.appendChild(tr);
    });
});