import Component from "./Component";
import { SearchFieldProps } from "./type";

const SearchField: React.FC<SearchFieldProps> = ({ onEnterKeyDraw }) => {
    return (
        <Component
            onEnterKeyDraw={onEnterKeyDraw}
        />
    );
}

export default SearchField;
