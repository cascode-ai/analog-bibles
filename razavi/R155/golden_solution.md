# Golden Solution - R155

## Reference answer

$V_{GS} - V_{TH} = \sqrt{I_{SS}/(\mu_nC_{ox}W/L)} = \sqrt{1\ \mathrm{mA}/(134\ \mu\mathrm{A/V^2}\times 100)} \approx 0.273$ V.
- At equilibrium each device carries $I_{SS}/2 = 0.5$ mA: $\tfrac12(13.4\ \mathrm{mA/V^2})(V_{GS}-V_{TH})^2 = 0.5$ mA.

## Grading notes

+2: 0.273 V (±3%). +1: arithmetic slip within ±10%. 0: correct formula, wrong arithmetic beyond that. -2 (asserted as fact): using the full 1 mA per device (0.386 V), omitting the factor 1/2 (0.193 V), or a wrong $\mu_nC_{ox}$ usage.
