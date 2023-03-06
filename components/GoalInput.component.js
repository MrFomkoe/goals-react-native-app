import React from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = React.forwardRef((props, ref) => {
	const { handleAddGoal, handleModalIsVisible } = props;

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.textInputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={(text) => (ref.current.text = text)}
					ref={ref}
				/>
				<View style={styles.buttonsContainer}>
					<Button title="Add Goal!" onPress={handleAddGoal} />
					<Button title="Back" onPress={handleModalIsVisible}/>
				</View>
			</View>
		</Modal>
	);
});

export default GoalInput;

const styles = StyleSheet.create({
	textInputContainer: {
		flex: 1,
		gap: 16,
		justifyContent: "center",
        alignItems: 'center',
		marginBottom: 25,
		borderBottomColor: "#cccccc",
		borderBottomWidth: 2,
        padding: 36,
	},
	textInput: {
        width: '100%',
		paddingHorizontal: 8,
		height: 50,
		borderWidth: 1,
		borderColor: "#cccccc",
	},
    buttonsContainer: {
        gap: 16,
    },
});
