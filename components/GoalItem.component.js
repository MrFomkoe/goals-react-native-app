import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function GoalItem(props) {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalText}> {props.text} </Text>
			<Pressable
				style={styles.goalDeleteItem}
				onPress={() => props.handleGoalDelete(props.index)}
			>
				<AntDesign name="closecircleo" size={36} color="black" />
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	goalItem: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		gap: 16,
		marginBottom: 16,
		backgroundColor: "#aa00ff",
		borderRadius: 5,
	},
	pressedItem: {
		backgroundColor: "#1b0028",
	},

	goalText: {
		padding: 8,
		flex: 1,
		fontSize: 24,
		color: "#ffffff",
		fontWeight: 500,
	},
	goalDeleteItem: {
		padding: 8,
	},
});
