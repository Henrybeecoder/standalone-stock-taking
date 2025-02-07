import { StaticImageData } from "next/image";
import home_icon from "@/public/assets/icons/navbar/home_icon.svg";
import expense_icon from "@/public/assets/icons/navbar/expense_icon.svg";
import payment_accounts_icon from "@/public/assets/icons/navbar/payment_accounts_icon.svg";
import notification_template_icon from "@/public/assets/icons/navbar/notification_template_icon.svg";
import settings_icon from "@/public/assets/icons/navbar/settings_icon.svg";
import woocommerce_icon from "@/public/assets/icons/navbar/woocommerce_icon.svg";
import connector_icon from "@/public/assets/icons/navbar/connector_icon.svg";
import user_management_icon from "@/public/assets/icons/navbar/user_management_icon.svg";
import reports_icon from "@/public/assets/icons/navbar/reports_icon.svg";
import product_icon from "@/public/assets/icons/navbar/product_icon.svg";
import purchases_icon from "@/public/assets/icons/navbar/purchases_icon.svg";
import sell_icon from "@/public/assets/icons/navbar/sell_icon.svg";
import stock_transfer_icon from "@/public/assets/icons/navbar/stock_transfer_icon.svg";
import stock_adjustment_icon from "@/public/assets/icons/navbar/stock_adjustment_icon.svg";
import contact_icon from "@/public/assets/icons/navbar/contact_icon.svg";

type SidebarDataProps =
  | {
      name: string;
      href: string;
      icon: string | StaticImageData;
      children: null;
    }
  | {
      name: string;
      icon: string | StaticImageData;
      href: null;
      children: { name: string; href: string }[];
    };

export const sidebarData: SidebarDataProps[] = [
  {
    name: "Home",
    href: null,
    icon: home_icon,
    children: [{ name: "", href: "" }],
  },
  {
    name: "User Management",
    href: null,
    icon: user_management_icon,
    children: [{ name: "", href: "" }],
  },
  {
    name: "Contact",
    href: null,
    icon: contact_icon,
    children: [{ name: "", href: "" }],
  },
  {
    name: "Product",
    href: null,
    icon: product_icon,
    children: [{ name: "", href: "" }],
  },
  {
    name: "Purchases",
    href: null,
    icon: purchases_icon,
    children: [{ name: "", href: "" }],
  },
  {
    name: "Sell",
    href: null,
    icon: sell_icon,
    children: [{ name: "", href: "" }],
  },
  {
    name: "Stock Transfer",
    href: null,
    icon: stock_transfer_icon,
    children: [{ name: "", href: "" }],
  },
  {
    name: "Stock Adjustment",
    href: null,
    icon: stock_adjustment_icon,
    children: [
      { name: "Stock Taking", href: "/stock-adjustment/stock-taking" },
      {
        name: "List Stock Adjustment",
        href: "/stock-adjustment/list-stock-adjustment",
      },
    ],
  },
  {
    name: "Expense",
    href: null,
    icon: expense_icon,
    children: [{ name: "", href: "" }],
  },
  {
    name: "Payment Accounts",
    href: null,
    icon: payment_accounts_icon,
    children: [{ name: "", href: "" }],
  },
  {
    name: "Reports",
    href: null,
    icon: reports_icon,
    children: [{ name: "", href: "" }],
  },
  {
    name: "Notification Template",
    href: "",
    icon: notification_template_icon,
    children: null,
  },
  {
    name: "Settings",
    href: null,
    icon: settings_icon,
    children: [{ name: "", href: "" }],
  },
  {
    name: "WooCommerce",
    href: null,
    icon: woocommerce_icon,
    children: [{ name: "", href: "" }],
  },
  {
    name: "Connector",
    href: connector_icon,
    icon: "",
    children: null,
  },
];
