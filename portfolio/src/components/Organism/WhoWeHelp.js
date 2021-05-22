import { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Logo } from "../Atoms/Logo";
import { db } from "../data/db";

const Foundation = () => {
  const [data, setData] = useState(db.foundations);
  const [pageNumber, setPage] = useState(0);

  const itemsPerPage = 3;
  const pagesVisited = itemsPerPage * pageNumber;
  const displayItems = data
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((el) => {
      return (
        <>
          <li key={el.id}>
            <div className="list-wrap">
              <h5>{el.name}</h5>
              <p>{el.desc}</p>
            </div>
            <p>{el.items}</p>
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
      <div className="who-we-help__numbers">
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

const Organizations = () => {
  const [data, setData] = useState(db.organizations);
  const [pageNumber, setPage] = useState(0);

  const itemsPerPage = 3;
  const pagesVisited = itemsPerPage * pageNumber;
  const displayItems = data
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((el) => {
      return (
        <>
          <li key={el.id}>
            <div className="list-wrap">
              <h5>{el.name}</h5>
              <p>{el.desc}</p>
            </div>
            <p>{el.items}</p>
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
      <div className="who-we-help__numbers">
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

const Fundraisings = () => {
  const [data, setData] = useState(db.fundraisings);
  const [pageNumber, setPage] = useState(0);

  const itemsPerPage = 3;
  const pagesVisited = itemsPerPage * pageNumber;
  const displayItems = data
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((el) => {
      return (
        <>
          <li key={el.id}>
            <div className="list-wrap">
              <h5>{el.name}</h5>
              <p>{el.desc}</p>
            </div>
            <p>{el.items}</p>
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
      <div className="who-we-help__numbers">
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
