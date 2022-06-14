// Import packages
import React, { useState, useEffect } from "react";
// Import components
import { LeftImage, RightImage } from "../../components/index";
// Import images
import Covid from "../../../images/covid.svg";
// Import axios
import axios from "axios";
// Import styled components
import {
  Container,
  Header,
  CardContainer,
  CardTitle,
  CardContent,
  Div,
  Img,
} from "./CovidNews.elements";

function CovidNews() {
  // Local state to store data from API
  let [covidNews, setCovidNews] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://covid-19-data.p.rapidapi.com/country",
      params: { name: "uk" },
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "1d67f63223msh34ab9932e18034bp19a12ajsnb6ea68599444",
      },
    };

    const interval = setInterval(() => {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data[0]);
          setCovidNews(response.data[0]);
        })
        .catch(handleErrors);

      function handleErrors(err) {
        if (err.response) {
          console.log("Problem with response ", err.response.status);
        } else if (err.request) {
          console.log("Problem with Request!");
        } else {
          console.log("Error", err.message);
        }
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [covidNews]);

  return (
    <div>
      <Container>
        <Header>UK Covid News</Header>
        <Div>
          <CardContainer>
            <CardContent>
              <CardTitle>
                <h3>United Kingdom</h3>
              </CardTitle>
              <div>
                <strong>Confirmed Cases: </strong>
                <span>
                  {covidNews.confirmed ? (
                    <span>{covidNews.confirmed}</span>
                  ) : (
                    <strong>Checking for updates...</strong>
                  )}
                </span>
              </div>
              <div>
                <strong>Critical: </strong>
                <span>
                  {covidNews.critical ? (
                    <span>{covidNews.critical}</span>
                  ) : (
                    <strong>Checking for updates...</strong>
                  )}
                </span>{" "}
              </div>

              <div>
                <strong>Recovered: </strong>
                <span>
                  {covidNews.recovered ? (
                    <span>{covidNews.recovered}</span>
                  ) : (
                    <strong>Checking for updates...</strong>
                  )}
                </span>{" "}
              </div>
              <div>
                <strong>Deaths: </strong>
                <span>
                  {covidNews.deaths ? (
                    <span>{covidNews.deaths}</span>
                  ) : (
                    <strong>Checking for updates...</strong>
                  )}
                </span>{" "}
              </div>
            </CardContent>
          </CardContainer>
          <Img src={Covid} alt="Searching image." />
        </Div>
      </Container>
      <LeftImage />
      <RightImage />
    </div>
  );
}

export default CovidNews;
