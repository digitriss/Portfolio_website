export const validation = () => {
  const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (form.name.indexOf(" ") >= 0) {
    setError((p) => {
      return {
        ...p,
        nameError: "Podane imię jest nieprawidłowe",
      };
    });
  }
  if (reg.test(String(form.email).toLowerCase())) {
    setError((p) => {
      return {
        ...p,
        emailError: "Podany email jest nieprawidłowy",
      };
    });
  }
  if (form.message.length < 120) {
    setError((p) => {
      return {
        ...p,
        messageError: "Wiadomość musi mieć co najmniej 120 znaków",
      };
    });
  }
  if (
    error.nameError === "" &&
    error.emailError === "" &&
    error.messageError === ""
  ) {
    sendMessage();
  }
};
