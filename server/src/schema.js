import { readFileSync } from "fs";

export default function readSchema() {
    return readFileSync("src/schema.graphql").toString("utf-8");
}
