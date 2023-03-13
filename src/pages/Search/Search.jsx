import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoriesShow = styled.section``;
const Title = styled.h2`
  font-size: 40px;
`;

const CategoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const CategoriesItem = styled.li``;

export default function Search() {
  const [state, setState] = useState();

  let token = window.localStorage.getItem("token");

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    let promise = new axios({
      url: "https://api.spotify.com/v1/browse/categories",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    });
    promise.then((result) => {
      setState(result.data);
      console.log("data", result.data);
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });
  };

  return (
    <CategoriesShow>
      <Title>Browse all</Title>
      <CategoriesList>
        {state?.categories.items.map((item, i) => {
          return (
            <CategoriesItem key={i}>
              <Link to={item.href}>
                <p>{item.name}</p>
                {item.icons.map((image, i) => {
                  return (
                    <figure key={i}>
                      <img src={image.url} alt={item.name} />
                    </figure>
                  );
                })}
              </Link>
            </CategoriesItem>
          );
        })}
      </CategoriesList>
    </CategoriesShow>
  );
}
