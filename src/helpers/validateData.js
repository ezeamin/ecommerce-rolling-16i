export const validateData = (concepto, precio, fecha) => {
  if (!concepto || !precio || !fecha) {
    return false;
  }

  // if (nombre.length < 2 || precio < 0 || descripcion.length < 2) {
  //   return false;
  // }

  // const urlRegex =
  //   /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
  // if (!urlRegex.test(imagen)) {
  //   return false;
  // }

  return true;
};
