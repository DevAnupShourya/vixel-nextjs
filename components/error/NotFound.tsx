import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function NotFound({ type }: { type: string }) {
  const router = useRouter();

  return (
    <section className="bg-def">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-light-main dark:text-dark-main">
            {type} not found.
          </p>
          <p className="mb-4 text-lg font-light">
            Sorry, we couldn’t find the {type} you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              variant="bordered"
              color="danger"
              onClick={() => {
                router.back();
              }}
            >
              Go back
            </Button>
            <Button
              variant="bordered"
              color="warning"
              onClick={() => {
                router.refresh();
              }}
            >
              Search Again!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
