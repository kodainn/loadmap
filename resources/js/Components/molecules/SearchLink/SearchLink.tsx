import Component from "./Component";
import { SearchLinkProps } from "./type";


const SearchLink: React.FC<SearchLinkProps> = ({ size }) => {
    return (
        <Component
            size={size}
        />
    );
}

export default SearchLink;
