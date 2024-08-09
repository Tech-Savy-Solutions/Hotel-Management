// src/utils/alertUtils.ts
import { notifications } from "@mantine/notifications"; // Assuming you're using Mantine's notification system

// Define types for the alert
interface AlertOptions {
  title: string;
  message: string;
  color?: "green" | "red" | "blue" | "orange"; // You can adjust colors based on your requirements
}

// Centralized function for showing alerts
export const showAlert = ({ title, message, color = "blue" }: AlertOptions) => {
  notifications.show({
    title: title,
    message: message,
    color,
  });
};
