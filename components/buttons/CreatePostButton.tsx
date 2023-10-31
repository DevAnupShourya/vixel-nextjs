import { Button } from "@nextui-org/button";
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
