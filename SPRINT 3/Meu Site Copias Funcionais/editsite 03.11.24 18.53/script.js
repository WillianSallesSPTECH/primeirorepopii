document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
    });

    const buttons = document.querySelectorAll(".sidebar button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".main-content > div").forEach(section => section.classList.add("hidden"));
            const target = button.id.replace("-btn", "-section");
            document.getElementById(target).classList.remove("hidden");
        });
    });

    // Funções do cronômetro
    let timer, seconds = 0;
    const display = document.getElementById("timer-display");

    function updateTimer() {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        display.textContent = `${hours}:${minutes}:${secs}`;
    }

    document.getElementById("start-timer").addEventListener("click", () => {
        clearInterval(timer);
        timer = setInterval(() => { seconds++; updateTimer(); }, 1000);
    });

    document.getElementById("stop-timer").addEventListener("click", () => clearInterval(timer));
    document.getElementById("reset-timer").addEventListener("click", () => { clearInterval(timer); seconds = 0; updateTimer(); });

    // Adiciona notas gerais
    const noteInput = document.getElementById("note-input");
    document.getElementById("add-note").addEventListener("click", () => {
        if (noteInput.value) {
            const li = document.createElement("li");
            li.textContent = noteInput.value;
            document.getElementById("note-list").appendChild(li);
            noteInput.value = "";
        }
    });

    // Adiciona sites favoritos
    const favoriteInput = document.getElementById("favorite-input");
    document.getElementById("add-favorite").addEventListener("click", () => {
        if (favoriteInput.value) {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${favoriteInput.value}" target="_blank">${favoriteInput.value}</a>`;
            document.getElementById("favorites-list").appendChild(li);
            favoriteInput.value = "";
        }
    });

    // Histórico de sites
    const historyList = document.getElementById("history-list");
    const examLinks = document.querySelectorAll("#exams-list a");

    examLinks.forEach(link => {
        link.addEventListener("click", () => {
            const historyItem = document.createElement("li");
            historyItem.innerHTML = `<a href="${link.href}" target="_blank">${link.textContent}</a>`;
            historyList.prepend(historyItem);
        });
    });

    // Exporta para Excel (exemplo simples)
    document.getElementById("export-btn").addEventListener("click", () => {
        const csv = [["Title", "Description"], ["Calendário", "Descrição exemplo"]];
        const csvContent = csv.map(row => row.join(",")).join("\n");
        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "calendario.csv";
        a.click();
        URL.revokeObjectURL(url);
    });

    // Função de calendário
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    function generateCalendar(month, year) {
        const daysContainer = document.getElementById("days-container");
        daysContainer.innerHTML = "";

        const firstDay = new Date(year, month).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Preenche o calendário com dias vazios até o primeiro dia do mês
        for (let i = 0; i < firstDay; i++) {
            daysContainer.appendChild(document.createElement("div"));
        }

        // Cria os dias do mês
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement("div");
            dayElement.textContent = day;
            dayElement.classList.add("calendar-day");
            dayElement.addEventListener("click", () => {
                const selectedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                addNoteForDate(selectedDate);
            });
            daysContainer.appendChild(dayElement);
        }

        document.getElementById("month-year").textContent = `${year}-${month + 1}`;
    }

    function addNoteForDate(date) {
        const note = prompt(`Adicionar uma nota para ${date}:`);
        if (note) {
            const noteContainer = document.getElementById("notes-container");
            const noteItem = document.createElement("div");
            noteItem.classList.add("note-item");
            noteItem.innerHTML = `<strong>${date}:</strong> ${note} `;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";
            deleteButton.addEventListener("click", () => {
                noteContainer.removeChild(noteItem);
            });
            noteItem.appendChild(deleteButton);
            noteContainer.appendChild(noteItem);
        }
    }

    document.getElementById("prev-month").addEventListener("click", () => {
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
        generateCalendar(currentMonth, currentYear);
    });

    document.getElementById("next-month").addEventListener("click", () => {
        currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
        currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
        generateCalendar(currentMonth, currentYear);
    });

    // Gera o calendário do mês atual ao carregar a página
    generateCalendar(currentMonth, currentYear);
});