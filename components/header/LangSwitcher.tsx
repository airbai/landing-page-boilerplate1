"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams, useRouter } from "next/navigation";

import { defaultLocale, localeNames } from "@/lib/i18n";

export const LangSwitcher = () => {
  const params = useParams();
  const langParam = params?.lang;
  const lang = Array.isArray(langParam) ? langParam[0] : langParam;

  const langName = lang && lang !== "index" ? lang : defaultLocale;
  const router = useRouter();

  const handleSwitchLanguage = (value: string) => {
    if (value === defaultLocale) {
      router.push("/");
      return;
    }
    router.push(value);
  };

  return (
    <Select value={langName} onValueChange={handleSwitchLanguage}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(localeNames).map((key: string) => {
          const name = localeNames[key];
          return (
            <SelectItem className="cursor-pointer" key={key} value={key}>
              {name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
