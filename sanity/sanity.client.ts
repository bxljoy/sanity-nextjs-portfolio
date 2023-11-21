// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "nm6ucsbr",
  dataset: "production",
  apiVersion: "2023-11-11",
  useCdn: false,
};

const client = createClient(config);

export default client;