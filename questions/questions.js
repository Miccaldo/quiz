const questions = [
    {   
        type: "HTML",
        link: 'html/html.html'
    },
    {   
        type: "JS",
        link: 'js/js.html'
    },
    {   
        type: "CSS",
        link: 'css/css.html'
    },
    {   
        type: "Accessibility",
        link: 'accessibility/accessibility.html'
    }
]

const initQuestions = () => {
    return {
        questions,
        opened: false
    }
}