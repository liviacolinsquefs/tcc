 // Referências aos elementos do DOM
        const form = document.getElementById('formLocalizacao');
        const feedback = document.getElementById('feedbackMessage');
        const tipoCadastroInputs = document.querySelectorAll('input[name="tipo_cadastro"]');
        const inputPredioGroup = document.getElementById('input-predio-group');
        const inputAndarGroup = document.getElementById('input-andar-group');
        const inputSalaGroup = document.getElementById('input-sala-group');
        const submitButton = form.querySelector('button[type="submit"]');

        /**
         * Mostra apenas os campos de input relevantes com base no tipo de cadastro selecionado.
         */
        function toggleFields() {
            const selectedType = document.querySelector('input[name="tipo_cadastro"]:checked').value;
            
            // Oculta todos os grupos de input e remove o 'required'
            [inputPredioGroup, inputAndarGroup, inputSalaGroup].forEach(group => {
                group.classList.add('hidden');
                // Remove required de todos os inputs para evitar que campos ocultos bloqueiem a submissão
                const input = group.querySelector('input');
                if (input) input.removeAttribute('required');
            });

            // Mostra o grupo selecionado e adiciona o 'required'
            let currentGroup;
            let buttonText = "Cadastrar";

            if (selectedType === 'predio') {
                currentGroup = inputPredioGroup;
                buttonText = "Cadastrar Prédio";
            } else if (selectedType === 'andar') {
                currentGroup = inputAndarGroup;
                buttonText = "Cadastrar Andar";
            } else if (selectedType === 'sala') {
                currentGroup = inputSalaGroup;
                buttonText = "Cadastrar Sala";
            }

            if (currentGroup) {
                currentGroup.classList.remove('hidden');
                // Adiciona required apenas ao input ativo
                const input = currentGroup.querySelector('input');
                if (input) input.setAttribute('required', 'required');
            }
            
            submitButton.textContent = buttonText;
            feedback.style.display = 'none'; // Limpa o feedback ao trocar o tipo
        }

        // Inicializa a visibilidade dos campos na primeira carga
        window.onload = toggleFields;

        // Adiciona listeners para os botões de rádio para alternar os campos
        tipoCadastroInputs.forEach(input => {
            input.addEventListener('change', toggleFields);
        });

        /**
         * Lida com o cadastro da localização.
         * Envia apenas o dado do campo selecionado.
         */
        function handleCadastro(event) {
            event.preventDefault();

            feedback.style.display = 'none';
            
            const selectedType = document.querySelector('input[name="tipo_cadastro"]:checked').value;
            let valorCadastrado = '';

            // Determina o valor a ser cadastrado com base no tipo selecionado
            if (selectedType === 'predio') {
                valorCadastrado = document.getElementById('predio').value.trim();
            } else if (selectedType === 'andar') {
                // Para o andar, o ID é 'andar', mas o atributo name é 'andar_input'
                valorCadastrado = document.getElementById('andar').value.trim();
            } else if (selectedType === 'sala') {
                 // Para a sala, o ID é 'sala', mas o atributo name é 'sala_input'
                valorCadastrado = document.getElementById('sala').value.trim();
            }

            // Validação de preenchimento
            if (!valorCadastrado) {
                exibirFeedback(`Por favor, preencha o campo de cadastro de ${selectedType}.`, 'error');
                return;
            }

            // --- Simulação de Envio de Dados (Backend) ---
            console.log(`--- Novo Cadastro de ${selectedType.toUpperCase()} ---`);
            console.log(`${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} Cadastrado: ${valorCadastrado}`);
            console.log("-----------------------------------");
            
            // Simula um delay de rede
            setTimeout(() => {
                // Exibe mensagem de sucesso
                const tipoDisplay = selectedType.charAt(0).toUpperCase() + selectedType.slice(1);
                exibirFeedback(`${tipoDisplay} "${valorCadastrado}" cadastrado(a) com sucesso!`, 'success');
                
                // Limpa o campo ativo
                if (selectedType === 'predio') {
                    document.getElementById('predio').value = '';
                } else if (selectedType === 'andar') {
                    document.getElementById('andar').value = '';
                } else if (selectedType === 'sala') {
                    document.getElementById('sala').value = '';
                }
            }, 500); 
        }

        /**
         * Exibe uma mensagem de feedback na tela.
         * @param {string} message - A mensagem a ser exibida.
         * @param {('success'|'error')} type - O tipo de feedback.
         */
        function exibirFeedback(message, type) {
            feedback.textContent = message;
            feedback.style.display = 'block';

            // Remove classes existentes e adiciona a nova
            feedback.classList.remove('success', 'error');
            feedback.classList.add(type);
        }

        // Adiciona o listener de evento à submissão do formulário
        form.addEventListener('submit', handleCadastro);
        // Pega o botão "Limpar"

