import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return <header className={classes.header}>
      <div className={classes.logo}>Sports Meet Up</div>
      <ul>
        <li>
          <Link href="/">All Sports Meetups</Link>
        </li>
        <li>
          <Link href="/">Add New Meetup</Link>
        </li>
      </ul>
    </header>
};

export default MainNavigation;