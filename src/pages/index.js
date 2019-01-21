import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";

export default () => (
  <Layout style={{ color: "teal" }}>
    <Header headerText="Here Header" navigate="true" />

    <h3>Here you agoWelcome to my React site</h3>
    <p>Now i just build something great with Gatsby generator</p>
    <div
      style={{ maxWidth: "300px", maxHeight: "420px", marginBottom: "1.45rem" }}
    >
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  </Layout>
);
