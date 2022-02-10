export const generateId = (): string => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  return (
    s4() +
    s4() +
    s4()
  );
};

export function getModifiedStringArray(initialString: string, target: string): string[] {
  return initialString.replace(target, '_').split('_');
}