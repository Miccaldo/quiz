const initTitle = () => {
    return {
        async render(){
            const html = await includeHtml('/home/title/title.html');
            return html;
        },
    }
}