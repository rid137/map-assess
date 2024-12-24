export const truncate = (str: string, wordAmout: number) => {
    if(str?.length > wordAmout) {
        str = str.substring(0, wordAmout) + '...'
    };
    return str;
  };