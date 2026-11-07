document.addEventListener('DOMContentLoaded', () => {
    // Create the dark mode button
    const darkModeBtn = document.createElement('button');
    darkModeBtn.classList.add('dark-mode-toggle');
    document.body.prepend(darkModeBtn);

    // Function to update the button's icon
    const updateButtonIcon = () => {
        if (document.body.classList.contains('dark-mode')) {
            darkModeBtn.innerHTML = '☀️'; // Sun icon for light mode
        } else {
            darkModeBtn.innerHTML = '🌙'; // Moon icon for dark mode
        }
    };

    // Initial icon setup
    updateButtonIcon();

    // Add event listener to toggle the dark mode class and update the icon
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        updateButtonIcon(); // Call the function to update the icon after the class has been toggled
    });
});
});