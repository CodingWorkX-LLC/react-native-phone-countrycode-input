import React, { useMemo, useState } from 'react';
import { countryCodesData } from './countrycode';
import ModalCloseButton from './modalCloseButton';
import styles from './index.styles';
import {
    FlatList, Image, ImageStyle, Modal, Pressable, Text,
    TextInput, TextStyle, TouchableOpacity, View, ViewStyle
} from 'react-native';

interface Props {
    value: string;
    placeHolder: string;
    countryCode: string;
    inputStyle?: TextStyle;
    searchStyle?: TextStyle;
    listItemStyle?: ViewStyle;
    flagImgStyle?: ImageStyle;
    containerStyle?: ViewStyle;
    downArrowStyle?: ImageStyle;
    listDialCodeStyle?: TextStyle;
    listContainerStyle?: ViewStyle;
    countryNameTextStyle?: TextStyle;
    setSelCountry: (val: any) => void;
    updatePhoneVal: (val: any) => void;
    listItemSeparatorStyle?: ViewStyle;
    modalInnerContainerStyle?: ViewStyle;
}

export default function PhoneNumberCountryCodeInput({
    value,
    inputStyle,
    searchStyle,
    placeHolder,
    countryCode,
    flagImgStyle,
    listItemStyle,
    setSelCountry,
    updatePhoneVal,
    containerStyle,
    downArrowStyle,
    listDialCodeStyle,
    listContainerStyle,
    countryNameTextStyle,
    listItemSeparatorStyle,
    modalInnerContainerStyle
}: Props) {

    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");

    const toggleModal = () => {
        setSearch("");
        setOpen((val) => !val);
    }

    const getCountryCodesData = useMemo(() => {
        return countryCodesData.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });
    }, [countryCodesData, search]);

    const renderCountryCodeModal = () => {
        return (
            <Modal
                visible={open}
                transparent={true}
                animationType='fade'>
                <View style={styles.modalContainer}>
                    <View style={[styles.formContainer, modalInnerContainerStyle]}>
                        <TextInput
                            value={search}
                            returnKeyType="search"
                            placeholder="Search..."
                            onChangeText={setSearch}
                            style={[styles.searchStyle, searchStyle]}
                            placeholderTextColor={'rgba(13, 1, 64, 0.60)'}
                        />
                        <FlatList
                            data={getCountryCodesData}
                            keyboardShouldPersistTaps={"handled"}
                            renderItem={({ item }) => renderCountryCode(item)}
                            contentContainerStyle={[styles.listContainer, listContainerStyle]}
                        />
                    </View>
                    <ModalCloseButton closeModal={toggleModal} />
                </View>
            </Modal>
        );
    }

    const renderCountryCode = (item: any) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.listItemCon, listItemStyle]}
                onPress={() => {
                    setSelCountry(item.dial_code);
                    toggleModal();
                }}>
                <Image source={{ uri: item.image }} style={[styles.itemImgStyle, flagImgStyle]} />
                <Text style={[styles.dialTextStyle, listDialCodeStyle]}>{item.dial_code}</Text>
                <View style={[styles.seperator, listItemSeparatorStyle]} />
                <Text numberOfLines={2} style={[styles.countryName, countryNameTextStyle]}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    }

    const rednerRightArrow = () => {
        return (
            <Image
                resizeMode='contain'
                resizeMethod='resize'
                source={require("./dd_icon.png")}
                style={[styles.ddIconStyle, downArrowStyle]}
            />
        );
    }

    return (
        <React.Fragment>
            <View style={[styles.container, containerStyle]}>
                <Pressable style={styles.countryCodeCon} onPress={toggleModal}>
                    <Text style={styles.countryCodeTxt}>{countryCode}</Text>
                    {rednerRightArrow()}
                </Pressable>
                <TextInput
                    value={value}
                    maxLength={15}
                    returnKeyType="next"
                    placeholder={placeHolder}
                    keyboardType={'number-pad'}
                    placeholderTextColor={'rgba(13, 1, 64, 0.6)'}
                    onChangeText={(val) => {
                        if (/^[0-9]*$/.test(val)) {
                            updatePhoneVal(val);
                        } else if (val.length === 0) {
                            updatePhoneVal(val);
                        }
                    }}
                    style={[styles.inputStyle, inputStyle, { fontFamily: value?.length ? '500' : '400' }]}
                />
            </View>
            {renderCountryCodeModal()}
        </React.Fragment>
    );
}