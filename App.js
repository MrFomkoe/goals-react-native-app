import { useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import {
	Button,
	FlatList,
	Pressable,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import GoalItem from "./components/GoalItem.component";
import GoalInput from "./components/GoalInput.component";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const inputRef = useRef("");

	console.log("rerender triggered");

	function handleModalIsVisible() {
		// console.log('pressed')
		setModalIsVisible((prevState) => !prevState);
	}

	function handleAddGoal() {
		if (inputRef.current.text == "") return;
		setCourseGoals((prevCourseGoals) => [
			...prevCourseGoals,
			{
				text: inputRef.current.text,
				id: uuidv4(),
			},
		]);
		inputRef.current.text = "";
		inputRef.current.clear();
    handleModalIsVisible()
	}

	function handleGoalDelete(goalIndex) {
		const filteredCourseGoals = courseGoals.filter(
			(goal, index) => index !== goalIndex
		);
		setCourseGoals(filteredCourseGoals);
	}

	return (
    <>
    <View style={styles.appContainer}>
				<Button
					title="Add New Goal"
					color="#00ff48"
					onPress={handleModalIsVisible}
				/>

				<GoalInput
					ref={inputRef}
					handleAddGoal={handleAddGoal}
					visible={modalIsVisible}
					handleModalIsVisible={handleModalIsVisible}
				/>

			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					keyExtractor={(item, index) => index}
					renderItem={(itemData) => {
						return (
							<GoalItem
								text={itemData.item.text}
								index={itemData.index}
								handleGoalDelete={handleGoalDelete}
							/>
						);
					}}
				/>
			</View>
		</View>
    </>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 60,
		paddingHorizontal: 16,
    gap: 24,
	},

	goalsContainer: {
		flex: 6,
	},
});
