interface ExtendableObject {
  [key: string]: any;
}

export default function groupColumnValues(input: any[]) {
  return input.reduce((output, entry) => {
    const columns = Object.keys(entry);

    for (const column of columns) {
      if (!output[column]) {
        output[column] = [] as any[];
      }

      output[column] = [...output[column], entry[column]];
    }

    return output;
  }, {} as ExtendableObject);
}
