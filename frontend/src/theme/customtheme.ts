import { createTheme, MantineThemeOverride } from '@mantine/core';
import { HEX_COLORS } from 'src/common/constants/colors';


const customtheme: MantineThemeOverride = createTheme({
    /** Put your mantine theme override here */
    colors: {
        primary: [
            HEX_COLORS.primary, HEX_COLORS.primary, HEX_COLORS.primary, HEX_COLORS.primary, HEX_COLORS.primary,
            HEX_COLORS.primary, HEX_COLORS.primary, HEX_COLORS.primary, HEX_COLORS.primary, HEX_COLORS.primary
        ],
        secondary: [
            HEX_COLORS.secondary, HEX_COLORS.secondary, HEX_COLORS.secondary, HEX_COLORS.secondary, HEX_COLORS.secondary,
            HEX_COLORS.secondary, HEX_COLORS.secondary, HEX_COLORS.secondary, HEX_COLORS.secondary, HEX_COLORS.secondary
        ],
        background: [
            HEX_COLORS.background, HEX_COLORS.background, HEX_COLORS.background, HEX_COLORS.background, HEX_COLORS.background,
            HEX_COLORS.background, HEX_COLORS.background, HEX_COLORS.background, HEX_COLORS.background, HEX_COLORS.background
        ],
        textPrimary: [
            HEX_COLORS.textPrimary, HEX_COLORS.textPrimary, HEX_COLORS.textPrimary, HEX_COLORS.textPrimary, HEX_COLORS.textPrimary,
            HEX_COLORS.textPrimary, HEX_COLORS.textPrimary, HEX_COLORS.textPrimary, HEX_COLORS.textPrimary, HEX_COLORS.textPrimary
        ],
        textSecondary: [
            HEX_COLORS.textSecondary, HEX_COLORS.textSecondary, HEX_COLORS.textSecondary, HEX_COLORS.textSecondary, HEX_COLORS.textSecondary,
            HEX_COLORS.textSecondary, HEX_COLORS.textSecondary, HEX_COLORS.textSecondary, HEX_COLORS.textSecondary, HEX_COLORS.textSecondary
        ],
        lightBlue: [
            HEX_COLORS.lightBlue, HEX_COLORS.lightBlue, HEX_COLORS.lightBlue, HEX_COLORS.lightBlue, HEX_COLORS.lightBlue,
            HEX_COLORS.lightBlue, HEX_COLORS.lightBlue, HEX_COLORS.lightBlue, HEX_COLORS.lightBlue, HEX_COLORS.lightBlue
        ],
        vibrantGreen: [
            HEX_COLORS.vibrantGreen, HEX_COLORS.vibrantGreen, HEX_COLORS.vibrantGreen, HEX_COLORS.vibrantGreen, HEX_COLORS.vibrantGreen,
            HEX_COLORS.vibrantGreen, HEX_COLORS.vibrantGreen, HEX_COLORS.vibrantGreen, HEX_COLORS.vibrantGreen, HEX_COLORS.vibrantGreen
        ],
        sunnyYellow: [
            HEX_COLORS.sunnyYellow, HEX_COLORS.sunnyYellow, HEX_COLORS.sunnyYellow, HEX_COLORS.sunnyYellow, HEX_COLORS.sunnyYellow,
            HEX_COLORS.sunnyYellow, HEX_COLORS.sunnyYellow, HEX_COLORS.sunnyYellow, HEX_COLORS.sunnyYellow, HEX_COLORS.sunnyYellow
        ],
        softPink: [
            HEX_COLORS.softPink, HEX_COLORS.softPink, HEX_COLORS.softPink, HEX_COLORS.softPink, HEX_COLORS.softPink,
            HEX_COLORS.softPink, HEX_COLORS.softPink, HEX_COLORS.softPink, HEX_COLORS.softPink, HEX_COLORS.softPink
        ],
    },
    primaryColor: 'primary', // Primary color for Mantine components
    white: HEX_COLORS.background, // Background color
    black: HEX_COLORS.textPrimary, // Text color


});

export default customtheme