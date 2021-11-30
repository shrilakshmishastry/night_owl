import InputForm from '../../presentational/inputForm';
import { Row, Col } from "react-bootstrap";
const FormOne = ({
	 errors,
	 handleNextPage
	  }) => {
	return (
		<Row className="mt-3">
			<InputForm
				title="Title"
				type="text"
				name="title"
				errors={errors}
			/>

			<InputForm
				title="Author Name"
				type="text"
				name="author_name"
				errors={errors}
			/>

			<InputForm
				title="Number of pages"
				type="number"
				name="pages"
				errors={errors}
			/>

			<InputForm
				title="ISBN"
				type="number"
				name="isbn"
				errors={errors}
			/>
			<Col md={12} className="">
				<button 
				className="btn small text-primary"
				onClick={handleNextPage }
				>
					Continue
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 bi bi-arrow-right" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
					</svg>
				</button>
			</Col>
		</Row>
	);
}
export default FormOne