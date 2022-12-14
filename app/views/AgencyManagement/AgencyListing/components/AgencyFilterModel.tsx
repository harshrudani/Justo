import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import styles from "../../../../components/Modals/styles";
import images from "../../../../assets/images";
import strings from "../../../../components/utilities/Localization";
import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import DropdownInput from "../../../../components/DropDown";
const FilterModal = (props: any) => {
  return (
    <View>
      <Modal isVisible={props.Visible}>
        <View style={styles.mainContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.topTxt}>{strings.searchAgency}</Text>
            <View>
              <TouchableOpacity onPress={() => props.setIsVisible(false)}>
                <Image source={images.close} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderView} />
          <View style={{ marginHorizontal: 10 }}>
            <View style={styles.inputWrap}>
              <InputField
                placeholderText={"Start Date"}
                handleInputBtnPress={() => { }}
                onChangeText={() => { }}
                rightImgSrc={images.event}
              />
            </View>
            <View style={styles.inputWrap}>
              <InputField
                placeholderText={"End Date"}
                handleInputBtnPress={() => { }}
                onChangeText={() => { }}
                rightImgSrc={images.event}
              />
            </View>
            <View style={styles.inputWrap}>
              <InputField
                placeholderText={"Search by Name"}
                handleInputBtnPress={() => { }}
                onChangeText={() => { }}
              />
            </View>
            <View style={styles.inputWrap}>
              <DropdownInput
                placeholder={'Search by Status'}
                value={props.value}
                setValue={props.setValue}
              />
            </View>
          </View>
          <View style={{ marginVertical: 20 }}>
            <Button handleBtnPress={() => props.setIsVisible(false)} buttonText={strings.apply} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FilterModal;
