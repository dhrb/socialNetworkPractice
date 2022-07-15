import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs.jsx";
import { Route } from "react-router-dom";

const App = (props) => {
	return (
			<div className="app-wrapper">
				<div className="app-wrapper-header">
					<Header />
				</div>
				<div className="app-wrapper-navbar">
					<Navbar
						friendsNav={props.state.dialogsPage}
					/>
				</div>
				<div className="app-wrappper-content">
					<Route path={"/profile"} render={() => 
						<Profile
							profilePage={props.state.profilePage}
							dispatch = {props.dispatch}
						/>} 
					/>
					<Route path={"/dialogs"} render={() =>
						<Dialogs
							state={props.state.dialogsPage}
							dispatch = {props.dispatch}
						/>}
					/>
					{/* <Route path={'/news'} component={News} />
                    <Route path={'/music'} component={Music} />
                    <Route path={'/settings'} component={Settings} /> */}
				</div>
			</div>
	);
};

export default App;
