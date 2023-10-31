import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

import Link from "next/link";

export default function Aside() {
  return (
    <Card radius="lg" className="bg-all">
      <CardHeader className="px-5 py-4 text-center">
        <h1>Top Stories</h1>
      </CardHeader>
      <Divider />
      <CardBody>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, iusto
        rem? Ut eveniet perspiciatis, quod sed deserunt excepturi veniam
        pariatur nam? Architecto autem illo illum, dolorem soluta quos, maxime
        voluptate repudiandae ducimus dolore deserunt sequi unde? Quae ab,
        praesentium esse exercitationem voluptatum error quo aspernatur tempora
        enim non, fuga minima.
      </CardBody>
      <Divider />
      <CardFooter className="p-0">
        <Button
          as={Link}
          href="/stories"
          fullWidth
          radius="none"
          variant="flat"
          color="primary"
        >
          See All Srories
        </Button>
      </CardFooter>
    </Card>
  );
}
