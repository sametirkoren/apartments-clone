import { FlatList } from "react-native";
import { Screen } from '../components/Screen';
import { LIST_MARGIN } from "../constants";
import { Card } from "../components/Card";


export const SearchScreen = () => {
    const properties = [
        {
            id: 1,
            images: [
                "https://images1.apartments.com/i2/uswEseKnMnU4ebRfW82ffRnkLFMx9-2IoNdmDEx12Lw/111/the-residences-at-newcity-chicago-il-building-photo.jpg",
                "https://images1.apartments.com/i2/6Z_l93QZ3QTdmrLCmpGezJmIH6yMN_MXF5OiacgZAE4/111/the-residences-at-newcity-chicago-il-building-photo.jpg",
            ],
            rentLow: 3750,
            rentHigh: 31054,
            bedroomLow: 1,
            bedroomHigh: 5,
            name: "The Hamilton",
            street: "555 NE 34th St",
            city: "Miami",
            state: "Florida",
            zip: 33137,
            tags: ["Parking", "Value0", "Value1", "Value2"]
        },
        {
            id: 2,
            images: [
                "https://images1.apartments.com/i2/uswEseKnMnU4ebRfW82ffRnkLFMx9-2IoNdmDEx12Lw/111/the-residences-at-newcity-chicago-il-building-photo.jpg",
                "https://images1.apartments.com/i2/6Z_l93QZ3QTdmrLCmpGezJmIH6yMN_MXF5OiacgZAE4/111/the-residences-at-newcity-chicago-il-building-photo.jpg",
            ],
            rentLow: 3750,
            rentHigh: 31054,
            bedroomLow: 1,
            bedroomHigh: 5,
            name: "The Hamilton",
            street: "555 NE 34th St",
            city: "Miami",
            state: "Florida",
            zip: 33137,
            tags: ["Parking", "Value0", "Value1", "Value2"]
        },
        {
            id: 3,
            images: [
                "https://images1.apartments.com/i2/uswEseKnMnU4ebRfW82ffRnkLFMx9-2IoNdmDEx12Lw/111/the-residences-at-newcity-chicago-il-building-photo.jpg",
                "https://images1.apartments.com/i2/6Z_l93QZ3QTdmrLCmpGezJmIH6yMN_MXF5OiacgZAE4/111/the-residences-at-newcity-chicago-il-building-photo.jpg",
            ],
            rentLow: 3750,
            rentHigh: 31054,
            bedroomLow: 1,
            bedroomHigh: 5,
            name: "The Hamilton",
            street: "555 NE 34th St",
            city: "Miami",
            state: "Florida",
            zip: 33137,
            tags: ["Parking", "Value0", "Value1", "Value2"]
        },
    ]



    return (
        <Screen style={{ marginHorizontal: LIST_MARGIN }}>
            <FlatList showsVerticalScrollIndicator={false} data={properties} keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card style={{marginVertical: 5}} property={item} />
                )}
            />

        </Screen>
    )
}