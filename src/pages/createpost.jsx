import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

function CreatePost() {
		const initialValues = {
			title: "",
			postText: "",
			username: "",
		};
		let history = useHistory();
		const validationSchema = Yup.object().shape({
			title: Yup.string().required(),
			postText: Yup.string().required(),
			username: Yup.string().min(3).max(15).required(),
		});
		const onSubmit = (data) => {
			axios.post("http://localhost:3001/posts", data).then((response) => {
				history.push("/");
			})
		};
		return(
		<div className="createPostPage"> 
			<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			<Form className="formContainer">
				<label>
				Name:
				<ErrorMessage name="title" component="span"/>
					<Field autoComplete="off" id="inputCreatePost" name="title" placeholder="post title" />
				</label>
				<label>
				Post:
				<ErrorMessage name="postText" component="span"/>
					<Field autoComplete="off"type="text" id="inputCreatePost" name="postText" placeholder="Post..." />
				</label>
				<label>
				Username:
				<ErrorMessage name="username" component="span"/>
					<Field autoComplete="off" id="inputCreatePost" name="username" placeholder="username"/>
				</label>
			<button type="submit">Create Post</button>
			</Form>
			</Formik>
		</div>
	);
};

export default CreatePost;
