export const TextService = {
  limitarTexto(texto: string, limite: number): string {
    if (texto.length < limite) {
      return texto;
    }
    return texto.slice(0, limite) + '...';
  },
};