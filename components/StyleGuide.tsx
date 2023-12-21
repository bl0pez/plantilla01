import Link from "next/link";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { DatePicker } from "./ui/datePicker";
import { InputSelect } from "./ui/inputSelect";

const StyleGuide = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 p-24">
        <h1>h1 - Heading 1</h1>
        <h2>h2 - Heading 2</h2>
        <h3>h3 - Heading 3</h3>
        <p>
          p - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Cupiditate, aut blanditiis veritatis officia voluptate dolore quaerat
          impedit nobis. Harum, in?
        </p>
        <div className="bg-black p-10 flex flex-col gap-y-4">
          <Link href={"/"}>Link</Link>
          <Button variant="default">Buton 1</Button>
          <Button variant="orange">Buton 2</Button>
          <Button variant="input">Buton 3</Button>
          <Button variant="orange" size="sm">
            sm - Buton 2
          </Button>
          {/* label & input */}
          <div>
            <Label htmlFor="firstname">Primer nombre</Label>
            <Input type="firstname" id="firstname" />
          </div>
          <div>
            <Label htmlFor="lastname">Apellidos</Label>
            <Input type="lastname" id="lastname" />
          </div>
          {/* Calendario */}
          <div>
            <Label>Date</Label>
            <DatePicker />
          </div>
          <div>
            <Label>Select</Label>
            <InputSelect
              placeholder="Select a fruit"
              items={[
                { value: "apple", label: "Apple" },
                { value: "orange", label: "Orange" },
                { value: "grape", label: "Grape" },
                { value: "pear", label: "Pear" },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StyleGuide;
