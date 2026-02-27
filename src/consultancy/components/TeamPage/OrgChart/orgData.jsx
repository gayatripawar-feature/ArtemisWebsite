export const orgData = {
  name: "ARTEMIS INFRATECH CONSULTANCY",
  subtitle: "Organization Structure",
  offices: [
    {
      id: "cmo",
      name: "Construction Management Office (CMO)",
      color: "#722F37",
      departments: [
        {
          head: "Senior Project Manager",
          note: "1 for 10 Projects",
          children: [
            {
              role: "Project Manager",
              note: "1 for 5 Projects",
              children: [
                { role: "Site Engineer", note: "1 For 1 Project" },
                { role: "Supervisor", note: "1 For 1 Project" },
                { role: "Storekeeper", note: "1 For 1 Project" },
                { role: "Trainee Engineer", note: "1 For 1 Project" },
              ],
            },
          ],
        },
      ],
      projects: [
        "Prathamyash Vrindavan",
        "Shubh Elara",
        "Shubh Anugraha",
        "Shukarwar Peth",
        "PYA",
      ],
    },
    {
      id: "pmo",
      name: "Project Management Office (PMO)",
      color: "#D4AF37",
      departments: [
        {
          head: "Designing Head",
          children: [
            { role: "Design Architect", children: [{ role: "Design Coordinator", children: [{ role: "Trainee Design Coordinator" }, { role: "Surveyor" }] }] },
          ],
        },
        {
          head: "Budgeting Head",
          children: [
            { role: "Senior Budgeting Engineer", children: [{ role: "Junior Budgeting Engineer", children: [{ role: "Trainee Engineer" }] }] },
          ],
        },
        {
          head: "Estimation Head",
          children: [
            { role: "Senior Estimation Engineer", children: [{ role: "Junior Estimation Engineer", children: [{ role: "Trainee Engineer" }] }] },
          ],
        },
        {
          head: "Scheduling Head",
          children: [
            { role: "Senior Scheduling Engineer", children: [{ role: "Junior Scheduling Engineer", children: [{ role: "Trainee Engineer" }] }] },
          ],
        },
        {
          head: "Contracting & Billing Head",
          children: [
            { role: "Senior Contracts Engineer", children: [{ role: "Junior Contracts Engineer", children: [{ role: "Trainee Engineer" }] }] },
          ],
        },
        {
          head: "Procurement Head",
          children: [
            { role: "Senior Purchase Engineer", note: "1 For 5 Projects", children: [{ role: "Junior Purchase Engineer", note: "1 For 1 Project", children: [{ role: "Trainee Engineer" }] }] },
          ],
        },
        {
          head: "Safety & Quality Head",
          children: [
            { role: "Senior Safety & Quality Engineer", children: [{ role: "Junior Safety & Quality Engineer", children: [{ role: "Trainee Engineer" }] }] },
          ],
        },
      ],
    },
    {
      id: "bdo",
      name: "Business Development Office (BDO) / Managing Director Office (MDO)",
      color: "#36454F",
      departments: [
        {
          head: "Chief Operating Officer",
          children: [
            { role: "Senior Operating Officer", children: [{ role: "Junior Operating Officer", children: [{ role: "Executive Assistant" }] }] },
          ],
        },
        {
          head: "Chief Finance Officer",
          children: [
            { role: "Senior Finance/Account Officer", children: [{ role: "Junior Finance/Account Officer", children: [{ role: "Finance/Account Trainee" }] }] },
          ],
        },
        {
          head: "Chief Laisoning  Officer",
          children: [
            { role: "Senior Laisoning  Officer", children: [{ role: "Junior Laisoning  Officer", children: [{ role: "Laisoning  Trainee" }] }] },
          ],
        },
        {
          head: "Chief Legal Officer",
          children: [
            { role: "Senior Legal Officer", children: [{ role: "Junior Legal Officer", children: [{ role: "Legal Trainee" }] }] },
          ],
        },
        {
          head: "HR Head",
          children: [
            { role: "HR Admin", children: [{ role: "HR Hiring", children: [{ role: "HR Trainee" }] }] },
          ],
        },
        {
          head: "MIS Head",
          children: [
            { role: "Senior MIS Head", note: "1 For 5 Projects", children: [{ role: "Junior MIS Head", note: "1 For 1 Project", children: [{ role: "Trainee MIS" }] }] },
          ],
        },
      ],
    },
  ],
};
