import MockRequest from './mockrequest'
window.TestData = {
  "query:departmentInformationTree":{
    "code": "S_OK",
    "summary": "",
    "var": [
      {
        "createDate": "2018-12-04 20:18:23",
        "createId": "",
        "departmentHeadName": "",
        "departmentHeadWorking": "",
        "departmentName": "彩讯科技",
        "departmentParentId": null,
        "departmentStatus": 1,
        "id": 1,
        "numberOfIncumbents": 0,
        "numberOfPeople": 10,
        "updateDate": null,
        "updateId": ""
      },
      {
        "createDate": "2018-12-04 20:18:23",
        "createId": "",
        "departmentHeadName": "",
        "departmentHeadWorking": "",
        "departmentName": "开发一部",
        "departmentParentId": 1,
        "departmentStatus": 1,
        "id": 2,
        "numberOfIncumbents": 0,
        "numberOfPeople": 10,
        "updateDate": null,
        "updateId": ""
      },
      {
        "createDate": "2018-12-04 20:18:23",
        "createId": "",
        "departmentHeadName": "",
        "departmentHeadWorking": "",
        "departmentName": "前端开发室",
        "departmentParentId": 2,
        "departmentStatus": 1,
        "id": 3,
        "numberOfIncumbents": 0,
        "numberOfPeople": 10,
        "updateDate": null,
        "updateId": ""
      },
      {
        "createDate": "2018-12-04 20:18:23",
        "createId": "",
        "departmentHeadName": "",
        "departmentHeadWorking": "",
        "departmentName": "产品部",
        "departmentParentId": 1,
        "departmentStatus": 1,
        "id": 10,
        "numberOfIncumbents": 0,
        "numberOfPeople": 10,
        "updateDate": null,
        "updateId": ""
      },
      {
        "createDate": "2018-12-04 20:18:23",
        "createId": "",
        "departmentHeadName": "",
        "departmentHeadWorking": "",
        "departmentName": "平台开发室",
        "departmentParentId": 2,
        "departmentStatus": 1,
        "id": 4,
        "numberOfIncumbents": 0,
        "numberOfPeople": 10,
        "updateDate": null,
        "updateId": ""
      },
      {
        "createDate": "2018-12-04 20:18:23",
        "createId": "",
        "departmentHeadName": "",
        "departmentHeadWorking": "",
        "departmentName": "产品策划室",
        "departmentParentId": 10,
        "departmentStatus": 1,
        "id": 11,
        "numberOfIncumbents": 0,
        "numberOfPeople": 10,
        "updateDate": null,
        "updateId": ""
      },
      {
        "createDate": "2018-12-04 20:18:23",
        "createId": "",
        "departmentHeadName": "",
        "departmentHeadWorking": "",
        "departmentName": "UI/UE",
        "departmentParentId": 10,
        "departmentStatus": 1,
        "id": 12,
        "numberOfIncumbents": 0,
        "numberOfPeople": 10,
        "updateDate": null,
        "updateId": ""
      },
      {
        "createDate": "2018-12-04 20:18:23",
        "createId": "",
        "departmentHeadName": "",
        "departmentHeadWorking": "",
        "departmentName": "过程管理部",
        "departmentParentId": 1,
        "departmentStatus": 1,
        "id": 20,
        "numberOfIncumbents": 0,
        "numberOfPeople": 10,
        "updateDate": null,
        "updateId": ""
      }
    ]
  },
  "pagingQuery:employeeInfo": {
    "code": "S_OK",
    "var": {
      total: 100,
      record: [{
          "employeeWorking": "1001",
          "employeeName": "张三",
          "departmentInformation": "研发一部",
          "positionInformation": "前端工程师",
          "hiredate": "2018-02-05",
          "mobilePhoneNumber": "1390000000",
          "employeesStateInformation": "在职",
          "workingplaceInformation": "深圳市南山区",
          "recruitmentChannel": "智联"
        }, {
          "employeeWorking": "1002",
          "employeeName": "李四",
          "departmentInformation": "研发一部",
          "positionInformation": "前端工程师",
          "hiredate": "2018-02-05",
          "mobilePhoneNumber": "1390000000",
          "employeesStateInformation": "在职",
          "workingplaceInformation": "深圳市南山区",
          "recruitmentChannel": "智联"
        },
        {
          "employeeWorking": "1003",
          "employeeName": "王五",
          "departmentInformation": "研发一部",
          "positionInformation": "前端工程师",
          "hiredate": "2018-02-05",
          "mobilePhoneNumber": "1390000000",
          "employeesStateInformation": "在职",
          "workingplaceInformation": "深圳市南山区",
          "recruitmentChannel": "智联"
        }
      ]
    }
  },

  "query:educationExperience": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": [{
        Id: 1,
        employeeId: 1,
        school: "斯坦福大学",
        startTime: "2015-1-1",
        endTime: "2016-1-1",
        speciality: "计算机科学",
        educationForm: "全日",
        recordOfFormalSchooling: "硕士",
        degree: "硕士"
      },
      {
        Id: 2,
        employeeId: 1,
        school: "北京大学",
        startTime: "2011-1-1",
        endTime: "2015-1-1",
        speciality: "计算机科学",
        educationForm: "全日",
        recordOfFormalSchooling: "本科",
        degree: "学士"
      }
    ]
  },
  "queryList:annualAssessment": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": [{
        annualAssessmentId: 123312,
        employeeWorking: 234234,
        employeeName: '张三',
        annualAssessmentType: '年考核',
        departmentName: '开发一部',
        annualAssessmentYear: '2017年',
        results: "合格",
        q1: '合格',
        q2: '合格',
        q3: '合格',
        q4: '合格',
      },
      {
        annualAssessmentId: 123312,
        employeeWorking: 234234,
        employeeName: '张三',
        annualAssessmentType: '年考核',
        departmentName: '开发一部',
        annualAssessmentYear: '2018年',
        results: "合格",
        q1: '合格',
        q2: '合格',
        q3: '合格',
        q4: '合格',
      }
    ]
  },
  "query:workExperience": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": [{
      Id: 1,
      employeeId: 1,
      companyName: "京东",
      hiredate: "2016-1-1",
      departureTime: "2016-1-1",
      position: "产品经理",
      reference: "张三",
      referenceTelephone: "13900000001"
    }, {
      Id: 2,
      employeeId: 2,
      companyName: "百度",
      hiredate: "2016-1-1",
      departureTime: "2016-1-1",
      position: "产品经理",
      reference: "张三",
      referenceTelephone: "13900000001"
    }]
  },
  "query:projectRecord": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": [{
        Id: 1,
        employeeId: 1,
        projectName: "京东",
        startTime: "2016-1-1",
        endTime: "2018-1-1",
        manager: "张三",
        position: "产品经理",
        responsibility: "负责项目的开发和维护"
      }, {
        Id: 1,
        employeeId: 1,
        projectName: "京东",
        startTime: "2016-1-1",
        endTime: "2018-1-1",
        manager: "张三",
        position: "产品经理",
        responsibility: "负责项目的开发和维护"
      },
      {
        Id: 1,
        employeeId: 1,
        projectName: "京东",
        startTime: "2016-1-1",
        endTime: "2018-1-1",
        manager: "张三",
        position: "产品经理",
        responsibility: "负责项目的开发和维护"
      }
    ]
  },
  "query:trainedExperience": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": [{
        Id: 1,
        employeeId: 1,
        trainingPrograms: "PMP培训",
        startTime: "2016-1-1",
        endTime: "2016-1-1",
        trainingContent: "PMP培训",
        getCertificate: "2016-6-1",
        certificateName: "PMP证书"
      },
      {
        Id: 2,
        employeeId: 1,
        trainingPrograms: "系统架构师培训",
        startTime: "2016-1-1",
        endTime: "2016-1-1",
        trainingContent: "系统架构师",
        getCertificate: "2016-6-1",
        certificateName: "系统架构师证书"
      },
    ]
  },
  "attachment:queryByEmployeeWorking": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": [{
        Id: 1,
        fileName: '张珊学位正',
        fileType: '学位证',
        uploadDate: '2018-1-4'
      },
      {
        Id: 2,
        fileName: '张珊身份证',
        fileType: '身份证',
        uploadDate: '2018-1-4'
      },
    ]
  },
  "filing:attendance": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
  },
  "query:attendanceDetails": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "total": 100,
    "record": [{
      Id: 1,
      employeeName: '张珊',
      employeeWorking: '95267',
      departmentName: '开发一部',
      attendanceId: '123',
      attendanceType: '指纹机',
      attendanceDate: '2018-02-12',
      attendanceStatus: '正常',
      attendanceStatusDescription: '状态描述',
      workingHours: '2018-02-12 08：30',
      workDescription: '上班描述',
      afterGetOffWorkTime: '2018-02-12 17：30',
      offWorkDescription: '下班描述',
      overtimePunch: '2018-02-12 19：30',
      lateMinute: '32',
      leaveEarlyMinute: '12',
      overtimeMinutes: '31',
      workingMinutes: '122',
      leaveDays: '请假天数',
      numberOfDaysOff: '3天',
      remark: '备注',
      numberOfDaysToWork: '19天'

    }]
  },
  "pageQuery:attendanceStatistics": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "total": 100,
    "record": [{
      Id: 1,
      employeeName: '张珊',
      employeeWorking: '95267',
      departmentName: '开发一部',
      employeeStatus: '在职',
      attendanceDays: '28天',
      normalAttendanceDays: '27天',
      lateArrivals: '3次',
      daysOfCompletion: '1天',
      workingPlaceName: '深圳',
      leaveDaysCount: '1天',
      numberOfDaysOffCount: '1天',
      attendanceType: '指纹机'

    }]
  },
  "queryPage:attendanceHoliday": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "total": 100,
    "record": [{
      attendanceHolidayId: "23112",
      attendanceHolidayDate: '2018-12-22',
      attendanceHolidayDateNode: '10:30:00',
      attendanceHolidayType: '延迟上班',
      effectiveArea: '广州,深圳',
      remark: '广州深圳暴雨'
    }]
  },
  "pageQuery:socialSecurity": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "total": 100,
    "record": [{
        employeeName: '张三',
        employeeWorking: 12331,
        departmentName: '开发一部',
        employeeStatus: '在职',
        socialSecurityId: '31212132',
        socialSecurityYear: '2018年',
        socialSecurityMonth: '08月',
        providentFundBase: '990',
        socialSecurityBase: '401',
        socialSecurityDetailsInformation: [{
            socialSecurityDetailsId: '12312',
            unitDelivery: '3201',
            personalInteraction: '123.22',
            socialSecurityId: '12321',
            employeeWorking: 12331,
            socialSecurityDetailsType: 1
          },
          {
            socialSecurityDetailsId: '12312',
            unitDelivery: '3201',
            personalInteraction: '123.22',
            socialSecurityId: '12321',
            employeeWorking: 12331,
            socialSecurityDetailsType: 2
          }, {
            socialSecurityDetailsId: '12312',
            unitDelivery: '3201',
            personalInteraction: '123.22',
            socialSecurityId: '12321',
            employeeWorking: 12331,
            socialSecurityDetailsType: 3
          }, {
            socialSecurityDetailsId: '12312',
            unitDelivery: '3201',
            personalInteraction: '123.22',
            socialSecurityId: '12321',
            employeeWorking: 12331,
            socialSecurityDetailsType: 4
          }, {
            socialSecurityDetailsId: '12312',
            unitDelivery: '3201',
            personalInteraction: '123.22',
            socialSecurityId: '12321',
            employeeWorking: 12331,
            socialSecurityDetailsType: 5
          }, {
            socialSecurityDetailsId: '12312',
            unitDelivery: '3201',
            personalInteraction: '123.22',
            socialSecurityId: '12321',
            employeeWorking: 12331,
            socialSecurityDetailsType: 6
          }
        ]
      },
      {
        employeeName: '李四',
        employeeWorking: 12331,
        departmentName: '开发一部',
        employeeStatus: '在职',
        socialSecurityId: '31212132',
        socialSecurityYear: '2018年',
        socialSecurityMonth: '08月',
        providentFundBase: '990',
        socialSecurityBase: '401',
        socialSecurityDetailsInformation: [{
            socialSecurityDetailsId: '12312',
            unitDelivery: '3201',
            personalInteraction: '123.22',
            socialSecurityId: '12321',
            employeeWorking: 12331,
            socialSecurityDetailsType: 1
          },
          {
            socialSecurityDetailsId: '12312',
            unitDelivery: '3201',
            personalInteraction: '123.22',
            socialSecurityId: '12321',
            employeeWorking: 12331,
            socialSecurityDetailsType: 2
          }, {
            socialSecurityDetailsId: '12312',
            unitDelivery: '3201',
            personalInteraction: '123.22',
            socialSecurityId: '12321',
            employeeWorking: 12331,
            socialSecurityDetailsType: 3
          }, {
            socialSecurityDetailsId: '12312',
            unitDelivery: '3201',
            personalInteraction: '123.22',
            socialSecurityId: '12321',
            employeeWorking: 12331,
            socialSecurityDetailsType: 4
          }, {
            socialSecurityDetailsId: '12312',
            unitDelivery: '3201',
            personalInteraction: '123.22',
            socialSecurityId: '12321',
            employeeWorking: 12331,
            socialSecurityDetailsType: 5
          }, {
            socialSecurityDetailsId: '12312',
            unitDelivery: '3201',
            personalInteraction: '123.22',
            socialSecurityId: '12321',
            employeeWorking: 12331,
            socialSecurityDetailsType: 6
          }
        ]

      }
    ]
  },

  "pageQuery:attendance": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "total": 100,
    "record": [{
      Id: 1,
      employeeName: '张珊',
      employeeWorking: '95267',
      departmentName: '开发一部',
      attendanceId: '123',
      attendanceType: '指纹机',
      attendanceDate: '2018-02-12',
      attendanceStatus: '正常',
      attendanceStatusDescription: '状态描述',
      workingHours: '2018-02-12 08：30',
      workDescription: '上班描述',
      afterGetOffWorkTime: '2018-02-12 17：30',
      offWorkDescription: '下班描述',
      overtimePunch: '2018-02-12 19：30',
      lateMinute: '32',
      leaveEarlyMinute: '12',
      overtimeMinutes: '31',
      workingMinutes: '122',
      leaveDays: '请假天数',
      numberOfDaysOff: '3天',
      remark: '备注',
      numberOfDaysToWork: '19天'

    }]
  },
  "queryList:attachment": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": [{
      Id: 1,
      fileName: '张珊学位证',
      employeeName: '张珊',
      employeeWorking: '95267',
      departmentName: '开发一部',
      workingPlaceName: '深圳',
      uploadTime: '2018-1-4',
      certificateTypeName: '学位证',
      EmployeeStatus: '离职'

    }, {
      Id: 2,
      fileName: '张珊身份证',
      employeeName: '张珊',
      employeeWorking: '95267',
      departmentName: '开发一部',
      workingPlaceName: '深圳',
      uploadTime: '2018-1-4',
      certificateTypeName: '学位证',
      EmployeeStatus: '离职'
    }]
  },
  "query:transferRecord": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": [{
        Id: 1,
        transferType: '部门调动',
        employeeWorking: '123312',
        transferTime: "2016-1-1",
        transferBefore: "开发二部",
        Transferafter: "开发一部",
        employeeName: "张珊",
        transfer_reason: '内部岗位调动',
        remarks: '校招'
      },
      {
        Id: 2,
        transferType: '部门调动',
        employeeWorking: '123312',
        transferTime: "2018-1-1",
        transferBefore: "开发一部",
        Transferafter: "开发二部",
        employeeName: "张珊",
        transfer_reason: '内部岗位调动',
        remarks: '校招'
      },
    ]
  },
  "queryById:employee": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": {
      Id: 1,
      employeeWorking: 1001,
      employeeName: '张珊',
      gender: "女",
      position: "前端开发工程师",
      employee_photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545025689603&di=7089395348529f7d7bb1701725848970&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fca1349540923dd54b1962254da09b3de9c824821.jpg',
      stateEmployees: "在职",
      workingPlace: "深圳",
      siling: '1.6年',
      department: '开发一部',
      hiredate: "2015-1-1"
    }
  },
  "query:qualificationCertificate": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": [{
      Id: 1,
      employeeId: 1,
      certificateName: "英语四级",
      certificateType: "四级证书",
      getTheTime: "2015-1-1"
    }]
  },
  "query:volunteersRecord": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": [{
      Id: 1,
      employeeId: 1,
      volunteerProject: "组织献血",
      volunteerStartTime: "2010-1-1",
      volunteerEndTime: "2011-1-1",
      asARole: "队长",
      responsibleContent: "现场咨询"
    }]
  },
  "query:oALeaveRecord": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "total": 100,
    "record": [{
      employeeName: '张三',
      departmentName: '部门名称',
      leaveId: '132432',
      leaveType: '病假',
      leaveStatus: '同意',
      leaveSubTime: '2018-03-12',
      leaveFinalApprover: '李四',
      leaveApproverTime: '2018-03-15',
      leaveIntervalDays: '5天',
      leaveSystemDays: '5天',
      overtimeStartTime: '2018-02-12 15:00',
      overtimeEndTime: '2018-02-13 15:00',
      remark: '个人加班调休',
      employeeWorking: 12312,
      leaveStartTime: '2018-09-12 12:00',
      leaveEndTime: '2018-09-12 22:00',
    }]
  },
  "oALeaveRecord2": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "total": 100,
    "record": [{
      employeeName: '张1',
      departmentName: '部门名称',
      leaveId: '132432',
      leaveType: '病假',
      leaveStatus: 'no同意',
      leaveSubTime: '2018-03-12',
      leaveFinalApprover: '李四',
      leaveApproverTime: '2018-03-15',
      leaveIntervalDays: '5天',
      leaveSystemDays: '5天',
      overtimeStartTime: '2018-02-12 15:00',
      overtimeEndTime: '2018-02-13 15:00',
      remark: '个人加班调休',
      employeeWorking: 12312,
      leaveStartTime: '2018-09-12 12:00',
      leaveEndTime: '2018-09-12 22:00',
    }]
  },
  " conditionQuery:oALeaveRecord": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "total": 100,
    "record": [{
      leaveId: 12312,
      leaveType: '病假',
      leaveStatus: '批准',
      leaveSubTime: '2018-03-22',
      leaveFinalApprover: '最后审批人',
      leaveApproverTime: '2018-02-12',
      leaveIntervalDays: '4天',
      leaveSystemDays: '4天',
      overtimeStartTime: '2018-01-22 12:22',
      overtimeEndTime: '2018-01-22 19:22',
      remark: '备注',
      employeeWorking: 1231231231,
      leaveStartTime: '2018-03-12',
      leaveEndTime: '2018-03-14'

    }]
  },
  "oALeaveRecordtwo": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "total": 100,
    "record": [{
      leaveId: 12312,
      leaveType: '病222假',
      leaveStatus: 'no批222准',
      leaveSubTime: '2018-0223-22',
      leaveFinalApprover: '22最后审批人',
      leaveApproverTime: '2018-02-12',
      leaveIntervalDays: '4天',
      leaveSystemDays: '4天',
      overtimeStartTime: '2018-01-22 12:22',
      overtimeEndTime: '2018-01-22 19:22',
      remark: '备2222注',
      employeeWorking: 1231231231,
      leaveStartTime: '2018-03-12',
      leaveEndTime: '2018-03-14'
    }]
  },

  "queryPage:workingTimeSetting": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "total": 100,
    "record": [{
      workingTimeId: '123342',
      workingHours1: '09:20:00',
      workingHours2: '09:00:00',
      delayedWorkingHours1: '08:30:00',
      delayedWorkingHours2: '08:40:00',
      afterGetOffWorkTime1: '18:00:00',
      afterGetOffWorkTime2: '17:30:00',
      fridayOffWorkHours: '18:00:00',
      workingHoursOnFriday: '09:00:00',
      workingTimeName: '总部'
    }]
  },
  "queryPage:attendanceSpecialStaffSetting": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "total": 100,
    "record": [{
      employeeName: 'silan',
      departmentName: '开发一部',
      attendanceSpecialStaffId: '',
      attendanceSpecialStaffType: '延迟下班（脯乳期）',
      delayOrEarlyLeave: '早退4分钟',
      startingTime: '2018-12-22',
      endTime: '2018-12-23',
      employeeWorking: '12312'
    }]
  },
  "query:annualLeaveRecord": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "total": 100,
    "record": [{
        employeeName: '张三',
        departmentName: '开发一部',
        employeeStatus: '在职',
        hiredate: '2018-02-12',
        annualLeaveId: '',
        annualLeaveStatus: '正常',
        annualLeaveTotalDays: '14天',
        annualLeaveOffDays: '12天',
        remark: '备注而已',
        deductionMark: '已扣除',
        correctedState: '已修正',
        annualLeaveEffectiveDate: '2018-05-12',
        annualLeaveDateOfExpiry: '2018-05-22',
        annualLeaveDeferredDeadline: '2018-05-30',
        employeeWorking: 1231212,
        turnPositiveTime: '2018-03-02'
      },
      {
        employeeName: '理三',
        departmentName: '开发一部',
        employeeStatus: '在职',
        hiredate: '2018-02-12',
        annualLeaveId: '',
        annualLeaveStatus: '正常',
        annualLeaveTotalDays: '14天',
        annualLeaveOffDays: '1天',
        remark: '备注而已',
        deductionMark: '已扣除',
        correctedState: '已修正',
        annualLeaveEffectiveDate: '2018-05-12',
        annualLeaveDateOfExpiry: '2018-05-22',
        annualLeaveDeferredDeadline: '2018-05-30',
        employeeWorking: 1231212,
        turnPositiveTime: '2018-03-02'

      }
    ]
  },
  "queryList:departure": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": [{

      Id: 1,
      employeeName: '李四',
      employeeWorking: '31212',
      departmentName: '开发一部',
      positionName: '前端开发',
      resignationTypeName: '主动离职',
      Hiredate: '2015-03-21',
      departureTime: '2017-03-22',
      detailedReasonsLeaving: '个人职业发展原因'
    }]
  },
  "queryByEmployeeId:contract": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": [{
      Id: 1,
      contractStatus: '未到期',
      contractStartTime: '2012-03-22',
      contractEndTime: '2013-03-22',
      contractPeriod: '3年',
      contractId: 123123312
    }, {
      Id: 2,
      contractStatus: '未到期',
      contractStartTime: '2017-03-22',
      contractEndTime: '2019-03-22',
      contractPeriod: '3年',
      contractId: 1231231,
    }, ]
  },
  "queryPage:rewardsAndPunishments": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": {
      total: 100,
      record: [{
          Id: 1,
          employeeName: '张三',
          employeeWorking: '132312',
          departmentName: '开发一部',
          rewardId: '12321',
          rewardType: '奖励',
          rewardDate: '2017-12-12',
          rewardContent: '发现139邮箱的一个XSS漏洞后及时汇报领导紧急修复，未造成大范围影响',
          rewardRemark: '口头奖励',
          employeeStatus: '在职',
        },
        {
          Id: 2,
          employeeName: '李四',
          employeeWorking: '132312',
          departmentName: '开发一部',
          rewardId: '12321',
          rewardType: '惩罚',
          rewardDate: '2017-12-11',
          rewardContent: '发现139邮箱的一个XSS漏洞后没有及时汇报领导紧急修复，造成大范围影响',
          rewardRemark: '次要责任',
          employeeStatus: '在职',

        }
      ]
    }
  },
  "import:annualAssessment": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
  },
  "terminate:contract": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
  },
  "update:rewardsAndPunishments": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
  },
  "remove:rewardsAndPunishments": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
  },
  "delete:annualAssessment": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
  },
  "remove:contract": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
  },
  "renewal:contract": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
  },
  "queryList:contract": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": [{
      Id: 1,
      employeeName: '李四',
      employeeWorking: '31212',
      departmentName: '开发一部',
      employeeStatus: '离职',
      hiredate: '2017-03-21',
      contractStatus: '未到期',
      contractStartTime: '2012-03-22',
      contractEndTime: '2013-03-22',
      contractPeriod: '3年'
    }, {
      Id: 2,
      employeeName: '李跟',
      employeeWorking: '31212',
      departmentName: '开发一部',
      employeeStatus: '离职',
      hiredate: '2017-03-21',
      contractStatus: '未到期',
      contractStartTime: '2017-03-22',
      contractEndTime: '2019-03-22',
      contractPeriod: '3年'
    }, {
      Id: 3,
      employeeName: '李大',
      employeeWorking: '31212',
      departmentName: '开发一部',
      employeeStatus: '离职',
      hiredate: '2017-03-21',
      contractStatus: '未到期',
      contractStartTime: '2017-03-22',
      contractEndTime: '2019-03-22',
      contractPeriod: '3年'
    }]
  },
  "queryList:resignationApplication": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": [{
      Id: 1,
      employeeName: '李四',
      employeeWorking: '31212',
      departmentName: '开发一部',
      status: '离职',
      employeeStatus: '离职',
      resignTime: '2017-04-12',
      approvalStatus: '同意',
      submissionTime: '2017-03-21',
      approver: '张珊',
      approvalTime: '2017-03-22',
      reasonForLeaving: '个人职业发展原因'
    }]
  },
  "pageQuery:salary":{
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",

    "var": {
      "total":1,
      "record":[{
        "employeeName": "张三",
        "departmentName": "开发一部",
        "employeeStatus": "在职",
        "salaryId": "薪资信息ID",
        "salaryYear": "薪资年份",
        "salaryMonth": "薪资月份",
        "basicWage": "基本工资",
        "performancePay": "绩效工资",
        "ageSalary": "司龄工资",
        "wageAdjustment": "工资性调整",
        "employeeWorking": "员工工号",
        "totalWagesPayable": "应发工资总额",
        "substituteSocialSecurity": "代交社保/公积金",
        "taxableWage": "应税工资",
        "personalIncomeTax": "个人所得税",
        "otherDeductions": "其他扣款",
        "realWage": "实发工资",
        "basicMonthlySalary": "基本月薪总额",
        "salaryDetailsInformation": [
          
          {"salaryDetailsId": "","salaryDetailsType1": "1","salaryDetailsType2": "1","salaryAmount": "100","salaryAmountTotal": "100"},
          {"salaryDetailsId": "","salaryDetailsType1": "1","salaryDetailsType2": "2","salaryAmount": "100","salaryAmountTotal": "100"},
          {"salaryDetailsId": "","salaryDetailsType1": "1","salaryDetailsType2": "3","salaryAmount": "100","salaryAmountTotal": "100"},
          {"salaryDetailsId": "","salaryDetailsType1": "1","salaryDetailsType2": "4","salaryAmount": "100","salaryAmountTotal": "100"},
          {"salaryDetailsId": "","salaryDetailsType1": "2","salaryDetailsType2": "5","salaryAmount": "100","salaryAmountTotal": "100"},
          {"salaryDetailsId": "","salaryDetailsType1": "2","salaryDetailsType2": "6","salaryAmount": "100","salaryAmountTotal": "100"},
          {"salaryDetailsId": "","salaryDetailsType1": "2","salaryDetailsType2": "7","salaryAmount": "100","salaryAmountTotal": "100"},
          {"salaryDetailsId": "","salaryDetailsType1": "2","salaryDetailsType2": "8","salaryAmount": "100","salaryAmountTotal": "100"},
          {"salaryDetailsId": "","salaryDetailsType1": "2","salaryDetailsType2": "9","salaryAmount": "100","salaryAmountTotal": "100"},
          {"salaryDetailsId": "","salaryDetailsType1": "3","salaryDetailsType2": "10","salaryAmount": "100","salaryAmountTotal": "100"},
          {"salaryDetailsId": "","salaryDetailsType1": "3","salaryDetailsType2": "11","salaryAmount": "100","salaryAmountTotal": "100"},
          {"salaryDetailsId": "","salaryDetailsType1": "4","salaryDetailsType2": "12","salaryAmount": "100","salaryAmountTotal": "100"},
          {"salaryDetailsId": "","salaryDetailsType1": "4","salaryDetailsType2": "13","salaryAmount": "100","salaryAmountTotal": "100"},
          {"salaryDetailsId": "","salaryDetailsType1": "4","salaryDetailsType2": "14","salaryAmount": "100","salaryAmountTotal": "100"}, 
          {"salaryDetailsId": "","salaryDetailsType1": "4","salaryDetailsType2": "15","salaryAmount": "100","salaryAmountTotal": "100"},
        
      ]
    }]
    }
  },

  "pageQuery:salaryAdjustment": {
    "code": "S_OK",
    "summary": "操作成功",
    "token": "12321312",
    "var": [{
      "employeeName": "张三丰",
      "employeeStatus": "员工状态",
      "departmentName": "部门名称",
      "salaryAdjustmentId": "",
      "effectiveDate": "2018-1-1",
      "adjustmentType": "1",
      "adjustmentReason": "升职",
      "beforeSalaryAdjustment": "10000",
      "afterSalaryAdjustment": "11000",
      "adjustmentAmount": "1000",
      "adjustmentRatio": "10%",
      "remarks": "备注",
      "employeeWorking": "员工工号"
    },
    {
      "employeeName": "李四光",
      "employeeStatus": "员工状态",
      "departmentName": "部门名称",
      "salaryAdjustmentId": "",
      "effectiveDate": "2018-1-1",
      "adjustmentType": "1",
      "adjustmentReason": "升职",
      "beforeSalaryAdjustment": "12000",
      "afterSalaryAdjustment": "13000",
      "adjustmentAmount": "1000",
      "adjustmentRatio": "8%",
      "remarks": "备注",
      "employeeWorking": "员工工号"
    }
  ]
  },




}



var rules = [];
for (var key in window.TestData) {

  rules.push({
    url: key,
    responseText: window.TestData[key]
  })
}
MockRequest.create().addRules(rules);

export default TestData