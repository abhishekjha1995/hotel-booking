import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchRooms, saveBooking } from "../utility/apiUtility";
import { validFormData } from "../utility/commonUtility";

function AddBooking() {
	const { rooms, addRoom } = useSelector((state) => state, shallowEqual),
		dispatch = useDispatch(),
		[formData, setFormData] = useState({
			surname: "",
			room: "",
			date: ""
		}),
		[error, setError] = useState(null);

	useEffect(() => {
		fetchRooms("url")
			.then(resp => dispatch({ type: "GET_ROOMS_SUCCESS", payload: resp.data }))

		return function () {
			dispatch({ type: "SAVE_ROOM_INFO", payload: undefined })
		}
	}, [dispatch])

	function onChangeHandler(event) {
		const { name, value } = event.target;

		setFormData({
			...formData,
			[name]: value
		})
	}

	function addBooking() {
		if (validFormData(formData)) {
			setError(null);
			saveBooking("api", formData)
				.then(res => dispatch({
					type: "SAVE_ROOM_INFO",
					payload: res.data
				}));
		} else {
			setError("Please fill all the fields");
		}
	}

	return (
		<div className="booking-container">
			<div className="booking-title">
				Add Booking
			</div>
			<hr />
			<div className="booking-body">
				{
					addRoom && <div className="booking-info">
						Room added successfully
					</div>
				}
				{
					error && <div className="booking-error">
						{error}
					</div>
				}
				<div className="form-group">
					<label htmlFor="surname">Surname</label>
					<input
						type="text"
						id="surname"
						name="surname"
						placeholder="Surname"
						value={formData.surname}
						onChange={onChangeHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="room">Room</label>
					<select
						name="room"
						value={formData.room}
						onChange={onChangeHandler}
					>
						<option>Select Room</option>
						{
							Array.isArray(rooms) ?
								rooms.map(room => (
									<option key={room}>{room}</option>
								)) :
								null
						}
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						id="date"
						name="date"
						value={formData.date}
						onChange={onChangeHandler}
					/>
				</div>
				<div className="button-group">
					<button onClick={addBooking}>
						Add
					</button>
				</div>
			</div>
		</div >
	);
}

export default AddBooking;