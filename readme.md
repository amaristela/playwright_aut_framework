# 🛠 Prerequisites

Before getting started, ensure you have the following installed:

1. Node.js (LTS version recommended) - Docker Desktop (Required for running local API services)
2. Node.js (LTS version recommended)
3. Docker Desktop (Required for running local API services)

# 🚀 How to Install Playwright

Follow these steps to set up the automation environment locally:

1. Clone the Repository: https://github.com/amaristela/playwright_aut_framework.git
2. Install Dependencies:
   Run the following command to install the Playwright packages and its dependencies:
   `npx playwright install --with-deps`

# 🐳 Running QA Practice APIs with Docker

To practice API testing against a stable local environment, we use the QA Practice API service.

## Step A: Install Docker

If you do not have Docker installed:

1. Download Docker Desktop from the https://docs.docker.com/engine/install/.
2. Follow the installation wizard for your Operating System.
3. Ensure Docker is running by typing docker --version in your terminal.

## Step B: Run the QA Practice API Container

Follow the instruction in this website to run QA Practice APIs https://qa-practice.razvanvancea.ro/api-testing.html

# 🧪 Executing Tests

Once the environment is set up and the Docker container is active, you can run your tests:

1. UI Mode: `npx playwright test /tests/qaPractice/employeeController --ui`
2. Headless Mode: `npx playwright test /tests/qaPractice/employeeController`

# 📊 Sample Recording

![](https://github.com/amaristela/playwright_aut_framework/blob/a9c080f5ab6af3a941a6995338f643419efc1c68/example/Sample%20Recording.mp4)
