import React, {useState} from "react";

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onFormSubmission = e => {
        e.preventDefault();

        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmission} className="ui form">
                <div className="field">
                    <input type="text" placeholder="Search..." value={term} onChange={event => setTerm(event.target.value)}/>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;