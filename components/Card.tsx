import { View, ViewStyle } from "react-native";
import { Button, Text } from '@ui-kitten/components';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../theme";
import { Property } from "../types/property";
import { ImageCarousel } from "./ImageCarousel";
import { Row } from "./Row";
import { CardInformation } from "./CardInformation";




export const Card = ({property, style}: {property: Property, style?: ViewStyle}) => {
    return <View style={style}>
        <ImageCarousel images={property.images} />
        <CardInformation property={property} />
      
    </View>
}