export const validation = (form) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errors = {
    nameError: "",
    emailError: "",
    messageError: "",
  };

  if (form.name === "") {
    errors.nameError = "Wpisz imię";
  } else if (form.name.indexOf(" ") >= 0) {
    errors.nameError = "Podane imię jest nieprawidłowe";
  }

  if (form.email === "") {
    errors.emailError = "Wpisz email";
  } else if (!re.test(String(form.email).toLowerCase())) {
    errors.emailError = "Podany email jest nieprawidłowy";
  }

  if (form.message === "") {
    errors.messageError = "Uzupełnij pole";
  } else if (form.message.length < 120) {
    errors.messageError = "Wiadomość musi mieć co najmniej 120 znaków";
  }
  if (!errors.nameError && !errors.emailError && !errors.messageError) {
    return true;
  }
  return errors;
};

export const validateForm = (
  setErrors,
  email,
  password,
  passwordConf,
  errors
) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) {
    setErrors((prevState) => ({
      ...prevState,
      emailError: "Email jest nieprawidłowy",
    }));
  }
  if (password !== passwordConf) {
    setErrors((prevState) => ({
      ...prevState,
      passwordConfError: "Hasła są różne",
    }));
  }
  if (password.length < 6) {
    setErrors((prevState) => ({
      ...prevState,
      passwordError: "Hasło musi mieć conajmniej 6 znaków",
    }));
  }
  if (
    !errors.emailError &&
    !errors.passwordError &&
    !errors.passwordConfError
  ) {
    return true;
  }
  return false;
};
