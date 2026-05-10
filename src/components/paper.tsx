import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { GithubIcon, PaperIcon } from "./icons";

export const Paper = ({
  title,
  authors,
  accepted,
  date,
  paper_link,
  code_link,
}) => {
  return (
    <Card className="py-1 w-full bg-gray-0" shadow="none">
      <CardBody className="grid grid-cols-8 p-0 items-start justify-between relative z-10">
        <div className="flex flex-col col-span-8 md:col-span-7">
          <p className="text-small font-bold">{title}</p>
          <small className="text-default-500">{authors}</small>
          <small className="text-default-500 font-bold">
            {accepted}
          </small>
        </div>

        <div className="col-span-8 md:col-span-1 flex items-end gap-2 place-content-end flex-col">
          <div className="flex items-start gap-2 hidden sm:flex">
            <Button
              isExternal
              isIconOnly
              as={Link}
              color="default"
              href={paper_link}
              radius="full"
              size="sm"
              variant="light"
            >
              <PaperIcon />
            </Button>
            <Button
              isExternal
              isIconOnly
              as={Link}
              color="default"
              href={code_link}
              isDisabled={code_link === ""}
              radius="full"
              size="sm"
              variant="light"
            >
              <GithubIcon />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
