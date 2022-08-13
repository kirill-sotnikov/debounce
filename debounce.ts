const debounceWrapper = () => {
  let timeoutId: ReturnType<typeof setTimeout>;

  const debounce = (
    /** Функция, которая выполнится с задержкой, которая передана как второй
     * аргумент
     */
    doSomeFn: () => void,
    /** Задержка перед выполнением функции переданной как первый аргумент.
     * Стандартное занчение 200мс */
    timeout: number = 200
  ) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      doSomeFn();
    }, timeout);
  };

  return debounce;
};

export const debounce = debounceWrapper();
