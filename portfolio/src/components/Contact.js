import { useState } from "react";
import { Logo } from "./Atoms/Logo";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    messageError: "",
  });
  const [APIResponse, setAPIResponse] = useState("");

  const API_URL = "https://fer-api.coderslab.pl/v1/portfolio/contact";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  // regex nie działa  dobrze
  // musze przełądowywac od nowa fromularz jezeli chce wpisac poprawioe dane
  // odpowiedz400 jest ok? bo cos chyba nie działa?:(
  const submitForm = (e) => {
    e.preventDefault();
    const reg =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
      return sendMessage();
    }
  };

  const sendMessage = () => {
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("dane z API: ", data);
        setAPIResponse("Wiadomość została wysłana! Wkrótce się skontaktujemy!");
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };
  return (
    <>
      <div className="contact__container" id="contact">
        <div className="contact__wrap">
          <Logo text={"Skontaktuj się z mną"} />
          {APIResponse}
          <form onSubmit={submitForm}>
            <div className="form-wrap">
              <div className="form-wrap__el">
                <label>Wpisz swoje imię</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                <p>{error.nameError}</p>
              </div>
              <div className="form-wrap__el">
                <label>Wpisz swój email </label>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <p>{error.emailError}</p>
              </div>
            </div>
            <label>Wpisz swoją wiadomość </label>
            <textarea
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
            <p>{error.messageError}</p>
            <button type="submit">Wyślij</button>
          </form>
        </div>
      </div>
    </>
  );
};
