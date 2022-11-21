import {MDBRadio} from "mdb-react-ui-kit";
import {useContext} from "react";
import {ThemeContext} from "./App";

export default function CategoriesRadioGroup({categories, onCategoryChange, selectedCategory}: {categories: string[], selectedCategory?: string, onCategoryChange: (category: string) => void}) {
    const theme = useContext(ThemeContext);
    console.log(theme.value);
    return (
        <div>
            {categories.map(cat => {
                return (
                    <MDBRadio label={cat} key={cat} inline checked={cat === selectedCategory} onChange={() => onCategoryChange(cat)}/>
                )
            })}
        </div>
    )
}
