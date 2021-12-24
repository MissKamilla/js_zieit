import { observer } from 'mobx-react';
import MobxStore from '../../store';

const Search = observer(() => {
    const {
        search,
        setSearch,
        setApplyFilters,
    } = MobxStore;

    const onChange = (event: any) => setSearch(event?.target?.value);

    const onClick = () => setApplyFilters(true);

    const onKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            onClick();
        }
    }

    return (
        <div className="search">
            <div className="search-wrapper">
                <input
                    className="search-wrapper_input"
                    type="text"
                    value={search}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            </div>
            <div
                className="search-btn"
                onClick={onClick}
            >
                <button></button>
            </div>
        </div>
    )
});

export default Search;
