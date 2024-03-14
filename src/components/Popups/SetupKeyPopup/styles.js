import styled from 'styled-components';

export const StyledSetupKeyPopup = styled.div`
    background: #10a37f;
    max-width: 600px;
    border-radius: 10px;
    box-shadow: 0 5px 30px 0 rgb(191 220 193 / 20%);
    color: white;
    font-size: 14px;

    .title {
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid rgb(191 220 193 / 30%);
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .close-btn {
            padding: 0px 3px;
            border-radius: 3px;
            background-color: #bfdcc1;
            cursor: pointer;
        }
    }

    .content {
        height: 100%;
        padding: 20px;
    }

    .input-container {
        display: flex;
        justify-content: center;
        flex-direction: column;

        label {
            margin-bottom: 10px;
            display: inline;
        }

        input {
            background-color: #bfdcc1;
            border: 0;
            border-radius: 5px;
            padding: 7px 10px;
            outline: none;
        }
    }

    .notes {
        a {
            color: white;
        }
    }

    .submit-btn {
        button {
            background-color: #bfdcc1;
            padding: 10px 20px;
            border-radius: 10px;
            cursor: pointer;
        }
    }
`;
