import { useState } from "react";
import { Logo } from "../Atoms/Logo";
import { validation } from "../API/validation";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [APIResponse, setAPIResponse] = useState(false);
  const [errors, setErrors] = useState("");

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

  const sendServerResponse = () => {
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          setAPIResponse(true);
          setErrors("");
        }
        return resp.json();
      })
      .then((data) => {
        console.log("API data: ", data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const result = validation(form);
    result.ok ? sendServerResponse() : setErrors(result);
  };

  return (
    <>
      <div className="contact__container" id="contact">
        <div className="contact__wrap">
          <Logo text={"Skontaktuj się z mną"} />
          {APIResponse && <h2>Skontaktuj się z nami</h2>}
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
                <p>{errors.nameError}</p>
              </div>
              <div className="form-wrap__el">
                <label>Wpisz swój email </label>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <p>{errors.emailError}</p>
              </div>
            </div>
            <label>Wpisz swoją wiadomość </label>
            <textarea
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
            <p>{errors.messageError}</p>
            <button type="submit">Wyślij</button>
          </form>
        </div>
      </div>
    </>
  );
};
