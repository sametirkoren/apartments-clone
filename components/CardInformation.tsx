import { View } from "react-native";
import { Button, Text } from '@ui-kitten/components';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../theme";
import { Property } from "../types/property";
import { Row } from "./Row";

export const CardInformation = ({ property }: { property: Property }) => {
    return (
        <>
            <View style={{ paddingHorizontal: 5, paddingVertical: 10, borderColor: "#d3d3d3", borderBottomLeftRadius: 5, borderBottomRightRadius: 5, borderWidth: 1 }}>
                <Row style={{ justifyContent: "space-between" }}>
                    <Text category={"s1"}>
                        ${property.rentLow.toLocaleString()} - {" "}
                        {property.rentHigh.toLocaleString()}
                    </Text>
                    <MaterialCommunityIcons name="heart-outline" color={theme["color-primary-500"]} size={24} />
                </Row>
                <Text category="c1">
                    {property.bedroomLow} - {property.bedroomHigh} Beds
                </Text>
                <Text category="c1" style={{ marginTop: 5 }}>
                    {property.name}
                </Text>
                <Text category="c1">
                    {property.street}
                </Text>
                <Text category="c1">
                    {property.city}, {property.state}, {property.zip}
                </Text>
                <Text category="c1" style={{ marginTop: 5 }}>
                    {property.tags.map((tag, index) => index === property.tags.length - 1 ? tag : `${tag}, `)}
                </Text>

                <Row style={{ marginTop: 5, justifyContent: "space-between" }}>
                    <Button appearance="ghost" style={{ borderColor: theme["color-primary-500"], width: "49%" }} size="small" onPress={() => console.log("email")}>Email</Button>
                    <Button style={{ width: "49%" }} size="small" onPress={() => console.log("call")}>Call</Button>
                </Row>
            </View>
        </>
    )
}