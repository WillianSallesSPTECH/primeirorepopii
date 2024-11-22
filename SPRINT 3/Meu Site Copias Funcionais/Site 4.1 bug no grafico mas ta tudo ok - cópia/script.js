document.addEventListener("DOMContentLoaded", function () {
    console.log("Document loaded");

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

    let results = [];
    let timer, seconds = 0;
    const display = document.getElementById("timer-display");
    const savedResults = document.getElementById("saved-results");

    function updateTimer() {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        display.textContent = `${hours}:${minutes}:${secs}`;
        console.log(`Cronômetro: ${display.textContent}`);
    }

    document.getElementById("start-timer").addEventListener("click", () => {
        clearInterval(timer);
        timer = setInterval(() => { seconds++; updateTimer(); }, 1000);
        console.log("Cronômetro iniciado");
    });

    document.getElementById("stop-timer").addEventListener("click", () => {
        clearInterval(timer);
        console.log("Cronômetro parado");
    });

    document.getElementById("reset-timer").addEventListener("click", () => {
        clearInterval(timer);
        seconds = 0;
        updateTimer();
        console.log("Cronômetro resetado");
    });

    document.getElementById("save-timer").addEventListener("click", () => {
        const timeRecord = display.textContent;
        console.log(`Tempo salvo: ${timeRecord}`);

        const [hours, minutes, secs] = timeRecord.split(':').map(Number);
        const totalSeconds = (hours || 0) * 3600 + (minutes || 0) * 60 + (secs || 0);

        if (totalSeconds > 0) {
            results.push(totalSeconds);
            console.log("Resultados após salvar:", results);

            const li = document.createElement("li");
            li.textContent = timeRecord;
            savedResults.appendChild(li);

            updateChart();
        } else {
            console.error("Tempo inválido:", timeRecord);
        }
    });

    function updateChart() {
        const ctx = document.getElementById('study-stats-chart').getContext('2d');
        console.log(results)
        const chartData = results.map((time, index) => ({ x: (index + 1), y: time }));

        if (window.studyChart) {
            window.studyChart.data.datasets[0].data = chartData;
            window.studyChart.update();
            console.log("Gráfico atualizado com novos dados.");
        } else {
            window.studyChart = new Chart(ctx, {
                type: 'line',
                data: {
                    datasets: [{
                        label: 'Desempenho no Cronômetro (s)',
                        data: chartData,
                        borderColor: 'rgba(255, 0, 128, 1)',
                        backgroundColor: 'rgba(0, 255, 255, 0.2)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: 'rgba(255, 0, 128, 1)',
                        pointBorderColor: 'rgba(255, 255, 255, 1)',
                        pointRadius: 5,
                        pointHoverRadius: 7
                    }]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Tentativas'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Tempo (segundos)'
                            },
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white',
                            }
                        },
                        tooltip: {
                            callbacks: {
                                datasets: function (tooltipItem) {
                                    const totalSeconds = tooltipItem.raw;
                                    const minutes = Math.floor(totalSeconds / 60);
                                    const seconds = totalSeconds % 60;
                                    return [`Tempo: ${totalSeconds}s (${minutes}m ${seconds}s)`];
                                },
                                label: function () {

                                }
                            }
                        }
                    }
                }
            });
            console.log("Novo gráfico criado.");
        }
    }

    const noteInput = document.getElementById("note-input");
    const notedDates = new Set(); // Armazena as datas anotadas

    document.getElementById("add-note").addEventListener("click", () => {
        const date = document.querySelector(".selected-date"); // Obtém a data selecionada
        if (noteInput.value && date) {
            const selectedDate = date.textContent; // Pega o texto da data selecionada
            notedDates.add(selectedDate); // Adiciona a data ao conjunto

            date.classList.add("neon"); // Adiciona a classe neon à data

            const li = document.createElement("li");
            li.textContent = noteInput.value;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";
            deleteButton.addEventListener("click", () => {
                // Remove a nota do DOM
                noteItem.remove();

                // Remove a data do conjunto e atualiza o calendário
                notedDates.delete(selectedDate);
                highlightAllNotedDates(); // Atualiza as marcações no calendário
                console.log("Nota excluída:", noteInput.value);
            });
            const noteItem = document.createElement("div");
            noteItem.appendChild(document.createTextNode(noteInput.value));
            noteItem.appendChild(deleteButton);
            document.getElementById("note-list").appendChild(noteItem);
            noteInput.value = "";
            console.log("Nota adicionada:", noteInput.value);
            highlightAllNotedDates(); // Destaca todas as datas anotadas
        }
    });

    const favoriteInput = document.getElementById("favorite-input");
    document.getElementById("add-favorite").addEventListener("click", () => {
        if (favoriteInput.value) {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${favoriteInput.value}" target="_blank">${favoriteInput.value}</a>`;
            document.getElementById("favorites-list").appendChild(li);
            favoriteInput.value = "";
            console.log("Site favorito adicionado:", li.innerHTML);
        }
    });

    const historyList = document.getElementById("history-list");
    const examLinks = document.querySelectorAll("#exams-list a");

    examLinks.forEach(link => {
        link.addEventListener("click", () => {
            const historyItem = document.createElement("li");
            historyItem.innerHTML = `<a href="${link.href}" target="_blank">${link.textContent}</a>`;
            historyList.prepend(historyItem);
            console.log("Site adicionado ao histórico:", link.textContent);
        });
    });

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
        console.log("Exportação para CSV realizada");
    });

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    function generateCalendar(month, year) {
        const daysContainer = document.getElementById("days-container");
        daysContainer.innerHTML = "";

        const firstDay = new Date(year, month).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            daysContainer.appendChild(document.createElement("div"));
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement("div");
            dayElement.textContent = day;
            dayElement.classList.add("calendar-day");
            dayElement.addEventListener("click", () => {
                const selectedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                addNoteForDate(selectedDate);
                highlightDate(dayElement); // Chama a função para destacar a data
            });
            daysContainer.appendChild(dayElement);
        }

        document.getElementById("month-year").textContent = `${year}-${month + 1}`;
        highlightAllNotedDates(); // Destaca todas as datas anotadas ao gerar o calendário
        console.log(`Calendário gerado para: ${year}-${month + 1}`);
    }

    function highlightDate(dayElement) {
        dayElement.classList.add("neon");
    }

    function highlightAllNotedDates() {
        const allDays = document.querySelectorAll(".calendar-day");
        allDays.forEach(day => {
            const dayNumber = day.textContent;
            const monthString = String(currentMonth + 1).padStart(2, '0'); // Mês atual em formato correto
            const yearString = currentYear.toString(); // Ano atual
            const fullDate = `${yearString}-${monthString}-${dayNumber}`;

            if (notedDates.has(fullDate)) {
                day.classList.add("neon"); // Adiciona a classe neon se a data estiver anotada
            } else {
                day.classList.remove("neon"); // Remove a classe se não estiver anotada
            }
        });
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
                notedDates.delete(date); // Remove a data do conjunto
                highlightAllNotedDates(); // Atualiza as marcações no calendário
                console.log("Nota excluída:", note);
            });
            noteItem.appendChild(deleteButton);
            noteContainer.appendChild(noteItem);
            notedDates.add(date); // Adiciona a data ao conjunto
            highlightAllNotedDates(); // Destaca todas as datas anotadas
            console.log("Nota adicionada para a data:", date);
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

    // Gera o calendário inicial
    generateCalendar(currentMonth, currentYear);
});

// Seleciona o botão "Home" e o conteúdo da página inicial
const homeButton = document.getElementById("homeButton");
const homeContent = document.getElementById("homeContent");

// Adiciona um evento de clique ao botão "Home"
homeButton.addEventListener("click", () => {
  // Altera o estilo do conteúdo para exibi-lo
  homeContent.style.display = "block";
});
