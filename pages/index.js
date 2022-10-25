// Library Imports
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Container from "../components/styled/Container.styled";
import ActionsRow from "../components/main-page/ActionsRow";
import Statement from "../components/main-page/Statement";
import SearchResults from "../components/main-page/SearchResults";
import CocktailCard from "../components/main-page/CocktailCard";
import axios from "axios";
export default function Home() {
  // Routing operations hook
  const router = useRouter();
  // Hooks
  const [cocktails, setCocktails] = useState([]);

  const getCocktails = async () => [
    await axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((res) => {
        console.log(res);
      })
      .catch((e) => alert(e)),
  ];

  useEffect(() => {
    getCocktails();
  }, []);

  const [hello, sayHello] = useState(false);
  return (
    <Container>
      <div>
        <Statement />
        <ActionsRow />
        <SearchResults />
      </div>
    </Container>
  );
}
