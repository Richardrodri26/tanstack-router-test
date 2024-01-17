import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

interface IGlobalStyle {
    main: string;
    contraryMain: string;
    mainColorA2: string;
    scroll: string;
    scrollHover: string;
    opacityMain: string
}

const GlobalStyle = createGlobalStyle<IGlobalStyle>`
    :root {
      --component_bg: white;
      --shadow: 0 1px 4px rgb(0 0 0 / 12%), 0 1px 6px rgb(0 0 0 / 24%);
      --border_shadow_lg: rgba(0, 0, 0, 0.388);
      --border_shadow_sm: rgba(0, 0, 0, 0.177);

      /*--------------------custome--------------------*/

      ${(themes) => `
            --scroll: ${themes.scroll};
            --scroll_hover: ${themes.scrollHover}; 
            --main_color: ${themes.main};
            --contrary_main_color: ${themes.contraryMain};
            --main_color_a2: ${themes.mainColorA2};
            --opacity_main_color: ${themes.opacityMain};
      `}

      /*--------------------default--------------------*/
      --stroke_color: #4B4B4B;
      --stroke_secundary_color: #737373;
      --reverse_stroke_color: white;
      --stroke_disabled: #BABABA;

      --stroke_secondary_color: rgb(8, 26, 58);

      --text_disabled: #F2F2F2;
      --stroke_disabled: #b1b1b191;
    }
`;

export const UtilGlobalClassStyle = createGlobalStyle`
    .swal2-modal, .swal2-top-end {
        h2 {
            font-family: 'Montserrat', sans-serif;
        }       
        #swal2-html-container {
            font-family: 'Work Sans', sans-serif;
        }
        .sweet__bg__warning {
            background-color: var(--warning_color);
        }
        .sweet__custome__icon {
            border: none !important;

            /* & > div > svg > fill {
                fill: var(--main_color) !important;
            } */
            
        }
        .swal2-actions button:focus {
            box-shadow: none !important;
            outline: none !important;
        }
    }

    .warning {
        color: var(--warning_color);
    }

    .success {
        color: var(--success_color);
    }

    .info {
        color: var(--info_color);
    }
    
    .error {
        color: var(--error_color);
    }

    .cancel__sweet {
        background: var(--reverse_stroke_color) !important;
        border: 2px solid var(--error_color) !important;
        color: var(--error_color) !important;
    }

    .sucess__sweet {
        background: var(--main_color) !important;
        color: var(--reverse_stroke_color) !important;
        /* border-radius: 50%; */
    }
    .error__sweet {
        background: var(--error_color) !important;
        color: var(--reverse_stroke_color) !important;
    }
    .warning__sweet {
        background: var(--warning_color) !important;
        color: var(--reverse_stroke_color) !important;
    }

    .switch__btn__wrapper {
        cursor: pointer;
        width: 36px;
        height: 20px;
        border-width: 1px;
        border-style: solid;
        background-color: var(--stroke_disabled);
        border-color: var(--stroke_disabled);
        border-radius: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
        &[data-active="true"] {
            justify-content: flex-end;
            background-color: var(--main_color);
            border-color: var(--main_color);
        }

        & > div {
            width: 16px;
            height: 16px;
            background-color: var(--component_bg);
            border-radius: 50%;
        }
    }
`

const appColors: { [key: string]: IGlobalStyle } = {
    "BlueThemeResponsive": {
        main: "rgb(0, 72, 132)",
        contraryMain: "rgb(0, 43, 80)",
        opacityMain: "rgb(230, 239, 253)",
        mainColorA2: "rgba(0, 136, 255, 0.145)",
        scroll: "rgb(2, 77, 139)",
        scrollHover: "rgb(1, 37, 69)"
    },
    "GreenThemeResponsive": {
        main: "rgb(19, 155, 30)",
        contraryMain: "rgb(15, 119, 24)",
        mainColorA2: "rgba(19, 155, 30, 0.145)",
        scroll: "rgb(17, 140, 28)",
        scrollHover: "rgb(16, 125, 25)",
        opacityMain: "rgba(205, 230, 223, 0.427)",
    },
    "RedThemeResponsive": {
        main: "rgb(168, 5, 33)",
        contraryMain: "rgb(132, 0, 22)",
        opacityMain: "rgb(238, 205, 210)",
        mainColorA2: "rgb(116, 1, 20)",
        scroll: "rgb(179, 6, 35)",
        scrollHover: "rgb(157, 4, 30)"
    },
    "PurpleThemeResponsive": {
        main: "rgb(83, 54, 201)",
        contraryMain: "rgb(63, 46, 135)",
        opacityMain: "rgb(221, 215, 244)",
        mainColorA2: "rgb(54, 40, 116)",
        scroll: "rgb(91, 60, 216)",
        scrollHover: "rgb(76, 49, 185)"
    },
    "OrangeThemeResponsive": {
        main: "rgb(243, 86, 31)",
        contraryMain: "rgb(172, 45, 0)",
        opacityMain: "rgb(255, 219, 205)",
        mainColorA2: "rgb(150, 41, 1)",
        scroll: "rgb(253, 92, 34)",
        scrollHover: "rgb(226, 81, 28)"
    },
    "DarkturquoiseThemeResponsive": {
        main: "rgb(0, 191, 168)",
        contraryMain: "rgb(0, 145, 130)",
        opacityMain: "rgb(204, 242, 238)",
        mainColorA2: "rgb(0, 122, 110)",
        scroll: "rgb(0, 210, 186)",
        scrollHover: "rgb(0, 168, 148)"
    },
    "BrownThemeResponsive": {
        main: "rgb(137, 63, 51)",
        contraryMain: "rgb(94, 51, 38)",
        opacityMain: "rgb(231, 217, 214)",
        mainColorA2: "rgb(78, 42, 31)",
        scroll: "rgb(159, 74, 60)",
        scrollHover: "rgb(116, 53, 44)"
    },
    "PinkThemeResponsive": {
        main: "rgb(217, 58, 142)",
        contraryMain: "rgb(170, 32, 105)",
        opacityMain: "rgb(255, 218, 237)",
        mainColorA2: "rgb(158, 30, 98)",
        scroll: "rgb(203, 54, 133)",
        scrollHover: "rgb(172, 46, 113)",
    },
    "RadicalRedThemeResponsive": {
        main: "rgb(244, 47, 99)",
        contraryMain: "rgb(179, 9, 55)",
        opacityMain: "rgb(238, 205, 210)",
        mainColorA2: "rgb(161, 8, 49)",
        scroll: "rgb(226, 43, 92)",
        scrollHover: "rgb(207, 39, 84)",
    }
}

const DynamicGlobalStyle = () => {

    const [colors, setColors] = useState<IGlobalStyle>(appColors.GreenThemeResponsive)

    useEffect(() => {
        const timer = setTimeout(() => {
            setColors(appColors.GreenThemeResponsive)
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

    return (<GlobalStyle {...colors} />)
}

export default DynamicGlobalStyle;

