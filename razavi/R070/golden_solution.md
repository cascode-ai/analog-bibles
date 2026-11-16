# Golden Solution - R070

## Reference answer

$V_{out} = 1$ V: $V_{in} \approx 1.086$ V; $V_{out} = 2.5$ V: $V_{in} \approx 0.893$ V.

- $V_{out} = 1$ V: $I_D = (3-1)/2\ \mathrm{k\Omega} = 1$ mA, overdrive $\sqrt{2(1\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.386$ V, $V_{in} = 1.086$ V; $V_{DS} = 1$ V > 0.386 V, so saturated.
- $V_{out} = 2.5$ V: $I_D = 0.25$ mA, overdrive 0.193 V, $V_{in} = 0.893$ V (saturated).

## Grading notes

+2: both inputs within ±0.01 V (1.086 V and 0.893 V). +1: one value right and the other with an arithmetic slip. 0: right method, both values off by slips. -2 (asserted as fact): triode equation used, $V_{TH}$ omitted ($V_{in}$ = overdrive), or currents not derived from $(V_{DD} - V_{out})/R_D$.
