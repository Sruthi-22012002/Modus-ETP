<div align ="center"><h2>Modus ETP Technical assignment for Azure DevOps Engineer role</h2></div>

## Question
1. Showcase your technical design and implementation skills by architecting the infrastructure, deployment and release plan for web service which provides following attributes.
2. SQL Database
3. RPS of 1000/s
4. Integration with external services
5. Ensure that the web service is secure, highly available and fault tolerant.

## Summary
* Web service with 1000 RPS support
* Hosted on Azure App Service with Front Door, SQL DB, and secure integration with external services
* High availability, scalability, and security considered in design
## Deployment Plan
* CI/CD via GitHub Actions or Azure DevOps Pipelines
* Slot-based Blue/Green deployments
* Auto-scaling based on CPU/RPS thresholds
* Integration testing in staging slot before production swap
## Infrastructure Overview
* Azure Front Door – Global load balancing & SSL
* Azure App Service (Premium Plan) – Scalable Web App Host
* Azure SQL Database – Secure, geo-redundant storage
* Azure Key Vault – Manage secrets and API keys
* Azure Monitor & Application Insights – Health and performance tracking
## Architecture diagram
> https://github.com/Sruthi-22012002/Modus-ETP/blob/main/Modus%20ETP.drawio
## Implementation
1. [Create a Resource Group](https://github.com/Sruthi-22012002/Modus-ETP/blob/main/Create%20a%20Resource%20Group.md)
2. [Create an Azure SQL Database](https://github.com/Sruthi-22012002/Modus-ETP/blob/main/Create%20an%20Azure%20SQL%20Database.md)
3. [Create the Web App (Azure App Service)]()
4. [Configure Auto-Scaling for App Service]()
5. [Set Up Azure Front Door]()
6. [Integrate with External APIs]()
7. [Set Up Azure Key Vault]()
8. [Enable Monitoring and Logging]()
9. [CI/CD Setup]()
