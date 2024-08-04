const initThemeBg = () => {
    return {
        async render(){
            const html = await includeHtml('/theme-bg/theme-bg.html');
            return html;
        }
    }
}