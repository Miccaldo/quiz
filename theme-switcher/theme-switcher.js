const initThemeSwitcher = () => {
    return {
        switched: true,
        async render(){
            const html = await includeHtml('/theme-switcher/theme-switcher.html');
            return html;
        },
        toggle(){
            this.$store.theme.toggle();
            this.switched = !this.switched
        }
    }
}