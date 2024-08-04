document.addEventListener('alpine:init', () => {
    Alpine.store('theme', {
        mode: 'dark',
        toggle() {
            if(this.mode === 'light') this.mode = 'dark';
            else if(this.mode === 'dark') this.mode = 'light';
        }
    })
})