import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState } from "react";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className='flex h-full items-center justify-between bg-white pb-3'>
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className='w-full flex justify-end items-end p-5'
      >
        <Text className='text-black text-md font-JakartaBold'>Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full' />
        }
        activeDot={
          <View className='w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full' />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className='flex items-center justify-center'>
            <Image
              source={item.image}
              className='w-full h-[300px]'
              resizeMode='contain'
            />
            <View className='flex flex-row items-center justify-center w-full mt-10'>
              <Text className='text-black text-3xl font-bold mx-10 text-center'>
                {item.title}
              </Text>
            </View>
            <Text className='text-empty font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3 text-lg'>
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        className='w-11/12 mt-10'
        title={isLastSlide ? "Get Start" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
      />
    </SafeAreaView>
  );
};

export default Welcome;
