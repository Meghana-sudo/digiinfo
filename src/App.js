import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [users, setUser] = useState([]);

  const getUser = async () => {
    const response = await fetch("https://reqres.in/api/users/");
    const json = await response.json();
    setUser(json.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container-fluid mt-5 bg-primary">
        <div className="row text-center">
          {users.length &&
            users.map((item) => {
              console.log(item);
              return (
                <div className="col-10 col-md-4 mt-5 mb-5 " key={item.id}>
                  <div className="card p-2 ">
                    <div className="d-flex justify-content-center">
                      <div className="image">
                        {" "}
                        <img
                          src={item.avatar}
                          // className="rounded"
                          className="rounded-circle"
                          width="150"
                        />{" "}
                        <div className="p-1 mt-2  bg-primary d-flex justify-content-center rounded text-white stats">
                          <div className="d-flex flex-column">
                            <div class=" ml-3 w-100">
                              <span>
                                {item.first_name} {item.last_name}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex flex-column mb-2">
                          {" "}
                          <select
                            class="form-select form-select-sm mt-2"
                            aria-label=".form-select-sm"
                          >
                            <option selected>Project Manager</option>
                            <option value="1">Software Developer</option>
                            <option value="2">Software Tester</option>
                            <option value="3">Software Architect</option>
                          </select>{" "}
                        </div>
                        <div className="card">
                          <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item text-center">
                              Email: {item.email}
                            </li>
                            <li className="list-group-item text-center">
                              Department: Information Technology
                            </li>
                            <li className="list-group-item text-center">
                              Address: Vestibulum at eros
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
