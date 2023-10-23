import { Button } from "@nextui-org/react";
import Link from "next/link";
import AddCircleLineIcon from 'remixicon-react/AddCircleLineIcon'

export default function CreatePostButton() {
  return (
    <Button
      isIconOnly
      variant="shadow"
      color="secondary"
      as={Link}
      href="/new"
      size="sm"
    >
      <AddCircleLineIcon/>
    </Button>
  );
}
