import _ from "lodash";
import bodyTheme from "./Body";
import leftTheme from "./Left";
import rightTheme from "./Right";
import headerTheme from "./Header";
import switchTheme from "./Switch";
import thumbnailTheme from "./Thumbnail";
import containerTheme from "./Container";
import contentTheme from "./Content";
import buttonTheme from "./Button";
import titleTheme from "./Title";
import subtitleTheme from "./Subtitle";
import inputGroupTheme from "./InputGroup";
import badgeTheme from "./Badge";
import checkBoxTheme from "./CheckBox";
import cardTheme from "./Card";
import radioTheme from "./Radio";
import h3Theme from "./H3";
import h2Theme from "./H2";
import h1Theme from "./H1";
import footerTheme from "./Footer";
import footerTabTheme from "./FooterTab";
import fabTheme from "./Fab";
import itemTheme from "./Item";
import labelTheme from "./Label";
import textAreaTheme from "./Textarea";
import textTheme from "./Text";
import toastTheme from "./Toast";
import tabTheme from "./Tab";
import tabBarTheme from "./TabBar";
import tabContainerTheme from "./TabContainer";
import viewTheme from "./View";
import tabHeadingTheme from "./TabHeading";
import iconTheme from "./Icon";
import inputTheme from "./Input";
import swipeRowTheme from "./SwipeRow";
import segmentTheme from "./Segment";
import spinnerTheme from "./Spinner";
import cardItemTheme from "./CardItem";
import listItemTheme from "./ListItem";
import formTheme from "./Form";
import separatorTheme from "./Separator";
import variable from "./../variables/platform";
export default (variables = variable) => {
    const theme = {
        variables,
        "NativeBase.Left": Object.assign({}, leftTheme()),
        "NativeBase.Right": Object.assign({}, rightTheme()),
        "NativeBase.Body": Object.assign({}, bodyTheme()),
        "NativeBase.Header": Object.assign({}, headerTheme(variables)),
        "NativeBase.Button": Object.assign({}, buttonTheme(variables)),
        "NativeBase.Title": Object.assign({}, titleTheme(variables)),
        "NativeBase.Subtitle": Object.assign({}, subtitleTheme(variables)),
        "NativeBase.InputGroup": Object.assign({}, inputGroupTheme(variables)),
        "NativeBase.Input": Object.assign({}, inputTheme(variables)),
        "NativeBase.Badge": Object.assign({}, badgeTheme(variables)),
        "NativeBase.CheckBox": Object.assign({}, checkBoxTheme(variables)),
        "NativeBase.Radio": Object.assign({}, radioTheme(variables)),
        "NativeBase.Card": Object.assign({}, cardTheme()),
        "NativeBase.CardItem": Object.assign({}, cardItemTheme(variables)),
        "NativeBase.Toast": Object.assign({}, toastTheme(variables)),
        "NativeBase.H1": Object.assign({}, h1Theme(variables)),
        "NativeBase.H2": Object.assign({}, h2Theme(variables)),
        "NativeBase.H3": Object.assign({}, h3Theme(variables)),
        "NativeBase.Form": Object.assign({}, formTheme(variables)),
        "NativeBase.Container": Object.assign({}, containerTheme()),
        "NativeBase.Content": Object.assign({}, contentTheme(variables)),
        "NativeBase.Footer": Object.assign({}, footerTheme(variables)),
        "NativeBase.Tabs": {
            flex: 1,
        },
        "NativeBase.FooterTab": Object.assign({}, footerTabTheme(variables)),
        "NativeBase.ListItem": Object.assign({}, listItemTheme(variables)),
        "NativeBase.ListItem1": Object.assign({}, listItemTheme(variables)),
        "NativeBase.Icon": Object.assign({}, iconTheme(variables)),
        "NativeBase.IconNB": Object.assign({}, iconTheme(variables)),
        "NativeBase.Text": Object.assign({}, textTheme(variables)),
        "NativeBase.Spinner": Object.assign({}, spinnerTheme()),
        "NativeBase.Fab": Object.assign({}, fabTheme(variables)),
        "NativeBase.Item": Object.assign({}, itemTheme(variables)),
        "NativeBase.Label": Object.assign({}, labelTheme()),
        "NativeBase.Textarea": Object.assign({}, textAreaTheme(variables)),
        "NativeBase.PickerNB": {
            "NativeBase.Button": {
                "NativeBase.Text": {},
            },
        },
        "NativeBase.Tab": Object.assign({}, tabTheme()),
        "NativeBase.Segment": Object.assign({}, segmentTheme(variables)),
        "NativeBase.TabBar": Object.assign({}, tabBarTheme(variables)),
        "NativeBase.ViewNB": Object.assign({}, viewTheme(variables)),
        "NativeBase.TabHeading": Object.assign({}, tabHeadingTheme(variables)),
        "NativeBase.TabContainer": Object.assign({}, tabContainerTheme(variables)),
        "NativeBase.Switch": Object.assign({}, switchTheme()),
        "NativeBase.Separator": Object.assign({}, separatorTheme(variables)),
        "NativeBase.SwipeRow": Object.assign({}, swipeRowTheme()),
        "NativeBase.Thumbnail": Object.assign({}, thumbnailTheme()),
    };
    const cssifyTheme = (grandparent, parent, parentKey) => {
        _.forEach(parent, (style, styleName) => {
            // console.log('styleName', styleName);
            // console.log('parentKey', parentKey);
            if (styleName.indexOf(".") === 0 && parentKey && parentKey.indexOf(".") === 0) {
                if (grandparent) {
                    if (!grandparent[styleName]) {
                        grandparent[styleName] = {};
                    }
                    else {
                        grandparent[styleName][parentKey] = style;
                    }
                }
            }
            if (style && typeof style === "object") {
                cssifyTheme(parent, style, styleName);
            }
        });
    };
    cssifyTheme(undefined, theme, undefined);
    return theme;
};
//# sourceMappingURL=index.js.map