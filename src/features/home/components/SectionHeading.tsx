import { Text, View } from "react-native";
import { fontFamilies } from "../../../theme/theme";
import { useTheme } from "../../../theme/ThemeProvider";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 14,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: theme.foreground,
            fontFamily: fontFamilies.bold,
            fontSize: 19,
            letterSpacing: -0.35,
          }}
        >
          {title}
        </Text>
        {subtitle ? (
          <Text
            style={{
              color: theme.mutedForeground,
              fontFamily: fontFamilies.regular,
              fontSize: 12,
              marginTop: 3,
            }}
          >
            {subtitle}
          </Text>
        ) : null}
      </View>
    </View>
  );
}
