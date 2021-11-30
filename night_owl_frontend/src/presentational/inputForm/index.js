import { Field } from "formik";
import { Col } from "react-bootstrap";
const InputForm = ({
    title,
    name,
    type,
    errors
}) => {
    return (
        <Col xs={12} className="" md={6}>
            <label className="">
                {title}
                <Field
                    className="border rounded border-1  mt-2"
                    type={type}
                    name={name}
                />
                <p className="mt-2 modal-error-text">{errors[name]}</p>
            </label>
        </Col>
    );
}

export default InputForm