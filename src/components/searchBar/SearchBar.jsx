import css from './SearchBar.module.scss';
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast('Please enter search term!');

const SearchBar = ({ onSearch }) => {

	const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
	const query = form.elements.query.value;
    
    if(form.elements.query.value.trim() === "") {
        notify();
        return;
        }
        onSearch(query);
        form.reset();
  };
  
  return (
    <>
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="query"
        placeholder="Search movie..."
      />
      <button className={css.btn} type="submit">Search</button>
      <Toaster />
    </form>
    </>
    
  );
};

export default SearchBar;