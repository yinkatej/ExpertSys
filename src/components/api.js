
const api = [
    {
        id: 1,
        body: {
            question: "What are you currently studying?",
            options: ['Computer Science with Economics', 'Computer Science with Mathematics', 'Computer Engineering']
        }
    },
    {
        id: 2,
        body: {
            question: "What is your Meyes-Briggs personality test result?",
            options: ['INTJ', 'INFP', 'ENFP']
        }
    },
    {
         id: 3,
        body: {
            question: "Do you think a collective show of happiness by teammates when a goal is scored e.g in football is an expression fo social acceptance or mere expression of ecstaxy",
            options: ['Yes', 'No', 'Maybe']
        }
    },
     {
         id: 4,
        body: {
            question: "Do you have any long time friend (for minimum of 5 years)?",
            options: ['Yes', 'No']
        }
    },
    {
         id: 5,
        body: {
            question: "Can you give a hug as a symbol of social acceptance across gender variants?",
            options: ['Yes', 'No', 'Maybe']
        }
    },
     {
         id: 6,
        body: {
            question: "Would you like to profread records or forms?",
            options: ['Yes', 'No', 'Maybe']
        }
    },
     {
         id: 7,
        body: {
            question: "Would you like to develop a spreadsheet using a computer software?",
            options: ['Yes', 'No', 'Maybe']
        }
    },
     {
         id: 9,
        body: {
            question: "Do you enjoy installing software across computers on a large network?",
            options: ['Yes', 'No', 'Maybe']
        }
    },
     {
         id: 11,
        body: {
            question: "Would you like to manage a department within a large company?",
            options: ['Yes', 'No', 'Maybe']
        }
    },
    
    {
        id: 10,
        body: {
            question: "",
            options: [
                {
                    id: 'ai',
                    career: 'Artificial Intelligence/Machine Learning Engineer',
                    confidence: 90,
                    reason: 'Combination of CS and Math skills, plus %**% personality trait of strategic thinking'
                },
                {
                    id: 'ds',
                    career: 'Data Scientist',
                    confidence: 85,
                    reason: 'Strong analytical skills from Math Background and ability to work independently as an %**%'
                },
                {
                    id: 'be',
                    career: 'Software Developer (Backend Engineer)',
                    confidence: 80,
                    reason: 'Solid foundation in CS and ability to analyse complex systems'
                }
            ]
        }
    }
];

export const fetchApi = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return [...api];
}
