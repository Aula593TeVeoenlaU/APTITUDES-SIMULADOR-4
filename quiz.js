// ==========================
// SIMULADOR DE INGRESO
// ==========================

// Preguntas
const questions = [
    // === RAZONAMIENTO MATEMÁTICO ===
    { id: 1, block: 'RAZONAMIENTO MATEMÁTICO', text: 'En la siguiente figura,  PQ es paralela a  ST  y   PR  =  QR . Si el ángulo S es de 66°, entonces  x  mide:', image: 'imagenes/PREGUNTA_1_RM.png', imageStyle: 'max-width: 400px;', options: ['a) 48°', 'b) 24°', 'c) 66°', 'd) 42°'], answer: 'a' },
    { id: 2, block: 'RAZONAMIENTO MATEMÁTICO', text: 'En una reunión, 86 personas tomaron agua mineral, 54 tomaron gaseosa, 32 ambas bebidas y 17 no tomaron ni agua mineral ni gaseosa. ¿Cuántas personas asistieron a la reunión?', options: ['a) 108', 'b) 150', 'c) 200', 'd) 125'], answer: 'd' },
    { id: 3, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Sebastián y Raquel son coleccionistas de automóviles. Sus autos son de fabricación alemana o japonesa. La proporción de autos alemanes y japoneses en la colección de Sebastián es de 5:2 a favor de los alemanes. La proporción de alemán a japonés en la colección de Raquel es de 4:3 a favor de los alemanes. La cantidad de autos japoneses que posee Sebastián es idéntica a la cantidad de autos japoneses que posee Raquel. ¿Cuál es la relación entre la cantidad total de automóviles (alemanes y japoneses) que tiene Sebastián y la cantidad total de automóviles que tiene Raquel?', options: ['a) 9:7', 'b) 3:2', 'c) 1:1', 'd) 15:8'], answer: 'b' },
    { id: 4, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Se ha repartido una suma de dinero entre tres personas. La segunda recibió Y dólares más que la primera y la tercera Z dólares más que la segunda. Siendo X la parte de la primera, ¿cuánto es la suma repartida?', options: ['a) X+2Y+3Z', 'b) X+3Y+2Z', 'c) 2X+3Y+Z', 'd) 3X+2Y+Z'], answer: 'd' },
    { id: 5, block: 'RAZONAMIENTO MATEMÁTICO', text: 'En una clase 20 niños comparten equitativamente el pago del sueldo de sus profesores, cuando 4 de los niños deciden no seguir contribuyendo, cada uno de los otros niños tiene que pagar $1,50 adicionales, ¿cuál es el valor del sueldo de los profesores?', options: ['a) 150', 'b) 80', 'c) 120', 'd) 100'], answer: 'c' },
    { id: 6, block: 'RAZONAMIENTO MATEMÁTICO', text: 'El gráfico muestra la función g, donde g(x) = k(x+3)(x-3) para alguna constante k. Si g(a-1,2) = 0 y a > 0. ¿Cuál es el valor de a?', image: 'imagenes/PREGUNTA_6_RM.png', imageStyle: 'max-width: 400px;', options: ['a) 1,2', 'b) 2,2', 'c) 3', 'd) 4,2'], answer: 'd' },
    { id: 7, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Hay cinco cajas, cada una contiene los mismos 10 bombones de sabores distintos. Se saca un bombón de cada caja: ¿la probabilidad de que al menos dos chocolates sean idénticos es?', options: ['a) 0,8125', 'b) 0,6976', 'c) 0,3024', 'd) 0,4235'], answer: 'b' },
    { id: 8, block: 'RAZONAMIENTO MATEMÁTICO', text: 'En una escuela todos los estudiantes reciben una de las cuatro calificaciones: A,B, C y D. Si 1/4 obtienen A, 1/2 obtienen B, 1/5 obtienen C y 20 alumnos reciben D.¿Cuántos estudiantes hay en total en la escuela?', options: ['a) 400 ', 'b) 30', 'c) 60', 'd) 100'], answer: 'a' },
    
    // === APTITUD ESPACIAL ===
    { id: 9, block: 'APTITUD ESPACIAL', text: '¿Qué opción, de las cuatro dadas, debe ir en lugar de la ficha de dominó que contiene los signos de interrogación?', image: 'imagenes/PREGUNTA_9_AE.png', imageStyle: 'max-width: 450px;', options: ['a) Opción 1', 'b) Opción 2', 'c) Opción 3', 'd) Opción 4'], answer: 'b' },

    // ===== PREGUNTA 10 MODIFICADA =====
    { 
      id: 10, 
      block: 'APTITUD ESPACIAL', 
      text: 'Considere las siguientes vistas de un mismo cubo:', // Texto 1
      image: 'imagenes/PREGUNTA_10_VISTAS.png', // Imagen 1 (¡NUEVO ARCHIVO!)
      imageStyle: 'max-width: 550px;', 
      textAfterImage: '¿Cuál de las siguientes cuatro opciones, es la que sustituye al signo de interrogación?', // Texto 2
      imageOptions: 'imagenes/PREGUNTA_10_OPCIONES.png', // Imagen 2 (¡NUEVO ARCHIVO!)
      imageOptionsStyle: 'max-width: 550px;',
      options: ['a) 4', 'b) 2', 'c) 1', 'd) 3'], 
      answer: 'c' 
    },

    // ===== PREGUNTA 11 MODIFICADA (para seguir la misma lógica) =====
    { 
      id: 11, 
      block: 'APTITUD ESPACIAL', 
      text: 'Considere la siguiente secuencia de figuras:', // Texto 1
      image: 'imagenes/PREGUNTA_11_AE.png', // Imagen 1
      imageStyle: 'max-width: 450px;',
      textAfterImage: '¿Cuál es la figura en la posición 8?', // Texto 2
      imageOptions: 'imagenes/PREGUNTA_11_OPCIONES.png', // Imagen 2 (¡NUEVO ARCHIVO!)
      imageOptionsStyle: 'max-width: 550px;', 
      options: ['a) Opción 1', 'b) Opción 2', 'c) Opción 3', 'd) Opción 4'], 
      answer: 'b' 
    },
    // ===================================

    { id: 12,
block: 'APTITUD ESPACIAL',
text: 'Identifique la figura que reemplaza al signo de interrogación en la analogía.',
image: 'imagenes/PREGUNTA_12_AE.png',
imageStyle: 'max-width: 450px;',
options: ['a) Opción 1', 'b) Opción 2', 'c) Opción 3', 'd) Opción 4'], answer: 'c' },

    { id: 13, block: 'APTITUD ESPACIAL', text: 'Seleccione la mejor alternativa que establezca la secuencia', image: 'imagenes/PREGUNTA_13_AE.png', imageStyle: 'max-width: 450px;', options: ['a) Opción 1', 'b) Opción 2', 'c) Opción 3', 'd) Opción 4'], answer: 'd' },

    // === APTITUD VERBAL ===
    { id: 14, block: 'APTITUD VERBAL', text: 'En el siguiente ejercicio, seleccione la alternativa que establezca la misma relación que hay entre las dos primeras palabras escritas con mayúsculas. <p>PROTÓN es a ÁTOMO como:</p>', options: ['a) Peldaño es a escalera', 'b) Célula es a núcleo', 'c) Aminoácido es a proteína', 'd) Pétalo es a rosa'], answer: 'c' },

    { id: 15, block: 'APTITUD VERBAL', text: 'Considere el siguiente texto: <p><mark>"En el momento de la fundación de la Roma quadrata, el latín era una simple habla primitiva y __________ empleada por pastores, campesinos y forajidos soldados rudos; pero, conforme Roma comienza a lograr victoria tras victoria sobre otros pueblos, su idioma comienza a __________ por la misma Italia y fuera de sus fronteras."</mark> <p>Según el texto, ¿cuáles palabras completan el párrafo anterior consentido lógico?</p>', options: ['a) antigua - dividirse', 'b) rústica - expandirse', 'c) exótica - distribuirse', 'd) arcaica - transmitirse'], answer: 'b' },

    { id: 16, block: 'APTITUD VERBAL', text: 'Considere el siguiente texto: <p><mark>"La televisión nos tantaliza, quedamos como prendados de ella. Este efecto entre mágico y maléfico es obra, creo, del exceso de la luz que con su intensidad nos toma."</mark> <p>Según el texto, ¿cuál palabra resume el efecto de la televisión?</p>', options: ['a) Nociva', 'b) Ilusoria', 'c) Atractiva', 'd) Seductora'], answer: 'd' },

    { id: 17, block: 'APTITUD VERBAL', text: 'Los ejercicios 17 y 18 se basan en el siguiente fragmento: <p><mark>"Este fragmento trata sobre la doctrina científica de los pitagóricos. El pensamiento de Pitágoras se inscribe en la corriente dualista. En su reflexión, o en la de su escuela, se afianza la división entre dos mundos; por una parte, el de lo celeste, cuyo movimiento es armónico, eterno e incorruptible, y por otra, el orden de lo terreno, la región de lo corruptible. Pero también hay otro estadio en el que se ve con igual fuerza este dualismo, y es en las derivaciones tomadas del estudio de los números. De este modo, en la tabla de las diez oposiciones fundamentales, las tres primeras son: limitado-ilimitado, impar-par, uno-muchos. Esta tabla pasó de ser una de las partes del estudio de los números, a utilizarse como decálogo de la moral. Esta ciencia pitagórica de los números es indudablemente el legado más valioso que se deriva del pensamiento de Pitágoras."</mark></p> <p>En el fragmento anterior, la palabra “estadio” (línea 4) se refiere a:</p>', options: ['a) lugar de estudio.', 'b) línea de pensamiento.', 'c) deseo de conocimiento.', 'd) estado de la inteligencia.'], answer: 'b' },

    { id: 18, block: 'APTITUD VERBAL', text: 'De acuerdo con el fragmento anterior (preg. 17), podemos afirmar que el pensamiento pitagórico es esencialmente:', options: ['a) moral.', 'b) espiritual.', 'c) numérico.', 'd) dual.'], answer: 'd' },

    { id: 19, block: 'APTITUD VERBAL', text: 'En el siguiente ítem escoja la opción, aquella que tenga un significado diferente (que no comparte relación semántica) con la palabra escrita con letras mayúsculas y las demás del grupo. <p>ASTUTO</p>', options: ['a) Suspicaz', 'b) Pícaro', 'c) Ladino', 'd) Tunante'], answer: 'a' },

    { id: 20, block: 'APTITUD VERBAL', text: 'Seleccione la alternativa que exprese el significado más opuesto al de la palabra escrita en letras mayúsculas: <p>PREPOTENTE</p>', options: ['a) moderado', 'b) sumiso', 'c) tolerante', 'd) sereno'], answer: 'c' }
];

// Variables globales
let currentQuestionIndex = 0;
let timerInterval;
const totalTime = 24 * 60; // 24 minutos
let timeRemaining = totalTime;
let userAnswers = {};
let flaggedQuestions = new Set();
let isQuizSubmitted = false;
let isQuizActive = false;

// **FUNCIÓN MODIFICADA**
function startQuiz() {
    const email = window.currentUser ? window.currentUser.email : null;
    if (!email) {
        alert("Error: No se ha podido identificar al usuario. Por favor, inicie sesión de nuevo.");
        return;
    }

    // Verificar intentos antes de empezar
    const isAdmin = email === "sebastian.neto@593teveoenlau.ec";
    let attempts = localStorage.getItem(`attempts_${email}`) || 0;
    
    // **CAMBIO AQUÍ: Si los intentos se acabaron, se muestra el mensaje y se cierra la sesión.**
    if (!isAdmin && attempts >= 2) {
      alert("Ya alcanzaste el límite de 2 intentos. Se cerrará tu sesión.");
      logoutAndReload(); // Llama a la función para cerrar sesión y recargar
      return;
    }
    // **FIN DEL CAMBIO**

    if (typeof registerAttempt === 'function') {
        registerAttempt();
    } else {
        console.error("La función registerAttempt no está definida.");
        return;
    }

    isQuizActive = true;
    currentQuestionIndex = 0;
    timeRemaining = totalTime;
    userAnswers = {};
    flaggedQuestions.clear();
    isQuizSubmitted = false;
    document.getElementById('intro-page-container').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'flex';
    renderQuiz();
    startTimer();
    saveProgress();
}

function renderQuiz() {
    renderNavigation();
    renderQuestion(currentQuestionIndex);
    if (window.MathJax) {
        window.MathJax.typeset();
    }
}

function renderNavigation() {
    document.getElementById('math-nav-buttons').innerHTML = '';
    document.getElementById('spatial-nav-buttons').innerHTML = '';
    document.getElementById('verbal-nav-buttons').innerHTML = '';
    questions.forEach((q, index) => {
        const button = document.createElement('button');
        button.textContent = q.id;
        button.onclick = () => {
            renderQuestion(index);
            saveProgress(); 
        };
        const blockContainerId = 
            q.block.includes('MATEMÁTICO') ? 'math-nav-buttons' :
            q.block.includes('ESPACIAL') ? 'spatial-nav-buttons' :
            'verbal-nav-buttons';
        if (userAnswers[q.id]) button.classList.add('answered');
        if (flaggedQuestions.has(q.id)) button.classList.add('flagged');
        if (index === currentQuestionIndex) button.classList.add('active');
        document.getElementById(blockContainerId).appendChild(button);
    });
}


// ================================================================
// ===== FUNCIÓN renderQuestion() MODIFICADA =====
// ================================================================
function renderQuestion(index) {
    currentQuestionIndex = index;
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    const q = questions[index];
    document.getElementById('section-title').textContent = q.block;
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question active';

    // 1. Añadir Texto 1
    let html = `<h3>Pregunta ${q.id}.</h3><p>${q.text}</p>`;

    // 2. Añadir Imagen 1 (si existe)
    if (q.image) {
        const style = q.imageStyle || '';
        html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
    }

    // 3. Añadir Texto 2 (si existe)
    if (q.textAfterImage) {
        html += `<p>${q.textAfterImage}</p>`;
    }
    
    // 4. Añadir Imagen 2 (la de opciones visuales, si existe)
    //    Esto es para la Pregunta 10
    if (q.imageOptions) {
        const style = q.imageOptionsStyle || '';
        html += `<div class="image-container"><img src="${q.imageOptions}" alt="Opciones visuales para ${q.id}" style="${style}"></div>`;
    }

    // 5. Renderizar las opciones (de radio)
    html += '<div class="options">';

    // Caso A: Opciones con imágenes (Preguntas 11, 12, 13)
    if (q.optionImages) {
        const containerClass = 'image-options-container'; // Usar clase estándar
        html += `<div class="${containerClass}">`;
        q.options.forEach((option, i) => {
            const optionValue = String.fromCharCode(97 + i); // a, b, c, d
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label class="image-option-label">
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    <span>${option}</span>
                    <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                </label>
            `;
        });
        html += `</div>`;
    } 
    // Caso B: Opciones de texto normales (Todas las demás)
    else {
        q.options.forEach((option, i) => {
            const optionValue = option.charAt(0).toLowerCase();
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label>
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    ${option}
                </label>
            `;
        });
    }
    html += '</div>'; // Cierre de .options
    
    questionDiv.innerHTML = html;
    container.appendChild(questionDiv);
    
    // Actualizar MathJax y botones
    if (window.MathJax) {
        window.MathJax.typesetPromise([questionDiv]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }

    updateNavigationButtons();
}
// ================================================================
// ===== FIN DE LA MODIFICACIÓN =====
// ================================================================


function handleOptionClick(questionId, element) {
    userAnswers[questionId] = element.value;
    saveProgress(); 
    renderNavigation();
}

function updateNavigationButtons() {
    document.getElementById('next-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'block';
    document.getElementById('prev-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    const flagBtn = document.getElementById('flag-btn');
    if (flaggedQuestions.has(questions[currentQuestionIndex].id)) {
        flagBtn.style.backgroundColor = '#ffc107';
    } else {
        flagBtn.style.backgroundColor = '#6c757d';
    }
    renderNavigation();
}

function toggleFlaggedQuestion() {
    const currentId = questions[currentQuestionIndex].id;
    if (flaggedQuestions.has(currentId)) {
        flaggedQuestions.delete(currentId);
    } else {
        flaggedQuestions.add(currentId);
    }
    saveProgress();
    updateNavigationButtons();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        renderQuestion(currentQuestionIndex + 1);
        saveProgress();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        renderQuestion(currentQuestionIndex - 1);
        saveProgress();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
            return;
        }
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (timeRemaining % 5 === 0) {
            saveProgress();
        }
    }, 1000);
}

function submitQuiz() {
    if (isQuizSubmitted) return; 
    clearInterval(timerInterval);
    isQuizSubmitted = true;
    isQuizActive = false; 
    localStorage.removeItem("quizState"); 
    
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'flex';
    displayResultsPage();
}

function calculateResults() {
    let correctAnswers = 0;
    questions.forEach(q => {
        if (userAnswers[q.id] === q.answer) {
            correctAnswers++;
        }
    });
    return { correctAnswers, totalQuestions: questions.length };
}

function displayResultsPage() {
    const existingAdjustedScore = document.querySelector('.adjusted-score-display');
    if (existingAdjustedScore) {
        existingAdjustedScore.remove();
    }
    const results = calculateResults();
    const resultsScoreEl = document.querySelector('.results-score');
    resultsScoreEl.textContent = `Aciertos: ${results.correctAnswers} / ${results.totalQuestions} (${(results.correctAnswers / results.totalQuestions * 100).toFixed(1)}%)`;
    const baseScore = 425;
    const variableScore = 575;
    const pointsPerAnswer = variableScore / results.totalQuestions;
    const finalScore = Math.round(baseScore + (results.correctAnswers * pointsPerAnswer));
    const adjustedScoreEl = document.createElement('p');
    adjustedScoreEl.className = 'results-score adjusted-score-display';
    adjustedScoreEl.style.marginTop = '15px';
    adjustedScoreEl.style.fontSize = '2.8em';
    adjustedScoreEl.innerHTML = `Puntuación Final: <strong style="color: var(--accent-color);">${finalScore} / 1000</strong>`;
    resultsScoreEl.parentNode.insertBefore(adjustedScoreEl, resultsScoreEl.nextSibling);
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = '';
    questions.forEach(q => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.answer;
        const block = document.createElement('div');
        block.className = 'results-question-block';
        
        // --- Lógica de recuadro de resultados (similar a renderQuestion) ---
        let html = `<h4>Pregunta ${q.id}. ${q.block}</h4><p>${q.text}</p>`;
        
        // Imagen 1
        if (q.image) {
            const style = q.imageStyle || '';
            html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
        }
        // Texto 2
        if (q.textAfterImage) {
            html += `<p>${q.textAfterImage}</p>`;
        }
        // Imagen 2
        if (q.imageOptions) {
            const style = q.imageOptionsStyle || '';
            html += `<div class="image-container"><img src="${q.imageOptions}" alt="Opciones visuales para ${q.id}" style="${style}"></div>`;
        }
        // --- Fin de lógica de recuadro ---

        html += '<div class="options">';
        if (q.optionImages) {
            const containerClass = 'image-options-container';
            html += `<div class="${containerClass}">`;
            q.options.forEach((option, i) => {
                const optionValue = String.fromCharCode(97 + i);
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = 'image-option-label';
                if (isSelected && isCorrect) labelClass += ' correct';
                else if (isSelected && !isCorrect) labelClass += ' incorrect';
                else if (isTheCorrectAnswer) labelClass += ' correct';
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        <span>${option}</span>
                        <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                    </label>`;
            });
            html += `</div>`;
        } else {
            q.options.forEach((option, i) => {
                const optionValue = option.charAt(0).toLowerCase();
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = '';
                if (isSelected && isCorrect) labelClass = 'correct';
                else if (isSelected && !isCorrect) labelClass = 'incorrect';
                else if (isTheCorrectAnswer) labelClass = 'correct';
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        ${option}
                    </label>`;
            });
        }
        html += '</div>';
        if (!isCorrect) {
            html += `<p style="color: red; margin-top: 10px;">Tu respuesta: ${userAnswer ? userAnswer.toUpperCase() : 'Ninguna'}. Respuesta correcta: <strong>${q.answer.toUpperCase()}</strong></p>`;
        } else {
            html += `<p style="color: green; margin-top: 10px;">¡Respuesta correcta!</p>`;
        }
        block.innerHTML = html;
        resultsContent.appendChild(block);
    });

    if (window.MathJax) {
        window.MathJax.typesetPromise([resultsContent]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }
}

function saveProgress() {
    if (!isQuizActive || isQuizSubmitted) return;
    const state = {
        currentQuestionIndex,
        userAnswers,
        timeRemaining,
        flaggedQuestions: Array.from(flaggedQuestions)
    };
    localStorage.setItem("quizState", JSON.stringify(state));
}

function restoreProgress() {
    const savedState = localStorage.getItem("quizState");
    if (savedState) {
        const saved = JSON.parse(savedState);
        isQuizActive = true; 
        document.getElementById('intro-page-container').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'flex';
        currentQuestionIndex = saved.currentQuestionIndex || 0;
        userAnswers = saved.userAnswers || {};
        timeRemaining = saved.timeRemaining || totalTime;
        flaggedQuestions = new Set(saved.flaggedQuestions || []);
        renderQuiz();
        startTimer();
    }
}

// LÓGICA DE INICIO CENTRALIZADA (sin cambios)
document.addEventListener('DOMContentLoaded', () => {
    auth.onAuthStateChanged(user => {
        if (user) {
            window.currentUser = user; 
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('app-container').style.display = 'block';

            if (localStorage.getItem("quizState")) {
                restoreProgress();
            } else {
                document.getElementById('intro-page-container').style.display = 'flex';
                document.getElementById('quiz-page').style.display = 'none';
                document.getElementById('results-page').style.display = 'none';
            }
        } else {
            window.currentUser = null;
            document.getElementById('login-page').style.display = 'flex';
            document.getElementById('app-container').style.display = 'none';
        }
    });
});

window.addEventListener("beforeunload", (e) => {
    if (isQuizActive && !isQuizSubmitted) {
        const confirmationMessage = '¡Atención! Si cierras o recargas la pestaña, tu intento se enviará automáticamente. ¿Estás seguro?';
        e.returnValue = confirmationMessage; 
        return confirmationMessage;
    }
});

window.addEventListener("pagehide", () => {
    if (isQuizActive && !isQuizSubmitted) {
        saveProgress();
    }
});
