
# React Native Phone Country-Code Input

React Native Component with combined phone number and country code picker functionality.
country picker created using react native "Modal" component.
country codes flags and dial codes data present locally.




## Screenshots

![App Screenshot](https://github.com/CodingWorkX-LLC/react-native-phone-countrycode-input/blob/main/modal_open.png?text=Modal+Screenshot)


## Installation

Install using npm

```bash
  npm i react-native-phone-countrycode-input --save
```

Install using yarn

```bash
  yarn add react-native-phone-countrycode-input
```
    
## Usage

```javascript
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PhoneNumberCountryCodeInput from 'react-native-phone-countrycode-input';

export default function Signup() {
    const [mobile, setMobile] = useState("");
    const [countryCode, setCountryCode] = useState("+91");

    return (
        <View style={styles.container}>
            <PhoneNumberCountryCodeInput
                value={mobile}
                countryCode={countryCode}
                setSelCountry={setCountryCode}
                placeHolder={'Enter Phone Number'}
                updatePhoneVal={(val: any) => setMobile(val)}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
});
```


## Props

| Parameter | Type | Description |
| --- | --- | --- |
| `value` | string | Value for text input component (phone number value) |
| `placeHolder` | string | Placeholder for text input |
| `countryCode` | string | Country code value / dial code like +91 |
| `inputStyle` | TextStyle | Style for text input |
| `searchStyle` | TextStyle | Style for search bar component |
| `listItemStyle` | ViewStyle | Style for modal list item container |
| `flagImgStyle` | ImageStyle | Style for flag image component |
| `containerStyle` | ViewStyle | Item container style |
| `downArrowStyle` | ImageStyle | Style for down arrow (after flag image) |
| `listDialCodeStyle` | TextStyle | Text style for dial code in modal list |
| `listContainerStyle` | TextStyle | Style for list container  |
| `countryNameTextStyle` | TextStyle | Text style for country name in list  |
| `setSelCountry` | Function | Function to update state when country code selected by user (val:any) => {console.log("country code", val)} |
| `updatePhoneVal` | Function | Function to update state of phone when user types phone number (val:any) => {console.log("phone number", val)} |
| `listItemSeparatorStyle` | ViewStyle | Separator style for list items  |
| `modalInnerContainerStyle` | ViewStyle | Modal inner container style  |

## Authors

- [@CodingWorkX](https://github.com/CodingWorkX-LLC)


![CodingWorkX](http://codingworkx.com/img/logo.png)

