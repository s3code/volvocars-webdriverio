# volvocars-webdriverio

## Introduction:

Basically this is a sample test automation assignment developed in simple light structuring.

*** **IMPORTANT** ***

*Framework is aligned to latest annoucement from webdriverio to move on over Async mode.*

## Tools and technlogies used:

- **Framework:** Hybrid
- **Language:** JavaScript
- **Report:** Allure report
- **Services:** Docker
- **Parallel-execution:** Yes
- **Browsers:** Chrome /Firefox
- **CI:** Yes can be integrated with Jenkins
- **Design pattern and principles:**
  - SOLID principle
  - SRP(Single Responsibility Principle)
  - Page Object Model
  - ~~Factory Pattern (Not used, but could have been used for shop functionality for cars & suv )~~ because shop was out of scope

## How to execute?

### Pre-requisite

- Nodejs 16.\*
- Docker installed
- npm 8.\*
- GitBash
- jdk
---
### Follow the below steps:
*By default the browser will be 'chrome'*

#### **With Docker:**

1. Open Gitbash and navigate to project directory
   > npm run docker-start
2. Execute 
   >npm install
3. Now open a seperate GitBash
4. Just run in GitBash
   > npm test
   
   if you want to run firefox then
   >browserType=firefox npm test

   \*report will generate post execution
5. Shut down the docker
   > npm run docker-shutdown

#### **Without docker**

1. Open Gitbash and navigate to project directory
2. Execute  
   > npm install

   > npm run local

### Reports
### Allure reports
- Just execute below command in the GitBash
  > allure open
