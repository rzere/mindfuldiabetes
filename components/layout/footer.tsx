import { BuyMeACoffee } from "../shared/icons";

export default function Footer() {
  return (
    <div className="absolute w-full py-5 text-center">
      <p className="text-gray-500">
        View our {" "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="https://us.umami.is/share/im7OHDz0Lwkhjb2c"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Analytics.
        </a>
      </p>
    </div>
  );
}
