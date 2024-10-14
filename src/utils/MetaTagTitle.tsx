import { Metadata } from "next";
import Head from "next/head";

interface MetaTagTitleProps {
  title: string;
  ko?: boolean;
};

export default function MetaTagTitle({ title, ko = true }: MetaTagTitleProps) {
  return (
    <title>
      {(title?.length > 0)
        ? `${title} | ${(ko) ? '제핏' : 'Zefit'}`
        : `${(ko) ? '제핏' : 'Zefit'}`}
    </title>
  )
};