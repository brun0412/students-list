const studentData = [
  {
    "id": 1,
    "firstName": "Emma",
    "lastName": "Johnson",
    "studentNumber": "S100001",
    "email": "emma.johnson@student.college.edu",
    "phone": "613-555-1001",
    "avatar": "https://i.pravatar.cc/400?img=1",
    "courses": [
      {
        "courseName": "Web Development",
        "courseCode": "CST8117",
        "grade": 91,
        "letterGrade": "A+"
      },
      {
        "courseName": "JavaScript Programming",
        "courseCode": "CST8285",
        "grade": 88,
        "letterGrade": "A"
      },
      {
        "courseName": "Database Systems",
        "courseCode": "CST2355",
        "grade": 85,
        "letterGrade": "A"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Liam",
    "lastName": "Smith",
    "studentNumber": "S100002",
    "email": "liam.smith@student.college.edu",
    "phone": "613-555-1002",
    "avatar": "https://i.pravatar.cc/400?img=2",
    "courses": [
      {
        "courseName": "Web Development",
        "courseCode": "CST8117",
        "grade": 84,
        "letterGrade": "A-"
      },
      {
        "courseName": "Operating Systems",
        "courseCode": "CST8102",
        "grade": 79,
        "letterGrade": "B+"
      },
      {
        "courseName": "Networking",
        "courseCode": "CST8109",
        "grade": 87,
        "letterGrade": "A"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Olivia",
    "lastName": "Brown",
    "studentNumber": "S100003",
    "email": "olivia.brown@student.college.edu",
    "phone": "613-555-1003",
    "avatar": "https://i.pravatar.cc/400?img=3",
    "courses": [
      {
        "courseName": "Python Programming",
        "courseCode": "CST8160",
        "grade": 93,
        "letterGrade": "A+"
      },
      {
        "courseName": "Database Systems",
        "courseCode": "CST2355",
        "grade": 90,
        "letterGrade": "A+"
      },
      {
        "courseName": "UI Design",
        "courseCode": "CST8288",
        "grade": 95,
        "letterGrade": "A+"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Noah",
    "lastName": "Wilson",
    "studentNumber": "S100004",
    "email": "noah.wilson@student.college.edu",
    "phone": "613-555-1004",
    "avatar": "https://i.pravatar.cc/400?img=4",
    "courses": [
      {
        "courseName": "Networking",
        "courseCode": "CST8109",
        "grade": 81,
        "letterGrade": "A-"
      },
      {
        "courseName": "Linux Administration",
        "courseCode": "CST8207",
        "grade": 86,
        "letterGrade": "A"
      },
      {
        "courseName": "Cyber Security",
        "courseCode": "CST8250",
        "grade": 89,
        "letterGrade": "A"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Sophia",
    "lastName": "Davis",
    "studentNumber": "S100005",
    "email": "sophia.davis@student.college.edu",
    "phone": "613-555-1005",
    "avatar": "https://i.pravatar.cc/400?img=5",
    "courses": [
      {
        "courseName": "React Development",
        "courseCode": "CST8921",
        "grade": 97,
        "letterGrade": "A+"
      },
      {
        "courseName": "JavaScript Programming",
        "courseCode": "CST8285",
        "grade": 94,
        "letterGrade": "A+"
      },
      {
        "courseName": "Web Development",
        "courseCode": "CST8117",
        "grade": 96,
        "letterGrade": "A+"
      }
    ]
  },
  {
    "id": 6,
    "firstName": "Ethan",
    "lastName": "Miller",
    "studentNumber": "S100006",
    "email": "ethan.miller@student.college.edu",
    "phone": "613-555-1006",
    "avatar": "https://i.pravatar.cc/400?img=6",
    "courses": [
      {
        "courseName": "Database Systems",
        "courseCode": "CST2355",
        "grade": 76,
        "letterGrade": "B"
      },
      {
        "courseName": "SQL Programming",
        "courseCode": "CST8215",
        "grade": 82,
        "letterGrade": "A-"
      },
      {
        "courseName": "Python Programming",
        "courseCode": "CST8160",
        "grade": 79,
        "letterGrade": "B+"
      }
    ]
  },
  {
    "id": 7,
    "firstName": "Ava",
    "lastName": "Moore",
    "studentNumber": "S100007",
    "email": "ava.moore@student.college.edu",
    "phone": "613-555-1007",
    "avatar": "https://i.pravatar.cc/400?img=7",
    "courses": [
      {
        "courseName": "Cloud Computing",
        "courseCode": "CST8334",
        "grade": 92,
        "letterGrade": "A+"
      },
      {
        "courseName": "DevOps",
        "courseCode": "CST8900",
        "grade": 90,
        "letterGrade": "A+"
      },
      {
        "courseName": "Docker Fundamentals",
        "courseCode": "CST8325",
        "grade": 94,
        "letterGrade": "A+"
      }
    ]
  },
  {
    "id": 8,
    "firstName": "Mason",
    "lastName": "Taylor",
    "studentNumber": "S100008",
    "email": "mason.taylor@student.college.edu",
    "phone": "613-555-1008",
    "avatar": "https://i.pravatar.cc/400?img=8",
    "courses": [
      {
        "courseName": "Java Programming",
        "courseCode": "CST8284",
        "grade": 83,
        "letterGrade": "A-"
      },
      {
        "courseName": "Object Oriented Programming",
        "courseCode": "CST8286",
        "grade": 85,
        "letterGrade": "A"
      },
      {
        "courseName": "Algorithms",
        "courseCode": "CST8130",
        "grade": 80,
        "letterGrade": "A-"
      }
    ]
  },
  {
    "id": 9,
    "firstName": "Isabella",
    "lastName": "Anderson",
    "studentNumber": "S100009",
    "email": "isabella.anderson@student.college.edu",
    "phone": "613-555-1009",
    "avatar": "https://i.pravatar.cc/400?img=9",
    "courses": [
      {
        "courseName": "UX Design",
        "courseCode": "CST8290",
        "grade": 98,
        "letterGrade": "A+"
      },
      {
        "courseName": "Web Development",
        "courseCode": "CST8117",
        "grade": 95,
        "letterGrade": "A+"
      },
      {
        "courseName": "React Development",
        "courseCode": "CST8921",
        "grade": 97,
        "letterGrade": "A+"
      }
    ]
  },
  {
    "id": 10,
    "firstName": "James",
    "lastName": "Thomas",
    "studentNumber": "S100010",
    "email": "james.thomas@student.college.edu",
    "phone": "613-555-1010",
    "avatar": "https://i.pravatar.cc/400?img=10",
    "courses": [
      {
        "courseName": "Cyber Security",
        "courseCode": "CST8250",
        "grade": 88,
        "letterGrade": "A"
      },
      {
        "courseName": "Networking",
        "courseCode": "CST8109",
        "grade": 91,
        "letterGrade": "A+"
      },
      {
        "courseName": "Linux Administration",
        "courseCode": "CST8207",
        "grade": 86,
        "letterGrade": "A"
      }
    ]
  },
  {
    "id": 11,
    "firstName": "Mia",
    "lastName": "Jackson",
    "studentNumber": "S100011",
    "email": "mia.jackson@student.college.edu",
    "phone": "613-555-1011",
    "avatar": "https://i.pravatar.cc/400?img=11",
    "courses": [
      {
        "courseName": "Python Programming",
        "courseCode": "CST8160",
        "grade": 89,
        "letterGrade": "A"
      },
      {
        "courseName": "Machine Learning",
        "courseCode": "CST8400",
        "grade": 87,
        "letterGrade": "A"
      },
      {
        "courseName": "Data Analytics",
        "courseCode": "CST8311",
        "grade": 91,
        "letterGrade": "A+"
      }
    ]
  },
  {
    "id": 12,
    "firstName": "Benjamin",
    "lastName": "White",
    "studentNumber": "S100012",
    "email": "benjamin.white@student.college.edu",
    "phone": "613-555-1012",
    "avatar": "https://i.pravatar.cc/400?img=12",
    "courses": [
      {
        "courseName": "Node.js Development",
        "courseCode": "CST8333",
        "grade": 84,
        "letterGrade": "A-"
      },
      {
        "courseName": "Express.js",
        "courseCode": "CST8335",
        "grade": 82,
        "letterGrade": "A-"
      },
      {
        "courseName": "MongoDB",
        "courseCode": "CST8336",
        "grade": 88,
        "letterGrade": "A"
      }
    ]
  },
  {
    "id": 13,
    "firstName": "Charlotte",
    "lastName": "Harris",
    "studentNumber": "S100013",
    "email": "charlotte.harris@student.college.edu",
    "phone": "613-555-1013",
    "avatar": "https://i.pravatar.cc/400?img=13",
    "courses": [
      {
        "courseName": "Vue.js",
        "courseCode": "CST8922",
        "grade": 96,
        "letterGrade": "A+"
      },
      {
        "courseName": "JavaScript Programming",
        "courseCode": "CST8285",
        "grade": 94,
        "letterGrade": "A+"
      },
      {
        "courseName": "Web Development",
        "courseCode": "CST8117",
        "grade": 95,
        "letterGrade": "A+"
      }
    ]
  },
  {
    "id": 14,
    "firstName": "Lucas",
    "lastName": "Martin",
    "studentNumber": "S100014",
    "email": "lucas.martin@student.college.edu",
    "phone": "613-555-1014",
    "avatar": "https://i.pravatar.cc/400?img=14",
    "courses": [
      {
        "courseName": "C# Programming",
        "courseCode": "CST8253",
        "grade": 78,
        "letterGrade": "B+"
      },
      {
        "courseName": ".NET Development",
        "courseCode": "CST8254",
        "grade": 81,
        "letterGrade": "A-"
      },
      {
        "courseName": "SQL Programming",
        "courseCode": "CST8215",
        "grade": 80,
        "letterGrade": "A-"
      }
    ]
  },
  {
    "id": 15,
    "firstName": "Amelia",
    "lastName": "Thompson",
    "studentNumber": "S100015",
    "email": "amelia.thompson@student.college.edu",
    "phone": "613-555-1015",
    "avatar": "https://i.pravatar.cc/400?img=15",
    "courses": [
      {
        "courseName": "Cloud Computing",
        "courseCode": "CST8334",
        "grade": 93,
        "letterGrade": "A+"
      },
      {
        "courseName": "AWS Fundamentals",
        "courseCode": "CST8337",
        "grade": 95,
        "letterGrade": "A+"
      },
      {
        "courseName": "Docker Fundamentals",
        "courseCode": "CST8325",
        "grade": 91,
        "letterGrade": "A+"
      }
    ]
  },
  {
    "id": 16,
    "firstName": "Henry",
    "lastName": "Garcia",
    "studentNumber": "S100016",
    "email": "henry.garcia@student.college.edu",
    "phone": "613-555-1016",
    "avatar": "https://i.pravatar.cc/400?img=16",
    "courses": [
      {
        "courseName": "React Development",
        "courseCode": "CST8921",
        "grade": 86,
        "letterGrade": "A"
      },
      {
        "courseName": "Node.js Development",
        "courseCode": "CST8333",
        "grade": 84,
        "letterGrade": "A-"
      },
      {
        "courseName": "MongoDB",
        "courseCode": "CST8336",
        "grade": 88,
        "letterGrade": "A"
      }
    ]
  },
  {
    "id": 17,
    "firstName": "Harper",
    "lastName": "Martinez",
    "studentNumber": "S100017",
    "email": "harper.martinez@student.college.edu",
    "phone": "613-555-1017",
    "avatar": "https://i.pravatar.cc/400?img=17",
    "courses": [
      {
        "courseName": "UI Design",
        "courseCode": "CST8288",
        "grade": 94,
        "letterGrade": "A+"
      },
      {
        "courseName": "UX Design",
        "courseCode": "CST8290",
        "grade": 96,
        "letterGrade": "A+"
      },
      {
        "courseName": "Figma",
        "courseCode": "CST8295",
        "grade": 97,
        "letterGrade": "A+"
      }
    ]
  },
  {
    "id": 18,
    "firstName": "Alexander",
    "lastName": "Clark",
    "studentNumber": "S100018",
    "email": "alexander.clark@student.college.edu",
    "phone": "613-555-1018",
    "avatar": "https://i.pravatar.cc/400?img=18",
    "courses": [
      {
        "courseName": "Operating Systems",
        "courseCode": "CST8102",
        "grade": 82,
        "letterGrade": "A-"
      },
      {
        "courseName": "Linux Administration",
        "courseCode": "CST8207",
        "grade": 85,
        "letterGrade": "A"
      },
      {
        "courseName": "Networking",
        "courseCode": "CST8109",
        "grade": 87,
        "letterGrade": "A"
      }
    ]
  },
  {
    "id": 19,
    "firstName": "Evelyn",
    "lastName": "Lewis",
    "studentNumber": "S100019",
    "email": "evelyn.lewis@student.college.edu",
    "phone": "613-555-1019",
    "avatar": "https://i.pravatar.cc/400?img=19",
    "courses": [
      {
        "courseName": "Data Analytics",
        "courseCode": "CST8311",
        "grade": 90,
        "letterGrade": "A+"
      },
      {
        "courseName": "Machine Learning",
        "courseCode": "CST8400",
        "grade": 88,
        "letterGrade": "A"
      },
      {
        "courseName": "Python Programming",
        "courseCode": "CST8160",
        "grade": 92,
        "letterGrade": "A+"
      }
    ]
  },
  {
    "id": 20,
    "firstName": "Daniel",
    "lastName": "Walker",
    "studentNumber": "S100020",
    "email": "daniel.walker@student.college.edu",
    "phone": "613-555-1020",
    "avatar": "https://i.pravatar.cc/400?img=20",
    "courses": [
      {
        "courseName": "Web Development",
        "courseCode": "CST8117",
        "grade": 85,
        "letterGrade": "A"
      },
      {
        "courseName": "React Development",
        "courseCode": "CST8921",
        "grade": 87,
        "letterGrade": "A"
      },
      {
        "courseName": "Cloud Computing",
        "courseCode": "CST8334",
        "grade": 84,
        "letterGrade": "A-"
      }
    ]
  }
];

export default studentData;