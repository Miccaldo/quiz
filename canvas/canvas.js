const initCanvas = () => {
    return {
        async render(){
            const html = await includeHtml('/canvas/canvas.html');
            return html;
        }
    }
}