import React from "react";
import { ContainerCard } from "./ContainerCard";
import { useSelector } from "react-redux";

export const ContainerShimmer = () => {
  const isMenu = useSelector((store) => store.app.isMenu);

  return (
    <div className={`flex flex-wrap gap-5 `}>
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
      <ContainerCard />
    </div>
  );
};
