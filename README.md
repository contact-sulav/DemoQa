# DemoQA Practice Form Automation (Playwright)

This project contains an end-to-end UI automation test for the **DemoQA Practice Form** using **Playwright with JavaScript**.  
It covers form interactions, dynamic components, file upload, and modal validation using modern locator strategies.

---

## 🚀 Tech Stack
- Playwright
- JavaScript
- Node.js
- Git & GitHub

---

## 📌 Test Scenario Covered
The automated test performs the following steps:

- Navigate to DemoQA website
- Open **Forms → Practice Form**
- Fill personal details (name, email, gender, mobile number)
- Select date of birth using React DatePicker
- Select subject using auto-suggestion dropdown
- Choose hobbies
- Upload a picture
- Fill current address
- Select state and city (dynamic dropdowns)
- Submit the form
- Validate submission modal
- Close modal and verify page state

---

## 📂 Project Structure
```text
demoQA/
├── tests/
│ └── practiceForm.spec.js
├── images/
│ └── image.jpeg
├── playwright.config.js
├── package.json
└── README.md


---

## ▶️ How to Run the Tests

### 1️⃣ Install dependencies
npm install
2️⃣ Run all tests
npx playwright test
3️⃣ Run tests with UI
npx playwright test --ui
4️⃣ View test report
npx playwright show-report
Playwright Best Practices Used
Role-based and accessible locators (getByRole)

Explicit assertions with expect

Handling dynamic dropdowns and React components

File upload using setInputFiles

Modal validation after form submission

📎 Test Site
https://demoqa.com/automation-practice-form

👤 Author
Sulav Chaudhary
QA / Automation Engineer