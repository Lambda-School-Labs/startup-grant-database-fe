export const tableValues = {
  title: "Manage and observe users",
  columns: [
    {
      title: "User Suggestions",
      cellStyle: {
        minWidth: "75px"
      }
    },
    // {
    //   title: "Moderator",
    //   field: "moderator",
    //   lookup: {
    //     true: "True",
    //     false: "False"
    //   }
    // },
    {
      title: "First Name",
      field: "first_name"
    },
    {
      title: "Last Name",
      field: "last_name",
      cellStyle: {
        minWidth: "200px"
      }
    },
    {
      title: "Job Title",
      field: "amount_notes",
      cellStyle: {
        minWidth: "300px"
      }
    },
    {
      title: "Project Name",
      field: "company"
    },
    {
      title: "Project Website",
      field: "company_url"
    },
    {
      title: "What are they working on?",
      field: "about",
      cellStyle: {
        minWidth: "400px"
      }
      // editComponent: editComponentFunc
    },
    { title: "Website", field: "website" }
  ]
};
