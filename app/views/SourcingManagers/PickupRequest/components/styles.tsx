import { StyleSheet } from 'react-native';
import { normalize, normalizeHeight, normalizeSpacing, normalizeWidth } from '../../../../components/scaleFontSize';
import { BLACK_COLOR, FONT_FAMILY_EXTRABOLD, FONT_FAMILY_SEMIBOLD, GRAY_COLOR, PRIMARY_THEME_COLOR, WHITE_COLOR } from '../../../../components/utilities/constant';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: WHITE_COLOR,
    },
    headerStyle: {
        backgroundColor: PRIMARY_THEME_COLOR,
    },
    RightFirstIconStyle: {
        tintColor: WHITE_COLOR,
    },
    propertyListView: {
        flex: 1,
        margin: normalizeSpacing(8),
    },
    IteamView: {
        backgroundColor: WHITE_COLOR,
        marginHorizontal: normalizeSpacing(10),
        borderRadius: 10,
        marginVertical: normalizeSpacing(8),
        borderWidth: 0.5,
    },
    Txtview: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: GRAY_COLOR,
        borderBottomWidth: 0.5,
        paddingHorizontal: normalizeSpacing(4),
        marginTop: normalizeSpacing(2),
    },
    projectContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    projectTxt: {
        fontSize: normalize(15),
        fontFamily: FONT_FAMILY_SEMIBOLD,
    },
    nameContainer: {
        flex: 1.5,
        alignItems: 'flex-start',
    },
    nameTxt: {
        fontSize: normalize(15),
        fontFamily: FONT_FAMILY_EXTRABOLD,
        color: BLACK_COLOR,
        marginHorizontal: normalizeSpacing(10)
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: normalizeSpacing(10),
    },
    button: {
        top: 10,
        backgroundColor: WHITE_COLOR,
        width: normalizeWidth(100),
        height: normalizeHeight(25),
        marginLeft: normalizeSpacing(10),
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 10
    },
    Viewbutton: {
        top: 10,
        backgroundColor: PRIMARY_THEME_COLOR,
        borderBottomEndRadius: 10,
        borderTopLeftRadius: 10,
        padding: normalizeSpacing(5)
    },
    arrow: {
        tintColor: WHITE_COLOR,
        width: normalizeWidth(30),
        height: normalizeHeight(30)
    },
    buttonTxt: {
        color: BLACK_COLOR,
        textAlign: 'center',
    },
})
export default styles