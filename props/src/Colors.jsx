/* eslint-disable react/prop-types */
import { Color } from "./Color";

export const Colors = ({ colors }) => {
    return (
        <ul>
            {colors.map((color) => <Color key={color.id} color={color.name}/>)}
        </ul>
    );
}