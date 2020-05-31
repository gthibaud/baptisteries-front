import React from "react";
import Card from "./Card";
import PointSummaryContainer from "./PointSummaryContainer";
import PageLayout from "./PageLayout";

export default function HomePage() {
  return (
    <PageLayout>
      <PointSummaryContainer />
      <Card />
    </PageLayout>
  );
}
