import { TransformedUpiId } from "../types";

export function transformUpiId(upiId: string): TransformedUpiId {
  const [prefix, rest] = upiId.split("://pay?");

  const params = rest.split("&").reduce((acc, param) => {
    const [key, value] = param.split("=", 2);
    (acc as any)[key] = value.replace("%20", " ");
    return acc;
  }, {});

  // @ts-ignore
  return { prefix, params, raw: upiId };
}
