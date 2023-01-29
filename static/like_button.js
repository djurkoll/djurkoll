// Mock function, replace with backend call
function GetData() {
    return [{ location: "Pjungserud", checked: false }, { location: "Åsebol", checked: false }];
}

function Location(props) {
    return "<h1>{this.props.location}</h1>";
}

const domContainer = document.querySelector('#location');
const root = ReactDOM.createRoot(domContainer);
const element = <Location location="Blargh" />;
root.render(element);