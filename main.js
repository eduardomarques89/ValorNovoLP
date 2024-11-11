function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const isVisible = answer.style.display === "block";

  // Fecha todas as respostas
  document.querySelectorAll(".faq-answer").forEach(answer => {
    answer.style.display = "none";
  });

  // Abre apenas a resposta clicada
  if (!isVisible) {
    answer.style.display = "block";
  }
}
