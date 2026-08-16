# Web Scraper — HTML & JavaScript to Excel

A powerful Python web scraper that collects data from websites and delivers it in a clean, organized Excel file.

It works with normal HTML pages and JavaScript-rendered pages, structures the results clearly, and exports everything into a professional spreadsheet — ready for business use.

---

## What It Does

- Collects data from websites starting from a single URL  
- Handles both **static HTML** and **JavaScript-powered** pages  
- Organizes results in a clear, readable structure  
- Saves output as a formatted **Excel (`.xlsx`)** file  
- Supports date-based collection when needed  
- Shows progress while running  
- Lets you choose the output file name (with overwrite protection)

---

## Flexible & Customizable

Every website is different — and this scraper is built to adapt.

The logic can be adjusted for:

- Different page layouts  
- Custom data fields (not limited to one format)  
- Date-based or non-date-based collection  
- Client-specific rules and filters  
- Extra pages, deeper crawls, or special export needs  

It is not locked to one site or one data type.  
It can be modified to match the exact requirements of each project.

---

## How to Use

1. Run the program  
2. Enter the website URL  
3. Enter a date range (if required for the job)  
4. Choose an Excel file name (or use the default)  
5. Get a clean, structured spreadsheet  

---

## Technical Stack

| Tool | Role |
|------|------|
| Python | Core language |
| Requests + BeautifulSoup | Static page data |
| Selenium | JavaScript-rendered pages |
| OpenPyXL | Excel export & formatting |
| WebDriver Manager | Automatic ChromeDriver setup |

---

## Requirements

- Python 3.10+  
- Google Chrome
Download vital libraries:
pip install requests beautifulsoup4 lxml openpyxl selenium webdriver-manager
