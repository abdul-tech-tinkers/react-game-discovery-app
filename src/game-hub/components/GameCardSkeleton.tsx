import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton height="370px"></Skeleton>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
