import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchRooms, checkRoomNo } from "../services/apiUtility";

function CheckRoom() {
	const { rooms, roomCheck } = useSelector((state) => state, shallowEqual),
		dispatch = useDispatch(),
		[formData, setFormData] = useState({
			room: "",
			date: ""
		});

	useEffect(() => {
		fetchRooms("url")
			.then(resp => dispatch({ type: "GET_ROOMS_SUCCESS", payload: resp.data }))

		return function () {
			dispatch({ type: "ROOM_CHECK_SUCCESS", payload: undefined })
		}
	}, [dispatch])

	function onChangeHandler(event) {
		const { name, value } = event.target;

		setFormData({
			...formData,
			[name]: value
		})
	}

	function checkbooking() {
		checkRoomNo("api", formData)
			.then(resp => dispatch({ type: "ROOM_CHECK_SUCCESS", payload: resp.data }))
	}

	return (
		<div className="booking-container">
			<div className="booking-title">
				Check Room
			</div>
			<hr />
			<div className="booking-body">
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
					<button onClick={checkbooking}>
						Check
					</button>
					{
						roomCheck !== undefined ?
							roomCheck ? <div className="icon check-icon">&#10003;</div> :
							<div className="icon cross-icon">   &#88;</div>:
							null
					}
				</div>
			</div>
		</div>
	);
}

export default CheckRoom;