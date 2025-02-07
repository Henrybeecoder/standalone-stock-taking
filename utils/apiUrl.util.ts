type BuildUrlParamsTypes = {
  endpoint: string;
  status?: string;
  desc?: "true" | "false";
};

type UrlParamsTypes = {
  status?: string;
  desc?: "true" | "false";
};

export class ApiUrl {
  private static mainBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  private static baseUrl = ApiUrl.mainBaseUrl + "/connector/api";
  public static clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  public static clientID = process.env.NEXT_PUBLIC_CLIENT_ID;

  private static buildUrlParams = ({
    endpoint,
    status,
  }: BuildUrlParamsTypes) => {
    let url = `${ApiUrl.baseUrl}${endpoint}`;
    const queryParams = new URLSearchParams();
    if (status) queryParams.append("status", status);
    return `${url}${
      queryParams.toString() ? `?${queryParams.toString()}` : ""
    }`;
  };

  //User authentication
  public static login = `${ApiUrl.mainBaseUrl}/oauth/token`;

  //stock-adjustment
  public static stockTaking = `${ApiUrl.baseUrl}/stock-taking`;

  //products
  public static getProducts = `${ApiUrl.baseUrl}/product`;

  //business location
  public static getBusinessLocations = `${ApiUrl.baseUrl}/business-location`;
}
