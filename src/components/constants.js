import Trash from './Svg/Trash';
import Theme from './Svg/Theme';
import Key from './Svg/Key';

export const nav_items = ({ fill, darkTheme }) => {
    return [
        {
            icon: <Key fill={fill} />,
            title: 'Setup API key'
        },
        {
            icon: <Trash fill={fill} />,
            title: 'Clear Conversation'
        },
        {
            icon: <Theme fill={fill} />,
            title: darkTheme ? 'Light Mode' : 'Dark Mode'
        }
    ];
};

export const WELCOME_MSG =
    'Welcome to JsGPT. Try me by asking questions related to JavaScript, ReactJs, NextJs, HTML & CSS.';

export const BOOKMARKS = [
    { id: 1, question: 'What is Javascript?' },
    { id: 2, question: "What's the typeof NaN" },
    { id: 3, question: 'Explain Scope chain' },
    { id: 4, question: 'Main Thread blocking' }
];

export const INITIAL_DATA_STATE = {
    ques: '',
    ans: WELCOME_MSG,
    error: ''
};
