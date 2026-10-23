const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const href = (path: string) => `${base}${path}`;

export const repoUrl = "https://github.com/bagelface/proofed";
export const breadUrl = "https://bread.coop";
export const stacksUrl = "https://docs.bread.coop/tools/stacks/how-stacks-works/";
export const formsEndpoint: string | undefined = import.meta.env.PUBLIC_FORMS_ENDPOINT;
