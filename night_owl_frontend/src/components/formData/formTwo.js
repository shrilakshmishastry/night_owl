import { Field } from "formik";
import { Col, Row } from "react-bootstrap";
import InputForm from "../../presentational/inputForm";

const FormTwo = ({
    load,
    handlePreviousPage,
    errors
}) => {
    return (
        <>
            <Row>
                <InputForm
                    title="Cover Image"
                    type="url"
                    name="cover"
                    errors={errors}
                />
                <InputForm
                    title="Web site"
                    type="url"
                    name="website"
                    errors={errors}
                />
                <Col md={12} xs={12}>
                    <label >
                        Category
                        <Field
                            className="p-2 border rounded border-1  mt-2"
                            as="select"
                            name="categories">
                            <option value="Life">Life</option>
                            <option value="Motivation">Motivation</option>
                            <option value="Children"> Children</option>
                        </Field>

                        <p className="mt-2 modal-error-text">{errors.categories}</p>
                    </label>
                </Col>
                <Col md={12}>
                    <label >
                        Description
                        <Field
                        className="border rounded border-1  mt-2"
                         type="text" 
                         name="description" />

                        <p className="mt-2 modal-error-text" >{errors.description}</p>
                    </label>


                </Col>
            </Row>

            {
                load ? <p style={{ color: "black" }}>Submitting...</p>
                    :
                    <Row >
                        <Col md={6} className=" d-flex justify-content-center" xs={12}>
                            <button
                                className="btn flex-fill btn-outline-primary small text-primary"
                                onClick={handlePreviousPage}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left me-3" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg>
                                Previous

                            </button>
                        </Col>
                        <Col md={6} className="d-flex justify-content-center " xs={12}>
                            <button className="btn flex-fill  btn-primary " type="submit">
                                Add one
                            </button>
                        </Col>

                    </Row>
            }
        </>
    );
}
export default FormTwo