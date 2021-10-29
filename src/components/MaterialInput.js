import React from "react";
import Input from "@material-tailwind/react/Input";

export default function MaterialInput() {
    return (
        <Input
            type="text"
            color="yellow"
            size="regular"
            outline={true}
            placeholder="Search"
        />
    )
}