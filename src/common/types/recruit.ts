export interface Recruit {
  id: string
  title: string
  companyName: string
  salary: string
  employmentType: string
  career: string
  location: string
  createdAt: string
  deadline: string
  dDay: string | number
}

export interface RecruitFilter {
  job?: string
  career?: string
  location?: string
  companyName?: string
  sortType?: 'latest' | 'deadline'
}

export interface RecruitDetail {
  id: string
  title: string
  description: string
  jobInfo: {
    jobType: string
    recruitCount: string
    education: string
    major: string
    jobDescription: string
    workCondition: {
      workType: string
      workDays: string
      totalWorkHours: string
      workHours: string
      salary: string
      career: string
      requiredCertificates: string
    }
  }
  recruitmentProcess: {
    processMethod: string
    applicationMethod: string
    requiredDocuments: string
    deadline: string
  }
  contactPerson: {
    name: string
    department: string
    mobile: string
    phone: string
    fax: string
    email: string
    deadline: string
  }
  companyInfo: {
    name: string
    representative: string
    employeeCount: string
    insurance: string
    businessSummary: string
    address: string
  }
}
