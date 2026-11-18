import { fileURLToPath } from "node:url";
import { scanReviews } from "./review-status.mjs";

try {
  const report = scanReviews(fileURLToPath(new URL("../", import.meta.url)));
  console.table(report.byBook);
  console.table(report.groups);
  console.log("Total:", report.total);
  for (const error of report.errors) console.error(error);
  if (report.errors.length) process.exitCode = 1;
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
