import {View, Text, Image, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react'
import {SwiperFlatList} from 'react-native-swiper-flatlist';
const {width, height} = Dimensions.get('window');



export default function Slider({SliderData}) {
  return (
    <View className="flex-1 bg-white">
      <ImageBackground
        source={require('../assets/images/bg_img.png')}
        style={{width: '100%', height: '100%'}}>
        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination={false}
          data={SliderData}
          renderItem={({item}) => (
            <>
              {!item.Image ? (
                <View className="mt-20 py-28">
                  <View>
                    <Text className="w-96 p-3 text-4xl text-center pb-8">
                      {item.title}
                    </Text>
                  </View>
                  <Text className=" w-96 text-center text-6xl px-5">
                    {item.Description}
                  </Text>
                  <TouchableOpacity className=" m-auto w-40 h-12 bg-sky-200 items-center justify-center rounded-md">
                    <Text className="text-sky-950">{item.CTA}</Text>
                  </TouchableOpacity>
                </View>
              ) : !item.CTA ? (
                <View className="mt-20">
                  <Image
                    source={item.Image}
                    resizeMode="contain"
                    style={{height: 350, width}}
                  />
                  <Text className=" w-96 text-center text-5xl px-5 my-5">
                    {item.Description}
                  </Text>
                  <View>
                    <Text className="w-96 p-3 text-2xl text-center text-zinc-500">
                      {item.title}
                    </Text>
                  </View>
                </View>
              ) : (
                <View className="mt-20">
                  <Image
                    source={item.Image}
                    resizeMode="contain"
                    style={{height: 350, width}}
                  />
                  <Text className=" w-96  text-4xl  font-[PlusExtraBold] px-5">
                    {item.Description}
                  </Text>
                  <View className="">
                    <Text className="w-96 p-3 text-2xl text-center text-zinc-500">
                      {item.title}
                    </Text>
                  </View>
                  <TouchableOpacity className=" m-auto w-40 h-12 bg-sky-200 items-center justify-center rounded-md">
                    <Text className="text-sky-950">{item.CTA}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </>
          )}
        />
      </ImageBackground>
    </View>
  );
}