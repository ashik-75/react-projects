import SanityClient from "@sanity/client";

const client = SanityClient({
  projectId: "v8jilevo",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
  token:
    "skFh2fEIX5H870UJtq0RO258kpxb40aFQ3FwKEai0VJfTUQrpPlptOtSkPEw4BORRJXw0Z1oPkYQAS5WGjCsEXLa1N1zEN2ziwYBCLORoPR65JMlSbvE03EWgYIaJoU5SCUBGrMjsqakYvTqeRrMug0mWR8T55sOw7hCDt8u4DfZCMwzG0Oh",
});

export default client;
