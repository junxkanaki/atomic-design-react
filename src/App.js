import { BrowserRouter } from "react-router-dom";

import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";

import "./styles.css";

export default function App() {
  const user = {
    name: "Juna",
    image: "https://source.unsplash.com/IuJc2qh2TcA",
    email: "abcd@eee.com",
    phone: "090-1234-5678",
    company: {
      name: "Juna株式会社"
    },
    website: "https://google.com"
  };
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>Test</PrimaryButton>
        <SecondaryButton>Search</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
