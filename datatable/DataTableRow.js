import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { COL_TYPES } from './DataTable';
import Line from './Line';

const { width, height } = Dimensions.get('window');

const DataTableRow = props => {

    const { data, colNames, style, mapColNameToType, widthOfLine } = props;
    const [checked, setChecked] = useState(false);

    return (
        <>

            <View style={styles.rowContainer}>
                {
                    colNames.map((name, index) => {
                        const colType = mapColNameToType[name]
                        const textAlign = (colType == COL_TYPES.STRING || colType == null) ? 'left' : (colType == COL_TYPES.ICON || colType == COL_TYPES.RADIO) ? 'center' : 'right'
                        let paddingLeft = 0;
                        let paddingRight = 0;
                        if (textAlign == 'left') {
                            paddingRight = 1;
                            paddingLeft = 13
                        } else if (textAlign == 'right') {
                            paddingRight = 13;
                            paddingLeft = 1;

                        }
                        return (
                            <View key={index} style={[styles.rowCellContainer, { width: style.defaultEachColumnWidth }]}>
                                <Text style={[styles.rowCellText, { paddingLeft, paddingRight, textAlign }]}>{data[name]}</Text>
                            </View>
                        );
                    })
                }
            </View>
            
            <Line row width={widthOfLine} />

        </>
    );
}

export default DataTableRow;

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        // backgroundColor: 'green'
    },
    rowCellText: {
        color: 'black',
        fontSize: 14.5,
        // backgroundColor: 'green',
        // flex: 1
        // flexWrap: 'wrap'
    },
    rowCellContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        // backgroundColor: 'green',
    },
    // line: {
    //     height: 1,
    //     backgroundColor: '#e3e3e3',
    //     alignSelf: 'center',
    //     width
    // }
});

