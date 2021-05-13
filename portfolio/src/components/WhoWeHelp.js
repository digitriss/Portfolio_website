import { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Logo } from "./Atoms/Logo";
import { dataBase } from "../db";
//colection to kolejna baza danych w jedym projekcie firebase

const Foundation = () => {
  return (
    <div className="who-we-help__container">
      <ul className="who-we-help__list">
        {dataBase.foundations.map((foundation) => {
          return (
            <>
              <li key={foundation.id}>
                <div className="list-wrap">
                  <h5>{foundation.name}</h5>
                  <p>{foundation.desc}</p>
                </div>
                <p>{foundation.items}</p>
              </li>
              <div className="list-line"></div>
            </>
          );
        })}
      </ul>
      <div className="numbers">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </div>
  );
};

const Organizations = () => {
  return (
    <div className="who-we-help__container">
      <ul className="who-we-help__list">
        {dataBase.organizations.map((organization) => {
          return (
            <>
              <li key={organization.id}>
                <div className="list-wrap">
                  <h5>{organization.name}</h5>
                  <p>{organization.desc}</p>
                </div>
                <p>{organization.items}</p>
              </li>
              <div className="list-line"></div>
            </>
          );
        })}
      </ul>
      <div className="numbers">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </div>
  );
};

const Fundraisings = () => {
  const [data, setData] = useState(dataBase.fundraisings);
  const [pageNumber, setPage] = useState(0);

  const itemsPerPage = 3;
  const pagesVisited = itemsPerPage * pageNumber;
  const displayItems = data
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((fundraising) => {
      return (
        <>
          <li key={fundraising.id}>
            <div className="list-wrap">
              <h5>{fundraising.name}</h5>
              <p>{fundraising.desc}</p>
            </div>
            <p>{fundraising.items}</p>
          </li>
          <div className="list-line"></div>
        </>
      );
    });

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPage(selected);
  };
  return (
    <div className="who-we-help__container">
      <ul className="who-we-help__list">{displayItems}</ul>
      <div className="numbers">
        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          pageCount={pageCount}
          onPageChange={changePage}
        />
      </div>
    </div>
  );
};

const options = ["foundations", "organizations", "fundraisings"];

export const WhoWeHelp = () => {
  const [section, setSection] = useState(options[0]);

  let slice;
  if (section === "foundations") {
    slice = <Foundation />;
  } else if (section === "organizations") {
    slice = <Organizations />;
  } else {
    slice = <Fundraisings />;
  }
  return (
    <>
      <section className="who-we-help" id="who-we-help">
        <Logo text={"Komu pomagamy"} />
        <div className="who-we-help__buttons">
          <div className="wrap-btn">
            <Link
              className=" btn btn-element"
              onClick={() => {
                setSection(options[0]);
              }}
            >
              Fundacjom{" "}
            </Link>
            <Link
              className="btn btn-element"
              onClick={() => {
                setSection(options[1]);
              }}
            >
              Organizajom pozarządowym
            </Link>
            <Link
              className="btn btn-element"
              onClick={() => {
                setSection(options[2]);
              }}
            >
              Lokalnym zbiórkom
            </Link>
          </div>
          <p className="who-we-help__description">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </p>
        </div>
        {slice}
      </section>
    </>
  );
};
