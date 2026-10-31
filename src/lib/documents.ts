export interface Document {
  id: string;
  title: string;
  organization: string;
  sourceUrl: string;
  date: string;
  section?: string;
  content: string;
}

export const documents: Document[] = [
  {
    id: "nrb-first-time-id",
    title: "Requirements for First Time ID Registration",
    organization: "National Registration Bureau, State Department for Immigration and Citizen Services",
    sourceUrl: "https://www.usajili.go.ke/sites/default/files/2024-12/REQUIREMENTS%20FOR%20FIRST%20TIME%20ID%20REGISTRATION_0.pdf",
    date: "December 2024",
    section: "First Time ID Registration",
    content: "First time ID registration is primarily for those who have just turned 18. Requirements for proof of names, age and place of birth include: Certificate of birth, Notification of birth, Child health card, Academic certificate, Age assessment certificate from a Medical Officer of Health, Letter from Administrative Officer-Chief/Assistant Chief, Religious certificate, Marriage certificate or parental consent in case of married applicant. Requirements for proof of citizenship include: Either of the parents' identity card (Where parents are Kenyan by birth), Parent's ID card and certificate of registration (Where Parent is Kenyan by registration), Certificate of registration as a Kenyan citizen (Where the applicant is Kenyan by registration), Any other document that may be required by the Registration Officer. This service is offered free of charge."
  },
  {
    id: "nrb-duplicate-id",
    title: "Duplicate ID Registration",
    organization: "National Registration Bureau, State Department for Immigration and Citizen Services",
    sourceUrl: "https://usajili.go.ke/nrb",
    date: "2024",
    section: "Duplicate ID Registration",
    content: "Duplicate ID registration is when you lose your ID or it gets old and mutilated. Requirements include: A police Abstract or letter from an administrator. The fee for this application is Ksh. 1,050 which is paid via eCitizen. You must appear in person before the Registrar in order to apply for an ID Card."
  },
  {
    id: "nrb-change-particulars",
    title: "Change of Particulars",
    organization: "National Registration Bureau, State Department for Immigration and Citizen Services",
    sourceUrl: "https://usajili.go.ke/nrb",
    date: "2024",
    section: "Change of Particulars",
    content: "Change of particulars can be change of surname due to marriage or change of name to incorporate changed beliefs. Requirements include: Marriage certificate or Divorce decree, Deed poll and Gazette Notice, Sworn Affidavit. The prescribed fee of Ksh. 1,050 is paid via eCitizen."
  },
  {
    id: "huduma-birth-certificate",
    title: "Issuance of Birth Certificate",
    organization: "Huduma Kenya - Department of Civil Registration",
    sourceUrl: "https://hudumakenya.go.ke/lifeEvent/ServiceDetails/12",
    date: "2024",
    section: "Issuance of Birth Certificate",
    content: "A Birth Certificate provides proof that one is a Kenyan and is required by pupils and students applying to sit for National Examinations. It is also useful when applying for a National Identification Card when one turns 18 and in the application for a Kenyan Passport. Application for birth Certificate can be done at any Huduma Centre countrywide or Civil Registration Department offices. Requirements for a Birth Certificate include: Birth notification, ID's for both parents or Death Certificate if parents are deceased. Cost: Birth certificate with no amendments - Ksh 60, Birth certificate with amendments on the child's names - Ksh 100, Birth certificate with amendments on the parent's names - Ksh 100, Birth certificate with amendments on the child's and parent's names - Ksh 140. Timelines: 10 days."
  },
  {
    id: "crs-birth-certificate",
    title: "Current Birth Certificate Issuance",
    organization: "Department of Civil Registration Services, Ministry of Interior & Coordination of National Government",
    sourceUrl: "https://www.usajili.go.ke/current-birth-certificate",
    date: "2024",
    section: "Current Birth Certificate",
    content: "Requirements for issuance of birth certificate for current birth include: Knowledge of date of birth, name of the mother and place of birth by applicant, Acknowledgement of the Birth Notification (ABN), Tangible evidence of ABN number from place of birth where ABN is missing. Fee: Registration of the name or alteration of particulars in the birth register (Kshs. 1,000.00), Birth Certificate: Ksh. 200.00. This service is available in all subcounties in the country, Huduma centers, and the eCitizen platform."
  },
  {
    id: "immigration-passport-new",
    title: "Requirements for New Passport Applications",
    organization: "Directorate of Immigration Services",
    sourceUrl: "https://immigration.go.ke/application-requirements/",
    date: "2024",
    section: "New Passport Applications",
    content: "Requirements for new (First time) applications include: A duly filled application Form 19 and 2 payment invoices, Original Birth Certificate and a copy for citizens of Kenya by birth, Certificate of Registration for citizens of Kenya by registration, Original applicant's national identity card and a copy for adults, Duly filled Consent Form for minors, Copies of parents' national identity cards or Death certificates where applicable, Original and Copies of parents' birth certificates, Payment of the prescribed fee. Passport applicants apply online and pay requisite fees through the eCitizen portal. Upon completing the application process and paying applicable fees, applicants are required to book appointment through the eCitizen portal and select any of the Passport Processing Centres to submit Passport Applications and enrol biometrics."
  },
  {
    id: "immigration-passport-fees",
    title: "Passport Application Fees and Timeline",
    organization: "Directorate of Immigration Services",
    sourceUrl: "https://immigration.ecitizen.go.ke/index.php?id=4",
    date: "2024",
    section: "Passport Fees",
    content: "Passport fees are as follows: 32 Pages Ordinary 'A' Series - Kshs. 4,550, 48 pages Ordinary 'B' Series - Kshs. 6,050, 64 Pages Ordinary 'C' Series - Kshs. 7,550, East African Passport - Kshs. 990, Diplomatic passport (48 page) - Kshs 7,550, Mutilated Passport - Kshs 10,050, Lost Passport - Kshs 12,050. Timeline: It should take at least 10 working days to get your first passport once your form has been physically submitted at the Immigration offices. For all other application types, it should take at least 5 working days."
  },
  {
    id: "immigration-passport-lost",
    title: "Requirements for Lost Passports",
    organization: "Directorate of Immigration Services",
    sourceUrl: "https://immigration.go.ke/application-requirements/",
    date: "2024",
    section: "Lost Passports",
    content: "Requirements for Lost passports include: A duly filled application Form 19 and 2 payment invoices, Original ID and a copy for Adults, Personal Statement explaining circumstances for the damage, Sworn Affidavit to support the statement, Police Abstract for loss of passport, Copy of the lost passport bio data page if available, Payment of the prescribed fee."
  },
  {
    id: "immigration-passport-mutilated",
    title: "Requirements for Mutilated Passports",
    organization: "Directorate of Immigration Services",
    sourceUrl: "https://immigration.go.ke/application-requirements/",
    date: "2024",
    section: "Mutilated Passports",
    content: "Requirements for Mutilated Passports include: A duly filled application Form 19 and 2 payment invoices, Original ID and a copy for Adults, Previous Passport and a copy, Personal Statement explaining circumstances for the damage, Sworn Affidavit to support the statement, Payment of the prescribed fee."
  },
  {
    id: "health-service-charter",
    title: "Citizen's Service Delivery Charter - Ministry of Health",
    organization: "Ministry of Health",
    sourceUrl: "https://www.health.go.ke/service-delivery-charter",
    date: "2024",
    section: "Service Delivery Charter",
    content: "The Ministry of Health Service Delivery Charter outlines the following services: Response to verbal enquires (Reception Desk) - Specify the nature of enquiry and National ID required, Free, Timeline: Five minutes. Response to written correspondence via Email, Social Media (Twitter, Facebook, and YouTube), or Letters - Free, Timeline: One day for email/social media, Up to 7 days for letters. Respond to telephone calls (landline) - Free, Timeline: Within 3 rings. Attend to public complaints and provide feedback - Physical visit to office: Free, Timeline: Up to 1 day. Written communication: Free, Timeline: Up to 14 days. Access & Provision of Information - Written request, Free, Timeline: Up to 14 days."
  },
  {
    id: "president-service-charter",
    title: "Citizens' Services Delivery Charter",
    organization: "Office of the President",
    sourceUrl: "https://www.president.go.ke/wp-content/uploads/Service-Charter-English.pdf",
    date: "2024",
    section: "Service Charter",
    content: "The Citizens' Services Delivery Charter outlines standard services including: Verbal response to enquiry/communication - Clear enquiry/communication required, Free, Timeline: Within five minutes. Written response to enquiry/communication - Formal request (email, letters, fax messages) required, Free, Timeline: Acknowledgement within one day for emails, Acknowledgement within two days for other types of correspondence, Detailed response/report within five working days. Telephone response - Within the first three rings, Free. Walk-in visits - Within five minutes of arrival, Free. Formal written requests - Acknowledgement within two working days upon receipt, Action taken communicated within ten working days of receipt, Free. Requests for information - Notification within fourteen days of receipt of request, Free."
  },
  {
    id: "ecitizen-mcda",
    title: "eCitizen MCDA Onboarding Process",
    organization: "State Department for Immigration and Citizen Services",
    sourceUrl: "https://usajili.go.ke/ecitizen-mcda-onboarding",
    date: "2024",
    section: "eCitizen Onboarding",
    content: "The eCitizen Onboarding process for Ministries, Counties, Departments and Agencies (MCDAs) includes: Team Allocation - Each MCDA will be assigned a representative from this Directorate, and Webmasters. Introduction - MCDA representatives will provide key details about their organization including full name, ministry affiliation, contact person, and contact details for follow-up and coordination. List of Services Offered - All services offered by the MCDA will be reviewed and categorized, identifying all services offered (free or paid), determining service digitization status (fully, partially, or not digitized), and confirming if there is a Self-service Portal. For MCDAs with Existing Systems - Agencies with existing systems will integrate them with eCitizen, specifying whether the system is in-house or third-party, outlining processes managed by the system, providing login page links, logos, and service descriptions for eCitizen dashboard integration."
  }
];
