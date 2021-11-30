import { useRef, useEffect, useState } from "react";
import { Field, Formik } from 'formik';
import { addBookschema } from "../config/validations/addBookValidation";
import addNewBook from "../data/apiCall/addNewBooks";
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import FormOne from "./formData/formOne";
import FormTwo from "./formData/formTwo";
import DescriptionForAddCard from "../presentational/descriptionForAddCard";

const AddBook = ({ modalVisible, handleModalClose }) => {

	// const [authorName, setauthorName] = useState();
	// const [categories, setcategories] = useState();
	// const [cover, setcover] = useState();
	// const [description, setdescription] = useState();
	// const [isbn, setisbn] = useState();
	// const [pages, setpages] = useState();
	// const [title, settitle] = useState();
	// const [website, setwebsite] = useState();
	const [load, setload] = useState(false);
	const [pageNum, setpageNum] = useState(1);

	useEffect(() => {
		return () => {
			setpageNum(1);
		};
	}, [modalVisible]);


	async function handleSubmit(params) {
		setload(true);
		console.log(params);
		const result = await addNewBook(params);
		console.log(result)
		if (result && result.status && result.status === 200) {
			setload(false);
			setpageNum(1);
			handleModalClose();
		}
		setload(false);
	}

	return (
		<Modal
			show={modalVisible}
			onHide={handleModalClose}
			animation={true}
			size="lg"
			backdrop={"static"}
		>

			<Modal.Body >
				<Container>
					<Row>
						<Col
							md={4}
							className="pb-4 d-none d-sm-block bg-primary">
							<DescriptionForAddCard />
						</Col>
						<Col xs={12} md={8} lg={{span:7,offset:1}} className="" >
							<Row>
								<button className="btn d-flex justify-content-end">
									<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-octagon" viewBox="0 0 16 16">
										<path fill="#0d6efd" d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
										<path fill="#0d6efd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</Row>
							<Row className="">
								<h4>Add New</h4>
							</Row>
							<Row>

								<Formik

									initialValues={{
										title: "",
										author_name: "",
										categories: "Life",
										cover: "",
										description: "",
										isbn: "",
										pages: "",
										website: "",
									}}
									validationSchema={addBookschema}
									onSubmit={(values, actions) => {
										handleSubmit(values);
										actions.resetForm();
									}}
								>
									{
										({
											values,
											handleSubmit,
											handleChange,
											errors,
											handleBlur,
										}) => (
											<form
												className="modal-content-input"
												id="addBook"
												onSubmit={handleSubmit}>

												{
													pageNum === 1 ?
														<FormOne
															handleNextPage={() => setpageNum(2)}
															errors={errors}
														/> :
														<FormTwo
															load={load}
															errors={errors}
															handlePreviousPage={() => setpageNum(1)}
														/>
												}


											</form>
										)
									}
								</Formik>
							</Row>
						</Col>
					</Row>
				</Container>
			</Modal.Body>

		</Modal>
	);
}
export default AddBook;