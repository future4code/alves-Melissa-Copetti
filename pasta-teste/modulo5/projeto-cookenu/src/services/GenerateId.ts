import { v4 } from "uuid";

export class GenerateID {
  generate = (): string => {
    return v4();
  };
}
