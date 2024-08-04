const includeHtml = async(filepath) => {
    try {
        const htmlFile = await fetch(filepath);
        if(!htmlFile.ok){
            throw new Error('Error with including file ', filepath);
        }
        return htmlFile.text();
    }catch(e){
        console.error('Error fetching file:', e)
    }
}