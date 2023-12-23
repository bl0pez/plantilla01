import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { DatePicker } from "./ui/datePicker";
import { InputSelect } from "./ui/inputSelect";
import { Button } from "./ui/button";

const ReservationForm = () => {
  return (
    <form className="flex flex-col gap-y-10">
      <div className="grid gap-[30px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" type="text" />
          </div>
          <div>
            <Label htmlFor="lastName">Apellidos</Label>
            <Input id="lastName" type="text" />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          <div>
            <Label htmlFor="date">Fecha</Label>
            <DatePicker />
          </div>
          <div>
            <Label htmlFor="time">Personas</Label>
            <InputSelect
              label="Cantidad de personas"
              placeholder="Cantidad de personas"
              items={[
                { label: "1 persona", value: "1" },
                { label: "2 personas", value: "2" },
                { label: "3 personas", value: "3" },
                { label: "4 personas", value: "4" },
                { label: "5 personas", value: "5" },
                { label: "6 personas", value: "6" },
                { label: "7 personas", value: "7" },
                { label: "8 personas", value: "8" },
                { label: "9 personas", value: "9" },
                { label: "10 personas", value: "10" },
              ]}
            />
          </div>
        </div>
      </div>
      <Button className="uppercase w-full xl:w-auto xl:self-end">
        Reservar
      </Button>
    </form>
  );
};

export default ReservationForm;
