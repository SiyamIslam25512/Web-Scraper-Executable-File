document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const selectedDate =
        params.get("date") ||
        params.get("d") ||
        params.get("start_date") ||
        params.get("day") ||
        "default";

    // ===== LIVE ORDERS =====
    const ordersByDate = {
        "2026-08-01": [
            { id: "ORD-1001", customer: "Arif Chowdhury", product: "MX Master 3S", qty: "1", amount: "12500", status: "Delivered" },
            { id: "ORD-1002", customer: "Mitu Akter", product: "Keychron K8 Pro", qty: "1", amount: "14500", status: "Processing" },
            { id: "ORD-1003", customer: "Jamal Uddin", product: "Samsung T7", qty: "2", amount: "19600", status: "Shipped" },
            { id: "ORD-1004", customer: "Sadia Islam", product: "Anker 737", qty: "1", amount: "11200", status: "Delivered" },
            { id: "ORD-1005", customer: "Rashed Khan", product: "Dell UltraSharp", qty: "1", amount: "42000", status: "Cancelled" }
        ],
        "2026-08-02": [
            { id: "ORD-2001", customer: "Nabila Rahman", product: "MX Master 3S", qty: "1", amount: "12500", status: "Delivered" },
            { id: "ORD-2002", customer: "Imtiaz Ahmed", product: "Keychron K8 Pro", qty: "2", amount: "29000", status: "Processing" },
            { id: "ORD-2003", customer: "Farzana Haque", product: "Samsung T7", qty: "1", amount: "9800", status: "Shipped" },
            { id: "ORD-2004", customer: "Sabina Yasmin", product: "Anker 737", qty: "3", amount: "33600", status: "Delivered" },
            { id: "ORD-2005", customer: "Tanvir Islam", product: "Dell UltraSharp", qty: "1", amount: "42000", status: "Processing" },
            { id: "ORD-2006", customer: "Ayesha Rahman", product: "MX Master 3S", qty: "1", amount: "12500", status: "Delivered" },
            { id: "ORD-2007", customer: "Karim Hassan", product: "Keychron K8 Pro", qty: "1", amount: "14500", status: "Shipped" },
            { id: "ORD-2008", customer: "Fatima Begum", product: "Samsung T7", qty: "2", amount: "19600", status: "Delivered" },
            { id: "ORD-2009", customer: "Sakib Khan", product: "Anker 737", qty: "1", amount: "11200", status: "Cancelled" },
            { id: "ORD-2010", customer: "Rahim Ahmed", product: "Dell UltraSharp", qty: "1", amount: "42000", status: "Processing" }
        ],
        "2026-08-03": [
            { id: "ORD-3001", customer: "Shila Rani", product: "MX Master 3S", qty: "1", amount: "12500", status: "Delivered" },
            { id: "ORD-3002", customer: "Rakibul Islam", product: "Keychron K8 Pro", qty: "1", amount: "14500", status: "Shipped" },
            { id: "ORD-3003", customer: "Farhana Akter", product: "Samsung T7", qty: "1", amount: "9800", status: "Delivered" }
        ],
        "default": [
            { id: "ORD-0001", customer: "Default User", product: "Sample Product", qty: "1", amount: "1000", status: "Pending" }
        ]
    };

    // ===== PRODUCTS =====
    const productsByDate = {
        "2026-08-01": [
            { sku: "SKU-1001", name: "Logitech MX Master 3S", category: "Peripherals", price: "12500", stock: "34" },
            { sku: "SKU-1002", name: "Keychron K8 Pro", category: "Peripherals", price: "14500", stock: "19" },
            { sku: "SKU-1003", name: "Samsung T7 1TB", category: "Storage", price: "9800", stock: "8" }
        ],
        "2026-08-02": [
            { sku: "SKU-1001", name: "Logitech MX Master 3S", category: "Peripherals", price: "12500", stock: "30" },
            { sku: "SKU-1002", name: "Keychron K8 Pro", category: "Peripherals", price: "14500", stock: "15" },
            { sku: "SKU-1003", name: "Samsung T7 1TB", category: "Storage", price: "9800", stock: "5" },
            { sku: "SKU-1004", name: "Anker 737 Power Bank", category: "Power", price: "11200", stock: "12" },
            { sku: "SKU-1005", name: "Dell UltraSharp 27", category: "Display", price: "42000", stock: "11" }
        ],
        "2026-08-03": [
            { sku: "SKU-1001", name: "Logitech MX Master 3S", category: "Peripherals", price: "12500", stock: "28" },
            { sku: "SKU-1004", name: "Anker 737 Power Bank", category: "Power", price: "11200", stock: "0" },
            { sku: "SKU-1005", name: "Dell UltraSharp 27", category: "Display", price: "42000", stock: "9" },
            { sku: "SKU-1006", name: "Sony WH-1000XM5", category: "Audio", price: "38500", stock: "6" }
        ],
        "default": [
            { sku: "SKU-0000", name: "Default Product", category: "N/A", price: "0", stock: "0" }
        ]
    };

    // ===== EMPLOYEES =====
    const employeesByDate = {
        "2026-08-01": [
            { id: "EMP-201", name: "Nusrat Jahan", role: "Sales Lead", dept: "Sales", branch: "Dhaka" },
            { id: "EMP-202", name: "Tanvir Rahman", role: "Support Engineer", dept: "Customer Care", branch: "Chittagong" },
            { id: "EMP-203", name: "Ayesha Siddiqua", role: "Marketing Manager", dept: "Marketing", branch: "Dhaka" }
        ],
        "2026-08-02": [
            { id: "EMP-201", name: "Nusrat Jahan", role: "Sales Lead", dept: "Sales", branch: "Dhaka" },
            { id: "EMP-202", name: "Tanvir Rahman", role: "Support Engineer", dept: "Customer Care", branch: "Chittagong" },
            { id: "EMP-203", name: "Ayesha Siddiqua", role: "Marketing Manager", dept: "Marketing", branch: "Dhaka" },
            { id: "EMP-204", name: "Mehedi Hasan", role: "Warehouse Supervisor", dept: "Operations", branch: "Sylhet" },
            { id: "EMP-205", name: "Sabina Yasmin", role: "Finance Officer", dept: "Accounts", branch: "Dhaka" }
        ],
        "2026-08-03": [
            { id: "EMP-201", name: "Nusrat Jahan", role: "Sales Lead", dept: "Sales", branch: "Dhaka" },
            { id: "EMP-204", name: "Mehedi Hasan", role: "Warehouse Supervisor", dept: "Operations", branch: "Sylhet" },
            { id: "EMP-206", name: "Imran Hossain", role: "Branch Manager", dept: "Management", branch: "Rajshahi" }
        ],
        "default": [
            { id: "EMP-000", name: "Default Employee", role: "N/A", dept: "N/A", branch: "N/A" }
        ]
    };

    // Fill Orders (index.html)
    const ordersBody = document.getElementById("orders-body");
    if (ordersBody) {
        const orders = ordersByDate[selectedDate] || ordersByDate["default"];
        const statusEl = document.getElementById("js-status");
        setTimeout(function () {
            orders.forEach(function (order) {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${order.id}</td>
                    <td>${order.customer}</td>
                    <td>${order.product}</td>
                    <td>${order.qty}</td>
                    <td>${order.amount}</td>
                    <td>${order.status}</td>
                `;
                ordersBody.appendChild(tr);
            });
            if (statusEl) {
                statusEl.textContent = "Loaded " + orders.length + " orders for date: " + selectedDate;
                statusEl.classList.add("ready");
            }
        }, 1000);
    }

    // Fill Products (products.html)
    const productsBody = document.getElementById("products-body");
    if (productsBody) {
        const products = productsByDate[selectedDate] || productsByDate["default"];
        const statusEl = document.getElementById("products-status");
        setTimeout(function () {
            products.forEach(function (p) {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${p.sku}</td>
                    <td>${p.name}</td>
                    <td>${p.category}</td>
                    <td>${p.price}</td>
                    <td>${p.stock}</td>
                `;
                productsBody.appendChild(tr);
            });
            if (statusEl) {
                statusEl.textContent = "Loaded " + products.length + " products for date: " + selectedDate;
                statusEl.classList.add("ready");
            }
        }, 1000);
    }

    // Fill Employees (employees.html)
    const employeesBody = document.getElementById("employees-body");
    if (employeesBody) {
        const employees = employeesByDate[selectedDate] || employeesByDate["default"];
        const statusEl = document.getElementById("employees-status");
        setTimeout(function () {
            employees.forEach(function (e) {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${e.id}</td>
                    <td>${e.name}</td>
                    <td>${e.role}</td>
                    <td>${e.dept}</td>
                    <td>${e.branch}</td>
                `;
                employeesBody.appendChild(tr);
            });
            if (statusEl) {
                statusEl.textContent = "Loaded " + employees.length + " employees for date: " + selectedDate;
                statusEl.classList.add("ready");
            }
        }, 1000);
    }
});