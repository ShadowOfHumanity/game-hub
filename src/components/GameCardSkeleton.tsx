import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
    <Card >
        <Skeleton height="200px"/>
        <CardBody>
            <SkeletonText height="20px" width="50%" />
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton