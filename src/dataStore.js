const DataStore = {
    experiences: [
        {
            type: "Job",
            title: "Software Engineer",
            company: "Software AG",
            url: "https://www.softwareag.com/en_corporate.html",
            place: "Bangalore",
            dates: "Aug 2018 - Present",
            description: [
                "Building the next gen middleware cloud applications",
                "Working on different platforms and frameworks like React, Angular, Node, JavaScript, Java, Docker, Kubernetes",
                "Co-ordinating with multiple teams of engineers and designers",
                "Writing efficient, readable, reusable, robust, modularized code",
                "Used testing libraries like Jest, Protractor, React testing library"
            ]
        },
        {
            type: "Job",
            title: "Research Assistant",
            company: "KLE Technological University",
            url: "https://www.kletech.ac.in/",
            place: "Hubli",
            dates: "Aug 2017 - Apr 2018",
            description: [
                "Built an end-to-end pipeline for 3D reconstruction of statues with images",
                "Capture images of stautes with a drone and refine them",
                "Worked on Image processing, Computer vision, Machine learning",
                "Programming languages and Tools used : Python, C++, Matlab, VisualSFM, OpenMVG, OpenMVS",
            ]
        },
        {
            type: "Internship",
            title: "Software Engineering Intern",
            company: "Walmart Labs",
            url: "https://corporate.walmart.com/",
            place: "Bangalore",
            dates: "Feb 2017 - Jul 2017",
            description: [
                "Worked with the global business solutions team of Walmart",
                "Worked on SAP UI5, SAP ABAP, SAP Fiori to develop web applications"
            ]
        }
    ],
    ILove: [
        "building websites", "technology", "being an engineer", "sketching", "cars", "dogs", 
    ],
    themes: [
        {
            "id": 1,
            "name": "NeonGreen",
            "primaryAccentColor" : "#56ffcc",
            "secondaryAccentColor" : "#e0e5f5",
            "secondaryAccentColor2" : "#ccd6f6",
            "backgroundGradient1" : "#00002d",
            "backgroundGradient2" : "#141e61"
        },
        {
            "id": 2,
            "name": "MaroonYellow",
            "primaryAccentColor" : "#fff8adf8",
            "secondaryAccentColor" : "#f3c3c3",
            "secondaryAccentColor2" : "#EFB7B7",
            "backgroundGradient1" : "#000000",
            "backgroundGradient2" : "#470033"
        },
        {
            "id": 3,
            "name": "DarkPurple",
            "primaryAccentColor" : "#fffbfd",
            "secondaryAccentColor" : "#ffb8f6",
            "secondaryAccentColor2" : "#ff81de",
            "backgroundGradient1" : "#000000",
            "backgroundGradient2" : "#52057B"
        }
    ]
}
export default DataStore;