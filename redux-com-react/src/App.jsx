import { connect } from "react-redux";

const incrementar = () => ({
  type: "INCREMENTAR",
});

function App({ contador, incrementar }) {
  return (
    <div>
      <h1>Total: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      {/* <button onClick={() => dispatch(incrementar())}>Incrementar</button> */}
    </div>
  );
}

function mapStateToProps(state) {
  return { contador: state };
}

const mapDispatchToProps = { incrementar };

export default connect(mapStateToProps, mapDispatchToProps)(App);
