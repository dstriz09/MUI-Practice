import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { Badge, IconButton, InputBase } from "@material-ui/core";
import NotificatioNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useStyles } from "./styles";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase
              placeholder="Search"
              startAdornment={<SearchIcon fontSize="small" />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge
                badgeContent={4}
                color="secondary"
                style={{ margin: "0 10px" }}
              >
                <NotificatioNoneIcon fontSize="small" />
              </Badge>
              <Badge
                badgeContent={3}
                color="primary"
                style={{ margin: "0 10px" }}
              >
                <ChatBubbleOutlineIcon fontSize="small" />
              </Badge>
              <Badge style={{ margin: "0 10px" }}>
                <PowerSettingsNewIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
