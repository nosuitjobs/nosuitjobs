## Company
```
id: String
name: String
email: String
password: String
employees: String
founded: Int
social: Object
url: String
logo: String
```

## Offer
```
id: String
title: String
description: {
  why: String,
  looking: String,
  other: String,
}
perks: [perkId]
teamDistribution: {
  frontend: Int
  backend: Int
  devops: Int
  sales: Int
  design: Int
},
requirements: {
  responsabilities: Array
  requirements: Array
  nice_to_have: Array
}
recruitingSteps: [{
  title: String
  description: String
  days: String
}]
workMethodology: {
  dailyBuilds: Boolean
  codeReview: Boolean
  commitFirstDay: Boolean
  bestTools: Boolean
  qualityAssurance: Boolean
  workConditions: Boolean
  sourceControl: Boolean
  issueTracker: Boolean
  oneStepBuild: Boolean
  bugsBeforeCode: Boolean
  projectUp2h: Boolean
  pairProgramming: Boolean
}
technologies: Array,
workProfile: {
  newFeatures: Int
  maintenance: Int
  clientSupport: Int
  documentWriting: Int
  meetings: Int
}
culture: {
  perfomanceEvaluation: String
  remoteWork: String
  companyRetreat: String
  teamRetreat: String
  equippedSupplied: String
  paidVacation: String
  paidParentalLeave: String
}
salary: String
location: String
votes: Int
```
