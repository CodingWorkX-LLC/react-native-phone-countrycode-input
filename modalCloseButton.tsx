import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

interface Props {
    closeModal: () => void;
}

export default function ModalCloseButton({ closeModal }: Props) {
    return (
        <View style={styles.closeMainCon}>
            <Pressable onPress={closeModal} hitSlop={{ top: 30, right: 30, bottom: 30, left: 30 }}>
                <Image
                    resizeMode='contain'
                    resizeMethod='resize'
                    style={styles.modalCloseIcon}
                    source={require("./modal_close_icon.png")}
                />
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    closeMainCon: {
        height: 24,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalCloseIcon: {
        width: 24,
        height: 24,
    },
});

