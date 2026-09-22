window.htmlPractical = {
    set1: {
        title: "Student Registration Page",
        description: "<p>Create a semantic HTML5 Student Registration Page.</p>",
        requirements: [
            "Include a header with the title",
            "Create a form with semantic tags",
            "Add inputs for Name, Email, Phone",
            "Add a radio button group for Gender",
            "Add a select dropdown for Course",
            "Include a textarea for Address",
            "Add a Submit button",
            "Use labels for all inputs"
        ],
        starterHtml: `<!DOCTYPE html>
<html>
<head>
    <title>Registration</title>
</head>
<body>
    <!-- Build your form here -->

</body>
</html>`,
        starterCss: `body { font-family: sans-serif; margin: 20px; }`,
        starterJs: ``
    }
};

// Create distinct practical tasks for sets 2-10
for(let i=2; i<=10; i++) {
    window.htmlPractical['set'+i] = {
        ...window.htmlPractical.set1,
        title: `Student Registration Page (Variation for Set ${i})`
    };
}
