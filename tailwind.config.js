tailwind.config = {
    content: ['/questions/questions.html'],
    theme: {
        extend: {
          colors: {
            gray: {
                750: 'rgb(83 94 109)',
                350: 'rgb(169 176 189)'
            },
          },
          width: {
            'fit': 'fit-content'
          }
        }
    }  
}