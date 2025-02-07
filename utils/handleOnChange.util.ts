export function handleOnChange<T>(
  event: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >,
  dataType: "string" | "array" | "object",
  stateFunction: React.Dispatch<React.SetStateAction<T>>
) {
  const { name, value } = event.target;
  switch (dataType) {
    case "string":
      stateFunction(value as T);
      break;
    case "array":
      stateFunction(
        (prevValues: T) => [...(prevValues as string[]), value] as T
      );
      break;
    case "object":
      stateFunction(
        (prevValues: T) => ({ ...(prevValues as object), [name]: value } as T)
      );
      break;
    default:
      break;
  }
}
