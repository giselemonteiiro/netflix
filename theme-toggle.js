// Theme Toggle - Dark Mode / Light Mode

// Detectar preferência do sistema
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Definir tema padrão ao carregar
function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = prefersDarkScheme.matches ? "dark" : "light";
    const theme = savedTheme || systemTheme;
    
    document.documentElement.setAttribute("data-theme", theme);
    updateToggleButton(theme);
}

// Alternar entre temas
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateToggleButton(newTheme);
}

// Atualizar aparência do botão
function updateToggleButton(theme) {
    const button = document.getElementById("theme-toggle");
    if (button) {
        button.textContent = theme === "dark" ? "☀️" : "🌙";
        button.setAttribute("aria-label", `Ativar ${theme === "dark" ? "light" : "dark"} mode`);
    }
}

// Inicializar ao carregar a página
document.addEventListener("DOMContentLoaded", initTheme);

// Escutar mudanças de preferência do sistema
prefersDarkScheme.addListener((e) => {
    const newTheme = e.matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateToggleButton(newTheme);
});
