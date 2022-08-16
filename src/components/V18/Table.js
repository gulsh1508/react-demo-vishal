import { Suspense, useEffect, useState, useTransition } from "react";
import axios from "axios";
import "../../App.css";
import React from "react";

const Home = () => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3005/posts").then((res) => {
      startTransition(() => {
        setData(res.data);
      });
    });
  }, []);

  const changeData = (e) => {
    startTransition(() => {
      setQuery(e.target.value);
    });
  };  

  const setDatePicker = (e) => {
    setDate(e.target.value);
  };

  const loader = {
    border: "16px solid #f3f3f3",
    borderTop: "16px solid #3498db",
    borderRadius: "50%",
    width: "12px",
    height: "12px",
    animation: "spin 2s linear infinite",
  };

  return (
    <div className="container">
      {date == "" ? (
        ""
      ) : (
        <h3 style={{ color: "black" }}>Selected Date is : {date}</h3>
      )}

      <div className="table">
        <div className="table-header">
          <div className="header__item">User ID</div>
          <div className="header__item">Address</div>
          <div className="header__item">Email</div>
          <div className="header__item">Name</div>
          <div className="header__item">DatePicker</div>
          <input
            type="text"
            style={{ color: "black", fontSize: "15px" }}
            placeholder="Search..."
            onChange={changeData}
          />
        </div>
        {isPending && (
          <Suspense>
            <h3 style={loader}>Fetching List</h3>
          </Suspense>
        )}
        <div className="table-content">
          {data
            .filter((user) => {
              if (query == "") {
                return user;
              } else if (
                user.name.toLowerCase().includes(query.toLocaleLowerCase())
              ) {
                return user;
              }
            })
            .map((res, index) => {
              return (
                <div className="table-row" key={index}>
                  <div className="table-data">{index + 1}</div>
                  <div className="table-data">{res.adderss}</div>
                  <div className="table-data">{res.email}</div>
                  <div className="table-data">{res.name}</div>
                  <div className="table-data">
                    <input
                      type="date"
                      name="dob"
                      placeholder="Date of birth"
                      onChange={setDatePicker}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Home;
