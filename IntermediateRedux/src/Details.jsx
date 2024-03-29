import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Modal from "./Modal.jsx";
import { connect } from "react-redux";

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    // Run after the component is rendered to DOM for first time
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    if (this.state.loading) {
      return <h2>Loading ... </h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <button onClick={this.toggleModal} style={{ backgroundColor: this.props.theme }}>
            Adopt {name}
          </button>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <a href="https://bit.ly/pet-adopt">Yes</a>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({theme}) => ({theme});
const ReduxWrappedDetails = connect(mapStateToProps)(Details);

const WrappedDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <ReduxWrappedDetails params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
