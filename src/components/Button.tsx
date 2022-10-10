// @ts-ignore
import React, {CSSProperties, FunctionComponent, useMemo, useState} from "react";
import { v4 as uuidv4 } from "uuid";

const Button: FunctionComponent<ButtonProp> = ({
                                               }) => {
    const uuid = useMemo(() => uuidv4(), []);
    const [value, setValue] = useState<number>(0)

    return (
        <button
            key={uuid}
            style={{width: `200px`, height: `200px`, maxWidth: `100px`, maxHeight: `100px`, fontSize: `larger`, fontWeight: `bolder`}}
            onClick={() => setValue(value + 1)}
        >
            {value}
        </button>
    );
};

interface ButtonProp {
}

export default Button;
