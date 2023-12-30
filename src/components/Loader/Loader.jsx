import { Vortex } from "react-loader-spinner";
import { Container } from "./Loader.styled";

const Loader = () => {
    return (
        <Container>
            <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </Container>
    )
};

export default Loader;