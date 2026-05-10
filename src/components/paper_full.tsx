import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { GithubIcon, PaperIcon } from "./icons";

export const PaperFull = ({
  title,
  authors,
  accepted,
  date,
  thumbnail,
  paper_link,
  code_link,
}) => {
  return (
    <Card className="py-1 w-full bg-gray-0" shadow="none">
      <CardBody className="grid grid-cols-8 p-0 gap-2 items-start justify-between relative z-10">
        {thumbnail && (
          <div
            className="col-span-8 md:col-span-3 hidden md:flex item-center h-[100px] mx-2 overflow-hidden bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${thumbnail})` }}
          />
        )}
        <div className={`flex flex-col col-span-8 ${thumbnail ? "md:col-span-4" : "md:col-span-7"}`}>
          <p className="text-small font-bold">{title}</p>
          <small className="text-default-500">{authors}</small>
          <small className="text-default-500 font-bold">
            {accepted} {date}
          </small>
        </div>

        <div className="col-span-8 md:col-span-1 fitems-start gap-2 hidden sm:flex flex-col justify-start">
          <Button
            isExternal
            isIconOnly
            as={Link}
            color="default"
            href={paper_link}
            radius="full"
            size="sm"
            variant="flat"
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
            variant="flat"
          >
            <GithubIcon />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
