// import React, { useState, useEffect } from 'react';
// // import FlashcardItem from './FlashcardItem'; // Import your FlashcardItem component
// // import './FlashcardItem.css';

// const FlashcardList = ({ category }) => {
//   const allFlashcards = [
//     {
//       "category": "Initiation",
//       "question": "Project Charter",
//       "answer": "A document that formally authorizes a project or phase and provides the project manager with authority."
//     },
//     {
//       "category": "Initiation",
//       "question": "Stakeholder Identification",
//       "answer": "The process of determining who is impacted by the project and documenting relevant information about them."
//     },
//     {
//       "category": "Initiation",
//       "question": "Business Case",
//       "answer": "A justification for the project, outlining the benefits, costs, and risks."
//     },
//     {
//       "category": "Initiation",
//       "question": "Assumptions Log",
//       "answer": "A document capturing all assumptions and constraints identified during project initiation."
//     },
//     {
//       "category": "Initiation",
//       "question": "Project Sponsor",
//       "answer": "The individual or group that provides resources and support for the project."
//     },
//     {
//       "category": "Initiation",
//       "question": "Project Objectives",
//       "answer": "Specific, measurable, and time-bound goals that the project aims to achieve."
//     },
//     {
//       "category": "Initiation",
//       "question": "Project Manager",
//       "answer": "The person assigned by the performing organization to lead the project team."
//     },
//     {
//       "category": "Initiation",
//       "question": "Feasibility Study",
//       "answer": "An assessment of the practicality and viability of a proposed project."
//     },
//     {
//       "category": "Initiation",
//       "question": "Project Selection Methods",
//       "answer": "Techniques like benefit-cost analysis, scoring models, or decision trees used to determine project viability."
//     },
//     {
//       "category": "Initiation",
//       "question": "Cost-Benefit Analysis",
//       "answer": "A financial analysis that compares project costs to the benefits."
//     },
//     {
//       "category": "Initiation",
//       "question": "Project Scope",
//       "answer": "A statement of what the project will accomplish, including boundaries and deliverables."
//     },
//     {
//       "category": "Initiation",
//       "question": "Stakeholder Register",
//       "answer": "A document that lists all stakeholders, including their roles and interests in the project."
//     },
//     {
//       "category": "Initiation",
//       "question": "Project Vision Statement",
//       "answer": "A short statement describing the long-term goal or direction of the project."
//     },
//     {
//       "category": "Initiation",
//       "question": "High-Level Requirements",
//       "answer": "Broad statements of needs and conditions to be met by the project."
//     },
//     {
//       "category": "Initiation",
//       "question": "Strategic Alignment",
//       "answer": "Ensuring that the project objectives align with the organization’s strategic goals."
//     },
//     {
//       "category": "Initiation",
//       "question": "Risk Identification",
//       "answer": "The process of determining potential risks during project initiation."
//     },
//     {
//       "category": "Initiation",
//       "question": "Project Assumptions",
//       "answer": "Things considered to be true for the purpose of planning, which may affect the project if incorrect."
//     },
//     {
//       "category": "Initiation",
//       "question": "Constraints",
//       "answer": "Limitations or restrictions on project work, such as budget, time, or resources."
//     },
//     {
//       "category": "Initiation",
//       "question": "Initial Stakeholder Engagement Plan",
//       "answer": "A plan for managing stakeholder communication and engagement early in the project."
//     },
//     {
//       "category": "Initiation",
//       "question": "Project Success Criteria",
//       "answer": "The standards by which the project’s success will be judged."
//     },
//     {
//       "category": "Initiation",
//       "question": "Organizational Process Assets",
//       "answer": "Documents, policies, templates, and other resources available from the organization to guide the project."
//     },
//     {
//       "category": "Initiation",
//       "question": "Enterprise Environmental Factors",
//       "answer": "External and internal factors that influence the project’s success, such as regulations or market conditions."
//     },
//     {
//       "category": "Initiation",
//       "question": "Benefit Realization",
//       "answer": "The process of ensuring that project outcomes deliver the expected value."
//     },
//     {
//       "category": "Initiation",
//       "question": "Governance Framework",
//       "answer": "The structure for decision-making, oversight, and accountability on the project."
//     },
//     {
//       "category": "Initiation",
//       "question": "Project Funding Requirements",
//       "answer": "The monetary resources needed to start and sustain the project."
//     },
//     {
//       "category": "Initiation",
//       "question": "Key Deliverables",
//       "answer": "Major outputs or products of the project that are essential for success."
//     },
//     {
//       "category": "Initiation",
//       "question": "Initial Risk Register",
//       "answer": "A document capturing potential risks identified during initiation."
//     },
//     {
//       "category": "Initiation",
//       "question": "Lessons Learned Repository",
//       "answer": "A collection of lessons from past projects that can be applied to the current project."
//     },
//     {
//       "category": "Initiation",
//       "question": "Stakeholder Analysis",
//       "answer": "A process to identify stakeholder expectations, interests, and their potential influence on the project."
//     },
//     {
//       "category": "Initiation",
//       "question": "Decision Criteria",
//       "answer": "The standards used to evaluate and select the project based on business needs."
//     },
//     {
//       "category": "Initiation",
//       "question": "Project Objectives Statement",
//       "answer": "A formalized statement outlining the overall purpose and expected outcomes of the project."
//     },
//     {
//       "category": "Initiation",
//       "question": "Project Charter Approval",
//       "answer": "The formal sign-off by the project sponsor or client that allows the project to proceed."
//     },
//     {
//       "category": "Initiation",
//       "question": "SWOT Analysis",
//       "answer": "An evaluation of Strengths, Weaknesses, Opportunities, and Threats as part of the initiation process."
//     },
//     {
//       "category": "Initiation",
//       "question": "Gap Analysis",
//       "answer": "A method to compare the current state to the desired state, helping to define project needs."
//     },
//     {
//       "category": "Initiation",
//       "question": "Initial Schedule Estimates",
//       "answer": "Early calculations of the time needed for project activities during initiation."
//     },
//     {
//       "category": "Initiation",
//       "question": "High-Level Milestone Plan",
//       "answer": "A summary of key dates and deliverables at the beginning of the project."
//     },
//     {
//       "category": "Initiation",
//       "question": "Project Justification",
//       "answer": "A reason why the project is necessary, including benefits or market demand."
//     },
//     {
//       "category": "Initiation",
//       "question": "Preliminary Budget",
//       "answer": "An initial cost estimate for the project, subject to refinement."
//     },
//     {
//       "category": "Initiation",
//       "question": "Legal and Regulatory Requirements",
//       "answer": "The laws and regulations the project must comply with."
//     },
//     {
//       "category": "Initiation",
//       "question": "Authority Matrix (RACI)",
//       "answer": "A tool to define roles and responsibilities for project team members (Responsible, Accountable, Consulted, Informed)."
//     },
//     {
//       "category": "Initiation",
//       "question": "Project Mission Statement",
//       "answer": "A brief description of the project’s purpose and how it aligns with organizational goals."
//     },
//     {
//       "category": "Initiation",
//       "question": "Opportunity Cost",
//       "answer": "The potential benefit lost when choosing one project over another."
//     },
//     {
//       "category": "Initiation",
//       "question": "Project Charter Inputs",
//       "answer": "Inputs such as the business case, agreements, and enterprise environmental factors used to create the charter."
//     },
//     {
//       "category": "Initiation",
//       "question": "High-Level Resource Estimates",
//       "answer": "Preliminary estimates of the resources required to execute the project."
//     },
//     {
//       "category": "Initiation",
//       "question": "Preliminary Risk Assessment",
//       "answer": "An early evaluation of risks that could affect the project’s success."
//     },
//     {
//       "category": "Initiation",
//       "question": "Roles and Responsibilities Definition",
//       "answer": "A process of assigning specific tasks and duties to team members."
//     },
//     {
//       "category": "Initiation",
//       "question": "Initial Procurement Strategy",
//       "answer": "A plan for acquiring resources, products, or services needed by the project."
//     },
//     {
//       "category": "Initiation",
//       "question": "Preliminary Communication Plan",
//       "answer": "Early guidelines on how information will be shared with stakeholders."
//     },
//     {
//       "category": "Initiation",
//       "question": "Kick-Off Meeting",
//       "answer": "An initial project meeting to discuss goals, roles, and expectations with stakeholders."
//     },
//     {
//       "category": "Initiation",
//       "question": "Project Scope Statement (Preliminary)",
//       "answer": "A brief document outlining theroject’s scope, including goals, deliverables, and exclusions."
// },
// {
//   category: "Planning",
//   question: "Project Management Plan",
//   answer: "A comprehensive document that outlines how the project will be executed, monitored, and controlled."
// },
// {
//   category: "Planning",
//   question: "Scope Management Plan",
//   answer: "A plan that defines how the project scope will be defined, validated, and controlled."
// },
// {
//   category: "Planning",
//   question: "Requirements Management Plan",
//   answer: "A plan that details how requirements will be collected, analyzed, and documented."
// },
// {
//   category: "Planning",
//   question: "Schedule Management Plan",
//   answer: "A plan that outlines how the project schedule will be developed, monitored, and controlled."
// },
// {
//   category: "Planning",
//   question: "Cost Management Plan",
//   answer: "A plan that describes how costs will be planned, structured, and controlled throughout the project."
// },
// {
//   category: "Planning",
//   question: "Quality Management Plan",
//   answer: "A plan that outlines how project quality will be managed, ensuring that deliverables meet the required standards."
// },
// {
//   category: "Planning",
//   question: "Resource Management Plan",
//   answer: "A plan that identifies and manages the resources needed for the project."
// },
// {
//   category: "Planning",
//   question: "Communications Management Plan",
//   answer: "A plan that outlines how project information will be distributed and managed."
// },
// {
//   category: "Planning",
//   question: "Risk Management Plan",
//   answer: "A plan that describes how risks will be identified, analyzed, and managed."
// },
// {
//   category: "Planning",
//   question: "Procurement Management Plan",
//   answer: "A plan that details how the procurement processes will be managed."
// },
// {
//   category: "Planning",
//   question: "Stakeholder Engagement Plan",
//   answer: "A plan that identifies stakeholder needs and outlines how to manage stakeholder expectations."
// },
// {
//   category: "Planning",
//   question: "Scope Baseline",
//   answer: "A document that defines the project scope, including the work breakdown structure (WBS), project scope statement, and WBS dictionary."
// },
// {
//   category: "Planning",
//   question: "Schedule Baseline",
//   answer: "The approved version of the project schedule that is used to track progress."
// },
// {
//   category: "Planning",
//   question: "Cost Baseline",
//   answer: "The approved version of the project budget used to monitor costs."
// },
// {
//   category: "Planning",
//   question: "Work Breakdown Structure (WBS)",
//   answer: "A hierarchical decomposition of the total scope of work to be carried out by the project team."
// },
// {
//   category: "Planning",
//   question: "Requirements Documentation",
//   answer: "A detailed description of the project's functional and non-functional requirements."
// },
// {
//   category: "Planning",
//   question: "Requirements Traceability Matrix",
//   answer: "A document that links requirements to their origins and traces them throughout the project lifecycle."
// },
// {
//   category: "Planning",
//   question: "Milestone List",
//   answer: "A list of significant points or events in the project."
// },
// {
//   category: "Planning",
//   question: "Project Schedule",
//   answer: "A timeline that details the planned start and finish dates for project activities."
// },
// {
//   category: "Planning",
//   question: "Activity List",
//   answer: "A list of all activities that must be performed to produce project deliverables."
// },
// {
//   category: "Planning",
//   question: "Activity Attributes",
//   answer: "Information that provides more detail about each activity, such as duration, resource requirements, and constraints."
// },
// {
//   category: "Planning",
//   question: "Network Diagram",
//   answer: "A visual representation of the project’s activities and the dependencies between them."
// },
// {
//   category: "Planning",
//   question: "Critical Path Method (CPM)",
//   answer: "A technique used to predict project duration by identifying the longest path of dependent activities."
// },
// {
//   category: "Planning",
//   question: "Gantt Chart",
//   answer: "A type of bar chart used to illustrate a project schedule."
// },
// {
//   category: "Planning",
//   question: "Resource Breakdown Structure (RBS)",
//   answer: "A hierarchical breakdown of project resources categorized by type and function."
// },
// {
//   category: "Planning",
//   question: "Resource Calendar",
//   answer: "A calendar that shows the availability of project resources during the project."
// },
// {
//   category: "Planning",
//   question: "Cost Estimates",
//   answer: "An approximation of the costs required to complete project activities."
// },
// {
//   category: "Planning",
//   question: "Bottom-Up Estimating",
//   answer: "A method of estimating project costs by aggregating the costs of individual activities or work packages."
// },
// {
//   category: "Planning",
//   question: "Cost Aggregation",
//   answer: "The process of summing estimated costs by work package to establish the project budget."
// },
// {
//   category: "Planning",
//   question: "Contingency Reserve",
//   answer: "Funds set aside to address identified risks that may occur during the project."
// },
// {
//   category: "Planning",
//   question: "Management Reserve",
//   answer: "A reserve fund for unforeseen work within the scope of the project."
// },
// {
//   category: "Planning",
//   question: "Earned Value Management (EVM)",
//   answer: "A method of performance measurement that integrates project scope, cost, and schedule."
// },
// {
//   category: "Planning",
//   question: "Risk Register",
//   answer: "A document that lists identified risks, their potential impacts, and mitigation strategies."
// },
// {
//   category: "Planning",
//   question: "Qualitative Risk Analysis",
//   answer: "A process of prioritizing risks based on their probability and impact."
// },
// {
//   category: "Planning",
//   question: "Quantitative Risk Analysis",
//   answer: "A process of numerically analyzing the impact of risks on project objectives."
// },
// {
//   category: "Planning",
//   question: "Risk Response Planning",
//   answer: "A process of developing strategies to address risks, including mitigation, acceptance, and avoidance."
// },
// {
//   category: "Planning",
//   question: "Procurement Statement of Work (SOW)",
//   answer: "A document that describes the procurement work to be done and the deliverables expected."
// },
// {
//   category: "Planning",
//   question: "Make-or-Buy Analysis",
//   answer: "A technique to decide whether to produce a product internally or purchase it from an external supplier."
// },
// {
//   category: "Planning",
//   question: "Vendor Bid Analysis",
//   answer: "A process of comparing bids from vendors to select the best offer for the project."
// },
// {
//   category: "Planning",
//   question: "Contracts",
//   answer: "Legally binding agreements between the buyer and seller that outline deliverables, payment terms, and responsibilities."
// },
// {
//   category: "Planning",
//   question: "Stakeholder Register (Updated)",
//   answer: "A document that contains updated information about stakeholders, including their influence and engagement levels."
// },
// {
//   category: "Planning",
//   question: "Stakeholder Analysis (Updated)",
//   answer: "An analysis to further understand stakeholder expectations, needs, and their influence on the project."
// },
// {
//   category: "Planning",
//   question: "Communication Channels",
//   answer: "The methods and tools used to communicate with project stakeholders."
// },
// {
//   category: "Planning",
//   question: "Performance Reporting",
//   answer: "The process of collecting and distributing performance information, such as progress reports and earned value metrics."
// },
// {
//   category: "Planning",
//   question: "Quality Metrics",
//   answer: "Specific measures used to determine the quality of project deliverables."
// },
// {
//   category: "Planning",
//   question: "Control Limits",
//   answer: "The boundaries of acceptable variation in project performance."
// },
// {
//   category: "Planning",
//   question: "Change Management Plan",
//   answer: "A plan that outlines how changes to the project will be managed and controlled."
// },
// {
//   category: "Planning",
//   question: "Baseline Approval",
//   answer: "The process of formally approving scope, schedule, and cost baselines."
// },
// {
//   category: "Planning",
//   question: "Kick-Off Meeting (Planning Phase)",
//   answer: "A meeting to communicate the approved project plan and establish team roles and responsibilities."
// },
// {
//   category: "Planning",
//   question: "Rolling Wave Planning",
//   answer: "An iterative planning technique where work to be accomplished in the near term is planned in detail, while work farther in the future is planned at a higher level."
// },
//       {
//         "category": "Execution",
//         "question": "Direct and Manage Project Work",
//         "answer": "The process of leading and performing the work defined in the project management plan."
//       },
//       {
//         "category": "Execution",
//         "question": "Manage Project Team",
//         "answer": "The process of tracking team member performance and resolving issues to optimize project performance."
//       },
//       {
//         "category": "Execution",
//         "question": "Manage Communications",
//         "answer": "Ensuring timely and appropriate generation, collection, dissemination, and management of project information."
//       },
//       {
//         "category": "Execution",
//         "question": "Manage Stakeholder Engagement",
//         "answer": "Actively engaging stakeholders to meet their needs and expectations."
//       },
//       {
//         "category": "Execution",
//         "question": "Implement Risk Responses",
//         "answer": "The process of implementing agreed-upon risk response plans."
//       },
//       {
//         "category": "Execution",
//         "question": "Acquire Resources",
//         "answer": "Obtaining the team members, equipment, materials, and other resources necessary for project work."
//       },
//       {
//         "category": "Execution",
//         "question": "Develop Team",
//         "answer": "Improving team members' competencies, interaction, and overall team environment to enhance project performance."
//       },
//       {
//         "category": "Execution",
//         "question": "Conduct Procurements",
//         "answer": "Obtaining seller responses, selecting sellers, and awarding contracts."
//       },
//       {
//         "category": "Execution",
//         "question": "Manage Quality",
//         "answer": "Translating the quality management plan into actionable quality activities."
//       },
//       {
//         "category": "Execution",
//         "question": "Perform Quality Audits",
//         "answer": "A structured review to ensure project processes comply with organizational policies and standards."
//       },
//       {
//         "category": "Execution",
//         "question": "Leadership",
//         "answer": "Providing vision, direction, and motivation to the project team."
//       },
//       {
//         "category": "Execution",
//         "question": "Teamwork",
//         "answer": "Collaborative effort by the team to achieve project goals."
//       },
//       {
//         "category": "Execution",
//         "question": "Project Charter Updates",
//         "answer": "Revisions made to the project charter during execution based on approved changes."
//       },
//       {
//         "category": "Execution",
//         "question": "Deliverables",
//         "answer": "Any unique and verifiable product, result, or capability produced as part of a project."
//       },
//       {
//         "category": "Execution",
//         "question": "Approved Change Requests",
//         "answer": "Change requests that have been approved and are implemented during project execution."
//       },
//       {
//         "category": "Execution",
//         "question": "Work Performance Data",
//         "answer": "Raw data on project work, such as status reports, used to monitor project progress."
//       },
//       {
//         "category": "Execution",
//         "question": "Work Performance Reports",
//         "answer": "Reports generated based on work performance data and used for decision-making."
//       },
//       {
//         "category": "Execution",
//         "question": "Issue Log",
//         "answer": "A document used to track project issues and their resolution."
//       },
//       {
//         "category": "Execution",
//         "question": "Change Log",
//         "answer": "A document that tracks all changes and their status throughout the project."
//       },
//       {
//         "category": "Execution",
//         "question": "Team Performance Assessments",
//         "answer": "Evaluations of team performance to identify improvements or corrections."
//       },
//       {
//         "category": "Execution",
//         "question": "Project Team Assignments",
//         "answer": "Assigning specific roles and responsibilities to project team members."
//       },
//       {
//         "category": "Execution",
//         "question": "Resource Calendars",
//         "answer": "A schedule that outlines when and where project resources will be used."
//       },
//       {
//         "category": "Execution",
//         "question": "Conflict Management",
//         "answer": "Resolving conflicts within the team to maintain productivity."
//       },
//       {
//         "category": "Execution",
//         "question": "Motivation",
//         "answer": "Encouraging team members to complete tasks effectively and meet project goals."
//       },
//       {
//         "category": "Execution",
//         "question": "Negotiation",
//         "answer": "Engaging with stakeholders and team members to resolve differences and agree on project decisions."
//       },
//       {
//         "category": "Execution",
//         "question": "Interpersonal Skills",
//         "answer": "Using communication, leadership, and negotiation to manage team performance and stakeholder engagement."
//       },
//       {
//         "category": "Execution",
//         "question": "Status Meetings",
//         "answer": "Regular meetings to review project progress and identify any issues or changes."
//       },
//       {
//         "category": "Execution",
//         "question": "Progress Reports",
//         "answer": "Reports summarizing the current state of the project, including accomplishments and risks."
//       },
//       {
//         "category": "Execution",
//         "question": "Performance Reviews",
//         "answer": "Evaluating team members or vendors based on their contributions to the project."
//       },
//       {
//         "category": "Execution",
//         "question": "Information Management Systems",
//         "answer": "Systems used to store and distribute project information."
//       },
//       {
//         "category": "Execution",
//         "question": "Communication Channels",
//         "answer": "The paths through which information is shared with stakeholders."
//       },
//       {
//         "category": "Execution",
//         "question": "Kick-Off Meeting (Execution Phase)",
//         "answer": "A meeting to start the execution of the project and set expectations."
//       },
//       {
//         "category": "Execution",
//         "question": "Task Assignment",
//         "answer": "Allocating specific tasks to team members based on their skills and workload."
//       },
//       {
//         "category": "Execution",
//         "question": "Corrective Actions",
//         "answer": "Steps taken to bring project performance back in line with the plan."
//       },
//       {
//         "category": "Execution",
//         "question": "Preventive Actions",
//         "answer": "Steps taken to ensure future project activities do not deviate from the plan."
//       },
//       {
//         "category": "Execution",
//         "question": "Procurement Agreements",
//         "answer": "Formal agreements between the buyer and seller outlining the terms of the project procurement."
//       },
//       {
//         "category": "Execution",
//         "question": "Performance Measurement Baseline",
//         "answer": "The scope, schedule, and cost baselines used to compare project performance."
//       },
//       {
//         "category": "Execution",
//         "question": "Supplier Performance Review",
//         "answer": "Evaluating the performance of vendors or contractors to ensure they meet project needs."
//       },
//       {
//         "category": "Execution",
//         "question": "Technical Performance Measurement",
//         "answer": "Comparing technical achievements with the project plan to assess progress."
//       },
//       {
//         "category": "Execution",
//         "question": "Knowledge Management",
//         "answer": "Capturing, distributing, and effectively using project knowledge to enhance decision-making."
//       },
//       {
//         "category": "Execution",
//         "question": "Benchmarking",
//         "answer": "Comparing project performance with that of other similar projects or industry standards."
//       },
//       {
//         "category": "Execution",
//         "question": "Team Building Activities",
//         "answer": "Activities aimed at fostering team cooperation and cohesion."
//       },
//       {
//         "category": "Execution",
//         "question": "Variance Analysis",
//         "answer": "Comparing actual project results with planned performance."
//       },
//       {
//         "category": "Execution",
//         "question": "Change Control Board (CCB)",
//         "answer": "A group of stakeholders responsible for reviewing and approving change requests."
//       },
//       {
//         "category": "Execution",
//         "question": "Training",
//         "answer": "Providing education or practice to the project team to develop required skills and knowledge."
//       },
//       {
//         "category": "Execution",
//         "question": "Stakeholder Feedback",
//         "answer": "Gathering feedback from stakeholders on project deliverables and progress."
//       },
//       {
//         "category": "Execution",
//         "question": "Supplier Contracts",
//         "answer": "Legally binding agreements between the project team and external suppliers."
//       },
//       {
//         "category": "Execution",
//         "question": "Scope Validation",
//         "answer": "Ensuring that deliverables meet the requirements outlined in the scope statement."
//       },
//       {
//         "category": "Execution",
//         "question": "Monitoring Project Work",
//         "answer": "Keeping track of project progress and making adjustments as necessary to stay on track."
//       },
//       {
//         "category": "Execution",
//         "question": "Risk Mitigation",
//         "answer": "Implementing strategies to reduce the probability or impact of identified risks."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Monitor and Control Project Work",
//         "answer": "Tracking, reviewing, and reporting project progress to meet performance objectives."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Perform Integrated Change Control",
//         "answer": "Reviewing all change requests, approving changes, and managing changes to deliverables and project documents."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Validate Scope",
//         "answer": "Formalizing acceptance of the completed project deliverables."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Control Scope",
//         "answer": "Monitoring the project’s scope and managing scope changes."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Control Schedule",
//         "answer": "Monitoring the status of the project schedule and managing changes to the schedule baseline."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Control Costs",
//         "answer": "Monitoring the status of the project budget and managing changes to the cost baseline."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Control Quality",
//         "answer": "Monitoring and recording results of quality activities to ensure compliance with quality standards."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Control Resources",
//         "answer": "Ensuring that the physical resources assigned and allocated to the project are available as planned."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Monitor Communications",
//         "answer": "Ensuring timely and appropriate collection, creation, distribution, storage, and retrieval of project information."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Monitor Risks",
//         "answer": "Monitoring identified risks, implementing risk response plans, and tracking new risks."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Control Procurement",
//         "answer": "Managing procurement relationships, monitoring contract performance, and making changes as needed."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Monitor Stakeholder Engagement",
//         "answer": "Monitoring stakeholder relationships and adjusting engagement strategies as necessary."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Change Requests",
//         "answer": "Formal proposals for modifications to project scope, schedule, or cost."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Corrective Actions",
//         "answer": "Actions taken to realign project performance with the project management plan."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Preventive Actions",
//         "answer": "Steps to avoid potential future issues that could negatively impact the project."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Work Performance Information",
//         "answer": "Performance data collected from various controlling processes, analyzed in the context of the project."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Work Performance Reports",
//         "answer": "Compiled status reports, memos, and dashboards shared with stakeholders to communicate project performance."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Variance Analysis",
//         "answer": "Comparing planned project performance to actual results to identify differences and their causes."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Earned Value Management (EVM)",
//         "answer": "A technique for measuring project performance and progress in an objective manner."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Schedule Variance (SV)",
//         "answer": "The difference between the work performed and work planned (SV = EV – PV)."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Cost Variance (CV)",
//         "answer": "The difference between the earned value and the actual cost (CV = EV – AC)."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Schedule Performance Index (SPI)",
//         "answer": "A measure of schedule efficiency (SPI = EV ÷ PV)."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Cost Performance Index (CPI)",
//         "answer": "A measure of cost efficiency (CPI = EV ÷ AC)."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Estimate to Complete (ETC)",
//         "answer": "The expected cost needed to complete all remaining project work."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Estimate at Completion (EAC)",
//         "answer": "The expected total cost of completing all work, based on performance to date."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "To-Complete Performance Index (TCPI)",
//         "answer": "A measure of the cost performance needed to complete the remaining work within the budget."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Forecasting",
//         "answer": "Estimating future project performance based on current data."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Risk Reassessment",
//         "answer": "Periodic review of risks to evaluate the project’s risk exposure."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Trend Analysis",
//         "answer": "Using historical project data to identify patterns and predict future performance."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Technical Performance Measurement",
//         "answer": "Comparing technical achievements to the performance baseline."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Control Charts",
//         "answer": "Graphical tools used to determine if a process is within acceptable limits."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Root Cause Analysis",
//         "answer": "Identifying the underlying causes of a problem or issue in the project."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Inspection",
//         "answer": "A review activity to ensure deliverables meet required standards."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Performance Reviews",
//         "answer": "Assessing the team’s work performance to evaluate progress toward project objectives."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Configuration Management Plan",
//         "answer": "Managing changes to the project’s deliverables and ensuring consistency throughout the project."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Status Review Meetings",
//         "answer": "Regularly scheduled meetings to discuss project progress and performance."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Quality Control Measurements",
//         "answer": "Documented results of control quality activities that are used to verify quality standards."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Integrated Change Control",
//         "answer": "Managing change requests and ensuring they are incorporated into project baselines."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Work Authorization System",
//         "answer": "A formal system to ensure work is performed at the right time by the right resources."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Regression Analysis",
//         "answer": "A statistical method to estimate relationships between variables for forecasting project trends."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Schedule Baseline",
//         "answer": "The approved version of the project schedule used as a reference to monitor progress."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Cost Baseline",
//         "answer": "The approved version of the budget used as a basis for measuring performance."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Requirements Traceability Matrix",
//         "answer": "A document that links requirements throughout the project lifecycle to ensure they are met."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Scope Creep",
//         "answer": "The uncontrolled expansion of project scope without adjustments to time, cost, and resources."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Audit",
//         "answer": "A formal examination of project work to ensure compliance with standards and policies."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Key Performance Indicators (KPIs)",
//         "answer": "Specific metrics used to measure the performance of the project."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Milestone List",
//         "answer": "A list of significant points or events in the project timeline."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Stakeholder Feedback",
//         "answer": "Input from stakeholders used to monitor engagement and manage expectations."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Resource Optimization",
//         "answer": "Techniques used to adjust the availability and assignment of resources to optimize performance."
//       },
//       {
//         "category": "Monitoring and Controlling",
//         "question": "Risk Register Updates",
//         "answer": "Documenting changes in risk conditions and mitigation strategies throughout the project."
//       },
          
      
//         {
//           "category": "Closing",
//           "question": "Project Closure",
//           "answer": "The formal process of completing and concluding all project activities."
//         },
//         {
//           category: "Closing",
//           question: "Project Closure",
//           answer: "The formal process of completing and concluding all project activities."
//         },
//         {
//           category: "Closing",
//           question: "Final Product, Service, or Result Transition",
//           answer: "Transferring the final product or service to the client or operational team."
//         },
//         {
//           category: "Closing",
//           question: "Close Project or Phase",
//           answer: "The process of finalizing all activities for the project, phase, or contract."
//         },
//         {
//           category: "Closing",
//           question: "Lessons Learned",
//           answer: "Documenting what worked well and what didn’t during the project."
//         },
//         {
//           category: "Closing",
//           question: "Final Performance Reporting",
//           answer: "Providing a report on the project’s performance regarding scope, cost, schedule, and quality."
//         },
//         {
//           category: "Closing",
//           question: "Contract Closure",
//           answer: "Ensuring all contracts are completed, terms are met, and documentation is archived."
//         },
//         {
//           category: "Closing",
//           question: "Post-Project Evaluation",
//           answer: "Conducting an evaluation to assess the project’s success and effectiveness."
//         },
//         {
//           category: "Closing",
//           question: "Stakeholder Feedback",
//           answer: "Gathering input from stakeholders to evaluate project satisfaction."
//         },
//         {
//           category: "Closing",
//           question: "Final Risk Review",
//           answer: "Reviewing and documenting how risks were managed throughout the project."
//         },
//         {
//           category: "Closing",
//           question: "Project Archiving",
//           answer: "Safely storing all project-related documents and files for future reference."
//         },
//         {
//           category: "Closing",
//           question: "Project Audit",
//           answer: "A formal review of project performance and adherence to processes."
//         },
//         {
//           category: "Closing",
//           question: "Financial Closure",
//           answer: "Ensuring all project financials are reconciled and closed."
//         },
//         {
//           category: "Closing",
//           question: "Scope Verification",
//           answer: "Ensuring that all deliverables have been completed and meet the defined scope."
//         },
//         {
//           category: "Closing",
//           question: "Procurement Closure",
//           answer: "Ensuring all procurement activities are finalized and contracts are closed."
//         },
//         {
//           category: "Closing",
//           question: "Change Management Review",
//           answer: "Reviewing all approved and implemented changes to ensure they are documented."
//         },
//         {
//           category: "Closing",
//           question: "Operational Handover",
//           answer: "Transferring project deliverables to operations or maintenance teams."
//         },
//         {
//           category: "Closing",
//           question: "Compliance Audit",
//           answer: "A review to ensure the project followed organizational and legal standards."
//         },
//         {
//           category: "Closing",
//           question: "Stakeholder Satisfaction",
//           answer: "Ensuring that the project has met stakeholder expectations."
//         },
//         {
//           category: "Closing",
//           question: "Final Quality Review",
//           answer: "A final check to ensure all quality standards were met."
//         },
//         {
//           category: "Closing",
//           question: "Team Release",
//           answer: "Releasing team members from the project to return to their functional roles."
//         },
//         {
//           category: "Closing",
//           question: "Project Manager’s Final Report",
//           answer: "The project manager’s final evaluation and summary of project success."
//         },
//         {
//           category: "Closing",
//           question: "Issue Log Closure",
//           answer: "Ensuring all project issues have been resolved and the log is closed."
//         },
//         {
//           category: "Closing",
//           question: "Customer Acceptance",
//           answer: "Formal sign-off by the customer acknowledging that the project meets their requirements."
//         },
//         {
//           category: "Closing",
//           question: "Project Success Criteria Evaluation",
//           answer: "Comparing actual outcomes with the predefined success criteria."
//         },
//         {
//           category: "Closing",
//           question: "Final Stakeholder Meeting",
//           answer: "Conducting a meeting to formally close the project and discuss lessons learned."
//         },
//         {
//           category: "Closing",
//           question: "Knowledge Transfer",
//           answer: "Sharing lessons and insights gained with future project teams or departments."
//         },
//         {
//           category: "Closing",
//           question: "Project Endorsement",
//           answer: "Official approval from the project sponsor to close the project."
//         },
//         {
//           category: "Closing",
//           question: "Final Budget Review",
//           answer: "Ensuring the project stayed within budget and closing out any financial obligations."
//         },
//         {
//           category: "Closing",
//           question: "Formal Handover",
//           answer: "Completing the formal transfer of project deliverables to the customer or operations."
//         },
//         {
//           category: "Closing",
//           question: "Project Closeout Checklist",
//           answer: "A detailed checklist ensuring all closure activities are completed."
//         },
//         {
//           category: "Closing",
//           question: "End-of-Project Review Meeting",
//           answer: "A meeting to review project outcomes and finalize documentation."
//         },
//         {
//           category: "Closing",
//           question: "Document Retention",
//           answer: "Storing key project documents according to legal and organizational requirements."
//         },
//         {
//           category: "Closing",
//           question: "Team Debriefing",
//           answer: "A final meeting with the project team to discuss performance and lessons learned."
//         },
       
//         {
//           category: "Closing",
//           question: "Closeout Documentation",
//           answer: "Creating and storing all documents related to the project closure."
//         },
//         {
//           category: "Closing",
//           question: "Customer Handoff",
//           answer: "Delivering the final product or service to the customer with complete documentation."
//         },
//         {
//           category: "Closing",
//           question: "Project Deliverables Acceptance",
//           answer: "Formal acceptance of all deliverables by the customer or project sponsor."
//         },
//         {
//           category: "Closing",
//           question: "Archiving Contracts",
//           answer: "Ensuring that all contracts are stored securely for future reference."
//         },
//         {
//           category: "Closing",
//           question: "Release of Project Resources",
//           answer: "Releasing all project resources, including personnel, equipment, and materials."
//         },
//         {
//           category: "Closing",
//           question: "Final Stakeholder Communication",
//           answer: "Sending a final communication to all stakeholders regarding project closure."
//         },
//         {
//           category: "Closing",
//           question: "End-of-Project Financial Reporting",
//           answer: "Providing a final financial report detailing expenses, revenues, and variances."
//         },
//         {
//           category: "Closing",
//           question: "Audit Report",
//           answer: "A formal report detailing the findings of the project audit."
//         },
//         {
//           category: "Closing",
//           question: "Supplier Evaluations",
//           answer: "Conducting evaluations of suppliers and vendors used during the project."
//         },
//         {
//           category: "Closing",
//           question: "Contractor Release",
//           answer: "Ensuring all contractors have completed their work and are released from the project."
//         },
//         {
//           category: "Closing",
//           question: "Risk Closure",
//           answer: "Ensuring that all risks are closed and documented."
//         },
//         {
//           category: "Closing",
//           question: "Final Approval from Sponsor",
//           answer: "Receiving final approval from the sponsor to officially close the project."
//         },
//         {
//           category: "Closing",
//           question: "Final Status Report",
//           answer: "A report detailing the overall status of the project at closure."
//         },
//         {
//           category: "Closing",
//           question: "Project Success Celebration",
//           answer: "Recognizing the efforts of the project team and celebrating the project’s success."
//         },
//         {
//           category: "Closing",
//           question: "Post-Implementation Review",
//           answer: "A review conducted after the project is closed to assess its long-term benefits."
//         },
//         {
//           category: "Closing",
//           question: "Close Project Documentation",
//           answer: "Ensuring all closure documents are complete, accurate, and archived."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Agile Manifesto",
//           "answer": "A set of 4 values and 12 principles that define the Agile philosophy for software development."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Individuals and Interactions",
//           "answer": "Prioritizing people and communication over processes and tools."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Working Software",
//           "answer": "Delivering functional software is more valuable than comprehensive documentation."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Customer Collaboration",
//           "answer": "Engaging with customers regularly to ensure their needs are met, over rigid contract negotiations."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Responding to Change",
//           "answer": "Adapting to changes in requirements or environment rather than following a fixed plan."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Simplicity",
//           "answer": "Maximizing the amount of work not done, focusing only on essential tasks."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Sustainable Pace",
//           "answer": "Teams should work at a constant pace that can be maintained indefinitely."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Continuous Delivery",
//           "answer": "Delivering valuable features frequently, with shorter timeframes."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Customer Satisfaction",
//           "answer": "Ensuring customer satisfaction by delivering valuable and working software early and continuously."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Embracing Change",
//           "answer": "Welcoming changes to improve product value, even late in development."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Cross-Functional Teams",
//           "answer": "Teams with all the skills necessary to deliver a working product increment."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Self-Organizing Teams",
//           "answer": "Teams that manage their own work, without heavy direction from management."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Face-to-Face Communication",
//           "answer": "The most effective form of communication within Agile teams."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Frequent Feedback",
//           "answer": "Receiving regular feedback from stakeholders to ensure the product meets their needs."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Incremental Development",
//           "answer": "Breaking down projects into smaller, manageable parts that can be delivered in stages."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Iterative Process",
//           "answer": "Continuously improving the product through repeated cycles of development and refinement."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Daily Standup",
//           "answer": "A brief, daily meeting where team members discuss progress, plans, and obstacles."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Product Backlog",
//           "answer": "A prioritized list of features or tasks that need to be completed for a project."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Sprint",
//           "answer": "A time-boxed iteration, usually lasting 1-4 weeks, where the team works on a defined set of tasks."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Sprint Retrospective",
//           "answer": "A meeting held at the end of each sprint to reflect on what went well and what can be improved."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Sprint Planning",
//           "answer": "A meeting where the team decides which items from the product backlog will be completed during the next sprint."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "User Stories",
//           "answer": "Short descriptions of features from the perspective of the end user."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Definition of Done",
//           "answer": "A shared understanding among the team of what needs to be completed for a user story or task to be considered finished."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Velocity",
//           "answer": "A measure of how much work a team completes during a sprint, used to predict future performance."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Burndown Chart",
//           "answer": "A visual representation of the amount of work remaining in a sprint or project."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Product Owner",
//           "answer": "The person responsible for defining the features of the product and prioritizing the backlog."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Scrum Master",
//           "answer": "A facilitator responsible for ensuring the Scrum process is followed and removing obstacles for the team."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Agile Coach",
//           "answer": "An expert who helps teams adopt and improve Agile practices."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Kanban",
//           "answer": "A visual system for managing workflow, typically using boards to track tasks through different stages."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Servant Leadership",
//           "answer": "A leadership approach where the leader focuses on supporting and enabling the team rather than controlling them."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Empowerment",
//           "answer": "Giving teams the authority and autonomy to make decisions and solve problems."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Continuous Improvement",
//           "answer": "The process of always looking for ways to improve team performance and product quality."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Test-Driven Development (TDD)",
//           "answer": "Writing tests before writing the corresponding code, ensuring that all new code is tested."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Refactoring",
//           "answer": "Revising and improving existing code without changing its behavior, to make it cleaner and more efficient."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Pair Programming",
//           "answer": "Two developers working together at one computer, with one writing the code and the other reviewing it in real-time."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Adaptive Planning",
//           "answer": "Adjusting the plan as needed throughout the project to respond to changes and feedback."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Agile Values",
//           "answer": "The four main values in the Agile Manifesto: Individuals and interactions, working software, customer collaboration, and responding to change."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Agile Principles",
//           "answer": "The 12 guiding principles behind the Agile methodology, promoting flexibility, collaboration, and continuous delivery."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Collaboration",
//           "answer": "Working together within the team and with stakeholders to achieve the best possible outcome."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Iteration Review",
//           "answer": "A meeting to demonstrate completed work and gather feedback from stakeholders at the end of each iteration."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Lean Thinking",
//           "answer": "A methodology focused on maximizing customer value while minimizing waste."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Minimum Viable Product (MVP)",
//           "answer": "A product with just enough features to satisfy early customers and provide feedback for future development."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Backlog Grooming",
//           "answer": "The process of refining the product backlog, adding details, estimates, and priorities to items."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Timeboxing",
//           "answer": "Setting a fixed amount of time for activities, helping teams stay focused and avoid overworking tasks."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Agile Mindset",
//           "answer": "A mindset focused on adaptability, collaboration, customer satisfaction, and continuous improvement."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Transparency",
//           "answer": "Ensuring that all stakeholders have visibility into the project’s progress and challenges."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Agile Roadmap",
//           "answer": "A high-level plan that outlines the direction of product development over time."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Sprint Goal",
//           "answer": "The objective or purpose that a sprint aims to achieve."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Agile Metrics",
//           "answer": "Measurements used to assess the performance of an Agile team, such as velocity, lead time, or cycle time."
//         },
//         {
//           "category": "Agile Principles and Mindset",
//           "question": "Agile Release Planning",
//           "answer": "Planning for future releases in a way that adapts to the evolving nature of Agile projects."
//         },
        
       
//         {
//           "category": "Agile Methodology",
//           "question": "Scrum",
//           "answer": "An Agile framework for managing work that focuses on iterative progress through sprints."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Sprint",
//           "answer": "A time-boxed iteration, typically lasting 1-4 weeks, in which a set amount of work is completed."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Scrum Master",
//           "answer": "A facilitator responsible for ensuring the Scrum process is followed and removing impediments for the team."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Product Owner",
//           "answer": "The person responsible for defining the product backlog, prioritizing features, and ensuring the team delivers value."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Development Team",
//           "answer": "A cross-functional team responsible for delivering potentially shippable product increments during each sprint."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Sprint Planning",
//           "answer": "A meeting where the Scrum team defines the sprint goal and decides which product backlog items to work on."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Daily Scrum",
//           "answer": "A short, daily meeting where the team discusses progress, plans, and any impediments."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Sprint Review",
//           "answer": "A meeting held at the end of a sprint where the team presents the completed work to stakeholders."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Sprint Retrospective",
//           "answer": "A meeting where the Scrum team reflects on the sprint and identifies areas for improvement."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Product Backlog",
//           "answer": "A prioritized list of features, enhancements, and fixes that are needed for the product."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Sprint Backlog",
//           "answer": "The subset of product backlog items selected for the current sprint, along with the team's plan for completing them."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Increment",
//           "answer": "A tangible output of the sprint, representing a portion of the final product that is potentially shippable."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Definition of Done",
//           "answer": "A shared understanding of what needs to be completed for a user story or task to be considered finished."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Burndown Chart",
//           "answer": "A visual representation of the amount of work remaining in a sprint or project."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Velocity",
//           "answer": "A measure of how much work the team completes during each sprint, used for planning future sprints."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Extreme Programming (XP)",
//           "answer": "An Agile methodology focused on improving software quality through frequent releases and ongoing feedback."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Pair Programming",
//           "answer": "A practice where two developers work together at one computer, with one writing the code and the other reviewing it in real time."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Test-Driven Development (TDD)",
//           "answer": "Writing tests before writing the corresponding code to ensure that all new code is tested."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Continuous Integration",
//           "answer": "Automatically integrating code into a shared repository several times a day to detect issues early."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Refactoring",
//           "answer": "Improving the internal structure of existing code without changing its external behavior."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Collective Code Ownership",
//           "answer": "All team members are responsible for the codebase, and any member can change any part of the code."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "YAGNI",
//           "answer": "\"You Aren’t Gonna Need It\" – A principle of XP that discourages building features until they are actually needed."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Simplicity",
//           "answer": "A key XP principle that encourages keeping the design and code as simple as possible."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Customer Collaboration",
//           "answer": "Having a representative of the customer available at all times to answer questions and provide feedback."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Frequent Releases",
//           "answer": "Delivering small, incremental releases frequently to gain feedback and ensure rapid improvements."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Kanban",
//           "answer": "An Agile methodology that focuses on visualizing work, limiting work in progress, and improving flow."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Kanban Board",
//           "answer": "A visual tool used to map out work items through different stages of the process, often using columns like 'To Do,' 'In Progress,' and 'Done.'"
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Work in Progress (WIP)",
//           "answer": "The number of tasks or work items that a team is actively working on at any given time."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Pull System",
//           "answer": "A system where new work is started only when the team has capacity, as opposed to pushing new tasks onto the team."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Cycle Time",
//           "answer": "The amount of time it takes for a task to move from the start to completion on the Kanban board."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Lead Time",
//           "answer": "The total time it takes for a task or work item to be completed from the moment it is requested."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Cumulative Flow Diagram (CFD)",
//           "answer": "A visual chart showing the number of tasks in each stage of the workflow over time."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Throughput",
//           "answer": "The number of work items completed by a team within a given time period."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Service-Level Agreement (SLA)",
//           "answer": "An agreement that defines the expected time frames for completing tasks based on priority."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Continuous Delivery",
//           "answer": "Delivering work to customers as soon as it is completed, without waiting for large batches."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Lean",
//           "answer": "A methodology focused on maximizing customer value while minimizing waste."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Value Stream Mapping",
//           "answer": "A tool used to analyze the flow of materials and information required to bring a product to the customer."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Kaizen",
//           "answer": "A philosophy of continuous improvement in small, incremental changes to processes."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Muda",
//           "answer": "A Lean term for waste or activities that do not add value to the customer."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Just-in-Time (JIT)",
//           "answer": "Producing only what is needed, when it is needed, in order to reduce waste and improve efficiency."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Poka-Yoke",
//           "answer": "A Lean principle focused on mistake-proofing processes to prevent errors before they occur."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Backlog Refinement",
//           "answer": "The process of reviewing and improving items in the product backlog by adding details, estimates, and priorities."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Story Points",
//           "answer": "A unit of measure used to estimate the complexity of user stories or tasks in Agile projects."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Epic",
//           "answer": "A large user story that is too big to be completed in a single sprint and needs to be broken down into smaller stories."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "User Story",
//           "answer": "A brief description of a feature or function from the end user's perspective, typically written as 'As a [user], I want [feature] so that [benefit].'"
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Burnup Chart",
//           "answer": "A chart that shows the amount of work completed and the total amount of work remaining in a project."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Continuous Deployment",
//           "answer": "Automatically deploying software to production as soon as it passes automated testing."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Agile Estimation",
//           "answer": "A method for estimating the time and effort required for completing user stories, often using techniques like Planning Poker."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "MoSCoW Method",
//           "answer": "A prioritization technique used to categorize tasks or requirements as Must Have, Should Have, Could Have, or Won’t Have."
//         },
//         {
//           "category": "Agile Methodology",
//           "question": "Information Radiator",
//           "answer": "A visual tool, such as a task board or chart, used to communicate the status of the project to all team members."
//         },    
        
//         {
//           "category": "Agile Ceremonies",
//           "question": "Sprint Planning",
//           "answer": "A ceremony where the Scrum team defines the work to be completed during the sprint, determining the sprint goal."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Daily Standup",
//           "answer": "A short, daily meeting where the team discusses progress, plans for the day, and obstacles."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Sprint Review",
//           "answer": "A meeting held at the end of the sprint to demonstrate the completed work and gather feedback from stakeholders."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Sprint Retrospective",
//           "answer": "A ceremony where the Scrum team reflects on the sprint, discusses what went well, and identifies areas for improvement."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Backlog Refinement",
//           "answer": "An ongoing activity where the team reviews and updates items in the product backlog for future sprints."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Kanban Replenishment Meeting",
//           "answer": "A meeting to prioritize and pull new items into the Kanban system based on capacity and workflow limits."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Daily Kanban Standup",
//           "answer": "Similar to the Scrum daily standup, team members discuss progress, plans, and any blockers."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Service Delivery Review",
//           "answer": "A meeting where the team reviews service delivery performance, such as throughput, lead times, and quality metrics."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Operations Review",
//           "answer": "A periodic meeting to discuss operational aspects and improve workflow processes."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Pair Programming",
//           "answer": "A practice where two developers work together at one workstation to ensure higher quality code through real-time review."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "TDD (Test-Driven Development)",
//           "answer": "A practice of writing tests before writing code, ensuring all code is tested and functional."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Continuous Integration",
//           "answer": "Regularly merging code into a shared repository to detect integration issues early."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Planning Game",
//           "answer": "A collaborative meeting where developers and stakeholders agree on priorities for the next iteration."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Standup Meeting",
//           "answer": "Daily XP standup to discuss progress, plans, and impediments."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Value Stream Mapping",
//           "answer": "A Lean practice of identifying all actions (value-added and non-value-added) required to bring a product to the customer."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Kaizen",
//           "answer": "A Lean concept focusing on continuous improvement through small, incremental changes."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Lean Daily Huddle",
//           "answer": "A brief meeting where team members discuss process improvements and progress on removing waste."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Iteration Review",
//           "answer": "A meeting at the end of an iteration to review the completed work and get feedback."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Showcase or Demo",
//           "answer": "A session where the development team demonstrates completed features to stakeholders to gather feedback."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Release Planning",
//           "answer": "A ceremony where teams plan upcoming product releases and map out features to be developed over the next few sprints."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Sprint Goal",
//           "answer": "The objective or purpose for a sprint, agreed upon during sprint planning."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Iteration",
//           "answer": "A time-boxed period where work is completed and reviewed."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Product Backlog",
//           "answer": "A list of prioritized features or tasks awaiting completion."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Sprint Backlog",
//           "answer": "A list of items to be completed during a specific sprint."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Definition of Done",
//           "answer": "A shared agreement of what it means for a product increment to be considered finished."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Facilitation",
//           "answer": "The act of guiding meetings, ensuring that objectives are met, and keeping discussions on track."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Timeboxing",
//           "answer": "Setting a fixed amount of time for activities to limit overworking and focus on essential tasks."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Round Robin",
//           "answer": "A technique used in meetings to give every participant an opportunity to speak and contribute."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Scrum Master",
//           "answer": "A facilitator of Scrum ceremonies and a servant leader to the team."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Product Owner",
//           "answer": "Responsible for managing the product backlog and ensuring the team is working on the highest-priority items."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Development Team",
//           "answer": "The group responsible for delivering increments of working software."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Stakeholders",
//           "answer": "Those with a vested interest in the product, often participating in reviews and demos."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "PI (Program Increment) Planning",
//           "answer": "In SAFe (Scaled Agile Framework), this is a large event where multiple teams plan their upcoming increments."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Big Room Planning",
//           "answer": "A large-scale planning event used in frameworks like SAFe, involving all teams in an Agile Release Train."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Scrum of Scrums",
//           "answer": "A scaled Agile ceremony where representatives from multiple Scrum teams meet to discuss cross-team coordination."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Release Train Engineer (RTE)",
//           "answer": "In SAFe, the RTE facilitates ART ceremonies, similar to a Scrum Master for large teams."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Sprint Grooming",
//           "answer": "An informal meeting to prepare the backlog for future sprints by breaking down user stories and clarifying requirements."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Retrospective Feedback",
//           "answer": "A process in which the team reflects on feedback from previous iterations and applies lessons learned."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Customer Feedback",
//           "answer": "Direct input from customers that is incorporated into future sprints to improve the product."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Review Sessions",
//           "answer": "Meetings focused on gathering feedback from stakeholders after a sprint or iteration."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Inspect and Adapt",
//           "answer": "A process where teams regularly inspect their practices and adapt to improve productivity and product quality."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Burndown Chart",
//           "answer": "A visual representation of the remaining work in a sprint or project."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Burnup Chart",
//           "answer": "A chart that shows how much work has been completed in a project or iteration."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Velocity",
//           "answer": "The rate at which a team completes work, usually measured in story points per sprint."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Cumulative Flow Diagram",
//           "answer": "A visual tool used in Kanban to track the progress of work items through different stages."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Lead Time",
//           "answer": "The total time it takes for a user story or task to be completed from when it was added to the backlog."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Cycle Time",
//           "answer": "The time it takes to complete a task from the moment it is started to when it is finished."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Throughput",
//           "answer": "The number of tasks or user stories completed within a given time frame."
//         },
//         {
//           "category": "Agile Ceremonies",
//           "question": "Capacity Planning",
//           "answer": "Estimating the team’s available capacity to complete work during a sprint or iteration."
//         },
//         {
//       "category": "Agile Ceremonies",
//       "question": "Velocity",
//       "answer": "The rate at which a team completes work, usually measured in story points per sprint."
//     },
          
//               {
//                 "category": "Servant Leadership",
//                 "question": "Servant Leadership",
//                 "answer": "A leadership philosophy where the primary focus is on serving others, empowering team members, and fostering their growth."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Empowerment",
//                 "answer": "The process of giving team members the authority and responsibility to make decisions and take ownership of their work."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Active Listening",
//                 "answer": "The practice of fully concentrating, understanding, and responding thoughtfully to team members' input and concerns."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Empathy",
//                 "answer": "The ability to understand and share the feelings of others, crucial for building strong relationships and trust within the team."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Trust-Building",
//                 "answer": "The process of creating a dependable and reliable environment where team members feel secure and valued."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Collaboration",
//                 "answer": "Working together with team members to achieve common goals, fostering a cooperative and inclusive work environment."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Humility",
//                 "answer": "The quality of being humble and recognizing that leadership is about serving others rather than seeking personal gain or recognition."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Authenticity",
//                 "answer": "Being genuine and transparent in interactions with team members, promoting a culture of honesty and openness."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Vision",
//                 "answer": "Providing a clear and inspiring direction for the team, aligning their efforts with overarching goals and objectives."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Stewardship",
//                 "answer": "The responsibility to manage and care for resources, including team members' talents and the organization's assets, responsibly and ethically."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Facilitator",
//                 "answer": "A leader who helps guide and support the team in reaching their goals, removing obstacles, and enabling effective collaboration."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Mentorship",
//                 "answer": "Providing guidance, support, and advice to help team members develop their skills and achieve their professional goals."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Delegation",
//                 "answer": "The act of assigning tasks and responsibilities to team members, empowering them to take ownership of their work."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Conflict Resolution",
//                 "answer": "Addressing and resolving conflicts in a way that respects all parties involved and seeks constructive outcomes."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Recognition",
//                 "answer": "Acknowledging and celebrating the contributions and achievements of team members to boost morale and motivation."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Feedback",
//                 "answer": "Offering constructive and supportive feedback to help team members improve their performance and develop their skills."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Supportiveness",
//                 "answer": "Providing assistance and encouragement to team members, helping them overcome challenges and succeed in their roles."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Problem-Solving",
//                 "answer": "Working collaboratively with the team to identify and address issues, fostering a proactive approach to overcoming obstacles."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Inclusivity",
//                 "answer": "Ensuring that all team members feel valued and included, regardless of their background or role, and promoting a diverse work environment."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Servant Leadership Model",
//                 "answer": "A framework that outlines the principles and practices of servant leadership, emphasizing the importance of serving others first."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Lead by Example",
//                 "answer": "Demonstrating desired behaviors and attitudes through personal actions to inspire and guide the team."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Encourage Innovation",
//                 "answer": "Supporting and fostering a culture of creativity and experimentation, allowing team members to propose and test new ideas."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Accountability",
//                 "answer": "Holding oneself and the team responsible for their actions and outcomes, ensuring that commitments are met and standards are upheld."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Supportive Communication",
//                 "answer": "Engaging in open and respectful communication that encourages dialogue and feedback."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Coaching",
//                 "answer": "Providing guidance and support to help team members enhance their skills and performance through structured interactions and mentoring."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Respect for Individuality",
//                 "answer": "Valuing and honoring the unique contributions, perspectives, and talents of each team member."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Service Orientation",
//                 "answer": "Adopting a mindset focused on meeting the needs of team members and stakeholders, prioritizing their well-being and success."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Encourage Autonomy",
//                 "answer": "Allowing team members the freedom to make decisions and take initiative, fostering a sense of ownership and responsibility."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Leadership Development",
//                 "answer": "Investing in the growth and development of future leaders within the organization, promoting a culture of continuous learning."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Emotional Intelligence",
//                 "answer": "Recognizing and managing one's own emotions and those of others to build effective relationships and navigate interpersonal dynamics."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Cultural Alignment",
//                 "answer": "Ensuring that the principles of servant leadership are integrated into the organization's culture and practices."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Visionary Leadership",
//                 "answer": "Providing strategic direction and inspiring the team with a compelling vision that aligns with organizational goals."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Ethical Leadership",
//                 "answer": "Upholding high standards of integrity and ethics, serving as a role model for ethical behavior within the organization."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Organizational Resilience",
//                 "answer": "Building a strong and adaptable organization capable of responding effectively to challenges and changes."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Team Empowerment",
//                 "answer": "Fostering a work environment where team members are encouraged to take ownership and contribute to decision-making processes."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Servant Leadership Practices",
//                 "answer": "Specific actions and behaviors that exemplify servant leadership, such as mentoring, active listening, and supporting team growth."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Supportive Work Environment",
//                 "answer": "Creating a positive and nurturing workplace where team members feel valued and supported in their roles."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Performance Improvement",
//                 "answer": "Implementing strategies to enhance team performance and achieve better results through supportive leadership practices."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Change Management",
//                 "answer": "Guiding and supporting the team through organizational changes, ensuring that transitions are managed effectively and with empathy."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Organizational Commitment",
//                 "answer": "Demonstrating dedication to the organization's mission, values, and goals, while prioritizing the well-being of team members."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Stakeholder Management",
//                 "answer": "Engaging with stakeholders to understand their needs and expectations, and ensuring their interests are considered in decision-making."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Customer Focus",
//                 "answer": "Prioritizing the needs and satisfaction of customers, ensuring that their feedback informs project and organizational decisions."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Relationship Building",
//                 "answer": "Developing and maintaining strong, positive relationships with stakeholders, team members, and partners."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Transparency",
//                 "answer": "Providing clear and open communication about project status, decisions, and organizational changes."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Collaboration with Stakeholders",
//                 "answer": "Working closely with stakeholders to ensure their input is integrated into project planning and execution."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Value Delivery",
//                 "answer": "Ensuring that the project delivers value to stakeholders and meets their expectations through effective leadership and management."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Ethical Decision-Making",
//                 "answer": "Making decisions that align with ethical standards and the best interests of the organization and its stakeholders."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Stakeholder Feedback",
//                 "answer": "Gathering and incorporating feedback from stakeholders to improve project outcomes and organizational practices."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Customer Satisfaction",
//                 "answer": "Measuring and enhancing customer satisfaction through responsive and service-oriented leadership practices."
//               },
//               {
//                 "category": "Servant Leadership",
//                 "question": "Building Trust with Stakeholders",
//                 "answer": "Establishing and maintaining trust with stakeholders through consistent, reliable, and supportive interactions."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Scrum Board",
//                 "answer": "A visual tool used to track and manage work items in a Scrum process, typically divided into columns representing different stages of work."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Kanban Board",
//                 "answer": "A visual tool for managing work in progress, using columns to represent different stages of the workflow and cards to represent tasks."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "JIRA",
//                 "answer": "A popular Agile project management tool that supports Scrum, Kanban, and other Agile methodologies for tracking issues and managing project work."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Trello",
//                 "answer": "A project management tool that uses boards, lists, and cards to organize tasks and facilitate collaboration in Agile teams."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Asana",
//                 "answer": "A project management software that supports task tracking, project planning, and team collaboration using various Agile techniques."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "VersionOne",
//                 "answer": "An Agile project management tool designed for scaling Agile practices across teams and organizations."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Azure DevOps",
//                 "answer": "A set of development tools and services that support Agile planning, project management, and continuous integration/continuous delivery (CI/CD)."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Confluence",
//                 "answer": "A collaboration tool often used alongside JIRA to create, share, and collaborate on project documentation and knowledge bases."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Burndown Chart",
//                 "answer": "A visual representation of work completed versus work remaining over time in a sprint or project, used to track progress."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Burnup Chart",
//                 "answer": "A chart that shows the amount of work completed versus the total amount of work planned, used to track progress toward project goals."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Product Backlog",
//                 "answer": "A prioritized list of features, enhancements, bug fixes, and other work items that need to be addressed in a project."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Sprint Backlog",
//                 "answer": "A subset of the product backlog, consisting of items selected for completion during a specific sprint."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "User Story",
//                 "answer": "A brief description of a feature or requirement from the perspective of the end user, often used to capture Agile requirements."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Epics",
//                 "answer": "Large user stories that are broken down into smaller, more manageable user stories or tasks."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Story Points",
//                 "answer": "A unit of measure used in Agile to estimate the effort required to complete a user story, often based on complexity and size."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Velocity",
//                 "answer": "A metric that measures the amount of work completed by a team in a sprint, usually expressed in story points or work units."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Continuous Integration (CI)",
//                 "answer": "A practice of regularly integrating code changes into a shared repository to detect issues early and ensure quality."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Continuous Delivery (CD)",
//                 "answer": "An extension of continuous integration where code changes are automatically deployed to a staging or production environment."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Test-Driven Development (TDD)",
//                 "answer": "A development technique where tests are written before the code, ensuring that the code meets the defined requirements."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Behavior-Driven Development (BDD)",
//                 "answer": "A development approach that encourages collaboration between developers, testers, and business stakeholders to define clear behavior specifications."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Pair Programming",
//                 "answer": "An Agile technique where two developers work together at one workstation, with one coding and the other reviewing and guiding."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Sprint Review",
//                 "answer": "A meeting held at the end of a sprint to demonstrate completed work and gather feedback from stakeholders."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Sprint Retrospective",
//                 "answer": "A meeting where the team reflects on the sprint, discussing what went well and what could be improved."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Backlog Refinement",
//                 "answer": "An ongoing process of reviewing and updating the product backlog to ensure that items are well-defined and prioritized."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Release Planning",
//                 "answer": "A process of planning and scheduling releases of features or increments based on the product backlog and stakeholder needs."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "User Story Mapping",
//                 "answer": "A visual technique for organizing and prioritizing user stories to understand the user journey and plan releases."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "MoSCoW Prioritization",
//                 "answer": "A technique for prioritizing requirements by categorizing them as Must have, Should have, Could have, and Won't have."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Affinity Estimation",
//                 "answer": "A technique for estimating the effort required for user stories by grouping similar items and assigning relative effort estimates."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Planning Poker",
//                 "answer": "A consensus-based estimation technique where team members use cards to vote on the effort required for user stories."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Kanban System",
//                 "answer": "A visual management method that uses boards and cards to manage and improve workflow and process efficiency."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Scrum Master",
//                 "answer": "The role responsible for facilitating Scrum ceremonies, removing obstacles, and helping the team adhere to Agile principles."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Product Owner",
//                 "answer": "The role responsible for managing the product backlog, prioritizing work, and ensuring that the team delivers value to stakeholders."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Development Team",
//                 "answer": "The group of professionals responsible for delivering the product increment and implementing user stories."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Definition of Done (DoD)",
//                 "answer": "A shared understanding of what it means for a user story or task to be considered complete and ready for delivery."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Daily Standup (Daily Scrum)",
//                 "answer": "A short, daily meeting where team members discuss progress, plans, and impediments."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Sprint",
//                 "answer": "A time-boxed iteration in Scrum, typically lasting 1-4 weeks, during which work is completed and a product increment is delivered."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Iteration",
//                 "answer": "A time-boxed period in Agile methodologies where work is completed, often synonymous with a sprint in Scrum."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Kanban WIP Limits",
//                 "answer": "Work In Progress limits that restrict the number of tasks allowed in each stage of the Kanban board to improve flow and reduce bottlenecks."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Retrospective Actions",
//                 "answer": "Specific actions or improvements identified during a sprint retrospective and implemented in the next sprint."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Agile Release Train (ART)",
//                 "answer": "A concept in SAFe (Scaled Agile Framework) for organizing multiple teams to work together on large-scale projects."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Scaled Agile Framework (SAFe)",
//                 "answer": "A framework for scaling Agile practices across large organizations, incorporating roles, practices, and principles for multiple teams."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Feature Toggle",
//                 "answer": "A technique for enabling or disabling features in a software application without deploying new code, used to manage releases and test features."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Value Stream Mapping",
//                 "answer": "A Lean technique used to analyze and optimize the flow of work and value delivery in Agile processes."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Cycle Time",
//                 "answer": "The amount of time it takes for a work item to move from the start of the workflow to completion."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Lead Time",
//                 "answer": "The total time taken from the moment a request is made until the work is completed and delivered."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Kanban Metrics",
//                 "answer": "Metrics used in Kanban to track and improve performance, such as cycle time, lead time, and throughput."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Agile Coach",
//                 "answer": "A role focused on mentoring and guiding teams and organizations in Agile practices and principles."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Sprint Goal",
//                 "answer": "A clear and concise objective for a sprint that guides the team’s work and provides focus for the sprint."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Story Mapping",
//                 "answer": "A technique for visualizing user stories and organizing them into a sequence that represents the user journey and prioritization."
//               },
//               {
//                 "category": "Agile Tools & Techniques",
//                 "question": "Feature Prioritization",
//                 "answer": "The process of determining the order in which features should be developed and delivered based on value, risk, and dependencies."
//               },

//             ];

//             const flashcards = category ? allFlashcards.filter(card => card.category.toLowerCase() === category.toLowerCase()) : allFlashcards;

//   const [currentPage, setCurrentPage] = useState(0);
//   const cardsPerPage = 1;
//   const [score, setScore] = useState(0);
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [hasAnswered, setHasAnswered] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [answeredFlashcards, setAnsweredFlashcards] = useState(new Set());

//   useEffect(() => {
//     // Reset state when category changes
//     setScore(0);
//     setHasAnswered(false);
//     setIsFlipped(false);
//     setCurrentPage(0); // Reset page to 0 when category changes
//     setAnsweredFlashcards(new Set()); // Reset answered flashcards
//   }, [category]);

//   useEffect(() => {
//     // Store score in local storage
//     localStorage.setItem(`score-${category}`, score);
//   }, [score, category]);

//   const handleNextClick = () => {
//     if (!hasAnswered) {
//       setShowPopup(true); // Show popup if no response is selected
//     } else {
//       if ((currentPage + 1) * cardsPerPage < flashcards.length) {
//         setCurrentPage(currentPage + 1);
//         setIsFlipped(false);
//         setHasAnswered(false);
//         setShowPopup(false); // Hide popup when moving to the next card
//       }
//     }
//   };

//   const handlePreviousClick = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//       setIsFlipped(false);
//       setHasAnswered(false);
//       setShowPopup(false); // Hide popup when moving to the previous card
//     }
//   };

//   const handleKnowClick = () => {
//     const flashcardId = currentPage;
//     if (!hasAnswered) {
//       if (!answeredFlashcards.has(flashcardId)) {
//         setScore(score + 1);
//         setAnsweredFlashcards(prev => new Set(prev).add(flashcardId));
//       }
//       setHasAnswered(true);
//     }
//     // Move to the next card without checking flip state
//     if ((currentPage + 1) * cardsPerPage < flashcards.length) {
//       setCurrentPage(currentPage + 1);
//       setIsFlipped(false);
//       setHasAnswered(false);
//       setShowPopup(false); // Hide popup when moving to the next card
//     }
//   };

//   const handleDontKnowClick = () => {
//     setIsFlipped(true);
//     setHasAnswered(true);
//     setShowPopup(false); // Hide popup when a response is selected
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const currentFlashcards = flashcards.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

//   return (
//     <div className="container-full-height">
//       <div className="row mb-4">
//         {currentFlashcards.map((flashcard, index) => (
//           <div key={index} className="col col-md-8 col-lg-6">
//             <FlashcardItem
//               serialNumber={currentPage * cardsPerPage + index + 1}
//               question={flashcard.question}
//               answer={flashcard.answer}
//               flipped={isFlipped}
//               toggleFlip={() => setIsFlipped(!isFlipped)}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="row">
//         <div className="col text-center">
//           <div className="btn-container">
//             <button
//               onClick={handlePreviousClick}
//               className="btn-prev-next btn"
//             >
//               Previous
//             </button>
//             <button
//               onClick={handleKnowClick}
//               className="btn-know btn"
//             >
//               I Know This
//             </button>
//             <button
//               onClick={handleDontKnowClick}
//               className="btn-dont-know btn"
//             >
//               I Don't Know This
//             </button>
//             <button
//               onClick={handleNextClick}
//               className="btn-prev-next btn"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col text-center margin-top-20">
//           <h4>Your Score: {score} out of {flashcards.length}</h4>
//         </div>
//       </div>

//       {/* Popup Component */}
//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup-content">
//             <h2>Please choose a response before moving to the next card.</h2>
//             <button onClick={handleClosePopup} className="btn-popup-close">Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FlashcardList;