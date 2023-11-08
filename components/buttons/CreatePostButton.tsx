import { Button } from "@nextui-org/button";
import Link from "next/link";
import { BsFillPatchPlusFill } from "react-icons/bs";

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
      <BsFillPatchPlusFill/>
    </Button>
  );
}
