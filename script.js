function verificarResposta(acertou) {
    const campoResultado = document.getElementById('resultado-quiz');
    
    if (acertou) {
        campoResultado.innerText = "🎉 Parabéns! Você acertou! A rotação de culturas mantém o solo fértil e evita pragas de forma natural. 🌾✨";
        campoResultado.style.color = "#40916c"; // Cor Verde para acerto
    } else {
        campoResultado.innerText = "❌ Quase lá! Tente novamente. Dica: tem a ver com a saúde da terra! 🌸";
        campoResultado.style.color = "#ff758f"; // Cor Rosa para erro
    }
}
