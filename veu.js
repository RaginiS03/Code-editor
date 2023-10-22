// Vue instance for the Code Editor
new Vue({
    el: '#app',
    data: {
        code: '',           // Store the code input
        isLocked: false,    // Track if the editor is locked
    },
    methods: {
        copyCode() {
            // Function to copy the code to the clipboard
            this.$refs.codeInput.select();
            document.execCommand("copy");
        },
        toggleLock() {
            // Function to lock/unlock the editor
            this.isLocked = !this.isLocked;
        },
        saveCode() {
            // Placeholder for save functionality
            alert("Code saved!");
        },
    },
    template: `
        <div class="code-editor">
            <div class="code-toolbar">
                <button class="btn" @click="copyCode">Copy</button>
                <button class="btn" @click="saveCode">Save</button>
                <button class="btn" @click="toggleLock">{{ isLocked ? 'Unlock' : 'Lock' }}</button>
            </div>
            <textarea
                ref="codeInput"
                class="code-input"
                placeholder="Enter your code here..."
                v-model="code"
                :disabled="isLocked"
            ></textarea>
        </div>
    `,
});
