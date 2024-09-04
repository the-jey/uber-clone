import { router } from 'expo-router'
import { FlatList, View } from 'react-native'

import DriverCard from '@/components/DriverCard'
import RideLayout from '@/components/RideLayout'
import CustomButton from '@/components/CustomButton'
import { useDriverStore } from '@/store'

const ConfirmRide = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();

  return (
    <RideLayout title='Choose a driver' snapPoints={['65%', '85%']}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => <DriverCard item={item} selected={selectedDriver!} setSelected={() => setSelectedDriver(item.id!)} />}
        ListFooterComponent={() => (
          <View className="mx-5 m-&0">
            <CustomButton
              title='Select Ride'
              onPress={() => router.push("/(root)/book-ride")}
            />
          </View>
        )}
      />
    </RideLayout>
  )
}

export default ConfirmRide