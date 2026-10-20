export type Subscription = {
  id: string;
  name: string;
  category: string;
  monthlyPrice: number;
  renewalDay: number;
  icon: number;
};

export const sampleSubscriptions: Subscription[] = [
  {
    id: "netflix",
    name: "Netflix",
    category: "Entertainment",
    monthlyPrice: 17.99,
    renewalDay: 23,
    icon: require("../../../../assets/icons/netflix.png"),
  },
  {
    id: "spotify",
    name: "Spotify",
    category: "Music",
    monthlyPrice: 11.99,
    renewalDay: 25,
    icon: require("../../../../assets/icons/spotify.png"),
  },
  {
    id: "claude",
    name: "Claude",
    category: "Productivity",
    monthlyPrice: 20,
    renewalDay: 27,
    icon: require("../../../../assets/icons/claude.png"),
  },
  {
    id: "adobe",
    name: "Adobe",
    category: "Design",
    monthlyPrice: 22.99,
    renewalDay: 5,
    icon: require("../../../../assets/icons/adobe.png"),
  },
  {
    id: "dropbox",
    name: "Dropbox",
    category: "Storage",
    monthlyPrice: 11.99,
    renewalDay: 12,
    icon: require("../../../../assets/icons/dropbox.png"),
  },
];

export function getNextRenewalDate(
  renewalDay: number,
  today = new Date(),
): Date {
  const getDateInMonth = (year: number, month: number) =>
    new Date(
      year,
      month,
      Math.min(renewalDay, new Date(year, month + 1, 0).getDate()),
      12,
    );

  const renewal = getDateInMonth(today.getFullYear(), today.getMonth());
  const startOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  if (renewal < startOfToday) {
    return getDateInMonth(today.getFullYear(), today.getMonth() + 1);
  }

  return renewal;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function formatRenewalDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}
