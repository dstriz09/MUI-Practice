import SideMenu from "../src/components/SideMenu/SideMenu";
import { useStyles } from "../src/components/index/styles";
import Header from "../src/components/Header/Header";
import { CssBaseline } from "@material-ui/core";

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
    </>
  );
}
