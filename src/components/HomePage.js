import React from "react";
import Card from "./Card";
import PointSummaryContainer from "./PointSummaryContainer";
import PageLayout from "./PageLayout";

export default function HomePage({ isOnCardView }) {
  return (
    <PageLayout isOnCardView={isOnCardView}>
      <PointSummaryContainer />
      <Card />
    </PageLayout>
  );
}
