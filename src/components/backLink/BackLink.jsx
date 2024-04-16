import { HiArrowLeft } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import css from './BackLink.module.scss';


export const BackLink = ({ to, children }) => {
    return (
      <NavLink to={to} className={css.link}>
        <HiArrowLeft size="24" />
        {children}
      </NavLink>
    );
  };