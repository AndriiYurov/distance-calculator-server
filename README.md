## 1. Tell us what pieces of software you think are necessary to develop for the working prototype and how they are related. We call each application (web, mobile or desktop), each API, each batch process that can be deployed independently a piece of software. Support yourself with a diagram if you think necessary.

### Several pieces of software are necessary to develop a working prototype.
 - Frontend of the application is responsible for providing the user interface where users can input source and destination addresses and get the calculated distance.
 - Backend and API handle incoming requests from the frontend, interact with external APIs to fetch geolocation data, perform distance calculations, and store historical query data. 
 - Database stores historical query data, including source and destination addresses and calculated distances.
 - To make it all available to user we need deployment. The application needs to be deployed on a server to make it accessible over the internet. Additionally we need to set up CI/CD pipeline.

## 2. Tell us about the type of architecture you chose for question (1). 
## a. Monolithic? Micro-services? Any intermediate? Other? Comment on what you based to make this Decision.

### I chose Microservices architecture based on 4 things.
 - Scalability: We can scale our application  independently based on their specific resource needs. This enables more efficient resource utilization and better performance as the application grows.
 - Flexibility: Even though now the project is small, it may grow in the future. So microservices allow teams to work on different services independently, using different technologies and languages if necessary. Also, it helps with faster development cycles.
 - Modularity: Microservices are easier to implement and maintain software with. They help with isolating changes and reducing the impact of modifications.
 - Technology Diversity: Teams can use different technologies and frameworks within the same application.

 ## 3. Describe the work methodology you would use for development. It can be some known methodology (Scrum, XP, RUP), an adaptation, or a mixture between several methodologies. Whatever your experience has shown you works.
 ## a. Tell us why you think this form is appropriate for our problem.

 ### I would definitely use Scrum methodology. It is the best to use for several reasons:
 - Sprints: By breaking down the development process into manageable increments, we can continuously deliver value to clients and respond to changing requirements effectively.
 - Flexibility: Scrum provides flexibility to adapt to changing requirements and priorities. We can easily adjust our priorities and focus on delivering the most valuable features first. 
 - Cross-functional Collaboration: Work closely together to define, prioritize, and deliver features. This collaborative approach ensures that all aspects of the project, including frontend development, backend development, and API integration, are addressed effectively.

 ## 4. Describe the workflow you would use to collaborate using Git.
 ## a. As with (3), you can use something familiar or an adaptation.

We would have two main branches: staging for testing and main for the production.
Developers work on feature branches branched off the staging branch for new features or fixes. Once they're done, developers ask the team to review their work by creating a pull request  to merge their changes into staging. The team reviews the changes and gives feedback. If everything looks good, the changes are merged into staging and the next step is testing. When the changes on staging are tested and approved by QA, they're merged into main to update production. After successful deployment to production, the team monitors the application for any issues or regressions. By implementing CI/CD pipelines we automate build, test, and deployment processes, enabling rapid and reliable delivery of changes to staging and production environments.

## 5. Do you think it is necessary to add any extra member to the team during the development of the prototype? What would your role be? Do you think it would be necessary to add new members after the prototype phase?
## a. When and why?

I believe we have a solid foundation to develop the prototype. However, as the development progresses, it may become necessary to consider adding additional team member - QA Engineer. The decision to add new members would be based on the project's evolving requirements, resource constraints, and timeline considerations.  After the prototype, depending on the outcomes of the prototype phase and the project's roadmap, we may need to scale the team to accommodate the increased scope, complexity, or demands of subsequent development phases.

## 6. What other considerations would you have to make the development process robust and efficient?

### To make the development process robust and efficient, I would consider the following:  
 - Implementing CI/CD pipelines to automate the build, test, and deployment processes, enabling frequent and reliable releases. 
 - Maintaining comprehensive documentation, including design documents, API specifications, user guides, and technical documentation, aids in onboarding new team members, facilitates knowledge transfer, and ensures project continuity.
 - Monitoring application performance, resource utilization, and user feedback to identify performance bottlenecks, scalability issues, and some areas for optimization.
