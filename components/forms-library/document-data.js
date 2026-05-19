export const documents = [

  // ─── Safety & SWMS (12) ───────────────────────────────────────────────────

  {
    slug: "swms-template",
    title: "Safe Work Method Statement (SWMS)",
    shortTitle: "SWMS Template",
    category: "Safety & SWMS",
    type: "Template",
    action: "download",
    desc: "Generic SWMS template for documenting safe work procedures for any task on site. Adapt for each project and specific task before work begins.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/engineering.svg",
    overview: `A Safe Work Method Statement (SWMS) is a legally required document for all high-risk construction work in Queensland. It identifies the steps involved in a task, the hazards associated with each step, the risk rating, and the control measures required to eliminate or minimise those risks.

This OSG SWMS template provides a structured format covering task breakdown, hazard identification with risk ratings, control measures, and responsible persons. All workers involved in the task must read and sign the acknowledgment section before work commences.

The template is designed for field use and can be completed on-site or in the office ahead of work. A new SWMS must be completed for each distinct task or when site conditions change significantly.`,
    legalBasis: "Work Health and Safety Act 2011 (Qld) · Work Health and Safety Regulation 2011 (Qld) · Code of Practice: Construction Work (Safe Work Australia) · AS/NZS 4801 Occupational Health and Safety Management Systems",
    contents: [
      "Project and site details (project name, site address, date, SWMS number)",
      "Task description and sequential work steps breakdown",
      "Hazard identification column for each work step",
      "Risk rating matrix (likelihood × consequence = risk level)",
      "Control measures with responsible person assigned to each",
      "Supervisor sign-off and review section",
      "Worker acknowledgment sign-off with name, date, and signature",
    ],
    note: "This SWMS must be adapted for each specific task and site. Generic or unmodified templates are not acceptable. Workers must sign the acknowledgment section before commencing work. Review and update if site conditions change.",
    downloadHref: "/documents/swms-template.pdf",
  },

  {
    slug: "swms-register",
    title: "SWMS Register",
    shortTitle: "SWMS Register",
    category: "Safety & SWMS",
    type: "Form",
    action: "download",
    desc: "Master log of all Safe Work Method Statements across OSG projects. Tracks current, expired, and archived SWMS documents with approval status and document location.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/list_alt.svg",
    overview: `The SWMS Register is the master index for all Safe Work Method Statements across OSG projects. It ensures every SWMS issued has been tracked, reviewed, and kept current, and provides a central audit trail for WHS compliance purposes.

Each entry records the SWMS number, task description, project, creation date, next review date, current status, approving supervisor, and document location. A status of "Current" indicates the SWMS has been reviewed and is valid for use; "Review Due" and "Expired" entries must be actioned before work on the associated task can continue.

The register should be reviewed monthly and updated whenever a new SWMS is issued, revised, or retired. A total count of current SWMS documents is recorded at the bottom for quick audit reference.`,
    legalBasis: "Work Health and Safety Regulation 2011 (Qld) — Division 6 (Safe Work Method Statements) · Code of Practice: Construction Work (Safe Work Australia)",
    contents: [
      "SWMS number and task description",
      "Associated project name and location",
      "Date created and next scheduled review date",
      "Current status: Current / Review Due / Expired / Archived",
      "Name of approving supervisor",
      "Document storage location (physical or digital path)",
      "Total current SWMS count for audit reference",
      "Monthly maintenance sign-off section",
    ],
    note: "This register must be kept current at all times. SWMS documents with 'Review Due' or 'Expired' status must be updated before associated work resumes. Keep the register accessible to supervisors, safety officers, and auditors on request.",
    downloadHref: "/documents/swms-register.pdf",
  },

  {
    slug: "job-safety-analysis",
    title: "Job Safety Analysis (JSA)",
    shortTitle: "Job Safety Analysis",
    category: "Safety & SWMS",
    type: "Form",
    action: "download",
    desc: "Pre-work planning document that breaks a task into steps, identifies hazards at each step, and defines control measures and responsible persons before work begins.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/checklist.svg",
    overview: `A Job Safety Analysis (JSA) is a structured pre-work planning document that systematically breaks a task into individual steps, identifies the hazards associated with each step, assesses the risk level, and documents the control measures required to work safely.

The OSG JSA form is completed by the site supervisor or leading hand before any non-routine or moderate-to-high-risk task begins. It is complementary to the SWMS — the JSA is used for day-to-day task planning, while a SWMS is required for designated high-risk construction work.

Once completed, the JSA is reviewed by the supervisor, shared with all workers involved in the task, and filed on-site for the duration of the work. All team members must be briefed from the JSA before work commences.`,
    legalBasis: "Work Health and Safety Act 2011 (Qld) · Code of Practice: How to Manage Work Health and Safety Risks (Safe Work Australia) · Code of Practice: Construction Work (Safe Work Australia)",
    contents: [
      "Project, task description, and JSA reference details",
      "Step-by-step task breakdown in sequential order",
      "Hazard identification for each work step",
      "Risk level assessment (Low / Medium / High / Extreme)",
      "Control measures and engineering or administrative controls",
      "Responsible person assigned to each control measure",
      "Supervisor approval sign-off with date",
    ],
    note: "Complete the JSA before work begins, not during. If a new hazard is identified during the task, stop work and update the JSA before continuing. All workers must be briefed on the contents before commencing the task.",
    downloadHref: "/documents/job-safety-analysis.pdf",
  },

  {
    slug: "toolbox-talk-record",
    title: "Toolbox Talk Minutes",
    shortTitle: "Toolbox Talk Record",
    category: "Safety & SWMS",
    type: "Form",
    action: "download",
    desc: "Records pre-start or weekly safety discussions — topics, key points, Q&A, action items, and a full attendance sign-off. Evidence of ongoing safety communication for audits.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/campaign.svg",
    overview: `Toolbox talks are short, focused safety discussions held before work commences or on a regular schedule (typically weekly). They are one of the most effective ways to communicate safety information, reinforce procedures, and address site-specific risks in a timely and practical manner.

The OSG Toolbox Talk Minutes form captures the date and location, presenter details, topic and key discussion points, questions and answers raised by workers, and any follow-up action items assigned. All attendees sign the form to confirm they were present and understood the content.

These signed records serve as evidence of ongoing safety communication and worker engagement for WHS audits, insurance reviews, and principal contractor compliance checks. Records must be retained for the duration of the project.`,
    legalBasis: "Work Health and Safety Act 2011 (Qld) — Section 47 (Worker Consultation Duty) · Code of Practice: Work Health and Safety Consultation, Cooperation and Coordination (Safe Work Australia)",
    contents: [
      "Date, time, project name, and location of talk",
      "Presenter name and role",
      "Topic covered and key discussion points",
      "Questions raised and answers provided during the session",
      "Follow-up action items with responsible person and due date",
      "Attendance register: name, role, company, induction status, and signature",
      "Supervisor review sign-off",
    ],
    note: "All attendees must sign the attendance register. If a worker cannot sign, record their name and have the supervisor countersign. Store completed forms on-site and retain in the project safety file after project completion.",
    downloadHref: "/documents/toolbox-talk-record.pdf",
  },

  {
    slug: "daily-scaffold-inspection",
    title: "Daily Scaffold Inspection Checklist",
    shortTitle: "Daily Scaffold Inspection",
    category: "Safety & SWMS",
    type: "Form",
    action: "download",
    desc: "Pre-shift checklist to verify scaffold safety before use each day. Inspector assigns a green (safe) or red (unsafe) tag based on a structural, platform, and environmental assessment.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/fact_check.svg",
    overview: `Under Queensland WHS legislation, scaffolding must be inspected before use each day, after any incident or adverse weather event that may have affected its integrity, and whenever modifications are made. The Daily Scaffold Inspection Checklist provides a standardised process for conducting and recording these inspections.

The inspector works through three inspection categories — structural elements, platforms and access, and housekeeping and environment — recording a pass or fail for each item. At the completion of the inspection, the inspector assigns either a green tag (safe for use) or a red tag (unsafe — do not use) and records the outcome with their signature and date.

A red tag must be immediately reported to the site supervisor and the scaffold must be barricaded and taken out of service until repairs are completed and re-inspection confirms it is safe.`,
    legalBasis: "Work Health and Safety Regulation 2011 (Qld) — Chapter 5 (Scaffolding) · AS/NZS 1576 Series (Scaffolding) · Code of Practice: Construction Work (Safe Work Australia)",
    contents: [
      "Project, scaffold tag number, date, and inspector details",
      "Structural inspection: base plates, standards, ledgers, bracing, and ties",
      "Platforms and access: planks, guardrails, toe boards, and access ladders",
      "Housekeeping and environment: debris, overhead hazards, and ground stability",
      "Pass/Fail outcome recorded for each inspection item",
      "Tag colour assignment: Green (Safe for Use) / Red (Unsafe — Do Not Use)",
      "Inspector signature and date",
    ],
    note: "This checklist must be completed before first use of the scaffold each day. If any item is marked FAIL, issue a red tag and remove the scaffold from service immediately. Do not allow workers to use the scaffold until re-inspection confirms all defects are rectified.",
    downloadHref: "/documents/daily-scaffold-inspection.pdf",
  },

  {
    slug: "height-safety-equipment-inspection",
    title: "Height Safety Equipment Inspection Log",
    shortTitle: "Height Safety Inspection",
    category: "Safety & SWMS",
    type: "Form",
    action: "download",
    desc: "Monthly inspection log for fall-arrest harnesses, lanyards, shock absorbers, and related height safety equipment. Required for ongoing AS/NZS 1891 compliance.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/height.svg",
    overview: `Personal fall-arrest equipment — harnesses, lanyards, shock absorbers, inertia reels, and anchor devices — must be inspected before each use by the worker and formally inspected by a competent person on a regular schedule. The OSG Height Safety Equipment Inspection Log provides the framework for the formal monthly inspection.

The log maintains an equipment register listing each item by serial number or unique identifier, along with its safe working load, last test date, and current status. The monthly inspection checklist assesses webbing and stitching condition, D-ring and buckle integrity, energy absorber deployment indicators, label legibility, and lanyard hook function.

Any equipment that fails inspection or has been subjected to a fall-arrest event must be immediately taken out of service, tagged out, and either sent for recertification or destroyed. Equipment must not be returned to service until cleared by a competent person.`,
    legalBasis: "Work Health and Safety Regulation 2011 (Qld) · AS/NZS 1891.1 (Industrial Fall-Arrest Systems and Devices) · AS/NZS 1891.4 (Selection, Use and Maintenance of Industrial Fall-Arrest Systems)",
    contents: [
      "Equipment register: serial number, type, SWL, purchase date, last test date",
      "In-service / out-of-service / due-for-test status per item",
      "Monthly inspection checklist: webbing, stitching, D-rings, and buckles",
      "Energy absorber and deployment indicator check",
      "Label and certification legibility check",
      "Lanyard hook function and locking mechanism check",
      "Inspector signature, date, and next inspection due date",
    ],
    note: "Any equipment involved in a fall-arrest event must be immediately removed from service and must not be reused, regardless of visible condition. After any fall event, the equipment must be inspected by the manufacturer or a competent person before any decision to reinstate or destroy.",
    downloadHref: "/documents/height-safety-equipment-inspection.pdf",
  },

  {
    slug: "scaffold-tag-register",
    title: "Scaffold Tag Register",
    shortTitle: "Tag Register",
    category: "Safety & SWMS",
    type: "Form",
    action: "download",
    desc: "Master register of all scaffold tags issued across site. Tracks tag number, location, current status (green/red), date of any status change, and full inspection history.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/label.svg",
    overview: `The Scaffold Tag Register is the master record of all scaffold tags issued on an OSG site. Every scaffold structure must carry a current tag indicating its inspection status: a green tag indicates the scaffold is safe for use following inspection; a red tag indicates the scaffold is unsafe and must not be used until defects are rectified and re-inspected.

The register records each tag number, the scaffold location on site, the date the tag was issued, current tag colour, the date of any status change, the inspector who conducted the assessment, and any relevant notes. This provides a complete audit trail of all scaffold inspections and status changes across the project.

The tag register must be reviewed and updated each time a daily inspection is completed, a scaffold is modified, or a red tag is issued or cleared. The total number of tags in service is recorded for reconciliation purposes.`,
    legalBasis: "Work Health and Safety Regulation 2011 (Qld) — Chapter 5 (Scaffolding) · AS/NZS 1576 Series (Scaffolding Standards) · Code of Practice: Construction Work (Safe Work Australia)",
    contents: [
      "Tag number and scaffold location on site",
      "Date tag was issued and name of issuing inspector",
      "Current tag status: Green (Safe) / Red (Unsafe)",
      "Date of any status change and reason for change",
      "Inspector name and credentials for each assessment",
      "Notes field for defects identified or actions taken",
      "Monthly maintenance sign-off and total tag count",
    ],
    note: "This register must be kept up to date at all times. Every scaffold on site must appear in this register. Any discrepancy between the physical tags on site and this register must be investigated and resolved by the site supervisor immediately.",
    downloadHref: "/documents/scaffold-tag-register.pdf",
  },

  {
    slug: "vehicle-prestart-checklist",
    title: "Vehicle Pre-Start Checklist",
    shortTitle: "Vehicle Pre-Start",
    category: "Safety & SWMS",
    type: "Form",
    action: "download",
    desc: "Daily pre-shift checklist before operating any OSG vehicle. Non-compliant vehicles must be quarantined — covers walkaround, cabin safety equipment, and engine systems.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/directions_car.svg",
    overview: `All OSG vehicles must undergo a pre-start safety check before first use each day. The Vehicle Pre-Start Checklist provides a standardised inspection process covering external walkaround items, cabin safety equipment, and engine and systems checks. Any defects identified must be reported immediately and the vehicle quarantined until repaired.

The checklist covers three inspection zones: the daily walkaround (lights, tyres, body condition, brakes, fluids, horn, mirrors, wipers, seatbelt, and fuel level); the cabin check (fire extinguisher, first aid kit, warning triangle, and required paperwork); and engine start checks (warning lights, gauges, steering, brakes, and unusual noise).

Any item marked as a defect must be reported to the supervisor and the vehicle must not be operated until the defect is rectified. A maintenance request must be raised for any mechanical defects. Completed forms are submitted weekly to the office with the timesheet.`,
    legalBasis: "Work Health and Safety Act 2011 (Qld) · Heavy Vehicle National Law (Qld) · Queensland Transport Operations (Road Use Management) Act 1995 · Code of Practice: Managing Risks of Plant in the Workplace",
    contents: [
      "Vehicle registration, make/model, odometer reading, and operator details",
      "Daily walkaround: lights, tyres, brakes, fluid levels, horn, wipers, and mirrors",
      "Seatbelt condition, body condition, and fuel level check",
      "Cabin check: fire extinguisher, first aid kit, warning triangle, and paperwork",
      "Engine start and systems: warning lights, gauges, steering, brakes, unusual noise",
      "Defect notes and maintenance request reference number",
      "Operator signature and supervisor countersign",
    ],
    note: "If any item is marked as a defect, the vehicle must not be operated until the fault is repaired and cleared by a supervisor. Quarantine the vehicle, affix a 'Do Not Operate' tag, and raise a maintenance request. Never operate a vehicle with known defects.",
    downloadHref: "/documents/vehicle-prestart-checklist.pdf",
  },

  {
    slug: "fatigue-management-declaration",
    title: "Fatigue Management Declaration",
    shortTitle: "Fatigue Declaration",
    category: "Safety & SWMS",
    type: "Form",
    action: "download",
    desc: "Daily pre-shift self-assessment confirming fitness for work. Employees flagging red-flag items must not work at height or operate plant until assessed by a supervisor.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/bedtime.svg",
    overview: `Fatigue is a recognised workplace hazard in the construction industry and is identified in Queensland WHS legislation as a risk that must be managed. The OSG Fatigue Management Declaration is a daily pre-shift self-assessment that each employee completes to confirm their fitness for work before commencing duties.

The self-assessment covers six key indicators: adequate rest (minimum 7 hours sleep), adherence to maximum hours worked, freedom from fatigue-inducing medications, adequate hydration, absence of personal stressors that may impair concentration, and overall self-assessed fitness to work safely. Any response that triggers a red-flag item — such as less than 5 hours sleep or drowsiness-causing medication — must be disclosed to the supervisor before work begins.

Employees who disclose a red-flag condition must not be assigned to work at height, operate plant or machinery, or perform other high-risk activities until assessed by the supervisor as fit to do so. The supervisor section of the form documents the outcome of any review.`,
    legalBasis: "Work Health and Safety Act 2011 (Qld) — Section 28 (Worker Duties) · Code of Practice: Managing the Work Environment and Facilities (Safe Work Australia) · National Guidelines for Integrating OHS Risk Management (Fatigue)",
    contents: [
      "Employee name, project, role, and declaration date",
      "Six-item self-assessment checklist with yes/no responses",
      "Red-flag items that trigger mandatory supervisor review",
      "Employee declaration of fitness to work",
      "Supervisor review section: reviewed by, outcome, and any restrictions applied",
      "Instructions for red-flag response protocol",
    ],
    note: "Employees must not falsify this declaration. Providing false information about fitness for work is a serious safety violation. Supervisors must act on any disclosed red-flag condition — reassignment or stand-down may be required. Forms are retained in the project safety file.",
    downloadHref: "/documents/fatigue-management-declaration.pdf",
  },

  {
    slug: "incident-near-miss-report",
    title: "Incident & Near Miss Report",
    shortTitle: "Incident Report",
    category: "Safety & SWMS",
    type: "Form",
    action: "download",
    desc: "Documents all incidents, near misses, injuries, and property damage within 24 hours. Captures root cause analysis, corrective actions, notifiable incident checklist, and supervisor sign-off.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/report_problem.svg",
    overview: `All incidents, near misses, injuries, property damage, and dangerous occurrences on OSG sites must be reported and documented as soon as practicable, and no later than 24 hours after the event. The OSG Incident & Near Miss Report provides a structured format for capturing the details required by WHS legislation and for conducting root cause analysis.

The form captures the incident type, date, time, and precise location; details of any injured persons and witnesses; a description of what happened; the immediate actions taken; and the identification of root causes. The corrective actions section assigns responsibility and deadlines for each remediation measure identified.

Under Queensland WHS legislation, certain incidents are notifiable to WorkSafe Queensland within prescribed timeframes. The form includes a notifiable incident checklist to assist in making this determination. All reports are reviewed by a supervisor and retained in the project safety file.`,
    legalBasis: "Work Health and Safety Act 2011 (Qld) — Part 3 (Incident Notification) · Work Health and Safety Regulation 2011 (Qld) · WorkSafe Queensland Notifiable Incident Requirements",
    contents: [
      "Incident type: injury / near miss / property damage / dangerous occurrence",
      "Date, time, exact location, and weather conditions at time of incident",
      "Injured person details and nature of injury, if applicable",
      "Witness details and contact information",
      "Incident description: sequence of events leading to the incident",
      "Immediate actions taken and first aid provided",
      "Root cause analysis: immediate cause, contributing factors, and underlying causes",
      "Corrective actions with responsible person and due date",
      "Notifiable incident checklist and WorkSafe QLD notification record",
      "Prepared by and reviewed by supervisor signatures with date",
    ],
    note: "Deaths and serious injuries must be reported to WorkSafe Queensland immediately by phone. Dangerous occurrences must be reported within 24 hours. Do not disturb the incident site until authorised by the regulator, except to assist injured persons or make the immediate area safe.",
    downloadHref: "/documents/incident-near-miss-report.pdf",
  },

  {
    slug: "corrective-action-request",
    title: "Corrective Action Request",
    shortTitle: "Corrective Action",
    category: "Safety & SWMS",
    type: "Form",
    action: "download",
    desc: "Documents non-conformances or improvement opportunities requiring corrective action. Must be completed and returned within 7 days with root cause analysis and closure verification.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/build_circle.svg",
    overview: `A Corrective Action Request (CAR) is raised whenever a non-conformance, safety observation, audit finding, or improvement opportunity is identified on an OSG site. The CAR provides a formal mechanism for documenting the issue, assigning responsibility for resolution, tracking root cause analysis, and verifying that the corrective action has been effectively implemented.

The form captures the non-conformance details, the severity classification (Minor, Major, or Critical), the identified root cause, the corrective action to be taken, the person responsible, and the required completion date. Recipients of a CAR must respond within 7 days. The verification and closure section confirms the corrective action has been completed and is effective.

CARs can be raised by any team member, safety officer, supervisor, principal contractor, or external auditor. All CARs are logged, tracked to closure, and retained as part of the project safety and quality management records.`,
    legalBasis: "Work Health and Safety Act 2011 (Qld) · ISO 9001 Quality Management Systems — Corrective Action Requirement · Code of Practice: Construction Work (Safe Work Australia)",
    contents: [
      "Non-conformance description and location on site",
      "Severity classification: Minor / Major / Critical",
      "Date raised, raised by, and assigned to (responsible person)",
      "Required completion date (maximum 7 days from issue for standard CARs)",
      "Root cause analysis: why did this non-conformance occur?",
      "Corrective action to be taken and implementation plan",
      "Verification and closure: outcome (Satisfactory / Requires Further Action)",
      "Closed-out by signature and date",
    ],
    note: "Critical CARs must be actioned immediately and reported to the site supervisor before work continues in the affected area. All CARs must be closed out with documented evidence of the corrective action taken. Open CARs are reviewed at every site safety meeting.",
    downloadHref: "/documents/corrective-action-request.pdf",
  },

  {
    slug: "site-visitor-log",
    title: "Site Entry & Visitor Log",
    shortTitle: "Visitor Log",
    category: "Safety & SWMS",
    type: "Form",
    action: "download",
    desc: "Daily log of all personnel entering and exiting site. Tracks induction compliance and ensures uninducted visitors are escorted at all times. Critical for emergency mustering.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/how_to_reg.svg",
    overview: `All persons entering an OSG-controlled work area must be recorded in the Site Entry & Visitor Log. This includes employees, subcontractors, client representatives, engineers, inspectors, delivery personnel, and any other visitors. The log provides a real-time record of who is on site, which is critical for emergency evacuation and mustering procedures.

For each entry, the log records the date, person's name, company, reason for entry, time in, time out, and confirmation of induction status. Persons who hold a valid White Card and have completed the site-specific induction are marked as inducted. Uninducted visitors must be escorted by an inducted OSG employee at all times and must not access active work areas unaccompanied.

The log is kept at the site entry point and is the responsibility of the site supervisor. It is reviewed at the end of each day and retained in the project site safety file.`,
    legalBasis: "Work Health and Safety Act 2011 (Qld) — Section 20 (Management or Control of Workplaces) · Work Health and Safety Regulation 2011 (Qld) — Site Induction Requirements",
    contents: [
      "Date, entry number, and site name",
      "Name of each person entering site",
      "Company or employer of the person",
      "Reason for entry or work being performed",
      "Time in and time out",
      "Induction status: Inducted (White Card) / Visitor (Escort Required)",
      "Notes for any special entry conditions or restrictions",
    ],
    note: "Uninducted visitors must be escorted by an inducted OSG employee at all times and must not access active work areas unaccompanied. In the event of an emergency evacuation, this log is used to account for all persons on site.",
    downloadHref: "/documents/site-visitor-log.pdf",
  },

  // ─── HR & Personnel (8) ───────────────────────────────────────────────────

  {
    slug: "employee-induction-checklist",
    title: "Employee Induction Checklist",
    shortTitle: "Employee Induction",
    category: "HR & Personnel",
    type: "Form",
    action: "download",
    desc: "Mandatory pre-commencement checklist covering company policies, safety procedures, licences, and documentation verification. Signed by both employee and supervisor on day one.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/person_check.svg",
    overview: `Every new OSG employee must complete a formal induction before commencing any work activities. The Employee Induction Checklist provides a structured process to ensure each new employee has been briefed on all required company policies, safety procedures, emergency protocols, and site-specific rules before setting foot on site.

The checklist covers 12 core induction topics including the OSG safety policy, hazard reporting procedures, emergency evacuation procedures, PPE requirements, drug and alcohol policy, and the requirements for holding appropriate licences and certifications. Each topic is initialled by both the employee and the conducting supervisor to confirm completion.

The documentation verification section confirms that the employee's White Card, High Risk Work Licence, driver's licence, and any other required certifications have been sighted and recorded. The completed checklist is filed in the employee's personnel record and retained for the duration of employment.`,
    legalBasis: "Work Health and Safety Act 2011 (Qld) · Work Health and Safety Regulation 2011 (Qld) — Worker Induction Requirements · Fair Work Act 2009 (Cth) · Construction Industry (Portable Long Service Leave) Act 1991 (Qld)",
    contents: [
      "Employee name, start date, position, and inducting supervisor details",
      "12-item induction checklist with dual initials (employee + supervisor)",
      "OSG safety policy, hazard reporting, and incident notification procedures",
      "Emergency procedures, first aid locations, and evacuation routes",
      "PPE requirements, drug and alcohol policy, and mobile phone policy",
      "Documentation verification: White Card, High Risk Work Licence, Driver Licence",
      "Working at Heights certificate, First Aid certificate, and other qualifications",
      "Employee and supervisor sign-off confirming induction completed",
    ],
    note: "No employee may commence work until this checklist is fully completed and signed by both the employee and the inducting supervisor. The completed form must be filed in the employee's personnel file on the day of induction. Retain for the duration of employment plus 7 years.",
    downloadHref: "/documents/employee-induction-checklist.pdf",
  },

  {
    slug: "client-visitor-induction",
    title: "Client & Visitor Induction",
    shortTitle: "Client Induction",
    category: "HR & Personnel",
    type: "Form",
    action: "download",
    desc: "Mandatory induction for client representatives and visitors entering OSG-controlled work areas. Covers site rules, emergency procedures, PPE, and safety obligations with a tear-off emergency card.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/badge.svg",
    overview: `Any person entering an OSG-controlled worksite who is not a current OSG employee — including client representatives, engineers, architects, project managers, and general visitors — must complete the Client & Visitor Induction before accessing any work area. This induction is mandatory regardless of the visitor's construction industry experience.

The induction covers 9 key topics: site boundaries and restricted areas, emergency procedures and assembly points, PPE requirements while on site, hazard and incident reporting obligations, plant and equipment exclusion zones, and housekeeping and access rules. The visitor confirms their understanding by initialling each topic and signing the declaration.

The form includes a tear-off emergency contact card that the visitor retains for the duration of their site visit. All completed induction forms are logged in the site visitor register and retained in the project safety file.`,
    legalBasis: "Work Health and Safety Act 2011 (Qld) — Section 20 (Management or Control of Workplaces) · Work Health and Safety Regulation 2011 (Qld) · Code of Practice: Construction Work (Safe Work Australia)",
    contents: [
      "Visitor name, company, date, and supervisor or host details",
      "9-point site orientation checklist with visitor initials",
      "Site rules confirmation: 5 key safety rules with written acknowledgment",
      "PPE requirements specific to the site",
      "Emergency procedures, assembly point location, and emergency contact number",
      "Visitor declaration of understanding and compliance",
      "Tear-off emergency contact card for visitor retention during site visit",
    ],
    note: "This induction must be completed before the visitor accesses any OSG work area. Visitors who have not completed this induction must not enter site unescorted. The completed form must be cross-referenced with the Site Entry & Visitor Log entry for the same visit.",
    downloadHref: "/documents/client-visitor-induction.pdf",
  },

  {
    slug: "new-employee-information",
    title: "New Employee Information Form",
    shortTitle: "Employee Information",
    category: "HR & Personnel",
    type: "Form",
    action: "download",
    desc: "Comprehensive onboarding form capturing personal details, emergency contacts, tax and superannuation information, banking details, qualifications, and medical conditions. Strictly confidential.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/person.svg",
    overview: `The New Employee Information Form is completed by every new employee at the commencement of employment with OSG. It collects all personal, financial, and administrative information required to establish the employee's personnel file, process payroll, and meet statutory obligations under Australian law.

The form is divided into clearly labelled sections covering: personal details and contact information, emergency contact, tax file number and residency status for ATO withholding, bank account details for EFT wage payments, superannuation fund election, qualifications and licences held including High Risk Work Licence class and expiry, any relevant medical conditions or physical limitations, and a privacy consent declaration.

All information collected is handled in accordance with the Privacy Act 1988 (Cth) and is used solely for employment administration purposes. The completed form is stored securely in the employee's confidential personnel file and is not disclosed to third parties without the employee's consent, except as required by law.`,
    legalBasis: "Privacy Act 1988 (Cth) — Australian Privacy Principles · Tax Administration Act 1953 (Cth) — Tax File Number Requirements · Superannuation Guarantee (Administration) Act 1992 (Cth) · Fair Work Act 2009 (Cth)",
    contents: [
      "Personal details: full legal name, date of birth, address, phone, and email",
      "Emergency contact: name, relationship, and phone number",
      "Tax details: TFN, residency status, HECS debt declaration, tax-free threshold",
      "Bank details: BSB, account number, and account name for payroll EFT",
      "Superannuation fund election or default fund nomination",
      "Qualifications and licences: type, number, issue date, and expiry date",
      "High Risk Work Licence classes held and expiry date",
      "Medical conditions or physical limitations relevant to the role",
      "Privacy consent declaration and employee signature",
    ],
    note: "This form contains sensitive personal information including TFN, bank details, and medical information. Store securely and allow access only to authorised payroll and HR personnel. Do not leave this form unattended or unsecured at any time.",
    downloadHref: "/documents/new-employee-information.pdf",
  },

  {
    slug: "employment-agreement",
    title: "Employment Agreement",
    shortTitle: "Employment Contract",
    category: "HR & Personnel",
    type: "Template",
    action: "download",
    desc: "Formal employment contract under the Fair Work Act 2009. Defines position, remuneration, hours, leave entitlements, safety obligations, confidentiality, and termination conditions.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/description.svg",
    overview: `The OSG Employment Agreement is a legally binding contract between O'Neill Scaffolding Group and a new or continuing employee. It establishes the terms and conditions of employment in compliance with the Fair Work Act 2009 (Cth) and the applicable Modern Award, and must be signed by both parties before the employee commences work.

The agreement specifies the employee's position and reporting structure, ordinary hours of work, base remuneration and applicable award entitlements, leave entitlements (annual leave, personal/carer's leave, long service leave, and public holidays), safety obligations including compliance with OSG's WHS Policy and the Work Health and Safety Act 2011 (Qld), and confidentiality obligations protecting OSG's commercial information.

The termination clause specifies notice periods for both parties and the grounds on which OSG may terminate employment without notice. This template must be reviewed by management and adapted for each individual engagement — particularly around remuneration, hours of work, and any special conditions.`,
    legalBasis: "Fair Work Act 2009 (Cth) · Building and Construction General On-site Award 2020 · Work Health and Safety Act 2011 (Qld) · Long Service Leave Act 1990 (Qld) · Queensland law governs this agreement",
    contents: [
      "Parties: employee full legal name, address, and commencement date",
      "Position, title, duties, and reporting line",
      "Remuneration: base rate, award classification, and superannuation",
      "Hours of work: ordinary hours and overtime conditions",
      "Leave entitlements: annual, personal/carer's, long service, and public holidays",
      "Safety obligations and compliance with OSG WHS Policy",
      "Confidentiality and non-disclosure obligations",
      "Termination: notice periods and grounds for summary dismissal",
      "Signatures of both parties with date",
    ],
    note: "This template must be adapted for each individual employment engagement. Remuneration and classification must reflect the applicable Modern Award minimum. Seek independent legal advice before issuing contracts for senior or management roles. Both parties must receive a signed copy.",
    downloadHref: "/documents/employment-agreement.pdf",
  },

  {
    slug: "reference-check-interview",
    title: "Reference Check & Interview Record",
    shortTitle: "Reference Check",
    category: "HR & Personnel",
    type: "Form",
    action: "download",
    desc: "Confidential candidate assessment document recording interview notes, reference check conversations, ratings across 5 criteria, and hiring recommendation. Retained on the personnel file.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/star_rate.svg",
    overview: `The OSG Reference Check & Interview Record is a confidential document completed during the recruitment process to record structured interview notes and reference check outcomes for each shortlisted candidate. It provides a consistent and defensible basis for hiring decisions.

The interview notes section captures assessments across key competencies: technical skills, communication, safety attitude, and cultural fit. The reference check section records the referee's details, the conversation notes, and the referee's overall assessment. Five key assessment criteria are rated on a 1–5 scale by the assessor.

A formal hiring recommendation is recorded at the bottom of the form, along with any conditions attached to an offer. All completed forms are treated as confidential and stored in the candidate's personnel file if hired, or securely disposed of if unsuccessful. Records must be retained for a minimum of 12 months after the recruitment process closes.`,
    legalBasis: "Privacy Act 1988 (Cth) — Australian Privacy Principles (Recruitment Records) · Fair Work Act 2009 (Cth) · Anti-Discrimination Act 1991 (Qld) — Lawful Hiring Practices",
    contents: [
      "Candidate name, position applied for, interview date, and interviewer details",
      "Interview notes: technical skills, communication, safety focus, and cultural fit",
      "Reference check: referee name, role, relationship, and contact details",
      "Reference conversation notes and referee's overall assessment",
      "Candidate rating: 5 criteria each rated 1–5 by assessor",
      "Overall candidate summary and comparison notes",
      "Hiring recommendation: Offer / Hold / Do Not Progress",
      "Conditions attached to offer, if applicable",
    ],
    note: "This document is strictly confidential. Do not share with the candidate or any unauthorised person. Questions during interviews and reference checks must comply with anti-discrimination legislation — questions about age, national origin, family status, or health are not permitted. Retain for minimum 12 months post-recruitment.",
    downloadHref: "/documents/reference-check-interview.pdf",
  },

  {
    slug: "superannuation-choice-form",
    title: "Superannuation Choice Form",
    shortTitle: "Super Choice Form",
    category: "HR & Personnel",
    type: "Form",
    action: "download",
    desc: "Employee superannuation fund election form compliant with the Superannuation Guarantee Act. Allows employees to nominate their preferred fund or elect OSG's default fund.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/savings.svg",
    overview: `Under the Superannuation Guarantee (Administration) Act 1992 (Cth), eligible employees have the right to choose the superannuation fund into which their employer contributions are paid. The OSG Superannuation Choice Form allows employees to nominate their preferred fund, or to elect OSG's default fund where no preference is stated.

The form must be provided to all new employees within 28 days of commencement and the employee's choice must be given effect within two months of receiving the completed form. If the employee does not return a completed form, OSG will contribute to the designated default fund.

The form captures the employee's personal details, their nominated fund name, ABN, Unique Superannuation Identifier (USI), and their member number if known. The employer section is completed by OSG's payroll team to confirm the election has been received and actioned.`,
    legalBasis: "Superannuation Guarantee (Administration) Act 1992 (Cth) · Superannuation Industry (Supervision) Act 1993 (Cth) · Australian Taxation Office Superannuation Choice Requirements",
    contents: [
      "Employee name, address, date of birth, and commencement date",
      "Section A — Chosen Fund: fund name, ABN, USI, and member number",
      "Section B — Default Fund Election, if no specific fund is nominated",
      "Section C — OSG Default Fund details",
      "Employee declaration and signature",
      "Employer section: received date, actioned date, and payroll officer signature",
    ],
    note: "This form must be provided to new employees within 28 days of commencement. The employee's nominated fund must be actioned within two months of receipt. If an employee nominates a fund that cannot accept contributions, notify the employee within 28 days and request a new nomination.",
    downloadHref: "/documents/superannuation-choice-form.pdf",
  },

  {
    slug: "training-competency-register",
    title: "Training & Competency Register",
    shortTitle: "Training Register",
    category: "HR & Personnel",
    type: "Form",
    action: "download",
    desc: "Master register of all employee qualifications and training. Tracks certification dates, expiry dates, and flags upcoming renewals within 60 days to prevent licence lapses on site.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/school.svg",
    overview: `The Training & Competency Register is OSG's master record of all employee qualifications, certifications, and training completions. Maintaining a current register is a legal obligation under Queensland WHS legislation — workers performing high-risk activities must hold the appropriate licences, and OSG must be able to demonstrate this to regulators and principal contractors on demand.

The register tracks each employee's White Card, Working at Heights certificate, Basic Scaffolding Licence, Intermediate and Advanced Scaffolding Licences, First Aid certification, and any other relevant qualifications. For each certification, the issue date and expiry date are recorded. A built-in alert system flags any certification due to expire within 60 days, allowing time to arrange renewals before work continuity is affected.

The register is reviewed monthly by the site supervisor or HR manager and updated whenever a new certification is obtained or an existing one is renewed. It is made available to principal contractors and regulatory auditors on request.`,
    legalBasis: "Work Health and Safety Regulation 2011 (Qld) — High Risk Work Licences · Work Health and Safety Act 2011 (Qld) · National Standard for Licensing Persons Performing High Risk Work",
    contents: [
      "Employee name and role",
      "White Card number, issue date, and status",
      "Working at Heights certification: number, issue date, and expiry",
      "Basic Scaffolding Licence: number, issue date, and expiry",
      "Intermediate and Advanced Scaffolding Licence: number, issue date, and expiry",
      "First Aid certification: type, issue date, and expiry",
      "Other qualifications: description, number, issue date, and expiry",
      "60-day expiry alert section for upcoming renewals",
      "Monthly review sign-off by supervisor or HR manager",
    ],
    note: "No employee may perform high-risk work for which they do not hold the required licence. Expired licences must be renewed before the employee returns to that work. Maintain physical copies of all certifications alongside this register and provide copies to principal contractors upon request.",
    downloadHref: "/documents/training-competency-register.pdf",
  },

  {
    slug: "daily-timesheet",
    title: "Daily Timesheet",
    shortTitle: "Timesheet",
    category: "HR & Personnel",
    type: "Form",
    action: "download",
    desc: "Records actual hours worked per employee each day — start/finish times, breaks, job allocation, and plant usage. Submitted weekly to the office for payroll processing.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/schedule.svg",
    overview: `The OSG Daily Timesheet is the primary record of hours worked by site employees and is the basis for payroll processing. It must be completed by the site supervisor each day, signed off by individual employees at the end of their shift, and submitted to the office weekly for payroll.

The timesheet records each employee's start time, finish time, break duration, total hours worked, applicable pay rate, and job or task allocation for the day. A plant and equipment usage section records any vehicles, machinery, or equipment used during the shift. The supervisor signs the timesheet daily to confirm the recorded hours are accurate.

Under the Fair Work Act 2009, employers are required to keep accurate records of time worked for all award-covered employees. Timesheets are a legal record and must be accurate, complete, and retained for 7 years.`,
    legalBasis: "Fair Work Act 2009 (Cth) — Section 535 (Employer Record-Keeping Obligations) · Fair Work Regulations 2009 — Regulation 3.32 (Time and Wages Records) · Building and Construction General On-site Award 2020",
    contents: [
      "Project name, site address, supervisor, date, and weather conditions",
      "Brief description of work performed on the day",
      "Employee name, start time, finish time, break duration, and total hours",
      "Pay rate classification and job or task allocation",
      "Individual employee signature confirming accuracy of their entry",
      "Plant and equipment used: description, registration, and hours",
      "Daily supervisor sign-off confirming accuracy of all entries",
    ],
    note: "Timesheets must be completed and signed daily — do not complete them retrospectively. Submit weekly timesheets to the office no later than 9 am Monday for that week's payroll run. Corrections must be initialled by both the employee and supervisor. Do not use correction fluid.",
    downloadHref: "/documents/daily-timesheet.pdf",
  },

  // ─── Operations (6) ───────────────────────────────────────────────────────

  {
    slug: "scaffold-handover-certificate",
    title: "Scaffold Handover Certificate",
    shortTitle: "Handover Certificate",
    category: "Operations",
    type: "Certificate",
    action: "download",
    desc: "Certifies that a scaffold has been erected to AS/NZS 1576 and is safe for use. Issued by the erecting supervisor and co-signed by the client representative before any work on the structure begins.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/verified.svg",
    overview: `A Scaffold Handover Certificate must be issued every time OSG completes the erection, modification, or recommissioning of a scaffold. It certifies that the scaffold has been constructed in accordance with AS/NZS 1576 and that it is safe for use by the receiving party.

The certificate is issued by the erecting supervisor upon satisfactory completion and inspection of the scaffold. The client or site representative must inspect the scaffold and co-sign the certificate before any work commences on or from the structure. Until a signed Handover Certificate is in place, the scaffold must not be used.

The certificate includes a declaration of conformity confirming compliance with AS/NZS 1576, the scaffold location and description, the maximum imposed load, any restrictions on use, and a reminder that daily inspections are still required and that any modifications invalidate the certificate until re-inspection.`,
    legalBasis: "Work Health and Safety Regulation 2011 (Qld) — Chapter 5 (Scaffolding) · AS/NZS 1576 Series (Scaffolding) — Handover Certification Requirement · Code of Practice: Construction Work (Safe Work Australia)",
    contents: [
      "Project name, site address, scaffold location, and description",
      "OSG erecting supervisor name, licence number, and company",
      "Client or site representative name and company",
      "Declaration of conformity with AS/NZS 1576",
      "Maximum imposed load and any restrictions on use",
      "Erecting supervisor signature and date of handover",
      "Client or recipient signature and date of acceptance",
      "Notice regarding daily inspection obligations and modification protocols",
    ],
    note: "This certificate is invalidated immediately if the scaffold is modified in any way after handover. Any modification requires a new inspection and a new Handover Certificate before the scaffold is returned to service. Daily inspections remain mandatory regardless of this certificate being in place.",
    downloadHref: "/documents/scaffold-handover-certificate.pdf",
  },

  {
    slug: "scaffold-hire-agreement",
    title: "Scaffold Hire Agreement",
    shortTitle: "Hire Agreement",
    category: "Operations",
    type: "Template",
    action: "download",
    desc: "Binding contract for scaffold equipment hire. Sets out weekly rental rates, minimum hire period, payment conditions, and the hirer's full liability for equipment under their control.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/handshake.svg",
    overview: `The OSG Scaffold Hire Agreement is the binding contract between O'Neill Scaffolding Group and a hirer for the rental of scaffolding equipment. It establishes the rental terms, pricing, payment conditions, minimum hire period, and the responsibilities of each party for the duration of the hire.

The agreement specifies the equipment being hired, the weekly hire rate for each item, the minimum hire period, the total estimated value, and the start date. Under the terms of the agreement, the hirer assumes full responsibility for the equipment from the time it leaves OSG's yard until it is returned — including liability for loss, damage, and theft.

Key conditions include: OSG retains ownership of all equipment at all times; the hirer is responsible for WHS compliance while equipment is on their site; no modifications may be made to the equipment without OSG's written consent; and payment terms are strictly 30 days from invoice date.`,
    legalBasis: "Personal Property Securities Act 2009 (Cth) — OSG retains ownership interest · Work Health and Safety Act 2011 (Qld) — Hirer's Duties as a Person Conducting a Business or Undertaking · Queensland Contract Law",
    contents: [
      "Hirer name, ABN, site address, and OSG representative details",
      "Hire period: start date, estimated end date, and minimum hire period",
      "Equipment schedule: item description, quantity, condition, and weekly rate",
      "Terms and conditions: ownership, liability, payment terms, and modification restrictions",
      "Late payment provisions and interest clause",
      "Damage and loss liability during the hire period",
      "Hirer and OSG representative signatures with date",
    ],
    note: "This agreement must be signed by both parties before any equipment leaves OSG's yard. OSG retains a security interest in all hired equipment under the PPSA. Equipment returned in damaged condition will be assessed and repair costs charged to the hirer. Minimum hire period applies regardless of early return.",
    downloadHref: "/documents/scaffold-hire-agreement.pdf",
  },

  {
    slug: "subcontractor-agreement",
    title: "Subcontractor Agreement",
    shortTitle: "Subcontractor Agreement",
    category: "Operations",
    type: "Template",
    action: "download",
    desc: "Binding contract governing the engagement of subcontractors. Sets payment terms, insurance requirements ($20M public liability), safety obligations, SWMS compliance, and termination conditions.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/gavel.svg",
    overview: `The OSG Subcontractor Agreement governs the relationship between O'Neill Scaffolding Group and any individual or company engaged to perform work on OSG's behalf as a subcontractor. It establishes the scope of work, payment arrangements, insurance requirements, safety obligations, and the consequences of non-compliance.

All subcontractors engaged by OSG must hold and maintain current public liability insurance of not less than $20 million, workers' compensation insurance for all their employees, and any other insurance required for the type of work being performed. Evidence of current insurance must be provided before work commences and updated on expiry.

The agreement imposes safety obligations on the subcontractor including compliance with the Work Health and Safety Act 2011 (Qld), OSG's Site Safety Rules, and the requirement to provide compliant SWMS for all high-risk work before commencing. Confidentiality of OSG's commercial and client information must be maintained for the duration of the agreement and for two years following its conclusion.`,
    legalBasis: "Work Health and Safety Act 2011 (Qld) · Fair Work Act 2009 (Cth) · Workers' Compensation and Rehabilitation Act 2003 (Qld) · Queensland Contract Law governs this agreement",
    contents: [
      "Parties: OSG and subcontractor details including ABN",
      "Scope of work description and project details",
      "Rates schedule: labour rates, materials, and any agreed fixed prices",
      "Payment terms: invoice schedule and payment timeframes",
      "Insurance requirements: minimum $20M public liability and workers' compensation",
      "Safety obligations: WHS Act compliance, SWMS requirements, and site rules",
      "Confidentiality obligations: duration and scope",
      "Termination: notice periods and grounds for immediate termination",
      "Signatures of both parties and date of execution",
    ],
    note: "This agreement must be executed before any subcontractor commences work. Do not allow a subcontractor on site without evidence of current insurance and a signed agreement. Adapt the Scope of Work and Rates Schedule sections for each individual engagement. Queensland law governs.",
    downloadHref: "/documents/subcontractor-agreement.pdf",
  },

  {
    slug: "lifting-equipment-register",
    title: "Lifting Equipment Register",
    shortTitle: "Lifting Equipment Register",
    category: "Operations",
    type: "Form",
    action: "download",
    desc: "Master register of all lifting equipment — chain blocks, slings, shackles, and spreader bars. Tracks SWLs, test certification status, and ensures only compliant equipment is used on site.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/forklift.svg",
    overview: `All lifting equipment used on OSG sites — including chain blocks, web slings, wire rope slings, shackles, spreader bars, lifting eyes, and associated hardware — must be registered, inspected, and tested in accordance with Australian Standards and Queensland WHS legislation. The Lifting Equipment Register is OSG's master record for all such equipment.

Each item in the register is assigned a unique identifier and tracked with its type, manufacturer, safe working load (SWL), serial number, last test date, next test due date, and current in-service status. Equipment that is out of service, overdue for testing, or has failed inspection must be clearly tagged and removed from the work area.

The register is reviewed monthly. At each review, the supervisor confirms that all equipment shown as "In Service" has a current test certificate and is in satisfactory condition. A summary dashboard at the top of the register displays total equipment, in-service count, items due for test, and out-of-service count.`,
    legalBasis: "Work Health and Safety Regulation 2011 (Qld) — Lifting Equipment Requirements · AS 4991 (Lifting Devices) · AS 3569 (Steel Wire Ropes) · AS 1666 (Wire Rope Slings) · AS 4497 (Round Slings)",
    contents: [
      "Summary dashboard: total items, in-service, due for test, and out of service",
      "Item ID, equipment type, manufacturer, and description",
      "Safe working load (SWL) and serial number",
      "Last test date and test certification reference number",
      "Next test due date",
      "Current status: In Service / Out of Service / Due for Test",
      "Monthly review sign-off with total item reconciliation",
    ],
    note: "No lifting equipment may be used on site unless it appears in this register with a current 'In Service' status and a valid test certificate. Overloading of any lifting equipment is strictly prohibited. Equipment must be visually inspected before each use in addition to formal register inspections.",
    downloadHref: "/documents/lifting-equipment-register.pdf",
  },

  {
    slug: "plant-equipment-register",
    title: "Plant & Equipment Register",
    shortTitle: "Plant Register",
    category: "Operations",
    type: "Form",
    action: "download",
    desc: "Master register of all OSG plant, machinery, and major equipment. Tracks registration, inspection status, and operational condition to ensure all items meet registration and inspection requirements.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/precision_manufacturing.svg",
    overview: `The OSG Plant & Equipment Register is the authoritative record of all plant, machinery, and major equipment owned or leased by the company. It ensures that all items are registered, inspected on schedule, and maintained in a roadworthy and safe operating condition in compliance with Queensland WHS legislation.

Each entry records the equipment's internal ID, type and description, make, model, serial number, registration number where applicable, year of manufacture, date of last formal inspection, next inspection due date, and current operational status. The register covers all mechanised plant including forklifts, elevated work platforms, trucks, trailers, compressors, generators, and other major equipment.

The register is updated whenever equipment is acquired, disposed of, re-registered, or has a change in inspection or operational status. It is reviewed monthly by the operations manager or depot supervisor, who confirms that all plant scheduled for inspection has been inspected and that out-of-service items are tagged and secured.`,
    legalBasis: "Work Health and Safety Regulation 2011 (Qld) — Plant Registration Requirements · Code of Practice: Managing Risks of Plant in the Workplace (Safe Work Australia) · Queensland Transport Operations (Road Use Management) Act 1995",
    contents: [
      "Equipment ID, type, description, make, model, and serial number",
      "Registration number and registration expiry, where applicable",
      "Year of manufacture and date of acquisition",
      "Date of last formal inspection and next inspection due date",
      "Current operational status: In Service / Out of Service / Under Maintenance",
      "Registered operator or assigned driver, where applicable",
      "Monthly review sign-off by operations manager or depot supervisor",
    ],
    note: "No unregistered plant may be operated on public roads or OSG sites. Plant with an expired inspection date must be taken out of service immediately and tagged 'Do Not Operate' until a current inspection certificate is obtained. Maintain a copy of each item's registration and inspection certificate alongside this register.",
    downloadHref: "/documents/plant-equipment-register.pdf",
  },

  {
    slug: "delivery-docket",
    title: "Delivery Docket",
    shortTitle: "Delivery Docket",
    category: "Operations",
    type: "Form",
    action: "download",
    desc: "Records all materials and equipment dispatched from the OSG yard or delivered to site. Tracks descriptions, quantities, condition at dispatch, and return status. Includes ownership and liability terms.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/local_shipping.svg",
    overview: `The OSG Delivery Docket is completed for every dispatch of materials or equipment from the OSG yard to a site, or from one site to another. It creates a binding record of what was dispatched, the condition it was in at the time of dispatch, and who received it — establishing a clear chain of custody for all OSG assets.

The docket records the delivery date, delivery address, project name, the name of the person dispatching and the person receiving, and an itemised list of all items dispatched including quantity, description, condition at dispatch, and expected return status. The receiver signs the docket to confirm the items were received in the condition stated.

The liability clause on the docket confirms that all goods remain the property of O'Neill Scaffolding Group until paid for in full, and that the hirer or recipient assumes responsibility for the goods from the time of delivery. Lost or damaged items are charged to the hirer or recipient at replacement cost.`,
    legalBasis: "Personal Property Securities Act 2009 (Cth) — Ownership retention · Queensland Sale of Goods Act 1896 — Title and Risk · Australian Consumer Law — Goods in Transit",
    contents: [
      "Delivery date, project name, and delivery address",
      "Dispatched from (yard location or site) and dispatched by (driver or operator)",
      "Delivered to (site address) and received by (name and signature)",
      "Itemised list: item description, quantity, condition at dispatch, and return status",
      "Vehicle registration and driver details",
      "Liability and ownership clause: goods remain OSG property until paid in full",
      "Receiver signature and date confirming items received as described",
    ],
    note: "Both the driver/dispatcher and the receiver must sign this docket before the driver departs. Any discrepancy between items listed and items actually received must be noted on the docket before signing. Signed dockets are the primary evidence for any dispute regarding missing or damaged items.",
    downloadHref: "/documents/delivery-docket.pdf",
  },

  // ─── Commercial (3) ───────────────────────────────────────────────────────

  {
    slug: "tax-invoice",
    title: "Tax Invoice",
    shortTitle: "Tax Invoice",
    category: "Commercial",
    type: "Template",
    action: "download",
    desc: "GST-compliant tax invoice for all OSG goods and services. Includes itemised charges, GST calculations, 14-day payment terms, and EFT bank details.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/receipt_long.svg",
    overview: `The OSG Tax Invoice template is used for all invoicing of goods, services, and hire charges to clients and principal contractors. It is a GST-compliant document issued in accordance with the A New Tax System (Goods and Services Tax) Act 1999 (Cth) and must include all legally required information for a valid tax invoice.

The invoice captures the client's billing details, a unique invoice number, project name, invoice date, and payment due date. The itemised table records each item or service description, quantity, unit price excluding GST, GST amount, and line total. Sub-total, total GST, and total amount due are clearly displayed.

Payment terms are 14 days from invoice date unless otherwise agreed in writing. EFT bank details are provided on the invoice. OSG's ABN (98 678 346 953) is displayed on all invoices as required by law.`,
    legalBasis: "A New Tax System (Goods and Services Tax) Act 1999 (Cth) — Tax Invoice Requirements · Income Tax Assessment Act 1997 (Cth) · Australian Business Register — ABN Display Requirements",
    contents: [
      "OSG header: company name, ABN, address, phone, and email",
      "Bill to: client name, company, and billing address",
      "Invoice number, project name, invoice date, and payment due date",
      "Itemised table: description, quantity, unit price (ex-GST), GST, and line total",
      "Sub-total, total GST (10%), and total amount due including GST",
      "Payment terms and overdue interest clause",
      "EFT bank details: bank name, BSB, account number, and account name",
    ],
    note: "Each invoice must have a unique invoice number — never reuse numbers. Ensure OSG's ABN is displayed on all invoices for GST compliance. Do not issue a credit note for a disputed invoice until the dispute is formally resolved. Retain copies of all issued invoices for a minimum of 7 years.",
    downloadHref: "/documents/tax-invoice.pdf",
  },

  {
    slug: "scaffolding-quote",
    title: "Scaffolding Quote",
    shortTitle: "Quote Template",
    category: "Commercial",
    type: "Template",
    action: "download",
    desc: "Formal sales quotation for scaffolding services. Valid 14 days from issue. Includes scope of works, GST-inclusive pricing schedule, standard terms, and a client acceptance section.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/request_quote.svg",
    overview: `The OSG Scaffolding Quote template is used to provide formal, written quotations for all scaffolding and labour hire services. A written quote must be accepted in writing by the client before any work commences or materials are ordered.

The quote captures the client's details, site address, project name, and quote issue date. The Scope of Works section describes in plain language exactly what OSG will supply and perform, and what is explicitly excluded from the scope. The Pricing Schedule provides an itemised breakdown of all costs including labour, materials, and hire rates, with GST shown separately.

Quotes are valid for 14 days from the issue date. After 14 days, the pricing is subject to review. The Terms & Conditions section sets out OSG's standard commercial terms including payment, variations, and site access requirements. Client acceptance is recorded by signature and date in the acceptance section at the bottom of the quote.`,
    legalBasis: "Australian Consumer Law — Quotation and Acceptance Requirements · A New Tax System (Goods and Services Tax) Act 1999 (Cth) · Queensland Building and Construction Commission Act 1991 (Qld)",
    contents: [
      "OSG header and client details: name, company, site address, and project name",
      "Quote number, issue date, and valid until date (14 days from issue)",
      "Scope of works: specific inclusions and explicit exclusions",
      "Pricing schedule: item, description, quantity, unit rate, and total ex-GST",
      "Sub-total, GST amount, and total including GST",
      "Terms and conditions: payment terms, variations procedure, and site access",
      "Quote validity statement and OSG representative signature",
      "Client acceptance section: signature, date, and purchase order number",
    ],
    note: "This quote becomes a binding contract when signed by the client. Clearly list what is NOT included in the Scope of Works to avoid scope creep disputes. Any variation to the agreed scope must be documented in a written variation order before the additional work commences.",
    downloadHref: "/documents/scaffolding-quote.pdf",
  },

  {
    slug: "purchase-order",
    title: "Purchase Order",
    shortTitle: "Purchase Order",
    category: "Commercial",
    type: "Template",
    action: "download",
    desc: "Formal authorisation to procure goods or services from a supplier. Requires an authorised signature before any work or supply can commence. Includes itemised pricing and delivery terms.",
    icon: "https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/shopping_cart.svg",
    overview: `The OSG Purchase Order (PO) is the formal document by which O'Neill Scaffolding Group authorises the procurement of goods or services from a supplier or subcontractor. No procurement may proceed without an authorised, signed Purchase Order — verbal orders are not binding for OSG.

The PO captures the supplier's details, the delivery address, the required delivery date, and the relevant contact at OSG. The items table records each line item with description, quantity, unit of measure, unit price, and line total. Totals including GST are calculated at the bottom. A PO number is assigned to every purchase order for tracking and three-way matching against goods received and supplier invoices.

The PO must be signed by an authorised OSG representative before being issued to the supplier. Orders above $5,000 require management approval. Suppliers must quote the PO number on all delivery dockets and invoices they issue for the related supply.`,
    legalBasis: "Australian Consumer Law — Procurement and Contract Formation · A New Tax System (Goods and Services Tax) Act 1999 (Cth) · OSG Internal Procurement Policy — Authorised Signatory Requirements",
    contents: [
      "PO number, issue date, and OSG contact details",
      "Supplier name, ABN, address, and contact person",
      "Delivery address, required delivery date, and delivery instructions",
      "Items table: description, quantity, unit of measure, unit price, and line total",
      "Sub-total, GST, and total amount authorised",
      "Special instructions or conditions of supply",
      "Requester name and authorised signatory signature",
      "Instruction to supplier: quote PO number on all invoices and delivery dockets",
    ],
    note: "No procurement may proceed without an authorised, signed Purchase Order. Invoices received without a valid PO number will not be processed for payment. All POs must be retained for a minimum of 7 years for financial audit and ATO compliance purposes.",
    downloadHref: "/documents/purchase-order.pdf",
  },
];

export function getDocumentBySlug(slug) {
  return documents.find((d) => d.slug === slug) ?? null;
}
