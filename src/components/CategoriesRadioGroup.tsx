import {MDBRadio} from "mdb-react-ui-kit";

export default function CategoriesRadioGroup({categories, onCategoryChange, selectedCategory}: {categories: string[], selectedCategory?: string, onCategoryChange: (category: string) => void}) {

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
