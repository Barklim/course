export enum Theme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
    ORANGE = 'app_orange_theme',
}

export enum CardColorEnum {
    Purple = 1,
    Orange = 2,
    Red = 3,
    Green = 4,
    Blue = 5
}

export function getGradientColor(cardColor: CardColorEnum, theme?: Theme): string {
    if (theme === Theme.DARK) {
        switch (cardColor) {
            case CardColorEnum.Purple:
                return 'linear-gradient(224deg, #8D5DDA 0%, #6F28E2 100%)';
            case CardColorEnum.Orange:
                return 'linear-gradient(231deg, #EF7B3C 0%, #EF923C 100%)';
            case CardColorEnum.Red:
                return 'linear-gradient(43deg, #FF6E56 0%, #FF4D30 100%)';
            case CardColorEnum.Green:
                return 'linear-gradient(224deg, #6FD964 0%, #274c23 100%)';
            case CardColorEnum.Blue:
                return 'linear-gradient(224deg, #7AD3EB 0%, #146d85 100%)';
            default:
                return 'linear-gradient(224deg, #8D5DDA 0%, #6F28E2 100%)';
        }
    } else if (theme === Theme.LIGHT) {
        switch (cardColor) {
            case CardColorEnum.Purple:
                return 'linear-gradient(224deg, #a789d9 0%, #8c56e3 100%)';
            case CardColorEnum.Orange:
                return 'linear-gradient(231deg, #f09a6c 0%, #f0ac6c 100%)';
            case CardColorEnum.Red:
                return 'linear-gradient(43deg, #ff9b8a 0%, #ff7863 100%)';
            case CardColorEnum.Green:
                return 'linear-gradient(224deg, #96d98f 0%, #8dcc85 100%)';
            case CardColorEnum.Blue:
                return 'linear-gradient(224deg, #a5e1f3 0%, #4ec4e4 100%)';
            default:
                return 'linear-gradient(224deg, #a789d9 0%, #8c56e3 100%)';
        }
    } else if (theme === Theme.ORANGE) {
        switch (cardColor) {
            case CardColorEnum.Purple:
                return 'linear-gradient(224deg, #b589d9 0%, #a456e3 100%)';
            case CardColorEnum.Orange:
                return 'linear-gradient(231deg, #f0b06c 0%, #f0c26c 100%)';
            case CardColorEnum.Red:
                return 'linear-gradient(43deg, #ffaf8a 0%, #ff9263 100%)';
            case CardColorEnum.Green:
                return 'linear-gradient(224deg, #8fd994 0%, #85cc89 100%)';
            case CardColorEnum.Blue:
                return 'linear-gradient(224deg, #91ede4 0%, #64e3d4 100%)';
            default:
                return 'linear-gradient(224deg, #b589d9 0%, #a456e3 100%)';
        }
    }
    else {
        switch (cardColor) {
            case CardColorEnum.Purple:
                return 'linear-gradient(224deg, #8D5DDA 0%, #6F28E2 100%)';
            case CardColorEnum.Orange:
                return 'linear-gradient(231deg, #EF7B3C 0%, #EF923C 100%)';
            case CardColorEnum.Red:
                return 'linear-gradient(43deg, #FF6E56 0%, #FF4D30 100%)';
            case CardColorEnum.Green:
                return 'linear-gradient(224deg, #6FD964 0%, #274c23 100%)';
            case CardColorEnum.Blue:
                return 'linear-gradient(224deg, #7AD3EB 0%, #146d85 100%)';
            default:
                return 'linear-gradient(224deg, #8D5DDA 0%, #6F28E2 100%)';
        }
    }
}
