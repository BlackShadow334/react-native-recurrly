import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, ScrollView, Text, View } from "react-native";
import {
  fontFamilies,
  themes,
  themeModes,
  type ThemeMode,
} from "../../theme/theme";
import { useTheme } from "../../theme/ThemeProvider";

type ThemeChoiceProps = {
  mode: ThemeMode;
  selected: boolean;
  onSelect: (mode: ThemeMode) => void;
};

function ThemeChoice({ mode, selected, onSelect }: ThemeChoiceProps) {
  const palette = themes[mode];
  const isDark = mode === "dark";

  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ checked: selected }}
      accessibilityLabel={`${mode === "light" ? "Light" : "Dark"} theme`}
      onPress={() => onSelect(mode)}
      style={({ pressed }) => ({
        flex: 1,
        padding: 10,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: selected ? palette.accent : palette.border,
        backgroundColor: palette.surface,
        opacity: pressed ? 0.82 : 1,
      })}
    >
      <View
        style={{
          height: 88,
          borderRadius: 13,
          padding: 10,
          backgroundColor: palette.background,
          borderWidth: 1,
          borderColor: palette.border,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: palette.accent,
            }}
          />
          <View
            style={{
              width: 42,
              height: 6,
              borderRadius: 3,
              backgroundColor: palette.foreground,
              opacity: 0.75,
            }}
          />
        </View>
        <View
          style={{
            height: 25,
            borderRadius: 8,
            backgroundColor: palette.surface,
            borderColor: palette.border,
            borderWidth: 1,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 12,
        }}
      >
        <View>
          <Text
            style={{
              color: palette.foreground,
              fontFamily: fontFamilies.semibold,
              fontSize: 14,
            }}
          >
            {isDark ? "Dark" : "Light"}
          </Text>
          <Text
            style={{
              color: palette.mutedForeground,
              fontFamily: fontFamilies.regular,
              fontSize: 11,
              marginTop: 2,
            }}
          >
            {isDark ? "Easy on the eyes" : "Bright and clear"}
          </Text>
        </View>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            borderWidth: 1.5,
            borderColor: selected ? palette.accent : palette.mutedForeground,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {selected && (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: palette.accent,
              }}
            />
          )}
        </View>
      </View>
    </Pressable>
  );
}

export default function Settings() {
  const { mode, setMode, theme } = useTheme();

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: theme.background }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 22,
          paddingBottom: 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            color: theme.foreground,
            fontFamily: fontFamilies.extrabold,
            fontSize: 30,
            letterSpacing: -0.8,
          }}
        >
          Settings
        </Text>
        <Text
          style={{
            color: theme.mutedForeground,
            fontFamily: fontFamilies.regular,
            fontSize: 14,
            marginTop: 6,
          }}
        >
          Make Recurrly feel like yours.
        </Text>

        <View
          style={{
            marginTop: 32,
            marginBottom: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Text
            style={{
              color: theme.accent,
              fontFamily: fontFamilies.bold,
              fontSize: 11,
              letterSpacing: 1.2,
            }}
          >
            APPEARANCE
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: theme.border,
            }}
          />
        </View>

        <View
          style={{
            padding: 16,
            borderRadius: 24,
            borderWidth: 1,
            borderColor: theme.border,
            backgroundColor: theme.surface,
          }}
        >
          <Text
            style={{
              color: theme.foreground,
              fontFamily: fontFamilies.semibold,
              fontSize: 16,
            }}
          >
            Choose a theme
          </Text>
          <Text
            style={{
              color: theme.mutedForeground,
              fontFamily: fontFamilies.regular,
              fontSize: 12,
              lineHeight: 18,
              marginTop: 4,
              marginBottom: 16,
            }}
          >
            Pick the look that feels right. Your choice is saved on this device.
          </Text>
          <View style={{ flexDirection: "row", gap: 12 }}>
            {themeModes.map((themeMode) => (
              <ThemeChoice
                key={themeMode}
                mode={themeMode}
                selected={mode === themeMode}
                onSelect={setMode}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
