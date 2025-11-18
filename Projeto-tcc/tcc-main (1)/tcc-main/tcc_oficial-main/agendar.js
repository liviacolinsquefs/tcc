// ===== SELETORES PRINCIPAIS =====
const blocoSelect = document.getElementById("select-block");
const andarSelect = document.getElementById("select-floor");
const salaSelect = document.getElementById("select-room");
const placeholder = document.getElementById("placeholder");

const plantGround = document.getElementById("plant-ground");
const plantFirst = document.getElementById("plant-first");

// ===== POP-UP DO CALENDÁRIO =====
const modal = document.getElementById("modal-calendar");
const calendarInput = document.getElementById("calendar-input");
const dateDisplay = document.getElementById("date-display");
const okBtn = document.getElementById("modal-ok");
const cancelBtn = document.getElementById("modal-cancel");

// ===== RODAPÉ =====
const yearSpan = document.getElementById("year");
const footerText = document.getElementById("footer-text");
const footerInput = document.getElementById("footer-input");
const footerApply = document.getElementById("footer-apply");

// ===== SALAS DISPONÍVEIS =====
const salas = {
  A: {
    ground: [
      "Lab. Avaliação Q. Alimentos",
      "Sala de Aula 1",
      "Lab. Microbiologia e Controle Qualidade",
      "Lab. Bromatologia",
      "Cozinha Experimental",
      "Lab. Informática",
      "Sala de Aula 2",
      "Sala de Aula 3",
      "Sala de Aula 4",
      "Auditório"
    ],
    first: [
      "Lab. Instrumentação II",
      "Sanit. Fem.",
      "Sanit. Masc.",
      "Lab. Controle de Processos",
      "Compressor",
      "Manutenção",
      "CCM",
      "Lab. UPLAB",
      "Planta de Leite e Derivados",
      "Lab. IOT",
      "Sala de Apoio",
      "Sala NR1"
    ]
  },
  C: {
    first: [
      "Lab. Redes",
      "Lab. Sist. Eletrônicos",
      "Sala Especialistas",
      "Sanit. Masc.",
      "Sanit. Fem.",
      "Sala de Apoio",
      "Laboratório de Informática 1",
      "Laboratório de Informática 2",
      "Laboratório de Informática 3",
      "Laboratório de Informática 4",
      "Laboratório de Instrumentação I",
      "MDI"
    ],
    ground: [
      "Lab. Instrumentação II",
      "Sanit. Fem.",
      "Sanit. Masc.",
      "Lab. Controle de Processos",
      "Compressor",
      "Manutenção",
      "CCM",
      "Lab. UPLAB",
      "Planta de Leite e Derivados",
      "Lab. IOT",
      "Sala de Apoio",
      "Sala NR1"
    ]
  }
};

// ===== FUNÇÃO: ATUALIZAR ANDARES =====
blocoSelect.addEventListener("change", () => {
  const bloco = blocoSelect.value;

  if (bloco) {
    andarSelect.disabled = false;
    andarSelect.value = "";
    salaSelect.innerHTML = '<option value="">Selecione a sala</option>';
    salaSelect.disabled = true;

    placeholder.hidden = false;
    plantGround.hidden = true;
    plantFirst.hidden = true;
  } else {
    andarSelect.disabled = true;
    salaSelect.disabled = true;
    placeholder.textContent = "Selecione um bloco e um andar para visualizar o mapa.";
  }
});

// ===== FUNÇÃO: ATUALIZAR SALAS =====
andarSelect.addEventListener("change", () => {
  const bloco = blocoSelect.value;
  const andar = andarSelect.value;

  salaSelect.innerHTML = '<option value="">Selecione a sala</option>';

  if (bloco && andar && salas[bloco]?.[andar]) {
    salas[bloco][andar].forEach((sala) => {
      const option = document.createElement("option");
      option.value = sala;
      option.textContent = sala;
      salaSelect.appendChild(option);
    });
    salaSelect.disabled = false;

    
  } 
});


// ===== POP-UP DO CALENDÁRIO ==


// Botão OK — insere a data e fecha
okBtn.addEventListener("click", () => {
  const selectedDate = calendarInput.value;
  if (selectedDate) {
    const dataFormatada = new Date(selectedDate).toLocaleDateString("pt-BR");
    dateDisplay.value = dataFormatada;
  }
  modal.setAttribute("aria-hidden", "true");
});

// Botão Cancelar — fecha sem alterar
cancelBtn.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "true");
});

// Fecha o modal clicando fora
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.setAttribute("aria-hidden", "true");
  }
});

document.getElementById('time-display').addEventListener('input', function(e) {
  let value = e.target.value;

  // Remove tudo o que não for número
  value = value.replace(/\D/g, '');

  // Adiciona os dois pontos automaticamente após os dois primeiros números
  if (value.length > 2) {
    value = value.substring(0, 2) + ':' + value.substring(2, 4);
  }

  // Limita o valor a 5 caracteres: HH:MM
  if (value.length > 5) {
    value = value.substring(0, 5);
  }

  // Atualiza o campo com o valor formatado
  e.target.value = value;
});
const feedback = document.getElementById('feedbackMessage');

function showSuccess(message) {
    feedback.className = 'success';
    feedback.textContent = message;
    feedback.style.display = 'block';
}

function showError(message) {
    feedback.className = 'error';
    feedback.textContent = message;
    feedback.style.display = 'block';
}

// Exemplo de uso
document.getElementById('form-agendamento').addEventListener('submit', function(e) {
    e.preventDefault();
    // aqui você coloca sua lógica de agendamento
    showSuccess("Agendamento realizado com sucesso!");
    // ou showError("Erro ao agendar!");
});
const btnClear = document.getElementById('btn-clear');
const form = document.getElementById('form-agendamento');

// Evento de clique
btnClear.addEventListener('click', () => {
    form.reset(); // reseta todos os campos do formulário
    const feedback = document.getElementById('feedbackMessage');
    feedback.style.display = 'none'; // esconde a mensagem de feedback
});
