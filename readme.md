🛠 Prerequisites
Before getting started, ensure you have the following installed:

        - Node.js (LTS version recommended)
        - Docker Desktop (Required for running local API services)

🚀 1. How to Install Playwright
Follow these steps to set up the automation environment locally:

    1. Clone the Repository:
        https://github.com/amaristela/playwright_aut_framework.git
    2. Install Dependencies:
        Run the following command to install the necessary Node.js packages:

    3. Install Playwright Browsers:
        Download the required browser binaries (Chromium, Firefox, WebKit):

🐳 2. Running QA Practice APIs with Docker
To practice API testing against a stable local environment, we use the QA Practice API service.

    Step A: Install Docker
        If you do not have Docker installed:
            1. Download Docker Desktop from the https://docs.docker.com/engine/install/.
            2. Follow the installation wizard for your Operating System.
            3. Ensure Docker is running by typing docker --version in your terminal.

    Step B: Run the QA Practice API Container
        Follow the instruction in this website to run QA Practice APIs
        https://qa-practice.razvanvancea.ro/api-testing.html

🧪 3. Executing Tests
Once the environment is set up and the Docker container is active, you can run your tests: /br 1. UI Mode: "npx playwright test /tests/qaPractice/employeeController --ui" /br2. Headless Mode: "npx playwright test /tests/qaPractice/employeeController"
