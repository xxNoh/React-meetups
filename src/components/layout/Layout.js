import MainNavgation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <MainNavgation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
