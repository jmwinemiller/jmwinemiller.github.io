import Jeep from "../assets/img/jeep.png";
import Jersey from "../assets/img/jersey.png";
import Pandas from "../assets/img/pandas.png";

export const portfolioList = [
  {
    id: "pandas2",
    description: "Testing new PyArrow functional in Pandas 2.0.0rc1",
    name: "Pandas 2 Test",
    image: Pandas,
    link: "https://github.com/jmwinemiller/pandas-2.0.0-test",
    code: "",
    categories: [
      "Data Analysis",
    ],
    languages: [
      "Python",
    ],
    skills: [
      "Pandas",
      "Polars",
      "PyArrow",
    ],
    date: "March 17, 2023",
  },
  {
    id: "misc1",
    description: "2014 Jeep Wrangler Rubicon",
    name: "Jeep Wrangler",
    image: Jeep,
    link: "",
    code: "",
    categories: [
      "Vehicle",
    ],
    languages: [
      "N/A",
    ],
    skills: [
      "Driving",
    ],
    date: "May 2018",
  },
  {
    id: "misc2",
    description: "Tour Jersey from 2015",
    name: "Rugby Jersey",
    image: Jersey,
    link: "",
    code: "",
    categories: [
      "Jersey"
    ],
    languages: [
      "N/A"
    ],
    skills: [
      "Rugby",
    ],
    date: "April 2014",
  },
]