import { observer } from "mobx-react"
import { Button, SafeAreaView, SectionList, Text, View } from "react-native"
import { CarStore } from "../src/stores/car.store"

const HomeView = observer(() => {
  const carStore = CarStore.shared

  const sections = Object.keys(carStore.carsByMakes).map((make) => ({
    title: make,
    data: carStore.carsByMakes[make]
  }))

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <Text className="text-xl p-4">Hello World!</Text>

        <Button title="Fetch all cars" onPress={async () => await carStore.fetchAllCars()}></Button>
        <Button title="add cle53" onPress={async () => await carStore.addNewCar()}></Button>

        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text>• {item.model}</Text>
          )}
          renderSectionHeader={({ section }) => (
            <View className="bg-gray-100">
              <Text className="text-xl font-bold">{section.title}</Text>
            </View>
          )}
          renderSectionFooter={() => (
            <View className="h-6 bg-gray-100" />
          )}
          contentContainerStyle={{ padding: 24 }}
          stickySectionHeadersEnabled={true}
        >
        </SectionList>
      </View>
    </SafeAreaView>
  )
})

export default HomeView