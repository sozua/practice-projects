export default class AnimaNumeros {
  constructor(numerosClass, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numerosClass);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass || "ativo";

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);

    let start = 0;

    const timer = setInterval(() => {
      start += incremento;

      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random()); // O Math.random serve para adicionar uma impressão de "organicidade" à animação
  }

  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero)
    );
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.animaNumeros();
      this.observer.disconnect();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget && this.observerClass) {
      this.addMutationObserver();
      return this;
    }
  }
}
