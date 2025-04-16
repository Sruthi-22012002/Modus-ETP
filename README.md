<div align ="center"><h2>Scalable Web Service with High Availability and Fault Tolerance</h2></div>

## Overview
This document outlines the design and implementation of a highly available and scalable web service architecture deployed on Microsoft Azure. The web service is designed to handle high request rates (1000 requests per second or RPS), ensure secure integrations with external services, and provide fault tolerance with high availability. The solution leverages Azure's powerful cloud infrastructure and services to deliver a robust and secure web application.

## Table of Content

1. [Overview](#overview)
2. [Key features](#key-features)
3. [Architecture Diagram](#architecture-diagram)
4. [Infrastructure Design](#infrastructure-design)
5. [Deployment-plan](#deployment-plan)
6. [Prerequisites](#prerequisites)
7. [Getting Started](#getting-started)
8. [Portal-Based Setup](#portal-based-setup)
9. [Live RPS test with confirmed 1000 RPS threshold](#live-rps-test-with-confirmed-1000-rps-threshold)
10. [Limitation and challenges](#limitation-and-challenges)
11. [Conclusion](#conclusion)

## Key Features
* **SQL Database:** A secure, scalable SQL database to store application data.
* **RPS Support:** The web service is designed to handle 1000 requests per second (RPS), ensuring high performance under load.
* **External Service Integration:** The web service integrates securely with external services for enhanced functionality.
* **High Availability & Fault Tolerance:** The infrastructure is designed for redundancy and scalability to ensure minimal downtime and reliable performance.
* **Security:** All components are secured with best practices for encryption, access control, and identity management.

## Architecture diagram
The infrastructure is designed to provide scalability, fault tolerance, and security by using a combination of Azure services.

![image](https://github.com/user-attachments/assets/748c193e-9c12-490f-a054-74aa23ae7af0)

### 📥 Download raw XML file
[Download](https://github.com/Sruthi-22012002/Modus-ETP/blob/main/Modus%20ETP.drawio)

## Infrastructure Design

**1. Load Balancing & Traffic Distribution**
 * Azure Front Door is used to globally load balance incoming traffic across multiple Azure regions. This ensures low-latency access for users regardless of their geographical location and improves fault tolerance by automatically routing traffic to healthy instances.
 * SSL termination is handled at the Front Door level to offload this task from the web app, improving performance.

**2. Scalable Web Hosting**
 * Azure App Service (Premium Plan) is used to host the web service. This plan provides auto-scaling based on metrics such as CPU and RPS (requests per second), allowing the application to scale horizontally as traffic increases.

 * Application slots (e.g., staging and production) enable Blue/Green deployments, reducing downtime and risk during deployment.

**3. Database Design**
 * Azure SQL Database is the core data storage solution, providing a managed, scalable relational database with built-in high availability features like geo-replication and automatic failover.
 * The database is optimized for high-performance workloads, and it scales to handle 1000 RPS without performance degradation.

**4. Security**
 * Azure Key Vault stores all sensitive data, including API keys and database connection strings, ensuring that they are never hardcoded into the application code.
 * Azure’s identity and access management services ensure that only authorized users and services can access sensitive resources.

**5. Monitoring & Alerting**
 * Azure Monitor provides real-time monitoring of application performance, availability, and infrastructure health.
 * Application Insights helps track application-specific metrics, such as response times and error rates, enabling quick diagnosis of issues.

## Deployment Plan
**1. CI/CD Pipeline**
 * GitHub Actions or Azure DevOps Pipelines are used for continuous integration and deployment. The pipeline automates the entire build, test, and deployment process, ensuring that changes are seamlessly deployed to the Azure environment.

**2. Auto-scaling**
 * Azure App Service automatically scales the application based on traffic patterns, utilizing Azure's built-in scaling capabilities.
 * Horizontal scaling (increasing the number of instances) is triggered by CPU utilization or RPS thresholds, ensuring that the web service can handle large volumes of traffic without compromising performance.

**3. Integration Testing**
 * All code changes are tested in a staging environment before being deployed to production. This ensures that no breaking changes reach the live environment.

## Prerequisites
* Frontend
  * Javascript
      * A modern web browser, and optionally a text editor like VS Code
* Backend
  * [Node.js 22.12+](https://nodejs.org/en)
      * Highly recommended: Use/Upgrade your NodeJS to the latest NodeJS 22 LTS version.
* Command Line Tools
  * <img src="https://img.icons8.com/color/24/000000/windows-10.png" alt="Windows Logo" width="20"/> **Windows**: [Visual Studio Code](https://code.visualstudio.com/) + [Windows Subsystem for Linux - Ubuntu](https://learn.microsoft.com/en-us/windows/wsl/install) **OR** [Visual Studio](https://visualstudio.microsoft.com/)
  * <img src="https://img.icons8.com/color/24/000000/ubuntu--v1.png" alt="Ubuntu Logo" width="20"/> **Ubuntu** : `sudo apt-get install build-essential`
> **Note**: If you are new to Node or Express, you may find the [**Node.js & Express From Scratch**](https://www.youtube.com/playlist?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE) series helpful for learning the basics of Node and Express.
> Alternatively, here is another great tutorial for complete beginners – [**Getting Started With Node.js, Express, MongoDB**](https://www.freecodecamp.org/news/getting-started-with-node-express-and-mongodb/).

## How it works

The system architecture is designed for efficiency, security, and scalability, capable of handling high volumes of traffic (1000 requests per second).
* **Frontend requests** are sent directly to the **Azure Web App**, which hosts the Node.js application. This service automatically scales to handle traffic spikes and ensures high availability.
* The web application communicates with a secure **Azure SQL Database** to perform transactional data operations, offering reliable data storage with built-in backups and redundancy.
* External services are integrated using RESTful APIs via Axios, allowing the application to fetch and process data from third-party systems in real time.
* Sensitive data such as API keys and database credentials are securely managed using Azure Key Vault, ensuring secrets are not exposed in code or version control.
* Monitoring and diagnostics are handled by **Azure Monitor and Application Insights**, offering deep visibility into application performance, request rates, error rates, and response times.

> This streamlined deployment model ensures secure secret handling, reliable external communication, and robust performance monitoring—all within a scalable Azure ecosystem.

## Getting Started
<b>Step 1</b>: The easiest way to get started is to clone the repository:
 ```bash
# Get the latest snapshot
git clone https://github.com/Sruthi-22012002/Modus-ETP.git sample-node

# Change directory
cd sample-node

# Install NPM dependencies
npm install

# Then simply start your app
npm start
 ```
**Note:** I highly recommend installing [Nodemon](https://github.com/remy/nodemon). It watches for any changes in your node.js app and automatically restarts the server. Once installed, instead of `node app.js` use `nodemon app.js`. It will save you a lot of time in the long run, because you won't need to manually restart the server each time you make a small change in code. To install, run `sudo npm install -g nodemon`.

**Step 2:** To get started with deploying a scalable web application on Azure, a cloud infrastructure capable of handling 1000 requests per second (RPS) with auto-scaling capabilities to ensure performance during traffic spikes. It leverages Azure SQL Database as a secure and scalable solution for managing relational data, supporting high throughput and geo-replication for resiliency. The web service is architected to be secure, monitored, and resilient to failures, with features like HTTPS, WAF, Application Insights, and automated alerts. It integrates seamlessly with external APIs, using Azure Key Vault to securely store and manage sensitive data such as API keys and database credentials. Additionally, the project implements a robust CI/CD pipeline using GitHub Actions or Azure DevOps to enable smooth deployment, version control, and zero-downtime releases, ensuring fast and reliable updates to the application.

**Step 3:** Develop your application and customize the experience
  * Check out [How it works](#how-it-works)

**Step 4:** Optional but recommended - Set Up CI/CD Pipeline
  * [Deployment](https://github.com/Sruthi-22012002/Modus-ETP/actions/runs/14464267148)

## Portal-Based Setup

  **Step 1. Resource Group**
   * Resource group is a logical container in Azure that holds related resources like VMs, databases, and web apps for easier management and organization. Let me know if you want this expanded into a catchy heading or tooltip-style phrase!
  > 📌 **Instructions:**

  1. Go to the [Azure Portal](https://portal.azure.com).
  2. Search for <i><b>Resource groups</b></i> in the top search bar and click <i><b>Create</b></i>.
  3. Enter a name `WebService-RG`, select a region, and click <i><b>Review + Create</b></i>.

🖼️ **Azure Portal Screenshot:**

  <img src="https://github.com/user-attachments/assets/78c0a8d9-636d-4d98-ad98-a050c72b449a" alt="Resource Group in Azure Portal" width="700"/>

> **💡 Tip:** Use meaningful names for easier resource management, and select a region close to your users for better performance.

**Step 2. Azure SQL Database**
  * Azure SQL Database is the backbone for reliable data storage and fast access, enabling the web service to be simple yet robust, while meeting enterprise-grade requirements.
> 📌 **Instructions:**

1. Navigate to the Azure Portal and search for <i><b>SQL databases</b></i> in the top search bar.
2. Click on the <i><b>Create</b></i> button to start provisioning a new SQL database.
3. Select the resource group where the SQL database will be placed. If needed, create a new resource group.
4. Enter a name for your database `WebServiceDB`.
5. If you don’t have a SQL server, create a new one by entering the required details, such as the server name, region, and admin credentials.
6. Under Compute + storage, choose the Hyperscale or Premium tier to ensure optimal performance and scalability.
7. In the Additional settings section, enable Geo-replication if your project requires high availability across multiple regions.

🖼️ **Azure Portal Screenshot:**

<img src="https://github.com/user-attachments/assets/de8197b5-bb6a-4a3c-a32f-fab4b1db0e2d" alt="Azure Sql Database in Azure Portal" width="700"/>

**💡 Tip:** Ensure you select the right performance tier (Hyperscale or Premium) based on your app’s expected load, and consider enabling Geo-replication for disaster recovery and high availability.

**Step 3. Web app**
* Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple programming languages like .NET, Node.js, Java, Python, PHP, and Ruby, making it ideal for modern web applications.

> 📌 **Instructions:**

1. Navigate to the Azure Portal and search for <i><b>App Services</b></i> in the top search bar.
2. Click on the <i><b>Create</b></i> button to start the process of creating a new App Service.
3. Select the resource group you want to associate with the app, or create a new one if needed.
4. Provide a unique name for your web app `webservice-api`.
5. Choose the appropriate runtime stack `Node.js 20 LTS` based on the technology you will be using for your app.
6. Choose a <i><b>Standard</b></i> App Service Plan based on your scaling and performance requirements.
7. Enable auto-scaling to handle varying traffic loads.
8. Click <i><b>Review+create</b></i>
**<u><i><b>NOTE:</b></i></u>** Deployment Options
9. click on <i><b>Deployment center</b></i> for your app in the top left corner
10. You can either deploy a **<i><b>manual deployment(push)</b></i>** or **<i><b>set up a GitHub/DevOps pipelines</b></i>**.

  10.1. **Manual Deployment**
  
  **<u><i><b>NOTE:</b></i></u>** Verify the ownership of project repo as **Admin**
  * Paste the github project link `https://github.com/Sruthi-22012002/Modus-ETP/`
  * Choose the branch
  * (Optional) To see the file before saving your changes, select Preview file. App Service selects a workflow template based on your app's language stack setting and commits it into your selected GitHub repository.
  *  Click save
        
  10.2. **CI/CD**
  * If you're deploying from GitHub for the first time, select Authorize and follow the authorization prompts. To deploy from another user's repository, select Change Account.
  * After you authorize your Azure account with GitHub, select the appropriate Organization, Repository, and Branch.
  * Under <i><b>Authentication type</b></i>, select **User-assigned identity** for better security.
  * (Optional) To see the file before saving your changes, select Preview file. App Service selects a workflow template based on your app's language stack setting and commits it into your selected GitHub repository.
  * Select <i><b>save</b></i> 

🖼️ **Azure Portal Screenshot:**

**1. Manual Deployment**

<img src="https://github.com/user-attachments/assets/2cb7eec3-2513-4dd2-bba4-7335a587b038" alt="External Git" width="700"/>
       
**2. CI/CD**

<img src="https://github.com/user-attachments/assets/b90d9b16-b9a1-4567-a77f-52316577e90c" alt="Workflow composer" width="700"/>

<img src="https://github.com/user-attachments/assets/987106e6-3125-4c5f-ad56-eadff3dcfccd" alt="CI/CD Deployment" width="700"/>

**3. Application**

> Click <i><b>Browse</b></i> to see the application in chrome.

<img src="https://github.com/user-attachments/assets/43307547-c936-4a31-8ff9-9af2e7a9a188" alt="CI/CD Deployment" width="700"/>

<img src="https://github.com/user-attachments/assets/fed244cd-5b91-4488-89ad-3a50898c50e1" alt="App" width="700"/>

**Step 4.Monitoring and Logging**
* Azure Monitor provides performance metrics and alerts, while Application Insights enables real-time logging, request tracking, and diagnostics for Node.js apps. These tools help identify issues quickly, track usage patterns, and improve overall application health and performance.
  
> 📌 **Instructions:**

1. Navigate to the top left corner of your app.
2. Click on <i><b>Application insights</b></i> and check your app is connected to Application Insights resource: web-api
3. Click on <i><b>Alerts</b></i> and click <i><b>Create</b></i>
      * Create Alert Rule
        *  Scope: Web-api
        *  Condition
        *  signal name: Request
      **Alert Logic**
        * Aggregation type: Count
        * Value is: Greater than
        * Threshold: 60000 **1s = 1000**
      **When to evaluate**
          * Check every: 1 minute
   * Details
     * Type alert messgae display name and alert name
   * Review + create
   
🖼️ **Azure Portal Screenshot:**

<img src="https://github.com/user-attachments/assets/fbf15313-fc81-4924-9c93-e246fc1f07a4" alt="Alert" width="700"/>

**Verify email**

* Action group added to azure monitor confrimation
<img src="https://github.com/user-attachments/assets/4efce3f5-34d4-4157-a5c8-ee3d2bc32a31" alt="Email Confrimation" width="700"/>

* Alert send confrimation
<img src="https://github.com/user-attachments/assets/815a4e93-0634-46ca-841b-659fe87b7c74" alt="Email Confrimation" width="700"/>

## Live RPS test with confirmed 1000 RPS threshold

[Live RPS Test](https://drive.google.com/file/d/1yXPRcz_xBru8kLLDwVB2tmnO8_fXp2cP/view?usp=sharing)

## Limitation and challenges

Due to restrictions imposed by the current Azure subscription, certain services could not be activated or tested:
  * **External API Integration:** Subscription limits on resources prevented the deployment and testing of external API integrations using Azure App Service and Logic Apps. External API calls could not be made as a result.
  * **Azure Key Vault Setup:** The subscription also limited the provisioning of Key Vault resources, which hindered the secure storage of sensitive data such as API keys and database credentials.
Plan for Completion: Once these limitations are lifted, the integration and secure setup will proceed, utilizing managed identities and Azure AD for secure authentication.
## Conclusion
> This architecture is designed to provide a highly available, scalable, and secure web service that can handle 1000 RPS. The combination of Azure services, such as Azure Front Door, App Service, SQL Database, Key Vault, and Azure Monitor, ensures that the service meets the required performance, availability, and security standards. The CI/CD pipeline, Blue/Green deployments, and auto-scaling features ensure that the service is always up-to-date and can handle traffic spikes with minimal downtime.

**This solution is robust, fault-tolerant, and secure, making it ideal for mission-critical applications that require high availability and scalability.**




  
